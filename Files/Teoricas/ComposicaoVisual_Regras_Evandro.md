# Composição visual — regras do Evandro

Tarefa de grupo: página inicial do MOOC «Cuidar em Crise» com o botão «Mostrar regras». Prazo: quarta-feira, 21/10/2026.
Regras do Ricardo: **3 · Hierarquia Visual** e **4 · Tipografia**.

Referência: área útil de conteúdo com largura máxima de 1280 px, grelha de 12 colunas e paleta de cores clara (areia #F5F1E8, texto #1E2A3A, azul #3A6EA5 e âmbar #A8600F). A tipografia é o elemento central para guiar a ordem de leitura e garantir a acessibilidade de todo o conteúdo.

## 3 · Hierarquia Visual

1. **O que faço na página:** estabeleço uma escala clara de tamanhos e pesos de texto para que o visitante perceba instantaneamente o que é mais importante. A informação é lida naturalmente do elemento principal (título do curso) até às notas secundárias e de rodapé.
2. **Escala de tamanhos utilizada:**
   - titulo = 40 px (700 bold): Título principal da abertura («Cuidar em Crise»). É o maior texto da página para fixar a atenção.
   - promessa = 24 px (400 regular): Subtítulo/promessa do curso e títulos das secções secundárias («As 5 lições», «Para quem é», «Regras de composição aplicadas»).
   - corpo = 18 px (400/700): Texto corrido de apresentação, títulos e descrições dentro dos 5 cartões das lições.
   - rodapé = 14 px (400 regular): Informações institucionais do rodapé, notas de créditos e legendas secundárias.

3. **Aplicação no ficheiro HTML:**
   - O olho do utilizador entra pelo eyebrow em azul de 16 px (bold), salta para o título de 40 px, passa pela promessa de 24 px e chega ao botão de ação.
   - Os títulos das secções usam text-wrap: balance para evitar quebras deselegantes de linha e manter proporções harmoniosas.
   - O marcador 3 fica colocado na frase da promessa do curso.
4. **Porque é importante:** a hierarquia visual reduz a carga cognitiva. O cuidador, que muitas vezes chega à página sob stress ou cansaço, consegue identificar em menos de 3 segundos sobre o que é o curso antes de decidir ler o detalhe.
5. **Legenda apresentada na página:** «3 · Hierarquia visual: título 40 px > promessa 24 px > corpo 18 px > rodapé 14 px.»

## 4 · Tipografia

1. **O que faço na página:** utilizo uma única família tipográfica sem serifa, desenhada especificamente para legibilidade reforçada, limitando o número de pesos e o comprimento das linhas de texto.
2. **Decisões de design e valores:**
   - Fonte única: Atkinson Hyperlegible (desenvolvida pelo Braille Institute para maximizar a distinção entre carateres e facilitar a leitura a pessoas com baixa visão).
   - Apenas 2 pesos: 400 (Regular) para texto corrido e 700 (Bold) para títulos, destaques e botões. Evita a desorganização visual de ter múltiplos pesos tipográficos.
   - Comprimento de linha controlado: o texto corrido na secção «Para quem é» está limitado a uma largura máxima de 65 a 70 carateres (max-width: 65inch).
   - Altura de linha (line-height): variada entre 1.2 nos títulos (para manter o bloco coeso) e 1.5 no corpo de texto (para evitar o salto acidental de linhas durante a leitura).
3. **Aplicação no ficheiro HTML:**
   - Importação direta do Google Fonts no <head> com carregamento otimizado (preconnect).
   - O marcador 4 fica posicionado junto ao parágrafo explicativo da secção «Para quem é».
4. **Porque é importante:** leitores com fadiga visual ou em ecrãs de telemóvel perdem-se facilmente em blocos de texto demasiado largos ou com fontes ornamentadas. A escolha da Atkinson Hyperlegible e a limitação a 65 carateres por linha garantem uma leitura fluida e inclusiva.
5. **Legenda apresentada na página:** «4 · Tipografia: uma só família sem serifa, 2 pesos, corpo de 18 px e linhas até 70 caracteres.»

## Relação entre as duas regras

A hierarquia visual define a dimensão e o destaque de cada mensagem segundo a sua importância, enquanto a tipografia assegura que, independentemente do tamanho do texto, a leitura seja confortável, clara e acessível a qualquer perfil de utilizador.

## Guião do avatar (D-ID, ≈ 25–30 s)

> Olá, sou o Evandro Carvalho, do Grupo 1. Na página inicial do nosso MOOC «Cuidar em Crise», fiquei responsável pela hierarquia visual e pela tipografia. Defini uma escala clara de tamanhos — do título a 40 pixels até ao rodapé de 14 pixels — para orientar a leitura. Escolhi a fonte Atkinson Hyperlegible em apenas dois pesos e limitei as linhas de texto a 70 caracteres, garantindo uma leitura fácil e acessível para todos os cuidadores.