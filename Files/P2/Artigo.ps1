# Gera P2_Artigo_Grupo1.docx e .pdf a partir de P2_Artigo.md, sobre o modelo IEEE (conference-template-a4.docx).
# Uso (numa consola PowerShell, com o Word fechado): & .\Artigo.ps1
# Formato do .md: ver o comentário no topo do P2_Artigo.md.
$ErrorActionPreference = 'Stop'
$dir  = $PSScriptRoot
$md   = Join-Path $dir 'P2_Artigo.md'
$docx = Join-Path $dir 'P2_Artigo_Grupo1.docx'
$saidaPdf = Join-Path $dir 'P2_Artigo_Grupo1.pdf'

# --- ler o .md (sem o comentário do topo) ---
$texto = [IO.File]::ReadAllText($md, [Text.Encoding]::UTF8)
$texto = [regex]::Replace($texto, '(?s)<!--.*?-->', '')
$linhas = $texto -split "`r?`n" | Where-Object { $_.Trim() -ne '' }

$titulo = ($linhas | Where-Object { $_.StartsWith('% ') } | Select-Object -First 1).Substring(2)
$autores = @($linhas | Where-Object { $_.StartsWith('@ ') } | ForEach-Object { ($_.Substring(2) -split '\s*\|\s*') -join [char]11 })
$resumo = $linhas | Where-Object { $_.StartsWith('Abstract') } | Select-Object -First 1
$chaves = $linhas | Where-Object { $_.StartsWith('Keywords') } | Select-Object -First 1
$corpo = @($linhas | Where-Object { -not ($_.StartsWith('% ') -or $_.StartsWith('@ ') -or $_.StartsWith('Abstract') -or $_.StartsWith('Keywords')) })
if ($autores.Count -gt 6) { throw 'O modelo tem lugar para 6 autores.' }

Copy-Item (Join-Path $dir 'conference-template-a4.docx') $docx -Force
$w = New-Object -ComObject Word.Application
$w.Visible = $false
$w.DisplayAlerts = 0   # sem avisos escondidos à espera de resposta
try {
  $d = $w.Documents.Open($docx)

  function Texto-Paragrafo($p, $t) { $r = $p.Range; [void]$r.MoveEnd(1, -1); $r.Text = $t }
  # estilos do Word pelo número (num Word em português «Heading 1» é «Título 1» e o nome inglês não serve)
  $fixos = @{ 'Normal' = -1; 'Heading 1' = -2; 'Heading 2' = -3; 'Heading 3' = -4; 'Heading 4' = -5; 'Heading 5' = -6; 'Body Text' = -67 }
  function Estilo($nome) { if ($fixos.ContainsKey($nome)) { $d.Styles.Item($fixos[$nome]) } else { $d.Styles.Item($nome) } }
  function Paragrafo-Com-Estilo($nome) {
    $local = (Estilo $nome).NameLocal
    foreach ($p in $d.Paragraphs) { if ($p.Style.NameLocal -eq $local) { return $p } }
    throw "Sem paragrafo com o estilo $nome"
  }

  # título (e a nota «Sub-titles…» do modelo sai)
  Texto-Paragrafo $d.Paragraphs(1) $titulo
  $d.Paragraphs(2).Range.Delete() | Out-Null

  # autores: os 6 blocos do modelo vão do «line 1: <n> Given Name Surname» ao «ORCID» seguinte
  $ordem = '1st', '2nd', '3rd', '4th', '5th', '6th'
  for ($i = 0; $i -lt 6; $i++) {
    $r = $d.Content
    if (-not $r.Find.Execute("line 1: $($ordem[$i]) Given Name Surname")) { throw "Bloco do autor $($ordem[$i]) nao encontrado" }
    $ini = $r.Start
    $r2 = $d.Range($ini, $d.Content.End)
    if (-not $r2.Find.Execute('ORCID')) { throw 'ORCID nao encontrado' }
    $d.Range($ini, $r2.End).Text = $(if ($i -lt $autores.Count) { $autores[$i] } else { '' })
  }

  # resumo e palavras-chave (o prefixo fica em itálico, como no IEEE)
  foreach ($par in @(@('Abstract', $resumo), @('Keywords', $chaves))) {
    $p = Paragrafo-Com-Estilo $par[0]
    Texto-Paragrafo $p $par[1]
    $p.Range.Font.Italic = $false
    $pref = $par[1].IndexOf([char]0x2014) + 1
    $d.Range($p.Range.Start, $p.Range.Start + $pref).Font.Italic = $true
  }

  # corpo: apaga o texto de exemplo (do 1.º Heading 1 ao fim da secção de 2 colunas) e o aviso final
  $h1 = Paragrafo-Com-Estilo 'Heading 1'
  $ini = $h1.Range.Start
  $d.Range($ini, $d.Sections(4).Range.End - 1).Delete() | Out-Null
  # o aviso final do modelo sai, mas a quebra de secção fica (senão o corpo herda 1 coluna da secção 5)
  $r = $d.Content
  if ($r.Find.Execute('IEEE conference templates contain guidance text')) { $p = $r.Paragraphs(1).Range; [void]$p.MoveEnd(1, -1); $p.Text = '' }
  # o rodapé do modelo (XXX-X-XXXX-XXXX-X/XX/$XX.00 ©20XX IEEE) não se aplica a um trabalho da UC
  foreach ($s in $d.Sections) { foreach ($k in 1, 2, 3) { $f = $s.Footers($k).Range; if ($f.Text -match 'XXX') { $f.Text = '' } } }
  # caixas de texto de exemplo do modelo (patrocínios, conselhos sobre figuras)
  foreach ($f in @($d.Frames)) { $f.Delete() }
  foreach ($s in @($d.Shapes)) { $s.Delete() }
  $ps = $d.Sections(4).PageSetup
  $col = $ps.TextColumns.Width
  $esp = $ps.TextColumns.Spacing
  $pag = [single]($ps.PageWidth - $ps.LeftMargin - $ps.RightMargin)

  $sel = $w.Selection
  $sel.SetRange($ini, $ini)
  function Escrever($estilo, $t) { $sel.Style = (Estilo $estilo); $sel.TypeText($t); $sel.TypeParagraph() }

  $refs = $false
  foreach ($l in $corpo) {
    if ($l -match '^# References') { $refs = $true; Escrever 'Heading 5' 'References'; continue }
    if ($refs) { Escrever 'references' $l; continue }
    if ($l -match '^### (.+)') { Escrever 'Heading 3' $Matches[1]; continue }
    if ($l -match '^## (.+)')  { Escrever 'Heading 2' $Matches[1]; continue }
    if ($l -match '^# (.+)')   { Escrever 'Heading 1' $Matches[1]; continue }
    # «![legenda](ficheiro)» figura · «![TABLE](ficheiro)» tabela já exportada (sem legenda) · «{wide}» no fim → duas colunas
    if ($l -match '^!\[(.+)\]\((.+?)\)(\{wide\})?$') {
      $leg = $Matches[1]; $fich = $Matches[2]; $larga = [bool]$Matches[3]
      if ($larga) { $sel.InsertBreak(3); $sel.PageSetup.TextColumns.SetCount(1) }   # 3 = quebra de secção contínua
      $sel.Style = (Estilo 'Normal'); $sel.ParagraphFormat.Alignment = 1
      $img = $sel.InlineShapes.AddPicture((Join-Path $dir $fich), $false, $true)
      $img.LockAspectRatio = -1; $img.Width = [single]$(if ($larga) { $pag } else { $col })
      $sel.TypeParagraph()
      if ($leg -ne 'TABLE') { Escrever 'figure caption' $leg }
      if ($larga) { $sel.InsertBreak(3); $sel.PageSetup.TextColumns.SetCount(2); $sel.PageSetup.TextColumns.Spacing = $esp }
      continue
    }
    if ($l -match '^\[TABLE: (.+?) \| (.+)\]$') { Escrever 'table head' $Matches[1]; Escrever 'Body Text' "[$($Matches[2])]"; continue }
    Escrever 'Body Text' $l
  }
  # o último TypeParagraph deixa um parágrafo vazio; esse parágrafo acaba na quebra de secção, por isso
  # apaga-se só a marca de parágrafo anterior (Backspace) e a quebra fica
  $sel.TypeBackspace()

  $d.Save()
  $d.Close()
} finally { $w.Quit([ref]0) }

# PDF: num processo à parte (Start-Job). Na mesma sessão que editou o documento, a exportação fica parada.
$job = Start-Job -ArgumentList $docx, $saidaPdf -ScriptBlock {
  param($docx, $saidaPdf)
  $w = New-Object -ComObject Word.Application
  $w.Visible = $false
  $w.DisplayAlerts = 0
  try {
    $d = $w.Documents.Open($docx, $false, $true)
    $d.ExportAsFixedFormat($saidaPdf, 17)
    "Paginas: $($d.ComputeStatistics(2)) · palavras: $($d.ComputeStatistics(0)) · figuras: $($d.InlineShapes.Count)"
    $d.Close($false)
  } finally { $w.Quit([ref]0) }
}
if (-not (Wait-Job $job -Timeout 120)) { Stop-Job $job; throw 'A exportação para PDF passou de 2 min: fechar o Word e correr outra vez.' }
Receive-Job $job
Remove-Job $job
