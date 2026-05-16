import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const cwd = process.cwd();
const dataPath = path.join(cwd, "data", "google_scholar_citing_papers_complete.json");
const summaryPath = path.join(cwd, "data", "collection_summary_complete.json");
const outputDir = path.join(cwd, "outputs", "google_scholar_citation_survey");
const outputPath = path.join(outputDir, "openvla_oft_google_scholar_citation_survey_complete.xlsx");

const rows = JSON.parse(await fs.readFile(dataPath, "utf8"));
const summary = JSON.parse(await fs.readFile(summaryPath, "utf8"));

function colName(index) {
  let n = index + 1;
  let name = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    name = String.fromCharCode(65 + rem) + name;
    n = Math.floor((n - 1) / 26);
  }
  return name;
}

function writeMatrix(sheet, startCell, matrix) {
  const match = /^([A-Z]+)(\d+)$/.exec(startCell);
  const startCol = match[1].charCodeAt(0) - 65;
  const startRow = Number(match[2]);
  const endCol = colName(startCol + matrix[0].length - 1);
  const endRow = startRow + matrix.length - 1;
  sheet.getRange(`${startCell}:${endCol}${endRow}`).values = matrix;
}

const workbook = Workbook.create();
const summarySheet = workbook.worksheets.add("Summary");
const papersSheet = workbook.worksheets.add("Citing papers");
const yearSheet = workbook.worksheets.add("By year desc");
const citationSheet = workbook.worksheets.add("By citations desc");
const logSheet = workbook.worksheets.add("Collection log");
const notesSheet = workbook.worksheets.add("Source notes");

writeMatrix(summarySheet, "A1", [
  ["Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success", ""],
  ["Target", summary.target_paper],
  ["Google Scholar cites id", summary.target_cites_id],
  ["Google Scholar count observed", summary.expected_google_scholar_count_seen_on_search_page],
  ["Rows collected", summary.deduped_rows],
  ["Missing vs observed count", summary.expected_google_scholar_count_seen_on_search_page - summary.deduped_rows],
  ["Collection status", summary.blocked ? `Partial: blocked at start=${summary.blocked.start}` : "Complete"],
  ["Block/error detail", summary.blocked ? summary.blocked.error : ""],
  ["Collected pages", summary.pages.length],
  ["Generated", new Date().toISOString()],
]);

const paperHeaders = [
  "Rank",
  "Scholar result id",
  "Title",
  "Authors/source",
  "Year",
  "Result URL",
  "PDF URL",
  "Snippet",
  "Cited-by count of citing paper",
  "Cited-by URL",
  "Versions count",
  "Versions URL",
  "Related URL",
  "Source page start",
  "Source page URL",
];

const paperMatrix = [
  paperHeaders,
  ...rows.map((row) => [
    Number(row.rank) || null,
    row.scholar_result_id || "",
    row.title || "",
    row.authors_source || "",
    row.year ? Number(row.year) : null,
    row.result_url || "",
    row.pdf_url || "",
    row.snippet || "",
    row.cited_by_count == null ? null : Number(row.cited_by_count),
    row.cited_by_url || "",
    row.versions_count == null ? null : Number(row.versions_count),
    row.versions_url || "",
    row.related_url || "",
    row.source_page_start == null ? null : Number(row.source_page_start),
    row.source_page_url || "",
  ]),
];
writeMatrix(papersSheet, "A1", paperMatrix);

const toPaperRow = (row) => [
  Number(row.rank) || null,
  row.scholar_result_id || "",
  row.title || "",
  row.authors_source || "",
  row.year ? Number(row.year) : null,
  row.result_url || "",
  row.pdf_url || "",
  row.snippet || "",
  row.cited_by_count == null ? null : Number(row.cited_by_count),
  row.cited_by_url || "",
  row.versions_count == null ? null : Number(row.versions_count),
  row.versions_url || "",
  row.related_url || "",
  row.source_page_start == null ? null : Number(row.source_page_start),
  row.source_page_url || "",
];

const byYear = [...rows].sort((a, b) => {
  const ay = a.year ? Number(a.year) : -Infinity;
  const by = b.year ? Number(b.year) : -Infinity;
  if (by !== ay) return by - ay;
  return Number(a.rank) - Number(b.rank);
});
writeMatrix(yearSheet, "A1", [paperHeaders, ...byYear.map(toPaperRow)]);

const byCitations = [...rows].sort((a, b) => {
  const ac = a.cited_by_count == null ? -Infinity : Number(a.cited_by_count);
  const bc = b.cited_by_count == null ? -Infinity : Number(b.cited_by_count);
  if (bc !== ac) return bc - ac;
  return Number(a.rank) - Number(b.rank);
});
writeMatrix(citationSheet, "A1", [paperHeaders, ...byCitations.map(toPaperRow)]);

const logMatrix = [
  ["Page start", "Result count", "URL"],
  ...summary.pages.map((page) => [page.start, page.count, page.url]),
];
writeMatrix(logSheet, "A1", logMatrix);
if (summary.blocked) {
  writeMatrix(logSheet, "E1", [
    ["Blocked at start", "Error"],
    [summary.blocked.start, summary.blocked.error],
  ]);
}

writeMatrix(notesSheet, "A1", [
  ["Source", "Status", "Notes"],
  [
    "Google Scholar",
    "Primary source, complete",
    "Search result showed 439 cited-by records; rows 1-260 were collected before direct-request CAPTCHA, rows 261-439 from the connected Chrome GUI session.",
  ],
  [
    "Semantic Scholar Graph API",
    "Unavailable in this run",
    "Unauthenticated API returned HTTP 429 Too Many Requests, so it was not used to fill missing Scholar records.",
  ],
  [
    "OpenAlex",
    "Checked, not comparable",
    "OpenAlex DOI work was found but reported cited_by_count=1 for this arXiv DOI snapshot.",
  ],
  [
    "OpenCitations",
    "Checked, not comparable",
    "OpenCitations returned one DOI citation for doi:10.48550/arXiv.2502.19645.",
  ],
  [
    "arXiv.gg",
    "Checked, not comparable",
    "arXiv.gg page for 2502.19645 listed 32 citing arXiv-cache records.",
  ],
]);

const summaryInspect = await workbook.inspect({
  kind: "table",
  range: "Summary!A1:B10",
  include: "values",
  tableMaxRows: 12,
  tableMaxCols: 4,
});
console.log(summaryInspect.ndjson);

const errorScan = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  summary: "final formula error scan",
});
console.log(errorScan.ndjson);

await workbook.render({ sheetName: "Summary", range: "A1:B10", scale: 2 });
await workbook.render({ sheetName: "Citing papers", range: "A1:H25", scale: 2 });
await workbook.render({ sheetName: "By year desc", range: "A1:H25", scale: 2 });
await workbook.render({ sheetName: "By citations desc", range: "A1:H25", scale: 2 });
await workbook.render({ sheetName: "Collection log", range: "A1:E30", scale: 2 });
await workbook.render({ sheetName: "Source notes", range: "A1:C8", scale: 2 });

await fs.mkdir(outputDir, { recursive: true });
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(outputPath);
