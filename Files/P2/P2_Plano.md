# P2 — Plano do artigo (Grupo 1)

Nota de trabalho (10/11/2026). Fontes: `CAMUL2025_2026_P2_UK.pdf` (enunciado), `CAMUL_2025_2026_Guidelines.pdf`, `2nd Project - Paper Submission.txt` (Moodle) e `conference-template-a4.docx` (modelo IEEE A4).

**Entrega e apresentação: ter 24/11/2026, na PL.** O enunciado é o de 2025/26 (exemplo da energia renovável, 4 por equipa); nós somos 5, como no P1.

## 1. O que se pede

- Um artigo científico **em inglês**, no modelo **IEEE A4 (.docx)**, com **4 a 6 páginas** no total (referências incluídas).
- Ligado ao P1, com **um só foco** do princípio ao fim: o nosso é **tecnologia (Matterport)**.
- **Estrutura obrigatória:** 1 Introduction (1.1 Conceptual or Theoretical Framework · 1.2 Related Research · 1.3 Study Objective) · 2 Method and Materials (2.1 Research Model · 2.2 Methodology · 2.3 Development · 2.4 Data Collection Process · 2.5 Data Analysis) · 3 Results · 4 Discussion · 5 Conclusion · 6 Future Work · References.
- **Referências:** 13 a 20, **de 2021 em diante** (as guidelines dizem «2020 onwards», o enunciado diz «last 5 years»: 2021+ cumpre as duas). Em estilo IEEE, de IEEE, ACM, Springer, Elsevier ou MDPI. Clássicos mais antigos (Brooke 1996, Mayer 2009, OMS 2011) só **a mais** das 13.
- **Entrega:** um .zip no Moodle com:
  - o artigo em Word e em PDF;
  - todas as figuras, tabelas, gráficos e diagramas **em ficheiros separados**, com boa resolução e numerados pela ordem em que aparecem no artigo;
  - a apresentação em **.ppt** (o `.pptx` serve, confirmado a 10/11).
- **Apresentação:** 10 min, presencial, com **todos a falar**.
- **Trabalho em equipa:** cada membro tem uma parte significativa e identificável; o artigo lê-se como um só texto.

### Avaliação

| Critério | Peso | O que conta |
|---|---|---|
| Estrutura e organização | 15 % | Formato IEEE, 4–6 páginas, secções obrigatórias, coerência |
| Conteúdo científico | 25 % | Relevância, rigor, profundidade, foco na tecnologia |
| Trabalhos relacionados | 15 % | 13 referências (≤ 5 anos), qualidade das fontes, integração no texto |
| Método e análise de dados | 15 % | Modelo de investigação, procedimentos, recolha, análise quantitativa e qualitativa |
| Resultados e discussão | 15 % | Clareza, interpretação, comparação com a literatura, figuras |
| Equipa e integração | 10 % | Equilíbrio, coerência, escrita unificada |
| Apresentação | 5 % | Estrutura, design, tempo, todos participam |

## 2. Decisões (10/11)

- **Foco:** tecnologia → espaços **Matterport capturados pelos próprios alunos** num MOOC alojado numa plataforma **sem iframes** (Udemy).
- **Dados:** os do P1 (desenho, testes Alfa e Beta, histórico do git) **+ um questionário curto novo** (Google Forms), recolhido de 12 a 19/11.
- **Modelo:** estudo de caso exploratório dentro de um ciclo de design-based research (as iterações S1 → S8 do P1).

### Título provisório

> *Student-Captured Matterport Spaces in a MOOC Without Embedding: A Case Study on Crisis Support for Dementia Caregivers*

(o modelo IEEE proíbe subtítulos, símbolos e siglas no título: rever no fim)

### Perguntas de investigação

- **RQ1 (desenvolvimento):** What workflow, costs and constraints arise when a student team captures its own Matterport spaces and integrates them into a MOOC on a platform that does not allow embedding?
- **RQ2 (perceção):** How do users rate the usability and usefulness of the Matterport tour, and how does the recorded walkthrough inside the video compare with the interactive tour?
- **RQ3 (iteração):** Which problems found in alpha and beta testing concerned the Matterport and multimedia, and which design changes did they lead to?

## 3. Dados

| Código | Fonte | Onde está | Serve para |
|---|---|---|---|
| D1 | Dados de desenho: 5 lições, 41 min de vídeo, 22 aulas, 5 testes; espaços e tags por lição (L1 9 · L2 8 no mesmo espaço · L3 11 · L4 7 · L5 Discover, plano B, 5 etiquetas no vídeo); duração das visitas (L1 69 s, L2 1:39, …) | `P1/S8_Relatorio_Final.md`, guiões das lições | RQ1, Tabela I |
| D2 | Ficha Matterport de cada lição (a pedir a cada um): equipamento, tempo de captura, n.º de pontos de captura, tempo a pôr as tags, problemas, porquê aquele espaço | Formulário curto ou mensagem, até 13/11 | RQ1 |
| D3 | Testes Alfa e Beta do S7 (03/11): o que falhou e o que mudou (ex.: um testador Beta não encontrou tags no espaço do Discover) | `P1/L1/S7_Notas_Testes_L1.md`, secção 8 do relatório | RQ3, Tabela II |
| D4 | Histórico do git: 116 commits desde 10/10, por etapa | `git log` | RQ1 (esforço por etapa) |
| D5 | Questionário novo (ver secção 4) | Google Forms → Excel | RQ2, Figuras 4 e 5 |
| D6 | Analytics da Udemy (inscrições, progresso, avaliações), **se houver**: o curso está na conta do Ricardo; quem trata é o Bruno, que tem acesso ao painel (11/11) | Painel do instrutor | Contexto; opcional |

## 4. Questionário (D5)

- **Ferramenta:** Google Forms, em **português** (o artigo explica que foi aplicado em português).
- **Público:** colegas da UC e de outros cursos, familiares e, se possível, cuidadores. Anónimo, maiores de 18, sem dados pessoais, consentimento na 1.ª página. Nunca envolver pessoas com demência.
- **Meta:** **≥ 25 respostas** (cada membro traz pelo menos 5).
- **Duração:** ≈ 8–10 min.
- **Espaço:** «Casa D. Rosa» (o da L1 e da L2, com as tags das duas). Espaço ativo (confirmado a 10/11).

| Bloco | Conteúdo | Tipo |
|---|---|---|
| A. Consentimento | Objetivo, anonimato, pode desistir | Sim / Não |
| B. Perfil | Faixa etária · é ou foi cuidador · já usou visitas 3D · dispositivo (telemóvel / computador) | Escolha |
| C. Vídeo da visita | Ver a visita gravada da L2 (1:39, com os balões das tags abertos; link do Drive ou do YouTube «não listado») → 4 afirmações: percebi como é a casa · percebi onde estão os riscos e o kit · prendeu-me a atenção · a duração foi adequada | Likert 1–5 |
| D. Visita interativa | Abrir o link do Matterport e **encontrar 3 tags** (o kit, caminho livre, rede de apoio) → encontrou? (todas / algumas / nenhuma) · tempo (< 2 / 2–5 / > 5 min) · as mesmas 4 afirmações do bloco C | Escolha + Likert 1–5 |
| E. SUS | As 10 afirmações do SUS (versão portuguesa) sobre a visita interativa | Likert 1–5 |
| F. Preferência e abertas | Prefere: vídeo / interativa / as duas · o que ajudou? · o que dificultou? | Escolha + texto |

Todos veem primeiro o vídeo e depois a visita interativa. A ordem fixa entra nas limitações do estudo.

## 5. Análise (2.5)

- **SUS:** pontuação 0–100 (fórmula de Brooke), média e desvio-padrão, comparada com a referência de 68.
- **Vídeo vs. interativa:** medianas das 4 afirmações; teste de **Wilcoxon** para amostras emparelhadas (script Node pequeno, com um exemplo de verificação). Com N < 20 fica só a estatística descritiva.
- **Tarefa:** % de quem encontrou as 3 tags, por dispositivo.
- **Abertas + notas Alfa/Beta (D3):** análise temática com categorias fixas: navegação · encontrar tags · compreensão do espaço · desempenho e dispositivo · áudio e vídeo · avaliação. **Dois codificadores independentes**, com a % de concordância.
- **RQ1:** tabela comparativa das 5 lições (D1 + D2) e tempo por etapa (D4).

### Categorias da análise temática (fechadas a 11/11)

Os nomes em inglês são os da coluna «Category» da Tabela2 (`P2_Tabelas.md`).

| Categoria | Entra aqui | Exemplo |
|---|---|---|
| Navegação (*Navigation*) | Mover-se no curso ou na visita: botões, onde clicar, links, ordem das aulas, ficheiros | «não percebi onde clicar para avançar» |
| Encontrar tags (*Finding tags*) | Ver, encontrar ou abrir as tags na visita | «demorei a encontrar o kit» |
| Compreensão do espaço (*Understanding the space*) | Perceber a casa: divisões, onde estão as coisas, os riscos, o que as tags explicam | «a vista de cima ajudou a perceber a casa» |
| Desempenho e dispositivo (*Performance and device*) | Lentidão, carregamento, internet, telemóvel vs. computador, ecrã pequeno | «no telemóvel a visita ficou lenta» |
| Áudio e vídeo (*Audio and video*) | Som, voz, música, legendas, imagem, câmara, duração dos vídeos | «a música estava alta» |
| Avaliação (*Assessment*) | Quizzes, atividades, feedback | «a resposta certa é sempre a mais longa» |
| Outro (*Other*) | O que não cabe em nenhuma (se passar de 10 %, rever as categorias) | — |

**Regras:**
1. **Uma ideia = uma unidade.** Antes de codificar, o Rodrigo divide as respostas em ideias (uma resposta com duas ideias dá duas linhas) e os dois codificam **a mesma lista**, senão não se pode comparar.
2. Cada unidade vai para **uma só** categoria, a principal.
3. Respostas vazias ou «nada» não contam.
4. **Caso difícil:** se fala do que a pessoa percebeu → compreensão do espaço; se fala da qualidade técnica → áudio e vídeo (ex.: «a narração explicava bem a casa» → compreensão do espaço; «a narração ouvia-se mal» → áudio e vídeo).
5. Cada um codifica sozinho → calcula-se a % de concordância → as discordâncias resolvem-se a dois e a categoria final é a que entra no artigo.

## 6. Figuras e tabelas

**Pedido da professora (10/11):** o artigo deve ter **imagens** e não só gráficos. Todas as imagens vão também numa **pasta à parte dentro do .zip** e chamam-se **`Figura1`, `Figura2`, …** pela ordem em que aparecem no artigo. Este nome é uma exceção à convenção de nomes do repositório.

- **Imagens:** `P2/Figuras/Figura<n>.png`, a 300 dpi ou com ≥ 1600 px de largura. No artigo, a legenda fica por baixo («Fig. n.»), como no IEEE.
- **Tabelas:** são tabelas do Word no artigo, com o título por cima («TABLE I»). Como o enunciado pede as tabelas também em ficheiros separados, exportam-se para a mesma pasta como `Tabela1.png`, `Tabela2.png`, … (confirmado a 10/11)
- **No .zip:**

```
CAMUL2627_P2_G1_1240441_1240493_1221391_1220901_1200929.zip
├── P2_Artigo_Grupo1.docx
├── P2_Artigo_Grupo1.pdf
├── P2_Apresentacao_Grupo1.pptx
└── Figuras/
    ├── Figura1.png … Figura7.png
    └── Tabela1.png … Tabela3.png
```

| Ficheiro | Conteúdo | Origem | Secção |
|---|---|---|---|
| Figura1 | Estrutura do curso (5 lições, antes/durante/depois) | Adaptar `P1/S8_Navegacao_Curso_Grupo1.png` (em inglês) | 2.3 |
| Figura2 | Fluxo de trabalho: captura (iPhone LiDAR) → tags → gravação da visita → vídeo no PowerPoint → Udemy + link «Visita 3D» | Diagrama novo (HTML → PNG com o Edge) | 2.3 |
| Figura3 | O espaço «Casa D. Rosa» visto de cima (dollhouse ou planta), com as tags | Captura nova do Matterport | 2.3 |
| Figura4 | Uma tag aberta dentro da visita (azul = pessoa, laranja = cuidador) | `P1/L1/Capturas/S8_Tag_*_L1.png` | 2.3 |
| Figura5 | Uma aula na Udemy: o vídeo da visita com a janela da câmara | Captura nova da Udemy (ou `P1/Capturas/S8_Seccao_1_L2.png`) | 2.3 |
| Figura6 | Vídeo vs. interativa (4 afirmações, barras divergentes) | Questionário | 3 |
| Figura7 | Distribuição do SUS | Questionário | 3 |
| Tabela1 | As 5 lições: espaço, tags, duração da visita, tempo de captura, problemas | D1 + D2 | 2.3 ou 3 |
| Tabela2 | Problemas dos testes → correções | D3 | 3 |
| Tabela3 | Resultados do questionário (média, mediana, p) | D5 | 3 |

São 10 elementos para 6 páginas: as imagens ocupam uma coluna (≈ 8,5 cm de largura) e o texto desce para ≈ 3500 palavras. Se não couber, a Figura1 junta-se à Figura2 ou a Tabela3 passa para o texto. A numeração refaz-se sempre que uma figura sai ou muda de sítio.

## 7. Esqueleto e orçamento de palavras (≈ 3500 palavras + 10 figuras e tabelas ≈ 6 páginas)

| Secção | Palavras | Conteúdo |
|---|---|---|
| Abstract + Keywords | 180 | Problema, método, N, resultado principal, contributo (sem siglas nem símbolos) |
| 1 Introduction | 300 | As crises e a demência (Alzheimer Portugal, ADI); MOOCs; o curso «Cuidar em Crise»; o desafio: Matterport sem iframes |
| 1.1 Framework | 350 | MOOC, microlearning, self-paced; Mayer (multimédia, sinalização, segmentação); Cognitive Load Theory; presença e aprendizagem espacial (visitas 3D) |
| 1.2 Related Research | 500 | MOOCs e conclusão; visitas virtuais 360°/Matterport no ensino; vídeo vs. interativo; ferramentas criadas por alunos; **lacuna**: pouco sobre espaços capturados por alunos em plataformas fechadas |
| 1.3 Objective | 120 | Objetivo + RQ1–RQ3 |
| 2.1 Research Model | 150 | Estudo de caso exploratório, DBR (S1 → S8 como iterações) |
| 2.2 Methodology | 250 | 5 estudantes, 5 lições, papéis, 8 semanas, testes Alfa e Beta, questionário |
| 2.3 Development | 450 | Guiões, PowerPoint → vídeo, câmara, legendas, captura Matterport, tags (azul = pessoa, laranja = cuidador), restrições da Udemy; Figuras 1–5, Tabela1 |
| 2.4 Data Collection | 200 | D1–D6, datas, N, ética |
| 2.5 Data Analysis | 200 | SUS, Wilcoxon, análise temática, concordância |
| 3 Results | 550 | RQ1 (Tabela1, tempos), RQ2 (Figuras 6–7, Tabela3), RQ3 (Tabela2) |
| 4 Discussion | 450 | Porque deu aqueles resultados; comparação com 1.2; lições aprendidas (plano grátis, pontos de captura, encontrar as tags) |
| 5 Conclusion | 200 | Contributos, o que aprendemos no P1 e no P2, **limitações** (N pequeno, amostra de conveniência, ordem fixa, sem cuidadores reais em número) |
| 6 Future Work | 120 | Quizzes dentro do Matterport, teste com cuidadores reais, plataforma com iframes (a nossa plataforma da teórica), versão para o telemóvel |
| References | — | 15–18, IEEE |

## 8. Referências (13 a 20, 2021+)

Nenhuma referência entra sem ser **confirmada** (DOI ou página da editora aberta). Não inventar autores, anos nem números.

Temas a procurar (≈ 3 por tema):
1. MOOCs: desenho, envolvimento e conclusão (2021+).
2. Microlearning e vídeos curtos no ensino online.
3. Princípios de Mayer e Cognitive Load Theory aplicados ao vídeo (2021+).
4. Visitas virtuais 360° / Matterport / digital twins no ensino.
5. Realidade virtual não imersiva (desktop/telemóvel) vs. vídeo: presença, aprendizagem espacial.
6. Usabilidade (SUS) de ambientes virtuais e de MOOCs.
7. Literacia digital e e-learning para cuidadores de pessoas com demência; crises e demência.

Pesquisar no Google Scholar, IEEE Xplore, ACM DL, ScienceDirect e MDPI; guardar em `P2_Referencias.md` (referência IEEE + DOI + 1 frase sobre o que usamos dela).

## 9. Quem faz o quê

Cada parte é identificável e entra na apresentação.

| Membro | Parte |
|---|---|
| Bruno Lopes | Coordenação · Figuras 1–7 e analytics da Udemy (D6) (passaram para o Bruno a 11/11) · formatação IEEE e montagem do .zip · ficha Matterport da L1 |
| Tiago Teixeira | Questionário no Google Forms (montar, testar, enviar o link; itens do SUS, vídeo no YouTube; atribuído a 10/11) · Ficha Matterport da L2 · referências dos temas 4 e 5 · revisão das secções 1.1 e 1.2 |
| Rodrigo Silva | Ficha Matterport da L3 · codificador 1 da análise temática · referências do tema 3 · revisão da secção 2 |
| Ricardo Ferreira | Ficha Matterport da L4 · codificador 2 · referências do tema 6 · revisão da secção 3 |
| Evandro Carvalho | Ficha Matterport da L5 (porque ficou o plano B) · referências dos temas 1, 2 e 7 · revisão das secções 4–6 |
| Todos | ≥ 5 respostas ao questionário cada · confirmar as suas referências (DOI) · 2 min da apresentação |

## 10. Calendário

Coincide com as entregas da plataforma da teórica (draft + Gantt e estrutura 11/11 · QEF, storyboard e marketing 18/11 · final 25/11).

| Dia | Passo | Feito |
|---|---|---|
| ter 10/11 | Ler o enunciado, decidir o foco e os dados, este plano | ✅ |
| qua 11/11 | Rascunho do questionário (`P2_Questionario.md`, feito a 10/11) · enviar ao grupo o plano e o pedido das fichas Matterport (D2): mensagem `P2_Mensagem_Grupo.md` enviada a 11/11 | ✅ |
| qui 12/11 | **Tiago:** copiar à mão os 10 itens do SUS português (Martins *et al.*, 2015) para o bloco E do `P2_Questionario.md` · questionário no Google Forms, testado por 1 pessoa · **enviar** · vídeo da visita da L2 no YouTube «não listado» (o Forms só aceita vídeos do YouTube) | ☐ |
| 12–15/11 | Procurar e confirmar as referências → `P2_Referencias.md` (≥ 15): feito a 10/11, cada um confirma as dos seus temas | ✅ |
| sex 13/11 | Receber as fichas Matterport (D2) · Tabela1 e Tabela2: rascunho em `P2_Tabelas.md` (10/11), faltam os campos «a pedir» | ◐ |
| 14–17/11 | Rascunho das secções 1 e 2 no modelo IEEE (podem fazer-se antes dos dados) · Figuras 1–5: Figura2 feita a 10/11 (`Figuras/Figura2.html` → `.png`) · Figura3 a 11/11 (dollhouse com `&lang=en`, cortada a 1110 × 1010 px ≈ 330 dpi numa coluna) | ◐ |
| qua 18/11 | Lembrete do questionário a quem ainda não respondeu | ☐ |
| qui 19/11 | **Fechar o questionário** · exportar para Excel | ☐ |
| 19–20/11 | SUS, Wilcoxon, análise temática (2 codificadores) · Figuras 6–7, Tabela3 · secção 3 | ☐ |
| sáb 21/11 | Secções 4, 5 e 6 · abstract · cortar até caber em 6 páginas | ☐ |
| dom 22/11 | Revisão cruzada (cada um a sua secção) · confirmar as referências · apresentação (≈ 10 diapositivos, 2 min por pessoa) | ☐ |
| seg 23/11 | Versão final: Word + PDF, pasta `Figuras/` (Figura1… e Tabela1…), .pptx · montar o .zip · ensaiar com o cronómetro | ☐ |
| **ter 24/11** | **Entrega no Moodle + apresentação na PL** | ☐ |

## 11. A confirmar

- [x] Entrega: ter 24/11, antes da PL (confirmado a 10/11)
- [x] Nome do .zip: como o do S8 → `CAMUL2627_P2_G1_1240441_1240493_1221391_1220901_1200929.zip`
- [x] A apresentação pode ser `.pptx`
- [ ] O artigo leva uma secção «Author contributions»? (o modelo IEEE não a tem; se a professora pedir, segue a tabela da secção 9)
- [x] O espaço «Casa D. Rosa» continua ativo, com as 17 tags
- [x] Afiliação: «Instituto Superior de Engenharia do Porto (ISEP), Porto, Portugal» + o email do ISEP de cada um (`<n.º>@isep.ipp.pt`, confirmado a 10/11)

## 12. Verificação final (antes de 23/11)

- [ ] 4 ≤ páginas ≤ 6 no PDF (Word: `ComputeStatistics(2)`)
- [ ] Todas as secções 1–6 com os títulos do enunciado e os estilos do modelo (Heading 1/2)
- [ ] ≥ 13 referências, todas de 2021+, todas citadas no texto [n] e pela ordem
- [ ] Figuras e tabelas citadas no texto, numeradas, com legenda (Fig. em baixo, TABLE em cima, como no IEEE); os números batem certo com `Figuras/Figura<n>` e `Tabela<n>`
- [ ] O artigo tem imagens (Figuras 3–5), não só gráficos
- [ ] Os números do artigo batem certo com o relatório do S8 (41 min, 22 aulas, tags)
- [ ] Inglês revisto; os mesmos termos em todo o lado (*tour*, *tag*, *walkthrough*, *learner*)
- [ ] .zip: .docx + .pdf + .pptx + pasta `Figuras/` com tudo
