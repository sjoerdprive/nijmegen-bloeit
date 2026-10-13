// Zoekt in de gebouwde site (_site) naar sporen van fouten in de inhoud of de data,
// zoals "[object Object]" (meestal een dubbele punt in een YAML-lijst zonder aanhalingstekens)
// of "undefined" (een ontbrekend veld). Gebruik: npm run build && npm run test:inhoud
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = new URL("../_site/", import.meta.url).pathname;
const PATRONEN = [/\[object Object\]/, />\s*undefined\s*</, /\sundefined[\s.,]/];

async function* htmlBestanden(map) {
  for (const item of await readdir(map, { withFileTypes: true })) {
    const pad = join(map, item.name);
    if (item.isDirectory()) yield* htmlBestanden(pad);
    else if (item.name.endsWith(".html")) yield pad;
  }
}

let fouten = 0;
for await (const bestand of htmlBestanden(ROOT)) {
  const html = await readFile(bestand, "utf8");
  for (const patroon of PATRONEN) {
    if (patroon.test(html)) {
      fouten++;
      console.log(`FOUT ${bestand.replace(ROOT, "/")}: ${patroon}`);
    }
  }
}
console.log(fouten ? `\n${fouten} probleem/problemen gevonden.` : "Inhoud OK: geen [object Object] of undefined gevonden.");
process.exit(fouten ? 1 : 0);
