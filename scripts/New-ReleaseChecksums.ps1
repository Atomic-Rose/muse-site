param(
    [Parameter(Mandatory = $true)]
    [string]$ReleaseDir
)

$resolvedReleaseDir = Resolve-Path -LiteralPath $ReleaseDir -ErrorAction Stop
$outputPath = Join-Path -Path $resolvedReleaseDir.Path -ChildPath "SHA256SUMS.txt"

$assetExtensions = @(".deb", ".rpm", ".exe", ".dmg", ".msi", ".zip", ".AppImage")
$assets = Get-ChildItem -LiteralPath $resolvedReleaseDir.Path -File |
    Where-Object { $assetExtensions -contains $_.Extension } |
    Sort-Object Name

if ($assets.Count -eq 0) {
    Write-Error "No release assets found in $($resolvedReleaseDir.Path)."
    exit 1
}

$lines = foreach ($asset in $assets) {
    $hash = Get-FileHash -LiteralPath $asset.FullName -Algorithm SHA256
    "$($hash.Hash.ToLowerInvariant())  $($asset.Name)"
}

$lines | Set-Content -LiteralPath $outputPath -Encoding ascii
Write-Host "Wrote $outputPath"
