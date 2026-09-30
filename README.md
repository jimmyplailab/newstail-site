# newstail-site

Hemsidan för Newstail (newstail.io). Astro + React-öar. Rymden (stjärnorna och glasklotet)
är samma kod som i appen: `src/space/`.

- `npm run dev` – lokalt · `npm run build` – statisk sajt i `dist/`
- Sidor: `/` (svenska), `/en/` (engelska). Copy i `src/i18n/`.
- Sektionernas klot-lägen: `data-space`, `data-hue`, ankare `[data-orb-anchor]` (se `src/space/Space.tsx`).
- Skärmbilder: `node scripts/shots.mjs http://localhost:4321/` (Playwright).
- Deploy: Vercel (ny.newstail.io tills bytet till newstail.io).
