@echo off
setlocal
set IMAGE=vla-trends-tex:latest
set HERE=%~dp0
docker build -t %IMAGE% "%HERE%"
docker run --rm -v "%HERE%:/work" -w /work %IMAGE% latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex
echo Built: %HERE%main.pdf
