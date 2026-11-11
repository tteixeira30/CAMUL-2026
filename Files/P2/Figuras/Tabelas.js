// Gera Tabela<n>.html e Tabela<n>.png (estilo IEEE) a partir de ../P2_Tabelas.md.
// Uso (na pasta Files/P2/Figuras): node Tabelas.js 2      → Tabela2.png
// A tabela é a primeira tabela Markdown depois do título «## TABLE <romano> — <título>».
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const WIDTH = 1000;   // px CSS; × 2,4 → 2400 px (duas colunas, ≈ 345 dpi)
const SCALE = 2.4;
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V'];

const n = Number(process.argv[2]);
if (!ROMAN[n]) { console.error('Uso: node Tabelas.js <1-5>'); process.exit(1); }

const md = fs.readFileSync(path.join(__dirname, '..', 'P2_Tabelas.md'), 'utf8').split(/\r?\n/);
const start = md.findIndex(l => l.startsWith(`## TABLE ${ROMAN[n]} `));
if (start < 0) throw new Error(`TABLE ${ROMAN[n]} não encontrada`);
const title = md[start].split('—')[1].trim();

const lines = [];
for (let i = start + 1; i < md.length && !md[i].startsWith('## '); i++) {
  if (md[i].startsWith('|')) lines.push(md[i]);
  else if (lines.length) break;
}
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const cells = l => l.slice(1, -1).split('|').map(c => esc(c.trim()
  .replace(/\s*\(\d+ \w{3}\)$/, '')          // «Status (10 Nov)» → «Status»
  .replace(/«/g, '“').replace(/»/g, '”')));
const [head, , ...body] = lines.map(cells);
if (body.some(r => r.some(c => /a pedir/.test(c)))) throw new Error('Ainda há células «a pedir»');

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Table ${ROMAN[n]}</title>
<!-- Gerado por Tabelas.js a partir de P2_Tabelas.md: não editar à mão. -->
<style>
  * { box-sizing: border-box; margin: 0; }
  html, body { width: ${WIDTH}px; background: #fff; }
  body { font-family: "Times New Roman", Times, serif; color: #000; padding: 12px 10px; }
  .cap { text-align: center; font-size: 15px; line-height: 1.35; margin-bottom: 8px; }
  .cap span { display: block; font-variant: small-caps; }
  table { width: 100%; border-collapse: collapse; font-size: 13.5px; line-height: 1.25; }
  th, td { padding: 4px 6px; text-align: left; vertical-align: top; }
  thead th { border-top: 1.5px solid #000; border-bottom: 1px solid #000; font-weight: bold; }
  tbody tr:last-child td { border-bottom: 1.5px solid #000; }
  td:first-child, th:first-child { text-align: center; }
</style></head><body>
<div class="cap">TABLE ${ROMAN[n]}<span>${esc(title)}</span></div>
<table><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
<tbody>
${body.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('\n')}
</tbody></table>
</body></html>
`;
const htmlPath = path.join(__dirname, `Tabela${n}.html`);
fs.writeFileSync(htmlPath, html);

// 1.ª passagem: medir a altura; 2.ª: captura com essa altura.
const url = 'file:///' + htmlPath.replace(/\\/g, '/');
const probe = html.replace('</body>', '<script>document.title="H"+document.documentElement.scrollHeight</script></body>');
const probePath = path.join(require('os').tmpdir(), `Tabela${n}_probe.html`);
fs.writeFileSync(probePath, probe);
const dom = execFileSync(EDGE, ['--headless', '--disable-gpu', `--window-size=${WIDTH},100`, '--dump-dom',
  'file:///' + probePath.replace(/\\/g, '/')], { encoding: 'utf8' });
fs.unlinkSync(probePath);
const height = Number(/<title>H(\d+)<\/title>/.exec(dom)[1]);

const png = path.join(__dirname, `Tabela${n}.png`);
execFileSync(EDGE, ['--headless', '--disable-gpu', '--hide-scrollbars', `--force-device-scale-factor=${SCALE}`,
  `--window-size=${WIDTH},${height}`, `--screenshot=${png}`, url], { stdio: 'ignore' });
const b = fs.readFileSync(png);
console.log(`Tabela${n}.png: ${b.readUInt32BE(16)} × ${b.readUInt32BE(20)} px`);
