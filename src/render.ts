import { drawIllustration } from './illustrations.ts';
import { renderWorldMap } from './map.ts';
import {
  DATE_CHECK_ROWS,
  EDITION_DATE,
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
    <p class="lead-summary">${esc(story.summary)} <span class="inline-src">(${esc(story.source)})</span></p>
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
  const groupStories = briefs.filter((b) => b.region === region);
  const items = groupStories
    .map(
      (b) =>
        `<div class="brief-item"><span class="b-id" style="color:${color}">#${b.id}</span> <strong>${esc(b.dateline)}: ${esc(b.headline)}</strong> · ${esc(b.summary)} <span class="b-src">(${esc(b.source)})</span></div>`,
    )
    .join('\n          ');

  return `<div class="brief-group">
        <div class="brief-group-hdr" style="border-left-color:${color}; color:${color}">${esc(region.toUpperCase())} (${groupStories.length})</div>
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

  const regionLabelMap: Record<RegionKey, string> = {
    Europe: 'EUROPE',
    Americas: 'AMERICAS',
    Asia: 'ASIA',
    Africa: 'AFRICA',
    'Middle East': 'MID EAST',
    Oceania: 'OCEANIA',
    Global: 'GLOBAL',
  };

  const regionBarHtml = REGION_METAS.map((r) => {
    const pct = ((r.expectedCount / 48) * 100).toFixed(2);
    return `<div class="reg-seg" style="width:${pct}%; background:${r.color}">${regionLabelMap[r.key]} ${r.expectedCount}</div>`;
  }).join('');

  const dateCheckHtml = DATE_CHECK_ROWS.map(
    (row) =>
      `<span class="dc-item"><strong class="dc-win">${esc(row.windowLabel)}:</strong> ${esc(row.items)}</span>`,
  ).join(' &nbsp;|&nbsp; ');

  const col1Regions: readonly RegionKey[] = ['Americas', 'Middle East']; // 8 + 3 = 11
  const col2Regions: readonly RegionKey[] = ['Europe', 'Africa']; // 6 + 6 = 12
  const col3Regions: readonly RegionKey[] = ['Asia', 'Oceania', 'Global']; // 7 + 3 + 2 = 12

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
    padding: 5px 14px 4px;
    display: flex;
    flex-direction: column;
    gap: 2.5px;
    font-family: 'Ubuntu Sans', 'Noto Sans', 'Liberation Sans', sans-serif;
    font-variant-numeric: tabular-nums;
    overflow: hidden;
  }

  /* === BAND 1: FULL-WIDTH BOLD MASTHEAD === */
  .masthead {
    height: 95px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
  .eyebrow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8.2px;
    font-weight: 800;
    letter-spacing: 0.55px;
    color: #44403C;
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
    letter-spacing: 0.7px;
  }
  .masthead-title {
    margin: -7px 0 -6px;
    font-family: 'Noto Serif', 'DejaVu Serif', 'Liberation Serif', Georgia, serif;
    font-size: 58px;
    font-weight: 700;
    line-height: 1.36;
    letter-spacing: -1.0px;
    color: #111110;
    white-space: nowrap;
  }
  .masthead-deck {
    margin: 0;
    font-family: 'Ubuntu Sans', 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 11.4px;
    line-height: 1.18;
    color: #1C1917;
    white-space: nowrap;
  }
  .double-rule {
    border-top: 2.2px solid #141413;
    border-bottom: 1px solid #C8BFA8;
    height: 3px;
  }

  /* === BAND 2: REGION BAR + 24H UTC TIMELINE === */
  .ribbon {
    height: 43px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1.5px solid #141413;
    padding-bottom: 2px;
  }
  .reg-bar {
    height: 15px;
    width: 100%;
    display: flex;
    border-radius: 2px;
    overflow: hidden;
    border: 0.6px solid #A89F8D;
  }
  .reg-seg {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8.1px;
    font-weight: 800;
    color: #FFFFFF;
    white-space: nowrap;
    letter-spacing: 0.25px;
    border-right: 0.8px solid rgba(255,255,255,0.45);
  }
  .reg-seg:last-child { border-right: none; }

  .utc-row {
    display: flex;
    align-items: center;
    height: 26px;
  }
  .ribbon-label-red {
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 7.4px;
    font-weight: 800;
    letter-spacing: 0.4px;
    padding: 3px 5px;
    border-radius: 1.5px;
    width: 78px;
    text-align: center;
    flex-shrink: 0;
    margin-right: 8px;
  }
  .utc-track {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
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
    font-size: 8.3px;
  }
  .utc-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #B91C1C;
    flex-shrink: 0;
  }
  .utc-time { font-weight: 800; color: #B91C1C; }
  .utc-title { font-weight: 800; color: #141413; white-space: nowrap; }
  .utc-detail { font-size: 7.4px; color: #44403C; padding-left: 8px; white-space: nowrap; }

  /* === BAND 3: 3 HERO LEADS (18.5-20px BOLD) === */
  .leads-grid {
    height: 206px;
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
    padding: 4px 6.5px;
    display: flex;
    flex-direction: column;
    height: 206px;
    overflow: hidden;
  }
  .lead-art {
    width: 100%;
    height: 86px;
    margin-bottom: 3px;
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
    font-size: 7.3px;
    font-weight: 800;
    white-space: nowrap;
  }
  .num-pill {
    color: #FFFFFF;
    padding: 0.5px 4px;
    border-radius: 1.5px;
    font-size: 7.5px;
    font-weight: 800;
  }
  .region-tag { letter-spacing: 0.2px; }
  .dateline-tag { color: #44403C; font-weight: 700; }
  .lead-headline {
    margin: 0 0 3px;
    font-family: 'Noto Serif', 'DejaVu Serif', 'Liberation Serif', Georgia, serif;
    font-size: 18.5px;
    font-weight: 700;
    line-height: 1.11;
    letter-spacing: -0.25px;
    color: #111110;
  }
  .lead-summary {
    margin: 0;
    font-size: 9.35px;
    line-height: 1.22;
    color: #1C1917;
  }
  .inline-src {
    color: #57534E;
    font-style: italic;
    font-size: 8.5px;
  }

  /* === BAND 4: 10 FEATURES (2x5 GRID, 12.5px BOLD + 1-LINE SUMMARY) === */
  .features-grid {
    height: 252px;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 123px);
    gap: 6px 8px;
  }
  .feature-card {
    background: #F4EFE4;
    border: 1px solid #C8BFA8;
    border-top-width: 2.8px;
    border-radius: 2px;
    padding: 3.5px 5.5px;
    display: flex;
    flex-direction: column;
    height: 123px;
    overflow: hidden;
  }
  .feature-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
    height: 12px;
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
    padding: 0 3.5px;
    border-radius: 1.5px;
    font-size: 7.2px;
    font-weight: 800;
    line-height: 11px;
  }
  .feature-loc {
    font-size: 7.4px;
    font-weight: 800;
    color: #292524;
    white-space: nowrap;
    overflow: hidden;
  }
  .feature-art {
    width: 100%;
    height: 48px;
    margin-bottom: 2px;
    border-radius: 1.5px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .feature-headline {
    margin: 0 0 1.5px;
    font-family: 'Noto Serif', 'DejaVu Serif', 'Liberation Serif', Georgia, serif;
    font-size: 12.5px;
    font-weight: 700;
    line-height: 1.11;
    letter-spacing: -0.15px;
    color: #111110;
  }
  .feature-summary {
    margin: 0;
    font-size: 7.55px;
    line-height: 1.24;
    color: #292524;
    white-space: nowrap;
    overflow: hidden;
    flex-shrink: 0;
  }
  .feature-footer {
    margin-top: auto;
    padding-top: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7.1px;
  }
  .feature-src {
    color: #57534E;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
  }
  .feature-field {
    font-weight: 800;
    white-space: nowrap;
  }

  /* === EPISTEMIC BADGES === */
  .ep-group { display: flex; align-items: center; gap: 3px; flex-shrink: 0; }
  .ep-badge, .ep-badge-sm {
    font-weight: 800;
    border-radius: 2px;
    letter-spacing: 0.2px;
    flex-shrink: 0;
  }
  .ep-badge { font-size: 6.9px; padding: 1px 4px; }
  .ep-badge-sm { font-size: 6.3px; padding: 0.5px 3.5px; line-height: 10px; }
  .ep-official  { background: #DBEAFE; color: #1E3A8A; }
  .ep-confirmed { background: #DCFCE7; color: #14532D; }
  .ep-reported  { background: #FEF3C7; color: #92400E; }
  .ep-ongoing   { background: #FFEDD5; color: #7C2D12; }
  .ep-claim     { background: #FEE2E2; color: #991B1B; }

  /* === BAND 5: LOWER DECK (MAP+LEGEND LEFT | 3-COL BRIEFS RIGHT) === */
  .lower-deck {
    height: 345px;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: 234px 1fr;
    gap: 8px;
  }
  .left-lower {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 345px;
  }
  .map-panel {
    height: 188px;
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
  .panel-title { font-size: 8.2px; font-weight: 800; letter-spacing: 0.4px; color: #141413; }
  .panel-sub { font-size: 6.9px; color: #44403C; font-weight: 700; }
  .map-box { height: 134px; width: 100%; flex-shrink: 0; }
  .how-sure {
    margin-top: auto;
    border-top: 0.6px solid #D8CEB8;
    padding-top: 3px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5px 4px;
    font-size: 6.7px;
    color: #2B2A27;
  }
  .hs-item { display: inline-flex; align-items: center; gap: 3px; white-space: nowrap; }

  .how-to-read {
    flex: 1;
    background: #F4EFE4;
    border: 1px solid #C8BFA8;
    border-left: 3px solid #B91C1C;
    border-radius: 2px;
    padding: 4px 6.5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3px;
    overflow: hidden;
  }
  .htr-hdr {
    font-size: 8.1px;
    font-weight: 800;
    letter-spacing: 0.4px;
    color: #991B1B;
    border-bottom: 1px solid #D8CEB8;
    padding-bottom: 1.5px;
  }
  .htr-body {
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-size: 7.7px;
    line-height: 1.2;
    color: #292524;
  }
  .kf-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
  }
  .kf-cell {
    background: #FAF6EE;
    border: 0.6px solid #D8CEB8;
    border-radius: 1.5px;
    padding: 2px 3px;
    text-align: center;
  }
  .kf-val { font-size: 9.8px; font-weight: 800; color: #B91C1C; line-height: 1.05; }
  .kf-lbl { font-size: 6.5px; font-weight: 700; color: #44403C; line-height: 1.05; }

  /* === 35 BRIEFS IN 3 CLEAN COLUMNS (8.9-9.0px) === */
  .briefs-panel {
    height: 345px;
    background: #F4EFE4;
    border: 1px solid #C8BFA8;
    border-radius: 2px;
    padding: 4px 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .briefs-hdr {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1.6px solid #141413;
    padding-bottom: 2px;
    margin-bottom: 2.5px;
    flex-shrink: 0;
  }
  .briefs-title {
    font-family: 'Noto Serif', 'DejaVu Serif', 'Liberation Serif', Georgia, serif;
    font-size: 10.6px;
    font-weight: 700;
    color: #141413;
  }
  .briefs-sub {
    font-size: 7.4px;
    font-weight: 800;
    color: #44403C;
    letter-spacing: 0.3px;
  }
  .briefs-cols {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    overflow: hidden;
  }
  .briefs-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
    overflow: hidden;
  }
  .briefs-col:not(:last-child) {
    border-right: 1px solid #D8CEB8;
    padding-right: 6px;
  }
  .brief-group {
    display: flex;
    flex-direction: column;
    gap: 1.5px;
  }
  .brief-group-hdr {
    font-size: 7.8px;
    font-weight: 800;
    letter-spacing: 0.4px;
    border-left: 3.5px solid;
    padding-left: 4px;
    margin-bottom: 0.5px;
    background: #EAE2D2;
    line-height: 11.5px;
  }
  .brief-item {
    font-size: 8.85px;
    line-height: 1.13;
    color: #1C1917;
  }
  .b-id { font-weight: 800; }
  .b-src { color: #57534E; font-style: italic; font-size: 8.0px; }

  /* === BAND 6: FULL-WIDTH HORIZONTAL DATE CHECK STRIP === */
  .date-check {
    height: 49px;
    flex-shrink: 0;
    background: #FDF8F6;
    border: 1.6px solid #B91C1C;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .dc-hdr {
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 7.6px;
    font-weight: 800;
    letter-spacing: 0.45px;
    padding: 1.5px 7px;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
  }
  .dc-body {
    padding: 2px 7px;
    font-size: 7.75px;
    line-height: 1.22;
    color: #1C1917;
    display: flex;
    align-items: center;
    flex: 1;
  }
  .dc-win {
    font-weight: 800;
    color: #991B1B;
    background: #FEE2E2;
    padding: 0 3px;
    border-radius: 1.5px;
  }

  /* === BAND 7: COLOPHON === */
  .colophon {
    height: 11px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7.1px;
    font-weight: 700;
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
    <h1 class="masthead-title">${esc(EDITION_DATE)}</h1>
    <p class="masthead-deck">111 missiles &amp; 404 drones hit Kyiv bridges · AI rout sinks S&amp;P 500 3.7% &amp; Nvidia 14% · Cyclone Akvan spares Odisha · Missiles enter Poland</p>
    <div class="double-rule"></div>
  </header>

  <section class="ribbon" aria-label="Regional coverage and 24-hour UTC timeline">
    <div class="reg-bar">${regionBarHtml}</div>
    <div class="utc-row">
      <div class="ribbon-label-red">THE DAY IN UTC</div>
      <div class="utc-track">${utcHtml}</div>
    </div>
  </section>

  <section class="leads-grid" aria-label="Lead stories">
    ${leads.map(renderLeadCard).join('\n    ')}
  </section>

  <section class="features-grid" aria-label="Illustrated feature stories">
    ${features.map(renderFeatureCard).join('\n    ')}
  </section>

  <section class="lower-deck" aria-label="World map and 35 regional briefs">
    <div class="left-lower">
      <div class="map-panel">
        <div class="panel-hdr">
          <span class="panel-title">WHERE IT HAPPENED</span>
          <span class="panel-sub">Pins 1–13 · Dots 14–46</span>
        </div>
        <div class="map-box">${renderWorldMap(STORIES)}</div>
        <div class="how-sure">
          <span class="hs-item"><span class="ep-badge-sm ep-official">OFFICIAL</span> Gov/Agency</span>
          <span class="hs-item"><span class="ep-badge-sm ep-confirmed">CONFIRMED</span> Multi-wire</span>
          <span class="hs-item"><span class="ep-badge-sm ep-reported">REPORTED</span> Single/Trial</span>
          <span class="hs-item"><span class="ep-badge-sm ep-ongoing">ONGOING</span> Active talks</span>
        </div>
      </div>

      <div class="how-to-read">
        <div class="htr-hdr">KEY FIGURES &amp; 17-FIELD INDEX</div>
        <div class="kf-grid">
          <div class="kf-cell"><div class="kf-val">111+404</div><div class="kf-lbl">Kyiv barrage</div></div>
          <div class="kf-cell"><div class="kf-val">−3.7%</div><div class="kf-lbl">S&amp;P 500 close</div></div>
          <div class="kf-cell"><div class="kf-val">−14%</div><div class="kf-lbl">Nvidia plunge</div></div>
          <div class="kf-cell"><div class="kf-val">300k+</div><div class="kf-lbl">Odisha evac.</div></div>
          <div class="kf-cell"><div class="kf-val">100k</div><div class="kf-lbl">UK–EU visas</div></div>
          <div class="kf-cell"><div class="kf-val">60.7%</div><div class="kf-lbl">Cancer ORR</div></div>
        </div>
        <div class="htr-body">
          <div><strong>17 Fields (48):</strong> Markets 8 · War 6 · Security 4 · Diplomacy 4 · Sport 4 · Economy 4 · Climate 2 · Energy 2 · Labour 2 · Rights 2 · Courts 2 · Politics 2 · Tech 2 · Weather 1 · Health 1 · Society 1 · Disasters 1.</div>
          <div><strong>Editorial rule:</strong> Every event occurred or was first reported Fri 20 Nov 2026; single-outlet reports separated from multi-wire facts.</div>
        </div>
      </div>
    </div>

    <div class="briefs-panel">
      <div class="briefs-hdr">
        <span class="briefs-title">ALSO ON FRIDAY 20 NOVEMBER — 35 VERIFIED BRIEFS, BY REGION</span>
        <span class="briefs-sub">7 REGIONS · 17 FIELDS · WIRE SOURCES CITED</span>
      </div>
      <div class="briefs-cols">
        <div class="briefs-col" id="briefs-col-1">
          ${col1Regions.map((r) => renderBriefGroup(r, briefs)).join('\n          ')}
        </div>
        <div class="briefs-col" id="briefs-col-2">
          ${col2Regions.map((r) => renderBriefGroup(r, briefs)).join('\n          ')}
        </div>
        <div class="briefs-col" id="briefs-col-3">
          ${col3Regions.map((r) => renderBriefGroup(r, briefs)).join('\n          ')}
        </div>
      </div>
    </div>
  </section>

  <section class="date-check" aria-label="Excluded near-date stories">
    <div class="dc-hdr">
      <span>DATE CHECK — EXCLUDED NEAR-DATE EVENTS (ZERO OVERLAP WITH #1–#48)</span>
      <span>100% FRIDAY 20 NOV 2026 ANY TIME ZONE</span>
    </div>
    <div class="dc-body"><div>${dateCheckHtml}</div></div>
  </section>

  <footer class="colophon">
    <span>Every story occurred, or was first reported, on Friday 20 November 2026 · Claims attributed, no speculation shown as fact</span>
    <span>Original vector graphics · Wire &amp; official sources cited throughout</span>
  </footer>
</div>
</body>
</html>`;
}
