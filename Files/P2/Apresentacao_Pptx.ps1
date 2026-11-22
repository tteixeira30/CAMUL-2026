# Converte P2_Apresentacao_Grupo1.html em P2_Apresentacao_Grupo1.pptx (o enunciado pede .ppt).
# Cada diapositivo vira uma imagem (Edge headless, 3200 x 1800) num diapositivo 16:9;
# o <aside class="notas"> de cada um vai para as notas do orador. Apresentar a partir do .html continua igual.
# Correr numa consola PowerShell, nesta pasta: & .\Apresentacao_Pptx.ps1
# ponytail: diapositivos só de imagem (não editáveis no PowerPoint); mudar o .html e voltar a correr.
$p = $PSScriptRoot
$html = Get-Content (Join-Path $p 'P2_Apresentacao_Grupo1.html') -Raw -Encoding UTF8
$pptx = Join-Path $p 'P2_Apresentacao_Grupo1.pptx'
$tmp = Join-Path $env:TEMP 'P2_Apresentacao_Pptx'
Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory $tmp | Out-Null

# Cópia para as capturas: caminhos relativos a esta pasta, todos os passos visíveis, sem animações nem botões
$base = '<base href="file:///' + ($p -replace '\\', '/') + '/">'
$css = '<style>.passo{opacity:1!important;transform:none!important;transition:none!important}' +
       '.slide.ativo{animation:none!important}.seta{visibility:hidden!important}</style>'
$copia = Join-Path $tmp 'apresentacao.html'
[IO.File]::WriteAllText($copia, ($html -replace '<head>', "<head>$base" -replace '</head>', "$css</head>"), [Text.UTF8Encoding]::new($false))

$secs = [regex]::Matches($html, '(?s)<section class="slide.*?</section>')
$edge = @("${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
$url = 'file:///' + ($copia -replace '\\', '/')
for ($i = 1; $i -le $secs.Count; $i++) {
  $png = Join-Path $tmp "d$i.png"
  & $edge --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --window-size=1600,900 `
    --virtual-time-budget=4000 "--user-data-dir=$tmp\perfil" "--screenshot=$png" "$url#$i" 2>$null | Out-Null
  if (-not (Test-Path $png)) { throw "Falhou a captura do diapositivo $i" }
}

$app = New-Object -ComObject PowerPoint.Application
try {
  $pres = $app.Presentations.Add(0)       # sem janela
  $pres.PageSetup.SlideWidth = 960; $pres.PageSetup.SlideHeight = 540
  for ($i = 1; $i -le $secs.Count; $i++) {
    $s = $pres.Slides.Add($i, 12)         # ppLayoutBlank
    [void]$s.Shapes.AddPicture((Join-Path $tmp "d$i.png"), 0, -1, 0, 0, 960, 540)
    $sec = $secs[$i - 1].Value
    $quem = [regex]::Match($sec, 'data-quem="([^"]+)"').Groups[1].Value
    $t = [regex]::Match($sec, 'data-t="(\d+)"').Groups[1].Value
    $nota = [regex]::Match($sec, '(?s)<aside class="notas">(.*?)</aside>').Groups[1].Value
    $nota = [Net.WebUtility]::HtmlDecode(($nota -replace '<[^>]+>', '')).Trim()
    $s.NotesPage.Shapes.Placeholders(2).TextFrame.TextRange.Text = "$quem - $t s`r$nota"
  }
  if (Test-Path $pptx) { Remove-Item $pptx }
  $pres.SaveAs($pptx)
  "$pptx - $($pres.Slides.Count) diapositivos - {0:N1} MB" -f ((Get-Item $pptx).Length / 1MB)
  $pres.Close()
} finally { $app.Quit() }
