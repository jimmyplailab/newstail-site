import { chromium } from "playwright";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
for (const [name, vp] of [["d", { width: 1440, height: 900 }], ["m", { width: 390, height: 664 }]]) {
  const p = await b.newPage({ viewport: vp });
  await p.goto("http://localhost:4321/", { waitUntil: "networkidle" });
  await p.evaluate(() => document.getElementById("sprak").scrollIntoView());
  await p.waitForTimeout(1800);
  await p.screenshot({ path: `shots/x-${name}-sprak.png` });
  await p.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; document.getElementById("sidfot").scrollIntoView(); });
  await p.waitForTimeout(900);
  await p.screenshot({ path: `shots/x-${name}-footer.png`, fullPage: false });
  // scrolla upp en sektion → kompakt header
  await p.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; window.scrollTo(0, document.getElementById("ledare").offsetTop); });
  await p.waitForTimeout(900);
  await p.screenshot({ path: `shots/x-${name}-navup.png` });
  await p.close();
}
await b.close();
