# Introduction to Vision-Language-Action Models and Their Trends (2024--2026)

이 저장소는 VLA(Vision-Language-Action) 모델의 2024--2026년 연구 흐름을 정리한 한국어 미니북과, 그 배경이 된 OpenVLA-OFT 인용 논문 조사 자료를 함께 보관한다.

## 저장소 제목

권장 repo 이름은 `vla-trends-mini-book-2024-2026`이다.

짧고 명확하며, 아래 세 가지를 모두 담는다.

- VLA trend mini-book
- 2024--2026 연구 흐름
- OpenVLA-OFT 인용 논문 조사 기반 자료

## 기준 논문

이 미니북과 인용 조사의 출발점은 다음 논문이다.

> Moo Jin Kim, Chelsea Finn, Percy Liang, **Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success**, arXiv:2502.19645, 2025.

이 논문은 OpenVLA-style VLA fine-tuning에서 action decoding, continuous action representation, action chunking, L1 objective, throughput/success trade-off를 다룬다. 본 저장소의 citation survey는 이 논문을 Google Scholar에서 인용한 논문군을 수집하고, 그 흐름을 VLA mini-book의 근거 자료로 정리한 것이다.

## 포함 자료

```text
book/
  main.pdf                         # 최종 빌드된 미니북 PDF
  main.tex                         # LaTeX main
  references.bib                   # citation-only bibliography
  chapters/                        # 장별 tex 파일
  appendices/                      # appendix tex 파일
  styles/vlabook.sty               # book style
  Dockerfile, latexmkrc, build.*   # 빌드 관련 파일

citation_survey/
  openvla_oft_google_scholar_citation_survey_complete.xlsx
  openvla_oft_google_scholar_citation_survey_partial.xlsx
  google_scholar_citing_papers_complete.json
  google_scholar_citing_papers.csv
  collection_summary_complete.json

summaries/
  paper_summaries_13q_all_citing_papers_polished.md
  paper_summaries_13q_all_citing_papers.md

syllabus/
  introduction_to_vla_and_trends_2024_2026_syllabus.md

scripts/
  build_citation_workbook.mjs
  merge_citation_rows.mjs
```

## PDF

최종 PDF는 다음 파일이다.

- `book/main.pdf`

현재 버전은 `Draft v0.4`이며, 표지에는 다음과 같이 표기되어 있다.

> Director: Giseop Kim (gsk@dgist.ac.kr)

## 미니북 구성

책은 다음 흐름으로 구성되어 있다.

- Part I. What is VLA?
- Part II. Core Bottlenecks
- Part III. Evaluation in the Physical World
- Part IV. Generalist and Cross-Domain VLA
- Part V. Research Practice
- Appendices: Annotated Reading Catalog, Evidence Ladder, Glossary

핵심 메시지는 VLA를 단순한 “VLM + action head”로 보지 않고, language-conditioned closed-loop robot policy로 읽는 것이다. 따라서 action representation, fine-tuning, latency budget, benchmark protocol, safety envelope, source evidence level을 반복 축으로 둔다.

## 인용 조사 자료 설명

`citation_survey/`의 Excel 파일은 OpenVLA-OFT 논문을 인용한 Google Scholar 논문군을 정리한 것이다.

- `complete.xlsx`: 전체 인용 조사 결과 워크북
- `partial.xlsx`: 중간 수집 또는 부분 결과 보존본
- `google_scholar_citing_papers_complete.json`: 수집된 인용 논문 metadata
- `google_scholar_citing_papers.csv`: CSV 형태의 인용 논문 목록
- `collection_summary_complete.json`: 수집 요약

이 자료는 “이 미니북이 어떤 논문 흐름을 긁어서 만든 것인지”를 설명하기 위한 근거 자료이다. Google Scholar 화면 상태와 접근 제한 때문에 결과는 특정 수집 시점의 snapshot으로 봐야 한다.

## 13-question 요약

`summaries/`에는 수집 논문군을 13-question framework로 요약한 Markdown 파일이 있다.

13-question framework는 각 논문을 다음 항목으로 읽는다.

1. 배경
2. 문제
3. 기존 한계
4. 목표
5. 방법
6. 핵심 아이디어
7. 검증
8. 결과
9. 비교
10. 의의
11. 한계
12. 향후 과제
13. 자원 공개

## 빌드 방법

Docker 기반 빌드를 권장한다.

```powershell
cd book
docker build -t vla-trends-tex:latest .
docker run --rm -v "${PWD}:/work" -w /work vla-trends-tex:latest latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex
```

Windows PowerShell에서 `${PWD}` 볼륨 경로가 맞지 않으면 절대경로를 사용한다.

```powershell
docker run --rm -v "C:\path\to\repo\book:/work" -w /work vla-trends-tex:latest latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex
```

## 포함하지 않은 것

수집 과정에서 다운로드한 개별 논문 PDF 묶음은 저장소에 포함하지 않았다. 이유는 다음과 같다.

- 논문 PDF 저작권과 재배포 조건이 논문별로 다르다.
- GitHub 저장소 용량이 불필요하게 커진다.
- 이 저장소의 목적은 원문 재배포가 아니라, citation survey metadata, 요약, 미니북 원고를 보존하는 것이다.

## 라이선스

현재 원고와 정리 자료의 공개 라이선스는 별도 확정 전이다. 외부 재배포 전에는 논문 원문, 인용 조사 데이터, 요약물의 사용 범위를 확인해야 한다.
