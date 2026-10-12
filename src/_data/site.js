// Algemene gegevens van de site. Pas hier naam, slogan en links aan.
//
// Publiek adres van de site. Bij een productiebuild op Netlify is dat altijd het eigen domein;
// bij voorbeeldversies (deploy previews) het tijdelijke Netlify-adres, en lokaal localhost.
// Met de omgevingsvariabele SITE_URL kun je het adres zelf vastzetten.
export default {
  naam: "Nijmegen Bloeit",
  slogan: "Laat de Bloemerstraat bloeien.",
  omschrijving:
    "Nijmegen Bloeit is een onafhankelijk buurtinitiatief in Nijmegen voor een aantrekkelijkere, schonere en levendigere Bloemerstraat en omgeving.",
  domein: "https://nijmegenbloeit.online",
  get url() {
    if (process.env.SITE_URL) return process.env.SITE_URL;
    if (process.env.CONTEXT === "production") return this.domein;
    return process.env.DEPLOY_PRIME_URL || "http://localhost:8080";
  },

  // De nieuwsbrieflijst bij Zendlijst heeft nog de oude naam in het webadres.
  nieuwsbrief: {
    url: "https://bloemerstraat-en-omstreken.zendlijst.nl/",
    privacyUrl: "https://bloemerstraat-en-omstreken.zendlijst.nl/privacy",
    knoptekst: "Inschrijven voor de nieuwsbrief",
  },

  // NOG IN TE VULLEN. Leeg laten zolang er geen gegevens zijn:
  // de site toont dan een nette tekst in plaats van een verzonnen adres.
  contact: {
    email: "",
  },

  // Toon een placeholder op plekken waar nog een foto moet komen.
  // Zet op false om lege fotoplekken te verbergen.
  fotoPlaceholders: true,

  navigatie: [
    { titel: "Projecten", url: "/projecten/" },
    { titel: "Wegwijzer", url: "/wegwijzer/" },
    { titel: "Over", url: "/over/" },
    { titel: "Nieuwsbrief", url: "/nieuwsbrief/" },
  ],
};
