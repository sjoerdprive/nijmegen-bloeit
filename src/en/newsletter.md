---
layout: layouts/page.njk
title: Newsletter and FAQ
permalink: /en/newsletter/
vertaling: /nieuwsbrief/
seoTitel: "Get involved and newsletter | Nijmegen bloeit"
description: "Get involved with Nijmegen bloeit in Nijmegen: sign up for the newsletter and read answers to questions about helping, membership and donations."
# Frequently asked questions. Add a question by copying a block; keep it in line with the Dutch page.
faq:
  - vraag: What is the goal of Nijmegen bloeit?
    antwoord: >-
      We want to contribute to a more attractive, cleaner and livelier Bloemerstraat and
      surrounding area. We are starting by removing graffiti. In time we also want to work on
      well-kept façades, more greenery and a varied streetscape. See
      [plans and projects](/en/projects/).
  - vraag: Who organises the initiative?
    antwoord: >-
      The initiative is currently run by one person. It is an independent neighbourhood
      initiative: not a foundation or association, and not part of the municipality. Read more
      [about the initiative](/en/about/).
  - vraag: Which streets do you focus on?
    id: area
    antwoord: >-
      At first we are mainly focusing on the Bloemerstraat in Nijmegen city centre and the
      streets that lead onto it: Plein 1944, Doddendaal, Eerste Walstraat, Smetiusstraat,
      Zeigelhof and Zes Huizenhof. Do you live, work or own property in a nearby street that is
      not listed? You are just as welcome. As the initiative grows, the area may get bigger.
  - vraag: Do I need to speak Dutch to take part?
    antwoord: >-
      No. You are welcome to email us in English at
      [info@nijmegenbloeit.online](mailto:info@nijmegenbloeit.online). Some information we link
      to, such as the municipality's pages and the sign-up page of our newsletter service, is
      in Dutch; your browser's translation function can help.
  - vraag: How can I help?
    antwoord: >-
      Email [info@nijmegenbloeit.online](mailto:info@nijmegenbloeit.online) if you would like to
      help. You can also sign up for the newsletter to stay informed about plans and projects. And
      you can already contribute to the Nijmegen bloeit graffiti approach by reporting graffiti
      in the neighbourhood to the municipality. See the [neighbourhood guide](/en/neighbourhood-guide/).
  - vraag: Can I become a member? Is there a membership fee?
    antwoord: >-
      Not yet. There is currently no membership and no fee. If the initiative grows and a formal
      organisation is set up, that may change. We will announce it in the newsletter.
  - vraag: Can I donate money?
    antwoord: >-
      No, it is not possible to donate at the moment. The initiative does not accept money. If
      that changes in the future, we will make clear what the money is for and how it is managed.
  - vraag: I have an idea or proposal. Where can I send it?
    toonContact: true
  - vraag: Is this a website of the municipality?
    antwoord: >-
      No. Nijmegen bloeit is an independent neighbourhood initiative. We do refer to information
      from the Municipality of Nijmegen, with a link to the source.
---
{% from "components/macros.njk" import nieuwsbriefCta, faqLijst with context %}

## Let the Bloemerstraat bloom

We want to work together on a more attractive, cleaner and livelier Bloemerstraat and
surrounding area. We are starting with something concrete, removing graffiti, and exploring how
we can also improve façades, greenery and the streetscape over time.

Sign up for the newsletter to stay up to date on plans, projects and ways to get involved.

{{ nieuwsbriefCta("Sign up", "The newsletter keeps you up to date on Nijmegen bloeit. Want to respond or help? Email info@nijmegenbloeit.online.") }}

<div class="qr">
  <img src="{{ site.nieuwsbrief.qrCode }}" alt="QR code linking to the newsletter sign-up page" width="160" height="160" loading="lazy">
  <p>On another device, or to pass it on: scan this QR code to go to the sign-up page.</p>
</div>

### How signing up works

- You go to the sign-up page of **Zendlijst**, the external service we use to send the newsletter. The page is in Dutch, with an option to switch to English.
- You only enter your **email address**.
- You receive an email with a link to **confirm** your address. Only then are you on the list.
- You can **unsubscribe** at any time, via the unsubscribe link in every newsletter.
- Read our [privacy statement](/en/privacy/) and the [privacy information from Zendlijst]({{ site.nieuwsbrief.privacyUrl }}) (in Dutch).

## Would you like to help organise?

We would really appreciate it. The initiative is just getting started and is currently run by
one person. First we want to find out how much interest there is. As the initiative grows, we
will create more ways to help, contribute ideas and organise projects.

Want to help organise, or have an idea? Email
[info@nijmegenbloeit.online](mailto:info@nijmegenbloeit.online). The newsletter is meant to
keep you informed. There is no formal membership or fee yet.

## Frequently asked questions

{{ faqLijst(faq) }}
