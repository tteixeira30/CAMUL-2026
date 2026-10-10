# CAMUL · P1 — Overview das melhores abordagens
*29/09/2026 · base: `S1_Plataformas_Grupo1.xlsx` (9 plataformas + 6 ferramentas de avaliação), `contexto-camul.md`, QEF de anos anteriores.*

> Documento da S1 (29/09). Decisões posteriores que prevalecem: 5 lições (grupo de 5), padrão de lição do `S3_MOOC_Template_Grupo1.xlsx`, tema em `P1_Tema_Matterport.md`.

## 0. Proposta
Vamos usar a **Udemy** como plataforma do MOOC e o **Google Forms** para a avaliação externa (análise de público, SUS e pré/pós-teste). Escolhemos a Udemy porque é gratuita, não exige montar nem manter servidor e tem guidelines oficiais e explícitas, o que responde diretamente aos 20% de "integração com a plataforma" (e é a referência usada no critério FI02 dos QEF anteriores). O Matterport entra como vídeo do percurso + link para a visita 3D em cada lição, e o Google Forms complementa os quizzes nativos da Udemy com os questionários que ela não oferece, sem custos nem logins extra.

## 1. O que decide a escolha
| Fator | Porquê pesa |
|---|---|
| Matterport em **todas** as lições | Ideal é iframe; sem iframe → vídeo do percurso + link (menos interativo) |
| Qualidade multimédia **40%** | Vídeo + 3D + atividades valem mais que vídeo simples |
| Integração com a plataforma **20%** | Usar as ferramentas nativas da plataforma e **cumprir as guidelines dela** (critério FI02 em 5 QEF anteriores, sempre com Udemy como referência) |
| Acesso a "grandes massas" + custo | Grátis, sem limite baixo de utilizadores |
| Prazo | 7 semanas (entrega 10/11) → pouca margem para infraestrutura pesada |

## 2. Filtro das plataformas
| Estado | Plataformas | Motivo |
|---|---|---|
| ⛔ Eliminadas | Coursera, edX.org, FutureLearn, Khan Academy, Versal | Só parceiros / sem criadores externos / descontinuado |
| ⛔ Eliminada (custo) | LearnWorlds | Só trial de 30 dias; depois Pro Trainer $99/mês |
| ✅ Viáveis | **Udemy**, Moodle, Open edX | Publicação própria e gratuita possível |

## 3. Abordagens viáveis
| | A · Udemy (**escolhida**) | B · Moodle + H5P | C · Open edX |
|---|---|---|---|
| Matterport | Sem iframe → vídeo do percurso + link ⚠️ | iframe em Página/Livro/Lição ✅ | Componente HTML/iframe ✅ |
| Avaliação nativa | Quizzes, practice tests, assignments (cursos grátis: sem Q&A, mensagens nem certificado) | Quiz, H5P (vídeo interativo, drag&drop, hotspots), Workshop (peer), badges | Problemas (MCQ, drag&drop, image mapped), ORA peer/self |
| Guidelines (20%) | Oficiais e explícitas: ≥30 min de vídeo, ≥5 aulas, grátis <2 h, vídeo ≥720p, revisão de qualidade | Não há guidelines "MOOC" oficiais → teríamos de as escrever nós | Guias de autoria Open edX |
| Alojamento/custo | Grátis, sem servidor | Moodle ISEP (pedir ao docente), Docker numa VM ou MoodleCloud (trial 28 dias; Starter ~150 €/ano) | VM própria com Tutor (exigente em RAM) ou SaaS pago |
| Risco principal | Matterport pouco integrado; aprovação da Udemy fora do nosso controlo | Infraestrutura + guidelines "caseiras" | Tempo de setup/manutenção |

**Mitigar os riscos da Udemy:**
- **Matterport:** cada lição tem um vídeo do percurso gravado e uma aula de artigo/recurso com o link da visita e uma missão ("encontra X"), avaliada depois no quiz.
- **Mínimo de 30 min de vídeo:** 5 lições × ~8 min dá ~40 min → cada lição deve manter **≈8 min de vídeo** (o percurso Matterport gravado conta), mais trailer/introdução do curso.
- **Aprovação:** seguir a checklist de qualidade desde o protótipo e submeter para revisão na **sem. 6 (27/10)**, para ter margem antes da entrega (10/11). Plano B: publicar como curso não listado/rascunho partilhado com o docente.

## 4. Avaliação — combinação escolhida
| Momento | Ferramenta | Uso |
|---|---|---|
| Dentro de cada lição | **Nativa** (quiz da Udemy) | 3–5 perguntas/lição, incluindo perguntas sobre o que se encontra na visita Matterport; conta para os 20% de integração |
| Análise de público (sem. 2) | **Google Forms** | Questionário de necessidades (Aula 2) |
| Testes (sem. 5 e 7) | **Google Forms** | SUS (10 itens) + pré/pós-teste de aprendizagem (link numa aula da Udemy) |
| Apresentação final (opcional) | Kahoot | Quiz rápido com a turma |

Regra: só duas ferramentas externas no máximo → coerência visual e menos logins.

## 5. Padrão de lição (~8–10 min = 1 objeto de aprendizagem)
| Aula (Udemy) | Tipo | Detalhe |
|---|---|---|
| 1 · Objetivo + gancho | Vídeo (~1 min) | 1 objetivo claro; ligação à lição anterior |
| 2 · Conteúdo | Vídeo (~4 min) | Narração + visual (Mayer: modalidade, sem redundância), legendas |
| 3 · Percurso Matterport | Vídeo (~2–3 min) + recurso | Gravação do percurso comentado; link da visita com `play=1&qs=1&help=0&brand=0`; missão "encontra X" |
| 4 · Prática/avaliação | Quiz | 3–5 perguntas com feedback imediato |
| 5 · Síntese + ponte | Vídeo (~1 min) | Resumo e o que vem na próxima lição |

Total por lição ≈ 8–9 min de vídeo → curso com ≥30 min e ≥5 aulas, dentro das regras.
Acessibilidade: legendas em todos os vídeos; o vídeo do percurso serve de alternativa para mobile/ligações lentas.

## 6. Mensagem para a equipa
> Olá a todos! Depois de analisarmos as plataformas, ficaram três opções viáveis. A **Udemy** é gratuita, não precisa de servidor e tem guidelines oficiais muito claras (≥30 min de vídeo, ≥5 aulas, revisão de qualidade), mas não permite iframe, por isso o Matterport entra como vídeo do percurso + link para a visita 3D. O **Moodle + H5P** é o que integra melhor o Matterport (iframe) e tem as atividades mais ricas, mas obriga a arranjar alojamento (Moodle do ISEP, Docker ou MoodleCloud pago) e a escrevermos nós as "guidelines" da plataforma. O **Open edX** também aceita iframe e tem boas ferramentas de avaliação, mas exige uma VM com muitos recursos e muito tempo de configuração, o que não cabe nas 7 semanas. Na minha opinião devemos avançar com a **Udemy**: em custos e simplicidade é a melhor e a mais fácil, podemos focar o tempo nos conteúdos (40% da nota) em vez da infraestrutura, e as guidelines oficiais dão-nos logo a base para os 20% de integração. Para a avaliação usamos os quizzes da Udemy dentro das lições e o Google Forms para a análise de público e os testes (SUS e pré/pós-teste). Digam o que acham!

## 7. Próximos passos
| Quando | Ação |
|---|---|
| Até 29/09 | Submeter S1: Excel + proposta (Udemy + Google Forms) |
| 29/09 (tema) | Confirmar que a Udemy serve o tema/público; 5 elementos → 5 lições (confirmado na Aula 3) |
| Sem. 2 | Criar a conta de instrutor na Udemy; questionário de público no Google Forms |
| Sem. 3 | `MOOC Template.xlsx` com o padrão de lição acima; fluxograma de navegação |
| Sem. 4 | Proof of concept: 1 lição-piloto em rascunho na Udemy (vídeo + percurso Matterport + quiz) |
| Sem. 6 (27/10) | Submeter o curso para revisão da Udemy |
| Cedo | Definir o QEF próprio (incluir "respeitar guidelines da plataforma" com a checklist da Udemy) |

Grupo com 5 elementos → 5 lições, uma por elemento (confirmado na Aula 3). Papéis transversais e lições: ver `S2_MOOC-choice_planning_Grupo1.docx` e `S3_MOOC_Template_Grupo1.xlsx`.
