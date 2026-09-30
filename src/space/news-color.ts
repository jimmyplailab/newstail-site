/**
 * Nyheternas färger (Joel 2026-09-17).
 *
 * Varje nyhet får en färgton som passar innehållet (vald av språkmodellen i compose och
 * sparad som brief_items.hue). Ljushet och mättnad är FASTA och räknas i OKLCH – där är
 * "lika ljus" och "lika mättad" något ögat faktiskt ser som lika. Därför spretar färgerna
 * inte, och texten ovanpå läses likadant vilken ton det än blir.
 *
 * Mättade toner sedan 2026-09-17 (klotet med inre flöde): ljuset L 0.56 / C 0.21,
 * kärnan L 0.84 / C 0.11 (var L 0.76 / C 0.10 och L 0.93 / C 0.045).
 *
 * Vilan och värdens inledning har gryningsblått: samma konstanter, hue 262.
 */

export type RGB = [number, number, number];
export type Tone = { light: RGB; core: RGB };

/** Nyhetsljusets fasta ljushet och mättnad. Tunat mot svart (rymden, 2026-09-24). */
const LIGHT_L = 0.56;
const LIGHT_C = 0.21;
const CORE_L = 0.84;
const CORE_C = 0.11;

function oklchToRgb(L: number, C: number, hDeg: number): RGB {
  const h = (hDeg * Math.PI) / 180;
  // Minska mättnaden tills färgen ryms i sRGB – samma ljushet, aldrig klippta kanaler.
  for (let c = C; c >= 0; c -= 0.005) {
    const a = c * Math.cos(h);
    const b = c * Math.sin(h);
    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 1.291485548 * b;
    const l = l_ ** 3;
    const m = m_ ** 3;
    const s = s_ ** 3;
    const lin = [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
    ];
    if (lin.every((v) => v >= -0.0005 && v <= 1.0005)) {
      return lin.map((v) => {
        const x = Math.min(1, Math.max(0, v));
        const g = x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
        return Math.round(g * 255);
      }) as RGB;
    }
  }
  const g = Math.round(Math.pow(L, 1 / 2.2) * 255);
  return [g, g, g];
}

/** Gryningen – vila, inledning och avslut. */
export const DAWN: Tone = {
  light: oklchToRgb(LIGHT_L, LIGHT_C, 262),
  core: oklchToRgb(CORE_L, CORE_C, 262),
};

const cache = new Map<number, Tone>();
export function toneForHue(hue: number): Tone {
  const h = ((Math.round(hue) % 360) + 360) % 360;
  let tone = cache.get(h);
  if (!tone) {
    tone = { light: oklchToRgb(LIGHT_L, LIGHT_C, h), core: oklchToRgb(CORE_L, CORE_C, h) };
    cache.set(h, tone);
  }
  return tone;
}

/** Publicera: den egna rösten i natten – varmt guld, mot sändningens blå (Joel 2026-09-17). */
export const INSIDE: Tone = toneForHue(72);

/** Reservton när en punkt ännu saknar färg: stabil per rubrik. */
function fallbackHue(key: string): number {
  let x = 2166136261;
  for (let i = 0; i < key.length; i++) {
    x ^= key.charCodeAt(i);
    x = Math.imul(x, 16777619);
  }
  return (x >>> 0) % 360;
}

const DAWN_HUE = 262;
const hueGap = (a: number, b: number) => {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
};

/**
 * Tonerna för en sändnings punkter, i ordning. Två punkter i rad får aldrig nästan samma
 * ton – då syns inte bytet – och första punkten skiljer sig från gryningen.
 */
export function huesForItems(items: { id: string; title: string; hue?: number | null }[]) {
  const out = new Map<string, number>();
  let prev = DAWN_HUE;
  for (const item of items) {
    let h = item.hue ?? fallbackHue(item.title || item.id);
    const gap = hueGap(h, prev);
    if (gap < 40) {
      const dir = ((h - prev + 540) % 360) - 180 >= 0 ? 1 : -1;
      h = (h + dir * (40 - gap) + 360) % 360;
    }
    out.set(item.id, h);
    prev = h;
  }
  return out;
}
