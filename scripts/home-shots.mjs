// Skärmbilder av startsidans sektioner, dator + mobil:  node scripts/home-shots.mjs <prefix>
import { chromium } from "playwright";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
const tag = process.argv[2] || "h";
for (const [name, vp] of [["d", { width: 1440, height: 900 }], ["m", { width: 390, height: 664 }]]) {
  const p = await b.newPage({ viewport: vp });
  await p.goto("http://localhost:4321/", { waitUntil: "networkidle" });
  await p.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; });
  for (const id of ["hero", "sprak", "sandningen", "inside", "quiz", "ledare"]) {
    await p.evaluate((id) => (document.getElementById(id) || document.querySelector(".hero")).scrollIntoView(), id);
    await p.waitForTimeout(id === "quiz" ? 3200 : 2200);
    await p.screenshot({ path: `shots/${tag}-${name}-${id}.png` });
  }
  await p.close();
}
await b.close();
