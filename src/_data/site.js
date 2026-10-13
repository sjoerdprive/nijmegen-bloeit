// Algemene gegevens van de site. Pas hier naam, slogan en links aan.
//
// Publiek adres van de site. Bij een productiebuild op Netlify is dat altijd het eigen domein;
// bij voorbeeldversies (deploy previews) het tijdelijke Netlify-adres, en lokaal localhost.
// Met de omgevingsvariabele SITE_URL kun je het adres zelf vastzetten.
export default {
  naam: "Nijmegen bloeit",
  slogan: "Laat de Bloemerstraat bloeien.",
  omschrijving:
    "Nijmegen bloeit is een onafhankelijk buurtinitiatief in Nijmegen voor een aantrekkelijkere, schonere en levendigere Bloemerstraat en omgeving.",
  domein: "https://nijmegenbloeit.online",
  get url() {
    if (process.env.SITE_URL) return process.env.SITE_URL;
    if (process.env.CONTEXT === "production") return this.domein;
    return process.env.DEPLOY_PRIME_URL || "http://localhost:8080";
  },

  nieuwsbrief: {
    url: "https://nijmegen-bloeit.zendlijst.nl/",
    privacyUrl: "https://nijmegen-bloeit.zendlijst.nl/privacy",
    qrCode: "/img/qr-nieuwsbrief.png",
    knoptekst: "Inschrijven voor de nieuwsbrief",
  },

  // Contactadres voor vragen, ideeën en aanmelden als helper.
  contact: {
    email: "info@nijmegenbloeit.online",
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
