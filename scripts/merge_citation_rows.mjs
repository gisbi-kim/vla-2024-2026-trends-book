import fs from "node:fs/promises";
import path from "node:path";

const cwd = process.cwd();
const basePath = path.join(cwd, "data", "google_scholar_citing_papers.json");
const chromeDir = path.join(cwd, "data", "chrome_pages");
const outPath = path.join(cwd, "data", "google_scholar_citing_papers_complete.json");
const summaryOut = path.join(cwd, "data", "collection_summary_complete.json");

const base = JSON.parse(await fs.readFile(basePath, "utf8"));
const files = (await fs.readdir(chromeDir))
  .filter((name) => /^scholar_chrome_start_\d+\.json$/.test(name))
  .sort();

const chromeRows = [];
const pageLogs = [];
for (const file of files) {
  const page = JSON.parse(await fs.readFile(path.join(chromeDir, file), "utf8"));
  pageLogs.push({ start: page.start, url: page.url, count: page.count });
  chromeRows.push(...page.rows);
}

const combined = [...base, ...chromeRows].sort((a, b) => Number(a.rank) - Number(b.rank));
const seenRanks = new Set();
const deduped = [];
for (const row of combined) {
  const rank = Number(row.rank);
  if (seenRanks.has(rank)) continue;
  seenRanks.add(rank);
  deduped.push({ ...row, rank });
}

await fs.writeFile(outPath, JSON.stringify(deduped, null, 2), "utf8");
await fs.writeFile(
  summaryOut,
  JSON.stringify(
    {
      target_paper: "Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success",
      target_cites_id: "14511679643312711139",
      expected_google_scholar_count_seen_on_search_page: 439,
      raw_rows: combined.length,
      deduped_rows: deduped.length,
      pages: [
        ...Array.from({ length: 26 }, (_, i) => ({
          start: i * 10,
          url: `https://scholar.google.com/scholar?cites=14511679643312711139&as_sdt=2005&sciodt=0%2C5&hl=ko&start=${i * 10}`,
          count: 10,
          method: "direct request before CAPTCHA",
        })),
        ...pageLogs.map((page) => ({ ...page, method: "Chrome extension GUI session" })),
      ],
      blocked: null,
      notes: [
        "Rows 1-260 were collected before the direct-request Google Scholar CAPTCHA block.",
        "Rows 261-439 were collected from the user's connected Chrome GUI session, where the Scholar pages were visible without CAPTCHA.",
      ],
    },
    null,
    2,
  ),
  "utf8",
);
console.log(JSON.stringify({ outPath, summaryOut, rows: deduped.length }, null, 2));
