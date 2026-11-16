# Scope document v1 → v2 (entregas 3, 4 e 5 de 18/11/2026). Corre UMA vez, sobre a v1 (recusa se a secção QEF já existir).
# Insere as secções de Plataforma_Scope_v2.md antes de «Referências», com a formatação dos parágrafos da v1;
# atualiza a capa, o estado do Gantt e dos entregáveis; exporta o PDF.
# Uso (PowerShell, Word fechado, na pasta Files/Teoricas): & .\Plataforma_Scope_v2.ps1
$ErrorActionPreference = 'Stop'
$dir  = $PSScriptRoot
$docx = Join-Path $dir 'Plataforma_Scope_Document_Grupo1.docx'
$pdf  = Join-Path $dir 'Plataforma_Scope_Document_Grupo1.pdf'

$texto = [IO.File]::ReadAllText((Join-Path $dir 'Plataforma_Scope_v2.md'), [Text.Encoding]::UTF8)
$texto = [regex]::Replace($texto, '(?s)<!--.*?-->', '').Replace('`', '')
$linhas = @($texto -split "`r?`n" | Where-Object { $_.Trim() -ne '' })

$w = New-Object -ComObject Word.Application
$w.Visible = $false
$w.DisplayAlerts = 0
try {
  $d = $w.Documents.Open($docx)
  function Par($t) { foreach ($p in $d.Paragraphs) { if ($p.Range.Text.Trim() -eq $t) { return $p } } throw "Sem o parágrafo «$t»" }
  foreach ($p in $d.Paragraphs) { if ($p.Range.Text.Trim() -eq 'Cenário de qualidade (QEF)') { throw 'A v2 já foi inserida.' } }

  # modelos: parágrafos da v1 com a formatação de cada tipo
  $tTitulo = Par 'Entregáveis'
  $tSub    = Par 'Organização'
  $tPonto  = $tSub.Next(1)
  $tCorpo  = $tTitulo.Next(1)
  $largura = $d.PageSetup.PageWidth - $d.PageSetup.LeftMargin - $d.PageSetup.RightMargin

  # escreve t no intervalo r; o que estiver entre ** fica a negrito
  function Escreve($r, $t, $base) {
    $neg = @(); $simples = ''
    foreach ($m in [regex]::Split($t, '(\*\*.+?\*\*)')) {
      if ($m -match '^\*\*(.+)\*\*$') { $neg += ,@($simples.Length, $Matches[1].Length); $simples += $Matches[1] } else { $simples += $m }
    }
    $r.Text = $simples
    $r.Font.Bold = [int]$base
    foreach ($n in $neg) { $d.Range($r.Start + $n[0], $r.Start + $n[0] + $n[1]).Font.Bold = $true }
  }
  # insere uma cópia do parágrafo-modelo antes de «Referências» e troca-lhe o texto; devolve o parágrafo novo
  function Novo($modelo, $t) {
    $pos = (Par 'Referências').Range.Start
    $n = $modelo.Range.End - $modelo.Range.Start
    $d.Range($pos, $pos).FormattedText = $modelo.Range.FormattedText
    Escreve $d.Range($pos, $pos + $n - 1) $t $modelo.Range.Font.Bold
    return $d.Range($pos, $pos).Paragraphs(1)
  }
  function Celula($c, $t) { $r = $c.Range; [void]$r.MoveEnd(1, -1); Escreve $r $t $false }

  $i = 0
  while ($i -lt $linhas.Count) {
    $l = $linhas[$i]
    if ($l -match '^# (.+)')  { [void](Novo $tTitulo $Matches[1]); $i++; continue }
    if ($l -match '^## (.+)') { [void](Novo $tSub $Matches[1]); $i++; continue }
    if ($l -match '^- (.+)')  { [void](Novo $tPonto $Matches[1]); $i++; continue }
    if ($l -match '^!\[(.+)\]\((.+)\)$') {
      $leg = $Matches[1]; $fich = Join-Path $dir $Matches[2]
      $p = Novo $tCorpo ' '
      $p.Alignment = 1; $p.KeepWithNext = -1
      $r = $p.Range; [void]$r.MoveEnd(1, -1); $r.Text = ''
      $img = $d.InlineShapes.AddPicture($fich, $false, $true, $r)
      $img.LockAspectRatio = -1; $img.Width = [single]$largura
      $c = Novo $tCorpo $leg
      $c.Alignment = 1; $c.Range.Font.Italic = $true; $c.Range.Font.Size = 9; $c.SpaceAfter = 12
      $i++; continue
    }
    if ($l.StartsWith('|')) {
      $rows = @()
      while ($i -lt $linhas.Count -and $linhas[$i].StartsWith('|')) {
        if ($linhas[$i] -notmatch '^\|[\s|:-]+\|$') { $rows += ,(@($linhas[$i].Trim().Trim('|') -split '\|' | ForEach-Object { $_.Trim() })) }
        $i++
      }
      $p = Novo $tCorpo 'tabela'
      [void](Novo $tCorpo ' ')     # parágrafo a seguir à tabela (espaço)
      $r = $p.Range; [void]$r.MoveEnd(1, -1); $r.Text = ''
      $tb = $d.Tables.Add($r, $rows.Count, $rows[0].Count)
      $tb.Borders.Enable = 1
      $tb.Range.Font.Size = 9; $tb.Range.Font.Bold = $false
      $tb.Range.ParagraphFormat.SpaceAfter = 2; $tb.Range.ParagraphFormat.SpaceBefore = 2
      $tb.TopPadding = 2; $tb.BottomPadding = 2
      for ($a = 0; $a -lt $rows.Count; $a++) { for ($b = 0; $b -lt $rows[0].Count; $b++) { Celula $tb.Cell($a + 1, $b + 1) $rows[$a][$b] } }
      $tb.Range.ParagraphFormat.Alignment = 0
      # largura das colunas pelo comprimento médio do texto de cada uma
      $pesos = @(for ($b = 0; $b -lt $rows[0].Count; $b++) { [Math]::Max([Math]::Max(6, (($rows | ForEach-Object { [Math]::Min(90, $_[$b].Length) }) | Measure-Object -Average).Average), 2.3 * (($rows | ForEach-Object { $_[$b] -split '\s+' } | ForEach-Object { $_.Replace('*', '').Length }) | Measure-Object -Maximum).Maximum) })
      $soma = ($pesos | Measure-Object -Sum).Sum
      $tb.PreferredWidthType = 2; $tb.PreferredWidth = 100
      for ($b = 0; $b -lt $rows[0].Count; $b++) { $tb.Columns($b + 1).PreferredWidthType = 2; $tb.Columns($b + 1).PreferredWidth = [single](100 * $pesos[$b] / $soma) }
      $tb.Rows(1).Range.Font.Bold = $true
      $tb.Rows(1).Shading.BackgroundPatternColor = 15266805
      $tb.Rows(1).HeadingFormat = -1
      continue
    }
    [void](Novo $tCorpo $l); $i++
  }

  # capa, Gantt e entregáveis
  $r = $d.Content; [void]$r.Find.Execute('Versão 1 (entrega de 11/11/2026)', $false, $false, $false, $false, $false, $true, 0, $false, 'Versão 2 (entrega de 18/11/2026)', 2)
  $r = $d.Content; [void]$r.Find.Execute('estado a 10/11', $false, $false, $false, $false, $false, $true, 0, $false, 'estado a 18/11', 2)
  function Estado($tb, $tarefa, $col, $novo) {
    foreach ($c in $tb.Range.Cells) { if ($c.ColumnIndex -eq 1 -and $c.Range.Text.Trim([char]13, [char]7, ' ') -eq $tarefa) { $tb.Cell($c.RowIndex, $col).Range.Text = $novo; return } }
    throw "Linha «$tarefa» não encontrada"
  }
  $g = $d.Tables(1)
  Estado $g 'QEF: cenário de qualidade da plataforma' 9 'Feito'
  Estado $g 'Storyboard dos ecrãs-chave' 9 'Feito'
  Estado $g 'Plano de marketing e divulgação' 9 'Feito'
  $e = $d.Tables(3)
  Estado $e 'Scope document (este documento)' 2 '11/11 (v1) · 18/11 (v2)'
  Estado $e 'Scope document (este documento)' 3 'Feito: v2 (secções 1 a 10)'
  Estado $e 'QEF da plataforma (Usabilidade, Funcionalidade, Estética)' 3 'Feito (secção 7 + Plataforma_QEF_Grupo1.xlsx); à espera da validação'
  Estado $e 'Storyboard / mockups / ecrãs-chave' 3 'Feito (secção 8: 7 ecrãs)'
  Estado $e 'Plano de marketing e divulgação' 3 'Feito (secção 9)'

  $d.Save()
  $d.Close()
} finally { $w.Quit([ref]0) }

# PDF num processo à parte (na mesma sessão a exportação fica parada)
$job = Start-Job -ArgumentList $docx, $pdf -ScriptBlock {
  param($docx, $pdf)
  $w = New-Object -ComObject Word.Application
  $w.Visible = $false; $w.DisplayAlerts = 0
  try { $d = $w.Documents.Open($docx, $false, $true); $d.ExportAsFixedFormat($pdf, 17); "Páginas: $($d.ComputeStatistics(2))"; $d.Close($false) } finally { $w.Quit([ref]0) }
}
if (-not (Wait-Job $job -Timeout 180)) { Stop-Job $job; throw 'A exportação para PDF passou de 3 min.' }
Receive-Job $job; Remove-Job $job



