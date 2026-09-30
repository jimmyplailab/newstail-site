/**
 * Fördjupningssidorna: Produkten och För företag. Innehållet bygger på översikten
 * (Newstail-Air-oversikt.pdf) men uppdaterat till tjänsten som den är nu: monolog
 * utan mikrofon, Gemini-röst, fem egna ämnen, recap med delning, quiz, puls.
 */
export type Visual = "phone-home" | "phone-publish" | "admin" | "orb" | "flow" | "none";
export type DeepSection = {
  id: string;
  title: string;
  lead: string;
  points?: { t: string; d?: string }[];
  /** Tidslinje (bara visual: "flow"). */
  flow?: { t: string; d: string }[];
  visual: Visual;
  hue: number;
};
export type DeepPage = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  sections: DeepSection[];
  ctaTitle: string;
  ctaLead: string;
};

export const product: Record<"sv" | "en", DeepPage> = {
  sv: {
    metaTitle: "Produkten – Newstail. En nyhetsvärd för varje medarbetare.",
    metaDescription:
      "Så fungerar Newstail: en personlig morgonsändning berättad med naturlig röst, på det språk du väljer. Egna ämnen, recap med källor, quiz och en app byggd för iPhone.",
    title: "En nyhetsvärd för varje medarbetare.",
    lead: "Varje morgon sätter Newstail ihop en egen sändning åt varje person och berättar den med naturlig röst. Enkelt att använda. Mycket teknik bakom.",
    sections: [
      {
        id: "lyssna",
        title: "Dra upp. Lyssna.",
        lead: "Öppna appen, dra upp klotet och värden börjar berätta. Tre till tio minuter – du väljer själv.",
        points: [
          { t: "Pausa, nästa, tillbaka", d: "Med tummen, på låsskärmen eller i hörlurarna." },
          { t: "Rubriken följer rösten", d: "Du ser alltid vad som berättas just nu." },
          { t: "Det interna först", d: "Budskap från företaget går före allt annat." },
        ],
        visual: "phone-home",
        hue: 200,
      },
      {
        id: "personligt",
        title: "Personligt från första morgonen.",
        lead: "Du väljer upp till fem egna ämnen när du börjar – redan nästa sändning har dem med. Det du hör, hoppar över eller sveper bort lär sig värden av.",
        points: [
          { t: "Branschen och kunderna", d: "Från företagets profil, samma grund för alla." },
          { t: "Dina egna ämnen", d: "Från räntor till hockey." },
          { t: "Nya förslag", d: "Recapen föreslår ämnen att följa utifrån det du hört." },
        ],
        visual: "orb",
        hue: 150,
      },
      {
        id: "sprak",
        title: "Värdens språk – ditt val.",
        lead: "Svenska, engelska, tyska eller spanska. Allt underlag översätts, även de interna budskapen, och rösten följer språket. Alla får samma information, på det språk de förstår bäst.",
        visual: "orb",
        hue: 262,
      },
      {
        id: "recap",
        title: "Recap och quiz.",
        lead: "Efter sändningen ligger dagens punkter i recapen med källor att läsa vidare i. Dela en nyhet med en kollega med en länk. Ett kort quiz på det du hört gör att det fastnar.",
        points: [
          { t: "Källor per nyhet", d: "Direkt till originalartiklarna." },
          { t: "Dela med länk", d: "En nyhet, till vem du vill." },
          { t: "Quiz", d: "Tre frågor, värdens röst, din procent i profilen." },
        ],
        visual: "orb",
        hue: 300,
      },
      {
        id: "iphone",
        title: "Byggd för iPhone.",
        lead: "Newstail är en riktig app, inte en webbsida i ett skal. Den lever där du redan är på morgonen.",
        points: [
          { t: "Notis vid din tid", d: "Med riktigt innehåll: ”4 nyheter åt dig, ca 6 min”." },
          { t: "Låsskärm och hörlurar", d: "Styr sändningen som en podd." },
          { t: "Siri och widget", d: "”Spela min sändning” – eller ett tryck på hemskärmen." },
          { t: "I bakgrunden", d: "Ljudet fortsätter när du byter app. CarPlay är på väg." },
        ],
        visual: "phone-publish",
        hue: 230,
      },
      {
        id: "tekniken",
        title: "Bakom kulisserna.",
        lead: "För dig är det ett klot och en röst. Bakom det sker det här, varje morgon, för varje företag och varje person.",
        flow: [
          {
            t: "Research",
            d: "Innan första lyssnaren vaknar söker vi nyheter om er bransch, era kunder, konkurrenter och marknad – från betrodda källor per land.",
          },
          {
            t: "Redaktion",
            d: "En språkmodell väljer ut, skriver och sätter nyheterna i sammanhang för just ert företag, och rensar bort dubbletter.",
          },
          {
            t: "Ditt urval",
            d: "Dina ämnen, det du redan hört och den tid du har styr vad som hamnar i din sändning.",
          },
          {
            t: "Rösten",
            d: "Talet skapas i realtid, stycke för stycke, på ditt språk. Första ljudet kommer på ungefär tre sekunder.",
          },
        ],
        visual: "flow",
        hue: 200,
      },
    ],
    ctaTitle: "Hör själv i morgon bitti.",
    ctaLead: "14 dagar gratis för hela företaget. Ingen bindning.",
  },
  en: {
    metaTitle: "Product – Newstail. A news host for every employee.",
    metaDescription:
      "How Newstail works: a personal morning broadcast told in a natural voice, in the language you choose. Your own topics, a recap with sources, quizzes and an app built for iPhone.",
    title: "A news host for every employee.",
    lead: "Every morning Newstail puts together a broadcast for each person and tells it in a natural voice. Simple to use. A lot of technology behind it.",
    sections: [
      {
        id: "listen",
        title: "Pull up. Listen.",
        lead: "Open the app, pull up the orb and the host starts talking. Three to ten minutes – you choose.",
        points: [
          { t: "Pause, next, back", d: "With your thumb, on the lock screen or in your headphones." },
          { t: "The headline follows the voice", d: "You always see what's being told right now." },
          { t: "Internal first", d: "Messages from the company come before everything else." },
        ],
        visual: "phone-home",
        hue: 200,
      },
      {
        id: "personal",
        title: "Personal from the first morning.",
        lead: "Pick up to five topics of your own when you start – the very next broadcast includes them. What you hear, skip or swipe away, the host learns from.",
        points: [
          { t: "The industry and customers", d: "From the company profile, the same base for everyone." },
          { t: "Your own topics", d: "From interest rates to football." },
          { t: "New suggestions", d: "The recap suggests topics to follow based on what you heard." },
        ],
        visual: "orb",
        hue: 150,
      },
      {
        id: "language",
        title: "The host's language – your choice.",
        lead: "English, Swedish, German or Spanish. Everything is translated, internal messages included, and the voice follows the language. Everyone gets the same information, in the language they understand best.",
        visual: "orb",
        hue: 262,
      },
      {
        id: "recap",
        title: "Recap and quiz.",
        lead: "After the broadcast the day's items sit in the recap with sources to read on. Share a story with a colleague by link. A short quiz on what you heard makes it stick.",
        points: [
          { t: "Sources per story", d: "Straight to the original articles." },
          { t: "Share by link", d: "One story, to whoever you like." },
          { t: "Quiz", d: "Three questions, the host's voice, your score in your profile." },
        ],
        visual: "orb",
        hue: 300,
      },
      {
        id: "iphone",
        title: "Built for iPhone.",
        lead: "Newstail is a real app, not a web page in a wrapper. It lives where you already are in the morning.",
        points: [
          { t: "A notification at your time", d: "With real content: “4 stories for you, about 6 min”." },
          { t: "Lock screen and headphones", d: "Control the broadcast like a podcast." },
          { t: "Siri and widget", d: "“Play my broadcast” – or one tap on the home screen." },
          { t: "In the background", d: "Audio keeps playing when you switch apps. CarPlay is on the way." },
        ],
        visual: "phone-publish",
        hue: 230,
      },
      {
        id: "technology",
        title: "Behind the scenes.",
        lead: "To you it's an orb and a voice. Behind it, this happens every morning, for every company and every person.",
        flow: [
          {
            t: "Research",
            d: "Before the first listener wakes up we search for news about your industry, customers, competitors and market – from trusted sources per country.",
          },
          {
            t: "Editing",
            d: "A language model picks, writes and puts the news in context for your company specifically, and removes duplicates.",
          },
          {
            t: "Your selection",
            d: "Your topics, what you've already heard and the time you have decide what goes into your broadcast.",
          },
          {
            t: "The voice",
            d: "Speech is created in real time, segment by segment, in your language. The first sound arrives in about three seconds.",
          },
        ],
        visual: "flow",
        hue: 200,
      },
    ],
    ctaTitle: "Hear it yourself tomorrow morning.",
    ctaLead: "14 days free for the whole company. No lock-in.",
  },
};

export const companies: Record<"sv" | "en", DeepPage> = {
  sv: {
    metaTitle: "För företag – Newstail. Interninformation som faktiskt hörs.",
    metaDescription:
      "Publicera internt med text eller röst, låt värden berätta det i allas sändning på deras eget språk, och se hur många som hörde och vad som fastnade. Igång på tio minuter.",
    title: "Allt internt. Hört av alla.",
    lead: "Newstail ger ledningen en kanal som faktiskt lyssnas på – och ett sätt att se att budskapen når fram.",
    sections: [
      {
        id: "publicera",
        title: "Publicera på en minut.",
        lead: "Tala in eller skriv. Tjänsten skriver ut talet, förädlar texten till berättelse med alla sakuppgifter kvar, och du hör hur det låter innan det går ut.",
        points: [
          { t: "Till alla eller valda team" },
          { t: "På varje lyssnares språk" },
          { t: "Dra tillbaka när som helst" },
          { t: "Kollegorna kan tacka" },
        ],
        visual: "phone-publish",
        hue: 72,
      },
      {
        id: "nar-fram",
        title: "Se att det når fram.",
        lead: "Översikten visar hur många som lyssnat senaste veckan, dag för dag och team för team. Varje internt budskap får sitt eget kvitto: hört av 34 av 41.",
        points: [
          { t: "Hört av", d: "Per budskap, i hela företaget eller i teamet." },
          { t: "Mindes", d: "Hur många som svarade rätt på quizen om budskapet." },
          { t: "Per team", d: "Vilka team som är med, och vilka som behöver en knuff." },
        ],
        visual: "admin",
        hue: 262,
      },
      {
        id: "insikter",
        title: "Insikter utan övervakning.",
        lead: "Ni ser mönster i organisationen – aldrig vad en enskild person har hört. Siffrorna visas först när tillräckligt många ingår.",
        points: [
          { t: "Vad medarbetarna följer", d: "Ämnen som minst tre personer valt." },
          { t: "Puls", d: "En anonym fråga i veckan, svar 1–5, visas från fem svar." },
          { t: "Kunskapsprofil", d: "Delas bara om medarbetaren själv väljer det." },
        ],
        visual: "orb",
        hue: 200,
      },
      {
        id: "igang",
        title: "Igång på tio minuter.",
        lead: "Inget IT-projekt, ingen integration. Registrera företaget, godkänn profilen och bjud in – resten sköter sig självt.",
        flow: [
          { t: "Registrera", d: "Med er mejldomän. Kollegor med samma domän kan gå med direkt, eller med en företagskod." },
          { t: "Företagsprofilen", d: "Vi läser er webbplats och föreslår bransch, kunder, konkurrenter och ämnen. Ni justerar och godkänner." },
          { t: "Källorna", d: "Välj betrodda källor per marknad. Era interna budskap går alltid först." },
          { t: "Första sändningen", d: "Nästa morgon har varje medarbetare en egen sändning. 14 dagar gratis." },
        ],
        visual: "flow",
        hue: 150,
      },
      {
        id: "trygghet",
        title: "Tryggt från början.",
        lead: "Byggt för företag: individen äger sin data, och ledningen ser bara det som är till för ledningen.",
        points: [
          { t: "Databasen i Stockholm", d: "Inom EU." },
          { t: "Ingen träning på era data", d: "AI-leverantörerna använder inte innehållet för att träna modeller." },
          { t: "Ingen mikrofon som lyssnar", d: "Bara när en admin själv spelar in ett budskap." },
          { t: "Rensas automatiskt", d: "Allt har en fast livslängd. Radera kontot – allt försvinner." },
        ],
        visual: "none",
        hue: 230,
      },
    ],
    ctaTitle: "Prova med hela företaget.",
    ctaLead: "14 dagar gratis. Ingen bindning, inget IT-projekt.",
  },
  en: {
    metaTitle: "For companies – Newstail. Internal news that actually gets heard.",
    metaDescription:
      "Publish internally by text or voice, let the host tell it in everyone's broadcast in their own language, and see how many heard it and what stuck. Up and running in ten minutes.",
    title: "Everything internal. Heard by everyone.",
    lead: "Newstail gives leadership a channel people actually listen to – and a way to see that the message landed.",
    sections: [
      {
        id: "publish",
        title: "Publish in a minute.",
        lead: "Record or write. The service transcribes, refines the text into a story with every fact intact, and you hear how it sounds before it goes out.",
        points: [
          { t: "To everyone or selected teams" },
          { t: "In each listener's language" },
          { t: "Retract at any time" },
          { t: "Colleagues can say thanks" },
        ],
        visual: "phone-publish",
        hue: 72,
      },
      {
        id: "lands",
        title: "See that it lands.",
        lead: "The overview shows how many listened in the past week, day by day and team by team. Every internal message gets its own receipt: heard by 34 of 41.",
        points: [
          { t: "Heard by", d: "Per message, across the company or in the team." },
          { t: "Remembered", d: "How many answered the quiz about it correctly." },
          { t: "Per team", d: "Which teams are on board, and which need a nudge." },
        ],
        visual: "admin",
        hue: 262,
      },
      {
        id: "insights",
        title: "Insight without surveillance.",
        lead: "You see patterns in the organisation – never what an individual has heard. Numbers appear only when enough people are included.",
        points: [
          { t: "What people follow", d: "Topics chosen by at least three people." },
          { t: "Pulse", d: "One anonymous question a week, answered 1–5, shown from five answers." },
          { t: "Knowledge profile", d: "Shared only if the employee chooses to." },
        ],
        visual: "orb",
        hue: 200,
      },
      {
        id: "start",
        title: "Up and running in ten minutes.",
        lead: "No IT project, no integration. Register the company, approve the profile and invite – the rest takes care of itself.",
        flow: [
          { t: "Register", d: "With your email domain. Colleagues on the same domain can join right away, or with a company code." },
          { t: "Company profile", d: "We read your website and suggest industry, customers, competitors and topics. You adjust and approve." },
          { t: "Sources", d: "Pick trusted sources per market. Your internal messages always come first." },
          { t: "First broadcast", d: "The next morning every employee has a broadcast of their own. 14 days free." },
        ],
        visual: "flow",
        hue: 150,
      },
      {
        id: "trust",
        title: "Secure from the start.",
        lead: "Built for companies: the individual owns their data, and management sees only what's meant for management.",
        points: [
          { t: "Database in Stockholm", d: "Within the EU." },
          { t: "No training on your data", d: "The AI providers don't use the content to train models." },
          { t: "No microphone listening", d: "Only when an admin records a message themselves." },
          { t: "Cleaned up automatically", d: "Everything has a fixed lifetime. Delete the account – everything is gone." },
        ],
        visual: "none",
        hue: 230,
      },
    ],
    ctaTitle: "Try it with the whole company.",
    ctaLead: "14 days free. No lock-in, no IT project.",
  },
};
