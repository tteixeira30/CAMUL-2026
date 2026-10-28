# Composição visual — regras do Ricardo

Tarefa de grupo: página inicial do MOOC «Cuidar em Crise» com o botão «Mostrar regras». Prazo: quarta-feira, 21/10/2026.
Regras do Ricardo: **7 · Alinhamento** e **8 · Espaço negativo**.

Referência: página com largura máxima de 1280 px, grelha de 12 colunas e secção de abertura (hero) com proporção 16:9 no computador. A área de conteúdo usa margens laterais de 48 px, uma distância de 24 px entre colunas e intervalos verticais de 64 px entre blocos principais.

## 7 · Alinhamento

1. **O que faço na página:** organizo os elementos segundo uma grelha comum, para que o utilizador reconheça rapidamente a estrutura da página. O título, a promessa, o botão, o título «As 5 lições» e o texto de «Para quem é» começam no mesmo eixo à esquerda dentro das respetivas áreas.
2. **Como penso a regra:**
   - Primeiro defino a área útil com a margem lateral de 48 px.
   - Depois divido essa área em 12 colunas iguais, com intervalos de 24 px.
   - Na abertura, a fotografia ocupa as colunas 1–8 e o texto ocupa as colunas 9–12.
   - Dentro da área de texto, o título, a promessa e o botão usam o mesmo alinhamento à esquerda.
   - Os cartões das cinco lições repetem a mesma grelha e começam no eixo da secção, mesmo quando passam para cinco colunas no computador.
3. **Aplicação no ficheiro HTML:**
   - A classe `.wrap` centraliza o conteúdo e aplica as margens laterais.
   - A classe `.hero` usa `grid-template-columns: repeat(12, 1fr)` em ecrãs com pelo menos 1100 px.
   - A camada «Mostrar regras» apresenta as 12 colunas com uma transparência azul.
   - Para tornar o alinhamento mais fácil de verificar, a regra 7 tem agora um **eixo comum de alinhamento**: uma linha tracejada azul que acompanha o início da secção das lições e coincide com o início do título e dos cartões.
4. **Porque é importante:** o alinhamento reduz o esforço de leitura, cria ordem entre secções diferentes e evita que cada elemento pareça colocado ao acaso. A fotografia pode ter mais peso visual, mas o conteúdo textual mantém uma estrutura previsível.
5. **Legenda apresentada na página:** «7 · Alinhamento: grelha de 12 colunas, eixo comum à esquerda e margens laterais iguais.»

## 8 · Espaço negativo

1. **O que faço na página:** mantenho espaço livre entre os elementos e à volta dos blocos, em vez de preencher toda a área disponível. O espaço negativo separa a abertura, as lições, o público e a legenda, deixando que cada informação seja identificada sem competição visual.
2. **Valores usados:**
   - Margens laterais do conteúdo: **48 px** em ecrãs com pelo menos 700 px.
   - Espaço entre colunas da grelha: **24 px**.
   - Intervalo entre os blocos principais da página: **64 px**, através de `gap: var(--bloco)`.
   - Espaço entre o título das lições e os cartões: **24 px**.
   - Espaçamento interno dos cartões: **20 px**; distância entre o ícone e o texto: **16 px**.
3. **Aplicação no ficheiro HTML:**
   - O espaço livre mantém a relação de peso entre a fotografia grande e o texto mais compacto da abertura.
   - O intervalo de 64 px entre o hero e «As 5 lições» é mostrado, quando as regras estão ligadas, por uma linha tracejada com setas e a legenda «64 px · intervalo entre blocos».
   - A margem esquerda de 48 px é indicada no topo da área de conteúdo pela legenda «48 px · margem».
   - Os guias e as legendas só aparecem em «Mostrar regras»; a composição normal não fica sobrecarregada.
4. **Porque é importante:** numa página sobre primeiros socorros psicológicos, a leitura deve transmitir calma e segurança. O espaço negativo cria pausas, melhora a hierarquia e facilita a leitura em ecrãs pequenos ou por pessoas com literacia digital variável.
5. **Adaptação ao telemóvel:** abaixo de 700 px, a margem reduz-se para 16 px para não desperdiçar espaço. A fotografia e o texto passam para uma coluna, mas continuam separados por um intervalo consistente; a regra mantém-se através da distância e não através da grelha horizontal.
6. **Legenda apresentada na página:** «8 · Espaço negativo: margem lateral de 48 px e intervalo de 64 px entre blocos.»

## Relação entre as duas regras

O alinhamento dá uma estrutura comum aos elementos; o espaço negativo impede que essa estrutura fique apertada. Em conjunto, as duas regras tornam a página mais previsível, legível e equilibrada: os elementos começam nos mesmos eixos, mas têm espaço suficiente para respirar.

## Guião do avatar (D-ID, ≈ 25–30 s)

> Olá, sou o Ricardo Ferreira, do Grupo 1. Na página inicial do nosso MOOC «Cuidar em Crise», trabalhei o alinhamento e o espaço negativo. Usei uma grelha de 12 colunas, margens de 48 pixels e um eixo comum à esquerda para organizar o título, o botão e as secções. Também deixei 64 pixels entre os blocos principais e espaço suficiente dentro dos cartões. Assim, a página fica mais clara, previsível e calma, sem parecer preenchida em excesso.
