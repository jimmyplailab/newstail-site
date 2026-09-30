/**
 * Undersidorna Tekniken och Trygghet (Joel 2026-09-30): det intressenten vill veta när
 * startsidan har gett greppet – ingen upprepning av startsidan, inget klot.
 * Källor: Newstail-Air-oversikt.pdf (uppdaterad till monologen), docs/TREDJEPARTER.md,
 * retention_sweep(), admin-RPC:ernas trösklar.
 */
export type TechPage = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  morning: { title: string; lead: string; steps: { t: string; d: string }[] };
  personal: { title: string; lead: string; items: { big: string; t: string; d: string }[] };
  ios: { title: string; lead: string; items: { icon: string; t: string; d: string }[] };
  stack: { title: string; lead: string; rows: { k: string; v: string }[] };
  cta: { title: string; lead: string };
};
export type TrustPage = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  sees: { title: string; lead: string; yes: string[]; no: string[]; yesLabel: string; noLabel: string };
  where: { title: string; lead: string; rows: { what: string; who: string; where: string }[]; cols: [string, string, string] };
  keep: { title: string; lead: string; rows: { t: string; days: number; label: string }[] };
  quiet: { title: string; items: { t: string; d: string }[] };
  cta: { title: string; lead: string };
};

export const tech: Record<"sv" | "en", TechPage> = {
  sv: {
    metaTitle: "Tekniken – Newstail. Enkelt framför, avancerat bakom.",
    metaDescription:
      "Så blir en morgonsändning till: research per företag, AI-redaktion, personligt urval och röst som skapas i realtid. Plus appen för iPhone och teknikvalen bakom.",
    title: "Enkelt framför. Avancerat bakom.",
    lead: "För medarbetaren är det ett klot och en röst. Bakom det bygger vi en egen sändning åt varje person, varje morgon.",
    morning: {
      title: "En morgon, steg för steg.",
      lead: "Det här händer för varje företag innan första lyssnaren vaknar – och för varje person när hen trycker igång.",
      steps: [
        { t: "Research", d: "Vi söker nyheter om er bransch, era kunder, konkurrenter och marknad – från betrodda källor per land – och om varje ämne som någon i företaget följer." },
        { t: "Redaktion", d: "En språkmodell väljer ut det som spelar roll för just er, skriver om det till berättelse och rensar bort dubbletter. Varje nyhet får källor, en kort rubrik och en egen färg." },
        { t: "Det interna", d: "Nya budskap från ledningen skrivs ut, förädlas med alla sakuppgifter kvar och läggs först i sändningen." },
        { t: "Ditt urval", d: "När du drar upp väljs din sändning: dina ämnen, det du redan hört, och den längd du valt." },
        { t: "Rösten", d: "Talet skapas i realtid, stycke för stycke, på ditt språk. Första ljudet kommer på ungefär tre sekunder." },
        { t: "Efteråt", d: "Recapen byggs, quizfrågorna skrivs och det du hörde, hoppade över eller svepte bort styr i morgon." },
      ],
    },
    personal: {
      title: "Personligt under huven.",
      lead: "Ingen hör exakt samma sändning. Så här lär sig värden vad som är ditt.",
      items: [
        { big: "5", t: "egna ämnen", d: "Väljs vid starten och när som helst i appen." },
        { big: "1", t: "morgon", d: "Ett nytt ämne finns med redan i nästa sändning." },
        { big: "3", t: "signaler", d: "Hört, hoppat över och bortsvept styr urvalet." },
        { big: "∞", t: "förslag", d: "Recapen föreslår nya ämnen utifrån det du hört." },
      ],
    },
    ios: {
      title: "En riktig app för iPhone.",
      lead: "Byggd för morgonen: i fickan, i bilen, i hörlurarna.",
      items: [
        { icon: "bell", t: "Notis vid din tid", d: "Med riktigt innehåll: ”4 nyheter åt dig, ca 6 min”." },
        { icon: "lock", t: "Låsskärmen", d: "Rubrik och värdens namn, play och paus." },
        { icon: "head", t: "Hörlurar", d: "Styr sändningen som en podd." },
        { icon: "wave", t: "Siri", d: "”Spela min sändning” startar direkt." },
        { icon: "grid", t: "Widget", d: "Dagens sändning på hemskärmen." },
        { icon: "car", t: "CarPlay", d: "På väg." },
      ],
    },
    stack: {
      title: "Teknikvalen.",
      lead: "För den tekniskt nyfikne.",
      rows: [
        { k: "App", v: "iOS med eget native-lager i Swift för låsskärm, Siri, widget och notiser. Webben i React." },
        { k: "Backend", v: "Postgres med behörighetsregler på varje rad, serverfunktioner och schemalagda jobb. Databasen i Stockholm." },
        { k: "Research", v: "Nyhetssök per företag och ämne, med betrodda källor per marknad." },
        { k: "Redaktion", v: "Claude (Anthropic) skriver underlaget, förädlar interna budskap och gör quizfrågorna." },
        { k: "Röst", v: "Gemini (Google), strömmad i realtid på fyra språk. Samma modell skriver ut inspelade budskap." },
        { k: "Notiser", v: "Egen integration mot Apple – inga tredjepartstjänster för push." },
      ],
    },
    cta: { title: "Hör hur det låter.", lead: "14 dagar gratis för hela företaget. Ingen bindning." },
  },
  en: {
    metaTitle: "Technology – Newstail. Simple in front, advanced behind.",
    metaDescription:
      "How a morning broadcast is made: research per company, AI editing, personal selection and a voice created in real time. Plus the iPhone app and the technology choices behind it.",
    title: "Simple in front. Advanced behind.",
    lead: "To the employee it's an orb and a voice. Behind it we build a broadcast for each person, every morning.",
    morning: {
      title: "One morning, step by step.",
      lead: "This happens for every company before the first listener wakes up – and for every person when they press play.",
      steps: [
        { t: "Research", d: "We search for news about your industry, customers, competitors and market – from trusted sources per country – and about every topic someone in the company follows." },
        { t: "Editing", d: "A language model picks what matters to you specifically, rewrites it as a story and removes duplicates. Every story gets sources, a short headline and its own colour." },
        { t: "The internal", d: "New messages from leadership are transcribed, refined with every fact intact and placed first in the broadcast." },
        { t: "Your selection", d: "When you pull up, your broadcast is chosen: your topics, what you've already heard, and the length you picked." },
        { t: "The voice", d: "Speech is created in real time, segment by segment, in your language. The first sound arrives in about three seconds." },
        { t: "Afterwards", d: "The recap is built, the quiz questions are written, and what you heard, skipped or swiped away shapes tomorrow." },
      ],
    },
    personal: {
      title: "Personal under the hood.",
      lead: "No two people hear exactly the same broadcast. This is how the host learns what's yours.",
      items: [
        { big: "5", t: "topics of your own", d: "Chosen at the start and any time in the app." },
        { big: "1", t: "morning", d: "A new topic is included in the very next broadcast." },
        { big: "3", t: "signals", d: "Heard, skipped and swiped away shape the selection." },
        { big: "∞", t: "suggestions", d: "The recap suggests new topics based on what you heard." },
      ],
    },
    ios: {
      title: "A real app for iPhone.",
      lead: "Built for the morning: in your pocket, in the car, in your headphones.",
      items: [
        { icon: "bell", t: "Notification at your time", d: "With real content: “4 stories for you, about 6 min”." },
        { icon: "lock", t: "Lock screen", d: "Headline and host name, play and pause." },
        { icon: "head", t: "Headphones", d: "Control the broadcast like a podcast." },
        { icon: "wave", t: "Siri", d: "“Play my broadcast” starts it right away." },
        { icon: "grid", t: "Widget", d: "Today's broadcast on your home screen." },
        { icon: "car", t: "CarPlay", d: "On the way." },
      ],
    },
    stack: {
      title: "The technology.",
      lead: "For the technically curious.",
      rows: [
        { k: "App", v: "iOS with its own native layer in Swift for lock screen, Siri, widget and notifications. The web in React." },
        { k: "Backend", v: "Postgres with access rules on every row, server functions and scheduled jobs. The database in Stockholm." },
        { k: "Research", v: "News search per company and topic, with trusted sources per market." },
        { k: "Editing", v: "Claude (Anthropic) writes the material, refines internal messages and writes the quiz questions." },
        { k: "Voice", v: "Gemini (Google), streamed in real time in four languages. The same model transcribes recorded messages." },
        { k: "Notifications", v: "Our own integration with Apple – no third-party push services." },
      ],
    },
    cta: { title: "Hear how it sounds.", lead: "14 days free for the whole company. No lock-in." },
  },
};

export const trust: Record<"sv" | "en", TrustPage> = {
  sv: {
    metaTitle: "Trygghet – Newstail. Integritet och data.",
    metaDescription:
      "Vad ledningen ser och inte ser, var data finns, hur länge den sparas och vilka tjänster som behandlar den. Newstail är byggt med medarbetarens integritet som utgångspunkt.",
    title: "Tryggt från början.",
    lead: "Newstail är byggt för företag, med medarbetarens integritet som utgångspunkt. Här är exakt vad som gäller.",
    sees: {
      title: "Vad ledningen ser.",
      lead: "Mönster i organisationen – aldrig vad en enskild person har hört.",
      yesLabel: "Ledningen ser",
      noLabel: "Ledningen ser aldrig",
      yes: [
        "Hur många som lyssnat, per dag och per team",
        "Hur många som hört varje internt budskap",
        "Andel rätt på quiz om det interna, från fem svar",
        "Ämnen som minst tre personer följer",
        "Pulsen, anonymt, från fem svar",
        "Om en medarbetare varit aktiv senaste 30 dagarna",
      ],
      no: [
        "Vad en enskild person har hört eller hoppat över",
        "En persons svar på quiz eller puls",
        "En persons egna ämnen",
        "Team med färre än tre personer",
        "Kunskapsprofilen – om inte medarbetaren själv delar den",
      ],
    },
    where: {
      title: "Var data finns.",
      lead: "Tjänsterna som behandlar data i Newstail, och vad de får. Ingen av dem använder innehållet för att träna modeller.",
      cols: ["Vad", "Tjänst", "Var"],
      rows: [
        { what: "Databas, inloggning, ljudfiler", who: "Supabase", where: "Stockholm, EU" },
        { what: "Rösten och utskrift av inspelade budskap", who: "Google Gemini", where: "Global, betald nivå" },
        { what: "Redaktion, interna budskap, quiz", who: "Anthropic Claude", where: "USA" },
        { what: "Nyhetssök – inga personuppgifter", who: "Perplexity", where: "USA" },
        { what: "Notiser", who: "Apple", where: "Global" },
        { what: "Inloggningsmejl", who: "Resend", where: "USA" },
      ],
    },
    keep: {
      title: "Hur länge vi sparar.",
      lead: "Allt har en fast livslängd och rensas automatiskt varje natt.",
      rows: [
        { t: "Bortsvepta nyheter", days: 30, label: "30 dagar" },
        { t: "Dagens urval per person", days: 60, label: "60 dagar" },
        { t: "Recaps", days: 90, label: "90 dagar" },
        { t: "Ljudet i interna budskap", days: 90, label: "90 dagar – texten finns kvar" },
        { t: "Nyhetsunderlag", days: 120, label: "120 dagar" },
        { t: "Lyssningshistorik", days: 396, label: "13 månader" },
      ],
    },
    quiet: {
      title: "Inget som lyssnar.",
      items: [
        { t: "Ingen mikrofon", d: "Appen spelar in bara när en admin själv talar in ett budskap." },
        { t: "Behörighet på varje rad", d: "Databasen släpper bara fram det du har rätt att se – även om någon försöker gå runt appen." },
        { t: "Radera när ni vill", d: "Tar en medarbetare bort sitt konto i appen försvinner allt som hör till personen." },
      ],
    },
    cta: { title: "Frågor om dataskydd?", lead: "Vi går gärna igenom det med er innan ni börjar." },
  },
  en: {
    metaTitle: "Trust – Newstail. Privacy and data.",
    metaDescription:
      "What management sees and doesn't, where data lives, how long it's kept and which services process it. Newstail is built with the employee's privacy as the starting point.",
    title: "Secure from the start.",
    lead: "Newstail is built for companies, with the employee's privacy as the starting point. Here's exactly how it works.",
    sees: {
      title: "What management sees.",
      lead: "Patterns in the organisation – never what an individual has heard.",
      yesLabel: "Management sees",
      noLabel: "Management never sees",
      yes: [
        "How many listened, per day and per team",
        "How many heard each internal message",
        "Share of correct quiz answers on internal news, from five answers",
        "Topics followed by at least three people",
        "The pulse, anonymously, from five answers",
        "Whether an employee has been active in the past 30 days",
      ],
      no: [
        "What an individual heard or skipped",
        "A person's quiz or pulse answers",
        "A person's own topics",
        "Teams with fewer than three people",
        "The knowledge profile – unless the employee shares it",
      ],
    },
    where: {
      title: "Where data lives.",
      lead: "The services that process data in Newstail, and what they get. None of them use the content to train models.",
      cols: ["What", "Service", "Where"],
      rows: [
        { what: "Database, sign-in, audio files", who: "Supabase", where: "Stockholm, EU" },
        { what: "The voice and transcription of recorded messages", who: "Google Gemini", where: "Global, paid tier" },
        { what: "Editing, internal messages, quiz", who: "Anthropic Claude", where: "USA" },
        { what: "News search – no personal data", who: "Perplexity", where: "USA" },
        { what: "Notifications", who: "Apple", where: "Global" },
        { what: "Sign-in email", who: "Resend", where: "USA" },
      ],
    },
    keep: {
      title: "How long we keep it.",
      lead: "Everything has a fixed lifetime and is cleaned up automatically every night.",
      rows: [
        { t: "Swiped-away stories", days: 30, label: "30 days" },
        { t: "Each person's daily selection", days: 60, label: "60 days" },
        { t: "Recaps", days: 90, label: "90 days" },
        { t: "Audio of internal messages", days: 90, label: "90 days – the text stays" },
        { t: "News material", days: 120, label: "120 days" },
        { t: "Listening history", days: 396, label: "13 months" },
      ],
    },
    quiet: {
      title: "Nothing listening.",
      items: [
        { t: "No microphone", d: "The app records only when an admin records a message themselves." },
        { t: "Access rules on every row", d: "The database only returns what you're allowed to see – even if someone tries to get around the app." },
        { t: "Delete whenever you want", d: "When an employee deletes their account in the app, everything belonging to them is gone." },
      ],
    },
    cta: { title: "Questions about data protection?", lead: "We're happy to go through it with you before you start." },
  },
};
