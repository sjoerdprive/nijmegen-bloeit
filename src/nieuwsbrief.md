---
layout: layouts/page.njk
title: Nieuwsbrief en veelgestelde vragen
permalink: /nieuwsbrief/
seoTitel: "Meedoen en nieuwsbrief | Nijmegen Bloeit"
description: "Doe mee met Nijmegen Bloeit in Nijmegen: schrijf je in voor de nieuwsbrief en lees antwoorden op vragen over meehelpen, lidmaatschap en donaties."
# Veelgestelde vragen. Voeg een vraag toe door een blok te kopiëren.
# "antwoord" mag Markdown bevatten. Met "id" kun je ernaar linken (/nieuwsbrief/#id).
# "toonContact: true" voegt de contacttekst uit site.js toe aan het antwoord.
faq:
  - vraag: Wat is het doel van Nijmegen Bloeit?
    antwoord: >-
      We willen bijdragen aan een aantrekkelijkere, schonere en levendigere Bloemerstraat en
      omgeving. We beginnen met het verwijderen van graffiti. Op termijn willen we ook werken aan
      verzorgde gevels, meer groen en een gevarieerd straatbeeld. Zie
      [plannen en projecten](/projecten/).
  - vraag: Wie organiseert het initiatief?
    antwoord: >-
      Op dit moment wordt het initiatief door één persoon getrokken. Het is een onafhankelijk
      buurtinitiatief: geen stichting of vereniging, en geen onderdeel van de gemeente. Lees meer
      [over het initiatief](/over/).
  - vraag: In welke straten zijn jullie actief?
    id: werkgebied
    antwoord: >-
      In eerste instantie richten we ons vooral op de Bloemerstraat in de binnenstad van Nijmegen
      en de straten die erop uitkomen: Plein 1944, Doddendaal, de Eerste Walstraat, de
      Smetiusstraat, Zeigelhof en Zes Huizenhof. Woon, werk of heb je een pand in een straat in de
      buurt die hier niet bij staat? Dan ben je net zo goed welkom. Naarmate het initiatief groeit,
      kan het gebied groter worden.
  - vraag: Hoe kan ik meehelpen?
    antwoord: >-
      Op dit moment kun je je inschrijven voor de nieuwsbrief. Daarin lees je hoe het initiatief
      zich ontwikkelt en wanneer er kanalen opengaan om actiever mee te doen. Je kunt ook nu al
      bijdragen aan de graffitiaanpak van Nijmegen Bloeit door graffiti in de buurt te melden bij
      de gemeente. Kijk daarvoor in de [wegwijzer](/wegwijzer/).
  - vraag: Kan ik lid worden? Moet ik contributie betalen?
    antwoord: >-
      Nee, nog niet. Er is op dit moment geen lidmaatschap en geen contributie. Als het initiatief
      groeit en er een formele organisatie komt, kan dat veranderen. We melden het via de
      nieuwsbrief als dat zo is.
  - vraag: Kan ik geld doneren?
    antwoord: >-
      Nee, op dit moment kun je niet doneren. Het initiatief neemt geen geld aan. Mocht dat in de
      toekomst veranderen, dan maken we duidelijk waarvoor het geld bedoeld is en hoe het wordt
      beheerd.
  - vraag: Ik heb een idee of voorstel. Waar kan ik dat kwijt?
    toonContact: true
  - vraag: Is dit een website van de gemeente?
    antwoord: >-
      Nee. Nijmegen Bloeit is een onafhankelijk buurtinitiatief. We verwijzen wel naar informatie
      van de gemeente Nijmegen, met een link naar de bron.
---
{% from "components/macros.njk" import nieuwsbriefCta, faqLijst %}

## Laat de Bloemerstraat bloeien

We willen samen werken aan een aantrekkelijkere, schonere en levendigere Bloemerstraat en
omgeving. We beginnen concreet, met het verwijderen van graffiti, en onderzoeken hoe we op
termijn ook gevels, groen en het straatbeeld kunnen verbeteren.

Schrijf je in voor de nieuwsbrief en blijf op de hoogte van plannen, projecten en
mogelijkheden om mee te doen.

{{ nieuwsbriefCta(site, titel="Inschrijven", tekst="Met de nieuwsbrief blijf je op de hoogte van Nijmegen Bloeit. Het is een nieuwsbrief om te ontvangen: je kunt er niet op reageren.") }}

### Zo werkt het inschrijven

- Je gaat naar de inschrijfpagina van **Zendlijst**, de externe dienst waarmee we de nieuwsbrief versturen.
- Je vult alleen je **e-mailadres** in.
- Je krijgt een e-mail met een link om je adres te **bevestigen**. Pas daarna sta je op de lijst.
- **Uitschrijven** kan altijd, via de afmeldlink in elke nieuwsbrief.
- Lees onze [privacyverklaring](/privacy/) en de [privacy-informatie van Zendlijst]({{ site.nieuwsbrief.privacyUrl }}).

## Wil je ook helpen organiseren?

Dat stellen we zeer op prijs. Het initiatief staat nog aan het begin en wordt momenteel door
één persoon getrokken. We willen eerst ontdekken hoeveel belangstelling er is. Naarmate het
initiatief groeit, creëren we meer mogelijkheden om mee te helpen, ideeën aan te dragen en
projecten te organiseren.

Op dit moment kun je je alleen inschrijven voor de nieuwsbrief. Later openen we kanalen om
actiever deel te nemen; dat kondigen we aan in de nieuwsbrief. Een formeel lidmaatschap of
contributie is er nog niet.

## Veelgestelde vragen

{{ faqLijst(faq, site) }}
