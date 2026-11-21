import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { auditMapPins } from './src/map.ts';
import { renderBroadsheetHtml } from './src/render.ts';
import {
  EXPECTED_FIELD_COUNTS,
  REGION_METAS,
  STORIES,
} from './src/stories.ts';
import type { FieldKey, RegionKey } from './src/types.ts';

const ROOT_DIR = dirname(fileURLToPath(import.meta.url));
const SCRATCH_DIR =
  '/home/fadori/.gemini/antigravity-cli/brain/f4ef8bc8-3563-4260-9de7-079d3d339f93/scratch';
const CANDIDATE_ONLY = process.env.CANDIDATE_ONLY === '1';

const FORBIDDEN_KEYWORDS = [
  'Bukele',
  'Kampala',
  'Fiona',
  'BepiColombo',
  'Panguna',
  'Forfeiture',
  'Greenland',
  'Yenne',
  'Voyager',
  'Van Gogh',
  'GTA VI',
  'Shenzhen',
  'ICJ',
];

function assertEditorialIntegrity(): void {
  if (STORIES.length !== 48) {
    throw new Error(`Expected 48 stories, got ${STORIES.length}`);
  }

  const seenIds = new Set<number>();
  const regionCounts: Record<RegionKey, number> = {
    Europe: 0,
    Americas: 0,
    Asia: 0,
    Africa: 0,
    'Middle East': 0,
    Oceania: 0,
    Global: 0,
  };
  const fieldCounts: Partial<Record<FieldKey, number>> = {};

  for (let i = 0; i < STORIES.length; i++) {
    const s = STORIES[i];
    if (s.id !== i + 1) {
      throw new Error(`Expected story index ${i + 1}, got #${s.id}`);
    }
    if (seenIds.has(s.id)) {
      throw new Error(`Duplicate story id #${s.id}`);
    }
    seenIds.add(s.id);

    const expectedTier = s.id <= 3 ? 'lead' : s.id <= 13 ? 'feature' : 'brief';
    if (s.tier !== expectedTier) {
      throw new Error(`Story #${s.id} has tier ${s.tier}, expected ${expectedTier}`);
    }

    regionCounts[s.region] += 1;
    fieldCounts[s.field] = (fieldCounts[s.field] ?? 0) + 1;

    const fullText = `${s.dateline} ${s.headline} ${s.summary} ${s.source}`;
    for (const kw of FORBIDDEN_KEYWORDS) {
      const re = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (re.test(fullText)) {
        throw new Error(`Forbidden near-date keyword "${kw}" found in story #${s.id}: ${fullText}`);
      }
    }
  }

  let regTotal = 0;
  for (const rm of REGION_METAS) {
    const actual = regionCounts[rm.key];
    if (actual !== rm.expectedCount) {
      throw new Error(`Region ${rm.key} count=${actual}, expected ${rm.expectedCount}`);
    }
    regTotal += actual;
  }
  if (regTotal !== 48) {
    throw new Error(`Region total=${regTotal}, expected 48`);
  }

  let fieldTotal = 0;
  const fieldEntries = Object.entries(EXPECTED_FIELD_COUNTS) as [FieldKey, number][];
  if (fieldEntries.length !== 17) {
    throw new Error(`Expected 17 fields, got ${fieldEntries.length}`);
  }
  for (const [f, exp] of fieldEntries) {
    const actual = fieldCounts[f] ?? 0;
    if (actual !== exp) {
      throw new Error(`Field ${f} count=${actual}, expected ${exp}`);
    }
    fieldTotal += actual;
  }
  if (fieldTotal !== 48) {
    throw new Error(`Field total=${fieldTotal}, expected 48`);
  }

  const mapAudit = auditMapPins(STORIES);
  if (mapAudit.outOfBoundsPins.length > 0) {
    throw new Error(`Out-of-bounds map pins: ${mapAudit.outOfBoundsPins.join(', ')}`);
  }
  if (mapAudit.minCenterDistancePx < 10.5) {
    throw new Error(
      `Map pins too close (${mapAudit.minCenterDistancePx}px < 10.5px minimum)`,
    );
  }
  console.log(
    `[ASSERT OK] 48 stories (3+10+35) | 7 regions=48 | 17 fields=48 | min pin distance=${mapAudit.minCenterDistancePx}px | 0 forbidden keywords`,
  );
}

function runDomOverflowCheck(html: string): void {
  const auditScript = `
<script>
(() => {
  const page = document.querySelector('.page');
  const checks = [];
  const selectors = [
    '.page',
    '.masthead',
    '.masthead-title',
    '.masthead-deck',
    '.ribbon',
    '.lead-card',
    '.feature-card',
    '.feature-summary',
    '.map-panel',
    '.how-to-read',
    '.date-check',
    '.dc-body',
    '.briefs-panel',
    '#briefs-col-1',
    '#briefs-col-2',
    '#briefs-col-3',
  ];
  for (const sel of selectors) {
    const els = document.querySelectorAll(sel);
    els.forEach((el, idx) => {
      const dh = el.scrollHeight - el.clientHeight;
      const dw = el.scrollWidth - el.clientWidth;
      if (dh > 1 || dw > 1) {
        checks.push({
          selector: els.length > 1 ? sel + '[' + idx + ']' : sel,
          scrollH: el.scrollHeight,
          clientH: el.clientHeight,
          scrollW: el.scrollWidth,
          clientW: el.clientWidth,
        });
      }
    });
  }
  const col1 = document.querySelector('#briefs-col-1');
  const col2 = document.querySelector('#briefs-col-2');
  const col3 = document.querySelector('#briefs-col-3');
  const panelBottom = document.querySelector('.briefs-panel').getBoundingClientRect().bottom;
  const colBottom = (el) => el && el.lastElementChild ? Number((panelBottom - el.lastElementChild.getBoundingClientRect().bottom).toFixed(1)) : 0;
  document.documentElement.dataset.audit = JSON.stringify({
    docW: document.documentElement.scrollWidth,
    docH: document.documentElement.scrollHeight,
    pageRect: page.getBoundingClientRect(),
    overflows: checks,
    briefSpaceLeftPx: {
      col1: colBottom(col1),
      col2: colBottom(col2),
      col3: colBottom(col3),
    },
  });
})();
</script>
</body>`;

  const auditPath = join(SCRATCH_DIR, 'audit.html');
  writeFileSync(auditPath, html.replace('</body>', auditScript), 'utf8');

  const domOut = execFileSync(
    'brave-browser',
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--virtual-time-budget=1500',
      '--dump-dom',
      `file://${auditPath}`,
    ],
    { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 },
  );

  const match = domOut.match(/data-audit="([^"]+)"/);
  if (!match) {
    throw new Error('Failed to extract data-audit from headless Brave --dump-dom');
  }
  const decoded = match[1]
    .replaceAll('&quot;', '"')
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
  const audit = JSON.parse(decoded);
  console.log('[DOM AUDIT]', JSON.stringify(audit));

  if (audit.docW > 1024 || audit.docH > 1024) {
    throw new Error(`Document exceeds 1024x1024: ${audit.docW}x${audit.docH}`);
  }
  if (audit.overflows.length > 0) {
    throw new Error(`DOM overflow detected: ${JSON.stringify(audit.overflows)}`);
  }
  for (const [col, left] of Object.entries(audit.briefSpaceLeftPx) as [string, number][]) {
    if (left < 8.0) {
      throw new Error(`Brief column ${col} bottom clearance too tight (${left}px < 8.0px)`);
    }
  }
}

function main(): void {
  mkdirSync(SCRATCH_DIR, { recursive: true });
  assertEditorialIntegrity();

  const html = renderBroadsheetHtml();
  const renderPath = join(SCRATCH_DIR, 'render.html');
  writeFileSync(renderPath, html, 'utf8');

  runDomOverflowCheck(html);

  const raw2048Path = join(SCRATCH_DIR, 'raw-2048.png');
  execFileSync(
    'brave-browser',
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      `--screenshot=${raw2048Path}`,
      '--window-size=1024,1024',
      '--force-device-scale-factor=2',
      '--default-background-color=fffaf6ee',
      `file://${renderPath}`,
    ],
    { stdio: 'inherit' },
  );

  const entryOutPath = CANDIDATE_ONLY
    ? join(SCRATCH_DIR, 'candidate.png')
    : join(ROOT_DIR, 'entry.png');
  const preview300Path = join(SCRATCH_DIR, 'candidate-300.png');

  const pyScript = `
import os
from PIL import Image

raw = Image.open(${JSON.stringify(raw2048Path)}).convert("RGB")
print("raw-2048 size:", raw.size)
if raw.size != (2048, 2048):
    raw = raw.resize((2048, 2048), Image.Resampling.LANCZOS)

img_1024 = raw.resize((1024, 1024), Image.Resampling.LANCZOS)

rgb_tmp = ${JSON.stringify(join(SCRATCH_DIR, 'test-rgb.png'))}
pal_tmp = ${JSON.stringify(join(SCRATCH_DIR, 'test-pal.png'))}
img_1024.save(rgb_tmp, format="PNG", optimize=True, compress_level=9)
pal = img_1024.quantize(colors=256, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE)
pal.save(pal_tmp, format="PNG", optimize=True, compress_level=9)
rgb_bytes = os.path.getsize(rgb_tmp)
pal_bytes = os.path.getsize(pal_tmp)
print(f"PNG sizes: lossless_rgb={rgb_bytes} bytes, fastoctree_256={pal_bytes} bytes")

entry_out = ${JSON.stringify(entryOutPath)}
if rgb_bytes <= 1048576:
    img_1024.save(entry_out, format="PNG", optimize=True, compress_level=9)
    print(f"Selected: lossless RGB PNG ({rgb_bytes} bytes <= 1048576)")
else:
    raise RuntimeError(f"Lossless RGB PNG exceeded 1 MiB ({rgb_bytes} bytes)")

# Verify PNG integrity & generate 300px + 1:1 inspection crops
with Image.open(entry_out) as chk:
    chk.verify()
saved = Image.open(entry_out).convert("RGB")
prev_300 = saved.resize((300, 300), Image.Resampling.LANCZOS)
prev_300.save(${JSON.stringify(preview300Path)}, format="PNG", optimize=True, compress_level=9)

# Quadrant and map 1:1 crops in scratch
saved.crop((0, 0, 512, 512)).save(${JSON.stringify(join(SCRATCH_DIR, 'cand_tl.png'))})
saved.crop((512, 0, 1024, 512)).save(${JSON.stringify(join(SCRATCH_DIR, 'cand_tr.png'))})
saved.crop((0, 512, 512, 1024)).save(${JSON.stringify(join(SCRATCH_DIR, 'cand_bl.png'))})
saved.crop((512, 512, 1024, 1024)).save(${JSON.stringify(join(SCRATCH_DIR, 'cand_br.png'))})
saved.crop((0, 600, 280, 900)).save(${JSON.stringify(join(SCRATCH_DIR, 'cand_map.png'))})
`;

  execFileSync('python3', ['-c', pyScript], { stdio: 'inherit' });

  const entryBytes = readFileSync(entryOutPath);
  const sha256 = createHash('sha256').update(entryBytes).digest('hex');
  const size = statSync(entryOutPath).size;
  console.log(
    `[BUILT] ${CANDIDATE_ONLY ? 'SCRATCH candidate.png' : 'entry.png'} | size=${size} bytes | sha256=${sha256}`,
  );

  if (size > 1048576) {
    throw new Error(`Output PNG exceeds 1 MiB limit: ${size}`);
  }

  if (!CANDIDATE_ONLY) {
    const mainTsPath = join(ROOT_DIR, 'main.ts');
    const mainSrc = readFileSync(mainTsPath, 'utf8');
    const updatedMain = mainSrc.replace(
      /const EXPECTED_SHA256 = '[a-f0-9]*';/,
      `const EXPECTED_SHA256 = '${sha256}';`,
    );
    if (!updatedMain.includes(sha256)) {
      throw new Error('Could not update EXPECTED_SHA256 in main.ts');
    }
    writeFileSync(mainTsPath, updatedMain, 'utf8');
    console.log(`[SYNCED] main.ts EXPECTED_SHA256=${sha256}`);
  } else {
    console.log('[CANDIDATE_ONLY] Preserved baseline entry.png & main.ts untouched.');
  }
}

main();
