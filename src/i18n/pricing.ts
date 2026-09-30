/**
 * Prissidan i SaaS-struktur (Joel 2026-09-30): månad/år-växlare, EN plan, räknare,
 * vad som ingår, vanliga frågor. Priset är affärsmodellen 2026-09-30 (docs/affarsmodell.md):
 * graderad trappa 149/119/89 per aktiv lyssnare, golv 10, årsbetalning = tio månader,
 * inget tak.
 */
export const TIERS = [
  { upto: 25, price: 149 },
  { upto: 100, price: 119 },
  { upto: Infinity, price: 89 },
];
export const MIN_SEATS = 10;
/** Årsbetalning: tio månaders pris för tolv. */
export const YEAR_FACTOR = 10 / 12;

export type PricingCopy = {
  title: string;
  lead: string;
  monthly: string;
  yearly: string;
  yearlyBadge: string;
  perUnit: string;
  perUnitYear: string;
  /** En enda plan (Joel 2026-09-30): alla får allt, priset följer antalet lyssnare. */
  plan: {
    name: string;
    from: string;
    ladder: string[];
    cta: string;
    trial: string;
  };
  calc: {
    title: string;
    lead: string;
    label: string;
    perMonth: string;
    perYear: string;
    breakdown: string;
    floorNote: string;
    tierLabels: [string, string, string];
  };
  included: { title: string; items: string[] };
  vatNote: string;
  faq: { title: string; items: { q: string; a: string }[] };
  currency: (n: number) => string;
};

const sek = (n: number) => `${Math.round(n).toLocaleString("sv-SE")} kr`;
const sekEn = (n: number) => `SEK ${Math.round(n).toLocaleString("en-GB")}`;

export const pricing: Record<"sv" | "en", PricingCopy> = {
  sv: {
    title: "Betala för dem som lyssnar.",
    lead: "Ett pris per aktiv lyssnare, lägre ju fler ni blir. Den som inte lyssnar kostar inget.",
    monthly: "Månadsvis",
    yearly: "Årsvis",
    yearlyBadge: "2 månader gratis",
    perUnit: "per aktiv lyssnare och månad",
    perUnitYear: "per aktiv lyssnare och månad, betalt årsvis",
    plan: {
      name: "Newstail",
      from: "från",
      ladder: ["{p0} för de första 25", "{p1} för lyssnare 26–100", "{p2} från lyssnare 101"],
      cta: "Kom igång – 14 dagar gratis",
      trial: "Hela företaget gratis i 14 dagar. Inget kort, ingen bindning.",
    },
    calc: {
      title: "Räkna på ert företag.",
      lead: "Dra till så många ni tror lyssnar varje månad.",
      label: "Aktiva lyssnare",
      perMonth: "per månad",
      perYear: "per år",
      breakdown: "Så räknas det",
      floorNote: "Minst tio lyssnare debiteras.",
      tierLabels: ["1–25", "26–100", "101–"],
    },
    included: {
      title: "Allt ingår.",
      items: [
        "Obegränsat lyssnande",
        "En egen sändning för varje medarbetare",
        "Värd på svenska, engelska, tyska och spanska",
        "Publicera internt med text eller röst",
        "Team och publiceringsrätter",
        "Recap, quiz och puls",
        "Admin med insikter",
        "App för iPhone",
      ],
    },
    vatNote: "Priser exkl. moms.",
    faq: {
      title: "Frågor om priset.",
      items: [
        { q: "Vad räknas som aktiv lyssnare?", a: "Den som har lyssnat klart på minst tre sändningar under månaden. Den som lyssnar mindre kostar inget." },
        { q: "Hur fungerar trappan?", a: "Som skatt: de första 25 kostar 149 kr, de nästa 75 kostar 119 kr och resten 89 kr. Fler lyssnare höjer aldrig priset på de första." },
        { q: "Vad händer efter provperioden?", a: "Ni lägger in kort eller fakturauppgifter. Därefter betalar ni i efterskott för förra månadens aktiva lyssnare." },
        { q: "Hur fungerar årsbetalning?", a: "Ni betalar tio månader för tolv, i förskott, utifrån en uppskattad siffra som vi stämmer av." },
        { q: "Kan vi säga upp när vi vill?", a: "Ja. Det finns ingen bindningstid." },
        { q: "Vi är många, eller flera bolag?", a: "Samma pris och samma tjänst. Mejla hello@newstail.io så hjälper vi er i gång." },
        { q: "Behöver IT göra något?", a: "Nej. Ni registrerar er med er mejldomän, och kollegor med samma domän kan gå med direkt." },
      ],
    },
    currency: sek,
  },
  en: {
    title: "Pay for the people who listen.",
    lead: "One price per active listener, lower the more you are. People who don't listen cost nothing.",
    monthly: "Monthly",
    yearly: "Yearly",
    yearlyBadge: "2 months free",
    perUnit: "per active listener per month",
    perUnitYear: "per active listener per month, paid yearly",
    plan: {
      name: "Newstail",
      from: "from",
      ladder: ["{p0} for the first 25", "{p1} for listeners 26–100", "{p2} from listener 101"],
      cta: "Get started – 14 days free",
      trial: "The whole company free for 14 days. No card, no lock-in.",
    },
    calc: {
      title: "Run the numbers.",
      lead: "Drag to how many you think listen each month.",
      label: "Active listeners",
      perMonth: "per month",
      perYear: "per year",
      breakdown: "How it's calculated",
      floorNote: "A minimum of ten listeners is billed.",
      tierLabels: ["1–25", "26–100", "101+"],
    },
    included: {
      title: "Everything included.",
      items: [
        "Unlimited listening",
        "A broadcast of their own for every employee",
        "A host in English, Swedish, German and Spanish",
        "Publish internally by text or voice",
        "Teams and publishing rights",
        "Recap, quiz and pulse",
        "Admin with insights",
        "App for iPhone",
      ],
    },
    vatNote: "Prices excl. VAT.",
    faq: {
      title: "Pricing questions.",
      items: [
        { q: "What counts as an active listener?", a: "Someone who has finished at least three broadcasts in the month. People who listen less cost nothing." },
        { q: "How does the ladder work?", a: "Like tax brackets: the first 25 cost SEK 149, the next 75 cost SEK 119 and the rest SEK 89. More listeners never raise the price of the first ones." },
        { q: "What happens after the trial?", a: "You add a card or invoice details. After that you pay in arrears for last month's active listeners." },
        { q: "How does yearly billing work?", a: "You pay ten months for twelve, in advance, based on an estimated number that we reconcile." },
        { q: "Can we cancel whenever we want?", a: "Yes. There is no lock-in." },
        { q: "We're large, or several companies?", a: "Same price, same service. Email hello@newstail.io and we'll help you get started." },
        { q: "Does IT need to do anything?", a: "No. You register with your email domain, and colleagues on the same domain can join right away." },
      ],
    },
    currency: sekEn,
  },
};
