export type Copy = {
  lang: "sv" | "en";
  htmlLang: string;
  meta: { title: string; description: string };
  nav: {
    product: string;
    company: string;
    pricing: string;
    login: string;
    start: string;
    switch: string;
    switchHref: string;
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
  steps: { title: string; items: { title: string; text: string }[] };
  broadcast: {
    title: string;
    lead: string;
    bubbles: string[];
    captionTopic: string;
    captionTitle: string;
  };
  inside: { title: string; lead: string; bubble: string; reach: string };
  quiz: { title: string; lead: string; recap: string; quiz: string };
  leaders: {
    title: string;
    lead: string;
    stats: { value: string; label: string }[];
    statsNote: string;
  };
  pricing: {
    title: string;
    lead: string;
    tiers: { range: string; amount: string; unit: string }[];
    caps: { title: string; rows: { size: string; amount: string }[] };
    notes: string[];
    cta: string;
  };
  trust: { title: string; items: { title: string; text: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  closing: { title: string; lead: string; cta: string; alt: string };
  footer: { line: string; privacy: string; contact: string };
};

export const LOGIN_URL = "https://air.newstail.io/login";
export const START_URL = "https://air.newstail.io/start";
