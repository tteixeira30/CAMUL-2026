# Monta o .zip da entrega final do P2 em Entrega_P2\ (fora do git).
# Correr numa consola PowerShell, nesta pasta: & .\Montar_Zip.ps1
# Falta o .pptx? O zip sai na mesma, com um aviso; volta-se a correr quando chegar.
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem
$p = $PSScriptRoot
$zip = Join-Path $p 'Entrega_P2\CAMUL2627_P2_G1_1240441_1240493_1221391_1220901_1200929.zip'
New-Item -ItemType Directory -Force (Split-Path $zip) | Out-Null
if (Test-Path $zip) { Remove-Item $zip }

$files = [ordered]@{
  'P2_Artigo_Grupo1.docx' = 'P2_Artigo_Grupo1.docx'
  'P2_Artigo_Grupo1.pdf'  = 'P2_Artigo_Grupo1.pdf'
  'P2_Apresentacao_Grupo1.pptx' = 'P2_Apresentacao_Grupo1.pptx'
}
Get-ChildItem (Join-Path $p 'Figuras') -Filter *.png | Sort-Object Name | ForEach-Object { $files["Figuras/$($_.Name)"] = "Figuras\$($_.Name)" }

$z = [System.IO.Compression.ZipFile]::Open($zip, 'Create')
try {
  foreach ($e in $files.GetEnumerator()) {
    $src = Join-Path $p $e.Value
    if (-not (Test-Path $src)) { Write-Warning "Falta: $($e.Value)"; continue }
    [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($z, $src, $e.Key, 'Optimal')
  }
} finally { $z.Dispose() }

$r = [System.IO.Compression.ZipFile]::OpenRead($zip)
$r.Entries | ForEach-Object { '{0,-40} {1,10:N0}' -f $_.FullName, $_.Length }
$r.Dispose()
'{0} ({1:N1} MB)' -f $zip, ((Get-Item $zip).Length / 1MB)
