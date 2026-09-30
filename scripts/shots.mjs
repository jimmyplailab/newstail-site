// Skärmbilder av sajten: desktop + mobil, varje sektion mitt i vyn. node scripts/shots.mjs [url] [utmapp]
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const url = process.argv[2] ?? "http://localhost:4321/";
const out = process.argv[3] ?? "shots";
mkdirSync(out, { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.CHROME ?? undefined,
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
});
const shots = async (name, viewport) => {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(2600);
  await page.screenshot({ path: `${out}/${name}-00-top.png` });
  const n = await page.evaluate(() => document.querySelectorAll("[data-space]").length);
  for (let i = 0; i < n; i++) {
    await page.evaluate((k) => {
      const el = document.querySelectorAll("[data-space]")[k];
      const a = el.querySelector("[data-orb-anchor]") ?? el;
      a.scrollIntoView({ block: "center", behavior: "instant" });
    }, i);
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${out}/${name}-${String(i + 1).padStart(2, "0")}.png` });
  }
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(name, "height", total, "errors", errors);
  await page.close();
};
await shots("desktop", { width: 1440, height: 900 });
await shots("mobile", { width: 390, height: 844 });
await browser.close();
