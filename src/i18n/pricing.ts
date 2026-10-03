/**
 * Prissidan (Joel 2026-09-30, rakt pris 2026-10-01): EN plan, räknare, vad som ingår, frågor.
 * Priset är affärsmodellen (docs/affarsmodell.md): rakt pris per användare, men bara de som
 * faktiskt lyssnar räknas (minst tre sändningar i månaden) –
 * 149 kr i Sverige, 14 € i övriga Europa, 15 $ i resten av världen – minst 10, betalt i
 * förskott den 1:a räknat på månaden innan. Ingen årsbetalning (Joel 2026-10-01).
 */
export const PRICES = { SEK: 149, EUR: 14, USD: 15 } as const;
export const MIN_SEATS = 10;

export type PricingCopy = {
  title: string;
  lead: string;
  perUnit: string;
  /** En enda plan (Joel 2026-09-30): alla får allt, priset följer antalet lyssnare. */
  plan: {
    name: string;
    /** Siffran i planen (sv: kronor, en: euro). */
    price: number;
    unitBefore: string;
    unitAfter: string;
    features: string[];
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
    rowLabel: string;
  };
  included: { title: string; items: string[] };
  vatNote: string;
  faq: { title: string; items: { q: string; a: string }[] };
  currency: (n: number) => string;
};

const sek = (n: number) => `${Math.round(n).toLocaleString("sv-SE")} kr`;
const eur = (n: number) => `€${Math.round(n).toLocaleString("en-GB")}`;

export const pricing: Record<"sv" | "en", PricingCopy> = {
  sv: {
    title: "149 kr per användare och månad.",
    lead: "Vi räknar bara de som faktiskt lyssnar. Den som inte lyssnar kostar inget.",
    perUnit: "per användare och månad",
    plan: {
      name: "Newstail",
      price: PRICES.SEK,
      unitBefore: "",
      unitAfter: "kr",
      features: [
        "Bara de som lyssnar räknas – minst tre sändningar i månaden",
        "Minst 10 användare",
        "Betalas i förskott den 1:a, räknat på månaden innan",
        "Ni ser beloppet innan det dras",
        "14 € i övriga Europa, 15 $ i resten av världen",
      ],
      cta: "Kom igång – 14 dagar gratis",
      trial: "Hela företaget gratis i 14 dagar. Inget kort, ingen bindning.",
    },
    calc: {
      title: "Räkna på ert företag.",
      lead: "Dra till så många ni tror lyssnar varje månad.",
      label: "Användare som lyssnar",
      perMonth: "per månad",
      perYear: "per år",
      breakdown: "Så räknas det",
      floorNote: "Minst tio användare debiteras.",
      rowLabel: "Användare",
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
        { q: "Betalar vi för alla anställda?", a: "Nej. Bara för dem som har lyssnat klart på minst tre sändningar under månaden. Alla andra kostar inget – samma princip som Slacks fair billing." },
        { q: "Vad händer efter provperioden?", a: "Ni lägger in kort. Resten av månaden dras direkt, i förskott, räknat på provperioden. Sedan dras varje månad den 1:a, räknat på hur många som lyssnade månaden innan. Beloppet syns i admin, och ni får ett mejl tre dagar innan." },
        { q: "Varför räknas det på månaden innan?", a: "Då vet ni exakt vad som dras innan det dras, och ni behöver aldrig vänta på en faktura i efterhand. Växer ni följer priset med månaden efter." },
        { q: "Vilken valuta?", a: "Kronor i Sverige, euro i övriga Europa (14 €) och dollar i resten av världen (15 $). Svenska företag betalar 25 % moms, EU-företag med momsnummer omvänd skattskyldighet." },
        { q: "Vad händer om vi slutar?", a: "Månaden ni redan betalat gäller till sista dagen. Sedan dras inget mer – ingen slutfaktura." },
        { q: "Kan vi säga upp när vi vill?", a: "Ja. Det finns ingen bindningstid." },
        { q: "Vi är många, eller flera bolag?", a: "Samma pris och samma tjänst. Mejla hello@newstail.io så hjälper vi er i gång." },
        { q: "Behöver IT göra något?", a: "Nej. Ni registrerar er med er mejldomän, och kollegor med samma domän kan gå med direkt." },
      ],
    },
    currency: sek,
  },
  en: {
    title: "€14 per user per month.",
    lead: "We only count the people who actually listen. Anyone who doesn't costs nothing.",
    perUnit: "per user per month",
    plan: {
      name: "Newstail",
      price: PRICES.EUR,
      unitBefore: "€",
      unitAfter: "",
      features: [
        "Only listeners count – at least three broadcasts a month",
        "Minimum 10 users",
        "Paid in advance on the 1st, based on the month before",
        "You see the amount before it is charged",
        "SEK 149 in Sweden, $15 outside Europe",
      ],
      cta: "Get started – 14 days free",
      trial: "The whole company free for 14 days. No card, no lock-in.",
    },
    calc: {
      title: "Run the numbers.",
      lead: "Drag to how many you think listen each month.",
      label: "Users who listen",
      perMonth: "per month",
      perYear: "per year",
      breakdown: "How it's calculated",
      floorNote: "A minimum of ten users is billed.",
      rowLabel: "Users",
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
        { q: "Do we pay for every employee?", a: "No. Only for those who finished at least three broadcasts in the month. Everyone else costs nothing – the same principle as Slack's fair billing." },
        { q: "What happens after the trial?", a: "You add a card. The rest of the month is charged right away, in advance, based on the trial. After that you're charged on the 1st of each month, based on how many listened the month before. The amount is shown in admin, and you get an email three days ahead." },
        { q: "Why is it based on the month before?", a: "So you know exactly what will be charged before it is, and never wait for an invoice afterwards. If you grow, the price follows the month after." },
        { q: "Which currency?", a: "Euro in Europe (€14), Swedish kronor in Sweden (SEK 149) and US dollars elsewhere ($15). EU companies with a VAT number are reverse charged." },
        { q: "What if we stop?", a: "The month you've paid for runs to its last day. Then nothing more is charged – no final invoice." },
        { q: "Can we cancel whenever we want?", a: "Yes. There is no lock-in." },
        { q: "We're large, or several companies?", a: "Same price, same service. Email hello@newstail.io and we'll help you get started." },
        { q: "Does IT need to do anything?", a: "No. You register with your email domain, and colleagues on the same domain can join right away." },
      ],
    },
    currency: eur,
  },
};
