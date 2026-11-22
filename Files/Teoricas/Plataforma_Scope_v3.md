<!--
Scope document: o que se acrescentou a 18/11/2026, depois da v2 (Plataforma_Scope_v3.ps1 insere-o no .docx, uma vez só).
«@antes X» = os blocos seguintes entram antes do parágrafo «X». As tabelas dos critérios geram-se do Excel (Plataforma_QEF_Metrica1_Grupo1.xlsx).
-->
@antes Storyboard
## Os 45 critérios
Descrição completa do cenário, igual às folhas «Funcionalidade», «Usabilidade» e «Estética» do Excel. Em cada critério: tipo (G genérico, E específico), peso no fator (10 fundamental · 8 muito importante · 6 importante), indicador e unidade, o valor que corresponde a cada nível de cumprimento (0, 25, 50, 75 e 100 %), o instrumento de medida e o esforço de medição (fácil, moderado ou com utilizadores).
**Funcionalidade · Navegação** (peso do fator na dimensão: 0,20)
| Critério | Tipo | Peso | Indicador | Níveis: 0 · 25 · 50 · 75 · 100 % | Como medir | Esforço |
|---|---|---|---|---|---|---|
| FN1 - O menu fixo dá acesso a todas as áreas a partir de qualquer página | G | 10 | % das 10 páginas com o menu completo (Início · Curso · Lições · Porquê azul? · Sobre nós · Contactos) | < 50 % · 50–74 % · 75–89 % · 90–99 % · 100 % | Verificar o menu em cada uma das 10 páginas | Fácil |
| FN2 - Links e botões levam ao destino certo | G | 10 | % de links e botões que levam ao destino certo, sem links partidos | < 70 % · 70–84 % · 85–94 % · 95–99 % · 100 % | W3C Link Checker + clicar em todos os botões | Fácil |
| FN3 - Os botões «anterior» e «seguinte» seguem a ordem do curso | E | 8 | N.º de lições, de 5, em que os dois botões levam ao sítio certo (L1 ← Curso · L5 → fim do curso) | 0–1 · 2 · 3 · 4 · 5 | Percorrer L1 → L5 e voltar | Fácil |

**Funcionalidade · Lições e avaliação** (peso do fator na dimensão: 0,35)
| Critério | Tipo | Peso | Indicador | Níveis: 0 · 25 · 50 · 75 · 100 % | Como medir | Esforço |
|---|---|---|---|---|---|---|
| FL1 - Cada lição tem os blocos do modelo | E | 10 | N.º de blocos presentes, de 25 (5 lições × vídeo, visita 3D, atividade, quiz, recursos) | < 10 · 10–14 · 15–19 · 20–24 · 25 | Checklist por lição | Fácil |
| FL2 - O quiz de cada lição funciona | E | 10 | % de perguntas que aceitam a resposta e mostram o resultado (≥ 4 perguntas por lição, como na Udemy) | < 60 % · 60–79 % · 80–89 % · 90–99 % · 100 % | Responder a cada quiz duas vezes (uma certa, uma errada) | Fácil |
| FL3 - O feedback é imediato e explica a resposta | G | 8 | % de perguntas com feedback logo a seguir que explica porque a resposta está certa ou errada (não só «certo/errado») | 0 % · 1–49 % · 50–74 % · 75–99 % · 100 % | Responder a cada pergunta e ler o feedback | Fácil |
| FL4 - Cada lição mostra o objetivo, o momento e a duração | E | 6 | N.º de lições, de 5, com objetivo, momento (compreender, antes, durante, depois) e duração do vídeo | 0–1 · 2 · 3 · 4 · 5 | Checklist por lição | Fácil |
| FL5 - Os recursos em PDF descarregam-se e imprimem-se | E | 6 | % dos PDFs (checklist do kit, ficha da pessoa, plano de apoio e os das outras lições) que abrem e imprimem em A4 sem cortes | < 50 % · 50–74 % · 75–89 % · 90–99 % · 100 % | Descarregar cada PDF e ver a pré-visualização de impressão | Fácil |

**Funcionalidade · Multimédia e Matterport** (peso do fator na dimensão: 0,30)
| Critério | Tipo | Peso | Indicador | Níveis: 0 · 25 · 50 · 75 · 100 % | Como medir | Esforço |
|---|---|---|---|---|---|---|
| FM1 - Os media carregam e tocam sem erro | G | 10 | % dos media (vídeos, áudio, imagens, iframes) que carregam e tocam sem erro | < 70 % · 70–84 % · 85–94 % · 95–99 % · 100 % | F12 → Consola e Rede, nas 10 páginas | Fácil |
| FM2 - A visita Matterport de cada lição funciona dentro da página | E | 10 | N.º de lições, de 5, com o espaço em iframe que abre no computador e no telemóvel e mostra as tags da lição | 0–1 · 2 · 3 · 4 · 5 | Abrir cada visita nos dois aparelhos | Moderado |
| FM3 - As tags seguem o código do curso | E | 8 | % das tags com a cor certa (azul = pessoa com demência, laranja = cuidador) e o prefixo da lição no título (ex.: «L2 · Medicação») | < 50 % · 50–74 % · 75–89 % · 90–99 % · 100 % | Abrir todas as tags de cada espaço | Moderado |
| FM4 - Os avatares D-ID tocam na página «Sobre nós» | E | 6 | N.º de avatares, de 5, que tocam com som e têm legenda ou texto ao lado | 0–1 · 2 · 3 · 4 · 5 | Tocar cada avatar | Fácil |
| FM5 - Cada lição junta vários tipos de media | G | 6 | N.º médio de tipos por lição, de 6 (texto, imagem, vídeo, narração, visita 3D interativa, quiz) | ≤ 2 · 3 · 4 · 5 · 6 | Contar por lição | Fácil |

**Funcionalidade · Fiabilidade e privacidade** (peso do fator na dimensão: 0,15)
| Critério | Tipo | Peso | Indicador | Níveis: 0 · 25 · 50 · 75 · 100 % | Como medir | Esforço |
|---|---|---|---|---|---|---|
| FR1 - As páginas abrem sem erros | G | 8 | % das 10 páginas sem recursos em falta (404) nem erros na consola | < 70 % · 70–84 % · 85–94 % · 95–99 % · 100 % | F12 → Consola, ou Lighthouse | Fácil |
| FR2 - Os erros têm mensagem clara e caminho de volta | G | 6 | N.º de testes de erro, de 4, com mensagem clara e caminho de volta: endereço inexistente (página 404) · vídeo que não carrega · visita 3D sem rede · quiz enviado sem resposta | 0 · 1 · 2 · 3 · 4 | Forçar cada erro | Moderado |
| FR3 - Sem conta e sem dados pessoais | E | 8 | N.º de verificações, de 4: HTTPS em todas as páginas · nenhuma página pede conta ou dados · o site não grava cookies próprios nem dados no browser · nota de privacidade e créditos em «Contactos» | 0 · 1 · 2 · 3 · 4 | F12 → Aplicação (cookies e armazenamento) + ler as páginas | Fácil |

**Usabilidade · Facilidade de uso** (peso do fator na dimensão: 0,30)
| Critério | Tipo | Peso | Indicador | Níveis: 0 · 25 · 50 · 75 · 100 % | Como medir | Esforço |
|---|---|---|---|---|---|---|
| UF1 - Usa-se sem ajuda | G | 10 | % de tarefas concluídas sem ajuda (4 tarefas, ver Notas) | < 50 % · 50–69 % · 70–84 % · 85–94 % · ≥ 95 % | Teste com utilizadores | Com utilizadores |
| UF2 - Usa-se depressa | G | 8 | Tempo médio por tarefa (s) | > 120 s · 91–120 s · 61–90 s · 31–60 s · ≤ 30 s | Teste com utilizadores, com cronómetro | Com utilizadores |
| UF3 - Satisfação (SUS) | G | 10 | Pontuação média do SUS (0–100) | < 50 · 50–67 · 68–79 · 80–84 · ≥ 85 | Questionário SUS no fim do teste | Com utilizadores |
| UF4 - Qualquer lição fica a 2 cliques da página inicial | E | 8 | % das 10 páginas a ≤ 2 cliques da página inicial | < 50 % · 50–69 % · 70–89 % · 90–99 % · 100 % | Mapa do site + contar cliques | Fácil |

**Usabilidade · Acessibilidade** (peso do fator na dimensão: 0,40)
| Critério | Tipo | Peso | Indicador | Níveis: 0 · 25 · 50 · 75 · 100 % | Como medir | Esforço |
|---|---|---|---|---|---|---|
| UA1 - Usa-se só com o teclado | G | 10 | % de elementos interativos alcançados com Tab e com foco visível (incluindo entrar e sair da visita 3D e responder ao quiz) | < 50 % · 50–74 % · 75–89 % · 90–99 % · 100 % | Percorrer as páginas só com Tab, Enter e espaço | Moderado |
| UA2 - Vídeos com legendas e transcrição | G | 10 | % dos vídeos (lições e avatares) com legendas em português e transcrição em texto | 0 % · 1–49 % · 50–74 % · 75–99 % · 100 % | Contar por vídeo (legendas .vtt do P1) | Fácil |
| UA3 - Zoom sem perder conteúdo | G | 8 | Maior zoom sem cortes nem scroll horizontal | 100 % · 125 % · 150 % · 175 % · 200 % | Ctrl + até 200 %, nas 10 páginas | Fácil |
| UA4 - A cor não é o único sinal | G | 8 | N.º de informações dadas só pela cor (ex.: tag azul/laranja sem o texto «pessoa»/«cuidador»; resposta certa/errada só a verde/vermelho) | ≥ 4 · 3 · 2 · 1 · 0 | F12 → Rendering → simular daltonismo e escala de cinzentos | Moderado |
| UA5 - Sem erros de acessibilidade | G | 8 | Média de erros por página (WAVE ou axe DevTools) | > 10 · 6–10 · 3–5 · 1–2 · 0 | WAVE nas 10 páginas | Fácil |
| UA6 - Imagens com texto alternativo | G | 6 | % das imagens informativas com alt que diz o que mostram | < 40 % · 40–59 % · 60–79 % · 80–99 % · 100 % | WAVE (lista de imagens e alt) | Fácil |
| UA7 - Linguagem simples | G | 6 | Índice de Flesch adaptado ao português, média de 5 textos das lições | < 30 · 30–44 · 45–59 · 60–69 · ≥ 70 | Calculadora de legibilidade online | Moderado |

**Usabilidade · Telemóvel e desempenho** (peso do fator na dimensão: 0,30)
| Critério | Tipo | Peso | Indicador | Níveis: 0 · 25 · 50 · 75 · 100 % | Como medir | Esforço |
|---|---|---|---|---|---|---|
| UR1 - Funciona em vários ecrãs | G | 10 | N.º de larguras, de 4 (360, 768, 1100, 1440 px), sem scroll horizontal nem sobreposições | 0 · 1 · 2 · 3 · 4 | Modo dispositivo do browser + telemóvel real | Fácil |
| UR2 - Carrega depressa no telemóvel | G | 8 | Largest Contentful Paint da página de lição, Lighthouse em modo telemóvel (s) | ≥ 10 s · 6–9,9 s · 3–5,9 s · 2–2,9 s · < 2 s | Lighthouse (F12), média de 3 medições, no site publicado | Fácil |
| UR3 - A página de lição é leve com dados móveis | E | 8 | Peso transferido da página de lição antes de tocar o vídeo e de abrir a visita 3D (MB) | ≥ 8 MB · 5–7,9 MB · 3–4,9 MB · 1,5–2,9 MB · < 1,5 MB | F12 → Rede, com a cache desligada | Fácil |
| UR4 - Funciona nos browsers mais usados | G | 6 | N.º de browsers, de 4 (Chrome, Edge e Firefox no computador; Chrome ou Safari no telemóvel), em que todos os testes funcionais passam | 0 · 1 · 2 · 3 · 4 | Repetir FN2, FL2 e FM2 em cada um | Moderado |

**Estética · Composição visual** (peso do fator na dimensão: 0,40)
| Critério | Tipo | Peso | Indicador | Níveis: 0 · 25 · 50 · 75 · 100 % | Como medir | Esforço |
|---|---|---|---|---|---|---|
| EC1 - Grelha e alinhamento | E | 10 | % das 10 páginas sobre a grelha de 12 colunas, sem blocos desviados mais de 4 px | < 40 % · 40–59 % · 60–79 % · 80–99 % · 100 % | «Mostrar regras» com a grelha (Início) ou grelha sobreposta no F12 | Moderado |
| EC2 - Hierarquia visual clara | E | 10 | % das 10 páginas com um só H1 e título > subtítulo > corpo, cada nível ≥ 1,2× o seguinte | < 40 % · 40–59 % · 60–79 % · 80–99 % · 100 % | F12 (Computed) + HeadingsMap | Fácil |
| EC3 - Regra dos terços nas imagens-chave | E | 8 | % das imagens-chave (abertura da página inicial, capa de cada lição, Sobre nós) com o ponto focal numa linha ou ponto forte dos terços (± 5 % da largura) | < 25 % · 25–49 % · 50–74 % · 75–89 % · ≥ 90 % | Grelha 3 × 3 por cima de cada imagem | Moderado |
| EC4 - Espaço negativo | E | 8 | Menor espaço entre secções nas 10 páginas (px) | < 16 px · 16–31 px · 32–39 px · 40–47 px · ≥ 48 px | F12 (inspetor) | Fácil |
| EC5 - Ênfase com uma só cor | E | 8 | N.º de elementos com âmbar (#A8600F) fora dos botões principais e dos números das lições | ≥ 4 · 3 · 2 · 1 · 0 | Procurar #A8600F no CSS e nas páginas | Fácil |
| EC6 - O objetivo da página percebe-se em 5 segundos | G | 6 | % de pessoas que dizem para que serve a página depois de a ver 5 s (Início e uma lição) | < 40 % · 40–59 % · 60–74 % · 75–89 % · ≥ 90 % | Teste dos 5 segundos | Com utilizadores |

**Estética · Unidade e coerência** (peso do fator na dimensão: 0,30)
| Critério | Tipo | Peso | Indicador | Níveis: 0 · 25 · 50 · 75 · 100 % | Como medir | Esforço |
|---|---|---|---|---|---|---|
| EU1 - As 5 lições usam o mesmo modelo | E | 10 | N.º de diferenças entre as 5 páginas de lição (ordem dos blocos, tamanho do vídeo, cores, botões, rodapé) | ≥ 4 · 3 · 2 · 1 · 0 | Comparar as 5 páginas lado a lado | Fácil |
| EU2 - Paleta respeitada | G | 8 | N.º de cores no CSS fora da paleta (areia, texto, azul, âmbar, branco + azul e laranja das tags) | > 10 · 6–10 · 3–5 · 1–2 · 0 | F12 → CSS Overview → Colors | Fácil |
| EU3 - Tipografia legível e coerente | G | 8 | N.º de condições, de 5: 1 família (Atkinson Hyperlegible) · ≤ 2 pesos · corpo ≥ 18 px · entrelinha ≥ 1,4 · linhas de 45–75 caracteres | 0–1 · 2 · 3 · 4 · 5 | F12 → CSS Overview → Fonts + Computed | Fácil |
| EU4 - Coerente com o MOOC do P1 | E | 6 | N.º de elementos, de 5, iguais aos do curso na Udemy: título · objetivo · 5 lições e responsáveis · público · a D. Rosa e a Ana | 0–1 · 2 · 3 · 4 · 5 | Comparar com a página da Udemy e o S3 | Fácil |

**Estética · Legibilidade e qualidade dos media** (peso do fator na dimensão: 0,30)
| Critério | Tipo | Peso | Indicador | Níveis: 0 · 25 · 50 · 75 · 100 % | Como medir | Esforço |
|---|---|---|---|---|---|---|
| EL1 - Contraste texto/fundo | G | 10 | N.º de pares texto/fundo abaixo de 4,5:1 (3:1 no texto grande e nos componentes) | ≥ 4 · 3 · 2 · 1 · 0 | WebAIM Contrast Checker ou F12 | Fácil |
| EL2 - Botões e links identificáveis | G | 8 | % de botões e links com ≥ 44 px de altura, diferentes do texto e com estado ao passar e ao focar | < 50 % · 50–74 % · 75–89 % · 90–99 % · 100 % | Passar o rato, usar o Tab, medir no F12 | Moderado |
| EL3 - Vídeos com boa imagem e bom som | G | 8 | % dos vídeos em ≥ 720p e com som limpo (sem cortes, ruído ou música por cima da voz) | < 50 % · 50–74 % · 75–89 % · 90–99 % · 100 % | Ver e ouvir cada vídeo; resolução nas propriedades do ficheiro | Moderado |
| EL4 - Cores e imagens adequadas ao tema | E | 6 | Média (1–5) de «as cores e as imagens são calmas e adequadas a quem cuida numa crise» | < 2,0 · 2,0–2,9 · 3,0–3,4 · 3,5–4,1 · ≥ 4,2 | Pergunta no fim do teste com utilizadores | Com utilizadores |

**Escala e cálculo:** o valor medido de cada critério cai num dos 5 níveis, que se escreve na coluna J da folha «QEF» (0, 25, 50, 75 ou 100). A folha calcula a nota de cada fator (Qj, média pesada dos critérios), de cada dimensão (Qi, média pesada dos fatores), a distância D ao ponto ideal (100, 100, 100) e q = 1 − D/√3.
@antes Referências
# Testes Alfa e Beta
## Plano de testes
Os testes medem a plataforma com o cenário de qualidade da secção 7. Cada teste dá uma métrica: o valor medido de cada um dos 45 critérios, o nível de cumprimento e o q.

| Teste | Alfa | Beta |
|---|---|---|
| Quem testa | Os 5 elementos do grupo | O Grupo 2 (equipa adversária) |
| Quando | 18/11/2026 (1.ª métrica) | 2/12/2026, na aula (o Grupo 2 testa a nossa plataforma e nós a deles) |
| O quê | O site gerado a 18/11, num servidor local (ainda não publicado) | O site publicado no Netlify (soft-licorice-ef7571.netlify.app) |
| Como | Medições com instrumentos (todos os critérios) + teste com utilizadores (5 critérios) + verificações à mão | Teste com utilizadores e inquérito, com as mesmas tarefas e perguntas do Alfa |
| Resultado | 1.ª métrica (Plataforma_QEF_Metrica1_Grupo1.xlsx) e lista de correções | Registado na aula de 2/12; não entra neste documento |

Na mesma aula (2/12), o Grupo 1 faz o teste Beta da plataforma do Grupo 2, com o cenário de qualidade desse grupo.

**Medições com instrumentos:** as 10 páginas (Início, Curso, Lição 1 a 5, Porquê azul?, Sobre nós, Contactos) e a página 404, a 1280 px de largura salvo indicação. Ligações e ficheiros verificados automaticamente; acessibilidade com o axe-core (regras WCAG 2 A e AA); desempenho com o Lighthouse em modo telemóvel (3 medições); percurso só com o teclado; larguras de 360, 768, 1100 e 1440 px e zoom a 200 %; resolução e duração de cada vídeo; cada quiz respondido com uma opção errada e depois com a certa.

**Teste com utilizadores:** cada pessoa faz o teste sozinha, sem ajuda, com um moderador que lê as tarefas, cronometra e aponta. Uma tarefa conta como não concluída se a pessoa pedir ajuda ou passar dos 3 minutos.
- Antes: teste dos 5 segundos. O moderador mostra a página inicial durante 5 s e pergunta «Para que serve esta página?»; depois faz o mesmo com a Lição 2 (EC6).
- Tarefa 1: a partir da página inicial, abrir a Lição 2.
- Tarefa 2: na visita 3D, encontrar uma etiqueta laranja (de quem cuida) e dizer o que diz.
- Tarefa 3: responder ao quiz da lição até ao fim e ler a explicação.
- Tarefa 4: descarregar a checklist do kit.
- Em cada tarefa aponta-se se foi concluída sem ajuda (UF1) e o tempo em segundos (UF2).

**Verificações à mão:** ouvir o som dos vídeos (EL3), abrir as visitas 3D no telemóvel (FM2), repetir as tarefas noutros browsers (UR4), entrar e sair da visita 3D só com o teclado (UA1).

## Inquérito
No fim do teste com utilizadores, cada pessoa responde, numa escala de 1 a 5:
- «As cores e as imagens são calmas e adequadas a quem cuida numa crise?» (1 = nada, 5 = totalmente; EL4).
- As 10 afirmações do SUS, na versão portuguesa (1 = discordo totalmente, 5 = concordo totalmente; UF3): 1. Acho que gostaria de utilizar este produto com frequência. 2. Considerei o produto mais complexo do que necessário. 3. Achei o produto fácil de utilizar. 4. Acho que necessitaria de ajuda de um técnico para conseguir utilizar este produto. 5. Considerei que as várias funcionalidades deste produto estavam bem integradas. 6. Achei que este produto tinha muitas inconsistências. 7. Suponho que a maioria das pessoas aprenderia a utilizar rapidamente este produto. 8. Considerei o produto muito complicado de utilizar. 9. Senti-me muito confiante a utilizar este produto. 10. Tive que aprender muito antes de conseguir lidar com este produto.

O SUS calcula-se da forma habitual: nas afirmações ímpares conta (resposta − 1), nas pares (5 − resposta); a soma multiplica-se por 2,5 (de 0 a 100; 68 é a média de referência).

## Resultados do teste Alfa (1.ª métrica, 18/11/2026)
**Teste com utilizadores** (os 5 elementos do grupo):

| Medida | Resultado | Critério |
|---|---|---|
| Teste dos 5 segundos (Início e Lição 2) | Todos disseram para que servia a página (100 %) | EC6 |
| Tarefa 1 · abrir a Lição 2 | Concluída sem ajuda · 2 s | UF1, UF2 |
| Tarefa 2 · tag laranja na visita 3D | Concluída sem ajuda · 6 s | UF1, UF2 |
| Tarefa 3 · quiz até ao fim | Concluída sem ajuda · 4 s | UF1, UF2 |
| Tarefa 4 · checklist do kit | Concluída sem ajuda · 2 s | UF1, UF2 |
| Cores e imagens adequadas | 5 (totalmente) | EL4 |
| SUS (respostas 5, 2, 5, 1, 5, 1, 5, 1, 5, 1) | 97,5 | UF3 |
| Som dos vídeos | Limpo, sem cortes, ruído nem música por cima da voz; nota 9 em 10 | EL3 |
| Visitas 3D | Abrem, mas pouco funcionais | FM2 |
| Só com o teclado | Chegaram à Lição 2 só com o teclado | UA1 |

**1.ª métrica: q = 0,75** (Funcionalidade 76 · Usabilidade 87 · Estética 67). É uma medição fechada, em Plataforma_QEF_Metrica1_Grupo1.xlsx. As medições seguintes ficam em Plataforma_QEF_Atual_Grupo1.xlsx, que se atualiza a cada correção (a 18/11, com os vídeos da L5 no site, q = 0,77).

| Dimensão | Fator (peso) | Qj |
|---|---|---|
| Funcionalidade | Navegação (0,20) | 100 |
| Funcionalidade | Lições e avaliação (0,35) | 94 |
| Funcionalidade | Multimédia e Matterport (0,30) | 36 |
| Funcionalidade | Fiabilidade e privacidade (0,15) | 84 |
| Usabilidade | Facilidade de uso (0,30) | 100 |
| Usabilidade | Acessibilidade (0,40) | 83 |
| Usabilidade | Telemóvel e desempenho (0,30) | 80 |
| Estética | Composição visual (0,40) | 68 |
| Estética | Unidade e coerência (0,30) | 64 |
| Estética | Legibilidade e qualidade dos media (0,30) | 67 |

Valor medido e nível de cada critério (como foi medido: coluna M da folha «QEF» do Excel):

| Critério | Valor medido | Nível (%) |
|---|---|---|
| FN1 - O menu fixo dá acesso a todas as áreas a partir de qualquer página | 10/10 páginas | 100 |
| FN2 - Links e botões levam ao destino certo | 253/253 ligações internas | 100 |
| FN3 - Os botões «anterior» e «seguinte» seguem a ordem do curso | 5/5 lições | 100 |
| FL1 - Cada lição tem os blocos do modelo | 23/25 blocos | 75 |
| FL2 - O quiz de cada lição funciona | 20/20 perguntas | 100 |
| FL3 - O feedback é imediato e explica a resposta | 68/68 opções | 100 |
| FL4 - Cada lição mostra o objetivo, o momento e a duração | 5/5 lições | 100 |
| FL5 - Os recursos em PDF descarregam-se e imprimem-se | 5/5 PDFs | 100 |
| FM1 - Os media carregam e tocam sem erro | 26/31 media (84 %) | 25 |
| FM2 - A visita Matterport de cada lição funciona dentro da página | 3/5 lições | 50 |
| FM3 - As tags seguem o código do curso | 28/36 tags (78 %) | 50 |
| FM4 - Os avatares D-ID tocam na página «Sobre nós» | 0/5 avatares | 0 |
| FM5 - Cada lição junta vários tipos de media | 4,4 tipos por lição | 50 |
| FR1 - As páginas abrem sem erros | 10/10 páginas | 100 |
| FR2 - Os erros têm mensagem clara e caminho de volta | 3/4 testes | 75 |
| FR3 - Sem conta e sem dados pessoais | 3/4 verificações | 75 |
| UF1 - Usa-se sem ajuda | 4/4 tarefas (100 %) | 100 |
| UF2 - Usa-se depressa | 3,5 s por tarefa | 100 |
| UF3 - Satisfação (SUS) | SUS 97,5 | 100 |
| UF4 - Qualquer lição fica a 2 cliques da página inicial | 10/10 páginas | 100 |
| UA1 - Usa-se só com o teclado | 121/121 elementos | 100 |
| UA2 - Vídeos com legendas e transcrição | 12/25 vídeos (48 %) | 25 |
| UA3 - Zoom sem perder conteúdo | 200% | 100 |
| UA4 - A cor não é o único sinal | 0 informações | 100 |
| UA5 - Sem erros de acessibilidade | 0,5 erros por página | 75 |
| UA6 - Imagens com texto alternativo | 1/1 imagem | 100 |
| UA7 - Linguagem simples | Flesch ≈ 79 | 100 |
| UR1 - Funciona em vários ecrãs | 4/4 larguras | 100 |
| UR2 - Carrega depressa no telemóvel | LCP 2,7 s | 75 |
| UR3 - A página de lição é leve com dados móveis | 0,07 MB | 100 |
| UR4 - Funciona nos browsers mais usados | 1/4 browsers | 25 |
| EC1 - Grelha e alinhamento | 10/10 páginas | 100 |
| EC2 - Hierarquia visual clara | 1/10 páginas | 0 |
| EC3 - Regra dos terços nas imagens-chave | 1/2 imagens-chave | 50 |
| EC4 - Espaço negativo | 64 px | 100 |
| EC5 - Ênfase com uma só cor | 1 elemento | 75 |
| EC6 - O objetivo da página percebe-se em 5 segundos | 100% | 100 |
| EU1 - As 5 lições usam o mesmo modelo | 0 diferenças | 100 |
| EU2 - Paleta respeitada | 20 cores fora | 0 |
| EU3 - Tipografia legível e coerente | 4/5 condições | 75 |
| EU4 - Coerente com o MOOC do P1 | 4/5 elementos | 75 |
| EL1 - Contraste texto/fundo | 1 par | 75 |
| EL2 - Botões e links identificáveis | 75/247 (30 %) | 0 |
| EL3 - Vídeos com boa imagem e bom som | 100 % dos vídeos | 100 |
| EL4 - Cores e imagens adequadas ao tema | 5 (totalmente) | 100 |

**Problemas encontrados e correções** (para a 2.ª métrica):
- Vídeos da L5 em falta (FL1, FM1, FM5): corrigido a 18/11, depois da medição.
- Visita 3D da L4 por publicar (FL1, FM1, FM2, FM5) e visitas pouco funcionais no teste: rever com cada autor. Desde 22/11 a L4 também tem visita interativa.
- Legendas e transcrição em falta nos vídeos da L4 e da L5 e nos avatares (UA2, FM4). Decisão do grupo (19/11): a L4 e a L5 ficam sem legendas, com a transcrição tirada do texto dos guiões.
- Menu com 42 px de altura e ligações no texto com menos de 44 px (EL2).
- Títulos H3 do mesmo tamanho do texto e «Nesta lição» a 20 px (EC2).
- Número da lição em âmbar sobre a areia, 4,28:1 (EL1, UA5).
- Linhas de texto com mais de 75 caracteres (EU3) e 20 cores fora da paleta (EU2).
- HTTPS (FR3), desempenho no site real (UR2) e Chrome, Firefox e telemóvel (UR4): medidos no site publicado a 19/11: HTTPS em todas as páginas (FR3 100); no telemóvel, a lição aparece ≈ 1 s depois de carregar na ligação (UR2 100; o Lighthouse em modo telemóvel, que simula uma rede e um processador mais lentos, dá 2,97 s); Chrome, Edge, Firefox e telemóvel sem erros (UR4 100). QEF atual: q = 0,89.

**Limitações:** os testadores são os 5 elementos do grupo, que conhecem o site e o curso (daí os tempos de 2 a 6 s); o site foi medido num servidor local, antes de ser publicado. O teste Beta, com o Grupo 2, mede a plataforma com pessoas que nunca a viram.
