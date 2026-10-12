// Toegankelijkheidsscan van de gebouwde site (_site) met pa11y (axe + HTML_CodeSniffer, WCAG 2 AA).
// Gebruik: npm run build && npm run test:a11y
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import pa11y from "pa11y";

const ROOT = new URL("../_site/", import.meta.url).pathname;
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".svg": "image/svg+xml", ".xml": "application/xml", ".txt": "text/plain" };

const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
  let file = join(ROOT, path);
  try {
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
    res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    res.end(await readFile(join(ROOT, "404.html")));
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;

// Alle pagina's uit de sitemap, plus de pagina's die er bewust niet in staan.
const sitemap = await readFile(join(ROOT, "sitemap.xml"), "utf8");
const paths = [...sitemap.matchAll(/<loc>[^<]*?(\/[^<]*)<\/loc>/g)].map((m) => new URL(m[1], "http://x").pathname);
paths.push("/privacy/", "/404.html");

const viewports = [
  { width: 375, height: 800 },
  { width: 1280, height: 900 },
];

let totaal = 0;
try {
  for (const path of paths) {
    for (const viewport of viewports) {
      const result = await pa11y(base + path, {
        standard: "WCAG2AA",
        runners: ["axe", "htmlcs"],
        viewport,
        includeWarnings: false,
        chromeLaunchConfig: { args: ["--no-sandbox"] },
      });
      const issues = result.issues;
      totaal += issues.length;
      console.log(`${issues.length === 0 ? "OK  " : "FOUT"} ${path} (${viewport.width}px): ${issues.length} probleem/problemen`);
      for (const i of issues) console.log(`     - [${i.runner}] ${i.code}\n       ${i.message}\n       ${i.selector}`);
    }
  }
} finally {
  server.close();
}

console.log(`\nTotaal: ${totaal} probleem/problemen op ${paths.length} pagina's.`);
console.log("Let op: een automatische scan dekt maar een deel van WCAG. Test ook handmatig (zie README).");
process.exit(totaal === 0 ? 0 : 1);
