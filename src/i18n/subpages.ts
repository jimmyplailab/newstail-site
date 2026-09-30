/**
 * Undersidorna Tekniken och Trygghet. Kortade 2026-09-30 (Joel: "vi avslöjar för mycket om
 * tekniken och set-upen") – inga leverantörsnamn, inga lagringstider, ingen arkitektur.
 * Inget "varje morgon": sändningen är inte ett statiskt morgonbygge.
 */
export type TechPage = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  /** Rubriker som ploppar fram i heron, som i appens hemvy. Den sista är intern. */
  bubbles: string[];
  flow: { title: string; lead: string; steps: { t: string; d: string }[] };
  personal: { title: string; lead: string; items: { big: string; t: string; d: string }[] };
  ios: { title: string; lead: string; items: { icon: string; t: string; d: string }[] };
  cta: { title: string; lead: string };
};
export type TrustPage = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  sees: { title: string; lead: string; yes: string[]; no: string[]; yesLabel: string; noLabel: string };
  protect: { title: string; items: { t: string; d: string }[] };
  cta: { title: string; lead: string };
};

export const tech: Record<"sv" | "en", TechPage> = {
  sv: {
    metaTitle: "Tekniken – Newstail. Enkelt framför, avancerat bakom.",
    metaDescription:
      "Från nyhet till röst: bevakning, AI-redaktion, ett personligt urval och en röst som skapas medan du lyssnar. Plus appen för iPhone.",
    title: "Enkelt framför. Avancerat bakom.",
    lead: "För medarbetaren är det ett drag med tummen och en röst. Bakom det sätts en egen sändning ihop åt varje person.",
    bubbles: [
      "Konkurrenten öppnar lager i Jönköping",
      "Räntebeskedet: så slår det mot bygg",
      "HV71 tog derbyt efter förlängning",
      "Internt: nytt kontor i Växjö",
    ],
    flow: {
      title: "Från nyhet till röst.",
      lead: "Det här händer innan du hör något.",
      steps: [
        { t: "Bevakning", d: "Vi följer er bransch, era kunder och konkurrenter – och varje ämne någon i företaget valt." },
        { t: "Redaktion", d: "AI väljer det som spelar roll för just er och skriver om det till berättelse, med källor." },
        { t: "Ditt urval", d: "Dina ämnen, det du redan hört och den tid du har avgör vad du får." },
        { t: "Rösten", d: "Talet skapas medan du lyssnar, på ditt språk." },
      ],
    },
    personal: {
      title: "Personligt under huven.",
      lead: "Ingen hör exakt samma sändning. Så lär sig värden vad som är ditt.",
      items: [
        { big: "5", t: "egna ämnen", d: "Väljs när du börjar och när som helst i appen." },
        { big: "1", t: "dag", d: "Ett nytt ämne finns med redan i nästa sändning." },
        { big: "3", t: "signaler", d: "Hört, hoppat över och bortsvept styr urvalet." },
        { big: "∞", t: "förslag", d: "Recapen föreslår nya ämnen utifrån det du hört." },
      ],
    },
    ios: {
      title: "En riktig app för iPhone.",
      lead: "I fickan, i bilen, i hörlurarna.",
      items: [
        { icon: "bell", t: "Notis vid din tid", d: "Med riktigt innehåll: ”4 nyheter åt dig, ca 6 min”." },
        { icon: "lock", t: "Låsskärmen", d: "Rubrik och värdens namn, play och paus." },
        { icon: "head", t: "Hörlurar", d: "Styr sändningen som en podd." },
        { icon: "wave", t: "Siri", d: "”Spela min sändning” startar direkt." },
        { icon: "grid", t: "Widget", d: "Sändningen på hemskärmen." },
        { icon: "car", t: "CarPlay", d: "På väg." },
      ],
    },
    cta: { title: "Hör hur det låter.", lead: "14 dagar gratis för hela företaget. Ingen bindning." },
  },
  en: {
    metaTitle: "Technology – Newstail. Simple in front, advanced behind.",
    metaDescription:
      "From news to voice: monitoring, AI editing, a personal selection and a voice created while you listen. Plus the iPhone app.",
    title: "Simple in front. Advanced behind.",
    lead: "To the employee it's a swipe of the thumb and a voice. Behind it, a broadcast is put together for each person.",
    bubbles: [
      "Competitor opens warehouse in Malmö",
      "Rate decision: what it means for construction",
      "Arsenal take the derby in extra time",
      "Internal: new office in Växjö",
    ],
    flow: {
      title: "From news to voice.",
      lead: "This happens before you hear anything.",
      steps: [
        { t: "Monitoring", d: "We follow your industry, customers and competitors – and every topic someone in the company has chosen." },
        { t: "Editing", d: "AI picks what matters to you specifically and rewrites it as a story, with sources." },
        { t: "Your selection", d: "Your topics, what you've already heard and the time you have decide what you get." },
        { t: "The voice", d: "Speech is created while you listen, in your language." },
      ],
    },
    personal: {
      title: "Personal under the hood.",
      lead: "No two people hear exactly the same broadcast. This is how the host learns what's yours.",
      items: [
        { big: "5", t: "topics of your own", d: "Chosen when you start and any time in the app." },
        { big: "1", t: "day", d: "A new topic is included in the very next broadcast." },
        { big: "3", t: "signals", d: "Heard, skipped and swiped away shape the selection." },
        { big: "∞", t: "suggestions", d: "The recap suggests new topics based on what you heard." },
      ],
    },
    ios: {
      title: "A real app for iPhone.",
      lead: "In your pocket, in the car, in your headphones.",
      items: [
        { icon: "bell", t: "Notification at your time", d: "With real content: “4 stories for you, about 6 min”." },
        { icon: "lock", t: "Lock screen", d: "Headline and host name, play and pause." },
        { icon: "head", t: "Headphones", d: "Control the broadcast like a podcast." },
        { icon: "wave", t: "Siri", d: "“Play my broadcast” starts it right away." },
        { icon: "grid", t: "Widget", d: "The broadcast on your home screen." },
        { icon: "car", t: "CarPlay", d: "On the way." },
      ],
    },
    cta: { title: "Hear how it sounds.", lead: "14 days free for the whole company. No lock-in." },
  },
};

export const trust: Record<"sv" | "en", TrustPage> = {
  sv: {
    metaTitle: "Trygghet – Newstail. Integritet och data.",
    metaDescription:
      "Vad ledningen ser och inte ser, och hur Newstail skyddar medarbetarnas data. Byggt med individens integritet som utgångspunkt.",
    title: "Tryggt från början.",
    lead: "Byggt för företag, med medarbetarens integritet som utgångspunkt.",
    sees: {
      title: "Vad ledningen ser.",
      lead: "Mönster i organisationen – aldrig vad en enskild person har hört.",
      yesLabel: "Ledningen ser",
      noLabel: "Ledningen ser aldrig",
      yes: [
        "Hur många som lyssnat, per dag och per team",
        "Hur många som hört varje internt budskap",
        "Vad organisationen följer",
        "Anonym puls",
      ],
      no: ["Vad en enskild person hört", "En persons svar på quiz eller puls", "En persons egna ämnen"],
    },
    protect: {
      title: "Byggt för att skydda.",
      items: [
        { t: "Databasen i Sverige", d: "Era data lagras inom EU." },
        { t: "Ingen träning", d: "Ingen AI tränas på era data." },
        { t: "Ingen mikrofon som lyssnar", d: "Bara när en admin själv spelar in ett budskap." },
        { t: "Rensas automatiskt", d: "Allt har en fast livslängd. Tar en medarbetare bort sitt konto försvinner allt." },
      ],
    },
    cta: { title: "Frågor om dataskydd?", lead: "Vi går gärna igenom det med er innan ni börjar." },
  },
  en: {
    metaTitle: "Trust – Newstail. Privacy and data.",
    metaDescription:
      "What management sees and doesn't, and how Newstail protects employee data. Built with the individual's privacy as the starting point.",
    title: "Secure from the start.",
    lead: "Built for companies, with the employee's privacy as the starting point.",
    sees: {
      title: "What management sees.",
      lead: "Patterns in the organisation – never what an individual has heard.",
      yesLabel: "Management sees",
      noLabel: "Management never sees",
      yes: [
        "How many listened, per day and per team",
        "How many heard each internal message",
        "What the organisation follows",
        "An anonymous pulse",
      ],
      no: ["What an individual heard", "A person's quiz or pulse answers", "A person's own topics"],
    },
    protect: {
      title: "Built to protect.",
      items: [
        { t: "Database in Sweden", d: "Your data is stored within the EU." },
        { t: "No training", d: "No AI is trained on your data." },
        { t: "No microphone listening", d: "Only when an admin records a message themselves." },
        { t: "Cleaned up automatically", d: "Everything has a fixed lifetime. When an employee deletes their account, everything is gone." },
      ],
    },
    cta: { title: "Questions about data protection?", lead: "We're happy to go through it with you before you start." },
  },
};
