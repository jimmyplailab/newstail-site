import type { Copy } from "./types";

export const sv: Copy = {
  lang: "sv",
  htmlLang: "sv",
  meta: {
    title: "Newstail – En nyhetsvärd för varje medarbetare.",
    description:
      "En personlig nyhetssändning för varje medarbetare: branschen, kunderna och era interna budskap, berättade med naturlig röst på det språk var och en väljer. 14 dagar gratis.",
  },
  nav: {
    tech: "Tekniken",
    trust: "Trygghet",
    pricing: "Pris",
    login: "Logga in",
    start: "Kom igång",
    switch: "EN",
  },
  hero: {
    title: "En nyhetsvärd för varje medarbetare.",
    lead: "En egen sändning åt varje person, berättad med naturlig röst: branschen, kunderna, det interna – och det man själv följer. Lyssna när det passar, på några minuter.",
    cta: "Kom igång – 14 dagar gratis",
    listen: "Så låter det",
    listening: "Spelar",
    sampleNote: "",
    bubbles: [
      "Konkurrenten öppnar lager i Jönköping",
      "HV71 tog derbyt efter förlängning",
      "Internt: Q3-siffrorna på fredag",
    ],
  },
  value: {
    rows: [
      { title: "Alla vet vad som händer.", text: "Inte bara de som hinner läsa." },
      { title: "Interninfo som når fram.", text: "Och ni ser att den gjorde det." },
      { title: "På var och ens språk.", text: "Ingen står utanför." },
    ],
  },
  language: {
    title: "Alla med. På sitt eget språk.",
    lead: "Varje medarbetare väljer värdens språk. Samma nyheter och samma interna budskap – på svenska, engelska, tyska eller spanska. När alla är lika uppdaterade blir teamet starkare.",
    samples: [
      { code: "SV", topic: "Internt", title: "Nytt kontor i Växjö från 1 november" },
      { code: "EN", topic: "Internal", title: "New office in Växjö from 1 November" },
      { code: "DE", topic: "Intern", title: "Neues Büro in Växjö ab 1. November" },
      { code: "ES", topic: "Interno", title: "Nueva oficina en Växjö desde el 1 de noviembre" },
    ],
  },
  broadcast: {
    title: "Dra upp. Lyssna.",
    lead: "Öppna appen, dra upp klotet och värden börjar berätta. Omvärlden väljs efter din roll och det du följer – från första dagen. Det interna hör alla.",
    points: [
      { t: "Tre till tio minuter", d: "Du väljer längden själv." },
      { t: "Pausa, nästa, tillbaka", d: "Med tummen, på låsskärmen eller i hörlurarna." },
      { t: "Upp till fem egna ämnen", d: "Från räntor till hockey – med från dag ett." },
    ],
    bubbles: ["Räntebeskedet: så slår det mot bygg", "Er största kund byter vd", "SHL: Hv71 tog derbyt"],
    captionTopic: "Bransch",
    captionTitle: "Räntebeskedet: så slår det mot byggsektorn",
  },
  inside: {
    title: "Interninfo som faktiskt når fram.",
    lead: "Skriv eller tala in budskapet i appen. Därefter berättar värden det i allas sändning, på det språk var och en valt. Inget mejl som ingen öppnar – och ni ser hur många som hörde.",
    bubble: "Internt: nya prislistan gäller från måndag",
    reach: "Hört av 34 av 41",
    flow: ["Du pratar in", "AI:n förädlar och översätter", "Alla hör det"],
    points: [
      { t: "Ni väljer vem som publicerar", d: "Admin, och de ni ger rätten i varje team." },
      { t: "Team för rätt mottagare", d: "Skapa team och rikta budskapet dit – eller till alla." },
    ],
  },
  quiz: {
    title: "Gå djupare. Minns mer.",
    lead: "Recapen samlar dagens punkter med källor att läsa vidare i och dela med kollegor. Ett kort quiz på det du hört gör att det fastnar.",
    recap: "Recap",
    quiz: "Quiz",
    share: "Dela",
  },
  leaders: {
    title: "Se att det når fram.",
    lead: "Vad organisationen följer, hur många som lyssnar, hur långt era budskap nådde och vad som mindes. Aggregerat – aldrig vem som hörde vad.",
    stats: [
      { value: "6 min", label: "lyssnat per dag" },
      { value: "34 av 41", label: "har lyssnat i veckan" },
      { value: "80 %", label: "mindes rätt" },
    ],
    statsNote: "Siffror från ett demoföretag.",
  },
  pricing: {
    metaTitle: "Pris – Newstail. Betala bara för dem som lyssnar.",
    metaDescription:
      "149 kr per aktiv lyssnare och månad, lägre ju fler ni blir. Den som inte lyssnar kostar inget. 14 dagar gratis, ingen bindning.",
    title: "Betala för dem som lyssnar.",
    lead: "Aktiv lyssnare = minst tre sändningar i månaden. Minst tio lyssnare. Publicera är gratis.",
    tiers: [
      { range: "1–25 aktiva lyssnare", amount: "149 kr", unit: "per lyssnare och månad" },
      { range: "26–100", amount: "119 kr", unit: "per lyssnare och månad" },
      { range: "101 och uppåt", amount: "89 kr", unit: "per lyssnare och månad" },
    ],
    notes: [
      "14 dagar gratis för hela företaget. Ingen bindning.",
      "Faktura i efterskott. Årsbetalning = tio månader.",
    ],
    cta: "Kom igång – 14 dagar gratis",
  },
  trust: {
    title: "Byggt för företag från början.",
    items: [
      { title: "Databasen i Stockholm.", text: "Ingen AI tränas på era data." },
      { title: "Individen äger sin data.", text: "Ledningen ser mönster, aldrig personer." },
      { title: "Ni bestämmer källorna.", text: "Betrodda källor per marknad, era interna först." },
      { title: "Radera när ni vill.", text: "Allt försvinner." },
    ],
  },
  faq: {
    title: "Vanliga frågor.",
    items: [
      {
        q: "Vilka nyheter hör man?",
        a: "Det som rör er bransch och marknad, era kunder och konkurrenter, plus det varje medarbetare själv valt att följa. Interna budskap går alltid först.",
      },
      {
        q: "Vad räknas som aktiv lyssnare?",
        a: "Den som har hört minst tre sändningar under månaden. Den som inte lyssnar kostar inget.",
      },
      {
        q: "Behöver IT göra något?",
        a: "Nej. Ni registrerar er med er mejldomän, och kollegor med samma domän kan gå med direkt.",
      },
      {
        q: "Kan chefen se vad jag hört?",
        a: "Nej. Företaget ser aggregerade mönster. Din egen kunskapsprofil delar du bara om du själv väljer det.",
      },
      {
        q: "Vilka språk?",
        a: "Svenska, engelska, tyska och spanska. Rösten följer språket.",
      },
      {
        q: "Var finns appen?",
        a: "iPhone i dag, Android och webb är på väg. Sändningen styrs från låsskärmen och i bilen som en podd.",
      },
    ],
  },
  closing: {
    title: "Kom igång i dag.",
    lead: "Registrera företaget med er mejldomän, så kan kollegorna gå med direkt. Inget IT-projekt, 14 dagar gratis.",
    cta: "Kom igång",
    priceLink: "Se priser",
  },
  footer: {
    line: "© Newstail",
    privacy: "Integritet",
    contact: "hello@newstail.io",
  },
};
