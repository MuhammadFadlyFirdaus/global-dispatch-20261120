import { drawIllustration } from './illustrations.ts';
import { renderWorldMap } from './map.ts';
import {
  DATE_CHECK_ROWS,
  EDITION_DATE,
  EXPECTED_FIELD_COUNTS,
  KPI_ITEMS,
  REGION_COLOR_MAP,
  REGION_METAS,
  STORIES,
  UTC_STOPS,
} from './stories.ts';
import type { EpistemicTag, RegionKey, Story } from './types.ts';

function esc(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function epClass(tag: EpistemicTag): string {
  switch (tag) {
    case 'OFFICIAL':
      return 'ep-official';
    case 'CONFIRMED':
      return 'ep-confirmed';
    case 'REPORTED':
      return 'ep-reported';
    case 'ONGOING':
      return 'ep-ongoing';
    case 'CLAIM':
      return 'ep-claim';
  }
}

function renderLeadCard(story: Story): string {
  const color = REGION_COLOR_MAP[story.region];
  const badgeHtml =
    story.id === 2
      ? `<div class="ep-group"><span class="ep-badge ${epClass(story.epistemic)}">${story.epistemic}</span><span class="ep-badge ep-reported">REPORTED · SEC</span></div>`
      : `<span class="ep-badge ${epClass(story.epistemic)}">${story.epistemic}</span>`;
  return `<article class="lead-card" style="border-top-color:${color}">
    <div class="lead-art">${drawIllustration(story.id)}</div>
    <div class="card-meta">
      <div class="card-meta-left">
        <span class="num-pill" style="background:${color}">#${story.id}</span>
        <span class="region-tag" style="color:${color}">${esc(story.region.toUpperCase())} · ${esc(story.field.toUpperCase())}</span>
        <span class="dateline-tag">${esc(story.dateline)}</span>
      </div>
      ${badgeHtml}
    </div>
    <h2 class="lead-headline">${esc(story.headline)}</h2>
    <p class="lead-summary">${esc(story.summary)}</p>
    <div class="card-source">Source: ${esc(story.source)}</div>
  </article>`;
}

function renderFeatureCard(story: Story): string {
  const color = REGION_COLOR_MAP[story.region];
  return `<article class="feature-card" style="border-top-color:${color}">
    <div class="feature-meta">
      <div class="feature-meta-left">
        <span class="num-pill-sm" style="background:${color}">#${story.id}</span>
        <span class="feature-loc">${esc(story.dateline)}</span>
      </div>
      <span class="ep-badge-sm ${epClass(story.epistemic)}">${story.epistemic}</span>
    </div>
    <div class="feature-art">${drawIllustration(story.id)}</div>
    <h3 class="feature-headline">${esc(story.headline)}</h3>
    <p class="feature-summary">${esc(story.summary)}</p>
    <div class="feature-footer">
      <span class="feature-src">${esc(story.source)}</span>
      <span class="feature-field" style="color:${color}">${esc(story.field)}</span>
    </div>
  </article>`;
}

function renderBriefGroup(region: RegionKey, briefs: readonly Story[]): string {
  const color = REGION_COLOR_MAP[region];
  const items = briefs
    .filter((b) => b.region === region)
    .map(
      (b) =>
        `<div class="brief-item"><span class="b-id" style="color:${color}">#${b.id}</span> <strong>${esc(b.dateline)}: ${esc(b.headline)}</strong> · ${esc(b.summary)} <span class="b-src">(${esc(b.source)})</span></div>`,
    )
    .join('\n          ');

  const count = briefs.filter((b) => b.region === region).length;
  return `<div class="brief-group">
        <div class="brief-group-hdr" style="border-left-color:${color}; color:${color}">${esc(region.toUpperCase())} <span class="brief-count">(${count})</span></div>
        ${items}
      </div>`;
}

export function renderBroadsheetHtml(): string {
  const leads = STORIES.filter((s) => s.tier === 'lead');
  const features = STORIES.filter((s) => s.tier === 'feature');
  const briefs = STORIES.filter((s) => s.tier === 'brief');

  const utcHtml = UTC_STOPS.map(
    (u) => `<div class="utc-stop">
        <div class="utc-head"><span class="utc-dot"></span><span class="utc-time">${esc(u.time)}</span> <span class="utc-title">${esc(u.title)}</span></div>
        <div class="utc-detail">${esc(u.detail)}</div>
      </div>`,
  ).join('\n      ');

  const kpiHtml = KPI_ITEMS.map(
    (k) => `<div class="kpi-cell">
        <span class="kpi-val">${esc(k.value)}</span>
        <div class="kpi-meta"><span class="kpi-lbl">${esc(k.label)}</span> <span class="kpi-src">(${esc(k.source)})</span></div>
      </div>`,
  ).join('\n      ');

  const regionShortCode: Record<RegionKey, string> = {
    Europe: 'EU',
    Americas: 'AM',
    Asia: 'AS',
    Africa: 'AF',
    'Middle East': 'ME',
    Oceania: 'OC',
    Global: 'GL',
  };

  const regionBarHtml = REGION_METAS.map((r) => {
    const pct = ((r.expectedCount / 48) * 100).toFixed(2);
    return `<div class="reg-seg" style="width:${pct}%; background:${r.color}">${regionShortCode[r.key]} ${r.expectedCount}</div>`;
  }).join('');

  const fieldSummary = Object.entries(EXPECTED_FIELD_COUNTS)
    .map(([k, v]) => {
      const short = k
        .replace('Climate & Env', 'Climate')
        .replace('Labour & Protest', 'Labour')
        .replace('Tech & Cyber', 'Tech');
      return `${esc(short)} <strong>${v}</strong>`;
    })
    .join(' · ');

  const dateCheckHtml = DATE_CHECK_ROWS.map(
    (row) =>
      `<div class="dc-row"><span class="dc-win">${esc(row.windowLabel)}:</span> ${esc(row.items)}</div>`,
  ).join('\n          ');

  const col1Regions: readonly RegionKey[] = ['Americas', 'Africa', 'Middle East'];
  const col2Regions: readonly RegionKey[] = ['Europe', 'Asia', 'Oceania', 'Global'];

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>The Global Dispatch — ${esc(EDITION_DATE)}</title>
<style>
  *, *::before, *::after { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #FAF6EE;
    color: #141413;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    padding: 8px 16px 6px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-family: 'Noto Sans', 'Liberation Sans', sans-serif;
    font-variant-numeric: tabular-nums;
    overflow: hidden;
  }

  /* === BAND 1: MASTHEAD === */
  .masthead {
    height: 79px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .eyebrow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7.7px;
    font-weight: 700;
    letter-spacing: 0.7px;
    color: #57534E;
  }
  .eyebrow-left {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #B91C1C;
  }
  .eyebrow-pill {
    background: #B91C1C;
    color: #FAF6EE;
    padding: 1px 5px;
    border-radius: 1.5px;
    letter-spacing: 0.9px;
  }
  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0;
  }
  .masthead-title {
    margin: 0;
    font-family: 'Noto Serif Display', 'Noto Serif', 'Liberation Serif', Georgia, serif;
    font-size: 46px;
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -1.1px;
    color: #141413;
  }
  .edition-stamp {
    text-align: right;
    font-size: 6.9px;
    font-weight: 700;
    line-height: 1.18;
    color: #57534E;
    letter-spacing: 0.4px;
  }
  .edition-stamp strong {
    color: #141413;
  }
  .masthead-deck {
    margin: 0;
    font-family: 'Noto Serif', 'Liberation Serif', Georgia, serif;
    font-style: italic;
    font-size: 9.6px;
    line-height: 1.25;
    min-height: 13px;
    color: #2B2A27;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .double-rule {
    border-top: 2.2px solid #141413;
    border-bottom: 1px solid #C8BFA8;
    height: 3px;
  }

  /* === BAND 2: UTC + KPI + REGION/FIELD RIBBON === */
  .ribbon {
    height: 64px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1.5px solid #141413;
    padding-bottom: 3px;
  }
  .utc-row {
    display: flex;
    align-items: center;
    height: 23px;
    border-bottom: 1px solid #DDD4C0;
    padding-bottom: 2px;
  }
  .ribbon-label-red {
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 6.9px;
    font-weight: 700;
    letter-spacing: 0.4px;
    padding: 2.5px 5px;
    border-radius: 1.5px;
    width: 82px;
    text-align: center;
    flex-shrink: 0;
    margin-right: 8px;
  }
  .utc-track {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
    position: relative;
  }
  .utc-stop {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }
  .utc-head {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 7.4px;
  }
  .utc-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #B91C1C;
    flex-shrink: 0;
  }
  .utc-time {
    font-weight: 800;
    color: #B91C1C;
  }
  .utc-title {
    font-weight: 700;
    color: #141413;
    white-space: nowrap;
  }
  .utc-detail {
    font-size: 6.6px;
    color: #57534E;
    padding-left: 8px;
    white-space: nowrap;
  }

  .kpi-row {
    display: flex;
    align-items: center;
    height: 22px;
    border-bottom: 1px solid #DDD4C0;
    padding-bottom: 2px;
  }
  .ribbon-label-dark {
    background: #141413;
    color: #FAF6EE;
    font-size: 6.7px;
    font-weight: 700;
    letter-spacing: 0.3px;
    padding: 2.5px 4px;
    border-radius: 1.5px;
    width: 82px;
    text-align: center;
    flex-shrink: 0;
    margin-right: 8px;
  }
  .kpi-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
  }
  .kpi-cell {
    display: flex;
    align-items: center;
    gap: 4px;
    border-left: 1px solid #D8CEB8;
    padding-left: 5px;
  }
  .kpi-cell:first-child { border-left: none; padding-left: 0; }
  .kpi-val {
    font-size: 11px;
    font-weight: 800;
    color: #B91C1C;
    letter-spacing: -0.3px;
    flex-shrink: 0;
  }
  .kpi-meta {
    font-size: 6.3px;
    line-height: 1.12;
    color: #2B2A27;
  }
  .kpi-src { color: #57534E; font-style: italic; }

  .tax-row {
    display: grid;
    grid-template-columns: 336px 1fr;
    gap: 10px;
    align-items: center;
    height: 16px;
  }
  .reg-wrap {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .tax-lbl {
    font-size: 6.8px;
    font-weight: 800;
    color: #141413;
    white-space: nowrap;
  }
  .reg-bar {
    flex: 1;
    height: 12px;
    display: flex;
    border-radius: 2px;
    overflow: hidden;
    border: 0.5px solid #A89F8D;
  }
  .reg-seg {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6.4px;
    font-weight: 700;
    color: #FFFFFF;
    white-space: nowrap;
    border-right: 0.6px solid rgba(255,255,255,0.4);
  }
  .reg-seg:last-child { border-right: none; }
  .fields-wrap {
    font-family: 'Liberation Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 7.2px;
    color: #2B2A27;
    white-space: nowrap;
    overflow: hidden;
  }

  /* === BAND 3: 3 HERO LEADS === */
  .leads-grid {
    height: 214px;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .lead-card {
    background: #F4EFE4;
    border: 1px solid #C8BFA8;
    border-top-width: 3px;
    border-radius: 2px;
    padding: 5px 6px;
    display: flex;
    flex-direction: column;
    height: 214px;
    overflow: hidden;
  }
  .lead-art {
    width: 100%;
    height: 97px;
    margin-bottom: 3.5px;
    border-radius: 2px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
    height: 13px;
    flex-shrink: 0;
  }
  .card-meta-left {
    display: flex;
    align-items: center;
    gap: 3.5px;
    font-size: 6.95px;
    font-weight: 700;
    white-space: nowrap;
  }
  .num-pill {
    color: #FFFFFF;
    padding: 0.5px 4px;
    border-radius: 1.5px;
    font-size: 7.2px;
    font-weight: 800;
  }
  .region-tag { letter-spacing: 0.3px; }
  .dateline-tag { color: #57534E; font-weight: 600; }
  .lead-headline {
    margin: 0 0 3px;
    font-family: 'Noto Serif Display', 'Noto Serif', 'Liberation Serif', Georgia, serif;
    font-size: 13.6px;
    font-weight: 700;
    line-height: 1.15;
    color: #141413;
  }
  .lead-summary {
    margin: 0;
    font-size: 8.65px;
    line-height: 1.27;
    color: #2B2A27;
  }
  .card-source {
    margin-top: auto;
    padding-top: 2px;
    border-top: 0.6px solid #D8CEB8;
    font-size: 7.1px;
    font-style: italic;
    color: #57534E;
  }

  /* === BAND 4: 12 FEATURES (2x6) === */
  .features-grid {
    height: 268px;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 131px);
    gap: 6px 8px;
  }
  .feature-card {
    background: #F4EFE4;
    border: 1px solid #C8BFA8;
    border-top-width: 2.5px;
    border-radius: 2px;
    padding: 4px 5px;
    display: flex;
    flex-direction: column;
    height: 131px;
    overflow: hidden;
  }
  .feature-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
    height: 11px;
    flex-shrink: 0;
  }
  .feature-meta-left {
    display: flex;
    align-items: center;
    gap: 3px;
    min-width: 0;
  }
  .num-pill-sm {
    color: #FFFFFF;
    padding: 0 3px;
    border-radius: 1.5px;
    font-size: 6.7px;
    font-weight: 800;
    line-height: 10px;
  }
  .feature-loc {
    font-family: 'Liberation Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 6.8px;
    font-weight: 700;
    color: #44403C;
    white-space: nowrap;
    overflow: hidden;
  }
  .feature-art {
    width: 100%;
    height: 43px;
    margin-bottom: 2px;
    border-radius: 1.5px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .feature-headline {
    margin: 0 0 2px;
    font-family: 'Noto Serif', 'Liberation Serif', Georgia, serif;
    font-size: 9.0px;
    font-weight: 700;
    line-height: 1.12;
    color: #141413;
  }
  .feature-summary {
    margin: 0;
    font-size: 7.35px;
    line-height: 1.2;
    color: #2B2A27;
  }
  .feature-footer {
    margin-top: auto;
    padding-top: 1.5px;
    border-top: 0.5px solid #DDD4C0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6.5px;
  }
  .feature-src {
    color: #57534E;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
  }
  .feature-field {
    font-weight: 700;
    white-space: nowrap;
  }

  /* === EPISTEMIC BADGES === */
  .ep-group {
    display: flex;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
  }
  .ep-badge, .ep-badge-sm {
    font-family: 'Liberation Sans Narrow', 'Noto Sans', sans-serif;
    font-weight: 700;
    border-radius: 2px;
    letter-spacing: 0.25px;
    flex-shrink: 0;
  }
  .ep-badge { font-size: 6.7px; padding: 1px 4px; }
  .ep-badge-sm { font-size: 6.0px; padding: 0.5px 3px; line-height: 9px; }
  .ep-official  { background: #DBEAFE; color: #1E3A8A; }
  .ep-confirmed { background: #DCFCE7; color: #14532D; }
  .ep-reported  { background: #FEF3C7; color: #92400E; }
  .ep-ongoing   { background: #FFEDD5; color: #7C2D12; }
  .ep-claim     { background: #FEE2E2; color: #991B1B; }

  /* === BAND 5: LOWER DECK === */
  .lower-deck {
    height: 356px;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: 336px 1fr;
    gap: 10px;
  }
  .left-lower {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 356px;
  }
  .map-panel {
    height: 186px;
    background: #F4EFE4;
    border: 1px solid #C8BFA8;
    border-radius: 2px;
    padding: 4px 5px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .panel-hdr {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2px;
  }
  .panel-title {
    font-size: 7.8px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #141413;
  }
  .panel-sub {
    font-size: 6.5px;
    color: #57534E;
  }
  .map-box {
    height: 138px;
    width: 100%;
    flex-shrink: 0;
  }
  .how-sure {
    margin-top: auto;
    border-top: 0.6px solid #D8CEB8;
    padding-top: 3px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 3px;
    font-size: 6.05px;
    white-space: nowrap;
    color: #2B2A27;
  }
  .hs-item { display: inline-flex; align-items: center; gap: 2px; }

  .date-check {
    flex: 1;
    background: #FDF8F6;
    border: 1.5px solid #B91C1C;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .dc-hdr {
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 7.3px;
    font-weight: 700;
    letter-spacing: 0.45px;
    padding: 2.5px 6px;
    flex-shrink: 0;
  }
  .dc-body {
    padding: 5px 6.5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    gap: 5.5px;
    font-size: 7.5px;
    line-height: 1.28;
    color: #2B2A27;
  }
  .dc-win {
    font-weight: 800;
    color: #991B1B;
  }

  /* === RIGHT LOWER: 33 BRIEFS === */
  .briefs-panel {
    height: 356px;
    background: #F4EFE4;
    border: 1px solid #C8BFA8;
    border-radius: 2px;
    padding: 4px 7px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .briefs-hdr {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1.5px solid #141413;
    padding-bottom: 2px;
    margin-bottom: 3px;
    flex-shrink: 0;
  }
  .briefs-title {
    font-family: 'Noto Serif', 'Liberation Serif', Georgia, serif;
    font-size: 9.8px;
    font-weight: 700;
    color: #141413;
  }
  .briefs-sub {
    font-size: 6.7px;
    font-weight: 700;
    color: #57534E;
    letter-spacing: 0.3px;
  }
  .briefs-cols {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    overflow: hidden;
  }
  .briefs-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2px;
    gap: 3px;
    overflow: hidden;
  }
  .briefs-col:first-child {
    border-right: 1px solid #D8CEB8;
    padding-right: 8px;
  }
  .brief-group {
    display: flex;
    flex-direction: column;
    gap: 2.5px;
  }
  .brief-group-hdr {
    font-size: 7.35px;
    font-weight: 800;
    letter-spacing: 0.45px;
    border-left: 3px solid;
    padding-left: 4px;
    margin-bottom: 1px;
    background: #EAE2D2;
    line-height: 13px;
  }
  .brief-count { font-weight: 600; opacity: 0.85; }
  .brief-item {
    font-size: 7.12px;
    line-height: 1.20;
    color: #2B2A27;
  }
  .b-id { font-weight: 800; }
  .b-src { color: #57534E; font-style: italic; font-size: 6.85px; }

  /* === BAND 6: COLOPHON FOOTER === */
  .colophon {
    height: 13px;
    flex-shrink: 0;
    border-top: 1px solid #C8BFA8;
    padding-top: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6.7px;
    color: #57534E;
  }
</style>
</head>
<body>
<div class="page">
  <header class="masthead">
    <div class="eyebrow">
      <div class="eyebrow-left"><span class="eyebrow-pill">THE GLOBAL DISPATCH</span><span>THE WORLD IN ONE DAY</span></div>
      <div>48 VERIFIED STORIES · 7 REGIONS · 17 FIELDS · FULL 00:00–24:00 UTC</div>
    </div>
    <div class="title-row">
      <h1 class="masthead-title">${esc(EDITION_DATE)}</h1>
      <div class="edition-stamp"><strong>ARCHIVAL BROADSHEET</strong><br/>OCCURRED OR FIRST REPORTED 20 NOV</div>
    </div>
    <p class="masthead-deck">Kyiv’s Dnipro bridges struck in 515-weapon barrage as AI tech rout sends S&amp;P 500 into correction (−3.7%, Nvidia −14%), Cyclone Akvan spares Odisha lives, and Russian missiles enter Poland.</p>
    <div class="double-rule"></div>
  </header>

  <section class="ribbon">
    <div class="utc-row">
      <div class="ribbon-label-red">THE DAY IN UTC</div>
      <div class="utc-track">
      ${utcHtml}
      </div>
    </div>
    <div class="kpi-row">
      <div class="ribbon-label-dark">THE DAY IN NUMBERS</div>
      <div class="kpi-grid">
      ${kpiHtml}
      </div>
    </div>
    <div class="tax-row">
      <div class="reg-wrap">
        <span class="tax-lbl">7 REGIONS (48)</span>
        <div class="reg-bar">${regionBarHtml}</div>
      </div>
      <div class="fields-wrap"><strong>17 FIELDS (48):</strong> ${fieldSummary}</div>
    </div>
  </section>

  <section class="leads-grid">
    ${leads.map(renderLeadCard).join('\n    ')}
  </section>

  <section class="features-grid">
    ${features.map(renderFeatureCard).join('\n    ')}
  </section>

  <section class="lower-deck">
    <div class="left-lower">
      <div class="map-panel">
        <div class="panel-hdr">
          <span class="panel-title">WHERE IT HAPPENED</span>
          <span class="panel-sub">Pins 1–15 = Leads &amp; Features · Dots = Briefs</span>
        </div>
        <div class="map-box">${renderWorldMap(STORIES)}</div>
        <div class="how-sure">
          <strong style="color:#141413">HOW SURE:</strong>
          <span class="hs-item"><span class="ep-badge-sm ep-official">OFFICIAL</span> Gov/Agency</span>
          <span class="hs-item"><span class="ep-badge-sm ep-confirmed">CONFIRMED</span> Multi-wire</span>
          <span class="hs-item"><span class="ep-badge-sm ep-reported">REPORTED</span> Single/Trial</span>
          <span class="hs-item"><span class="ep-badge-sm ep-ongoing">ONGOING</span> Active</span>
        </div>
      </div>
      <div class="date-check">
        <div class="dc-hdr">DATE CHECK — EXCLUDED NEAR-DATE EVENTS (ZERO OVERLAP)</div>
        <div class="dc-body">
          ${dateCheckHtml}
        </div>
      </div>
    </div>
    <div class="briefs-panel">
      <div class="briefs-hdr">
        <span class="briefs-title">ALSO ON FRIDAY 20 NOVEMBER — 33 VERIFIED BRIEFS</span>
        <span class="briefs-sub">7 REGIONS · WIRE SOURCES CITED</span>
      </div>
      <div class="briefs-cols">
        <div class="briefs-col" id="briefs-col-1">
          ${col1Regions.map((r) => renderBriefGroup(r, briefs)).join('\n          ')}
        </div>
        <div class="briefs-col" id="briefs-col-2">
          ${col2Regions.map((r) => renderBriefGroup(r, briefs)).join('\n          ')}
        </div>
      </div>
    </div>
  </section>

  <footer class="colophon">
    <span>Every story occurred, or was first reported, on Friday 20 November 2026 · Claims attributed, no speculation shown as fact</span>
    <span>Original vector graphics · Wire &amp; official sources cited throughout</span>
  </footer>
</div>
</body>
</html>`;
}
