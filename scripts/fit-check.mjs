// Får varje snäppsektion plats på skärmen? node scripts/fit-check.mjs
import { chromium } from "playwright";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
for (const vp of [{ width: 390, height: 664 }, { width: 1440, height: 900 }]) {
  for (const path of ["/", "/tekniken/", "/trygghet/", "/pris/", "/en/", "/en/technology/", "/en/pricing/"]) {
    const p = await b.newPage({ viewport: vp });
    await p.goto("http://localhost:4321" + path, { waitUntil: "networkidle" });
    // Sista sektionen räknas ihop med sidfoten – de delar skärm.
    const r = await p.evaluate(() => {
      const secs = [...document.querySelectorAll("main > section")];
      const fh = document.querySelector("footer")?.getBoundingClientRect().height ?? 0;
      return secs.map((s, i) => [
        (s.id || s.className.split(" ")[0]) + (i === secs.length - 1 ? "+footer" : ""),
        Math.round(s.getBoundingClientRect().height + (i === secs.length - 1 ? fh : 0)),
      ]);
    });
    const over = r.filter(([, h]) => h > vp.height + 2);
    console.log(vp.width, path, over.length ? "FÖR HÖGA: " + JSON.stringify(over) : "ok", `(${r.length} sektioner)`);
    await p.close();
  }
}
await b.close();
