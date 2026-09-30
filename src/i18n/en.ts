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
    product: "Product",
    company: "For companies",
    pricing: "Pricing",
    login: "Log in",
    start: "Get started",
    switch: "SV",
    switchHref: "/",
  },
  hero: {
    eyebrow: "News as voice · for companies",
    title: "The whole company briefed. Before coffee.",
    lead:
      "Newstail is a personal morning broadcast for every employee – what matters in your industry, with your customers, and what you need everyone to hear. Told, not read. Five minutes.",
    cta: "Get started – 14 days free",
    listen: "Hear how it sounds",
    bubbles: [
      "Competitor opens warehouse in Malmö",
      "New EU AI rules from January 1",
      "Internal: Q3 numbers on Friday",
    ],
  },
  value: {
    rows: [
      {
        title: "Everyone knows what's going on.",
        text: "Every employee hears what moves your industry – not just the ones who find time to read.",
      },
      {
        title: "Your message lands. And you can see that it did.",
        text: "Publish internally in your own voice, see how many heard it and what stuck.",
      },
      {
        title: "Pay only for the people who listen.",
        text: "SEK 149 per active listener per month. Never more than a cap. No lock-in.",
      },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "Three steps. No IT project.",
    items: [
      {
        title: "You register the company",
        text: "With your email domain. Ten minutes, and the door is open to every colleague.",
      },
      {
        title: "Employees open the app",
        text: "And say what they want to follow. The host learns the rest from how they listen.",
      },
      {
        title: "Every morning: a broadcast of their own",
        text: "The industry, the customers, the internal. Done before the first meeting.",
      },
    ],
  },
  broadcast: {
    eyebrow: "The broadcast",
    title: "Told for you, specifically.",
    lead:
      "No two people hear the same broadcast. The host picks what touches your role and your topics, puts it in context and tells it like a colleague who's fully up to speed. Pull to start. Next whenever you like.",
    bubbles: ["Rate decision: what it means for construction", "Your biggest customer names new CEO", "Premier League: Arsenal take the derby"],
    captionTopic: "Industry",
    captionTitle: "Rate decision: what it means for construction",
  },
  inside: {
    eyebrow: "Inside",
    title: "Your voice in the broadcast.",
    lead:
      "Record a message in the app – to everyone or to one team – and it's heard in tomorrow's broadcast, right among the news. No new channel. No email nobody opens. And you see how many heard it.",
    bubble: "Internal: new price list from Monday",
    reach: "Heard by 34 of 41",
  },
  quiz: {
    eyebrow: "Recap · Quiz",
    title: "What's heard should stick.",
    lead:
      "After the broadcast, the day's items sit in the recap, with sources. The day after, a short quiz shows up on what you heard – three questions, in the host's voice. Not to check up on anyone. To remember.",
    recap: "Recap",
    quiz: "Quiz",
  },
  leaders: {
    eyebrow: "For the company",
    title: "See that it lands.",
    lead:
      "In admin you see what the organisation follows, how many listen, how far your internal messages reached and what was remembered. Aggregated – never who heard what, unless the employee chooses to share their own knowledge profile.",
    stats: [
      { value: "6 min", label: "listened per day" },
      { value: "34 of 41", label: "heard Inside" },
      { value: "78%", label: "remembered correctly" },
    ],
    statsNote: "Example from a demo organisation.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "You pay for the people who listen. Not for licences.",
    lead: "An active listener has heard at least three broadcasts in the month. Minimum ten listeners.",
    tiers: [
      { range: "1–25 active listeners", amount: "SEK 149", unit: "per listener per month" },
      { range: "26–100", amount: "SEK 119", unit: "per listener per month" },
      { range: "101 and up", amount: "SEK 89", unit: "per listener per month" },
    ],
    caps: {
      title: "Never more than",
      rows: [
        { size: "up to 100 employees", amount: "SEK 9,900/month" },
        { size: "up to 300", amount: "SEK 24,900/month" },
        { size: "up to 1,000", amount: "SEK 59,000/month" },
      ],
    },
    notes: [
      "Publishing is free. 14 days free for the whole company.",
      "No lock-in. Invoiced in arrears for last month's active listeners. Annual billing = ten months.",
    ],
    cta: "Get started – 14 days free",
  },
  trust: {
    eyebrow: "Trust",
    title: "Built for companies from day one.",
    items: [
      { title: "Data in the EU.", text: "None of your internal messages train any model." },
      { title: "The individual owns their data.", text: "Management sees patterns, never people." },
      { title: "You decide the sources.", text: "Trusted sources per market, your internal ones first." },
      { title: "Delete whenever you want.", text: "The account and everything with it is gone." },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "What people usually ask.",
    items: [
      {
        q: "What news do you hear?",
        a: "What moves your industry and market, your customers and competitors, plus whatever each employee chose to follow. Internal messages always come first.",
      },
      {
        q: "Which languages?",
        a: "Swedish, English, German and Spanish. The voice follows the language, so an English broadcast sounds English.",
      },
      {
        q: "How long is a broadcast?",
        a: "You choose, between three and ten minutes. Most people land around five.",
      },
      {
        q: "Does IT need to do anything?",
        a: "No. You register with your email domain, and colleagues on the same domain can join right away. No integration required.",
      },
      {
        q: "Can my manager see what I heard?",
        a: "No. The company sees aggregated patterns – what the organisation follows and how far internal messages reached. Your own knowledge profile is shared only if you choose to.",
      },
      {
        q: "Does it work in the car?",
        a: "Yes. The broadcast is controlled from the lock screen and your headphones like any podcast. CarPlay is on the way.",
      },
      {
        q: "Where's the app?",
        a: "iPhone today. Android and web are on the way. Admin runs in the browser.",
      },
    ],
  },
  closing: {
    title: "Start tomorrow morning.",
    lead: "14 days free for the whole company. No lock-in, no card.",
    cta: "Get started",
    alt: "or email us at hello@newstail.io",
  },
  footer: {
    line: "Newstail · Science Park Skövde",
    privacy: "Privacy",
    terms: "Terms",
    contact: "hello@newstail.io",
  },
};
