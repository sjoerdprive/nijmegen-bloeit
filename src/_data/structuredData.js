// Gestructureerde gegevens (JSON-LD) voor zoekmachines, alleen op de homepage.
// Wordt niet uitgevoerd in de browser; zoekmachines lezen het als gegevens.
import site from "./site.js";

export default {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.naam,
  slogan: site.slogan.replace(/\.$/, ""),
  description: site.omschrijving,
  url: site.url + "/",
  email: site.contact.email,
  areaServed: {
    "@type": "Place",
    name: "Bloemerstraat en omgeving, binnenstad Nijmegen",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bloemerstraat",
      addressLocality: "Nijmegen",
      addressCountry: "NL",
    },
  },
  sameAs: [site.nieuwsbrief.url],
};
