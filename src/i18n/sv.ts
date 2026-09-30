import type { Copy } from "./types";

export const sv: Copy = {
  lang: "sv",
  htmlLang: "sv",
  meta: {
    title: "Newstail – Nyheter som röst för företag. Hela företaget påläst, varje morgon.",
    description:
      "En personlig morgonsändning för varje medarbetare: branschen, kunderna och era egna budskap, berättade på fem minuter. 14 dagar gratis.",
  },
  nav: {
    product: "Produkt",
    company: "För företag",
    pricing: "Pris",
    login: "Logga in",
    start: "Kom igång",
    switch: "EN",
    switchHref: "/en/",
  },
  hero: {
    eyebrow: "Nyheter som röst · för företag",
    title: "Hela företaget påläst. Innan kaffet.",
    lead:
      "Newstail är en personlig morgonsändning för varje medarbetare – det viktigaste från er bransch, era kunder och det ni själva vill nå ut med. Berättat, inte läst. Fem minuter.",
    cta: "Kom igång – 14 dagar gratis",
    listen: "Så låter det",
    bubbles: [
      "Konkurrenten öppnar lager i Jönköping",
      "Nya EU-regler för AI från 1 januari",
      "Internt: Q3-siffrorna på fredag",
    ],
  },
  value: {
    rows: [
      {
        title: "Alla vet vad som händer.",
        text: "Varje medarbetare hör det som rör er bransch – inte bara de som hinner läsa.",
      },
      {
        title: "Ert budskap når fram. Och ni ser att det gjorde det.",
        text: "Publicera internt med er egen röst, se hur många som hörde och vad som fastnade.",
      },
      {
        title: "Betala bara för dem som lyssnar.",
        text: "149 kr per aktiv lyssnare och månad. Aldrig mer än ett tak. Inget bindande.",
      },
    ],
  },
  steps: {
    eyebrow: "Så funkar det",
    title: "Tre steg. Inget IT-projekt.",
    items: [
      {
        title: "Ni registrerar företaget",
        text: "Med er mejldomän. Tio minuter, sedan är dörren öppen för alla kollegor.",
      },
      {
        title: "Medarbetarna öppnar appen",
        text: "Och säger vad de vill följa. Värden lär sig resten av hur de lyssnar.",
      },
      {
        title: "Varje morgon: en egen sändning",
        text: "Branschen, kunderna, det interna. Klart innan första mötet.",
      },
    ],
  },
  broadcast: {
    eyebrow: "Sändningen",
    title: "Berättat för just dig.",
    lead:
      "Ingen hör samma sändning. Värden väljer det som rör din roll och dina ämnen, sätter det i sammanhang och berättar det som en kollega med full koll. Dra för att starta. Nästa när du vill.",
    bubbles: ["Räntebeskedet: så slår det mot bygg", "Er största kund byter vd", "SHL: Hv71 tog derbyt"],
    captionTopic: "Bransch",
    captionTitle: "Räntebeskedet: så slår det mot byggsektorn",
  },
  inside: {
    eyebrow: "Inside",
    title: "Er röst i sändningen.",
    lead:
      "Tala in ett budskap i appen – till alla eller till ett team – så hörs det i morgondagens sändning, inbäddat bland nyheterna. Ingen ny kanal. Inget mejl som ingen öppnar. Och ni ser hur många som hörde.",
    bubble: "Internt: nya prislistan gäller från måndag",
    reach: "Hört av 34 av 41",
  },
  quiz: {
    eyebrow: "Recap · Quiz",
    title: "Det som hörs ska fastna.",
    lead:
      "Efter sändningen ligger dagens punkter i recapen, med källor. Dagen efter dyker ett kort quiz upp på det du hörde – tre frågor, värdens röst. Inte för att kontrollera. För att minnas.",
    recap: "Recap",
    quiz: "Quiz",
  },
  leaders: {
    eyebrow: "För företaget",
    title: "Se att det når fram.",
    lead:
      "I admin ser ni vad organisationen följer, hur många som lyssnar, hur långt era interna budskap nådde och vad som mindes. Aggregerat – aldrig vem som hörde vad, om inte medarbetaren själv väljer att dela sin kunskapsprofil.",
    stats: [
      { value: "6 min", label: "lyssnat per dag" },
      { value: "34 av 41", label: "hörde Inside" },
      { value: "78 %", label: "mindes rätt" },
    ],
    statsNote: "Exempel från en demo-organisation.",
  },
  pricing: {
    eyebrow: "Pris",
    title: "Ni betalar för dem som lyssnar. Inte för licenser.",
    lead: "En aktiv lyssnare har hört minst tre sändningar under månaden. Minst tio lyssnare.",
    tiers: [
      { range: "1–25 aktiva lyssnare", amount: "149 kr", unit: "per lyssnare och månad" },
      { range: "26–100", amount: "119 kr", unit: "per lyssnare och månad" },
      { range: "101 och uppåt", amount: "89 kr", unit: "per lyssnare och månad" },
    ],
    caps: {
      title: "Aldrig mer än",
      rows: [
        { size: "upp till 100 anställda", amount: "9 900 kr/mån" },
        { size: "upp till 300", amount: "24 900 kr/mån" },
        { size: "upp till 1 000", amount: "59 000 kr/mån" },
      ],
    },
    notes: [
      "Publicera är gratis. 14 dagar gratis för hela företaget.",
      "Ingen bindning. Faktura i efterskott för förra månadens aktiva. Årsbetalning = tio månaders pris.",
    ],
    cta: "Kom igång – 14 dagar gratis",
  },
  trust: {
    eyebrow: "Trygghet",
    title: "Byggt för företag från början.",
    items: [
      { title: "Data i EU.", text: "Inget av era interna budskap tränar någon modell." },
      { title: "Individen äger sin data.", text: "Ledningen ser mönster, aldrig personer." },
      { title: "Ni bestämmer källorna.", text: "Betrodda källor per marknad, era interna först." },
      { title: "Radera när ni vill.", text: "Kontot och allt som hör till försvinner." },
    ],
  },
  faq: {
    eyebrow: "Frågor",
    title: "Det folk brukar undra.",
    items: [
      {
        q: "Vilka nyheter hör man?",
        a: "Det som rör er bransch och marknad, era kunder och konkurrenter, plus det varje medarbetare själv valt att följa. Interna budskap går alltid först.",
      },
      {
        q: "Vilka språk?",
        a: "Svenska, engelska, tyska och spanska. Rösten följer språket, så en engelsk sändning låter engelsk.",
      },
      {
        q: "Hur lång är sändningen?",
        a: "Man väljer själv, mellan tre och tio minuter. De flesta landar runt fem.",
      },
      {
        q: "Behöver IT göra något?",
        a: "Nej. Ni registrerar er med er mejldomän, och kollegor med samma domän kan gå med direkt. Ingen integration krävs.",
      },
      {
        q: "Kan chefen se vad jag hört?",
        a: "Nej. Företaget ser aggregerade mönster – vad organisationen följer och hur långt interna budskap nådde. Din egen kunskapsprofil delar du bara om du själv väljer det.",
      },
      {
        q: "Fungerar det i bilen?",
        a: "Ja. Sändningen styrs från låsskärmen och hörlurarna som vilken podd som helst. CarPlay är på väg.",
      },
      {
        q: "Var finns appen?",
        a: "iPhone i dag. Android och webb är på väg. Admin körs i webbläsaren.",
      },
    ],
  },
  closing: {
    title: "Börja i morgon bitti.",
    lead: "14 dagar gratis för hela företaget. Ingen bindning, inget kort.",
    cta: "Kom igång",
    alt: "eller mejla oss på hello@newstail.io",
  },
  footer: {
    line: "Newstail · Science Park Skövde",
    privacy: "Integritet",
    terms: "Villkor",
    contact: "hello@newstail.io",
  },
};
