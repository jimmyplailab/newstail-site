// Får varje snäppsektion plats på skärmen? node scripts/fit-check.mjs
import { chromium } from "playwright";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
for (const vp of [{ width: 390, height: 664 }, { width: 1440, height: 900 }]) {
  for (const path of ["/", "/tekniken/", "/trygghet/", "/pris/", "/en/", "/en/technology/"]) {
    const p = await b.newPage({ viewport: vp });
    await p.goto("http://localhost:4321" + path, { waitUntil: "networkidle" });
    const r = await p.evaluate(() =>
      [...document.querySelectorAll("main > section")].map((s) => [s.id || s.className.split(" ")[0], Math.round(s.getBoundingClientRect().height)]),
    );
    const over = r.filter(([, h]) => h > vp.height + 2);
    console.log(vp.width, path, over.length ? "FÖR HÖGA: " + JSON.stringify(over) : "ok", `(${r.length} sektioner)`);
    await p.close();
  }
}
await b.close();
