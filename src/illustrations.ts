export function drawIllustration(id: number): string {
  switch (id) {
    case 1:
      return drawKyiv();
    case 2:
      return drawAiRout();
    case 3:
      return drawCycloneAkvan();
    case 4:
      return drawPolandRadar();
    case 5:
      return drawUkEuDeal();
    case 6:
      return drawCop31();
    case 7:
      return drawHormuzTanker();
    case 8:
      return drawIraqJurf();
    case 9:
      return drawScoDialogue();
    case 10:
      return drawKenyaOil();
    case 11:
      return drawItalyStrike();
    case 12:
      return drawDaraxonrasib();
    case 13:
      return drawArgentinaRisk();
    case 14:
      return drawBrazilAmazon();
    case 15:
      return drawWellingtonCricket();
    default:
      throw new Error(`No illustration defined for story #${id}`);
  }
}

function drawKyiv(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 108" width="100%" height="100%" role="img" aria-label="Kyiv Dnipro bridges under missile barrage">
  <defs>
    <linearGradient id="ill1-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#06101E"/>
      <stop offset="65%" stop-color="#0D213B"/>
      <stop offset="100%" stop-color="#172A45"/>
    </linearGradient>
    <linearGradient id="ill1-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0B192C"/>
      <stop offset="100%" stop-color="#07111F"/>
    </linearGradient>
    <radialGradient id="ill1-blast" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FEF08A"/>
      <stop offset="40%" stop-color="#F97316"/>
      <stop offset="80%" stop-color="#DC2626" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#DC2626" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="322" height="108" fill="url(#ill1-sky)"/>
  <!-- Stars & subtle searchlight cones -->
  <circle cx="28" cy="14" r="0.8" fill="#CBD5E1" opacity="0.7"/>
  <circle cx="88" cy="11" r="0.9" fill="#CBD5E1" opacity="0.5"/>
  <circle cx="152" cy="18" r="0.7" fill="#CBD5E1" opacity="0.6"/>
  <circle cx="236" cy="12" r="0.9" fill="#CBD5E1" opacity="0.6"/>
  <circle cx="298" cy="20" r="0.8" fill="#CBD5E1" opacity="0.5"/>
  <polygon points="48,72 72,8 86,8" fill="#93C5FD" opacity="0.06"/>
  <polygon points="274,72 248,6 262,6" fill="#93C5FD" opacity="0.06"/>
  <!-- Left & Right Bank City Skyline -->
  <path d="M0,72 L0,52 L14,52 L14,44 L24,44 L24,56 L36,56 L36,41 L46,41 L46,54 L60,54 L60,48 L72,48 L72,72 Z" fill="#091322"/>
  <path d="M250,72 L250,51 L262,51 L262,40 L274,40 L274,55 L286,55 L286,45 L298,45 L298,53 L310,53 L310,43 L322,43 L322,72 Z" fill="#091322"/>
  <!-- Tiny lit windows (sparse dark blackout) -->
  <rect x="17" y="48" width="2" height="2" fill="#FBBF24" opacity="0.7"/>
  <rect x="39" y="45" width="2" height="2" fill="#FBBF24" opacity="0.5"/>
  <rect x="266" y="45" width="2" height="2" fill="#FBBF24" opacity="0.6"/>
  <rect x="290" y="49" width="2" height="2" fill="#FBBF24" opacity="0.4"/>

  <!-- Dnipro River -->
  <rect x="0" y="72" width="322" height="36" fill="url(#ill1-water)"/>
  <!-- Amber fire reflection ripples on Dnipro -->
  <ellipse cx="78" cy="83" rx="22" ry="3.2" fill="#F59E0B" opacity="0.32"/>
  <ellipse cx="164" cy="86" rx="26" ry="3.6" fill="#F97316" opacity="0.35"/>
  <ellipse cx="246" cy="84" rx="24" ry="3.2" fill="#F59E0B" opacity="0.30"/>
  <line x1="54" y1="88" x2="104" y2="88" stroke="#FBBF24" stroke-width="0.9" opacity="0.45"/>
  <line x1="138" y1="91" x2="190" y2="91" stroke="#FB923C" stroke-width="1" opacity="0.45"/>
  <line x1="224" y1="89" x2="270" y2="89" stroke="#FBBF24" stroke-width="0.9" opacity="0.45"/>

  <!-- Bridge 1 (Left): Podilsko-Voskresenskyi Arch Bridge -->
  <line x1="14" y1="70" x2="112" y2="70" stroke="#94A3B8" stroke-width="2.2"/>
  <path d="M28,70 Q63,38 98,70" fill="none" stroke="#CBD5E1" stroke-width="2.6"/>
  <line x1="44" y1="56" x2="44" y2="70" stroke="#94A3B8" stroke-width="0.9"/>
  <line x1="54" y1="50" x2="54" y2="70" stroke="#94A3B8" stroke-width="0.9"/>
  <line x1="63" y1="48" x2="63" y2="70" stroke="#94A3B8" stroke-width="0.9"/>
  <line x1="72" y1="50" x2="72" y2="70" stroke="#94A3B8" stroke-width="0.9"/>
  <line x1="82" y1="56" x2="82" y2="70" stroke="#94A3B8" stroke-width="0.9"/>
  <rect x="25" y="70" width="5" height="9" fill="#334155"/>
  <rect x="96" y="70" width="5" height="9" fill="#334155"/>

  <!-- Bridge 2 (Center): Darnytskyi Truss Bridge -->
  <line x1="114" y1="72" x2="212" y2="72" stroke="#94A3B8" stroke-width="2.2"/>
  <path d="M122,72 L128,60 L146,60 L152,72 M152,72 L158,60 L176,60 L182,72 M182,72 L188,60 L204,60 L210,72" fill="none" stroke="#CBD5E1" stroke-width="1.3"/>
  <path d="M128,60 L137,72 L146,60 M158,60 L167,72 L176,60 M188,60 L196,72 L204,60" fill="none" stroke="#94A3B8" stroke-width="0.8"/>
  <rect x="149" y="72" width="5" height="10" fill="#334155"/>
  <rect x="180" y="72" width="5" height="10" fill="#334155"/>

  <!-- Bridge 3 (Right): Pivdennyi Cable-Stayed Bridge -->
  <line x1="210" y1="71" x2="314" y2="71" stroke="#94A3B8" stroke-width="2.3"/>
  <path d="M254,71 L260,31 L266,71" fill="none" stroke="#E2E8F0" stroke-width="2.6"/>
  <line x1="257" y1="45" x2="263" y2="45" stroke="#E2E8F0" stroke-width="1.5"/>
  <!-- Cable stays -->
  <g stroke="#CBD5E1" stroke-width="0.8" opacity="0.9">
    <line x1="260" y1="33" x2="220" y2="71"/>
    <line x1="260" y1="33" x2="232" y2="71"/>
    <line x1="260" y1="33" x2="244" y2="71"/>
    <line x1="260" y1="33" x2="276" y2="71"/>
    <line x1="260" y1="33" x2="288" y2="71"/>
    <line x1="260" y1="33" x2="300" y2="71"/>
  </g>
  <rect x="257" y="71" width="6" height="11" fill="#334155"/>

  <!-- Incoming Missile & Drone Trajectory Arcs -->
  <path d="M18,6 Q46,24 68,54" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="4 2.5"/>
  <path d="M118,4 Q146,28 164,58" fill="none" stroke="#FB923C" stroke-width="1.6" stroke-dasharray="4 2.5"/>
  <path d="M214,8 Q232,30 245,56" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="4 2.5"/>
  <path d="M296,10 Q278,34 268,55" fill="none" stroke="#FACC15" stroke-width="1.2" stroke-dasharray="2.5 2.5"/>

  <!-- Impact Explosion Bursts -->
  <circle cx="68" cy="56" r="14" fill="url(#ill1-blast)"/>
  <circle cx="164" cy="60" r="16" fill="url(#ill1-blast)"/>
  <circle cx="246" cy="58" r="14" fill="url(#ill1-blast)"/>
  <polygon points="68,48 70,54 76,55 71,58 72,64 68,60 63,64 65,58 60,55 66,54" fill="#FEF9C3"/>
  <polygon points="164,51 166,58 173,59 167,62 169,69 164,64 159,69 161,62 155,59 162,58" fill="#FEF9C3"/>
  <polygon points="246,50 248,56 254,57 249,60 250,66 246,62 241,66 243,60 238,57 244,56" fill="#FEF9C3"/>

  <!-- Top-left region label pill -->
  <rect x="7" y="6" width="120" height="14" rx="2" fill="#091322" fill-opacity="0.86" stroke="#334155" stroke-width="0.7"/>
  <circle cx="14" cy="13" r="2.6" fill="#EF4444"/>
  <text x="20" y="15.7" font-family="'Noto Sans', sans-serif" font-size="7.4" font-weight="700" fill="#F8FAFC" letter-spacing="0.4">KYIV · DNIPRO CROSSINGS</text>

  <!-- Bottom high-contrast data pill -->
  <rect x="64" y="88" width="194" height="15" rx="2.5" fill="#091322" fill-opacity="0.92" stroke="#EF4444" stroke-width="0.9"/>
  <text x="161" y="98.3" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="7.8" font-weight="700" fill="#FEF2F2" letter-spacing="0.5">111 MISSILES · 404 DRONES · 3 BRIDGES</text>
</svg>`;
}

function drawAiRout(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 108" width="100%" height="100%" role="img" aria-label="Global AI market rout terminal chart">
  <defs>
    <linearGradient id="ill2-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#09111E"/>
      <stop offset="100%" stop-color="#111C2E"/>
    </linearGradient>
    <linearGradient id="ill2-area" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EF4444" stop-opacity="0.48"/>
      <stop offset="100%" stop-color="#EF4444" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <rect width="322" height="108" fill="url(#ill2-bg)"/>
  <!-- Chart Grid (Left 190px) -->
  <g stroke="#1E293B" stroke-width="0.7">
    <line x1="10" y1="22" x2="188" y2="22"/>
    <line x1="10" y1="42" x2="188" y2="42"/>
    <line x1="10" y1="62" x2="188" y2="62"/>
    <line x1="10" y1="82" x2="188" y2="82"/>
    <line x1="48" y1="16" x2="48" y2="92"/>
    <line x1="96" y1="16" x2="96" y2="92"/>
    <line x1="144" y1="16" x2="144" y2="92"/>
  </g>
  <!-- Previous close dashed baseline -->
  <line x1="10" y1="25" x2="188" y2="25" stroke="#64748B" stroke-width="0.8" stroke-dasharray="3 2"/>
  <text x="12" y="13" font-family="'Noto Sans', sans-serif" font-size="7.2" font-weight="700" fill="#94A3B8" letter-spacing="0.5">GLOBAL TECH SELL-OFF · 20 NOV</text>

  <!-- Plunging Area + Crimson Crash Line -->
  <polygon points="12,25 32,29 50,41 68,38 86,56 106,53 124,69 144,66 164,84 182,91 182,94 12,94" fill="url(#ill2-area)"/>
  <polyline points="12,25 32,29 50,41 68,38 86,56 106,53 124,69 144,66 164,84 182,91" fill="none" stroke="#EF4444" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  <!-- Crash endpoint glow -->
  <circle cx="182" cy="91" r="5" fill="#EF4444" opacity="0.35"/>
  <circle cx="182" cy="91" r="2.6" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.2"/>

  <!-- Time labels -->
  <text x="12" y="103" font-family="'Noto Sans', sans-serif" font-size="6.4" fill="#64748B">05:30 ASIA</text>
  <text x="84" y="103" font-family="'Noto Sans', sans-serif" font-size="6.4" fill="#64748B">14:30 NY</text>
  <text x="150" y="103" font-family="'Noto Sans', sans-serif" font-size="6.4" fill="#FCA5A5" font-weight="700">21:00 CLOSE</text>

  <!-- Correction callout badge in clear upper-right chart quadrant -->
  <rect x="104" y="30" width="80" height="12.5" rx="2" fill="#7F1D1D" fill-opacity="0.90" stroke="#EF4444" stroke-width="0.7"/>
  <text x="144" y="38.8" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.6" font-weight="700" fill="#FEE2E2">S&amp;P CORRECTION</text>

  <!-- Right Index Scoreboard Panel -->
  <rect x="196" y="7" width="119" height="94" rx="3" fill="#0D1626" stroke="#334155" stroke-width="0.9"/>
  <text x="203" y="17.5" font-family="'Noto Sans', sans-serif" font-size="6.7" font-weight="700" fill="#94A3B8" letter-spacing="0.5">INDEX / STOCK CLOSE</text>
  <line x1="202" y1="21" x2="309" y2="21" stroke="#1E293B" stroke-width="0.8"/>

  <!-- Row 1: S&P 500 -->
  <text x="203" y="33" font-family="'Noto Sans', sans-serif" font-size="8.0" font-weight="700" fill="#E2E8F0">S&amp;P 500</text>
  <text x="308" y="33" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="8.4" font-weight="700" fill="#F87171">−3.7%</text>

  <!-- Row 2: NASDAQ -->
  <text x="203" y="48" font-family="'Noto Sans', sans-serif" font-size="8.0" font-weight="700" fill="#E2E8F0">NASDAQ</text>
  <text x="308" y="48" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="8.4" font-weight="700" fill="#F87171">−5.3%</text>

  <!-- Row 3: NVIDIA highlighted -->
  <rect x="200" y="53.5" width="111" height="14.5" rx="1.8" fill="#7F1D1D" fill-opacity="0.55" stroke="#EF4444" stroke-width="0.6"/>
  <text x="204" y="63.5" font-family="'Noto Sans', sans-serif" font-size="8.2" font-weight="700" fill="#FFFFFF">NVIDIA</text>
  <text x="307" y="63.5" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="8.7" font-weight="700" fill="#FCA5A5">−14.0%</text>

  <!-- Row 4: TAIEX -->
  <text x="203" y="79" font-family="'Noto Sans', sans-serif" font-size="8.0" font-weight="700" fill="#E2E8F0">TAIEX</text>
  <text x="308" y="79" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="8.4" font-weight="700" fill="#F87171">−6.2%</text>

  <!-- Row 5: KOSPI -->
  <text x="203" y="94" font-family="'Noto Sans', sans-serif" font-size="8.0" font-weight="700" fill="#E2E8F0">KOSPI</text>
  <text x="308" y="94" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="8.4" font-weight="700" fill="#F87171">−5.2%</text>
</svg>`;
}

function drawCycloneAkvan(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 108" width="100%" height="100%" role="img" aria-label="Cyclone Akvan landfall near Gopalpur Odisha">
  <defs>
    <linearGradient id="ill3-sea" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1A4B69"/>
      <stop offset="100%" stop-color="#0D2A3E"/>
    </linearGradient>
    <radialGradient id="ill3-eye" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FEF3C7"/>
      <stop offset="35%" stop-color="#F8FAFC" stop-opacity="0.85"/>
      <stop offset="70%" stop-color="#38BDF8" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Bay of Bengal Ocean -->
  <rect width="322" height="108" fill="url(#ill3-sea)"/>
  <!-- Subtle sea bathymetry lines -->
  <path d="M120,108 Q185,78 242,108" fill="none" stroke="#38BDF8" stroke-width="0.6" opacity="0.2"/>
  <path d="M150,108 Q225,52 315,72" fill="none" stroke="#38BDF8" stroke-width="0.6" opacity="0.2"/>
  <text x="256" y="99" font-family="'Noto Sans', sans-serif" font-size="7" font-weight="700" fill="#7DD3FC" opacity="0.7" letter-spacing="0.8">BAY OF BENGAL</text>

  <!-- Odisha / East India Landmass -->
  <path d="M0,0 L236,0 L218,18 L194,35 L168,53 L144,68 L114,88 L88,108 L0,108 Z" fill="#E6D7B9" stroke="#8C7355" stroke-width="1.3"/>
  <!-- Inland subtle terrain contour -->
  <path d="M0,16 L186,16 Q142,46 92,80 L48,108 L0,108 Z" fill="#DCC9A4" opacity="0.55"/>
  <text x="114" y="21" font-family="'Noto Sans', sans-serif" font-size="7.6" font-weight="700" fill="#574631" letter-spacing="1.2">ODISHA, INDIA</text>

  <!-- Rain hatching streaks over coastal Ganjam / Patrapur -->
  <g stroke="#BAE6FD" stroke-width="0.9" opacity="0.45">
    <line x1="128" y1="36" x2="116" y2="52"/>
    <line x1="140" y1="34" x2="128" y2="50"/>
    <line x1="152" y1="38" x2="140" y2="54"/>
    <line x1="136" y1="54" x2="124" y2="70"/>
    <line x1="148" y1="56" x2="136" y2="72"/>
    <line x1="160" y1="52" x2="148" y2="68"/>
  </g>

  <!-- Spiral Cyclone Vortex centered on Gopalpur (168, 53) -->
  <circle cx="168" cy="53" r="36" fill="url(#ill3-eye)"/>
  <g transform="translate(168,53)" fill="none" stroke-linecap="round">
    <path d="M-4,-6 C12,-24 38,-14 34,12" stroke="#F8FAFC" stroke-width="2.4" opacity="0.9"/>
    <path d="M6,4 C22,22 -6,38 -28,22" stroke="#E0F2FE" stroke-width="2.2" opacity="0.85"/>
    <path d="M-6,6 C-26,18 -38,-12 -18,-30" stroke="#F8FAFC" stroke-width="2.2" opacity="0.85"/>
    <path d="M4,-10 C20,-18 28,2 16,18" stroke="#BAE6FD" stroke-width="1.5" opacity="0.8"/>
    <circle cx="0" cy="0" r="9.5" stroke="#FEF08A" stroke-width="1.4" stroke-dasharray="3 2"/>
    <circle cx="0" cy="0" r="3.4" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
  </g>

  <!-- Forecast/Landfall Track Arrow from Bay of Bengal to Gopalpur -->
  <path d="M276,84 Q226,72 174,56" fill="none" stroke="#EF4444" stroke-width="2.1" stroke-dasharray="5 3"/>
  <polygon points="171,55 180,53 177,61" fill="#EF4444"/>
  <circle cx="276" cy="84" r="2.6" fill="#FCA5A5" stroke="#991B1B" stroke-width="0.9"/>
  <circle cx="226" cy="71" r="2.3" fill="#FCA5A5" stroke="#991B1B" stroke-width="0.9"/>

  <!-- Gopalpur Town Label -->
  <rect x="86" y="47" width="60" height="13" rx="2" fill="#141413" fill-opacity="0.88"/>
  <text x="116" y="56.3" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="7.3" font-weight="700" fill="#FEF08A">GOPALPUR</text>

  <!-- Telemetry Callout Card (Left lower corner) -->
  <rect x="8" y="69" width="150" height="32" rx="2.5" fill="#0B1B2B" fill-opacity="0.93" stroke="#38BDF8" stroke-width="0.8"/>
  <text x="14" y="80" font-family="'Noto Sans', sans-serif" font-size="7.2" font-weight="700" fill="#E0F2FE">LANDFALL 02:00 UTC · 209 MM RAIN</text>
  <rect x="14" y="84.5" width="138" height="12.5" rx="1.8" fill="#14532D"/>
  <text x="83" y="93.2" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="7.1" font-weight="700" fill="#DCFCE7">&gt;300K EVACUATED · 0 DEATHS</text>
</svg>`;
}

function drawPolandRadar(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="Poland NATO radar border intercept">
  <rect width="158" height="50" fill="#0B1E1A"/>
  <!-- Radar rings centered left -->
  <circle cx="52" cy="28" r="14" fill="none" stroke="#15803D" stroke-width="0.7" opacity="0.6"/>
  <circle cx="52" cy="28" r="26" fill="none" stroke="#15803D" stroke-width="0.7" opacity="0.45"/>
  <circle cx="52" cy="28" r="38" fill="none" stroke="#15803D" stroke-width="0.7" opacity="0.35"/>
  <!-- Sweep wedge -->
  <path d="M52,28 L24,4 L68,2 Z" fill="#22C55E" opacity="0.16"/>
  <!-- Border dividing Poland (left) and Ukraine (right) -->
  <path d="M90,0 Q84,25 94,50" fill="none" stroke="#FACC15" stroke-width="1.3" stroke-dasharray="3 2"/>
  <text x="8" y="10" font-family="'Noto Sans', sans-serif" font-size="6.4" font-weight="700" fill="#93C5FD">POLAND (NATO)</text>
  <text x="100" y="10" font-family="'Noto Sans', sans-serif" font-size="6.4" font-weight="700" fill="#FCA5A5">UKRAINE</text>
  <!-- 2 Kh-101 missiles crossing into SE Poland -->
  <path d="M126,18 Q98,17 62,21" fill="none" stroke="#EF4444" stroke-width="1.2" stroke-dasharray="2.5 1.8"/>
  <path d="M128,31 Q100,30 66,33" fill="none" stroke="#FB923C" stroke-width="1.2" stroke-dasharray="2.5 1.8"/>
  <polygon points="56,21 65,18.5 63,21 65,23.5" fill="#FCA5A5"/>
  <polygon points="60,33 69,30.5 67,33 69,35.5" fill="#FDBA74"/>
  <!-- NATO interceptor delta jet -->
  <polygon points="36,27 24,22 27,27 24,32" fill="#60A5FA"/>
  <line x1="20" y1="27" x2="26" y2="27" stroke="#93C5FD" stroke-width="1" stroke-dasharray="2 1"/>
  <!-- Tag -->
  <rect x="86" y="36" width="68" height="11" rx="1.8" fill="#091512" stroke="#EF4444" stroke-width="0.7"/>
  <text x="120" y="43.8" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.3" font-weight="700" fill="#FEE2E2">2 KH-101 + DRONE</text>
</svg>`;
}

function drawUkEuDeal(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="UK EU reset deal">
  <rect width="158" height="50" fill="#0F2557"/>
  <!-- Left UK Union Jack corner accent -->
  <rect x="0" y="0" width="60" height="35" fill="#012169"/>
  <line x1="0" y1="0" x2="60" y2="35" stroke="#FFFFFF" stroke-width="4.5"/>
  <line x1="60" y1="0" x2="0" y2="35" stroke="#FFFFFF" stroke-width="4.5"/>
  <line x1="0" y1="0" x2="60" y2="35" stroke="#C8102E" stroke-width="2"/>
  <line x1="60" y1="0" x2="0" y2="35" stroke="#C8102E" stroke-width="2"/>
  <line x1="30" y1="0" x2="30" y2="35" stroke="#FFFFFF" stroke-width="7"/>
  <line x1="0" y1="17.5" x2="60" y2="17.5" stroke="#FFFFFF" stroke-width="7"/>
  <line x1="30" y1="0" x2="30" y2="35" stroke="#C8102E" stroke-width="4"/>
  <line x1="0" y1="17.5" x2="60" y2="17.5" stroke="#C8102E" stroke-width="4"/>
  <!-- Right EU 12-star ring -->
  <rect x="98" y="0" width="60" height="35" fill="#1D4ED8"/>
  <g transform="translate(128,17.5)" fill="#FACC15">
    <circle cx="0" cy="-11" r="1.4"/><circle cx="5.5" cy="-9.5" r="1.4"/><circle cx="9.5" cy="-5.5" r="1.4"/>
    <circle cx="11" cy="0" r="1.4"/><circle cx="9.5" cy="5.5" r="1.4"/><circle cx="5.5" cy="9.5" r="1.4"/>
    <circle cx="0" cy="11" r="1.4"/><circle cx="-5.5" cy="9.5" r="1.4"/><circle cx="-9.5" cy="5.5" r="1.4"/>
    <circle cx="-11" cy="0" r="1.4"/><circle cx="-9.5" cy="-5.5" r="1.4"/><circle cx="-5.5" cy="-9.5" r="1.4"/>
  </g>
  <!-- Central diplomatic bridge seal -->
  <circle cx="79" cy="18" r="13.5" fill="#FAF6EE" stroke="#FACC15" stroke-width="1.6"/>
  <path d="M71,19 L76,14 L82,19 L87,15" fill="none" stroke="#0F2557" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="79" y="26.2" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.4" font-weight="700" fill="#1D4ED8">RESET</text>
  <!-- Bottom Ribbon -->
  <rect x="6" y="36" width="146" height="11.5" rx="2" fill="#091534" stroke="#FACC15" stroke-width="0.7"/>
  <text x="79" y="44" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.8" font-weight="700" fill="#FEF08A" letter-spacing="0.4">100K VISAS · SPS · ETS</text>
</svg>`;
}

function drawCop31(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="COP31 climate talks overtime deadlock">
  <defs>
    <linearGradient id="ill6-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="158" height="50" fill="url(#ill6-bg)"/>
  <!-- Globe left -->
  <circle cx="30" cy="23" r="15.5" fill="#0EA5E9" fill-opacity="0.25" stroke="#38BDF8" stroke-width="1.2"/>
  <ellipse cx="30" cy="23" rx="7" ry="15.5" fill="none" stroke="#38BDF8" stroke-width="0.7" opacity="0.7"/>
  <line x1="14.5" y1="23" x2="45.5" y2="23" stroke="#38BDF8" stroke-width="0.7" opacity="0.7"/>
  <path d="M22,15 Q29,12 35,17 Q33,24 26,26 Z" fill="#15803D" opacity="0.85"/>
  <!-- Clock past deadline (center) -->
  <circle cx="80" cy="21" r="13.5" fill="#FEF3C7" stroke="#DC2626" stroke-width="2"/>
  <line x1="80" y1="21" x2="80" y2="11" stroke="#141413" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="80" y1="21" x2="88" y2="15" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="80" cy="21" r="1.5" fill="#141413"/>
  <!-- Red arc indicating overtime -->
  <path d="M80,7.5 A13.5,13.5 0 0,1 92,15" fill="none" stroke="#DC2626" stroke-width="3"/>
  <!-- Thermometer right -->
  <rect x="114" y="7" width="6" height="22" rx="3" fill="#334155" stroke="#94A3B8" stroke-width="0.8"/>
  <circle cx="117" cy="30" r="4.8" fill="#EF4444" stroke="#94A3B8" stroke-width="0.8"/>
  <rect x="115.5" y="11" width="3" height="19" rx="1.5" fill="#EF4444"/>
  <text x="152" y="18" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="6.4" font-weight="700" fill="#FDBA74">COP31</text>
  <text x="152" y="27" text-anchor="end" font-family="'Noto Sans', sans-serif" font-size="5.4" font-weight="700" fill="#FED7AA">ANTALYA</text>
  <!-- Bottom Banner -->
  <rect x="8" y="36.5" width="142" height="11" rx="2" fill="#991B1B"/>
  <text x="79" y="44.3" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.7" font-weight="700" fill="#FEF2F2" letter-spacing="0.5">NO DEAL · OVERTIME</text>
</svg>`;
}

function drawHormuzTanker(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="Tanker ablaze near Strait of Hormuz">
  <rect width="158" height="50" fill="#102C44"/>
  <!-- Iran North Shore & Oman Musandam Peninsula -->
  <path d="M0,0 L158,0 L158,13 Q114,22 72,14 Q36,10 0,18 Z" fill="#D6C29F" stroke="#786346" stroke-width="0.9"/>
  <path d="M62,50 Q80,26 98,35 L118,50 Z" fill="#C9B089" stroke="#786346" stroke-width="0.9"/>
  <text x="12" y="10" font-family="'Noto Sans', sans-serif" font-size="5.6" font-weight="700" fill="#574631">IRAN</text>
  <circle cx="84" cy="38" r="1.7" fill="#141413"/>
  <text x="90" y="42" font-family="'Noto Sans', sans-serif" font-size="5.5" font-weight="700" fill="#141413">KHASAB</text>
  <!-- Tanker silhouette -->
  <polygon points="36,31 74,31 78,27 32,27" fill="#1E293B" stroke="#94A3B8" stroke-width="0.7"/>
  <rect x="64" y="23" width="7" height="4" fill="#CBD5E1"/>
  <!-- Fire & Smoke plume -->
  <path d="M46,27 Q39,17 24,14 Q35,10 52,18 Q56,22 54,27 Z" fill="#334155" opacity="0.85"/>
  <path d="M45,27 C43,21 47,16 50,15 C51,19 54,21 52,27 Z" fill="#EA580C"/>
  <path d="M47,27 C46,23 48,20 50,19 C51,22 52,24 50,27 Z" fill="#FDE047"/>
  <!-- Brent price badge -->
  <rect x="97" y="19" width="56" height="14" rx="2" fill="#0B1320" stroke="#F59E0B" stroke-width="0.9"/>
  <text x="125" y="28.3" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.8" font-weight="700" fill="#FEF08A">$92.57 BRENT</text>
</svg>`;
}

function drawIraqJurf(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="Iraqi army enters Jurf al-Sakhar">
  <defs>
    <linearGradient id="ill8-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FDE68A"/>
      <stop offset="60%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
  </defs>
  <rect width="158" height="50" fill="url(#ill8-sky)"/>
  <!-- Desert dunes & town gate right -->
  <path d="M0,36 Q55,30 112,35 L158,34 L158,50 L0,50 Z" fill="#78350F"/>
  <!-- Fortified archway / gate -->
  <rect x="116" y="16" width="36" height="22" fill="#451A03"/>
  <path d="M126,38 L126,25 A8,8 0 0,1 142,25 L142,38 Z" fill="#F59E0B" opacity="0.45"/>
  <!-- Iraqi tri-band shield top-left -->
  <g transform="translate(8,6)">
    <rect width="26" height="5.5" fill="#DC2626"/>
    <rect y="5.5" width="26" height="5.5" fill="#FFFFFF"/>
    <rect y="11" width="26" height="5.5" fill="#141413"/>
    <rect x="9" y="6.8" width="8" height="3" rx="1" fill="#15803D"/>
    <rect width="26" height="16.5" fill="none" stroke="#141413" stroke-width="0.7"/>
  </g>
  <!-- Convoy armored vehicles -->
  <g fill="#1C1917">
    <rect x="14" y="30" width="19" height="6.5" rx="1.2"/>
    <circle cx="19" cy="37" r="2.2"/><circle cx="28" cy="37" r="2.2"/>
    <rect x="42" y="29" width="22" height="7.5" rx="1.2"/>
    <circle cx="48" cy="37" r="2.3"/><circle cx="58" cy="37" r="2.3"/>
    <rect x="74" y="29" width="23" height="7.5" rx="1.2"/>
    <circle cx="80" cy="37" r="2.3"/><circle cx="91" cy="37" r="2.3"/>
  </g>
  <!-- Bottom badge -->
  <rect x="14" y="38.5" width="130" height="10" rx="1.5" fill="#141413" fill-opacity="0.88"/>
  <text x="79" y="45.8" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.4" font-weight="700" fill="#FEF3C7" letter-spacing="0.5">JURF AL-SAKHAR · IRAQ ARMY</text>
</svg>`;
}

function drawScoDialogue(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="Pakistan minister visits New Delhi for SCO forum">
  <rect width="158" height="50" fill="#1E293B"/>
  <!-- Connecting corridor arc -->
  <path d="M36,24 Q79,7 122,24" fill="none" stroke="#FBBF24" stroke-width="1.8" stroke-dasharray="3.5 2"/>
  <circle cx="36" cy="24" r="3" fill="#22C55E" stroke="#FFFFFF" stroke-width="1"/>
  <circle cx="122" cy="24" r="3" fill="#F97316" stroke="#FFFFFF" stroke-width="1"/>
  <!-- Left Pakistan flag badge -->
  <rect x="10" y="7" width="24" height="14" rx="1.2" fill="#15803D" stroke="#CBD5E1" stroke-width="0.6"/>
  <rect x="10" y="7" width="6" height="14" fill="#FFFFFF"/>
  <circle cx="24" cy="14" r="3.6" fill="#FFFFFF"/>
  <circle cx="25.2" cy="13.4" r="2.9" fill="#15803D"/>
  <!-- Right India flag badge -->
  <rect x="124" y="7" width="24" height="14" rx="1.2" stroke="#CBD5E1" stroke-width="0.6" fill="#FFFFFF"/>
  <rect x="124" y="7" width="24" height="4.6" fill="#F97316"/>
  <rect x="124" y="16.4" width="24" height="4.6" fill="#15803D"/>
  <circle cx="136" cy="14" r="1.9" fill="none" stroke="#1D4ED8" stroke-width="0.9"/>
  <!-- Labels -->
  <text x="36" y="33.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="5.8" font-weight="700" fill="#BBF7D0">ISLAMABAD</text>
  <text x="122" y="33.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="5.8" font-weight="700" fill="#FED7AA">NEW DELHI</text>
  <!-- Center emblem -->
  <rect x="44" y="37" width="70" height="10.5" rx="2" fill="#0F172A" stroke="#FBBF24" stroke-width="0.7"/>
  <text x="79" y="44.4" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.4" font-weight="700" fill="#FEF08A">SCO FORUM · THAW</text>
</svg>`;
}

function drawKenyaOil(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="Kenya South Lokichar oil drilling">
  <defs>
    <linearGradient id="ill10-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7C2D12"/>
      <stop offset="55%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#FBBF24"/>
    </linearGradient>
  </defs>
  <rect width="158" height="50" fill="url(#ill10-sky)"/>
  <!-- Horizon sun -->
  <circle cx="116" cy="31" r="13" fill="#FEF08A" opacity="0.55"/>
  <!-- Ground ridge -->
  <path d="M0,37 L158,37 L158,50 L0,50 Z" fill="#1C1917"/>
  <!-- Steel Oil Derrick Silhouette -->
  <path d="M56,37 L64,7 L70,7 L78,37 M59,28 L75,28 M61,20 L73,20 M62.5,13 L71.5,13" fill="none" stroke="#141413" stroke-width="1.6"/>
  <line x1="60" y1="28" x2="73" y2="20" stroke="#141413" stroke-width="1"/>
  <line x1="74" y1="28" x2="61" y2="20" stroke="#141413" stroke-width="1"/>
  <rect x="86" y="29" width="16" height="8" rx="1" fill="#292524"/>
  <!-- Kenyan accent ribbon top-left -->
  <rect x="6" y="6" width="22" height="3.5" fill="#141413"/>
  <rect x="6" y="9.5" width="22" height="3.5" fill="#DC2626"/>
  <rect x="6" y="13" width="22" height="3.5" fill="#15803D"/>
  <!-- Bottom badge -->
  <rect x="26" y="38.5" width="106" height="9.5" rx="1.5" fill="#292524" stroke="#FBBF24" stroke-width="0.6"/>
  <text x="79" y="45.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.3" font-weight="700" fill="#FEF3C7">TURKANA · FIRST DRILLING</text>
</svg>`;
}

function drawItalyStrike(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="CGIL Italy 24h general strike">
  <rect width="158" height="50" fill="#F5EFE6"/>
  <!-- Italian Tricolore top/left bar -->
  <rect x="0" y="0" width="5" height="50" fill="#15803D"/>
  <rect x="5" y="0" width="4" height="50" fill="#FFFFFF"/>
  <rect x="9" y="0" width="5" height="50" fill="#B91C1C"/>
  <!-- Piazza building colonnade silhouette -->
  <rect x="14" y="4" width="144" height="14" fill="#D6CEC0"/>
  <g fill="#F5EFE6">
    <rect x="24" y="8" width="8" height="10" rx="4"/>
    <rect x="40" y="8" width="8" height="10" rx="4"/>
    <rect x="56" y="8" width="8" height="10" rx="4"/>
    <rect x="72" y="8" width="8" height="10" rx="4"/>
    <rect x="88" y="8" width="8" height="10" rx="4"/>
    <rect x="104" y="8" width="8" height="10" rx="4"/>
    <rect x="120" y="8" width="8" height="10" rx="4"/>
    <rect x="136" y="8" width="8" height="10" rx="4"/>
  </g>
  <!-- Marching crowd & protest placards -->
  <g fill="#292524">
    <circle cx="28" cy="28" r="3"/><rect x="25" y="31" width="6" height="8"/>
    <circle cx="44" cy="27" r="3"/><rect x="41" y="30" width="6" height="9"/>
    <circle cx="62" cy="28" r="3"/><rect x="59" y="31" width="6" height="8"/>
    <circle cx="80" cy="26" r="3.2"/><rect x="77" y="29.5" width="6" height="9.5"/>
    <circle cx="98" cy="28" r="3"/><rect x="95" y="31" width="6" height="8"/>
    <circle cx="116" cy="27" r="3"/><rect x="113" y="30" width="6" height="9"/>
    <circle cx="136" cy="28" r="3"/><rect x="133" y="31" width="6" height="8"/>
  </g>
  <!-- Raised placards -->
  <line x1="36" y1="21" x2="36" y2="33" stroke="#141413" stroke-width="1.2"/>
  <rect x="28" y="15" width="16" height="7" fill="#DC2626"/>
  <line x1="108" y1="20" x2="108" y2="32" stroke="#141413" stroke-width="1.2"/>
  <rect x="100" y="14" width="16" height="7" fill="#15803D"/>
  <!-- Banner -->
  <rect x="18" y="37" width="134" height="11" rx="1.8" fill="#B91C1C"/>
  <text x="85" y="44.8" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.8" font-weight="700" fill="#FFFFFF" letter-spacing="0.5">SCIOPERO · 100+ CITIES</text>
</svg>`;
}

function drawDaraxonrasib(): string {
  // 60.7% of circumference (r=15 -> C=94.25 -> 57.21)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="Daraxonrasib trial 60.7% response">
  <rect width="158" height="50" fill="#0B2933"/>
  <!-- Faint molecular nodes -->
  <g stroke="#14B8A6" stroke-width="0.6" opacity="0.28" fill="none">
    <circle cx="22" cy="14" r="4"/><circle cx="38" cy="10" r="3"/><line x1="25.5" y1="12.8" x2="35" y2="10.8"/>
    <circle cx="18" cy="36" r="3.5"/><line x1="21" y1="18" x2="19" y2="32.5"/>
  </g>
  <!-- Dual-tone biopharma capsule (rotated) -->
  <g transform="translate(48,25) rotate(-28)">
    <rect x="-24" y="-8.5" width="24" height="17" rx="8.5" fill="#2DD4BF"/>
    <rect x="0" y="-8.5" width="24" height="17" rx="8.5" fill="#F8FAFC"/>
    <rect x="-2" y="-8.5" width="4" height="17" fill="#0F766E"/>
    <line x1="-16" y1="-4.5" x2="14" y2="-4.5" stroke="#FFFFFF" stroke-width="1.4" opacity="0.5" stroke-linecap="round"/>
  </g>
  <!-- Radial Gauge Ring 60.7% -->
  <g transform="translate(119,25)">
    <circle r="17" fill="#081E26" stroke="#1E3A44" stroke-width="4.2"/>
    <circle r="17" fill="none" stroke="#10B981" stroke-width="4.2" stroke-dasharray="64.8 106.8" stroke-linecap="round" transform="rotate(-90)"/>
    <text y="1.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="8.2" font-weight="700" fill="#ECFDF5">60.7%</text>
    <text y="9.2" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="4.8" font-weight="700" fill="#6EE7B7">RESPONSE</text>
  </g>
</svg>`;
}

function drawArgentinaRisk(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="Argentina country risk surges 15% to 1,070">
  <rect width="158" height="50" fill="#111827"/>
  <!-- Semicircular Gauge Arc -->
  <g transform="translate(46,39)">
    <path d="M-34,0 A34,34 0 0,1 -14,-31" fill="none" stroke="#16A34A" stroke-width="6"/>
    <path d="M-12,-32 A34,34 0 0,1 14,-31" fill="none" stroke="#F59E0B" stroke-width="6"/>
    <path d="M16,-30 A34,34 0 0,1 34,0" fill="none" stroke="#DC2626" stroke-width="6.5"/>
    <!-- Needle swung to red zone (~15 deg above right horizontal) -->
    <line x1="0" y1="0" x2="29" y2="-11" stroke="#F8FAFC" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="0" cy="0" r="4" fill="#E2E8F0"/>
    <circle cx="0" cy="0" r="1.8" fill="#DC2626"/>
  </g>
  <!-- Right numeric panel -->
  <text x="120" y="18" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.0" font-weight="700" fill="#94A3B8">RIESGO PAÍS</text>
  <text x="120" y="32" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="13.5" font-weight="700" fill="#FCA5A5">1,070</text>
  <rect x="100" y="35.5" width="40" height="10.5" rx="1.8" fill="#991B1B"/>
  <text x="120" y="43" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.6" font-weight="700" fill="#FEF2F2">+15% SURGE</text>
</svg>`;
}

function drawBrazilAmazon(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="Brazil recognizes Kapot Nhinore Indigenous land">
  <rect width="158" height="50" fill="#064E3B"/>
  <!-- Sky strip -->
  <rect width="158" height="16" fill="#0F766E" opacity="0.5"/>
  <!-- Layered Rainforest Canopy -->
  <path d="M0,26 Q14,12 28,22 Q44,10 60,21 Q78,8 96,20 Q114,9 132,21 Q146,13 158,20 L158,50 L0,50 Z" fill="#047857"/>
  <path d="M0,34 Q20,21 38,31 Q58,19 76,30 Q98,18 118,31 Q138,22 158,31 L158,50 L0,50 Z" fill="#065F46"/>
  <!-- Golden Winding River Ribbon -->
  <path d="M0,45 Q38,34 74,40 T158,31 L158,38 Q112,48 72,44 T0,50 Z" fill="#FBBF24" opacity="0.9"/>
  <!-- Demarcated Territory Seal -->
  <rect x="26" y="7" width="106" height="23" rx="2.5" fill="#FAF6EE" fill-opacity="0.94" stroke="#B45309" stroke-width="1.2"/>
  <text x="79" y="17" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="7.2" font-weight="700" fill="#064E3B" letter-spacing="0.4">KAPOT NHINORE</text>
  <text x="79" y="25.5" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="5.8" font-weight="700" fill="#92400E">INDIGENOUS TITLE · BRAZIL</text>
</svg>`;
}

function drawWellingtonCricket(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50" width="100%" height="100%" role="img" aria-label="New Zealand cricket 118 and 175 not out">
  <rect width="158" height="50" fill="#14532D"/>
  <!-- Mowed outfield stripes -->
  <rect x="0" y="0" width="26" height="50" fill="#166534"/>
  <rect x="52" y="0" width="26" height="50" fill="#166534"/>
  <rect x="104" y="0" width="26" height="50" fill="#166534"/>
  <!-- Oval boundary ring -->
  <ellipse cx="79" cy="25" rx="71" ry="21" fill="none" stroke="#BBF7D0" stroke-width="0.9" stroke-dasharray="3 2" opacity="0.7"/>
  <!-- Central wicket pitch strip -->
  <rect x="24" y="17" width="58" height="16" rx="1.5" fill="#E7DFC6" stroke="#A89F81" stroke-width="0.7"/>
  <!-- Three Stumps & Bails -->
  <g stroke="#FDE047" stroke-width="1.4" stroke-linecap="round">
    <line x1="34" y1="19" x2="34" y2="30"/>
    <line x1="38" y1="19" x2="38" y2="30"/>
    <line x1="42" y1="19" x2="42" y2="30"/>
    <line x1="33.5" y1="18.8" x2="42.5" y2="18.8"/>
  </g>
  <!-- Cricket Bat silhouette -->
  <g transform="translate(64,24) rotate(-25)">
    <rect x="-1.5" y="-12" width="3" height="8" fill="#141413"/>
    <rect x="-4" y="-4" width="8" height="15" rx="1.5" fill="#D97706" stroke="#78350F" stroke-width="0.7"/>
  </g>
  <!-- Red cricket ball arc -->
  <path d="M72,22 Q92,6 106,14" fill="none" stroke="#FCA5A5" stroke-width="1.1" stroke-dasharray="2.5 2"/>
  <circle cx="107" cy="14" r="2.7" fill="#DC2626" stroke="#FFFFFF" stroke-width="0.6"/>
  <!-- Scoreboard pill right -->
  <rect x="86" y="18" width="66" height="23" rx="2.5" fill="#052E16" fill-opacity="0.94" stroke="#4ADE80" stroke-width="0.9"/>
  <text x="119" y="28" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="6.0" font-weight="700" fill="#86EFAC">NZ vs INDIA</text>
  <text x="119" y="37.2" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="7.4" font-weight="700" fill="#FFFFFF">118 · 175* · 368</text>
</svg>`;
}
