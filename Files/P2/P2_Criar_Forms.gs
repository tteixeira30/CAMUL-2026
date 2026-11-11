/**
 * P2 — Cria o questionário do artigo (D5) no Google Forms, de uma só vez.
 *
 * Fonte do texto: Files/P2/P2_Questionario.md (blocos A–F). Se o texto mudar lá,
 * muda aqui também.
 *
 * Como usar (Tiago, uma vez só):
 *   1. https://script.google.com → Novo projeto → apagar o que lá está → colar este ficheiro.
 *   2. Pôr o link do YouTube («não listado») em VIDEO_URL, aqui em baixo.
 *   3. Escolher a função criarQuestionario → Executar → autorizar com a conta Google.
 *   4. O registo de execução mostra 3 links: editar o Forms, responder (é este que se envia) e a folha de respostas.
 *
 * ⚠ Correr só UMA vez: cada execução cria um formulário novo.
 * ⚠ Depois de criado, NÃO mudar a ordem das perguntas nem das linhas das grelhas:
 *   o script de análise lê as colunas da folha por ordem (aviso do Bruno, 11/11).
 *   Corrigir uma gralha num texto pode-se; mudar de sítio, não.
 */

// Link do vídeo da visita da L2 no YouTube («não listado»). Vazio = o bloco C fica com um aviso no lugar do vídeo.
const VIDEO_URL = '';

const MATTERPORT_URL = 'https://my.matterport.com/show/?m=byVsURgSaSF';
const CURSO_URL = 'https://www.udemy.com/course/socorros-psicologicos-cuidador-de-demencia-em-crise/';
const ESCALA = ['1', '2', '3', '4', '5'];
const LEGENDA_ESCALA = '1 = Discordo totalmente · 2 = Discordo · 3 = Nem concordo nem discordo · 4 = Concordo · 5 = Concordo totalmente.';

// As 4 afirmações iguais em C2 e D4, pela mesma ordem.
const AFIRMACOES = [
  'Percebi como é a casa (que divisões tem e onde ficam).',
  'Percebi onde estão os riscos e o kit de emergência.',
  'Prendeu-me a atenção.',
  'A duração foi adequada.',
];

// SUS em português europeu: Martins et al. (2015), Tabela 1, tal como publicado. Não mudar a ordem.
const SUS = [
  'Acho que gostaria de utilizar este produto com frequência.',
  'Considerei o produto mais complexo do que necessário.',
  'Achei o produto fácil de utilizar.',
  'Acho que necessitaria de ajuda de um técnico para conseguir utilizar este produto.',
  'Considerei que as várias funcionalidades deste produto estavam bem integradas.',
  'Achei que este produto tinha muitas inconsistências.',
  'Suponho que a maioria das pessoas aprenderia a utilizar rapidamente este produto.',
  'Considerei o produto muito complicado de utilizar.',
  'Senti-me muito confiante a utilizar este produto.',
  'Tive que aprender muito antes de conseguir lidar com este produto.',
];

function criarQuestionario() {
  const form = FormApp.create('Visitas 3D num curso online');

  // Definições (P2_Questionario.md §0)
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false); // obrigaria a entrar com a conta Google
  form.setProgressBar(true);
  form.setShuffleQuestions(false); // o SUS tem ordem fixa
  form.setAllowResponseEdits(false);
  form.setPublishingSummary(false);
  form.setConfirmationMessage(
    'Obrigado pela sua ajuda! Se quiser ver o curso completo (gratuito, em português): ' + CURSO_URL);

  // ---------- A. Consentimento (1.ª página) ----------
  form.setDescription([
    'Somos estudantes do ISEP (Instituto Superior de Engenharia do Porto), da unidade curricular de Conceção e Autoria Multimédia. Criámos um curso online gratuito para quem cuida de pessoas com demência em situações de crise. Neste curso, a casa da D. Rosa (uma personagem fictícia) aparece de duas formas: num vídeo e numa visita 3D que se pode explorar.',
    '',
    'Queremos saber qual das duas ajuda mais. Vai ver um vídeo curto (1 min 40 s), explorar a visita 3D e responder a algumas perguntas. Demora cerca de 10 minutos. Use um telemóvel ou um computador com internet.',
    '',
    'O questionário é anónimo: não pedimos o nome, o email nem nada que o identifique. Pode desistir a qualquer momento: basta fechar a página, e nada fica guardado. As respostas servem só para um artigo científico da unidade curricular e aparecem sempre em conjunto, nunca uma a uma. A casa da visita não é de ninguém que participe no curso e não mostra dados pessoais.',
    '',
    'Dúvidas: 1240441@isep.ipp.pt (Grupo 1, CAMUL 2026/2027).',
  ].join('\n'));

  const a1 = form.addMultipleChoiceItem().setTitle('Tem 18 anos ou mais?').setRequired(true);
  a1.setChoices([
    a1.createChoice('Sim', FormApp.PageNavigationType.CONTINUE),
    a1.createChoice('Não', FormApp.PageNavigationType.SUBMIT),
  ]);
  const a2 = form.addMultipleChoiceItem().setTitle('Leu a informação acima e aceita participar?').setRequired(true);
  a2.setChoices([
    a2.createChoice('Sim, aceito participar', FormApp.PageNavigationType.CONTINUE),
    a2.createChoice('Não aceito', FormApp.PageNavigationType.SUBMIT),
  ]);

  // ---------- B. Perfil ----------
  form.addPageBreakItem().setTitle('Perfil').setHelpText('Quatro perguntas rápidas sobre si.');
  escolha(form, 'Idade', ['18–24', '25–34', '35–44', '45–54', '55–64', '65 ou mais']);
  escolha(form, 'É ou já foi cuidador(a) de alguém da família ou próximo (por exemplo, uma pessoa com demência, doença ou deficiência)?',
    ['Sim, atualmente', 'Sim, no passado', 'Não']);
  escolha(form, 'Antes de hoje, já tinha usado visitas 3D a espaços interiores (por exemplo, a casas, museus ou lojas)?',
    ['Nunca', 'Uma ou duas vezes', 'Várias vezes']);
  escolha(form, 'Em que aparelho está a responder?', ['Telemóvel', 'Computador (portátil ou fixo)', 'Tablet'])
    .setHelpText('Use o mesmo aparelho até ao fim.');

  // ---------- C. O vídeo da visita ----------
  form.addPageBreakItem().setTitle('O vídeo da visita').setHelpText(
    'Veja este vídeo até ao fim (1 min 40 s). É uma visita à casa da D. Rosa. Os balões que se abrem são dicas para preparar a casa e um kit de emergência antes de uma crise (um incêndio, uma cheia, uma guerra).');
  if (VIDEO_URL) {
    form.addVideoItem().setTitle('A casa da D. Rosa (vídeo)').setVideoUrl(VIDEO_URL).setWidth(640);
  } else {
    form.addSectionHeaderItem().setTitle('⚠ FALTA O VÍDEO')
      .setHelpText('Pôr aqui o vídeo do YouTube (Adicionar vídeo) antes de enviar o link. Depois apagar este aviso.');
  }
  escolha(form, 'Viu o vídeo até ao fim?', ['Sim', 'Vi só uma parte']);
  grelha(form, 'Sobre o vídeo que acabou de ver, diga se concorda com cada frase.', AFIRMACOES, LEGENDA_ESCALA);

  // ---------- D. A visita interativa ----------
  form.addPageBreakItem().setTitle('A visita interativa').setHelpText([
    'Agora vai explorar a mesma casa em 3D. Abra este link numa nova janela ou separador:',
    MATTERPORT_URL,
    '',
    'Como se mexe: clique (ou toque) no chão para andar · arraste para olhar à volta · os botões em baixo mostram a casa vista de cima e a planta · as dicas são pequenos círculos coloridos: clique num para abrir o balão.',
    '',
    'A sua tarefa: encontre estas 3 dicas e leia o que dizem:',
    '1. L2 - O kit',
    '2. L2 - Caminho livre',
    '3. L2 - Rede de apoio',
    '',
    'Veja as horas antes de começar. Pare quando as encontrar ou ao fim de 5 minutos, mesmo que falte alguma. Depois volte a esta página.',
  ].join('\n'));
  escolha(form, 'Quantas das 3 dicas encontrou?', ['As 3', '1 ou 2', 'Nenhuma']);
  escolha(form, 'Quanto tempo demorou?',
    ['Menos de 2 minutos', '2 a 5 minutos', 'Mais de 5 minutos ou parei antes de as encontrar']);
  form.addCheckboxItem().setTitle('Como chegou às dicas? (pode marcar várias)')
    .setChoiceValues(['Andando pela casa', 'Pela casa vista de cima ou pela planta', 'Pela pesquisa (menu ⋮ → Pesquisar)', 'Outra'])
    .setRequired(false);
  grelha(form, 'Sobre a visita interativa, diga se concorda com cada frase.', AFIRMACOES, LEGENDA_ESCALA);

  // ---------- E. SUS ----------
  form.addPageBreakItem().setTitle('Usabilidade da visita interativa').setHelpText(
    'Pense na visita interativa que acabou de usar. Nas frases abaixo, «produto» quer dizer essa visita 3D. Para cada frase, escolha de 1 (Discordo totalmente) a 5 (Concordo totalmente). Responda depressa, com a primeira impressão. Se não souber, escolha 3.');
  grelha(form, 'Diga se concorda com cada frase sobre a visita 3D.', SUS, LEGENDA_ESCALA);

  // ---------- F. Preferência e comentários ----------
  form.addPageBreakItem().setTitle('Preferência e comentários');
  escolha(form, 'Num curso online, como prefere conhecer um espaço como esta casa?',
    ['O vídeo da visita', 'A visita interativa', 'As duas']);
  form.addParagraphTextItem().setTitle('O que mais o ajudou a perceber a casa (no vídeo ou na visita)?').setRequired(false);
  form.addParagraphTextItem().setTitle('O que foi mais difícil?').setRequired(false);

  // Folha de respostas (descarregar como .xlsx a 19/11)
  const folha = SpreadsheetApp.create('Visitas 3D num curso online (respostas)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, folha.getId());

  Logger.log('Editar o formulário: ' + form.getEditUrl());
  Logger.log('Link para responder (enviar este): ' + form.getPublishedUrl());
  Logger.log('Folha de respostas: ' + folha.getUrl());
  if (!VIDEO_URL) Logger.log('⚠ Falta o vídeo: pôr no bloco C antes de enviar o link.');
}

// Escolha múltipla obrigatória.
function escolha(form, titulo, opcoes) {
  return form.addMultipleChoiceItem().setTitle(titulo).setChoiceValues(opcoes).setRequired(true);
}

// Grelha 1–5 obrigatória: o Forms pede então uma resposta em cada linha.
function grelha(form, titulo, linhas, ajuda) {
  return form.addGridItem().setTitle(titulo).setRows(linhas).setColumns(ESCALA)
    .setHelpText(ajuda).setRequired(true);
}
