$ErrorActionPreference = "Stop"

$image = "vla-trends-tex:latest"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path

docker build -t $image $here
docker run --rm `
  -v "${here}:/work" `
  -w /work `
  $image `
  latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex

Write-Host "Built: $here\main.pdf"
