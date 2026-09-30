export type Copy = {
  lang: "sv" | "en";
  htmlLang: string;
  meta: { title: string; description: string };
  nav: {
    tech: string;
    trust: string;
    pricing: string;
    login: string;
    start: string;
    switch: string;
  };
  hero: {
    title: string;
    lead: string;
    cta: string;
    listen: string;
    listening: string;
    sampleNote: string;
    bubbles: string[];
  };
  value: { rows: { title: string; text: string }[] };
  language: {
    title: string;
    lead: string;
    /** Samma interna nyhet på värdens fyra språk – kretsar under klotet. */
    samples: { code: string; topic: string; title: string }[];
  };
  broadcast: {
    title: string;
    lead: string;
    points: { t: string; d: string }[];
    bubbles: string[];
    captionTopic: string;
    captionTitle: string;
  };
  inside: { title: string; lead: string; bubble: string; reach: string; flow: string[] };
  quiz: { title: string; lead: string; recap: string; quiz: string; share: string };
  leaders: {
    title: string;
    lead: string;
    stats: { value: string; label: string }[];
    statsNote: string;
  };
  pricing: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    tiers: { range: string; amount: string; unit: string }[];
    notes: string[];
    cta: string;
  };
  trust: { title: string; items: { title: string; text: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  closing: { title: string; lead: string; cta: string; priceLink: string };
  footer: { line: string; privacy: string; contact: string };
};

export const LOGIN_URL = "https://air.newstail.io/login";
export const START_URL = "https://air.newstail.io/start";
