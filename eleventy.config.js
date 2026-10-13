import { load as yamlLoad } from "js-yaml";
import markdownIt from "markdown-it";
import site from "./src/_data/site.js";

const md = markdownIt({ html: true, typographer: true });

// Datums altijd in het Nederlands, bijvoorbeeld "12 oktober 2026".
const dateFormat = new Intl.DateTimeFormat("nl-NL", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Amsterdam",
});

const toDate = (value) => (value instanceof Date ? value : new Date(value));

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yamlLoad(contents));

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  eleventyConfig.addFilter("datumNL", (value) => dateFormat.format(toDate(value)));
  eleventyConfig.addFilter("datumISO", (value) => toDate(value).toISOString().slice(0, 10));
  eleventyConfig.addFilter("md", (value) => md.render(String(value ?? "")));
  eleventyConfig.addFilter("mdInline", (value) => md.renderInline(String(value ?? "")));
  eleventyConfig.addFilter("metStatus", (projecten, status) =>
    projecten.filter((p) => p.data.status === status),
  );
  eleventyConfig.addFilter("absoluteUrl", (path, base) => new URL(path, base).href);

  // Externe links openen in een nieuw venster, met rel="nofollow noopener".
  // Uitzondering: links naar Zendlijst krijgen geen nofollow (daar geven we graag een backlink).
  // Een pijltje en een verborgen tekst vertellen bezoekers dat er een nieuw venster opent.
  const volgen = (href) => /^https?:\/\/([a-z0-9-]+\.)*zendlijst\.nl(\/|$)/i.test(href);
  eleventyConfig.addTransform("externeLinks", function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    return content.replace(
      /<a\s([^>]*?)href="(https?:\/\/[^"]+)"([^>]*)>([\s\S]*?)<\/a>/g,
      (match, voor, href, na, tekst) => {
        if (href.startsWith(site.domein) || /\btarget=/.test(voor + na)) return match;
        return (
          `<a ${voor}href="${href}"${na} target="_blank" rel="${volgen(href) ? "noopener" : "nofollow noopener"}">${tekst}` +
          `<span class="extern" aria-hidden="true">↗</span>` +
          `<span class="visually-hidden"> (opent in een nieuw venster)</span></a>`
        );
      },
    );
  });

  // Alle projecten, gesorteerd op het veld "volgorde".
  eleventyConfig.addCollection("projecten", (api) =>
    api
      .getFilteredByGlob("src/projecten/*.md")
      .sort((a, b) => (a.data.volgorde ?? 99) - (b.data.volgorde ?? 99)),
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
