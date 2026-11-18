# Plataforma multimédia na Web — plano das teóricas (Grupo 1)

Nota de trabalho (05/11/2026, atualizada a 10/11: datas das 5 entregas do Moodle; v1 revista; Gantt da plataforma por fases; QEF da plataforma). Projeto da teórica: site que «aloja» o MOOC «Cuidar em Crise», com as regras de composição visual. Professora: Paula Escudeiro. Aulas teóricas à quarta.

## Entregas

O Scope document é **um só documento que cresce**: cada entrega do Moodle recebe o **PDF da versão atual** (`Plataforma_Scope_Document_Grupo1.pdf`), com as secções novas acrescentadas. Quando duas entregas têm o mesmo prazo, submete-se o mesmo PDF nas duas.

| # | Entrega no Moodle | Data limite | O que se submete | Versão | Estado |
|---|---|---|---|---|---|
| — | QEF do Grupo 2 (composição visual) | sex 06/11 | `ComposicaoVisual_QEF_Avaliacao_Grupo2.xlsx` (q ≈ 0,69) | — | ✅ Entregue a 06/11 |
| 1 | Scope document draft | **qua 11/11, 23:55** | PDF v1: título · problema · objetivo · plano (Gantt, estrutura, organização) · público-alvo · entregáveis · referências | v1 | Feito a 09/11 (5 páginas). Revisto a 10/11 contra o modelo: tem as 7 secções e os 9 entregáveis (sem o Gama); corrigidos a legenda do Gantt («Azul =», não «■ =») e o estado dos entregáveis (v1 e plano «Feito»). Gantt refeito a 10/11 para a **plataforma** (antes estava organizado como o MOOC, lição a lição): 6 fases (análise, design, desenvolvimento, conteúdos do P1, testes, lançamento), 24 tarefas, semanas de 19/10 a 23/11, coluna «Estado». Passou a 6 páginas. **Pronto.** Falta o grupo rever e submeter |
| 2 | Scope document · Gantt, estrutura e organização da aplicação multimédia | **qua 11/11, 23:55** | O mesmo PDF v1 (o plano com o Gantt, a estrutura do site e a organização já está lá) | v1 | Igual à entrega 1 |
| 3 | Scope document · QEF | **qua 18/11, 23:55** (abriu a 10/11) | PDF v2 (v1 + secção QEF) + o `.xlsx` do QEF | v2 | **Feito a 16/11** (secção 7 da v2, a partir do `.xlsx`). Antes: `Plataforma_QEF_Grupo1.xlsx` feito a 10/11: 3 dimensões (Funcionalidade, Usabilidade, Estética), 10 fatores, 45 critérios (G/E), cada um com indicador numérico, 5 níveis, instrumento e esforço; folha «Notas» com a amostra (9 páginas + 404), o teste com utilizadores (4 tarefas, SUS) e o registo da validação; q = 1 − D/√3 como no exemplo (verificado: tudo a 100 → q = 1). Falta a secção QEF no `.docx`, **só depois de submeter a v1 a 11/11** (senão o `.docx` deixa de bater com o PDF v1). É uma **proposta** de cenário de qualidade para a nossa plataforma (Usabilidade, Funcionalidade, Estética: critérios e parâmetros); a professora valida-a e depois usa-a para avaliar o site. Base: `Exemplos/QEF_Final_MOOC_Portfolio 26-27.xlsx` (exemplo da professora), `ComposicaoVisual_QEF_Grupo1.xlsx` e `Exemplos/QEF_PlataformaMOOC G1 final.xlsx` |
| 4 | Scope document · Storyboard | **qua 18/11, 23:55** | O mesmo PDF v2 (com a secção Storyboard: ecrãs-chave) | v2 | **Feito a 16/11** (secção 8 da v2): 7 ecrãs-chave em `Plataforma_Storyboard.html` → `Capturas/Plataforma_Storyboard_<n>.png` (Início, Curso, Lição: vídeo, Lição: visita 3D e atividade, Quiz, Sobre nós, Telemóvel), com notas numeradas e o percurso |
| 5 | Scope document · Plano de marketing | **qua 18/11, 23:55** | O mesmo PDF v2 (com a secção Plano de marketing) | v2 | **Feito a 16/11** (secção 9 da v2; ⚠ objetivos a validar com a professora a 18/11, ver «Perguntar à professora»): projeto, recursos, meio envolvente, público e concorrência, objetivos, 7P, SWOT, ciclo de vida, ações, orçamento (≈ 10 €), calendário. Estrutura do `Aulas/CAMUL___Marketing V2.pdf` |
| — | Produto final + testes Alfa e Beta | **qua 25/11** | Site + Scope document final (v3: plano de testes, inquéritos e resultados Alfa e Beta) | v3 | Alfa = o grupo testa o seu site antes · Beta = a equipa adversária, no dia da apresentação. Sem teste Gama |

## O site (18/11)

**Feito a 18/11** (o Bruno constrói o site todo; os colegas só mandam os ficheiros que faltam). Até 18/11 só existia a página inicial (aviso do Tiago).
- **Fonte:** `Plataforma_Montar.js` (conteúdo das 5 lições tirado dos guiões `Files/P1/L<n>/Guiao_L<n>.md`) → `node Plataforma_Montar.js` na pasta `Files/Teoricas` → pasta `Plataforma/` (é o site: publica-se tal como está). Os vídeos, os avatares e os PDFs são copiados para `Plataforma/media/` e `Plataforma/recursos/` (fora do git, ≈ 380 MB). Não editar os `.html` da pasta à mão: muda-se o script e corre-se outra vez.
- **Páginas:** Início (a página da composição visual + menu + cartões ligados às lições; «Mostrar regras» continua) · Curso · Lição 1–5 (vídeos por aula com legendas e transcrição, Matterport em iframe só ao clicar, atividade interativa, quiz com feedback uma pergunta de cada vez, recursos, anterior/seguinte) · **Porquê azul?** (sugestão da professora: o trabalho «A cor azul» aplicado ao site, paleta com contrastes, código de cores, botão «Ver a página sem cor», PDF do trabalho) · Sobre nós (5 avatares) · Contactos e créditos · 404.
- **Testado a 18/11** (Chrome, 1440 px e 390 px): quiz, kit da L2, vídeo + 61 legendas, transcrição, Matterport da L1/L2 e da L5 (Discover) dentro da página, regras da página inicial, sem scroll horizontal no telemóvel.
- **Falta (pedidos em `Plataforma_Pedidos_Grupo.md`):** vídeos da L4 (3) e da L5 (4), link do Matterport da L4, legendas da L4/L5 se existirem; confirmar o feedback do quiz da L5 (escrito pelo Bruno), a pergunta 3 da L5 e a atividade da L5 (proposta). O feedback da L4 foi aprovado pelo Bruno (18/11); a Respiração guiada (L3) fica sem legenda, com a transcrição do guião (decisão do Rodrigo, 18/11). Até chegarem, a página mostra «Vídeo a chegar» com ligação para a Udemy.
- **Publicar:** Netlify → «Add new site» → «Deploy manually» → arrastar a pasta `Plataforma/` → mudar o nome do site para `cuidar-em-crise` (o do storyboard). Novo site, para não apagar a página da composição visual (timely-tanuki). Se o Netlify recusar algum vídeo grande (o `VideoCertoVsErrado` da L3 tem 90 MB), comprimir com o ffmpeg do CapCut, como na L2.
- Storyboard: ecrã 8 «Porquê azul?» acrescentado a 18/11 (menu dos 8 ecrãs com o novo item), no `.html`, nas capturas e no `.docx`/PDF v2.

**v2 feita a 16/11 (16 páginas):** `Plataforma_Scope_v2.md` (texto das secções 7–9) → `Plataforma_Scope_v2.ps1` (insere-as uma vez antes de «Referências», atualiza a capa, o Gantt e os entregáveis, exporta o PDF). Falta o grupo rever e submeter na qua 18/11 (o mesmo PDF nas entregas 3, 4 e 5; o `.xlsx` do QEF na 3). A partir daqui edita-se o `.docx` no Word.

**Resumo:** a 11/11 entrega-se a **v1** duas vezes (entregas 1 e 2). A 18/11 entrega-se a **v2** três vezes (entregas 3, 4 e 5: QEF + storyboard + marketing, todos no mesmo PDF; o `.xlsx` do QEF vai só na entrega 3). A 25/11 entrega-se a **v3** com o site.

## ❓ Perguntar à professora na aula de qua 18/11 (antes de submeter a v2, às 23:55)

**1. Qual é, ao certo, o objetivo do plano de marketing?** (a principal)
- É um plano «a sério» para divulgar a plataforma, com metas que depois temos de medir? Ou é um exercício de planeamento, sem metas numéricas obrigatórias?
- Se houver metas, quão ambiciosas devem ser, e medem-se até quando (25/11, fim do semestre)?
- Basta a estrutura dos planos dos exemplos (projeto, recursos, meio envolvente, concorrência, objetivos, 7P, SWOT, ciclo de vida, ações, orçamento, calendário) ou há partes que não interessam a um produto gratuito?

**Porque perguntamos:** a secção 9 da v2 (16/11) tem objetivos que **foram propostos pelo Claude, sem base em dados**, e o grupo acha-os **demasiado drásticos**: 300 visitas ao site, 100 pessoas a abrir uma lição, 50 inscrições na Udemy e 5 associações contactadas (2 a divulgar), tudo até 31/12/2026. Também foram propostos pelo Claude: o orçamento (≈ 10 € de folhetos, estimativa), os canais (redes sociais 2×/semana, emails a associações, folhetos em centros de saúde, farmácias e juntas) e o calendário até 31/12. O único dado real é o painel da Udemy a 11/11: 0 inscrições e ≈ 154 min vistos em pré-visualização (quase tudo do grupo).

**Depois da resposta:** ajustar a secção 9 **no Word** (`Plataforma_Scope_Document_Grupo1.docx`, a partir da v2 já não se corre o `Plataforma_Scope_v2.ps1`) e também o `Plataforma_Scope_v2.md`, exportar o PDF e só então submeter. Hipóteses: objetivos pequenos a partir do painel da Udemy (0 inscrições a 11/11 → X), ver como os planos em `Exemplos/` definiram os objetivos, ou marcar os números como estimativas a rever depois do teste Beta.

**Visto a 17/11 (para levar à aula):**
- **Como os exemplos definem os objetivos:** os 3 planos em `Exemplos/` (`Marketing_Plan_Team1.pdf`, `Marketing Plan - English Version.pdf`, `MarketingPlan_FigureOut_TEAM_2.pdf`) não têm metas de visitas nem de utilizadores. Dois têm só objetivos qualitativos, em «Não financeiros» (ex.: «ser reconhecida como a melhor app para…», «melhorar a acessibilidade») e «Financeiros» (ex.: «conseguir apoio de outras instituições»). Só o da FigureOut tem números, e são financeiros (retorno de ≈ 240 000 € em 6 meses).
- **⚠ Netlify:** as estatísticas de visitas do Netlify (Netlify Analytics) são um extra pago (≈ 9 USD por site e por mês, segundo fontes secundárias; confirmar no painel do site). Com o plano grátis, o objetivo «300 visitas ao site» e o indicador «visitas com origem no QR code» **não se conseguem medir** como estão escritos. Corrigir de qualquer forma, seja qual for a resposta da professora.
- **Alternativa pronta (se a professora não quiser metas ou achar as nossas exageradas):** objetivos como nos exemplos, mais um indicador que conseguimos medir:
  - Não financeiros: ser um recurso de referência, em português, para cuidadores de pessoas com demência numa crise · chegar aos cuidadores através das associações que já os apoiam · completar os cursos existentes, sem os substituir (a L5 encaminha para eles).
  - Financeiros: manter o custo a 0 € (Netlify, Udemy e Matterport grátis) · procurar o apoio de uma associação ou do ISEP para imprimir os folhetos.
  - Medir sem pagar: inscrições e minutos vistos no painel da Udemy (a 11/11: 0 inscrições) · respostas ao inquérito (SUS ≥ 68, já no QEF) · associações contactadas e que responderam. As visitas ao site saem dos objetivos ou passam para um contador grátis, se o grupo o quiser pôr no site.

**2. Outras coisas da v2 a confirmar, se houver tempo:**
- Storyboard com 7 ecrãs (o plano previa 5: juntámos a lição em 2 ecrãs e o telemóvel) e em média fidelidade (paleta e letra reais, zonas a tracejado para o vídeo, o Matterport e os avatares): chega?
- O QEF vai no PDF só como resumo (tabela por fator) e os 45 critérios ficam no `.xlsx`: está bem assim?
- As 3 secções novas ficaram depois de «Entregáveis» (7 QEF, 8 Storyboard, 9 Marketing, 10 Referências): é essa a ordem que quer?

## O Scope document (`Scope document 26-27.docx` → `Plataforma_Scope_Document_Grupo1.docx`)

O modelo da professora fica intacto; o nosso é `Plataforma_Scope_Document_Grupo1.docx`, em português, com os títulos do modelo traduzidos. **Confirmado pela professora (09/11):** é um só documento que cresce: cada entrega acrescenta uma secção (QEF, storyboard, marketing) e submete-se o PDF da versão atual. A partir da v1, edita-se o `.docx` diretamente no Word.


Secções: título · problema · objetivo · plano · público-alvo · entregáveis · referências.
- O objetivo do modelo fala em «sustainability and/or energy transition» (sobra do ano passado) → o nosso é alojar o MOOC «Cuidar em Crise».
- Problema, objetivo e público → reutilizar do S2 e do `P1_Tema_Matterport.md`.
- Entregáveis do modelo: avatar D-ID (✅ os 5 da composição visual), Scope document, plano + Gantt, storyboard/mockups/ecrãs-chave, plano de marketing, plano de testes Alfa/Beta (o Gama do modelo ignora-se), inquérito + resultados Alfa, inquérito + resultados Beta, produto final.
- Integração com a Udemy: não é obrigatória (professora, 09/11); podemos seguir a estrutura proposta.
- Vantagem do site sobre a Udemy: o Matterport entra em iframe; os vídeos e os quizzes podem estar no site, com ligação para o curso na Udemy.
- Vídeos no próprio site (decidido a 10/11): MP4 a 720p no Netlify, cada um < 100 MB (limite do GitHub), com `<track>` .vtt; só descarregam ao carregar em reproduzir.
- Ponto de partida: a página da composição visual (publicada em https://timely-tanuki-231d93.netlify.app).

## Plano

| Quando | O quê |
|---|---|
| Seg 09/11 | Resposta da professora (ver no fim) · antes: sem resposta da professora → email reenviado (resposta ao primeiro: datas a seg 16/11, documento único em PDF, tema) · Scope document v1 feita (rascunho) · o grupo confirma a divisão |
| Qui 05/11 | Email à professora · QEF do G2 preenchido; o grupo revê à noite |
| Sex 06/11 | Entregar o QEF do G2 · resto do dia para a Udemy (P1) |
| Sáb 07 → ter 10/11 | Prioridade ao P1 (S8 a 10/11). Só copiar para o Scope document os textos que já existem |
| Qua 11/11 | **Entregas 1 e 2:** Scope document v1 (plano, Gantt, estrutura (mapa do site: Início → Curso → Lição 1–5 com vídeo, Matterport e quiz → Sobre nós com os avatares → Contactos), organização) · o grupo revê e submete o mesmo PDF nas duas |
| 12 → 18/11 | QEF da plataforma (proposta): `.xlsx` + secção no Scope document |
| 12 → qua 18/11 | Storyboard dos ecrãs-chave (início, lista de lições, página de lição, quiz, equipa) |
| 12 → 18/11 | Plano de marketing (missão, recursos, ambiente, 7P, SWOT, ciclo de vida, ações, orçamento, calendário) |
| Qua 18/11 | **Entregas 3, 4 e 5:** Scope document v2 (v1 + QEF + storyboard + marketing), o mesmo PDF nas três; o `.xlsx` do QEF na entrega 3 |
| 16 → qua 25/11 | Construir o site · plano de testes · teste Alfa · entrega final a 25/11 (Beta no dia da apresentação) |

Divisão (decidida a 09/11): o trabalho é feito em grupo, exceto as páginas das lições, que ficam com o autor da lição no P1 (L1 Bruno, L2 Tiago, L3 Rodrigo, L4 Ricardo, L5 Evandro). O Gantt do Scope document tem as datas de início e de fim de cada tarefa, sem coluna de responsáveis.

## Resposta da professora (09/11)

1. **Storyboard:** **18/11/2026** (o nosso Moodle já está certo).
2. **Formato:** as entregas são versões sucessivas do Scope document, com as novas secções acrescentadas.
3. **Udemy:** não é preciso integrar o site com a Udemy; podemos seguir a estrutura que propusemos.
4. **QEF:** proposta de cenário de qualidade para a nossa plataforma (critérios e parâmetros relevantes). Todos os cenários são analisados e validados e depois servem para avaliar a plataforma. Exemplo no Moodle: cenário de qualidade da plataforma do portfólio.
5. **Testes:** Alfa = a própria equipa; Beta = a equipa adversária, no dia da apresentação da plataforma.

Confirmado depois (09/11): o tema é o «Cuidar em Crise»; o avatar D-ID da composição visual serve; a entrega final é a **25/11**; o teste Gama ignora-se.

## Email à professora (enviado a 05/11, reenviado a 09/11)

**Assunto:** CAMUL – Grupo 1 – Dúvidas sobre o projeto da plataforma (Scope document)

Boa tarde, Professora Paula Escudeiro,

Escrevemos em nome do Grupo 1 (Bruno Lopes, Tiago Teixeira, Rodrigo Silva, Ricardo Ferreira e Evandro Carvalho) para esclarecer algumas dúvidas sobre o projeto da plataforma multimédia na Web.

1. **Data do Storyboard:** no Moodle, a entrega «Scope document – Storyboard» aparece de 10/11/2025 a 16/11/2025. Calculamos que seja domingo, 16/11/2026, às 23:55. Pode confirmar?
2. **Formato das entregas:** as quatro entregas (Gantt/estrutura, QEF, Storyboard e Marketing) são versões sucessivas do mesmo Scope document, com novas secções em cada entrega, ou são documentos separados? Devem ser submetidas em PDF?
3. **Tema:** no modelo do Scope document, o objetivo fala em «sustainability and/or energy transition». Confirmamos que a plataforma deve alojar o nosso MOOC «Cuidar em Crise – Primeiros socorros psicológicos para cuidadores de pessoas com demência»?
4. **Ligação ao MOOC:** o curso está na Udemy, que não permite incorporá-lo noutro site. A plataforma pode alojar diretamente os vídeos, os espaços Matterport (em iframe) e os quizzes, com uma ligação para o curso na Udemy? Podemos partir da página que fizemos para a composição visual?
5. **QEF:** no QEF de 16/11 (Usabilidade, Funcionalidade e Estética), avaliamos a nossa própria plataforma? Há um modelo de base ou podemos usar a estrutura do QEF que fizemos para a composição visual? E no QEF do Grupo 2 (entrega a 6/11), basta preencher a percentagem de cada critério ou devemos justificar cada valor?
6. **Avatar e entrega final:** o vídeo com avatar D-ID que fizemos para a composição visual serve como «Introductory personal avatar video»? Qual é a data da entrega final do produto e dos testes Alfa, Beta e Gama? E quem faz o teste Gama?

Obrigado pela atenção.
Com os melhores cumprimentos,
Grupo 1
