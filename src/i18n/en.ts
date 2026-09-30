import type { Copy } from "./types";

export const en: Copy = {
  lang: "en",
  htmlLang: "en",
  meta: {
    title: "Newstail – News as voice, for companies. The whole company briefed, every morning.",
    description:
      "A personal morning broadcast for every employee: your industry, your customers and your own messages, told in five minutes. 14 days free.",
  },
  nav: {
    tech: "Technology",
    trust: "Trust",
    pricing: "Pricing",
    login: "Log in",
    start: "Get started",
    switch: "SV",
  },
  hero: {
    title: "A news host for every employee.",
    lead: "Every morning a broadcast of your own, told in a natural voice: the industry, the customers, the internal – and whatever you follow yourself. Five minutes, before coffee.",
    cta: "Get started – 14 days free",
    listen: "Hear it",
    listening: "Playing",
    sampleNote: "",
    bubbles: [
      "Competitor opens warehouse in Malmö",
      "Arsenal take the derby in extra time",
      "Internal: Q3 numbers on Friday",
    ],
  },
  value: {
    rows: [
      { title: "Everyone knows what's going on.", text: "Not just the ones who find time to read." },
      { title: "Internal news that lands.", text: "And you can see that it did." },
      { title: "In everyone's own language.", text: "No one left outside." },
    ],
  },
  language: {
    title: "Everyone included. In their own language.",
    lead: "Every employee picks the host's language. The same news and the same internal messages – in English, Swedish, German or Spanish. When everyone is equally up to date, the team gets stronger.",
    samples: [
      { code: "EN", topic: "Internal", title: "New office in Växjö from 1 November" },
      { code: "SV", topic: "Internt", title: "Nytt kontor i Växjö från 1 november" },
      { code: "DE", topic: "Intern", title: "Neues Büro in Växjö ab 1. November" },
      { code: "ES", topic: "Interno", title: "Nueva oficina en Växjö desde el 1 de noviembre" },
    ],
  },
  broadcast: {
    title: "Pull up. Listen.",
    lead: "Open the app, pull up the orb and the host starts talking. The outside world is picked by your role and what you follow – from the very first morning. The internal news, everyone hears.",
    points: [
      { t: "Three to ten minutes", d: "You choose the length." },
      { t: "Pause, next, back", d: "With your thumb, on the lock screen or in your headphones." },
      { t: "Up to five topics of your own", d: "From interest rates to football – from day one." },
    ],
    bubbles: ["Rate decision: what it means for construction", "Your biggest customer names new CEO", "Premier League: Arsenal take the derby"],
    captionTopic: "Industry",
    captionTitle: "Rate decision: what it means for construction",
  },
  inside: {
    title: "Internal news that actually lands.",
    lead: "Write or record the message in the app. The host then tells it in everyone's broadcast, in the language each person chose. No email nobody opens – and you see how many heard it.",
    bubble: "Internal: new price list from Monday",
    reach: "Heard by 34 of 41",
    flow: ["You record it", "AI refines and translates", "Everyone hears it"],
  },
  quiz: {
    title: "Go deeper. Remember more.",
    lead: "The recap collects the day's items with sources to read on and share with colleagues. A short quiz on what you heard makes it stick.",
    recap: "Recap",
    quiz: "Quiz",
    share: "Share",
  },
  leaders: {
    title: "See that it lands.",
    lead: "What the organisation follows, how many listen, how far your messages reached and what was remembered. Aggregated – never who heard what.",
    stats: [
      { value: "6 min", label: "listened per day" },
      { value: "34 of 41", label: "listened this week" },
      { value: "80%", label: "remembered correctly" },
    ],
    statsNote: "Figures from a demo company.",
  },
  pricing: {
    metaTitle: "Pricing – Newstail. Pay only for the people who listen.",
    metaDescription:
      "SEK 149 per active listener per month, less the more you are. People who don't listen cost nothing. 14 days free, no lock-in.",
    title: "Pay for the people who listen.",
    lead: "Active listener = at least three broadcasts a month. Minimum ten listeners. Publishing is free.",
    tiers: [
      { range: "1–25 active listeners", amount: "SEK 149", unit: "per listener per month" },
      { range: "26–100", amount: "SEK 119", unit: "per listener per month" },
      { range: "101 and up", amount: "SEK 89", unit: "per listener per month" },
    ],
    notes: [
      "14 days free for the whole company. No lock-in.",
      "Invoiced in arrears. Annual billing = ten months.",
    ],
    cta: "Get started – 14 days free",
  },
  trust: {
    title: "Built for companies from day one.",
    items: [
      { title: "Database in Stockholm.", text: "No AI is trained on your data." },
      { title: "The individual owns their data.", text: "Management sees patterns, never people." },
      { title: "You decide the sources.", text: "Trusted sources per market, your internal ones first." },
      { title: "Delete whenever you want.", text: "Everything is gone." },
    ],
  },
  faq: {
    title: "Common questions.",
    items: [
      {
        q: "What news do you hear?",
        a: "What moves your industry and market, your customers and competitors, plus whatever each employee chose to follow. Internal messages always come first.",
      },
      {
        q: "What counts as an active listener?",
        a: "Someone who has heard at least three broadcasts in the month. People who don't listen cost nothing.",
      },
      {
        q: "Does IT need to do anything?",
        a: "No. You register with your email domain, and colleagues on the same domain can join right away.",
      },
      {
        q: "Can my manager see what I heard?",
        a: "No. The company sees aggregated patterns. Your own knowledge profile is shared only if you choose to.",
      },
      { q: "Which languages?", a: "Swedish, English, German and Spanish. The voice follows the language." },
      {
        q: "Where's the app?",
        a: "iPhone today, Android and web are on the way. The broadcast is controlled from the lock screen and in the car like a podcast.",
      },
    ],
  },
  closing: {
    title: "Start tomorrow morning.",
    lead: "Register the company with your email domain and colleagues can join right away. No IT project, 14 days free.",
    cta: "Get started",
    priceLink: "See pricing",
  },
  footer: {
    line: "© Newstail",
    privacy: "Privacy",
    contact: "hello@newstail.io",
  },
};
