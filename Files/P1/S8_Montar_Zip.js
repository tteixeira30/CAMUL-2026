// S8 · Exporta os PDFs a partir dos .md e monta o .zip da entrega final.
// Uso (na pasta Files/P1):  node S8_Montar_Zip.js
// Precisa de: Node, Microsoft Edge, internet na 1.ª vez (instala o «marked» numa pasta temporária).
// Resultado: Files/P1/Entrega_S8/<nome>.zip (a pasta Entrega_S8 fica fora do git).
const fs = require('fs'), path = require('path'), os = require('os'), { execFileSync, execSync } = require('child_process');
process.chdir(__dirname);

const NOME = 'CAMUL2627_P1_G1_1240441_1240493_1221391_1220901_1200929';
const LINK = 'https://www.udemy.com/course/socorros-psicologicos-cuidador-de-demencia-em-crise/';
const EDGE = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe'].find(fs.existsSync);
if (!EDGE) throw new Error('Microsoft Edge não encontrado');

// marked numa pasta temporária (não entra no repositório)
const MK = path.join(os.tmpdir(), 'camul-marked');
if (!fs.existsSync(path.join(MK, 'node_modules/marked'))) execSync(`npm i marked@12.0.2 --prefix "${MK}" --silent --no-audit --no-fund`, { stdio: 'inherit' });
const { marked } = require(path.join(MK, 'node_modules/marked'));

const ler = f => fs.readFileSync(f, 'utf8').split('\r').join('');
const semNota = t => t.split('\n').filter((_, i) => i !== 2).join('\n'); // linha 3 = nota de trabalho

function pdf(md, out, deitado = false, base = '.') {
  const titulo = (md.match(/^# (.+)$/m) || [, 'CAMUL'])[1];
  const url = 'file:///' + path.resolve(base).split(path.sep).join('/') + '/';
  const html = `<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><title>${titulo}</title><base href="${url}">
<style>@page{size:A4 ${deitado ? 'landscape' : 'portrait'};margin:14mm}
body{font:10.5pt/1.45 "Segoe UI",Arial,sans-serif;color:#1E2A3A}
h1{font-size:18pt;color:#3A6EA5;margin:0 0 8pt}h2{font-size:14pt;color:#3A6EA5;border-bottom:1px solid #ccd;padding-bottom:2pt;margin-top:16pt;break-after:avoid}
h3,h4{font-size:11.5pt;margin:12pt 0 4pt;break-after:avoid}
table{border-collapse:collapse;width:100%;margin:6pt 0;font-size:9.5pt}th,td{border:1px solid #c9ced8;padding:3pt 5pt;vertical-align:top;text-align:left}th{background:#EEF2F8}tr{break-inside:avoid}
img{max-width:100%;max-height:120mm;display:block;margin:6pt 0;border:1px solid #ddd;break-inside:avoid}
code{font-size:9pt;background:#f3f3f3;padding:0 2px}hr{border:0;border-top:1px solid #ccd}a{color:#3A6EA5}</style></head><body>${marked.parse(md)}</body></html>`;
  const h = path.join(os.tmpdir(), path.basename(out, '.pdf') + '.html');
  fs.writeFileSync(h, html);
  execFileSync(EDGE, ['--headless', '--disable-gpu', '--no-pdf-header-footer', '--print-to-pdf=' + path.resolve(out), 'file:///' + h.split(path.sep).join('/')], { stdio: 'ignore' });
  console.log('PDF', out);
}

// 1. PDFs
const rel = ler('S8_Relatorio_Final.md');
pdf(semNota(rel), 'S8_Relatorio_Final_Grupo1.pdf');
pdf(semNota(ler('S8_Regras_Udemy.md')), 'S8_Regras_Udemy_Grupo1.pdf');
const sec8 = rel.split(/^## 8\. .*$/m)[1].split(/^## 9\./m)[0];
const l1 = ler('L1/S8_Relatorio_L1.md').split(/^### Como se testou/m)[1].split('\n').filter(l => !l.startsWith('**Capturas para o .zip')).join('\n');
pdf(('# Resultados dos testes e melhorias\n\nCAMUL · ISEP · 2026/2027 · P1 · Grupo 1 · «Cuidar em Crise»\n\n' + sec8 +
  '\n## Detalhe da L1 (Bruno Lopes)\n\n### Como se testou' + l1).split(' `.vtt`').join(''), 'S8_Testes_Melhorias_Grupo1.pdf');
pdf(ler('L4/Guiao_L4.md'), 'L4/S8_Guiao_L4_Grupo1.pdf', true, 'L4');
pdf(ler('L5/Guiao_L5.md'), 'L5/S8_Guiao_L5_Grupo1.pdf', true, 'L5');

// 2. Pastas do .zip
const OUT = path.resolve('Entrega_S8'), D = path.join(OUT, NOME);
fs.rmSync(OUT, { recursive: true, force: true });
const conteudo = {
  '01_MOOC': { 'Pagina_Curso.png': 'Capturas/S8_Pagina_Curso.png', ...Object.fromEntries([1, 2, 3, 4, 5].map(n => [`Seccao_${n}_L${n}.png`, `Capturas/S8_Seccao_1_L${n}.png`])) },
  '02_Relatorio': { 'S8_Relatorio_Final_Grupo1.pdf': 'S8_Relatorio_Final_Grupo1.pdf' },
  '03_Gantt_Navegacao': { 'S2_Gantt_Grupo1.xlsx': 'S2_Gantt_Grupo1.xlsx', 'S8_Gantt_Grupo1.png': 'S8_Gantt_Grupo1.png', 'S8_Navegacao_Curso_Grupo1.png': 'S8_Navegacao_Curso_Grupo1.png', 'S3_MOOC_Template_Grupo1.xlsx': 'S3_MOOC_Template_Grupo1.xlsx' },
  '04_Guioes': Object.fromEntries([1, 2, 3, 4, 5].map(n => [`S8_Guiao_L${n}_Grupo1.pdf`, `L${n}/S8_Guiao_L${n}_Grupo1.pdf`])),
  '05_Regras_Udemy': { 'S8_Regras_Udemy_Grupo1.pdf': 'S8_Regras_Udemy_Grupo1.pdf' },
  '06_Testes_Melhorias': { 'S8_Testes_Melhorias_Grupo1.pdf': 'S8_Testes_Melhorias_Grupo1.pdf' },
};
for (const [pasta, fich] of Object.entries(conteudo)) {
  fs.mkdirSync(path.join(D, pasta), { recursive: true });
  for (const [dest, src] of Object.entries(fich)) fs.copyFileSync(src, path.join(D, pasta, dest)); // falha se faltar algum
}
fs.writeFileSync(path.join(D, '01_MOOC', 'Link_MOOC.txt'),
  `Cuidar em Crise — Socorros psicológicos: cuidador de demência em crise\r\n${LINK}\r\nPublicado na Udemy a 09/11/2026 · 5 secções · 22 aulas · 41 min de vídeo\r\n`);

// 3. .zip
const zip = path.join(OUT, NOME + '.zip');
// tar do Windows (bsdtar): nomes com «/», ao contrário do Compress-Archive
execFileSync(path.join(process.env.SystemRoot || 'C:/Windows', 'System32/tar.exe'), ['-a', '-c', '-f', zip, '-C', OUT, NOME], { stdio: 'inherit' });
console.log('\nZIP', zip, Math.round(fs.statSync(zip).size / 1024), 'KB');
