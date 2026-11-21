import { REGION_COLOR_MAP } from './stories.ts';
import type { Story } from './types.ts';

interface Point {
  readonly x: number;
  readonly y: number;
}

export interface MapAuditResult {
  readonly minCenterDistancePx: number;
  readonly outOfBoundsPins: readonly number[];
}

const MAP_W = 236;
const MAP_H = 140;
const PIN_RADIUS = 4.6;

export function projectGeo(lon: number, lat: number): Point {
  const latRad = (lat * Math.PI) / 180;
  const taper = Math.cos(latRad * 0.42);
  const x = 119 + (lon - 8) * taper * 0.635;
  const y = 14 + ((74 - lat) / 128) * 114;
  return { x: Number(x.toFixed(1)), y: Number(y.toFixed(1)) };
}

function polyPath(coords: readonly [number, number][]): string {
  return (
    coords
      .map(([lon, lat], idx) => {
        const pt = projectGeo(lon, lat);
        return `${idx === 0 ? 'M' : 'L'}${pt.x},${pt.y}`;
      })
      .join(' ') + ' Z'
  );
}

// Original stylized geographic continent polygons (lon, lat waypoints)
const LANDMASS_POLYGONS: readonly (readonly [number, number][])[] = [
  // North & Central America
  [
    [-166, 65], [-156, 71], [-134, 70], [-115, 72], [-94, 70], [-82, 63],
    [-64, 60], [-54, 48], [-66, 44], [-75, 36], [-81, 25], [-84, 30],
    [-90, 29], [-97, 26], [-96, 19], [-88, 21], [-83, 10], [-78, 8],
    [-86, 11], [-93, 15], [-105, 20], [-112, 31], [-117, 32], [-124, 42],
    [-125, 49], [-137, 58], [-152, 60], [-162, 56], [-166, 65],
  ],
  // Greenland
  [
    [-54, 60], [-42, 60], [-20, 70], [-18, 80], [-48, 82], [-66, 76], [-54, 60],
  ],
  // Cuba / Caribbean
  [[-85, 22], [-74, 20], [-75, 21], [-84, 23]],
  // South America
  [
    [-78, 9], [-71, 12], [-61, 10], [-50, 1], [-35, -6], [-38, -14],
    [-40, -22], [-48, -28], [-54, -34], [-62, -41], [-66, -50], [-69, -55],
    [-75, -48], [-73, -38], [-71, -19], [-81, -5], [-78, 9],
  ],
  // UK & Ireland
  [[-6, 50], [1.5, 51], [1.5, 53], [-2, 58], [-6, 57], [-5, 53]],
  [[-10, 52], [-6, 52], [-6, 55], [-10, 54]],
  // Continental Europe & Scandinavia
  [
    [-9, 37], [-9, 43], [-2, 43], [-4, 48], [2, 51], [8, 54], [9, 57],
    [5, 61], [12, 68], [26, 71], [32, 69], [28, 60], [20, 55], [14, 54],
    [22, 60], [29, 60], [38, 66], [44, 67], [44, 45], [38, 45], [33, 46],
    [28, 41], [23, 37], [20, 40], [14, 45], [16, 38], [12, 41], [8, 44],
    [3, 42], [-5, 36], [-9, 37],
  ],
  // Africa
  [
    [-6, 36], [10, 37], [12, 33], [24, 32], [32, 31], [38, 22], [43, 12],
    [51, 12], [44, 2], [40, -10], [35, -24], [28, -33], [18, -34],
    [14, -22], [12, -12], [9, 4], [2, 6], [-8, 5], [-17, 15], [-14, 27], [-6, 36],
  ],
  // Madagascar
  [[44, -25], [47, -25], [50, -13], [46, -15]],
  // Eurasia / Middle East / Asia
  [
    [27, 41], [36, 36], [34, 31], [38, 28], [44, 13], [54, 17], [59, 22],
    [56, 26], [51, 26], [48, 30], [56, 27], [66, 25], [72, 20], [77, 8],
    [82, 16], [89, 22], [93, 18], [98, 13], [103, 2], [104, 10], [109, 13],
    [108, 21], [116, 23], [122, 31], [120, 38], [126, 35], [129, 40],
    [135, 44], [141, 53], [156, 51], [162, 60], [178, 66], [160, 70],
    [125, 73], [95, 75], [68, 72], [58, 68], [44, 67], [44, 45], [38, 42], [27, 41],
  ],
  // Sri Lanka & Taiwan
  [[80, 6], [82, 7], [81, 9], [80, 8]],
  [[120, 22], [122, 25], [121, 25], [120, 23]],
  // Japan
  [[130, 32], [136, 34], [141, 38], [145, 44], [140, 42], [136, 36], [131, 34]],
  // Maritime SE Asia (Sumatra, Java, Borneo, Philippines)
  [[96, 5], [105, -5], [104, -6], [95, 4]],
  [[106, -7], [114, -8], [114, -7], [106, -6]],
  [[109, 1], [117, 6], [118, -3], [111, -3]],
  [[120, 18], [123, 14], [126, 7], [122, 7], [120, 15]],
  // Australia & Tasmania
  [
    [114, -22], [122, -17], [130, -12], [136, -12], [137, -15], [142, -11],
    [146, -18], [153, -27], [150, -37], [142, -38], [136, -34], [129, -32],
    [116, -34], [113, -26], [114, -22],
  ],
  [[145, -41], [148, -41], [147, -43], [145, -43]],
  // New Zealand (North & South Islands)
  [[173, -35], [178, -38], [175, -41], [173, -38]],
  [[172, -41], [174, -42], [169, -46], [167, -45]],
];

// Geographically faithful, zero-overlap pin offsets for #1–#13
const PIN_OFFSETS: Record<number, { dx: number; dy: number }> = {
  1: { dx: 7.5, dy: -2.5 }, // Kyiv -> slightly E/N in Ukraine
  2: { dx: 0, dy: 0 }, // New York
  3: { dx: 0, dy: 0 }, // Gopalpur
  4: { dx: -2.0, dy: -7.5 }, // SE Poland -> Poland/Baltic
  5: { dx: -5.8, dy: -5.6 }, // Brussels -> North Sea/Benelux
  6: { dx: -1.4, dy: -2.1 }, // Antalya -> Anatolia/Turkey (NOT Africa!)
  7: { dx: 4.4, dy: 3.9 }, // Hormuz -> Gulf/Oman
  8: { dx: 4.2, dy: 0.4 }, // Iraq -> Iraq
  9: { dx: 0, dy: 0 }, // Turkana
  10: { dx: -0.2, dy: -2.4 }, // Rome -> Central Italy (NOT Africa!)
  11: { dx: -5.5, dy: 0.6 }, // Barcelona -> Central/Eastern Spain (NOT Atlantic!)
  12: { dx: 0, dy: 0 }, // Buenos Aires
  13: { dx: -2.5, dy: -2.0 }, // Wellington
};

export function auditMapPins(stories: readonly Story[]): MapAuditResult {
  const featured = stories.filter((s) => s.id <= 13 && s.lon !== undefined && s.lat !== undefined);
  const centers = featured.map((s) => {
    const base = projectGeo(s.lon!, s.lat!);
    const off = PIN_OFFSETS[s.id] ?? { dx: 0, dy: 0 };
    return { id: s.id, x: base.x + off.dx, y: base.y + off.dy };
  });

  let minDist = Infinity;
  for (let i = 0; i < centers.length; i++) {
    for (let j = i + 1; j < centers.length; j++) {
      const dx = centers[i].x - centers[j].x;
      const dy = centers[i].y - centers[j].y;
      const d = Math.hypot(dx, dy);
      if (d < minDist) minDist = d;
    }
  }

  const outOfBoundsPins = centers
    .filter(
      (c) =>
        c.x - PIN_RADIUS < 2 ||
        c.x + PIN_RADIUS > MAP_W - 2 ||
        c.y - PIN_RADIUS < 2 ||
        c.y + PIN_RADIUS > MAP_H - 2,
    )
    .map((c) => c.id);

  return {
    minCenterDistancePx: Number(minDist.toFixed(2)),
    outOfBoundsPins,
  };
}

export function renderWorldMap(stories: readonly Story[]): string {
  const landSvg = LANDMASS_POLYGONS.map(
    (poly) =>
      `<path d="${polyPath(poly)}" fill="#D6CBB4" stroke="#9B8E72" stroke-width="0.65" stroke-linejoin="round"/>`,
  ).join('\n    ');

  const eqY = projectGeo(0, 0).y;
  const tNorthY = projectGeo(0, 23.5).y;
  const tSouthY = projectGeo(0, -23.5).y;
  const pmX = projectGeo(0, 0).x;

  // Brief muted dots (#14–#46 that have geo coordinates)
  const briefDots = stories
    .filter((s) => s.id >= 14 && s.lon !== undefined && s.lat !== undefined)
    .map((s) => {
      const pt = projectGeo(s.lon!, s.lat!);
      const color = REGION_COLOR_MAP[s.region];
      return `<circle cx="${pt.x}" cy="${pt.y}" r="1.4" fill="${color}" opacity="0.72"/>`;
    })
    .join('\n    ');

  // Lead & Feature numbered pins (#1–#13)
  const featured = stories.filter((s) => s.id <= 13 && s.lon !== undefined && s.lat !== undefined);
  const leaderSvg: string[] = [];
  const pinSvg: string[] = [];

  for (const s of featured) {
    const base = projectGeo(s.lon!, s.lat!);
    const off = PIN_OFFSETS[s.id] ?? { dx: 0, dy: 0 };
    const px = Number((base.x + off.dx).toFixed(1));
    const py = Number((base.y + off.dy).toFixed(1));
    const color = REGION_COLOR_MAP[s.region];
    const dist = Math.hypot(off.dx, off.dy);
    const isLead = s.id <= 3;

    if (dist > 1.8) {
      leaderSvg.push(
        `<line x1="${base.x}" y1="${base.y}" x2="${px}" y2="${py}" stroke="#141413" stroke-width="0.75" opacity="0.85"/>` +
          `<circle cx="${base.x}" cy="${base.y}" r="1.3" fill="#141413"/>`,
      );
    }

    const r = isLead ? 5.1 : PIN_RADIUS;
    const contrastRing = isLead
      ? `<circle cx="${px}" cy="${py}" r="6.1" fill="#141413"/>\n        `
      : '';
    pinSvg.push(
      `<g>
        ${contrastRing}<circle cx="${px}" cy="${py}" r="${r}" fill="${color}" stroke="#FFFFFF" stroke-width="${isLead ? 1.15 : 0.95}"/>
        <text x="${px}" y="${Number((py + 1.9).toFixed(1))}" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="${isLead ? 5.8 : 5.2}" font-weight="800" fill="#FFFFFF">${s.id}</text>
      </g>`,
    );
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MAP_W} ${MAP_H}" width="100%" height="100%" role="img" aria-label="World map locating stories 1 to 13">
  <rect width="${MAP_W}" height="${MAP_H}" rx="2" fill="#EDE6D6" stroke="#C8BFA8" stroke-width="0.8"/>
  <g stroke="#DDD3BE" stroke-width="0.5">
    <line x1="0" y1="${eqY}" x2="${MAP_W}" y2="${eqY}" stroke-dasharray="2 2"/>
    <line x1="0" y1="${tNorthY}" x2="${MAP_W}" y2="${tNorthY}" opacity="0.6"/>
    <line x1="0" y1="${tSouthY}" x2="${MAP_W}" y2="${tSouthY}" opacity="0.6"/>
    <line x1="${pmX}" y1="0" x2="${pmX}" y2="${MAP_H}" opacity="0.5"/>
  </g>
  <g>
    ${landSvg}
  </g>
  <g>
    ${briefDots}
  </g>
  <g>
    ${leaderSvg.join('\n    ')}
  </g>
  <g>
    ${pinSvg.join('\n    ')}
  </g>
</svg>`;
}
