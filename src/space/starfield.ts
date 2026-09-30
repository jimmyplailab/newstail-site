import type { Tone } from "./news-color";

const rgba = (c: number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

/**
 * Rymden bakom klotet (Joel 2026-09-23): stjärnor i tre djup på nästan svart, plus ett
 * fjärde lager stoft närmast (2026-09-29). Färgen i rummet bor här – några av stjärnorna
 * bär nyhetens ton, resten är vita med en aning blått.
 *
 * - Rörelse (Joel 2026-09-29: "rör sig ännu mer"): hela himlen färdas långsamt uppåt, som
 *   om man gled framåt genom rymden – nära stjärnor fortare än avlägsna, så djupet syns hela
 *   tiden även när telefonen ligger still. Ovanpå det parallaxen: lutning och drift (px från
 *   föräldern), nära mest.
 * - Stoftet: ett fåtal stora, mjuka och mycket svaga ljuskorn nära kameran. De rör sig
 *   fortast och gör att stjärnorna bakom läses som långt borta.
 * - Subtila (Joel 2026-09-24): svaga, långsamt andande, och de bryr sig INTE om rösten.
 *   Enda gången de lyser upp är när klotet anländer ur rymden (energy från gather).
 * - Reduced motion: inget andetag, ingen färd, ingen drift.
 *
 * Stjärnorna sås en gång per storlek, så mönstret är detsamma mellan bildrutor.
 */
type Star = {
  /** 0–1 av ytan (utanför kanten med marginal, så parallaxen aldrig lämnar hål). */
  u: number;
  v: number;
  /** 0 = längst bort, 1 = närmast (stoftet 1,6–2,4). */
  depth: number;
  size: number;
  /** Andetagets fas och takt. */
  phase: number;
  rate: number;
  /** Bär nyhetens ton (annars vit). */
  tinted: boolean;
  base: number;
};

const COUNT = 170;
const DUST = 14;
/** Färden i px/s för de närmaste stjärnorna; avlägsna tar en fjärdedel. */
const TRAVEL = 11;
/** Riktningen: uppåt och en aning åt vänster. */
const DIR = { x: -0.28, y: -0.96 };

export class Starfield {
  private stars: Star[] = [];
  private dust: Star[] = [];
  private W = 0;
  private H = 0;
  /** Hur långt himlen färdats (px vid djup 1) – integreras, så farten kan ändras mjukt. */
  private travel = 0;
  private lastT: number | null = null;

  constructor(private reduced: boolean) {}

  resize(W: number, H: number) {
    if (W === this.W && H === this.H) return;
    this.W = W;
    this.H = H;
    // Deterministiskt: samma himmel varje gång appen öppnas.
    let seed = 1234567;
    const rnd = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    this.stars = [];
    for (let i = 0; i < COUNT; i++) {
      const depth = Math.pow(rnd(), 1.6);
      this.stars.push({
        u: rnd(),
        v: rnd(),
        depth,
        size: 0.5 + depth * 1.1 + (rnd() < 0.04 ? 0.8 : 0),
        phase: rnd() * Math.PI * 2,
        rate: 0.15 + rnd() * 0.4,
        tinted: rnd() < 0.16,
        base: 0.16 + rnd() * 0.3,
      });
    }
    this.dust = [];
    for (let i = 0; i < DUST; i++) {
      this.dust.push({
        u: rnd(),
        v: rnd(),
        depth: 1.6 + rnd() * 0.8,
        size: 3 + rnd() * 5,
        phase: rnd() * Math.PI * 2,
        rate: 0.1 + rnd() * 0.2,
        tinted: rnd() < 0.35,
        base: 0.05 + rnd() * 0.07,
      });
    }
  }

  /**
   * @param offset parallaxförskjutning i px för de närmaste stjärnorna
   * @param energy 0–1: klotet passerar (gather) – stjärnorna lyser upp. Rösten skickas inte hit.
   * @param dim 0–1, hur mycket rummet ska vila (t.ex. under recapen)
   * @param flow 0–1+, färdens fart (lugnare under sändning så texten står still nog att läsa)
   */
  draw(
    ctx: CanvasRenderingContext2D,
    t: number,
    tone: Tone,
    offset: { x: number; y: number },
    energy: number,
    dim = 1,
    flow = 1,
  ) {
    const { W, H } = this;
    if (!W || !H) return;
    // Färden: integrera farten över tiden (ett hopp i t – appen i bakgrunden – räknas som högst 0,1 s).
    const dt = this.lastT == null ? 0 : Math.min(0.1, Math.max(0, t - this.lastT));
    this.lastT = t;
    if (!this.reduced) this.travel += dt * TRAVEL * flow;

    const margin = 40;
    const LW = W + margin * 2;
    const LH = H + margin * 2;
    const wrap = (v: number, L: number) => ((v % L) + L) % L;
    const place = (s: Star) => {
      // Avlägsna stjärnor färdas en fjärdedel så fort som de nära.
      const k = 0.25 + 0.75 * s.depth;
      return {
        x: -margin + wrap(s.u * LW + DIR.x * this.travel * k + offset.x * s.depth, LW),
        y: -margin + wrap(s.v * LH + DIR.y * this.travel * k + offset.y * s.depth, LH),
      };
    };

    for (const s of this.stars) {
      const { x: px, y: py } = place(s);
      if (px < -4 || px > W + 4 || py < -4 || py > H + 4) continue;
      // Långsamt andetag, aldrig blink.
      const twinkle = this.reduced ? 0.85 : 0.8 + 0.2 * Math.sin(t * s.rate + s.phase);
      // Klotet på väg in: de nära lyser upp mest – det är de det passerar.
      const lit = 1 + energy * (0.6 + 1.2 * s.depth);
      const a = Math.min(1, s.base * twinkle * (0.5 + 0.5 * s.depth) * lit) * dim;
      const r = s.size * (1 + energy * 0.4 * s.depth);
      if (s.tinted) {
        // Nyhetens ton: de nära bär kärnans ljus, de avlägsna det mörkare ljuset.
        ctx.fillStyle = rgba(s.depth > 0.5 ? tone.core : tone.light, a);
      } else {
        ctx.fillStyle = `rgba(226,232,246,${a})`;
      }
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fill();
      // De allra största får en knappt synlig gloria.
      if (s.size > 1.9 && a > 0.2) {
        const g = ctx.createRadialGradient(px, py, 0, px, py, r * 4);
        g.addColorStop(0, rgba(s.tinted ? tone.core : [200, 210, 255], 0.1 * a));
        g.addColorStop(1, rgba(s.tinted ? tone.core : [200, 210, 255], 0));
        ctx.fillStyle = g;
        ctx.fillRect(px - r * 4, py - r * 4, r * 8, r * 8);
      }
    }

    // Stoftet närmast: mjuka korn utan kant, knappt där – men de rör sig mest.
    if (this.reduced) return;
    for (const s of this.dust) {
      const { x: px, y: py } = place(s);
      const R = s.size * 3;
      if (px < -R || px > W + R || py < -R || py > H + R) continue;
      const breathe = 0.75 + 0.25 * Math.sin(t * s.rate + s.phase);
      const a = s.base * breathe * (1 + energy * 1.5) * dim;
      const c: [number, number, number] = s.tinted ? tone.light : [214, 222, 240];
      const g = ctx.createRadialGradient(px, py, 0, px, py, R);
      g.addColorStop(0, rgba(c, a));
      g.addColorStop(0.35, rgba(c, a * 0.45));
      g.addColorStop(1, rgba(c, 0));
      ctx.fillStyle = g;
      ctx.fillRect(px - R, py - R, R * 2, R * 2);
    }
  }
}
