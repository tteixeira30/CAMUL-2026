# Composição visual — regras do Tiago

Tarefa de grupo: página inicial do MOOC «Cuidar em Crise» com o botão «Mostrar regras». Prazo: quarta-feira, 21/10/2026.
Regras do Tiago: **9 · Contraste** e **10 · Ênfase (cor)**.

Referência: paleta do grupo (areia #F5F1E8 · texto #1E2A3A · azul #3A6EA5 · âmbar #A8600F) e o mínimo da WCAG 2.1 nível AA: **4,5:1** para texto normal, 3:1 para texto grande (≥ 24 px, ou ≥ 18,7 px em negrito). Os rácios abaixo foram calculados com a fórmula da WCAG (luminância relativa).

## 9 · Contraste

1. **O que faço na página:** todo o texto (título, promessa, corpo, cartões, rodapé) e o botão têm contraste suficiente com o fundo onde estão. O marcador 9 fica no texto corrido de «Para quem é», que é o mais longo da página.
2. **Valores:**

   | Texto | Fundo | Rácio | AA (4,5:1) |
   |---|---|---|---|
   | Texto #1E2A3A (título, corpo, rodapé) | areia #F5F1E8 | 12,9:1 | ✔ |
   | Texto #1E2A3A (cartões) | branco #FFFFFF | 14,5:1 | ✔ |
   | Azul #3A6EA5 («Curso grátis · 5 lições · ≈ 40 min») | areia | 4,7:1 | ✔ (à justa) |
   | Branco no botão «Começar o curso» | âmbar #A8600F | 4,8:1 | ✔ |
   | Âmbar (números L1–L5) | branco (cartões) | 4,8:1 | ✔ |
   | Âmbar | areia | 4,3:1 | ✘ → nunca se usa |

   - Por isso os cartões das lições são **brancos**: o âmbar dos números só passa sobre branco.
   - O rodapé tem 14 px, mas usa a cor do texto (12,9:1), por isso continua legível.
   - O contraste não depende só da cor: o foco do teclado tem um contorno azul de 3 px.
3. **Legenda:** «9 · Contraste: o texto tem 12,9:1 com o fundo, acima dos 4,5:1 da WCAG AA.»

## 10 · Ênfase (cor)

1. **O que faço na página:** há uma só cor de destaque, o âmbar, e só aparece em dois sítios: o botão «Começar o curso» e os números L1–L5 dos cartões. Tudo o resto é areia, azul-escuro e azul. Como o âmbar é a única cor quente, o olhar vai primeiro para o botão, que é a ação principal. O marcador 10 fica ao lado do botão.
2. **Valores:**
   - Âmbar #A8600F: botão (fundo, letra branca a negrito, 16 × 28 px de preenchimento, cantos de 6 px) e números L1–L5 (24 px, negrito).
   - Azul #3A6EA5 é cor de **apoio**, não de destaque: linha de cima do título, ícones dos cartões e logótipo. É fria e próxima do texto, por isso não compete com o âmbar.
   - Nenhum outro elemento usa âmbar (nem ligações, nem títulos, nem ícones). Se o âmbar aparecesse em mais sítios, deixava de chamar a atenção.
   - **Confirmado:** o âmbar fica nos números das lições (marca a sequência L1 → L5) e não só no botão, como dizia a paleta inicial.
3. **Legenda:** «10 · Ênfase: o âmbar é a única cor de destaque, só no botão e nos números das lições.»

As duas regras aplicam-se também no telemóvel: as cores são as mesmas, só muda a disposição.

## Guião do avatar (D-ID, ≈ 25 s)

> Olá, sou o Tiago Teixeira, do Grupo 1. Na página inicial do nosso MOOC «Cuidar em Crise», tratei do contraste e da ênfase. Verifiquei que todo o texto tem pelo menos 4,5 para 1 com o fundo, como pede a WCAG; o texto principal tem quase 13 para 1. Depois escolhi uma só cor de destaque, o âmbar, usada apenas no botão «Começar o curso» e nos números das lições, para o olhar ir logo para a ação principal.
