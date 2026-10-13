# Nijmegen bloeit

Website van het buurtinitiatief **Nijmegen bloeit** in Nijmegen. *Laat de Bloemerstraat bloeien.*

Het is een statische website, gebouwd met [Eleventy](https://www.11ty.dev/). Bezoekers krijgen alleen HTML en CSS te zien: geen JavaScript, geen cookies, geen tracking en geen externe lettertypen. De nieuwsbrief loopt via een gewone link naar [Zendlijst](https://nijmegen-bloeit.zendlijst.nl/).

---

## Snel aan de slag

Je hebt [Node.js](https://nodejs.org/) 20 of nieuwer nodig (aanbevolen: 22, zie `.nvmrc`).

```bash
npm install        # eenmalig: installeert de hulpmiddelen
npm run dev        # lokale voorbeeldsite op http://localhost:8080, ververst automatisch
npm run build      # bouwt de site in de map _site
npm test           # bouwt en test toegankelijkheid en links
```

`npm install` downloadt ook een testbrowser (Chromium) voor de toegankelijkheidstest. Dat duurt de eerste keer even.

---

## Teksten aanpassen

Je hoeft niet te programmeren om de inhoud bij te werken. Alle teksten staan in gewone tekstbestanden in de map `src/`.

| Wat | Bestand |
| --- | --- |
| Naam, slogan, nieuwsbrieflink, menu, contactadres | `src/_data/site.js` |
| Projectstatussen (Lopend, Idee, …) | `src/_data/statussen.yaml` |
| Wegwijzer: regelingen, meldroutes, tips | `src/_data/wegwijzer.yaml` |
| Projecten | `src/projecten/*.md` (één bestand per project) |
| Homepage | `src/index.njk` |
| Over het initiatief | `src/over.md` |
| Nieuwsbrief en veelgestelde vragen | `src/nieuwsbrief.md` (de vragen staan bovenaan in de lijst `faq:`) |
| Privacyverklaring | `src/privacy.md` |
| Toegankelijkheid | `src/toegankelijkheid.md` |
| Kleuren en opmaak | `src/css/style.css` (kleuren staan bovenaan als variabelen) |

De `.md`-bestanden gebruiken [Markdown](https://www.markdownguide.org/basic-syntax/): `**vet**`, `[linktekst](https://…)`, `## Kop`, enzovoort.

### Vindbaarheid (paginatitel en beschrijving)

Elke pagina heeft bovenaan twee velden voor zoekmachines:

```yaml
seoTitel: "Graffiti verwijderen in de Bloemerstraat, Nijmegen"   # titel in Google, max. ca. 60 tekens
description: "Korte samenvatting voor Google, max. ca. 155 tekens."
```

Zonder `seoTitel` wordt de paginatitel gebruikt, aangevuld met de naam van het initiatief. Noem waar het natuurlijk past "Bloemerstraat", "binnenstad" en "Nijmegen", en waar relevant de straten uit het werkgebied (zie de veelgestelde vragen). Schrijf voor mensen: het doel is gevonden worden, niet boven de gemeente uitkomen. Gegevens voor zoekmachines over het initiatief zelf staan in `src/_data/structuredData.js`. Na livegang kun je in [Google Search Console](https://search.google.com/search-console) (gratis, zonder tracking van bezoekers) zien op welke zoektermen de site verschijnt.

### De status van een project wijzigen

Open het projectbestand, bijvoorbeeld `src/projecten/gevelverbetering.md`, en pas bovenaan aan:

```yaml
status: in-voorbereiding   # lopend | in-voorbereiding | belangstelling | idee
bijgewerkt: 2026-11-01     # datum van de laatste inhoudelijke wijziging
```

De status verschijnt automatisch op de projectpagina, in het overzicht en op de homepage. Een project met status `lopend` wordt op de homepage uitgelicht.

### Een project toevoegen

Kopieer een bestaand bestand in `src/projecten/`, geef het een nieuwe naam (die wordt de URL, bijv. `opruimdag.md` → `/projecten/opruimdag/`) en vul de velden in:

```yaml
---
title: Titel van het project
volgorde: 5                  # plek in de overzichten
status: idee
bijgewerkt: 2026-11-01
description: "Korte omschrijving voor zoekmachines (max. ca. 155 tekens)."
samenvatting: Eén of twee zinnen voor de projectkaart.
doel: Wat willen we bereiken?
gedaan:
  - Wat er al is gebeurd.
volgende_stappen:
  - Eerste volgende stap.
meedoen:
  - Hoe mensen kunnen helpen.
bronnen:
  - titel: Naam van de bron
    url: https://…
    bron: Gemeente Nijmegen
---

Eventuele extra uitleg in Markdown.
```

### Een bron in de wegwijzer toevoegen of bijwerken

Voeg in `src/_data/wegwijzer.yaml` een blok toe onder `bronnen:` van de juiste groep. Neem bedragen en percentages **alleen** over als ze letterlijk bij de officiële bron staan, en zet `gecontroleerd:` op de datum waarop je de bron hebt bekeken.

### Foto's toevoegen

Op de homepage, de projectpagina's en de pagina "Over" staan fotoplekken. Zolang er geen foto is, toont de site een gestreepte placeholder met "Foto volgt" en een omschrijving van wat er zou passen.

1. Zet de foto in `src/img/`, bij voorkeur als WebP (ongeveer 1600 px breed, onder de 300 kB).
2. Vul bovenaan de pagina het blok `foto:` in:

```yaml
foto:
  src: /img/bloemerstraat-plein-1944.webp
  alt: De Bloemerstraat gezien vanaf Plein 1944, met winkels aan beide kanten
  breedte: 1600                                     # afmetingen van het bestand
  hoogte: 1067
  onderschrift: De Bloemerstraat, oktober 2026     # optioneel
  maker: Naam fotograaf                             # bronvermelding, altijd invullen
  bronUrl: https://…                                # waar de foto vandaan komt (optioneel bij eigen foto)
  licentie: eigen foto                              # of bijv. CC BY 4.0
  licentieUrl: https://…                            # optioneel
  beschrijving: de Bloemerstraat, bijvoorbeeld gezien vanaf Plein 1944   # alleen voor de placeholder
```

Vermeld altijd de bron: de site toont maker en licentie onder elke foto. Gebruik je een foto met een CC BY- of CC BY-SA-licentie, dan is die vermelding verplicht, net als het noemen van bewerkingen zoals een uitsnede (`bewerking:`). Beschrijf in `alt` wat er op de foto te zien is. Gebruik alleen eigen foto's of foto's waarvoor je toestemming hebt, en vraag toestemming aan mensen die herkenbaar in beeld zijn. Wil je lege fotoplekken liever verbergen, zet dan `fotoPlaceholders` in `src/_data/site.js` op `false`.

---

## Publiceren op Netlify

De instellingen staan in `netlify.toml` (build-opdracht, Node-versie en beveiligingsheaders).

1. Zet deze map in een Git-repository, bijvoorbeeld op GitHub.
2. Kies in Netlify **Add new site → Import an existing project** en selecteer de repository.
3. Netlify neemt de instellingen uit `netlify.toml` over. Klik op **Deploy**.

Daarna wordt de site bij elke wijziging in de repository automatisch opnieuw gebouwd en gepubliceerd.

**Domein: nijmegenbloeit.online.** Canonieke URL's, de sitemap, robots.txt en Open Graph-gegevens gebruiken bij een productiebuild op Netlify altijd `https://nijmegenbloeit.online` (instelling `domein` in `src/_data/site.js`). Voorbeeldversies (deploy previews) gebruiken hun tijdelijke Netlify-adres. Met de omgevingsvariabele `SITE_URL` kun je het adres zelf vastzetten.

Het domein koppelen:

1. Kies in Netlify bij de site **Domain management → Add a domain** en voer `nijmegenbloeit.online` in.
2. Stel bij de registrar van het domein de DNS in zoals Netlify aangeeft: gebruik de nameservers van Netlify, of maak de A-record en CNAME (`www`) aan die Netlify noemt.
3. Netlify regelt daarna automatisch een HTTPS-certificaat. Zet `nijmegenbloeit.online` (zonder www) als primair domein; `www.nijmegenbloeit.online` stuurt Netlify dan vanzelf door.

Zonder Netlify kun je ook `npm run build` draaien en de inhoud van `_site/` naar elke statische webhost uploaden.

---

## Testen

```bash
npm test               # alles: build + toegankelijkheid + links
npm run test:a11y      # pa11y (axe + HTML_CodeSniffer, WCAG 2 AA), alle pagina's op 375 en 1280 px
npm run test:links     # controleert alle interne en externe links in _site
```

Draai `npm run test:links` ook regelmatig los: zo zie je het snel als de gemeente een pagina verplaatst.

### Handmatige controle (bij grotere wijzigingen)

Een automatische scan vindt maar een deel van de toegankelijkheidsproblemen. Controleer daarom ook:

- **Toetsenbord**: druk op Tab vanaf het begin van de pagina. De eerste stop is "Direct naar de inhoud", daarna logo, menu en inhoud. Elke stop heeft een duidelijke blauwe focusrand.
- **Zoomen**: zoom tot 200% en 400%. Er mag geen horizontale scrollbalk verschijnen en er mag geen tekst wegvallen.
- **Mobiel**: bekijk de site op een smal scherm (375 px). Het menu blijft zichtbaar als een rij links.
- **Kleur**: statussen hebben altijd een tekstlabel en een vormpje, niet alleen een kleur.

### Resultaten van de controle (12 oktober 2026)

- **Automatische scan** (pa11y met axe en HTML_CodeSniffer, WCAG 2 AA): 0 problemen op alle 11 pagina's, op mobiele en desktopbreedte. Twee "nader controleren"-meldingen van axe (contrast van de statussymbolen en van links naast genummerde stappen) zijn opgelost door de symbolen als SVG te tekenen en standaard lijstnummering te gebruiken.
- **Contrast** (berekend): tekst 14,9:1; grijze tekst 7,3:1 (6,4:1 op groen vlak); links 7,2:1; knop 7,6:1; focusrand 7,9:1 tegen de achtergrond. Alles ruim boven de 4,5:1 (AA).
- **Toetsenbord**: de tabvolgorde is logisch en de focusrand (3 px) is overal zichtbaar. De skiplink zet de focus op de hoofdinhoud. Projectkaarten zijn in hun geheel klikbaar via één link (geen dubbele tabstops).
- **Responsief**: geen horizontale scroll bij 375, 820 en 1280 px.
- **Formulieren**: de site heeft geen eigen formulieren. Het inschrijfformulier staat bij Zendlijst en valt buiten deze controle.
- **Nog niet gedaan**: test met een echte schermlezer (VoiceOver of NVDA) en met 400% zoom op een echt apparaat.

---

## Toon en inhoud

- **Verbind gezamenlijke acties altijd aan het initiatief.** Of het nu gaat om graffiti melden, gevels of groen: presenteer het als iets wat je samen met Nijmegen bloeit doet.
- **De nieuwsbrief is alleen om te ontvangen.** Wie wil helpen, een idee heeft of vragen stelt, verwijs je naar info@nijmegenbloeit.online (`site.contact.email`), niet naar de nieuwsbrief.
- **Geen loftuitingen over de naoorlogse bebouwing.** De wederopbouw mag feitelijk genoemd worden (bijvoorbeeld bij de gevelsubsidie), maar beschrijf de architectuur niet als iets wat de straat karakter geeft.
- **Niet representatief.** Het initiatief spreekt niet namens alle bewoners of ondernemers; schrijf dus niet "namens de straat" of iets dergelijks.

## Technische keuzes

- **Eleventy 3, statisch.** Geen database, server, inlogsysteem of betaalfunctie. Goedkoop te hosten, veilig en snel.
- **Geen JavaScript voor bezoekers.** Ook het mobiele menu werkt zonder JavaScript: de vier menu-items blijven zichtbaar en lopen door naar een volgende regel als het scherm smal is. Dat is eenvoudiger en toegankelijker dan een uitklapmenu.
- **Geen externe resources.** Systeemlettertypen, geen embeds, geen analytics. De Content-Security-Policy in `netlify.toml` blokkeert scripts en inhoud van andere domeinen.
- **Geen cookies, dus geen cookiebanner.** Zendlijst gebruikt volgens zijn eigen privacy-informatie alleen functionele cookies op de eigen inschrijfpagina.
- **Nieuwsbrief via een gewone link** naar Zendlijst, niet als ingebed formulier. We slaan zelf geen e-mailadressen op.
- **Inhoud in datafiles** (`.yaml`, `.md`) en herbruikbare onderdelen (`src/_includes/components/macros.njk`: statuslabel, nieuwsbriefoproep, bronkaart, infoblok, projectkaart).
- **Foto's met bronvermelding.** Drie fotoplekken hebben een vrij te gebruiken foto van Wikimedia Commons, met maker, licentie en eventuele bewerking in het onderschrift. Stockfoto's zijn bewust weggelaten. De overige plekken tonen een placeholder, die voor schermlezers verborgen is.
- **Afhankelijkheden** zijn alleen nodig tijdens het bouwen en testen (`devDependencies`). `npm audit` meldt enkele denial-of-service-kwetsbaarheden in de testhulpmiddelen; die raken de gepubliceerde site niet.

---

## Nog in te vullen of te beslissen

- [ ] **Privacyverklaring** (`src/privacy.md`): naam van de verantwoordelijke, de bewaartermijn van e-mails, de naam van de e-mailprovider en de datum van vaststelling. Controleer de serverlogs van Netlify en of er een verwerkersovereenkomst met Zendlijst is. Zet daarna `noindex: false` en `sitemap: true` en verwijder het conceptblok bovenaan.
- [x] **Contactadres**: info@nijmegenbloeit.online (`src/_data/site.js` → `contact.email`).
- [ ] **Graffitiproject**: de naam van de gemeentelijke groep (alleen na bevestiging), concrete voortgang en manieren om mee te helpen. Werk ook `bijgewerkt:` bij.
- [ ] **Eigen foto's**: de graffitipagina (bij voorkeur een voor-en-na), de pagina over straatbeeld en winkelaanbod en de pagina "Over" hebben nog een placeholder. Eigen foto's van de Bloemerstraat kunnen ook de Wikimedia-foto's vervangen. Zet `fotoPlaceholders` op `false` als je live wilt gaan voordat alle foto's er zijn.
- [ ] **Open Graph-afbeelding** (deelafbeelding voor sociale media), bijvoorbeeld een foto van de straat van 1200×630 px. Voeg daarna `og:image` toe in `src/_includes/layouts/base.njk`.
- [ ] **Bestaande organisaties en initiatieven** voor de wegwijzer ("Samen iets organiseren"). Voeg ze pas toe nadat je ze hebt gecontroleerd.
- [ ] **Bedrag subsidie wijkactiviteiten**: de gemeentepagina noemt geen bedrag. Vul het eventueel aan vanuit de officiële regeling.
- [ ] **Zendlijst**: de nieuwsbrief staat op `nijmegen-bloeit.zendlijst.nl`. De QR-code in `src/img/qr-nieuwsbrief.png` verwijst daarheen. Controleer bij een nieuw adres zowel `src/_data/site.js` als de QR-code.
- [ ] **Periodieke controle**: loop de wegwijzer ongeveer elk halfjaar na en draai `npm run test:links`. Subsidieregelingen zijn vaak per jaar (bijvoorbeeld "2025" en "2026" in de namen van de regelingen).
