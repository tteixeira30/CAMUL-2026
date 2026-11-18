# Scope document: QEF completo (45 critérios) + secção «Testes Alfa e Beta» (18/11/2026). Corre UMA vez (recusa se a secção já existir).
# Insere os blocos de Plataforma_Scope_v3.md antes dos parágrafos indicados por «@antes X», com a formatação dos parágrafos que já existem;
# atualiza o Gantt e os entregáveis; exporta o PDF.
# Uso (PowerShell, Word fechado, na pasta Files/Teoricas): & .\Plataforma_Scope_v3.ps1
$ErrorActionPreference = 'Stop'
$dir  = $PSScriptRoot
$docx = Join-Path $dir 'Plataforma_Scope_Document_Grupo1.docx'
$pdf  = Join-Path $dir 'Plataforma_Scope_Document_Grupo1.pdf'

$texto = [IO.File]::ReadAllText((Join-Path $dir 'Plataforma_Scope_v3.md'), [Text.Encoding]::UTF8)
$texto = [regex]::Replace($texto, '(?s)<!--.*?-->', '').Replace('`', '')
$linhas = @($texto -split "`r?`n" | Where-Object { $_.Trim() -ne '' })

$w = New-Object -ComObject Word.Application
$w.Visible = $false
$w.DisplayAlerts = 0
try {
  $d = $w.Documents.Open($docx)
  function Par($t) { foreach ($p in $d.Paragraphs) { if ($p.Range.Text.Trim() -eq $t) { return $p } } throw "Sem o parágrafo «$t»" }
  foreach ($p in $d.Paragraphs) { if ($p.Range.Text.Trim() -eq 'Testes Alfa e Beta') { throw 'O QEF completo e os testes já foram inseridos.' } }

  # modelos: parágrafos que já existem, com a formatação de cada tipo
  $tTitulo = Par 'Entregáveis'
  $tSub    = Par 'Organização'
  $tPonto  = $tSub.Next(1)
  $tCorpo  = $tTitulo.Next(1)
  $script:pos = 0   # onde entra o próximo bloco (avança a cada inserção; definido por «@antes X»)

  function Escreve($r, $t, $base) {
    $neg = @(); $simples = ''
    foreach ($m in [regex]::Split($t, '(\*\*.+?\*\*)')) {
      if ($m -match '^\*\*(.+)\*\*$') { $neg += ,@($simples.Length, $Matches[1].Length); $simples += $Matches[1] } else { $simples += $m }
    }
    $r.Text = $simples
    $r.Font.Bold = [int]$base
    foreach ($n in $neg) { $d.Range($r.Start + $n[0], $r.Start + $n[0] + $n[1]).Font.Bold = $true }
  }
  # insere uma cópia do parágrafo-modelo em $script:pos e troca-lhe o texto; devolve o parágrafo novo
  function Novo($modelo, $t) {
    $pos = $script:pos
    $n = $modelo.Range.End - $modelo.Range.Start
    $d.Range($pos, $pos).FormattedText = $modelo.Range.FormattedText
    Escreve $d.Range($pos, $pos + $n - 1) $t $modelo.Range.Font.Bold
    $p = $d.Range($pos, $pos).Paragraphs(1)
    $script:pos = $p.Range.End
    return $p
  }
  function Celula($c, $t) { $r = $c.Range; [void]$r.MoveEnd(1, -1); Escreve $r $t $false }

  $i = 0
  while ($i -lt $linhas.Count) {
    $l = $linhas[$i]
    if ($l -match '^@antes (.+)') { $script:pos = (Par $Matches[1].Trim()).Range.Start; $i++; continue }
    if ($l -match '^# (.+)')  { [void](Novo $tTitulo $Matches[1]); $i++; continue }
    if ($l -match '^## (.+)') { [void](Novo $tSub $Matches[1]); $i++; continue }
    if ($l -match '^- (.+)')  { [void](Novo $tPonto $Matches[1]); $i++; continue }
    if ($l.StartsWith('|')) {
      $rows = @()
      while ($i -lt $linhas.Count -and $linhas[$i].StartsWith('|')) {
        if ($linhas[$i] -notmatch '^\|[\s|:-]+\|$') { $rows += ,(@($linhas[$i].Trim().Trim('|') -split '\|' | ForEach-Object { $_.Trim() })) }
        $i++
      }
      $p = Novo $tCorpo 'tabela'
      $sp = Novo $tCorpo ' '     # parágrafo a seguir à tabela (espaço)
      $r = $p.Range; [void]$r.MoveEnd(1, -1); $r.Text = ''
      $tb = $d.Tables.Add($r, $rows.Count, $rows[0].Count)
      $tb.Borders.Enable = 1
      $tb.Range.Font.Size = $(if ($rows[0].Count -ge 6) { 8 } else { 9 }); $tb.Range.Font.Bold = $false
      $tb.Range.ParagraphFormat.SpaceAfter = 2; $tb.Range.ParagraphFormat.SpaceBefore = 2
      $tb.TopPadding = 2; $tb.BottomPadding = 2
      for ($a = 0; $a -lt $rows.Count; $a++) { for ($b = 0; $b -lt $rows[0].Count; $b++) { Celula $tb.Cell($a + 1, $b + 1) $rows[$a][$b] } }
      $tb.Range.ParagraphFormat.Alignment = 0
      $pesos = @(for ($b = 0; $b -lt $rows[0].Count; $b++) { [Math]::Max([Math]::Max(6, (($rows | ForEach-Object { [Math]::Min(90, $_[$b].Length) }) | Measure-Object -Average).Average), 2.3 * (($rows | ForEach-Object { $_[$b] -split '\s+' } | ForEach-Object { $_.Replace('*', '').Length }) | Measure-Object -Maximum).Maximum) })
      $soma = ($pesos | Measure-Object -Sum).Sum
      $tb.PreferredWidthType = 2; $tb.PreferredWidth = 100
      for ($b = 0; $b -lt $rows[0].Count; $b++) { $tb.Columns($b + 1).PreferredWidthType = 2; $tb.Columns($b + 1).PreferredWidth = [single](100 * $pesos[$b] / $soma) }
      $tb.Rows(1).Range.Font.Bold = $true
      $tb.Rows(1).Shading.BackgroundPatternColor = 15266805
      $tb.Rows(1).HeadingFormat = -1
      $script:pos = $sp.Range.End
      continue
    }
    [void](Novo $tCorpo $l); $i++
  }

  # o parágrafo «Como se avalia» da secção 7 remete para os resultados
  $r = $d.Content; [void]$r.Find.Execute('No teste Alfa (antes de 25/11) cada critério é medido por quem não fez a página.', $false, $false, $false, $false, $false, $true, 0, $false, 'A 1.ª métrica (teste Alfa, 18/11) está na secção 10.', 2)

  # Gantt e entregáveis
  function Linha($tb, $tarefa) {
    foreach ($c in $tb.Range.Cells) { if ($c.ColumnIndex -eq 1 -and $c.Range.Text.Trim([char]13, [char]7, ' ') -eq $tarefa) { return $c.RowIndex } }
    throw "Linha «$tarefa» não encontrada"
  }
  $g = $d.Tables(1)
  $a = Linha $g 'Plano de testes Alfa e Beta + inquéritos'; $g.Cell($a, 9).Range.Text = 'Feito'
  $a = Linha $g 'Teste Alfa (o grupo) + medição do QEF'
  $g.Cell($a, 2).Range.Text = '18/11'; $g.Cell($a, 9).Range.Text = 'Feito'
  # a barra passa da semana de 23/11 (coluna 8) para a de 16/11 (coluna 7)
  $cor = $g.Cell($a, 8).Shading.BackgroundPatternColor
  $g.Cell($a, 7).Shading.BackgroundPatternColor = $cor
  $g.Cell($a, 8).Shading.BackgroundPatternColor = -16777216
  $e = $d.Tables(3)
  $e.Cell((Linha $e 'Scope document (este documento)'), 3).Range.Text = 'Feito: v2 (secções 1 a 11, com o QEF completo e o teste Alfa)'
  $e.Cell((Linha $e 'QEF da plataforma (Usabilidade, Funcionalidade, Estética)'), 3).Range.Text = 'Feito (secção 7, com os 45 critérios, + Plataforma_QEF_Grupo1.xlsx); 1.ª métrica a 18/11: q = 0,75'
  $a = Linha $e 'Plano de testes Alfa e Beta'; $e.Cell($a, 2).Range.Text = '18/11'; $e.Cell($a, 3).Range.Text = 'Feito (secção 10)'
  $a = Linha $e 'Inquérito + resultados do teste Alfa'; $e.Cell($a, 2).Range.Text = '18/11'; $e.Cell($a, 3).Range.Text = 'Feito (secção 10 + Plataforma_QEF_Metrica1_Grupo1.xlsx)'
  $e.Cell((Linha $e 'Inquérito + resultados do teste Beta'), 3).Range.Text = 'Planeado (secção 10): na apresentação, pelo Grupo 2; sem resultados neste documento'
  $e.Cell((Linha $e 'Produto multimédia final'), 3).Range.Text = 'Em curso: site feito a 18/11, com os vídeos das 5 lições; falta publicar e a visita 3D da L4'

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
