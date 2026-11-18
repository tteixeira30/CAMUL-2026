// Plataforma «Cuidar em Crise» (projeto da teórica): monta o site em Files/Teoricas/Plataforma/.
// Uso (na pasta Files/Teoricas):  node Plataforma_Montar.js
// - Páginas: index (a página da composição visual + menu), curso, licao-1…5, cor, sobre-nos, contactos, 404.
// - Copia os vídeos, as legendas, os avatares e os PDFs para Plataforma/media e Plataforma/recursos (fora do git).
// - Um vídeo que ainda não existe aparece como «em breve»; quando chegar, guardá-lo com o nome indicado
//   em AULAS (coluna mp4) e correr o script outra vez. No fim, o script lista o que falta.
// - Publicar: arrastar a pasta Plataforma/ para app.netlify.com/drop (ou Deploys → arrastar, no site do grupo).
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, ".."), SAI = path.join(__dirname, "Plataforma");
const UDEMY = "https://www.udemy.com/course/socorros-psicologicos-cuidador-de-demencia-em-crise/";
const falta = [];

// ───────────────────────────── Conteúdo (dos guiões Files/P1/L<n>/Guiao_L<n>.md) ─────────────────────────────
const LICOES = [
{
  n: 1, titulo: "Crise, demência e quem cuida", momento: "Compreender", autor: "Bruno Lopes", video: "8:33",
  resumo: "O que muda numa crise para a pessoa e para quem cuida, e os 3 passos dos primeiros socorros psicológicos",
  aprende: "perceber o que muda numa crise para a pessoa com demência e para si, reconhecer os sinais de alarme e conhecer os 3 passos: observar, escutar e encaminhar.",
  aulas: [
    ["Crise, demência e quem cuida", "1:10", "P1/L1/L1_Aula1_Gancho.mp4", "P1/L1/Legendas/S8_Legenda_Aula1_L1.vtt"],
    ["A pessoa, quem cuida e os 3 passos", "3:12", "P1/L1/L1_Aula2_Conteudo.mp4", "P1/L1/Legendas/S8_Legenda_Aula2_L1.vtt"],
    ["Quatro crises, a mesma pessoa", "1:47", "P1/L1/L1_Aula3_Crises.mp4", "P1/L1/Legendas/S8_Legenda_Aula3_L1.vtt"],
    ["Sinais a que estar atento", "1:51", "P1/L1/L1_Aula4_Sinais.mp4", "P1/L1/Legendas/S8_Legenda_Aula4_L1.vtt"],
    ["Síntese e próxima lição", "0:33", "P1/L1/L1_Aula4_Sintese.mp4", "P1/L1/Legendas/S8_Legenda_Aula6_L1.vtt"],
  ],
  visita: { m: "byVsURgSaSF", titulo: "A casa pelos olhos da D. Rosa", aula: 2,
    tarefa: "Percorra a casa da D. Rosa e abra as etiquetas «L1». Depois procure as 3 etiquetas «Atividade»: são coisas que lhe dão segurança e que levaria numa saída de emergência.",
    cores: [["azul", "pessoa com demência"], ["laranja", "quem cuida"]] },
  atividade: `<h2>Atividade · O que dá segurança?</h2>
    <p>Pense na pessoa de quem cuida. Que três coisas a fazem sentir-se segura em casa? Pode ser um objeto, um hábito, uma pessoa, uma música… Se tivessem de sair de casa de repente, por um incêndio, uma cheia ou uma guerra, o que levaria consigo?</p>
    <ol class="campos"><li><label>1.ª coisa <input type="text" autocomplete="off"></label></li><li><label>2.ª coisa <input type="text" autocomplete="off"></label></li><li><label>3.ª coisa <input type="text" autocomplete="off"></label></li></ol>
    <p class="nota">O que escreve fica só neste ecrã: não é enviado nem guardado. Escreva a lista num papel ou no telemóvel: vai precisar dela na Lição 2, para preparar o kit.</p>
    <details class="sugestao"><summary>Ver exemplos</summary><ul><li><b>Uma manta conhecida:</b> aquece e acalma. Numa saída de emergência, leve-a consigo.</li><li><b>Uma música de que gosta:</b> acalma num sítio novo. Guarde-a no telemóvel.</li><li><b>Um objeto de todos os dias</b> (caneca, livro, almofada): lembra-lhe quem é e onde pertence.</li></ul></details>`,
  recursos: [],
  quiz: [
    ["Chega a ordem para sair de casa por causa de um incêndio. A D. Rosa senta-se no sofá e recusa-se a sair. Qual é a explicação mais provável?", [
      ["Não percebe o perigo, e a casa é o que lhe dá segurança.", 1, "Certo, porque a pessoa com demência pode não perceber o perigo, e sair é perder as suas referências."],
      ["Quer contrariar a filha e mostrar que ainda decide sozinha.", 0, "Ainda não: a recusa não é teimosia; é a doença a reagir a algo que a pessoa não compreende."],
      ["Não ouviu o alerta, porque o rádio e a televisão estavam desligados.", 0, "Ainda não: mesmo ouvindo o alerta, pode não perceber o que significa."]]],
    ["A família passa a noite num pavilhão por causa de uma cheia. A D. Rosa anda de um lado para o outro e pede para ir para casa. O que está a acontecer?", [
      ["Está a fazer birra, porque não gosta de dormir fora de casa.", 0, "Ainda não: a agitação tem uma causa: o medo e a confusão."],
      ["Já não há nada a fazer, a não ser esperar que se canse.", 0, "Ainda não: há muito que pode fazer para a acalmar. Vamos vê-lo na Lição 3."],
      ["O sítio novo e o ruído deixam-na confusa e com medo.", 1, "Certo, porque a agitação é muitas vezes uma reação a um ambiente que deixou de fazer sentido."]]],
    ["Durante um confinamento, o centro de dia fecha e as visitas param. O que é mais provável acontecer à D. Rosa?", [
      ["Nada muda, porque fica em casa e está em segurança.", 0, "Ainda não: estar em casa não chega se a rotina e o contacto com os outros desaparecem."],
      ["Perde a rotina e as visitas e fica mais desorientada.", 1, "Certo, porque a rotina é uma das suas principais referências."],
      ["Fica mais autónoma, porque passa a ter mais tempo livre para si.", 0, "Ainda não: sem rotina, a pessoa com demência tende a ficar mais desorientada."]]],
    ["A família fugiu de um conflito armado e está há uma semana num centro de acolhimento, longe de casa. A Ana sente-se irritada e cansada e não consegue pensar com clareza. O que significa?", [
      ["São reações normais ao stress; ela também precisa de cuidar de si.", 1, "Certo, porque o cuidador também é afetado pela crise; sem cuidar de si, não consegue cuidar do outro."],
      ["Mostra que não é boa cuidadora para a mãe.", 0, "Ainda não: sentir isto não diz nada sobre o seu valor como cuidadora."],
      ["Não quer dizer nada: é só o cansaço da viagem e vai passar sozinho.", 0, "Ainda não: estas reações merecem atenção; quem cuida também precisa de apoio."]]],
  ],
},
{
  n: 2, titulo: "Preparar antes", momento: "Antes", autor: "Tiago Teixeira", video: "8:11",
  resumo: "O kit para a pessoa, a ficha da pessoa e um plano de apoio para quem cuida",
  aprende: "preparar o kit para a pessoa de quem cuida, a ficha da pessoa e um plano de apoio para si.",
  aulas: [
    ["O dia em que nada estava pronto", "0:31", "P1/L2/L2_Aula5_Gancho.mp4", "P1/L2/Legendas/S8_Legenda_Aula5_L2.vtt"],
    ["Preparar antes", "4:42", "P1/L2/L2_Aula6_Conteudo.mp4", "P1/L2/Legendas/S8_Legenda_Aula6_L2.vtt"],
    ["Atividade: complete o kit", "2:27", "P1/L2/L2_Aula7_Atividade.mp4", "P1/L2/Legendas/S8_Legenda_Aula7_L2.vtt"],
    ["Síntese e próximo passo", "0:31", "P1/L2/L2_Aula8_Sintese.mp4", "P1/L2/Legendas/S8_Legenda_Aula8_L2.vtt"],
  ],
  visita: { m: "byVsURgSaSF", titulo: "Caça ao kit na casa da D. Rosa", aula: 2,
    tarefa: "Percorra a casa e encontre as 8 etiquetas «L2»: a medicação, a ficha da pessoa, o objeto de conforto, a fotografia, os óculos e a roupa, o caminho livre, a rede de apoio e o kit junto à porta.",
    cores: [["azul", "pessoa com demência"], ["laranja", "quem cuida"]] },
  atividade: `<h2>Atividade · Complete o kit</h2>
    <p>Uma cheia, um incêndio ou um conflito armado podem obrigar a sair de casa em poucos minutos. A Ana tem dois minutos para preparar o saco da mãe. Destes 12 itens, <b>quais vão para o kit? Escolha 8.</b></p>
    <ol class="kit" data-certos="1,2,3,5,7,9,11,12">
      <li><label><input type="checkbox"> Medicação para alguns dias</label></li>
      <li><label><input type="checkbox"> Receitas ou lista da medicação</label></li>
      <li><label><input type="checkbox"> Cartão com o diagnóstico e o contacto da Ana</label></li>
      <li><label><input type="checkbox"> Toda a medicação que há em casa</label><span class="porque">Só a medicação da pessoa, para alguns dias: o saco tem de ser leve.</span></li>
      <li><label><input type="checkbox"> Uma fotografia recente da D. Rosa</label></li>
      <li><label><input type="checkbox"> A pasta com todos os papéis da casa</label><span class="porque">Bastam cópias ou fotografias dos documentos importantes.</span></li>
      <li><label><input type="checkbox"> Uma muda de roupa e calçado confortável</label></li>
      <li><label><input type="checkbox"> Um objeto novo, para a distrair</label><span class="porque">Num sítio estranho, acalma o que é familiar, não o que é novo.</span></li>
      <li><label><input type="checkbox"> Óculos de reserva</label></li>
      <li><label><input type="checkbox"> O álbum de fotografias da família</label><span class="porque">Uma ou duas fotografias chegam; o álbum pesa e pode perder-se.</span></li>
      <li><label><input type="checkbox"> A manta do sofá da sala</label></li>
      <li><label><input type="checkbox"> Uma cópia da ficha da pessoa</label></li>
    </ol>
    <p><button type="button" class="btn2" data-acao="kit">Ver sugestão</button> <span class="kit-res" role="status" aria-live="polite"></span></p>
    <p>Agora é a sua vez: descarregue a <b>ficha da pessoa</b> e o <b>plano de apoio</b> (em «Recursos») e preencha-os esta semana, para a pessoa de quem cuida.</p>`,
  recursos: [["Checklist do kit", "P1/L2/Recursos/Checklist_Kit.pdf"], ["Ficha da pessoa", "P1/L2/Recursos/Ficha_Pessoa.pdf"], ["Plano de apoio", "P1/L2/Recursos/Plano_Apoio.pdf"]],
  quiz: [
    ["Em que é que o kit da D. Rosa é diferente de um kit de emergência comum?", [
      ["Leva também o que a identifica e o que a acalma: o diagnóstico, uma fotografia recente e objetos de conforto.", 1, "Certo, porque se ela se perder ou ficar agitada, são estas coisas que ajudam os outros e a acalmam."],
      ["Não é diferente: água, comida e lanterna chegam.", 0, "Ainda não: isso serve a todos, mas a pessoa com demência precisa de mais para se sentir segura e ser identificada."],
      ["Leva mais roupa.", 0, "Ainda não: a roupa é importante, mas o que distingue este kit é a identificação e os objetos de conforto."]]],
    ["A Ana quer pôr no kit algo que acalme a mãe num sítio desconhecido. O que escolhe?", [
      ["Um objeto novo, comprado para a ocasião.", 0, "Ainda não: num sítio estranho, o novo pode confundir ainda mais; acalma o que é familiar."],
      ["Nada: no acolhimento há tudo o que é preciso.", 0, "Ainda não: no acolhimento há o básico, mas não o que é só da D. Rosa."],
      ["A manta que a mãe usa no sofá e a música de que gosta.", 1, "Certo, porque os objetos e os hábitos familiares levam um pouco de casa para o sítio novo."]]],
    ["No centro de acolhimento, a Ana tem de ir tratar do registo e um voluntário fica com a D. Rosa. O que ajuda mais o voluntário?", [
      ["Dizer-lhe só que ela tem demência.", 0, "Ainda não: ajuda, mas não diz ao voluntário o que fazer se ela ficar agitada."],
      ["A ficha da pessoa: medicação, o que a acalma, o que a perturba e contactos.", 1, "Certo, porque numa só folha o voluntário sabe como cuidar dela enquanto a Ana não está."],
      ["Pedir-lhe que não fale com ela.", 0, "Ainda não: o silêncio pode deixá-la mais insegura; o voluntário precisa de saber como falar com ela."]]],
    ["Durante a crise, a Ana fica doente e não pode cuidar da mãe. O que devia estar preparado?", [
      ["Nada: na altura resolve-se.", 0, "Ainda não: numa crise, decidir na hora é muito mais difícil; o plano faz-se antes."],
      ["Ligar para o 112.", 0, "Ainda não: o 112 é para situações de perigo; não resolve quem fica com a D. Rosa nos dias seguintes."],
      ["Uma pessoa combinada para a substituir, com uma cópia da ficha e os contactos.", 1, "Certo, porque assim a D. Rosa fica com alguém que já sabe do que ela precisa."]]],
  ],
},
{
  n: 3, titulo: "Primeiro contacto: acalmar", momento: "Durante", autor: "Rodrigo Silva", video: "8:02",
  resumo: "Acalmar-se primeiro e acalmar a pessoa: o tom, as frases e o espaço (P.A.R.A.R.)",
  aprende: "reconhecer os sinais de angústia, acalmar-se primeiro (pausa de 10 segundos) e acalmar a pessoa com o tom, as frases certas e menos estímulos: P.A.R.A.R.",
  aulas: [
    ["Quando a pessoa entra em pânico", "0:35", "P1/L3/Videos/Gancho.mp4", "P1/L3/Videos/Legendas_Gancho.vtt"],
    ["Certo vs errado: o que fazer", "4:56", "P1/L3/Videos/VideoCertoVsErrado.mp4", "P1/L3/Videos/Legendas_CertoVsErrado.vtt"],
    ["Acalmar-se para acalmar: respiração guiada", "1:53", "P1/L3/Videos/RespiracaoGuiada.mp4", "P1/L3/Videos/Legendas_RespiracaoGuiada.vtt",
      "Esta pausa é para si. Antes de acalmar a pessoa de quem cuida, acalme-se. Demora dez segundos. Se puder, sente-se ou apoie-se numa parede. Deixe os ombros caírem. Vamos respirar juntos. Inspire pelo nariz, devagar, contando até quatro: um, dois, três, quatro. Agora expire pela boca, mais devagar, contando até seis: um, dois, três, quatro, cinco, seis. Outra vez… Mais uma… Repare como está o seu corpo: os ombros, as mãos, a voz. Quando a sua voz estiver mais baixa e o seu passo mais lento, a pessoa vai sentir. É por aqui que começa o primeiro contacto. Repita este ciclo as vezes que precisar. Quando estiver pronto, abra os olhos e volte à situação. Primeiro, acalme-se."],
    ["Síntese e próximo passo", "0:38", "P1/L3/Videos/Sintese.mp4", "P1/L3/Videos/Legendas_Sintese.vtt"],
  ],
  visita: { m: "MYocNsEFxjo", titulo: "Reduzir estímulos na sala da D. Rosa", aula: 2,
    tarefa: "Comece pela etiqueta laranja «Pausa de 10 segundos», à entrada. Depois encontre o que pode assustar a D. Rosa (televisão, janelas, portas, espelho) e, no fim, o canto calmo e o objeto de conforto.",
    cores: [["azul", "pessoa com demência e o espaço"], ["laranja", "quem cuida"]] },
  atividade: `<h2>Atividade · Acalmar-se para acalmar</h2>
    <p>Antes de acalmar a pessoa de quem cuida, acalme-se. Demora dez segundos. Se puder, sente-se e deixe os ombros caírem. Siga o círculo: <b>inspire</b> pelo nariz enquanto cresce (4 segundos) e <b>expire</b> pela boca enquanto encolhe (6 segundos). A versão guiada, com voz, é o vídeo «Respiração guiada», acima.</p>
    <div class="respirar"><button type="button" class="btn2" data-acao="respirar" aria-pressed="false">Começar</button><div class="circulo" aria-hidden="true"></div><p class="resp-txt" role="status" aria-live="polite">Carregue em «Começar».</p></div>
    <details class="sugestao"><summary>Lembre-se de P.A.R.A.R.</summary><ul><li><b>P</b>ausa: respire devagar durante dez segundos.</li><li><b>A</b>proximar-se: de frente e devagar.</li><li><b>R</b>eduzir estímulos: ruído, movimento, luz.</li><li><b>A</b>colher: valide a emoção, sem corrigir.</li><li><b>R</b>econfortar: uma ideia por frase.</li></ul></details>`,
  recursos: [],
  quiz: [
    ["A pessoa pega na mala e diz: «Quero ir para casa», no meio da evacuação. O que diz?", [
      ["«Já está em casa, sente-se!»", 0, "Ainda não: contrariar e corrigir aumenta o medo; a pessoa sente que não a ouvem."],
      ["«Percebo que quer ir para casa. Vamos juntos, eu ajudo com o casaco.»", 1, "Certo, porque valida o desejo e propõe um passo simples, sem discutir."],
      ["Explica durante um minuto o que se está a passar.", 0, "Ainda não: é informação a mais; em pânico, a pessoa retém o tom, não os argumentos."],
      ["Agarra-a pelo braço e leva-a.", 0, "Ainda não: a imposição física aumenta a resistência e o medo."]]],
    ["A TV está ligada, há uma sirene lá fora e a pessoa tapa os ouvidos e chora. O que faz?", [
      ["Aumenta a voz para ela ouvir.", 0, "Ainda não: soma mais ruído a um ambiente que já a perturba."],
      ["Diz-lhe que não é nada.", 0, "Ainda não: nega o que ela sente e não reduz o que a assusta."],
      ["Desliga a TV ou o rádio, leva-a para uma zona mais calma e fala baixo.", 1, "Certo, porque reduzir estímulos é a primeira intervenção possível."],
      ["Pede-lhe que se acalme.", 0, "Ainda não: é uma ordem que ela não consegue cumprir; primeiro reduz-se o que a perturba."]]],
    ["Sente o coração a acelerar e as mãos a tremer, e a pessoa recusa sair. O que faz?", [
      ["Insiste mais alto.", 0, "Ainda não: a pressa e a voz alta passam a tensão para a pessoa."],
      ["Faz uma pausa de 10 segundos, respira devagar e, se possível, pede a outra pessoa que assuma.", 1, "Certo, porque acalmar-se primeiro é parte da intervenção."],
      ["Dá ordens rápidas, uma a seguir à outra.", 0, "Ainda não: várias ideias seguidas aumentam a confusão."],
      ["Ignora a própria tensão e continua.", 0, "Ainda não: a tensão de quem cuida é percebida pela pessoa."]]],
    ["A pessoa diz: «Não vou, tenho medo.» O que responde?", [
      ["«Não há razão nenhuma para ter medo.»", 0, "Ainda não: corrige em vez de acolher a emoção."],
      ["«Está assustado. Eu percebo. Estou aqui consigo.»", 1, "Certo, porque valida a emoção e mostra presença; o passo seguinte pode ser «Vamos juntos até à porta.»"],
      ["«Já lhe disse que temos de ir.»", 0, "Ainda não: repete a imposição, que aumenta a resistência."],
      ["Vira costas e espera.", 0, "Ainda não: deixa a pessoa sozinha com o medo."]]],
  ],
},
{
  n: 4, titulo: "Necessidades e encaminhamento", momento: "Durante", autor: "Ricardo Ferreira", video: "8:35",
  resumo: "Numa casa que não é a nossa: segurança, necessidades básicas, sinais de alarme e quando pedir ajuda",
  aprende: "verificar a segurança e as necessidades básicas, explicar à família que vos acolhe como ajudar, reconhecer os sinais de alarme e pedir apoio, para a pessoa e para si.",
  aulas: [
    ["Chegar a uma casa que não é a nossa", "0:48", "P1/L4/Videos/L4_Aula16_Gancho.mp4", "P1/L4/Videos/Legenda_Aula16_L4.vtt"],
    ["Necessidades e encaminhamento", "6:42", "P1/L4/Videos/L4_Aula17_Conteudo.mp4", "P1/L4/Videos/Legenda_Aula17_L4.vtt"],
    ["Síntese e ponte", "1:05", "P1/L4/Videos/L4_Aula18_Sintese.mp4", "P1/L4/Videos/Legenda_Aula18_L4.vtt"],
  ],
  visita: { m: "", titulo: "Nova localização: a casa que as acolhe", aula: 2,
    tarefa: "A casa da D. Rosa ficou sem condições e as duas foram acolhidas por familiares. Percorra a casa como se tivessem acabado de chegar: encontre o lugar de referência, a água, a casa de banho, os 2 objetos perigosos, a saída e o quarto da Ana.",
    cores: [["verde-escuro", "lugar de referência"], ["laranja", "água"], ["vermelho", "perigo"], ["verde", "saída"], ["azul-claro", "casa de banho"], ["rosa", "quarto da Ana"]] },
  atividade: `<h2>Atividade · Antes de avançar, verifique</h2>
    <p>Acabaram de chegar à casa que vos acolhe. Responda às cinco perguntas. Quando as cinco estiverem certas, sabe o que fazer a seguir.</p>
    <ul class="verif">
      <li><label><input type="checkbox"> A pessoa está segura (lugar de referência, caminho livre, saída vigiada)?</label></li>
      <li><label><input type="checkbox"> As necessidades básicas estão respondidas (água, comida, casa de banho, medicação, descanso)?</label></li>
      <li><label><input type="checkbox"> A família que vos acolhe sabe que há demência e tem a ficha da pessoa?</label></li>
      <li><label><input type="checkbox"> Há algum sinal de alarme (confusão súbita, queda, recusa persistente de comer ou beber)?</label></li>
      <li><label><input type="checkbox"> Quem cuida já pediu apoio?</label></li>
    </ul>
    <p class="verif-res" role="status" aria-live="polite"></p>
    <p class="nota">Se houver perigo imediato, ligue <b>112</b>. Para orientação que não é urgente, ligue para o <b>SNS 24: 808 24 24 24</b>. Leve o cartão de bolso (em «Recursos»).</p>`,
  recursos: [["Cartão de bolso", "P1/L4/Recursos/Cartao_Bolso.pdf"]],
  quiz: [
    ["A D. Rosa chega a um espaço de acolhimento temporário. Qual deve ser uma das primeiras prioridades?", [
      ["Incentivá-la a explorar o espaço sozinha.", 0, "Ainda não: sozinha, num sítio que não conhece, pode cair ou perder-se; primeiro a segurança."],
      ["Verificar a segurança e as necessidades básicas, e identificar o apoio de que necessita.", 1, "Certo, porque a segurança e as necessidades básicas vêm antes de tudo."],
      ["Alterar os horários habituais para se adaptar rapidamente ao espaço.", 0, "Ainda não: mudar os horários tira-lhe as referências que ainda tem; mantenha a rotina possível."]]],
    ["Como deve a Ana ajudar a prevenir que a mãe se perca?", [
      ["Deixá-la circular livremente para promover a autonomia.", 0, "Ainda não: num espaço novo, circular sozinha aumenta o risco de se perder."],
      ["Pedir-lhe que memorize a localização da saída.", 0, "Ainda não: com demência, memorizar um caminho novo é difícil; a ajuda tem de vir de fora."],
      ["Informar a família, manter supervisão adequada e identificar percursos seguros.", 1, "Certo, porque a família informada, a supervisão e os percursos seguros reduzem o risco."]]],
    ["A D. Rosa apresenta uma confusão muito mais intensa e súbita do que o habitual. O que deve a Ana fazer?", [
      ["Procurar avaliação médica urgente; ligar 112 se existir emergência.", 1, "Certo, porque uma confusão súbita pode ser um problema médico: não é «só a demência»."],
      ["Assumir que é uma evolução normal da demência.", 0, "Ainda não: uma mudança súbita não é a evolução normal da doença e tem de ser avaliada."],
      ["Esperar até ao dia seguinte.", 0, "Ainda não: esperar pode atrasar a ajuda de que precisa."]]],
    ["A Ana está exausta e sente que já não consegue cuidar da mãe sozinha. Qual é a atitude mais adequada?", [
      ["Esconder o cansaço para não preocupar a família.", 0, "Ainda não: esconder o cansaço só o faz crescer; quem cuida também precisa de cuidados."],
      ["Abandonar a casa sem informar ninguém.", 0, "Ainda não: sair sem avisar deixa a D. Rosa sem ninguém; peça ajuda primeiro."],
      ["Comunicar as suas necessidades, aceitar ajuda e pedir apoio à família ou aos serviços adequados.", 1, "Certo, porque pedir ajuda não é abandonar: é criar condições para continuar a cuidar."]]],
  ],
},
{
  n: 5, titulo: "Depois da crise", momento: "Depois", autor: "Evandro Carvalho", video: "8:04",
  resumo: "Retomar a rotina aos poucos, vigiar mudanças e cuidar de quem cuida",
  aprende: "retomar a rotina aos poucos, vigiar as mudanças nas semanas seguintes e cuidar de si, sabendo onde pedir apoio.",
  aulas: [
    ["Retomar, vigiar e apoiar", "1:56", "P1/L5/Videos/L5_Aula19_Pilares.mp4", "P1/L5/Videos/Legenda_Aula19_L5.vtt"],
    ["De volta a casa da D. Rosa", "1:32", "P1/L5/Videos/L5_Aula20_Visita3D.mp4", "P1/L5/Videos/Legenda_Aula20_L5.vtt"],
    ["O regresso e o reajuste", "2:36", "P1/L5/Videos/L5_Aula21_Regresso.mp4", "P1/L5/Videos/Legenda_Aula21_L5.vtt"],
    ["Síntese e conclusão", "2:00", "P1/L5/Videos/L5_Aula22_Sintese.mp4", "P1/L5/Videos/Legenda_Aula22_L5.vtt"],
  ],
  visita: { m: "R1sZEUzLrz9", titulo: "Relembrar a casa", aula: 2, discover: true,
    tarefa: "Percorra a casa pela ordem do regresso: sala (quadros e sofá), cozinha, quarto e porta. Em cada divisão, pense no que ajuda a D. Rosa a voltar à rotina, e onde é que a Ana pode descansar.",
    cores: [["azul", "pessoa com demência"], ["laranja", "quem cuida"]] },
  atividade: `<h2>Atividade · As próximas semanas</h2>
    <p>A crise acabou, mas o reajuste demora. Para cada um dos 3 passos, escolha uma coisa que vai fazer nas próximas semanas: pela pessoa de quem cuida e por si.</p>
    <ul class="verif">
      <li><label><input type="checkbox"> <b>Observar:</b> reparar nas mudanças de comportamento da pessoa e nos meus próprios sinais de exaustão.</label></li>
      <li><label><input type="checkbox"> <b>Escutar:</b> dar espaço para falar das emoções e dos medos, sem julgar.</label></li>
      <li><label><input type="checkbox"> <b>Encaminhar:</b> saber onde pedir apoio psicológico e social (centro de saúde, linhas de apoio, associações).</label></li>
      <li><label><input type="checkbox"> <b>Rotina:</b> voltar aos poucos às horas das refeições, da medicação e do sono.</label></li>
    </ul>
    <p class="verif-res" role="status" aria-live="polite"></p>`,
  recursos: [],
  quiz: [
    ["No período após a crise, qual deve ser a prioridade em relação à rotina diária da pessoa com demência?", [
      ["Mudar radicalmente os horários e atividades para testar novas respostas emocionais.", 0, "Ainda não: mudanças bruscas aumentam a confusão; o que acalma é o que é previsível."],
      ["Forçar a pessoa a realizar de imediato todas as tarefas que fazia antes da crise.", 0, "Ainda não: forçar tudo de uma vez cansa e frustra; o regresso faz-se aos poucos."],
      ["Retomar gradualmente a rotina habitual (como os horários das refeições).", 1, "Certo, porque o regresso gradual às rotinas e aos pontos de referência traz previsibilidade e ajuda a acalmar."],
      ["Eliminar todas as rotinas para evitar qualquer esforço de memória.", 0, "Ainda não: sem rotina, a pessoa fica mais desorientada; a rotina é uma referência, não um esforço."]]],
    ["O que se espera em relação ao estado do cuidador depois de a crise terminar?", [
      ["O cansaço desaparece assim que a crise termina.", 0, "Ainda não: o cansaço acumulado não acaba com a crise."],
      ["O desgaste e a exaustão prolongam-se: é indispensável descansar e cuidar de si.", 1, "Certo, porque cuidar de si é indispensável para continuar a cuidar do outro."],
      ["Deve ignorar o seu cansaço e focar-se só na pessoa cuidada.", 0, "Ainda não: sem cuidar de si, não consegue continuar a cuidar do outro."],
      ["Não precisa de procurar apoio externo no pós-crise.", 0, "Ainda não: o apoio externo ajuda os dois a recuperar."]]],
    ["Que sequência guia quem cuida nas semanas depois da crise?", [
      ["Observar → Escutar → Encaminhar", 1, "Certo, porque observar os sinais, escutar sem julgar e encaminhar para apoio são os 3 passos dos primeiros socorros psicológicos, também no pós-crise."],
      ["Atuar → Corrigir → Concluir", 0, "Ainda não: corrigir não é o objetivo; primeiro observa-se e escuta-se."],
      ["Julgar → Isolar → Acalmar", 0, "Ainda não: julgar e isolar aumentam o sofrimento."],
      ["Ignorar → Aguardar → Transferir", 0, "Ainda não: ignorar e esperar deixa os sinais de exaustão crescer."]]],
    ["No passo «Encaminhar», qual destas atitudes é a mais recomendada?", [
      ["Isolar a família de qualquer contacto social para evitar novo stress.", 0, "Ainda não: o contacto social faz parte da recuperação; o isolamento agrava."],
      ["Esperar que o desgaste desapareça sozinho.", 0, "Ainda não: o desgaste não desaparece sozinho."],
      ["Saber onde procurar apoio: centros de saúde, linhas de apoio ou associações.", 1, "Certo, porque encaminhar é conhecer os recursos que apoiam a pessoa cuidada e quem cuida."],
      ["Não partilhar as dificuldades, para não mostrar fraqueza.", 0, "Ainda não: partilhar as dificuldades é pedir ajuda, não é fraqueza."]]],
  ],
},
];

const AVATARES = [["Bruno Lopes", "L1 · Compreender", "BrunoAvatar.mp4"], ["Tiago Teixeira", "L2 · Antes", "TiagoAvatar.mp4"],
  ["Rodrigo Silva", "L3 · Durante", "RodrigoAvatar.mp4"], ["Ricardo Ferreira", "L4 · Durante", "RicardoAvatar.webm"], ["Evandro Carvalho", "L5 · Depois", "EvandroAvatar.mp4"]];
const EMAILS = [["Bruno Lopes", "1240441"], ["Tiago Teixeira", "1240493"], ["Rodrigo Silva", "1221391"], ["Ricardo Ferreira", "1220901"], ["Evandro Carvalho", "1200929"]];

// ───────────────────────────── Ajudas ─────────────────────────────
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const existe = rel => fs.existsSync(path.join(RAIZ, rel));
function copiar(rel, destino) {             // devolve o caminho publicado, ou "" se o ficheiro ainda não existe
  const de = path.join(RAIZ, rel), para = path.join(SAI, destino);
  if (!fs.existsSync(de)) { falta.push(rel); return ""; }
  fs.mkdirSync(path.dirname(para), { recursive: true });
  const a = fs.statSync(de), b = fs.existsSync(para) && fs.statSync(para);
  if (!b || b.size !== a.size || b.mtimeMs < a.mtimeMs) fs.copyFileSync(de, para);
  return destino;
}
function transcricao(rel) {                // texto das legendas, sem tempos, para quem não pode ouvir
  if (!existe(rel)) return "";
  return fs.readFileSync(path.join(RAIZ, rel), "utf8").replace(/\r/g, "").split("\n\n")
    .map(b => b.split("\n").filter(l => l && !l.includes("-->") && !/^\d+$/.test(l) && !/^(WEBVTT|NOTE)/.test(l)).join(" "))
    .filter(Boolean).map(t => `<p>${esc(t.replace(/<[^>]+>/g, ""))}</p>`).join("");
}
const MARCA = `<svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true"><path d="M4 13 14 4l10 9v11H4z" fill="none" stroke="#3A6EA5" stroke-width="2.4" stroke-linejoin="round"/><path d="M14 21s-4.5-2.8-4.5-5.6a2.3 2.3 0 0 1 4.5-.8 2.3 2.3 0 0 1 4.5.8C18.5 18.2 14 21 14 21z" fill="#3A6EA5"/></svg>`;
function menu(ativo) {
  const a = (h, t, k) => `<a href="${h}"${ativo === k ? ' aria-current="page"' : ""}>${t}</a>`;
  return `<nav class="nav" aria-label="Menu principal">${a("index.html", "Início", "inicio")}${a("curso.html", "Curso", "curso")}
<details class="drop"><summary${String(ativo).startsWith("licao") ? ' class="atual"' : ""}>Lições</summary><div>${LICOES.map(l => a(`licao-${l.n}.html`, `<span class="num">L${l.n}</span> ${l.titulo}`, "licao" + l.n)).join("")}</div></details>
${a("cor.html", "Porquê azul?", "cor")}${a("sobre-nos.html", "Sobre nós", "sobre")}${a("contactos.html", "Contactos", "contactos")}</nav>`;
}
const RODAPE = `<footer class="wrap rodape"><p>CAMUL 2026/27 · ISEP · Grupo 1: Bruno Lopes, Tiago Teixeira, Rodrigo Silva, Ricardo Ferreira, Evandro Carvalho · <a href="${UDEMY}" target="_blank" rel="noopener">Curso também na Udemy ↗</a> · <a href="contactos.html">Créditos e contactos</a></p><p>Este curso não substitui os profissionais de saúde. Em perigo imediato, ligue 112; para aconselhamento, SNS 24: 808 24 24 24.</p></footer>`;
const HEAD = (t, d) => `<!doctype html>
<html lang="pt-PT">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t}</title>
<meta name="description" content="${d}">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(MARCA.replace('aria-hidden="true"', 'xmlns="http://www.w3.org/2000/svg"'))}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap">`;
function pagina(ficheiro, titulo, descricao, ativo, corpo) {
  const html = `${HEAD(titulo, descricao)}
<link rel="stylesheet" href="estilo.css">
</head>
<body>
<a class="saltar" href="#conteudo">Saltar para o conteúdo</a>
<header class="wrap topo"><a class="marca" href="index.html">${MARCA} Cuidar em Crise</a>${menu(ativo)}</header>
<main class="wrap pag" id="conteudo">
${corpo}
</main>
${RODAPE}
<script src="app.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(SAI, ficheiro), html);
}

// ───────────────────────────── Estilo e comportamento comuns ─────────────────────────────
const CSS_MENU = `
.topo { display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px 24px; padding-block:16px; }
.marca { display:flex; align-items:center; gap:10px; font-weight:700; color:var(--texto); text-decoration:none; font-size:19px; }
.nav { display:flex; flex-wrap:wrap; align-items:center; gap:4px 20px; font-size:17px; }
.nav a, .drop summary { color:var(--texto); text-decoration:none; padding:8px 0; display:inline-block; cursor:pointer; }
.nav a:hover, .drop summary:hover { color:var(--azul); }
.nav a[aria-current="page"], .drop summary.atual { color:var(--azul); font-weight:700; box-shadow:inset 0 -3px var(--azul); }
.drop { position:relative; }
.drop summary { list-style:none; } .drop summary::-webkit-details-marker { display:none; }
.drop summary::after { content:" ▾"; }
.drop > div { position:absolute; z-index:20; top:100%; left:-16px; background:#fff; border:1px solid var(--linha); border-radius:8px; padding:8px 16px; width:max-content; max-width:min(90vw, 360px); box-shadow:0 6px 18px rgba(30,42,58,.12); display:grid; }
.drop > div a { padding:8px 0; }
.nav a:focus-visible, .drop summary:focus-visible, .marca:focus-visible { outline:3px solid var(--azul); outline-offset:3px; }
.nav .num { color:var(--ambar); font-weight:700; }
.rodape a { color:inherit; }
`;
const CSS = `:root { --areia:#F5F1E8; --texto:#1E2A3A; --azul:#3A6EA5; --ambar:#A8600F; --laranja:#B4570F; --linha:#E2DACA; --certo:#2E7D32; --errado:#B3261E;
  --fonte:"Atkinson Hyperlegible","Segoe UI",Roboto,Arial,sans-serif; --gap:24px; --bloco:64px; color-scheme:light; }
*,*::before,*::after { box-sizing:border-box; }
[hidden] { display:none !important; }
body { margin:0; background:var(--areia); color:var(--texto); font-family:var(--fonte); font-size:18px; line-height:1.5; }
img, video, iframe { max-width:100%; }
h1, h2, h3, p { margin:0; } h1, h2 { text-wrap:balance; }
h1 { font-size:40px; line-height:1.2; } h2 { font-size:24px; line-height:1.3; margin-bottom:12px; } h3 { font-size:18px; line-height:1.3; }
a { color:var(--azul); }
.wrap { max-width:1280px; margin:0 auto; padding-inline:16px; }
@media (min-width:700px) { .wrap { padding-inline:48px; } }
.saltar { position:absolute; left:-9999px; } .saltar:focus { left:16px; top:8px; background:#fff; padding:8px 12px; z-index:50; }
${CSS_MENU}
.pag { display:flex; flex-direction:column; gap:var(--bloco); padding-block:16px var(--bloco); }
.pag > section, .pag > div { min-width:0; }
.intro { max-width:70ch; display:grid; gap:12px; }
.intro p { font-size:20px; }
.meta { color:#4A5566; font-size:16px; } .num { color:var(--ambar); font-weight:700; }
.cta { display:inline-block; background:var(--ambar); color:#fff; font-weight:700; padding:14px 26px; border-radius:6px; text-decoration:none; border:0; font:inherit; font-weight:700; cursor:pointer; }
.btn2 { display:inline-block; border:2px solid var(--azul); color:var(--azul); background:#fff; font:inherit; font-size:16px; font-weight:700; padding:9px 16px; border-radius:8px; text-decoration:none; cursor:pointer; min-height:44px; }
.btn2:hover { background:var(--azul); color:#fff; }
.btn2[aria-current="true"], .btn2[aria-pressed="true"] { background:var(--azul); color:#fff; }
.cta:focus-visible, .btn2:focus-visible, .opcao:focus-visible, input:focus-visible { outline:3px solid var(--azul); outline-offset:3px; }
.cartao { background:#fff; border:1px solid var(--linha); border-radius:10px; padding:20px; }
.nota { font-size:16px; color:#4A5566; }
.rodape { font-size:14px; border-top:1px solid var(--linha); padding-block:24px; display:grid; gap:6px; }

/* Curso */
.tempo { display:flex; gap:6px; font-size:15px; font-weight:700; } .tempo span { flex:1; background:#DCE7F2; padding:8px 10px; border-radius:6px; } .tempo span.d { flex:2; }
.linhas { list-style:none; margin:0; padding:0; display:grid; gap:12px; }
.linha { display:grid; grid-template-columns:56px 1fr; gap:4px 16px; align-items:center; }
.linha .num { font-size:26px; grid-row:span 2; }
.linha .acoes { grid-column:2; display:flex; flex-wrap:wrap; gap:8px 16px; align-items:center; font-size:16px; }
@media (min-width:900px) { .linha { grid-template-columns:56px 1fr 180px 170px; } .linha .num { grid-row:auto; } .linha .acoes { grid-column:auto; display:contents; } }
.passos { list-style:none; margin:0; padding:0; display:grid; gap:12px; grid-template-columns:repeat(auto-fit, minmax(190px, 1fr)); counter-reset:p; }
.passos li { background:#fff; border:1px solid var(--linha); border-radius:10px; padding:16px; }
.passos li::before { counter-increment:p; content:counter(p); display:block; color:var(--ambar); font-weight:700; font-size:22px; }

/* Lição */
.licao-topo { display:grid; gap:var(--gap); }
@media (min-width:1000px) { .licao-topo { grid-template-columns:1fr 300px; align-items:start; } }
.player { position:relative; background:#1E2A3A; border-radius:10px; overflow:hidden; aspect-ratio:16/9; }
.player video { width:100%; height:100%; display:block; background:#000; }
.player .breve { position:absolute; inset:0; display:none; place-content:center; text-align:center; color:#fff; padding:24px; gap:10px; }
.player.sem-video video { display:none; } .player.sem-video .breve { display:grid; }
.aulas { list-style:none; margin:12px 0 0; padding:0; display:flex; flex-wrap:wrap; gap:8px; }
.aulas .btn2 { font-size:15px; text-align:left; }
.aulas .dur { font-weight:400; }
.transcricao { margin-top:12px; } .transcricao summary { cursor:pointer; font-weight:700; color:var(--azul); min-height:44px; display:flex; align-items:center; }
.transcricao .txt { max-height:320px; overflow:auto; background:#fff; border:1px solid var(--linha); border-radius:8px; padding:12px 16px; display:grid; gap:8px; font-size:16px; }
.indice ol { margin:8px 0 0; padding-left:22px; line-height:1.9; font-size:16px; }
.indice hr { border:0; border-top:1px solid var(--linha); margin:12px 0; }
.legenda-cores { display:flex; flex-wrap:wrap; gap:6px 18px; font-size:16px; margin-bottom:12px; }
.ponto { display:inline-block; width:16px; height:16px; border-radius:50%; border:3px solid #fff; box-shadow:0 0 0 1px rgba(0,0,0,.35); vertical-align:-2px; margin-right:6px; }
.c-azul { background:#2F6DB5; } .c-laranja { background:#E07B2E; } .c-verde-escuro { background:#1E6B3A; } .c-vermelho { background:#C62828; } .c-verde { background:#43A047; } .c-azul-claro { background:#64B5F6; } .c-rosa { background:#EC77A8; }
.visita3d { position:relative; aspect-ratio:16/9; max-height:75vh; width:100%; border-radius:10px; overflow:hidden; background:linear-gradient(#cfc6b4,#8c7f6a); display:grid; place-content:center; gap:12px; text-align:center; padding:16px; color:#fff; }
.visita3d iframe { position:absolute; inset:0; width:100%; height:100%; border:0; }
.visita3d p { font-size:16px; }
.duas { display:grid; gap:var(--gap); } @media (min-width:900px) { .duas { grid-template-columns:3fr 2fr; } }
.campos, .kit, .verif { padding-left:22px; display:grid; gap:8px; margin:12px 0; }
.verif { list-style:none; padding:0; }
.campos input { display:block; width:100%; max-width:420px; font:inherit; padding:8px 10px; border:1px solid #B9B2A4; border-radius:6px; margin-top:4px; }
.kit label, .verif label { cursor:pointer; display:inline-flex; gap:10px; align-items:flex-start; }
.kit input, .verif input { width:22px; height:22px; flex:none; margin-top:3px; accent-color:var(--azul); }
.kit .porque { display:none; font-size:15px; color:var(--errado); margin-left:32px; }
.kit.mostrar li.ok label::after { content:" ✓"; color:var(--certo); font-weight:700; }
.kit.mostrar li.nao label { text-decoration:line-through; color:#6B7280; }
.kit.mostrar li.nao .porque { display:block; }
.sugestao { margin-top:12px; } .sugestao summary { cursor:pointer; font-weight:700; color:var(--azul); min-height:44px; display:flex; align-items:center; }
.sugestao ul { margin:4px 0 0; display:grid; gap:6px; }
.respirar { display:grid; justify-items:center; gap:16px; padding:24px; background:#fff; border:1px solid var(--linha); border-radius:10px; margin-top:12px; }
.circulo { width:180px; height:180px; border-radius:50%; background:radial-gradient(circle, #E07B2E 0 30%, rgba(224,123,46,.35) 31%); transform:scale(.55); }
.respirar.ativa .circulo { animation:respirar 10s ease-in-out infinite; }
@keyframes respirar { 0% { transform:scale(.55); } 40% { transform:scale(1); } 100% { transform:scale(.55); } }
@media (prefers-reduced-motion:reduce) { .respirar.ativa .circulo { animation:none; transform:scale(.8); } }
.resp-txt { font-size:22px; font-weight:700; }
.recursos { list-style:none; padding:0; margin:0; display:grid; gap:8px; }
.recursos a { font-weight:700; }
.quiz { max-width:820px; }
.barra-q { height:8px; background:#E2DCCF; border-radius:4px; margin:8px 0 18px; } .barra-q div { height:8px; background:var(--azul); border-radius:4px; transition:width .2s; }
.opcoes { list-style:none; padding:0; margin:14px 0 0; display:grid; gap:10px; }
.opcao { width:100%; text-align:left; font:inherit; background:#fff; color:var(--texto); border:1px solid var(--linha); border-radius:10px; padding:14px 16px; cursor:pointer; min-height:48px; }
.opcao:hover { border-color:var(--azul); }
.opcao.ok { border:2px solid var(--certo); background:#EEF6EE; } .opcao.nok { border:2px solid var(--errado); background:#FBEDEC; }
.opcao b { font-weight:400; } .opcao.ok b, .opcao.nok b { font-weight:700; }
.opcao .fb { display:block; font-size:16px; margin-top:6px; }
.opcao.ok b::before { content:"✓ "; color:var(--certo); } .opcao.nok b::before { content:"✗ "; color:var(--errado); }
.quiz-nav { display:flex; justify-content:space-between; gap:12px; margin-top:18px; flex-wrap:wrap; }
.quiz-fim { display:grid; gap:12px; }
.ant-seg { display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }

/* Sobre nós e cor */
.equipa { list-style:none; padding:0; margin:0; display:grid; gap:16px; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); }
.equipa li { text-align:center; display:grid; gap:6px; }
.equipa video { width:100%; aspect-ratio:1; object-fit:cover; border-radius:10px; background:#DCE5EE; }
.sentimentos { list-style:none; padding:0; margin:0; display:grid; gap:16px; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); }
.sentimentos li { background:#fff; border:1px solid var(--linha); border-top:6px solid var(--azul); border-radius:10px; padding:16px; display:grid; gap:6px; align-content:start; }
.sentimentos .grande { font-size:28px; font-weight:700; color:var(--azul); line-height:1.2; }
.paleta { list-style:none; padding:0; margin:0; display:grid; gap:12px; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); }
.paleta li { background:#fff; border:1px solid var(--linha); border-radius:10px; overflow:hidden; }
.paleta .amostra { height:84px; display:flex; align-items:flex-end; padding:8px 12px; font-weight:700; }
.paleta div + div { padding:12px; font-size:16px; display:grid; gap:4px; }
table { border-collapse:collapse; width:100%; background:#fff; font-size:16px; }
th, td { border:1px solid var(--linha); padding:8px 10px; text-align:left; vertical-align:top; }
.tabela { overflow-x:auto; }
html.cinza { filter:grayscale(1); }
`;
const JS = `// Cuidar em Crise: vídeos por aula, visita 3D só ao clicar, atividades e quiz (sem contas e sem guardar respostas).
document.querySelectorAll(".drop").forEach(d => document.addEventListener("click", e => { if (!d.contains(e.target)) d.open = false; }));

// Vídeos: um leitor, uma lista de aulas; legendas e transcrição mudam com a aula.
const player = document.querySelector(".player");
if (player) {
  const v = player.querySelector("video"), botoes = document.querySelectorAll(".aulas button"), txt = document.querySelectorAll(".transcricao .txt");
  function aula(i, tocar) {
    const b = botoes[i];
    botoes.forEach(x => x.setAttribute("aria-current", x === b));
    txt.forEach((t, k) => t.hidden = k !== i);
    v.pause();
    v.querySelectorAll("track").forEach(t => t.remove());
    player.classList.toggle("sem-video", !b.dataset.mp4);
    if (!b.dataset.mp4) { v.removeAttribute("src"); v.load(); return; }
    v.src = b.dataset.mp4;
    if (b.dataset.vtt) { const t = document.createElement("track"); Object.assign(t, { kind: "subtitles", srclang: "pt", label: "Português", src: b.dataset.vtt, default: true }); v.append(t); }
    if (tocar) v.play().catch(() => {});
  }
  botoes.forEach((b, i) => b.addEventListener("click", () => aula(i, true)));
  document.querySelectorAll("[data-ir-aula]").forEach(a => a.addEventListener("click", () => aula(+a.dataset.irAula, false)));
  aula(0, false);
}

// Matterport: só carrega depois do clique (a página fica leve no telemóvel).
document.querySelectorAll("[data-m]").forEach(b => b.addEventListener("click", () => {
  const f = document.createElement("iframe");
  f.src = "https://my.matterport.com/show/?m=" + b.dataset.m + "&play=1";
  f.title = b.dataset.titulo; f.allow = "fullscreen; xr-spatial-tracking"; f.allowFullscreen = true;
  b.closest(".visita3d").replaceChildren(f);
}));

// L2: complete o kit
const kit = document.querySelector(".kit");
document.querySelector('[data-acao="kit"]')?.addEventListener("click", () => {
  const certos = kit.dataset.certos.split(",").map(Number); let acertos = 0;
  kit.querySelectorAll("li").forEach((li, i) => {
    const ok = certos.includes(i + 1), marcado = li.querySelector("input").checked;
    li.classList.toggle("ok", ok); li.classList.toggle("nao", !ok);
    if (ok === marcado) acertos++;
  });
  kit.classList.add("mostrar");
  document.querySelector(".kit-res").textContent = acertos + " de 12 itens como na sugestão. Vão para o kit: 1, 2, 3, 5, 7, 9, 11 e 12.";
});

// L4 e L5: listas de verificação
document.querySelectorAll(".verif").forEach(l => l.addEventListener("change", () => {
  const caixas = l.querySelectorAll("input"), feitas = [...caixas].filter(c => c.checked).length;
  l.nextElementSibling.textContent = feitas === caixas.length ? "✓ Tudo verificado: sabe o que fazer a seguir." : feitas + " de " + caixas.length + ".";
}));

// L3: respiração 4–6
const resp = document.querySelector(".respirar");
if (resp) {
  const b = resp.querySelector("button"), t = resp.querySelector(".resp-txt"); let rel = null;
  b.addEventListener("click", () => {
    const on = !resp.classList.contains("ativa");
    resp.classList.toggle("ativa", on); b.setAttribute("aria-pressed", on); b.textContent = on ? "Parar" : "Começar";
    clearInterval(rel);
    if (!on) { t.textContent = "Carregue em «Começar»."; return; }
    let s = 0; const passo = () => { t.textContent = s < 4 ? "Inspire… " + (s + 1) : "Expire… " + (s - 3); s = (s + 1) % 10; };
    passo(); rel = setInterval(passo, 1000);
  });
}

// Quiz: uma pergunta de cada vez; feedback em cada opção; conta as certas à primeira.
const quiz = document.querySelector(".quiz");
if (quiz) {
  const Q = JSON.parse(document.getElementById("quiz-dados").textContent), seg = quiz.dataset.seguinte;
  let i = 0, certas = 0, tentou = false;
  function mostrar() {
    if (i === Q.length) {
      quiz.innerHTML = '<div class="quiz-fim"><h2>Acertou à primeira em ' + certas + ' de ' + Q.length + ' perguntas.</h2><p>' +
        (certas === Q.length ? "Muito bem!" : "Pode rever a lição e repetir o quiz quando quiser.") + '</p><p>' +
        '<button type="button" class="btn2" id="repetir">Repetir o quiz</button> ' + (seg ? '<a class="cta" href="' + seg + '">' + quiz.dataset.seguinteTxt + '</a>' : '') + '</p></div>';
      quiz.querySelector("#repetir").onclick = () => { i = 0; certas = 0; mostrar(); };
      return;
    }
    const [p, ops] = Q[i]; tentou = false;
    quiz.innerHTML = '<p class="meta">Pergunta ' + (i + 1) + ' de ' + Q.length + '</p><div class="barra-q"><div style="width:' + (100 * i / Q.length) + '%"></div></div>' +
      '<h3 style="font-size:22px">' + p + '</h3><ul class="opcoes">' + ops.map((o, k) => '<li><button type="button" class="opcao" data-k="' + k + '"><b>' + String.fromCharCode(65 + k) + ' · ' + o[0] + '</b><span class="fb" aria-live="polite"></span></button></li>').join("") +
      '</ul><div class="quiz-nav"><span></span><button type="button" class="cta" id="seguinte" hidden>' + (i + 1 < Q.length ? "Pergunta seguinte" : "Ver resultado") + '</button></div>';
    quiz.querySelectorAll(".opcao").forEach(b => b.onclick = () => {
      const o = ops[+b.dataset.k];
      b.classList.add(o[1] ? "ok" : "nok"); b.querySelector(".fb").textContent = o[2];
      if (o[1]) { if (!tentou) certas++; quiz.querySelectorAll(".opcao").forEach(x => x.disabled = true); const s = quiz.querySelector("#seguinte"); s.hidden = false; s.focus(); }
      tentou = true;
    });
    quiz.querySelector("#seguinte").onclick = () => { i++; mostrar(); quiz.scrollIntoView({ block: "start" }); };
  }
  mostrar();
}

// Página da cor: ver o site sem cor (a cor nunca é o único sinal)
document.querySelector('[data-acao="cinza"]')?.addEventListener("click", e => {
  const on = document.documentElement.classList.toggle("cinza");
  e.currentTarget.setAttribute("aria-pressed", on); e.currentTarget.textContent = on ? "Voltar a ver as cores" : "Ver a página sem cor";
});
`;

// ───────────────────────────── Páginas ─────────────────────────────
fs.mkdirSync(SAI, { recursive: true });
fs.writeFileSync(path.join(SAI, "estilo.css"), CSS);
fs.writeFileSync(path.join(SAI, "app.js"), JS);

// Início: a página da composição visual, com o menu e as ligações às lições.
{
  let h = fs.readFileSync(path.join(__dirname, "ComposicaoVisual_Pagina_Estatica_Grupo1.html"), "utf8").replace(/\r\n/g, "\n");
  const trocar = (de, para) => { if (!h.includes(de)) throw new Error("Página inicial: não encontrei «" + de.slice(0, 60) + "»"); h = h.split(de).join(para); };
  trocar("<title>Cuidar em Crise</title>", `<title>Cuidar em Crise</title>\n<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(MARCA.replace('aria-hidden="true"', 'xmlns="http://www.w3.org/2000/svg"'))}">
<meta name="description" content="Curso grátis, em português, de primeiros socorros psicológicos para cuidadores de pessoas com demência numa crise.">`);
  trocar("</style>\n<style>", `${CSS_MENU}\n.cartao { position:relative; } .cartao h3 a { color:inherit; text-decoration:none; } .cartao h3 a::after { content:""; position:absolute; inset:0; } .cartao:hover { border-color:var(--azul); }\n.cartao:focus-within { outline:3px solid var(--azul); outline-offset:3px; }\n</style>\n<style>`);
  trocar(`<div class="marca">\n    ${MARCA}\n    Cuidar em Crise\n  </div>\n  <button`, `<a class="marca" href="index.html">${MARCA} Cuidar em Crise</a>\n  ${menu("inicio")}\n  <button`);
  trocar(`<a class="cta" href="#licoes">`, `<a class="cta" href="curso.html">`);
  LICOES.forEach(l => trocar(`<h3>${l.titulo}</h3>`, `<h3><a href="licao-${l.n}.html">${l.titulo}</a></h3>`));
  trocar(`<p>CAMUL 2026/27 · ISEP · Grupo 1: Bruno Lopes, Tiago Teixeira, Rodrigo Silva, Ricardo Ferreira, Evandro Carvalho</p>`,
    `<p>CAMUL 2026/27 · ISEP · Grupo 1: Bruno Lopes, Tiago Teixeira, Rodrigo Silva, Ricardo Ferreira, Evandro Carvalho · <a href="${UDEMY}" target="_blank" rel="noopener" style="color:inherit">Curso também na Udemy ↗</a> · <a href="cor.html" style="color:inherit">Porquê azul?</a></p>`);
  fs.writeFileSync(path.join(SAI, "index.html"), h);
  copiar("Teoricas/ComposicaoVisual_Foto.webp", "ComposicaoVisual_Foto.webp");
}

// Curso
pagina("curso.html", "O curso · Cuidar em Crise", "As 5 lições do curso Cuidar em Crise, pela ordem da crise.", "curso", `
<section class="intro"><h1>O curso</h1>
<p>No fim, sabe preparar-se para uma crise e dar primeiros socorros psicológicos à pessoa de quem cuida e a si próprio: acalmar, responder às necessidades imediatas, manter a rotina possível e reconhecer quando pedir ajuda.</p>
<p class="nota">Grátis, sem conta e sem registo. 5 lições de ≈ 8 min de vídeo, ≈ 40 min no total. Pode começar por qualquer lição, mas a ordem segue a crise.</p></section>
<section aria-labelledby="t-l"><h2 id="t-l">As 5 lições, pela ordem da crise</h2>
<div class="tempo" aria-hidden="true"><span>Compreender</span><span>Antes</span><span class="d">Durante</span><span>Depois</span></div>
<ol class="linhas" style="margin-top:12px">${LICOES.map(l => `
<li class="cartao linha"><span class="num">L${l.n}</span><div><h3>${l.titulo}</h3><p class="nota">${l.resumo}</p></div>
<div class="acoes"><span class="nota">${l.autor}</span><a class="btn2" href="licao-${l.n}.html">Abrir · ${l.video}</a></div></li>`).join("")}
</ol></section>
<section aria-labelledby="t-c"><h2 id="t-c">Como funciona cada lição</h2>
<ol class="passos"><li><b>Vídeos</b><br>Com legendas e transcrição; quem fez a lição aparece num canto.</li><li><b>Visita 3D</b><br>Uma casa no Matterport, com etiquetas: azul para a pessoa, laranja para quem cuida.</li><li><b>Atividade</b><br>Um exercício prático, num cenário de crise.</li><li><b>Quiz</b><br>4 perguntas com a explicação de cada resposta.</li><li><b>Recursos</b><br>Fichas para descarregar e imprimir.</li></ol></section>
<section class="cartao" style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between"><p>Prefere guardar o progresso? O mesmo curso está publicado na Udemy (grátis, com inscrição).</p><a class="btn2" href="${UDEMY}" target="_blank" rel="noopener">Abrir na Udemy ↗</a></section>`);

// Lições
for (const l of LICOES) {
  const pasta = "media/L" + l.n;
  const aulas = l.aulas.map(([t, d, mp4, vtt, texto], i) => ({ t, d, i,
    mp4: copiar(mp4, `${pasta}/aula${i + 1}.mp4`), vtt: copiar(vtt, `${pasta}/aula${i + 1}.vtt`), trans: transcricao(vtt) || (texto ? `<p>${texto}</p>` : "") }));
  const rec = l.recursos.map(([nome, src]) => [nome, copiar(src, "recursos/" + path.basename(src))]).filter(r => r[1]);
  const ant = LICOES[l.n - 2], seg = LICOES[l.n];
  const v = l.visita;
  const visita = v.m
    ? `<div class="visita3d"><p style="font-size:20px;font-weight:700">${v.titulo}</p><p>A visita só carrega quando entrar (poupa dados móveis).</p><p><button type="button" class="cta" data-m="${v.m}" data-titulo="Visita 3D: ${v.titulo}">Entrar na visita 3D</button></p></div>
<p class="nota" style="margin-top:8px"><a href="https://my.matterport.com/show/?m=${v.m}" target="_blank" rel="noopener">Abrir a visita noutro separador ↗</a> · Sem rede ou telemóvel antigo? <a href="#videos" data-ir-aula="${v.aula - 1}">Veja a visita no vídeo ${v.aula}</a>.${v.discover ? " Espaço público do Matterport Discover («La Tarasca», IInmobarrios): as etiquetas da lição estão no vídeo." : ""}</p>`
    : `<div class="visita3d" style="aspect-ratio:auto;min-height:240px"><p style="font-size:20px;font-weight:700">${v.titulo}</p><p>A visita interativa está a ser publicada. Entretanto, veja-a no vídeo ${v.aula}.</p><p><a class="btn2" href="#videos" data-ir-aula="${v.aula - 1}">Ver no vídeo ${v.aula}</a></p></div>`;
  if (!v.m) falta.push(`L${l.n}: link do Matterport`);
  pagina(`licao-${l.n}.html`, `L${l.n} · ${l.titulo} · Cuidar em Crise`, `Lição ${l.n} do curso Cuidar em Crise: ${l.resumo}.`, "licao" + l.n, `
<div class="licao-topo">
<section id="videos" aria-labelledby="t-licao">
<p class="meta"><span class="num">L${l.n}</span> · ${l.momento} · ${l.video} de vídeo · ${l.autor}</p>
<h1 id="t-licao" style="margin:4px 0 16px">${l.titulo}</h1>
<div class="player"><video controls preload="none" playsinline></video><div class="breve"><b style="font-size:22px">Vídeo a chegar</b><span>Este vídeo ainda não foi publicado neste site.</span><a class="btn2" href="${UDEMY}" target="_blank" rel="noopener">Ver na Udemy ↗</a></div></div>
<ol class="aulas" aria-label="Vídeos da lição">${aulas.map(a => `<li><button type="button" class="btn2" data-mp4="${a.mp4}" data-vtt="${a.vtt}">${a.i + 1} · ${a.t} <span class="dur">· ${a.d}${a.mp4 ? "" : " (em breve)"}</span></button></li>`).join("")}</ol>
<details class="transcricao"><summary>Transcrição do vídeo</summary>${aulas.map(a => `<div class="txt" hidden>${a.trans || "<p>Transcrição em breve.</p>"}</div>`).join("")}</details>
</section>
<aside class="cartao indice" aria-labelledby="t-ind"><h2 id="t-ind" style="font-size:20px">Nesta lição</h2>
<ol><li><a href="#videos">Vídeos</a></li><li><a href="#visita">Visita 3D</a></li><li><a href="#atividade">Atividade</a></li><li><a href="#quiz">Quiz</a></li>${rec.length ? '<li><a href="#recursos">Recursos</a></li>' : ""}</ol>
<hr><p style="font-size:16px"><b>Vai aprender a</b> ${l.aprende}</p></aside>
</div>
<section id="visita" aria-labelledby="t-vis"><h2 id="t-vis">Visita 3D · ${v.titulo}</h2>
<p style="max-width:75ch;margin-bottom:10px">${v.tarefa}</p>
<p class="legenda-cores">${v.cores.map(([c, t]) => `<span><span class="ponto c-${c}"></span>${c.replace("-", " ")} = ${t}</span>`).join("")}</p>
${visita}</section>
<div class="duas">
<section id="atividade" class="cartao">${l.atividade}</section>
<section id="recursos" class="cartao"><h2>Recursos</h2><ul class="recursos">${rec.map(([n, f]) => `<li>⬇ <a href="${f}" download>${n} (PDF)</a></li>`).join("")}
${v.m ? `<li>↗ <a href="https://my.matterport.com/show/?m=${v.m}" target="_blank" rel="noopener">Visita 3D, noutro separador</a></li>` : ""}
<li>↗ <a href="${UDEMY}" target="_blank" rel="noopener">A mesma lição na Udemy</a></li></ul></section>
</div>
<section id="quiz" aria-labelledby="t-quiz"><h2 id="t-quiz">Quiz · Teste ${l.n}</h2>
<div class="quiz" data-seguinte="${seg ? `licao-${seg.n}.html` : "sobre-nos.html"}" data-seguinte-txt="${seg ? `Lição seguinte: L${seg.n} →` : "Fim do curso: quem o fez →"}"><noscript>O quiz precisa de JavaScript.</noscript></div>
<script type="application/json" id="quiz-dados">${JSON.stringify(l.quiz).replace(/</g, "\\u003c")}</script></section>
<nav class="ant-seg" aria-label="Lição anterior e seguinte">${ant ? `<a class="btn2" href="licao-${ant.n}.html">← L${ant.n} · ${ant.titulo}</a>` : `<a class="btn2" href="curso.html">← O curso</a>`}${seg ? `<a class="btn2" href="licao-${seg.n}.html">L${seg.n} · ${seg.titulo} →</a>` : `<a class="btn2" href="sobre-nos.html">Quem fez o curso →</a>`}</nav>`);
}

// Porquê azul? (o trabalho «A cor azul» das teóricas, aplicado ao site)
pagina("cor.html", "Porquê azul? · Cuidar em Crise", "Porque é que o curso Cuidar em Crise usa o azul: o que a cor transmite e como a usamos.", "cor", `
<section class="intro"><h1>Porquê azul?</h1>
<p>Quem chega a este curso está, muitas vezes, cansado e preocupado. Escolhemos o azul como cor principal porque é a cor que mais acalma e que mais confiança inspira. Esta página junta o nosso trabalho «A cor azul» à forma como a usamos no site e nas lições.</p>
<p><button type="button" class="btn2" data-acao="cinza" aria-pressed="false">Ver a página sem cor</button> <span class="nota">Experimente: a cor nunca é o único sinal (há sempre texto, ✓ e ✗).</span></p></section>
<section aria-labelledby="t-s"><h2 id="t-s">O que o azul transmite</h2>
<p class="nota" style="margin-bottom:16px">É a cor favorita nos 10 países de um inquérito internacional (YouGov, 2015): a cor com menos risco de rejeição. E está ligada a cinco sentimentos, com provas.</p>
<ul class="sentimentos">
<li><span class="grande">3× mais rápido</span><h3>Calma</h3><p style="font-size:16px">Depois de uma situação de stress, o relaxamento foi cerca de 3 vezes mais rápido com luz azul (1,1 min contra 3,5 min) (Minguillon et al., 2017). Por isso os hospitais o usam.</p></li>
<li><span class="grande">43 %</span><h3>Confiança</h3><p style="font-size:16px">dos logótipos da Fortune 500 são azuis. Usa-se azul onde se pede para confiar: bancos, pagamentos, saúde.</p></li>
<li><span class="grande">1829</span><h3>Autoridade sem agressividade</h3><p style="font-size:16px">A Polícia de Londres escolheu o azul para se distinguir do vermelho do exército. Protege, não ameaça.</p></li>
<li><span class="grande">ONU</span><h3>Paz</h3><p style="font-size:16px">A ONU escolheu o azul por ser o oposto do vermelho, a cor da guerra. Capacetes azuis, bandeira da União Europeia.</p></li>
<li><span class="grande">Competência</span><h3>Rigor</h3><p style="font-size:16px">O azul aumenta a perceção de competência de uma marca (Labrecque e Milne, 2012).</p></li></ul></section>
<section aria-labelledby="t-u"><h2 id="t-u">Como usamos a cor no curso</h2>
<ul class="paleta">
<li><div class="amostra" style="background:#3A6EA5;color:#fff">Azul #3A6EA5</div><div><b>Cor principal: calma e confiança</b><span>Títulos de apoio, ligações, botões secundários. 4,7:1 sobre a areia (WCAG AA).</span></div></li>
<li><div class="amostra" style="background:#F5F1E8;color:#1E2A3A;border-bottom:1px solid #E2DACA">Areia #F5F1E8</div><div><b>Fundo quente</b><span>Mais suave do que o branco: o azul sozinho seria frio para um tema tão humano.</span></div></li>
<li><div class="amostra" style="background:#1E2A3A;color:#fff">Texto #1E2A3A</div><div><b>Texto: azul-escuro, quase preto</b><span>12,9:1 sobre a areia. Texto azul pequeno lê-se mal (temos poucos cones sensíveis ao azul), por isso o texto corrido não é azul.</span></div></li>
<li><div class="amostra" style="background:#A8600F;color:#fff">Âmbar #A8600F</div><div><b>Uma só cor de ênfase</b><span>Complementar do azul: só no botão principal e nos números das lições, para o olhar ir lá direto.</span></div></li></ul>
<div class="cartao" style="margin-top:16px;display:grid;gap:8px"><h3>Código de cores das lições</h3>
<p><span class="ponto c-azul"></span><b>Azul = a pessoa com demência.</b> <span class="ponto c-laranja" style="margin-left:16px"></span><b>Laranja = quem cuida.</b></p>
<p style="font-size:16px">Nos vídeos, nas ilustrações e nas etiquetas das visitas 3D, as duas cores dizem sempre de quem se está a falar. O laranja, complementar do azul, separa bem os dois.</p></div></section>
<section aria-labelledby="t-r"><h2 id="t-r">O que não usámos como prova</h2>
<p style="max-width:75ch;font-size:16px">Algumas histórias populares sobre o azul não estão confirmadas (por exemplo, os candeeiros azuis que reduziriam o crime em Glasgow). Ficaram de fora: só usamos estudos revistos por pares, dados medidos e decisões documentadas.</p>
<p style="margin-top:12px">${copiar("Teoricas/CorAzul_Grupo1.pdf", "recursos/CorAzul_Grupo1.pdf") ? `⬇ <a href="recursos/CorAzul_Grupo1.pdf" download>Trabalho completo «A cor azul» (PDF, 6 MB)</a> · ` : ""}<a href="index.html#regras">Ver as regras de composição da página inicial</a></p>
<p class="nota" style="margin-top:8px">Fontes: YouGov (2015) · Minguillon et al. (2017), PLOS ONE · Canva / Fortune 500 (2019) · Polícia Metropolitana de Londres (1829) · ONU, emblema e bandeira · Labrecque e Milne (2012), JAMS · WCAG 2.2.</p></section>`);

// Sobre nós
pagina("sobre-nos.html", "Sobre nós · Cuidar em Crise", "Os cinco estudantes do ISEP que fizeram o curso Cuidar em Crise.", "sobre", `
<section class="intro"><h1>Quem fez o curso</h1><p>Somos cinco estudantes do ISEP. Cada um fez uma lição. Carregue num vídeo para ouvir o papel de cada um (avatar feito com IA, no D-ID, a partir de um vídeo nosso).</p></section>
<ul class="equipa">${AVATARES.map(([nome, l, f]) => {
    const src = copiar("Teoricas/Avatares/" + f, "media/avatares/" + f);
    return `<li class="cartao">${src ? `<video controls preload="metadata" playsinline src="${src}#t=0.5" aria-label="Avatar de ${nome}"></video>` : ""}<h3>${nome}</h3><p class="nota">${l}</p></li>`; }).join("")}</ul>
<section class="cartao" style="display:grid;gap:12px"><h2>O projeto</h2>
<p>Feito na unidade curricular de Conceção e Autoria Multimédia (CAMUL 2026/27), no ISEP. O curso aplica os primeiros socorros psicológicos (OMS, 2011) à dupla cuidador e pessoa com demência, numa crise: incêndio, cheia ou tempestade, pandemia, saída de casa por conflito.</p>
<p>A D. Rosa e a Ana são personagens fictícias. As casas das visitas 3D foram capturadas por nós, sem pessoas nem dados pessoais (a da Lição 5 é um espaço público do Matterport Discover).</p>
<p><a class="btn2" href="${UDEMY}" target="_blank" rel="noopener">Ver o curso na Udemy ↗</a> <a class="btn2" href="contactos.html">Contactos</a></p></section>`);

// Contactos e créditos
pagina("contactos.html", "Contactos · Cuidar em Crise", "Contactos do Grupo 1 e créditos do curso Cuidar em Crise.", "contactos", `
<section class="intro"><h1>Contactos</h1><p>Encontrou um erro, tem uma dúvida ou quer divulgar o curso? Escreva-nos.</p></section>
<ul class="recursos">${EMAILS.map(([n, num]) => `<li>${n} · <a href="mailto:${num}@isep.ipp.pt">${num}@isep.ipp.pt</a></li>`).join("")}</ul>
<section class="cartao" style="display:grid;gap:8px"><h2>Precisa de ajuda agora?</h2><p>Em perigo imediato, ligue <b>112</b>. Para aconselhamento de saúde, ligue para o <b>SNS 24: 808 24 24 24</b>. Este curso não substitui os profissionais de saúde.</p></section>
<section style="display:grid;gap:8px"><h2>Créditos</h2>
<ul style="margin:0;display:grid;gap:4px;font-size:16px">
<li>Ilustrações das lições: Storyset (estilo Amico). Ilustração da página inicial: adaptada de Susa Monteiro, para o Diário do Alentejo.</li>
<li>Música dos vídeos: «High Class», Benjamin Andrews (Biblioteca de Áudio do YouTube).</li>
<li>Visitas 3D: Matterport. Lição 5: espaço «La Tarasca» (Zamora, Espanha), de IInmobarrios, no Matterport Discover.</li>
<li>Avatares: D-ID. Letra: Atkinson Hyperlegible (Braille Institute).</li>
<li>Fontes do conteúdo: OMS (2011) Psychological First Aid · ADI (2019) Forgotten in a Crisis · ADI (2022) Advice for carers… during times of crisis · Alzheimer's Association, In a Disaster.</li></ul></section>`);

// 404 (o Netlify usa-a sozinho)
pagina("404.html", "Página não encontrada · Cuidar em Crise", "Esta página não existe.", "", `
<section class="intro"><h1>Esta página não existe</h1><p>Pode ter mudado de sítio. Escolha por onde quer continuar.</p>
<p><a class="cta" href="index.html">Início</a> <a class="btn2" href="curso.html">O curso</a></p></section>`);

// ───────────────────────────── Fim ─────────────────────────────
let mb = 0; (function soma(d) { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); f.isDirectory() ? soma(p) : mb += fs.statSync(p).size / 1e6; } })(SAI);
console.log(`Site em ${SAI} (${Math.round(mb)} MB).`);
console.log(falta.length ? "Falta (a página mostra «em breve»):\n  - " + falta.join("\n  - ") : "Não falta nada.");
