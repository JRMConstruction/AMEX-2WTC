param(
  [string]$Message = "Update AMEX 2WTC presentation"
)

$ErrorActionPreference = "Stop"

$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repo

$npm = Get-Command npm -ErrorAction SilentlyContinue
if ($npm) {
  npm install
  npm run build
} else {
  $bundledNode = "C:\Users\jward\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
  if (-not (Test-Path -LiteralPath $bundledNode)) {
    throw "npm is not on PATH and the bundled Codex Node runtime was not found."
  }
  if (-not (Test-Path -LiteralPath (Join-Path $repo "node_modules"))) {
    throw "npm is not on PATH and node_modules is missing. Install dependencies before publishing."
  }
  & $bundledNode ".\node_modules\typescript\bin\tsc" -b
  & $bundledNode ".\node_modules\vite\bin\vite.js" build
}

git pull --rebase origin main
git add -A

$changes = git status --porcelain
if (-not $changes) {
  Write-Host "No changes to publish."
  exit 0
}

git commit -m $Message
git push origin main

Write-Host "Published and pushed AMEX 2WTC presentation."
