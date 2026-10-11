/**
 * Texturas minerais ilustrativas (agregados de fulget) geradas por código.
 * Quatro padrões repetíveis, definidos UMA vez no documento e reutilizados via <MediaFrame />.
 */
type Palette = { base: string; aggs: string[]; weights: number[] };

const PALETTES: Record<string, Palette> = {
  claro: {
    base: "#E2DED4",
    aggs: ["#F4F2ED", "#CFCAC0", "#BDB8AE", "#A8A39A", "#858B8E", "#D87542"],
    weights: [26, 26, 20, 14, 10, 0],
  },
  pedra: {
    base: "#6C7276",
    aggs: ["#858B8E", "#9CA1A4", "#5A6064", "#B9BDBF", "#3B4044", "#D87542"],
    weights: [28, 20, 22, 12, 14, 0],
  },
  grafite: {
    base: "#2B2F32",
    aggs: ["#292D30", "#3A3F43", "#4A5054", "#5D6469", "#858B8E", "#D87542"],
    weights: [22, 28, 24, 14, 8, 0],
  },
  quente: {
    base: "#D6CFC2",
    aggs: ["#C7BDAC", "#E8E3D8", "#B4A48F", "#9F8E79", "#D87542", "#858B8E"],
    weights: [24, 26, 20, 14, 3, 8],
  },
};

const TILE = 360;

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(r: () => number, weights: number[]) {
  const total = weights.reduce((a, b) => a + b, 0);
  let x = r() * total;
  for (let i = 0; i < weights.length; i++) {
    x -= weights[i];
    if (x <= 0) return i;
  }
  return 0;
}

function buildTile(name: string, seed: number) {
  const p = PALETTES[name];
  const r = rng(seed);
  const shapes: { pts: string; fill: string }[] = [];
  for (let i = 0; i < 340; i++) {
    const x = r() * TILE;
    const y = r() * TILE;
    const rad = 1.5 + Math.pow(r(), 2.4) * 6.5;
    const n = 5 + Math.floor(r() * 3);
    const rot = r() * Math.PI * 2;
    const fill = p.aggs[pick(r, p.weights)];
    const jit = Array.from({ length: n }, () => 0.65 + r() * 0.5);
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const cx = x + dx * TILE;
        const cy = y + dy * TILE;
        if (cx < -rad * 1.3 || cx > TILE + rad * 1.3 || cy < -rad * 1.3 || cy > TILE + rad * 1.3) continue;
        const pts = jit
          .map((j, k) => {
            const ang = rot + (k / n) * Math.PI * 2;
            return `${(cx + Math.cos(ang) * rad * j).toFixed(1)},${(cy + Math.sin(ang) * rad * j * 0.88).toFixed(1)}`;
          })
          .join(" ");
        shapes.push({ pts, fill });
      }
    }
  }
  return { base: p.base, shapes };
}

const SEEDS: Record<string, number> = { claro: 11, pedra: 23, grafite: 37, quente: 53 };

export function TextureDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        {Object.keys(PALETTES).map((name) => {
          const { base, shapes } = buildTile(name, SEEDS[name]);
          return (
            <pattern key={name} id={`tex-${name}`} width={TILE} height={TILE} patternUnits="userSpaceOnUse">
              <rect width={TILE} height={TILE} fill={base} />
              {shapes.map((s, i) => (
                <polygon key={i} points={s.pts} fill={s.fill} />
              ))}
            </pattern>
          );
        })}
      </defs>
    </svg>
  );
}
