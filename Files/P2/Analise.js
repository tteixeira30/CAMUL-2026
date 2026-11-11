// P2 — análise do questionário (D5) e da codificação das respostas abertas.
// Uso (na pasta Files/P2):
//   node Analise.js --teste               verifica as contas e corre tudo com 26 respostas INVENTADAS (saída numa pasta temporária)
//   node Analise.js Dados/Respostas.csv   respostas reais (Google Sheets → Ficheiro → Transferir → CSV)
// Saídas reais: Dados/Resultados.md · Figuras/Figura6.png (vídeo vs. interativa) · Figuras/Figura7.png (SUS)
//               Dados/Codificacao_Modelo.csv (para os codificadores) e, se existirem Dados/Codificacao_Rodrigo.csv
//               e Dados/Codificacao_Ricardo.csv, a % de concordância e o kappa de Cohen.
const fs = require('fs');
const os = require('os');
const path = require('path');
const assert = require('assert');
const { execFileSync } = require('child_process');

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const CATEGORIAS = ['Navegação', 'Encontrar tags', 'Compreensão do espaço', 'Desempenho e dispositivo', 'Áudio e vídeo', 'Avaliação', 'Outro'];
const AFIRMACOES_EN = ['I understood the layout of the home', 'I understood where the risks and the kit are', 'It held my attention', 'The length was appropriate'];

// ---------- estatística ----------
const soma = a => a.reduce((s, x) => s + x, 0);
const media = a => soma(a) / a.length;
const dp = a => { const m = media(a); return Math.sqrt(soma(a.map(x => (x - m) ** 2)) / (a.length - 1)); };
const mediana = a => { const s = [...a].sort((x, y) => x - y), h = s.length >> 1; return s.length % 2 ? s[h] : (s[h - 1] + s[h]) / 2; };

// SUS (Brooke): ímpares = r − 1, pares = 5 − r, soma × 2,5 → 0–100
const sus = r => 2.5 * soma(r.map((x, i) => (i % 2 === 0 ? x - 1 : 5 - x)));

// Φ(z) pela aproximação de Abramowitz & Stegun 7.1.26 (erro < 1,5e-7)
function normCdf(z) {
  const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2);
  const erf = 1 - t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429)))) * Math.exp(-(z * z) / 2);
  return z >= 0 ? (1 + erf) / 2 : (1 - erf) / 2;
}

// Wilcoxon para amostras emparelhadas: aproximação normal, correção de empates e de continuidade (bilateral).
// ponytail: aproximação normal mesmo com n pequeno; o plano já manda ficar só na descritiva com N < 20.
function wilcoxon(x, y) {
  const d = x.map((v, i) => y[i] - v).filter(v => v !== 0);
  const n = d.length;
  if (n === 0) return { n, wMais: 0, z: 0, p: 1, r: 0 };
  const ord = d.map((v, i) => [Math.abs(v), i]).sort((a, b) => a[0] - b[0]);
  const rank = new Array(n);
  let empates = 0;
  for (let i = 0; i < n;) {
    let j = i; while (j + 1 < n && ord[j + 1][0] === ord[i][0]) j++;
    const t = j - i + 1; empates += t ** 3 - t;
    for (let k = i; k <= j; k++) rank[ord[k][1]] = (i + j) / 2 + 1;
    i = j + 1;
  }
  const wMais = soma(d.map((v, i) => (v > 0 ? rank[i] : 0)));
  const mu = n * (n + 1) / 4;
  const sigma = Math.sqrt(n * (n + 1) * (2 * n + 1) / 24 - empates / 48);
  const z = sigma ? Math.sign(wMais - mu) * Math.max(0, Math.abs(wMais - mu) - 0.5) / sigma : 0;
  return { n, wMais, z, p: 2 * (1 - normCdf(Math.abs(z))), r: Math.abs(z) / Math.sqrt(n) };
}

function kappa(a, b) {
  const n = a.length, cats = [...new Set([...a, ...b])];
  const po = soma(a.map((x, i) => (x === b[i] ? 1 : 0))) / n;
  const pe = soma(cats.map(c => (a.filter(x => x === c).length / n) * (b.filter(x => x === c).length / n)));
  return { po, k: pe === 1 ? 1 : (po - pe) / (1 - pe) };
}

// ---------- CSV ----------
function lerCsv(texto) {
  texto = texto.replace(/^\uFEFF/, '');
  const sep = (texto.split('\n')[0].match(/;/g) || []).length > (texto.split('\n')[0].match(/,/g) || []).length ? ';' : ',';
  const linhas = []; let linha = [], campo = '', aspas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (aspas) { if (c === '"' && texto[i + 1] === '"') { campo += '"'; i++; } else if (c === '"') aspas = false; else campo += c; }
    else if (c === '"') aspas = true;
    else if (c === sep) { linha.push(campo); campo = ''; }
    else if (c === '\n') { linha.push(campo.replace(/\r$/, '')); linhas.push(linha); linha = []; campo = ''; }
    else campo += c;
  }
  if (campo || linha.length) { linha.push(campo); linhas.push(linha); }
  return linhas.filter(l => l.some(c => c.trim()));
}
const csv = linhas => '\uFEFF' + linhas.map(l => l.map(c => /[;"\n]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c).join(';')).join('\r\n') + '\r\n';

// Colunas pela ordem do Forms (P2_Questionario.md). A D3 é opcional: se o Tiago a tirar, há menos uma coluna.
function colunas(nCols) {
  const nomes = ['hora', 'A1', 'A2', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2_1', 'C2_2', 'C2_3', 'C2_4', 'D1', 'D2', 'D3',
    'D4_1', 'D4_2', 'D4_3', 'D4_4', ...Array.from({ length: 10 }, (_, i) => `E_${i + 1}`), 'F1', 'F2', 'F3'];
  if (nCols === nomes.length) return nomes;
  if (nCols === nomes.length - 1) return nomes.filter(n => n !== 'D3');
  throw new Error(`O CSV tem ${nCols} colunas; esperava ${nomes.length} (ou ${nomes.length - 1} sem a D3). Confirmar a ordem das perguntas.`);
}

// ---------- análise ----------
function analisar(linhas) {
  const nomes = colunas(linhas[0].length);
  const todas = linhas.slice(1).map(l => Object.fromEntries(nomes.map((n, i) => [n, (l[i] || '').trim()])));
  const r = todas.filter(x => x.A1 === 'Sim' && x.A2.startsWith('Sim'));
  const num = v => { const n = Number(v); if (!(n >= 1 && n <= 5)) throw new Error(`Valor de Likert inválido: «${v}»`); return n; };
  r.forEach(x => {
    x.sus = sus(Array.from({ length: 10 }, (_, i) => num(x[`E_${i + 1}`])));
    x.movel = x.B4 !== 'Computador (portátil ou fixo)';
  });
  const comVideo = r.filter(x => x.C1 === 'Sim');
  const pares = [1, 2, 3, 4].map(i => {
    const v = comVideo.map(x => num(x[`C2_${i}`])), it = comVideo.map(x => num(x[`D4_${i}`]));
    return { i, v, it, w: wilcoxon(v, it) };
  });
  return { total: todas.length, r, comVideo, pares };
}

const conta = (r, campo) => Object.entries(r.reduce((o, x) => { o[x[campo]] = (o[x[campo]] || 0) + 1; return o; }, {}))
  .sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}: ${v}`).join(' · ');
const f1 = (x, d = 1) => x.toFixed(d).replace('.', ',');
const pFmt = p => (p < 0.001 ? '< 0,001' : f1(p, 3));

function relatorio(a, teste) {
  const { r, comVideo, pares } = a, s = r.map(x => x.sus);
  const enc = g => { const t = r.filter(g); return t.length ? `${t.filter(x => x.D1 === 'As 3').length}/${t.length} (${f1(100 * t.filter(x => x.D1 === 'As 3').length / t.length, 0)} %)` : '—'; };
  const L = [];
  L.push(`# P2 — Resultados do questionário (D5)${teste ? ' — DADOS INVENTADOS (teste)' : ''}`, '');
  L.push(`Gerado por \`Analise.js\` a ${new Date().toLocaleDateString('pt-PT')}. ${teste ? '**Números de teste: não usar no artigo.**' : 'Não editar à mão: correr o script outra vez.'}`, '');
  L.push('## Amostra', '', `- Respostas: ${a.total} · aceitaram participar: **N = ${r.length}** · viram o vídeo até ao fim: ${comVideo.length} (excluídos da comparação: ${r.length - comVideo.length})`);
  for (const [c, t] of [['B1', 'Idade'], ['B2', 'Cuidador'], ['B3', 'Visitas 3D antes'], ['B4', 'Aparelho']]) L.push(`- ${t}: ${conta(r, c)}`);
  if (r.length < 20) L.push('', `> ⚠ N = ${r.length} < 20: o plano manda ficar só na estatística descritiva (o Wilcoxon fica no relatório, mas não entra no artigo).`);
  L.push('', '## SUS (visita interativa)', '', `- Média **${f1(media(s))}** · DP ${f1(dp(s))} · mediana ${f1(mediana(s))} · mín. ${f1(Math.min(...s))} · máx. ${f1(Math.max(...s))}`);
  L.push(`- ≥ 68 (referência): ${s.filter(x => x >= 68).length}/${s.length} (${f1(100 * s.filter(x => x >= 68).length / s.length, 0)} %)`);
  const sm = r.filter(x => x.movel).map(x => x.sus), sc = r.filter(x => !x.movel).map(x => x.sus);
  L.push(`- Telemóvel/tablet: média ${sm.length ? f1(media(sm)) : '—'} (n = ${sm.length}) · computador: média ${sc.length ? f1(media(sc)) : '—'} (n = ${sc.length})`);
  L.push('', '## Tarefa: encontrar as 3 tags', '', `- Encontraram as 3: todos ${enc(() => true)} · telemóvel/tablet ${enc(x => x.movel)} · computador ${enc(x => !x.movel)}`);
  L.push(`- Tempo: ${conta(r, 'D2')}`);
  if (r.some(x => 'D3' in x)) L.push(`- Como chegaram (D3, várias): ${conta(r.flatMap(x => (x.D3 || '').split(/;\s*|,\s*(?=[A-ZÁÉ])/).filter(Boolean).map(D3 => ({ D3 }))), 'D3')}`);
  L.push('', '## Vídeo vs. visita interativa (C2 vs. D4, Wilcoxon emparelhado, interativa − vídeo)', '');
  L.push('| Afirmação | Mediana vídeo | Mediana interativa | Média vídeo | Média interativa | n (≠ 0) | W+ | z | p | r |', '|---|---|---|---|---|---|---|---|---|---|');
  for (const { i, v, it, w } of pares) L.push(`| ${i}. ${AFIRMACOES_EN[i - 1]} | ${f1(mediana(v))} | ${f1(mediana(it))} | ${f1(media(v), 2)} | ${f1(media(it), 2)} | ${w.n} | ${f1(w.wMais)} | ${f1(w.z, 2)} | ${pFmt(w.p)} | ${f1(w.r, 2)} |`);
  L.push('', `## Preferência (F1)`, '', `- ${conta(r, 'F1')}`);
  return L;
}

// ---------- figuras ----------
const LIKERT = [['Strongly disagree', '#c93a3a'], ['Disagree', '#ec8b87'], ['Neutral', '#dcdad5'], ['Agree', '#7fb0e6'], ['Strongly agree', '#2a6fc4']];

function figura6(pares) {
  const W = 800, LBL = 120, PLOT = 590, h = 20;
  const linhas = [];
  pares.forEach(({ i, v, it }) => {
    linhas.push({ titulo: `${i}. ${AFIRMACOES_EN[i - 1]}` });
    [["Video", v], ["Interactive", it]].forEach(([nome, dados]) => {
      const pct = [1, 2, 3, 4, 5].map(k => dados.filter(x => x === k).length / dados.length);
      linhas.push({ nome, pct, mdn: mediana(dados), esq: pct[0] + pct[1] + pct[2] / 2 });
    });
  });
  // escala: o lado mais comprido de cada barra cabe no PLOT; o centro (neutro) fica onde for preciso
  const barras = linhas.filter(l => l.pct), maxE = Math.max(...barras.map(l => l.esq)), maxD = Math.max(...barras.map(l => 1 - l.esq));
  const esc = PLOT / (maxE + maxD), cx = LBL + maxE * esc;
  let svg = "", y = 50;
  let lx = 10;
  LIKERT.forEach(([t, c]) => { svg += `<rect x="${lx}" y="12" width="14" height="14" rx="3" fill="${c}"/><text x="${lx + 19}" y="23.5" class="t">${t}</text>`; lx += 34 + t.length * 6.6; });
  let barrasSvg = "", linhasCentro = "", yPar = y;
  for (const l of linhas) {
    if (l.titulo) { barrasSvg += `<text x="10" y="${y + 13}" class="h">${l.titulo}</text>`; y += 22; continue; }
    let x = cx - l.esq * esc;
    if (l.nome === "Video") yPar = y;
    barrasSvg += `<text x="${LBL - 10}" y="${y + 14.5}" class="t" text-anchor="end">${l.nome}</text>`;
    l.pct.forEach((p, k) => {
      const wseg = p * esc; if (wseg <= 0) return;
      barrasSvg += `<rect x="${x + 1}" y="${y}" width="${Math.max(0, wseg - 2)}" height="${h}" rx="3" fill="${LIKERT[k][1]}"/>`;
      if (p >= 0.08) barrasSvg += `<text x="${x + wseg / 2}" y="${y + 14.5}" class="v${k === 0 || k === 4 ? " w" : ""}" text-anchor="middle">${Math.round(p * 100)}</text>`;
      x += wseg;
    });
    barrasSvg += `<text x="${LBL + PLOT + 14}" y="${y + 14.5}" class="t">Mdn ${l.mdn}</text>`;
    y += h + 6;
    if (l.nome === "Interactive") { linhasCentro += `<line x1="${cx}" y1="${yPar - 3}" x2="${cx}" y2="${y - 3}" stroke="#5B6472" stroke-width="1" stroke-dasharray="3 3"/>`; y += 10; }
  }
  // linha do centro por baixo das barras (vê-se nos intervalos)
  svg += linhasCentro + barrasSvg;
  const H = y + 22;
  svg += `<text x="${cx}" y="${H - 8}" class="t m" text-anchor="middle">Share of respondents (%), centred on the neutral answer</text>`;
  return { W, H, svg };
}

function figura7(s) {
  const W = 800, H = 300, X0 = 40, X1 = 770, base = 230, r = 7, bin = 5;
  const X = v => X0 + (v / 100) * (X1 - X0);
  let svg = '';
  for (let v = 0; v <= 100; v += 10) svg += `<line x1="${X(v)}" y1="${base}" x2="${X(v)}" y2="${base + 5}" stroke="#5B6472"/><text x="${X(v)}" y="${base + 22}" class="t" text-anchor="middle">${v}</text>`;
  svg += `<line x1="${X0}" y1="${base}" x2="${X1}" y2="${base}" stroke="#5B6472"/>`;
  svg += `<line x1="${X(68)}" y1="40" x2="${X(68)}" y2="${base}" stroke="#5B6472" stroke-dasharray="5 4"/>`;
  const m = media(s);
  svg += `<line x1="${X(m)}" y1="62" x2="${X(m)}" y2="${base}" stroke="#1E2A3A" stroke-width="2"/>`;
  const dir = m >= 68;   // a média e a referência ficam em lados opostos, para os textos não se cruzarem
  svg += `<text x="${X(68) + (dir ? -6 : 6)}" y="50" class="t m" text-anchor="${dir ? "end" : "start"}">reference average (68)</text>`;
  svg += `<text x="${X(m) + (dir ? 6 : -6)}" y="72" class="t" text-anchor="${dir ? "start" : "end"}">mean ${m.toFixed(1)}</text>`;
  const pilhas = {};
  [...s].sort((a, b) => a - b).forEach(v => {
    const b = Math.round(v / bin) * bin, k = (pilhas[b] = (pilhas[b] || 0) + 1);
    svg += `<circle cx="${X(b)}" cy="${base - r - 2 - (k - 1) * (2 * r + 2)}" r="${r}" fill="#2a6fc4" stroke="#fff" stroke-width="2"/>`;
  });
  svg += `<text x="${(X0 + X1) / 2}" y="${H - 14}" class="t m" text-anchor="middle">SUS score of the interactive tour (one dot per respondent, N = ${s.length})</text>`;
  return { W, H, svg };
}

function exportar({ W, H, svg }, nome, pasta, titulo) {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${titulo}</title>
<!-- Gerado por Analise.js: não editar à mão. -->
<style>*{margin:0}html,body{width:${W}px;height:${H}px;background:#fff}
text{font-family:"Segoe UI",Arial,sans-serif;fill:#1E2A3A}.t{font-size:13px}.h{font-size:14px;font-weight:600}
.v{font-size:12px;font-weight:600}.w{fill:#fff}.m{fill:#5B6472}</style></head>
<body><svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${svg}</svg></body></html>`;
  const h = path.join(pasta, `${nome}.html`), p = path.join(pasta, `${nome}.png`);
  fs.writeFileSync(h, html);
  execFileSync(EDGE, ['--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=2.5',
    `--window-size=${W},${H}`, `--screenshot=${p}`, 'file:///' + h.replace(/\\/g, '/')], { stdio: 'ignore' });
  return p;
}

// ---------- codificação ----------
function codificacao(r, pastaDados, L) {
  const modelo = path.join(pastaDados, 'Codificacao_Modelo.csv');
  if (!fs.existsSync(modelo)) {
    const linhas = [['id', 'pergunta', 'resposta', 'unidade', 'categoria']];
    r.forEach((x, i) => ['F2', 'F3'].forEach(q => x[q] && linhas.push([`R${i + 1}`, q, x[q], x[q], ''])));
    fs.writeFileSync(modelo, csv(linhas));
    L.push('', `## Codificação`, '', `- Criado \`${path.basename(modelo)}\` (${linhas.length - 1} respostas abertas).`);
  }
  const [fa, fb] = ['Rodrigo', 'Ricardo'].map(n => path.join(pastaDados, `Codificacao_${n}.csv`));
  if (!fs.existsSync(fa) || !fs.existsSync(fb)) return;
  const [a, b] = [fa, fb].map(f => lerCsv(fs.readFileSync(f, 'utf8')).slice(1));
  if (a.length !== b.length || a.some((l, i) => l[3] !== b[i][3])) throw new Error('Os dois ficheiros de codificação não têm as mesmas unidades pela mesma ordem.');
  const ca = a.map(l => (l[4] || '').trim()), cb = b.map(l => (l[4] || '').trim());
  const mas = [...ca, ...cb].filter(c => !CATEGORIAS.includes(c));
  if (mas.length) throw new Error(`Categorias fora da lista: ${[...new Set(mas)].join(', ')}`);
  const { po, k } = kappa(ca, cb);
  L.push('', '## Concordância entre codificadores (Rodrigo vs. Ricardo)', '', `- Unidades: ${ca.length} · concordância **${f1(100 * po)} %** · kappa de Cohen ${f1(k, 2)}`);
  L.push(`- Por categoria (Rodrigo): ${CATEGORIAS.map(c => `${c} ${ca.filter(x => x === c).length}`).join(' · ')}`);
  const dif = a.map((l, i) => ca[i] !== cb[i] ? `- ${l[0]} «${l[3]}»: ${ca[i]} / ${cb[i]}` : null).filter(Boolean);
  if (dif.length) L.push('', '**Discordâncias (resolver a dois):**', ...dif);
}

// ---------- teste ----------
function teste() {
  assert.strictEqual(sus([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 50);
  assert.strictEqual(sus([5, 1, 5, 1, 5, 1, 5, 1, 5, 1]), 100);
  assert.strictEqual(sus([1, 5, 1, 5, 1, 5, 1, 5, 1, 5]), 0);
  const w = wilcoxon(Array(10).fill(0), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);   // W+ = 55, z = 27/√96,25 = 2,752
  assert.strictEqual(w.wMais, 55); assert.ok(Math.abs(w.p - 0.00592) < 0.0002, `p = ${w.p}`);
  assert.ok(Math.abs(normCdf(1.96) - 0.975) < 1e-4);
  assert.deepStrictEqual(kappa(['A', 'A', 'B', 'B'], ['A', 'B', 'B', 'B']), { po: 0.75, k: 0.5 });
  console.log('Contas verificadas (SUS, Wilcoxon, Φ, kappa).');

  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const pick = a => a[Math.floor(rnd() * a.length)];
  const lik = (m) => String(Math.min(5, Math.max(1, Math.round(m + (rnd() - 0.5) * 2.4))));
  const cab = colunas(32);
  const linhas = [cab];
  for (let i = 0; i < 26; i++) {
    const disp = pick(['Telemóvel', 'Telemóvel', 'Computador (portátil ou fixo)', 'Tablet']);
    linhas.push(['2026/11/13', i === 25 ? 'Não' : 'Sim', 'Sim, aceito participar', pick(['18–24', '25–34', '45–54', '55–64']),
      pick(['Não', 'Não', 'Sim, no passado', 'Sim, atualmente']), pick(['Nunca', 'Uma ou duas vezes', 'Várias vezes']), disp,
      i % 9 === 0 ? 'Vi só uma parte' : 'Sim', lik(3.6), lik(3.4), lik(4), lik(3.8),
      pick(['As 3', 'As 3', '1 ou 2', 'Nenhuma']), pick(['Menos de 2 minutos', '2 a 5 minutos', 'Mais de 5 minutos ou parei antes de as encontrar']),
      pick(['Andando pela casa', 'Pela casa vista de cima ou pela planta', 'Andando pela casa, Pela casa vista de cima ou pela planta']),
      lik(4.2), lik(3.6), lik(4.3), lik(3.6),
      ...Array.from({ length: 10 }, (_, k) => lik(k % 2 === 0 ? 3.9 : 2.1)),
      pick(['O vídeo da visita', 'A visita interativa', 'As duas', 'As duas']),
      pick(['', 'A vista de cima', 'Os balões abriam sozinhos no vídeo']), pick(['', 'Encontrar a cozinha', 'No telemóvel ficou lento'])]);
  }
  const pasta = fs.mkdtempSync(path.join(os.tmpdir(), 'P2_teste_'));
  fs.writeFileSync(path.join(pasta, 'Respostas.csv'), csv(linhas));
  correr(path.join(pasta, 'Respostas.csv'), pasta, pasta, true);
}

function correr(ficheiro, pastaDados, pastaFig, ehTeste = false) {
  const a = analisar(lerCsv(fs.readFileSync(ficheiro, 'utf8')));
  const L = relatorio(a, ehTeste);
  codificacao(a.r, pastaDados, L);
  const res = path.join(pastaDados, 'Resultados.md');
  fs.writeFileSync(res, L.join('\n') + '\n');
  const f6 = exportar(figura6(a.pares), 'Figura6', pastaFig, 'Figure 6 — Video vs. interactive tour');
  const f7 = exportar(figura7(a.r.map(x => x.sus)), 'Figura7', pastaFig, 'Figure 7 — SUS scores');
  console.log(`N = ${a.r.length}\n${res}\n${f6}\n${f7}`);
}

if (process.argv[2] === '--teste') teste();
else if (process.argv[2]) correr(process.argv[2], path.join(__dirname, 'Dados'), path.join(__dirname, 'Figuras'));
else console.log('Uso: node Analise.js --teste | node Analise.js Dados/Respostas.csv');
