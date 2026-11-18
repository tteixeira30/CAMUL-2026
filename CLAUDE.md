# CAMUL 2026/2027 — Grupo 1

Repositório de trabalho da UC **CAMUL** (Conceção e Autoria Multimédia, ISEP). Tudo é escrito em **português europeu**, num registo simples e direto (frases curtas, «≈», «·» e «→» como nos documentos existentes).

**Grupo 1:** Bruno Lopes (1240441), Tiago Teixeira (1240493), Rodrigo Silva (1221391), Ricardo Ferreira (1220901), Evandro Carvalho (1200929).

## Estrutura do repositório

| Pasta | Conteúdo | Uso |
|---|---|---|
| `Files/` | Trabalhos a entregar | **Onde se trabalha** |
| `Files/P1/P1_Enunciado.pdf` | Enunciado do P1 (requisitos, avaliação, roadmap S1–S8) | Fonte de verdade dos requisitos |
| `Files/P1_Plano_Bruno.md`, `.html` | Plano do Bruno até ao fim do P1: tutorial passo a passo de sexta 06/11 (Matterport no iPhone, 9 tags, PowerPoint, voz, exportar, Udemy), publicar no sábado 07/11, S8 a 10/11; histórico até 03/11 no fim | Nota de trabalho; o .md e o .html geram-se juntos (o histórico não conta para o progresso) |
| `Files/S5_Plano_Semana_Tiago.md`, `.html` | Plano do Tiago para dom 25/10 (e sáb 24/10 à noite): S5 da L2 e avatar D-ID da teórica, passo a passo por blocos | Nota de trabalho; ramo `s5-l2` |
| `Files/P1/` | Entregas do P1 (MOOC) | Ver `Files/P1/CLAUDE.md` |
| `Files/P2/` | P2 (artigo IEEE): enunciado `CAMUL2025_2026_P2_UK.pdf`, `CAMUL_2025_2026_Guidelines.pdf`, nota do Moodle (`.txt`), modelo `conference-template-a4.docx`, `P2_Plano.md` (plano passo a passo, 10/11), `P2_Referencias.md` (referências confirmadas no Crossref), `P2_Tabelas.md` (Tabelas I e II em inglês, com campos «a pedir»), `P2_Questionario.md` (texto do Google Forms + convite), `P2_Mensagem_Grupo.md` (pedido das fichas Matterport), `P2_Artigo.md` (fonte do artigo em inglês) → `Artigo.ps1` (numa consola PowerShell: `& .\Artigo.ps1`) → `P2_Artigo_Grupo1.docx` + `.pdf` no modelo IEEE, `Analise.js` (SUS, Wilcoxon, concordância; `node Analise.js --teste`), `Dados/` (capturas da Udemy, respostas e codificação), `Figuras/Figura<n>.html` → `.png` (Edge `--screenshot`, comando no topo de cada `.html`), `Figuras/Tabelas.js` (`node Tabelas.js <n>` → `Tabela<n>.png` a partir do `P2_Tabelas.md`) | Ver secção «O P2 em resumo» |
| `Files/Teoricas/` | Trabalho das teóricas: apresentação «A cor azul» (`CorAzul_*`) e composição visual (`ComposicaoVisual_*`, ver secção «Teóricas») | Independente do P1 |
| `Aulas/` | Slides das aulas 2026/27 (`CAMUL_2026_2027_Aula{1,2,3}_TP_PL.pdf`), Composição visual (`Aula3_Composição Visual sn (audio).pdf`, Paula Escudeiro), QEF (`Aula3_QEF PBL Active Learning sn_EN.pdf`, artigo `QualityCritEducGames_ICST2012_Rev.docx`, modelo `QEF_Final.xlsx`), Masterclass «Da Comunidade ao MOOC» (Sara de Sousa, só imagem), aulas antigas (design, usabilidade, SUS, multimédia e aprendizagem, Mayer/Clark) | Só contexto |
| `Exemplos/` | Trabalhos de anos anteriores: QEF (Excel de critérios de qualidade, ex.: critério FI02 «respeitar guidelines da plataforma»), `MOOC Template.xlsx` em branco, planos de marketing | Só contexto/modelos |

### Ficheiros do P1

Tabela de cada ficheiro do P1 (e de cada lição) em `Files/P1/CLAUDE.md`, que carrega ao trabalhar nessa pasta.

### Convenção de nomes em `Files/`

`<Prefixo>_<Descrição>[_Grupo1].<ext>`: palavras separadas por `_`, cada uma com maiúscula inicial, sem acentos nem espaços.
- **Prefixo:** a etapa (`S1`…`S8`); `P1` para o que serve o projeto todo; o nome do trabalho nas teóricas (`CorAzul`).
- **`_Grupo1`:** só nos ficheiros que se entregam. As notas de trabalho (`.md`) não levam este sufixo.
- **Exceções:** o S2 mantém o nome do enunciado (`MOOC-choice_planning`); o guião de cada lição é `Guiao_L<n>.md`, sem etapa, porque serve até ao S8.
- Ao renomear um ficheiro, atualizar as referências a ele (este ficheiro, os `CLAUDE.md` das pastas e os `.md`).

## O P1 em resumo

- Construir um **MOOC** com lições de **≈ 8 min**, uma por estudante. **A professora só conta o tempo de vídeo** (06/11): cada lição tem de ter **≥ 8 min de vídeo**; a atividade escrita e o quiz não contam. O enunciado prevê 4 estudantes e 4 lições; o grupo tem 5 elementos, por isso tem **5 lições** (Aula 3).
- Cada lição: vários media + **Matterport obrigatório** + atividades/questões de avaliação; as lições têm de ser coerentes a nível pedagógico, visual e multimédia.
- Avaliação: Desenvolvimento 30% · Qualidade multimédia 40% · Integração com a plataforma 20% · Testes e revisões 10%.
- Entrega semanal no Moodle até ao início da PL seguinte (terças). Cada submissão incorpora o feedback anterior.

| Etapa | PL | Entrega | Conteúdo |
|---|---|---|---|
| S1 | 22/09 | 29/09 | Análise de 2–3 plataformas |
| S2 | 29/09 | 06/10 | MOOC-choice + planning (tema, ≈ 2 pág., público, objetivo, plataforma, Gantt) |
| S3 | 06/10 | 13/10 | MOOC Template (Excel) das lições |
| S4 | 13/10 | 20/10 | Primeiras evidências de produção |
| S5 | 20/10 | 27/10 | Protótipo das lições |
| S6 | 27/10 | 03/11 | Versão integrada |
| S7 | 03/11 | 03/11 | Testes e validação (feitos na PL: Alfa = o autor testa a sua lição, Beta = outros grupos testam o nosso MOOC) |
| S8 | 10/11 | 10/11 | Entrega final + apresentação presencial |

**Fim do P1 (decidido a 04/11):** o MOOC tinha de estar **publicado na Udemy até sex 06/11** (obrigatório); **submetido para revisão a sáb 07/11 de manhã, aprovado e publicado** (https://www.udemy.com/course/socorros-psicologicos-cuidador-de-demencia-em-crise/); sáb 07 → ter 10/11 só para juntar a entrega e preparar a apresentação. O S8 entrega-se num só `.zip` (`CAMUL2627_P1_G1_1240441_1240493_1221391_1220901_1200929.zip`, prefixo confirmado a 09/11) com: MOOC completo (todas as lições) · relatório final do processo · Gantt final e esquema de funcionamento/navegação · guiões finais de todas as lições · análise das regras e diretrizes da Udemy · resultados dos testes e melhorias.

Aula 3: o tema da S2 tem de evoluir para um **contexto de crise/emergência/catástrofe/deslocação/conflito**, com 5 elementos diferenciadores: público específico, situação concreta, contexto real, decisões, contributo do Matterport.

## O nosso MOOC (estado atual)

**Título:** «Cuidar em Crise — Primeiros socorros psicológicos para cuidadores de pessoas com demência»

- **Eixo:** Acolher (crise e apoio psicossocial), ligado a Incluir (demência) e Capacitar (quem cuida).
- **Público:** cuidadores informais de pessoas com demência ligeira a moderada, em casa, em Portugal (sobretudo mulheres, ≈ 57 anos, pouco tempo, literacia digital variável, telemóvel).
- **Situação:** uma crise (incêndio, cheia/tempestade, pandemia, deslocação por conflito) quebra a rotina e as referências; a pessoa entra em angústia ou agitação e o cuidador fica sobrecarregado.
- **Contexto:** em casa (antes e no momento da crise) e num espaço de acolhimento (se for preciso sair).
- **Objetivo geral:** no fim do curso, o cuidador é capaz de se preparar para uma situação de crise e de prestar primeiros socorros psicológicos (PSP) à pessoa com demência e a si próprio: acalmar, responder às necessidades imediatas, manter a rotina possível e reconhecer quando procurar ajuda especializada.
- **Diferenciação:** os cursos de PSP são gerais e em inglês; os cursos portugueses para cuidadores tratam o dia a dia e não a crise. O nosso é curto (≈ 40 min), gratuito, em português e aplica os PSP à dupla cuidador–pessoa com demência.
- **Plataforma:** **Udemy** (≥ 30 min de vídeo, ≥ 5 aulas, vídeo HD, grátis < 2 h, revisão de qualidade). Sem iframes → o Matterport entra como 1–2 min de vídeo gravado da visita em cada lição + link «Visita 3D» nos recursos (opcional, nunca obrigatório para o quiz). A avaliação externa no Google Forms (pré/pós-teste, SUS) prevista no S1 **foi cortada a 04/11**: a avaliação do curso são os testes Alfa e Beta da PL do S7.

### Lições (5 × ≈ 8 min, sequência temporal)

| Lição | Momento | Responsável |
|---|---|---|
| L1 Crise, demência e quem cuida | Compreender | Bruno Lopes |
| L2 Preparar antes | Antes | Tiago Teixeira |
| L3 Primeiro contacto: acalmar | Durante | Rodrigo Silva |
| L4 Necessidades e encaminhamento | Durante (casa ou fora) | Ricardo Ferreira |
| L5 Depois da crise | Depois | Evandro Carvalho |

Padrão de cada lição (S3): Gancho 1 min → Vídeo 3 min → Atividade 2 min → Quiz 1,5 min → Síntese + ponte 0,5 min. Com a regra dos 8 min **de vídeo** (06/11), este padrão só dá ≈ 4,5 min de vídeo: cada lição precisa de ≈ 3,5 min de vídeo a mais. Cada lição tem uma componente **para a pessoa** e outra **para o cuidador**.

**Feedback do S3 (20/10/2026): etapa validada.** Recomendação: os cenários de crise pedidos (guerras e conflitos armados, catástrofes naturais, calamidades, deslocações forçadas) têm de continuar presentes **nas atividades e no Matterport** de cada lição, não só no vídeo.

**Consistência entre lições (aviso da professora):** os media e o formato têm de ser iguais nas 5 lições. Se um elemento usar avatar com áudio, todos usam. Decisão atual (S7, 03/11, professora: um membro do grupo tem de aparecer no vídeo; aplicada a 06/11): cada um grava a sua voz **com a câmara ligada** (a cara numa janela pequena, no mesmo canto e com o mesmo tamanho nas 5 lições), **sem avatar** (o avatar D-ID é só da teórica). Até 06/11 era só voz, com a câmara desligada: os vídeos das lições são regravados. No diapositivo da visita Matterport, a janela da câmara não pode tapar os balões das tags (na L2 abrem ao centro e à direita). Mudar isto é decisão do grupo, nunca de um só.

**A partir do S4 (13/10/2026) o trabalho é individual:** cada um trata da sua lição. **P2: entrega intermédia (secções 1 e 2) qua 18/11, final ter 24/11/2026.**

**Gantt da equipa (S2, histórico):** não há papéis individuais. Todas as lições têm o mesmo formato (conteúdo, avaliação, Matterport), por isso cada tarefa avança nas 5 lições ao mesmo tempo. Cada tarefa é «Em conjunto» (o grupo faz junto) ou «Por lição + revisão cruzada» (cada um faz a sua lição com os modelos comuns e outro revê). Os quizzes ficam, por agora, em todas as lições.

### Matterport

- Fio condutor: a casa da dupla **fictícia D. Rosa (pessoa com demência) e Ana (filha cuidadora)**, capturada pelo grupo com a app Matterport Capture (espaço «Casa D. Rosa», 06/11/2026, com as tags da L1 e da L2); espaço de acolhimento encenado numa sala da escola para a L4 (plano B: Matterport Discover, só por vídeo).
- **03/11/2026 (professora):** cada lição grava o seu Matterport, com **tags dentro do espaço** (o Discover deixa de servir). A professora aceita casas diferentes; na prática a L1 e a L2 usam o mesmo espaço «Casa D. Rosa» (captura do Bruno, 06/11), cada uma com as suas tags. O curso tem de ser **publicado** na Udemy (≥ 30 min de vídeo); o quiz aparece num curso grátis (confirmado).
- Tags: **azul = pessoa com demência**, **laranja = cuidador**; título com prefixo da lição (ex.: «L2 · Medicação»).
- Restrições: plano grátis = 1 espaço ativo por conta (usar 2 contas ou 1 mês de Starter); espaços «não listados»; consentimento do proprietário, sem dados pessoais, nunca capturar uma pessoa com demência real.
- Detalhe completo (ideias por lição, fluxo de trabalho, riscos) em `Files/P1/P1_Tema_Matterport.md`.

## O P2 em resumo

- Artigo científico **em inglês**, modelo IEEE A4, **4–6 páginas**, ligado ao P1; 13–20 referências de 2021+ (IEEE, ACM, Springer, Elsevier, MDPI). Secções fixas 1–6 (ver o plano). **Entrega intermédia qua 18/11, 20:00** (só as secções 1 e 2: o PDF atual do artigo). Entrega final **ter 24/11/2026, 20:00** (apresentação na PL): `CAMUL2627_P2_G1_1240441_1240493_1221391_1220901_1200929.zip` com Word + PDF + figuras em ficheiros separados e numerados + apresentação .pptx (10 min, todos falam).
- **Decidido a 10/11:** foco **tecnologia (Matterport)**: espaços capturados pelos alunos num MOOC sem iframes (Udemy). Estudo de caso exploratório / DBR; dados do P1 + questionário novo no Google Forms (12–19/11, ≥ 25 respostas: vídeo da visita vs. visita interativa, tarefa de encontrar 3 tags, SUS).
- **Imagens (professora, 10/11):** o artigo leva imagens, não só gráficos. Todas vão numa pasta `Figuras/` dentro do .zip, com os nomes `Figura1.png`, `Figura2.png`, … pela ordem do artigo, e as tabelas como `Tabela1.png`, … É uma exceção à convenção de nomes; se a ordem mudar, renumerar. Autores: ISEP, Porto, Portugal, com o email do ISEP de cada um.
- Tudo em `Files/P2/P2_Plano.md` (RQs, dados D1–D6, figuras, orçamento de palavras, quem faz o quê, calendário). As referências só entram confirmadas (DOI), em `P2_Referencias.md`.

## Teóricas

Composição visual, QEF do Grupo 2 e plataforma multimédia na Web: em `Files/Teoricas/CLAUDE.md`, que carrega ao trabalhar nessa pasta.

## Regras de coerência

Os mesmos factos aparecem em vários ficheiros. Quando um muda, atualizar todos:

- **Título, lições e responsáveis das lições:** `P1_Tema_Matterport.md`, S2 (.docx), `S2_Gantt_Grupo1.xlsx` (título), S3 (.xlsx).
- **Número de lições e duração:** 5 × ≈ 8 min ≈ 40 min, em todo o lado.
- **Tarefas e semanas do Gantt:** o Gantt do S2 (.docx) e o `.xlsx` têm de coincidir.
- **`.md` e `.html` com o mesmo nome** (ex.: `P1_Plano_Bruno`): o `.html` é a versão visual do `.md`; qualquer alteração a um faz-se também no outro.
- Não inventar estatísticas nem fontes; reutilizar as que já estão nos documentos (Alzheimer Portugal, OCDE 2017, ISS out. 2025, ADI 2019/2022, OMS 2011, Lei n.º 100/2019).
- O S2 já não tem limite de 2 páginas (reentrega); o Gantt fica numa página própria.

## Ferramentas nesta máquina (Windows)

- **Não há** Python, pandoc, LibreOffice nem poppler (`pdftoppm`). O Read de PDFs só funciona se o PDF tiver texto.
- **Há:** Node 22, `unzip`, `pdftotext` (Git Bash), Word e Excel (COM via PowerShell).
- **`.pptx` com vídeo e o GitHub (09/11):** o GitHub só aceita ficheiros até 100 MB e o orçamento de Git LFS do repositório esgotou-se, por isso **não há LFS no `main`**. O `S4_Video_L2.pptx` final (com a câmara) está no `main` desde 10/11, sem LFS: as 16 gravações da câmara (640 × 360) foram comprimidas com o ffmpeg do CapCut (`h264_amf` a 700 kb/s, voz a 160 kb/s, cada clipe cortado na duração do original) e o ficheiro passou de 153 para 73 MB. O original de 153 MB fica no ramo local `s8-l2-regravacao` do Tiago (em LFS). Os vídeos finais da L2 são os MP4 na Udemy.
- Editar .docx/.xlsx: `unzip` para uma pasta temporária → editar o XML (script Node ou `sed`) → voltar a zipar com `System.IO.Compression` no PowerShell. Os nomes das entradas usam `/`, sem prefixo de pasta, e `[Content_Types].xml` vem primeiro. `Compress-Archive` não serve.
- Validar abrindo no Word/Excel por COM (`Documents.Open` / `Workbooks.Open`, só leitura); `ExportAsFixedFormat(path, 17)` exporta PDF e `ComputeStatistics(2)` conta as páginas.
- **PowerPoint → vídeo:** a exportação (`CreateVideo` ou Ficheiro → Exportar) fica parada nos 0 MB se a aceleração gráfica estiver ligada; tem de estar marcado «Desativar a aceleração de gráficos de hardware da apresentação de diapositivos» (Opções → Avançadas → Ecrã). Nos diapositivos com vídeo, usar `TimeLine.MainSequence.AddEffect(..., 83, ...)` e nunca `AnimationSettings.PlaySettings` depois de haver outras animações: o modelo antigo apaga-as.
