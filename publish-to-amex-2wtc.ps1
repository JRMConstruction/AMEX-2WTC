$ErrorActionPreference = "Stop"

$source = Split-Path -Parent $MyInvocation.MyCommand.Path
$destination = "C:\Users\jward\OneDrive - JRM Construction Management\Documents\GitHub\AMEX-2WTC"

if (-not (Test-Path -LiteralPath $destination)) {
  New-Item -ItemType Directory -Force -Path $destination | Out-Null
}

$excludeDirs = @("node_modules", ".pnpm-store", "dist", ".git")
$excludeFiles = @("tsconfig.tsbuildinfo", "tsconfig.node.tsbuildinfo")

Get-ChildItem -LiteralPath $source -Force | Where-Object {
  $excludeDirs -notcontains $_.Name -and
  $excludeFiles -notcontains $_.Name -and
  $_.Name -notlike "AMEX-2WTC-publish-*.zip"
} | ForEach-Object {
  $target = Join-Path $destination $_.Name
  if ($_.PSIsContainer) {
    robocopy $_.FullName $target /MIR /XD node_modules .pnpm-store .git /XF tsconfig.tsbuildinfo tsconfig.node.tsbuildinfo | Out-Null
    if ($LASTEXITCODE -gt 7) {
      throw "Robocopy failed while publishing $($_.Name) with exit code $LASTEXITCODE"
    }
  } else {
    Copy-Item -LiteralPath $_.FullName -Destination $target -Force
  }
}

robocopy (Join-Path $source "dist") (Join-Path $destination "dist") /MIR | Out-Null
if ($LASTEXITCODE -gt 7) {
  throw "Robocopy failed while publishing dist with exit code $LASTEXITCODE"
}

Write-Host "Published AMEX 2WTC project to $destination"
