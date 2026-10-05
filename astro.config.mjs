import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://newstail.io",
  integrations: [react(), sitemap()],
  i18n: {
    defaultLocale: "sv",
    locales: ["sv", "en"],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: "auto" },
  devToolbar: { enabled: false },
});
