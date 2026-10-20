# CAMUL 2026/2027 — Grupo 1

Repositório de trabalho da UC **CAMUL** (Conceção e Autoria Multimédia, ISEP). Tudo é escrito em **português europeu**, num registo simples e direto (frases curtas, «≈», «·» e «→» como nos documentos existentes).

**Grupo 1:** Bruno Lopes (1240441), Tiago Teixeira (1240493), Rodrigo Silva (1221391), Ricardo Ferreira (1220901), Evandro Carvalho (1200929).

## Estrutura do repositório

| Pasta | Conteúdo | Uso |
|---|---|---|
| `Files/` | Trabalhos a entregar | **Onde se trabalha** |
| `Files/P1/P1_Enunciado.pdf` | Enunciado do P1 (requisitos, avaliação, roadmap S1–S8) | Fonte de verdade dos requisitos |
| `Files/P1/` | Entregas do P1 (MOOC) | Ver tabela abaixo |
| `Files/Teoricas/` | Trabalho das teóricas: apresentação «A cor azul» (`CorAzul_*`) e composição visual (`ComposicaoVisual_*`, ver secção «Teóricas») | Independente do P1 |
| `Aulas/` | Slides das aulas 2026/27 (`CAMUL_2026_2027_Aula{1,2,3}_TP_PL.pdf`), Composição visual (`Aula3_Composição Visual sn (audio).pdf`, Paula Escudeiro), Masterclass «Da Comunidade ao MOOC» (Sara de Sousa, só imagem), aulas antigas (design, usabilidade, SUS, multimédia e aprendizagem, Mayer/Clark) | Só contexto |
| `Exemplos/` | Trabalhos de anos anteriores: QEF (Excel de critérios de qualidade, ex.: critério FI02 «respeitar guidelines da plataforma»), `MOOC Template.xlsx` em branco, planos de marketing | Só contexto/modelos |

### Ficheiros do P1 (`Files/P1/`)

| Ficheiro | Etapa | Notas |
|---|---|---|
| `S1_Analise_Plataformas.md`, `S1_Plataformas_Grupo1.xlsx` | S1 — análise de plataformas | Histórico |
| `S1_Abordagens.md` | S1 — escolha Udemy + Google Forms | Histórico; as decisões posteriores prevalecem |
| `S2_MOOC-choice_planning_Grupo1.docx` | S2 — tema, enquadramento, público, objetivo, plataforma, Gantt da equipa | Reentregue após o feedback; atualizado a partir do `P1_Tema_Matterport.md` |
| `S2_Gantt_Grupo1.xlsx` | S2 — Gantt da equipa (folha «Gantt») | Tem de bater certo com o Gantt do S2 |
| `P1_Tema_Matterport.md` | Rascunho de trabalho do tema reescrito para crise + estudo do Matterport | **Fonte para atualizar o S2** |
| `S3_MOOC_Template_Grupo1.xlsx` | S3 — MOOC Template (folhas «Enquadramento» e «Lições») | Versão mais detalhada das 5 lições |
| `P1_Modelo_Licoes.pptx` | Modelo visual comum das 5 lições (guia oculto + 1 diapositivo de cada tipo) | Partilhado com o grupo; geral |
| `L1/` | Tudo o que é só da L1 (Bruno) | Ver abaixo |
| `L1/S4_Plano_L1.md` | S4 — plano da L1: evidências, calendário, estrutura do PDF | Nota de trabalho |
| `L1/S4_Guiao_L1.md`, `L1/S4_Guiao_L1.html` | S4 — guião (narração exata por cena), atividade, quiz com feedback, próximos passos | **Fonte da narração**: as notas do `.pptx` e o guião do `.docx` vêm daqui |
| `L1/S4_Video_L1.pptx` | S4 — vídeo da L1 (1 diapositivo por cena, narração nas notas) | Ilustrações, voz e MP4 passam para o S5 |
| `L1/S4_Evidencias_L1_Grupo1.docx` | S4 — entrega: primeiras evidências de produção (5 evidências do enunciado) | Atualizado a 19/10; exportar para PDF antes de submeter. Quiz e reflexão já na Udemy (rever no S5); Matterport, voz e vídeos no S5 |
| `L2/` | Tudo o que é só da L2 (Tiago); ramo `s4-producao-l2` | Mesma estrutura da L1 |
| `L2/S4_Plano_L2.md` | S4 — plano da L2: evidências, decisões, calendário, estrutura do PDF | Nota de trabalho |
| `L2/S4_Guiao_L2.md` | S4 — guião, atividade «Complete o kit», quiz com feedback, tags e roteiro Matterport «Caça ao kit», próximos passos | **Fonte da narração**: as notas do `.pptx` e o guião do `.docx` vêm daqui |
| `L2/S4_Video_L2.pptx` | S4 — vídeo da L2 (11 diapositivos no modelo comum, narração nas notas) | Faltam os planos de pormenor, as ilustrações e a voz |
| `L2/Recursos/S4_*_L2.pdf` (+ `.html`, `recursos.css`) | Recursos da aula 2.2: checklist do kit, ficha da pessoa, plano de apoio (1 página A4 cada) | O `.html` é a fonte; o PDF imprime-se com o Edge (`--headless --print-to-pdf --no-pdf-header-footer`) |
| `L2/S4_Evidencias_L2_Grupo1.docx` | S4 — entrega da L2 (mesmo formato da L1) | Exportar para PDF antes de submeter; faltam o link do gancho, a captura da Udemy, os planos de pormenor e o Matterport |

Cada lição tem a sua pasta `Files/P1/L<n>/`; o que é geral fica em `Files/P1/`.

### Convenção de nomes em `Files/`

`<Prefixo>_<Descrição>[_Grupo1].<ext>`: palavras separadas por `_`, cada uma com maiúscula inicial, sem acentos nem espaços.
- **Prefixo:** a etapa (`S1`…`S8`); `P1` para o que serve o projeto todo; o nome do trabalho nas teóricas (`CorAzul`).
- **`_Grupo1`:** só nos ficheiros que se entregam. As notas de trabalho (`.md`) não levam este sufixo.
- **Exceção:** o S2 mantém o nome do enunciado (`MOOC-choice_planning`).
- Ao renomear um ficheiro, atualizar as referências a ele (este ficheiro e os `.md`).

## O P1 em resumo

- Construir um **MOOC** com lições de **≈ 8 min**, uma por estudante. O enunciado prevê 4 estudantes e 4 lições; o grupo tem 5 elementos, por isso tem **5 lições** (Aula 3).
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
| S7 | 03/11 | 10/11 | Testes e validação |
| S8 | 10/11 | 10/11 | Entrega final + apresentação presencial |

Aula 3: o tema da S2 tem de evoluir para um **contexto de crise/emergência/catástrofe/deslocação/conflito**, com 5 elementos diferenciadores: público específico, situação concreta, contexto real, decisões, contributo do Matterport.

## O nosso MOOC (estado atual)

**Título:** «Cuidar em Crise — Primeiros socorros psicológicos para cuidadores de pessoas com demência»

- **Eixo:** Acolher (crise e apoio psicossocial), ligado a Incluir (demência) e Capacitar (quem cuida).
- **Público:** cuidadores informais de pessoas com demência ligeira a moderada, em casa, em Portugal (sobretudo mulheres, ≈ 57 anos, pouco tempo, literacia digital variável, telemóvel).
- **Situação:** uma crise (incêndio, cheia/tempestade, pandemia, deslocação por conflito) quebra a rotina e as referências; a pessoa entra em angústia ou agitação e o cuidador fica sobrecarregado.
- **Contexto:** em casa (antes e no momento da crise) e num espaço de acolhimento (se for preciso sair).
- **Objetivo geral:** no fim do curso, o cuidador é capaz de se preparar para uma situação de crise e de prestar primeiros socorros psicológicos (PSP) à pessoa com demência e a si próprio: acalmar, responder às necessidades imediatas, manter a rotina possível e reconhecer quando procurar ajuda especializada.
- **Diferenciação:** os cursos de PSP são gerais e em inglês; os cursos portugueses para cuidadores tratam o dia a dia e não a crise. O nosso é curto (≈ 40 min), gratuito, em português e aplica os PSP à dupla cuidador–pessoa com demência.
- **Plataforma:** **Udemy** (≥ 30 min de vídeo, ≥ 5 aulas, vídeo HD, grátis < 2 h, revisão de qualidade). Sem iframes → o Matterport entra como 1–2 min de vídeo gravado da visita em cada lição + link «Visita 3D» nos recursos (opcional, nunca obrigatório para o quiz). Avaliação externa (análise de público, SUS, pré/pós-teste) no Google Forms.

### Lições (5 × ≈ 8 min, sequência temporal)

| Lição | Momento | Responsável |
|---|---|---|
| L1 Crise, demência e quem cuida | Compreender | Bruno Lopes |
| L2 Preparar antes | Antes | Tiago Teixeira |
| L3 Primeiro contacto: acalmar | Durante | Rodrigo Silva |
| L4 Necessidades e encaminhamento | Durante (casa ou fora) | Ricardo Ferreira |
| L5 Depois da crise | Depois | Evandro Carvalho |

Padrão de cada lição (S3): Gancho 1 min → Vídeo 3 min → Atividade 2 min → Quiz 1,5 min → Síntese + ponte 0,5 min. Cada lição tem uma componente **para a pessoa** e outra **para o cuidador**.

**A partir do S4 (13/10/2026) o trabalho é individual:** cada um trata da sua lição. **P2: 24/11/2026.**

**Gantt da equipa (S2, histórico):** não há papéis individuais. Todas as lições têm o mesmo formato (conteúdo, avaliação, Matterport), por isso cada tarefa avança nas 5 lições ao mesmo tempo. Cada tarefa é «Em conjunto» (o grupo faz junto) ou «Por lição + revisão cruzada» (cada um faz a sua lição com os modelos comuns e outro revê). Os quizzes ficam, por agora, em todas as lições.

### Matterport

- Fio condutor: a casa da dupla **fictícia D. Rosa (pessoa com demência) e Ana (filha cuidadora)**, capturada pelo grupo com a app Matterport Capture; espaço de acolhimento encenado numa sala da escola para a L4 (plano B: Matterport Discover, só por vídeo).
- Tags: **azul = pessoa com demência**, **laranja = cuidador**; título com prefixo da lição (ex.: «L2 · Medicação»).
- Restrições: plano grátis = 1 espaço ativo por conta (usar 2 contas ou 1 mês de Starter); espaços «não listados»; consentimento do proprietário, sem dados pessoais, nunca capturar uma pessoa com demência real.
- Detalhe completo (ideias por lição, fluxo de trabalho, riscos) em `Files/P1/P1_Tema_Matterport.md`.

## Teóricas

### Composição visual (entrega 21/10/2026)

- **Grupo:** página inicial do MOOC «Cuidar em Crise» que aplica as regras de composição da aula. O botão «Mostrar regras» acende 10 marcadores numerados com legenda, as linhas dos terços, o percurso em Z, a grelha de 12 colunas e a medida entre blocos.
- **Individual:** avatar no D-ID, feito a partir de um vídeo de cada um, a explicar o seu papel (≈ 20–30 s). Adiado para a semana de 26/10.
- **Regras por pessoa:** Bruno 1 regra dos terços, 2 direção e movimento · Evandro 3 hierarquia, 4 tipografia · Rodrigo 5 equilíbrio assimétrico e peso visual, 6 unidade, padrão e proporção · Ricardo 7 alinhamento, 8 espaço negativo · Tiago 9 contraste, 10 ênfase.
- **Paleta:** areia #F5F1E8 · texto #1E2A3A (12,9:1) · azul #3A6EA5 (4,7:1) · âmbar #A8600F só no botão e nos números das lições (4,8:1 sobre branco; sobre a areia só 4,3:1, por isso os cartões são brancos). Letra: Atkinson Hyperlegible, 2 pesos.
- **Composição:** foto nas colunas 1–8 (foto:texto ≈ 2:1), texto nas 9–12; título na linha de 1/3 e botão na de 2/3; rosto no ponto forte do terço direito da foto, a olhar para o texto. Só em ecrãs ≥ 1100 px; no telemóvel empilha.
- **Ficheiros:** `ComposicaoVisual_Pagina_Estatica_Grupo1.html` (documento completo, abre no browser; é a entrega) · `ComposicaoVisual_Pagina_Grupo1.html` (a mesma página sem cabeçalho HTML; as alterações fazem-se nas duas) · `ComposicaoVisual_Regras_Bruno.md` (as 4 definições do Bruno + guião do avatar).
- **Por fazer:** foto real (ilustração provisória; guardar como `ComposicaoVisual_Foto.jpg` na mesma pasta) · confirmar o 2:1 (Rodrigo), o âmbar nos números (Tiago) e os valores e legendas de cada um · avatares.

## Regras de coerência

Os mesmos factos aparecem em vários ficheiros. Quando um muda, atualizar todos:

- **Título, lições e responsáveis das lições:** `P1_Tema_Matterport.md`, S2 (.docx), `S2_Gantt_Grupo1.xlsx` (título), S3 (.xlsx).
- **Número de lições e duração:** 5 × ≈ 8 min ≈ 40 min, em todo o lado.
- **Tarefas e semanas do Gantt:** o Gantt do S2 (.docx) e o `.xlsx` têm de coincidir.
- **`.md` e `.html` com o mesmo nome** (ex.: `S4_Guiao_L1`): o `.html` é a versão visual do `.md`; qualquer alteração a um faz-se também no outro.
- Não inventar estatísticas nem fontes; reutilizar as que já estão nos documentos (Alzheimer Portugal, OCDE 2017, ISS out. 2025, ADI 2019/2022, OMS 2011, Lei n.º 100/2019).
- O S2 já não tem limite de 2 páginas (reentrega); o Gantt fica numa página própria.

## Ferramentas nesta máquina (Windows)

- **Não há** Python, pandoc, LibreOffice nem poppler (`pdftoppm`). O Read de PDFs só funciona se o PDF tiver texto.
- **Há:** Node 22, `unzip`, `pdftotext` (Git Bash), Word e Excel (COM via PowerShell).
- Editar .docx/.xlsx: `unzip` para uma pasta temporária → editar o XML (script Node ou `sed`) → voltar a zipar com `System.IO.Compression` no PowerShell. Os nomes das entradas usam `/`, sem prefixo de pasta, e `[Content_Types].xml` vem primeiro. `Compress-Archive` não serve.
- Validar abrindo no Word/Excel por COM (`Documents.Open` / `Workbooks.Open`, só leitura); `ExportAsFixedFormat(path, 17)` exporta PDF e `ComputeStatistics(2)` conta as páginas.
