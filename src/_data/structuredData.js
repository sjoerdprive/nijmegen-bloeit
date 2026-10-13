// Gestructureerde gegevens (JSON-LD) voor zoekmachines, alleen op de homepages (nl en en).
// Wordt niet uitgevoerd in de browser; zoekmachines lezen het als gegevens.
import site from "./site.js";
import i18n from "./i18n.js";

const organisatie = (lang) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.naam,
  slogan: i18n[lang].slogan.replace(/\.$/, ""),
  description: i18n[lang].omschrijving,
  url: site.url + i18n[lang].home,
  email: site.contact.email,
  areaServed: {
    "@type": "Place",
    name: lang === "en" ? "Bloemerstraat and surroundings, Nijmegen city centre" : "Bloemerstraat en omgeving, binnenstad Nijmegen",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bloemerstraat",
      addressLocality: "Nijmegen",
      addressCountry: "NL",
    },
  },
  sameAs: [site.nieuwsbrief.url],
});

export default { nl: organisatie("nl"), en: organisatie("en") };
