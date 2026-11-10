# S8 — Conteúdo do .zip da entrega final

Nota de trabalho (04/11). Quem junta: Bruno. Na **segunda 09/11** monta-se o .zip a partir desta lista: criar as pastas, copiar os ficheiros finais, exportar os `.md` para PDF.

**Nome:** `CAMUL2627_P1_G1_1240441_1240493_1221391_1220901_1200929.zip` (prefixo `CAMUL2627` confirmado a 09/11).

| Pasta | Ficheiro no .zip | Fonte no repositório | Estado |
|---|---|---|---|
| `01_MOOC` | `Link_MOOC.txt` (link público + duração total de vídeo) | Udemy | link: https://www.udemy.com/course/socorros-psicologicos-cuidador-de-demencia-em-crise/ (publicado a 09/11) · 5 secções · 22 aulas · 41 min · feito 10/11 |
| `01_MOOC` | `Seccao_1_L1.png` … `Seccao_5_L5.png` (vista de aluno) | `Capturas/S8_Seccao_1_L{1..5}.png` | feito 10/11 (Bruno, página pública) |
| `02_Relatorio` | `S8_Relatorio_Final_Grupo1.pdf` | `S8_Relatorio_Final.md` + `L{1..5}/S8_Relatorio_L{n}.md` | PDF 10/11, com a L4 (Ricardo, 10/11); a L4 e a L5 ficaram sem legendas |
| `03_Gantt_Navegacao` | `S2_Gantt_Grupo1.xlsx` (e PDF) | `S2_Gantt_Grupo1.xlsx` (datas reais até 10/11) | feito 10/11 (igual ao do `.docx`; imagem `S8_Gantt_Grupo1.png`) |
| `03_Gantt_Navegacao` | `S8_Navegacao_Curso_Grupo1.png` | `S8_Navegacao_Curso.html` → PNG | feito 04/11 |
| `03_Gantt_Navegacao` | `S3_MOOC_Template_Grupo1.xlsx` | `S3_MOOC_Template_Grupo1.xlsx` | atualizado 09/11 (L1 e L2) e 10/11 (L3–L5, a partir dos guiões e do relatório) |
| `04_Guioes` | `S8_Guiao_L1_Grupo1.pdf` … `S8_Guiao_L5_Grupo1.pdf` | `L{n}/Guiao_L{n}.md` | L1 feito 07/11 · L2 feito 09/11 (`L2/S8_Guiao_L2_Grupo1.pdf`, 9 páginas A4 ao baixo) · L3, L4 e L5 feitos 10/11 (L4: respostas certas do Teste 4 corrigidas no guião) |
| `05_Regras_Udemy` | `S8_Regras_Udemy_Grupo1.pdf` | `S8_Regras_Udemy.md` | atualizado 10/11 (41 min, capturas) |
| `06_Testes_Melhorias` | `S8_Testes_Melhorias_Grupo1.pdf` | relatório §8 + detalhe da L1 (`L1/S8_Relatorio_L1.md`, 8.6) | PDF 10/11, com o Alfa da L4 |

**Verificar antes de submeter (8.7):** abrir o .zip noutro computador · todos os PDFs abrem · o link do MOOC funciona numa janela privada · nome exato do ficheiro.

## Como montar (10/11)

1. `git pull`. Colar a parte do Ricardo no `S8_Relatorio_Final.md` (secção 3.4, linha da L4 na tabela comum, secção 4 «Matterport» `[L4]`, Alfa da L4 na secção 8, linha da L4 na secção 9) e tirar os `**[Ricardo]**`.
2. Na pasta `Files/P1`: `node S8_Montar_Zip.js` (precisa de Node e do Edge; na 1.ª vez instala o `marked` numa pasta temporária). Volta a exportar o relatório, as regras, os testes e o guião da L4 e cria `Entrega_S8/CAMUL2627_P1_G1_….zip` (26 ficheiros, fora do git).
3. Abrir os PDFs do .zip e confirmar; submeter o .zip no Moodle até às 20:00; commit e push dos `.md` e PDFs.
