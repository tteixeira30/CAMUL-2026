// Cuidar em Crise: vídeos por aula, visita 3D só ao clicar, atividades e quiz (sem contas e sem guardar respostas).
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
