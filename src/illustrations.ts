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
      return drawKenyaOil();
    case 10:
      return drawItalyStrike();
    case 11:
      return drawDaraxonrasib();
    case 12:
      return drawArgentinaRisk();
    case 13:
      return drawWellingtonCricket();
    default:
      throw new Error(`No illustration defined for story #${id}`);
  }
}

function drawKyiv(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318 102" width="100%" height="100%" role="img" aria-label="Kyiv Dnipro bridges under missile barrage">
  <rect width="318" height="102" fill="#0B192E"/>
  <rect x="0" y="66" width="318" height="36" fill="#06101E"/>
  <!-- Left & Right Bank City Skyline -->
  <path d="M0,66 L0,48 L12,48 L12,40 L22,40 L22,52 L34,52 L34,42 L44,42 L44,50 L58,50 L58,66 Z" fill="#07111F"/>
  <path d="M258,66 L258,48 L268,48 L268,38 L280,38 L280,50 L292,50 L292,41 L304,41 L304,49 L318,49 L318,66 Z" fill="#07111F"/>
  <!-- Fire reflections on Dnipro -->
  <ellipse cx="76" cy="74" rx="22" ry="3.2" fill="#F59E0B" opacity="0.45"/>
  <ellipse cx="160" cy="76" rx="26" ry="3.5" fill="#F97316" opacity="0.5"/>
  <ellipse cx="242" cy="74" rx="22" ry="3.2" fill="#F59E0B" opacity="0.45"/>
  <!-- Bridge 1: Arch -->
  <line x1="14" y1="64" x2="108" y2="64" stroke="#CBD5E1" stroke-width="2.4"/>
  <path d="M26,64 Q61,34 96,64" fill="none" stroke="#E2E8F0" stroke-width="2.6"/>
  <line x1="46" y1="49" x2="46" y2="64" stroke="#94A3B8" stroke-width="1"/>
  <line x1="61" y1="45" x2="61" y2="64" stroke="#94A3B8" stroke-width="1"/>
  <line x1="76" y1="49" x2="76" y2="64" stroke="#94A3B8" stroke-width="1"/>
  <!-- Bridge 2: Truss -->
  <line x1="112" y1="65" x2="206" y2="65" stroke="#CBD5E1" stroke-width="2.4"/>
  <path d="M120,65 L128,53 L146,53 L154,65 L162,53 L180,53 L188,65" fill="none" stroke="#E2E8F0" stroke-width="1.6"/>
  <!-- Bridge 3: Cable-stayed -->
  <line x1="208" y1="64" x2="310" y2="64" stroke="#CBD5E1" stroke-width="2.4"/>
  <path d="M254,64 L260,26 L266,64" fill="none" stroke="#F8FAFC" stroke-width="2.8"/>
  <line x1="260" y1="28" x2="222" y2="64" stroke="#CBD5E1" stroke-width="1"/>
  <line x1="260" y1="28" x2="238" y2="64" stroke="#CBD5E1" stroke-width="1"/>
  <line x1="260" y1="28" x2="282" y2="64" stroke="#CBD5E1" stroke-width="1"/>
  <line x1="260" y1="28" x2="298" y2="64" stroke="#CBD5E1" stroke-width="1"/>
  <!-- Trajectories -->
  <path d="M40,8 Q58,28 68,52" fill="none" stroke="#EF4444" stroke-width="2" stroke-dasharray="4 2.5"/>
  <path d="M138,4 Q152,28 160,54" fill="none" stroke="#FB923C" stroke-width="2" stroke-dasharray="4 2.5"/>
  <path d="M220,6 Q234,30 244,52" fill="none" stroke="#EF4444" stroke-width="2" stroke-dasharray="4 2.5"/>
  <!-- Crisp layered impact bursts -->
  <circle cx="68" cy="54" r="10" fill="#DC2626"/>
  <circle cx="68" cy="54" r="6" fill="#F97316"/>
  <polygon points="68,45 70,51 76,52 71,55 72,61 68,57 63,61 65,55 60,52 66,51" fill="#FEF08A"/>
  <circle cx="160" cy="56" r="11" fill="#DC2626"/>
  <circle cx="160" cy="56" r="6.5" fill="#F97316"/>
  <polygon points="160,46 162,53 169,54 163,57 165,64 160,59 155,64 157,57 151,54 158,53" fill="#FEF08A"/>
  <circle cx="244" cy="54" r="10" fill="#DC2626"/>
  <circle cx="244" cy="54" r="6" fill="#F97316"/>
  <polygon points="244,45 246,51 252,52 247,55 248,61 244,57 239,61 241,55 236,52 242,51" fill="#FEF08A"/>
  <!-- 300px-readable Display Header -->
  <rect x="6" y="5" width="76" height="22" rx="2.5" fill="#B91C1C"/>
  <text x="44" y="21.5" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="16.5" font-weight="800" fill="#FFFFFF" letter-spacing="0.4">KYIV</text>
  <rect x="86" y="5" width="124" height="22" rx="2.5" fill="#FFFFFF"/>
  <text x="148" y="20.5" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="12.2" font-weight="800" fill="#141413">3 BRIDGES HIT</text>
  <!-- Bottom High-Contrast Tally -->
  <rect x="24" y="79" width="270" height="19" rx="2.5" fill="#07111F" stroke="#F87171" stroke-width="1.2"/>
  <text x="159" y="92.5" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="11.2" font-weight="800" fill="#FFFFFF" letter-spacing="0.4">111 MISSILES · 404 DRONES</text>
</svg>`;
}

function drawAiRout(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318 102" width="100%" height="100%" role="img" aria-label="Global AI market rout terminal chart">
  <rect width="318" height="102" fill="#0D1524"/>
  <!-- Chart grid left -->
  <g stroke="#1E293B" stroke-width="0.9">
    <line x1="8" y1="30" x2="176" y2="30"/>
    <line x1="8" y1="52" x2="176" y2="52"/>
    <line x1="8" y1="74" x2="176" y2="74"/>
    <line x1="58" y1="26" x2="58" y2="88"/>
    <line x1="116" y1="26" x2="116" y2="88"/>
  </g>
  <!-- Top-left 300px Display Banner -->
  <rect x="6" y="5" width="90" height="21" rx="2.5" fill="#B91C1C"/>
  <text x="51" y="20.5" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="15.5" font-weight="800" fill="#FFFFFF">AI ROUT</text>
  <rect x="99" y="5" width="76" height="21" rx="2.5" fill="#1E293B" stroke="#EF4444" stroke-width="1"/>
  <text x="137" y="19.5" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="10.2" font-weight="800" fill="#FCA5A5">20 NOV</text>
  <!-- Crash trajectory -->
  <polygon points="10,33 34,37 56,47 78,45 100,62 122,59 144,76 168,85 168,90 10,90" fill="#7F1D1D" opacity="0.45"/>
  <polyline points="10,33 34,37 56,47 78,45 100,62 122,59 144,76 168,85" fill="none" stroke="#EF4444" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="168" cy="85" r="4" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.6"/>
  <text x="10" y="98" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.2" font-weight="700" fill="#94A3B8">ASIA −6.2%</text>
  <text x="172" y="98" text-anchor="end" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.2" font-weight="800" fill="#FCA5A5">NY CLOSE</text>
  <!-- Right Scoreboard: 4 large 300px-readable rows -->
  <rect x="182" y="5" width="130" height="92" rx="3" fill="#09111D" stroke="#334155" stroke-width="1"/>
  <text x="190" y="21" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="10.8" font-weight="800" fill="#E2E8F0">S&amp;P 500</text>
  <text x="306" y="21" text-anchor="end" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="11.2" font-weight="800" fill="#F87171">−3.7%</text>
  <text x="190" y="39" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="10.8" font-weight="800" fill="#E2E8F0">NASDAQ</text>
  <text x="306" y="39" text-anchor="end" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="11.2" font-weight="800" fill="#F87171">−5.3%</text>
  <rect x="186" y="45" width="122" height="23" rx="2.2" fill="#991B1B"/>
  <text x="192" y="61" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="12.2" font-weight="800" fill="#FFFFFF">NVIDIA</text>
  <text x="304" y="61" text-anchor="end" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="13.0" font-weight="800" fill="#FEF08A">−14%</text>
  <text x="190" y="85" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="10.8" font-weight="800" fill="#E2E8F0">TAIEX</text>
  <text x="306" y="85" text-anchor="end" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="11.2" font-weight="800" fill="#F87171">−6.2%</text>
</svg>`;
}

function drawCycloneAkvan(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318 102" width="100%" height="100%" role="img" aria-label="Cyclone Akvan landfall near Gopalpur Odisha">
  <!-- Bay of Bengal -->
  <rect width="318" height="102" fill="#134E6F"/>
  <!-- Odisha / East India Landmass -->
  <path d="M0,0 L246,0 L214,34 L178,62 L134,102 L0,102 Z" fill="#DFC9A4" stroke="#8C7355" stroke-width="1.4"/>
  <!-- Cyclone Spiral at Coast (210, 46) -->
  <g transform="translate(212,48)" fill="none" stroke-linecap="round">
    <circle cx="0" cy="0" r="33" fill="#0EA5E9" fill-opacity="0.22"/>
    <path d="M-5,-7 C14,-27 42,-16 36,12" stroke="#FFFFFF" stroke-width="3.2"/>
    <path d="M7,5 C24,25 -8,42 -32,23" stroke="#E0F2FE" stroke-width="3.0"/>
    <path d="M-7,7 C-28,19 -40,-14 -19,-32" stroke="#FFFFFF" stroke-width="3.0"/>
    <circle cx="0" cy="0" r="10.5" stroke="#FEF08A" stroke-width="2" stroke-dasharray="3.5 2"/>
    <circle cx="0" cy="0" r="4" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.4"/>
  </g>
  <!-- Storm track arrow -->
  <path d="M294,84 Q256,68 220,52" fill="none" stroke="#EF4444" stroke-width="2.6" stroke-dasharray="5 3"/>
  <polygon points="216,50 227,48 223,58" fill="#EF4444"/>
  <text x="312" y="96" text-anchor="end" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.6" font-weight="800" fill="#BAE6FD">BAY OF BENGAL</text>
  <!-- 300px-readable Display Header + Telemetry -->
  <rect x="6" y="5" width="174" height="22" rx="2.5" fill="#B91C1C"/>
  <text x="93" y="21" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="14.5" font-weight="800" fill="#FFFFFF">CYCLONE AKVAN</text>
  <rect x="6" y="32" width="112" height="17" rx="2" fill="#141413"/>
  <text x="62" y="44" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="9.8" font-weight="800" fill="#FEF08A">GOPALPUR · 02:00 UTC</text>
  <rect x="6" y="53" width="154" height="21" rx="2.2" fill="#FFFFFF" stroke="#15803D" stroke-width="1.2"/>
  <text x="83" y="68" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="11.6" font-weight="800" fill="#14532D">300K+ EVACUATED</text>
  <rect x="6" y="77" width="138" height="20" rx="2.2" fill="#14532D"/>
  <text x="75" y="91" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="11.0" font-weight="800" fill="#FFFFFF">0 DEATHS · 209 MM</text>
</svg>`;
}

// === 10 FEATURE ILLUSTRATIONS (2x5 GRID, viewBox="0 0 184 52") ===
// Each uses a clean flat vector icon on the left (~62px) and GIANT 300px-readable text on the right!

function drawPolandRadar(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 52" width="100%" height="100%" role="img" aria-label="Poland NATO radar intercept">
  <rect width="184" height="52" fill="#0B1E1A"/>
  <!-- Left radar & missile icon -->
  <circle cx="30" cy="26" r="18" fill="none" stroke="#16A34A" stroke-width="1.2" opacity="0.65"/>
  <circle cx="30" cy="26" r="10" fill="none" stroke="#22C55E" stroke-width="1" opacity="0.65"/>
  <line x1="56" y1="0" x2="56" y2="52" stroke="#FACC15" stroke-width="1.5" stroke-dasharray="3 2"/>
  <path d="M52,18 L24,20" stroke="#EF4444" stroke-width="2"/>
  <polygon points="18,20 27,16.5 25,20 27,23.5" fill="#FCA5A5"/>
  <path d="M52,33 L28,35" stroke="#FB923C" stroke-width="2"/>
  <polygon points="22,35 31,31.5 29,35 31,38.5" fill="#FDBA74"/>
  <!-- Giant 300px Display Text -->
  <text x="122" y="27" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="20.5" font-weight="800" fill="#FFFFFF">2 KH-101</text>
  <rect x="66" y="34" width="112" height="13" rx="2" fill="#991B1B"/>
  <text x="122" y="43.5" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.8" font-weight="800" fill="#FEF2F2">+ DRONE IN POLAND</text>
</svg>`;
}

function drawUkEuDeal(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 52" width="100%" height="100%" role="img" aria-label="UK EU reset deal">
  <rect width="184" height="52" fill="#0F2557"/>
  <!-- UK mini flag -->
  <rect x="6" y="7" width="32" height="22" fill="#012169" stroke="#FFFFFF" stroke-width="0.7"/>
  <line x1="6" y1="7" x2="38" y2="29" stroke="#FFFFFF" stroke-width="3"/>
  <line x1="38" y1="7" x2="6" y2="29" stroke="#FFFFFF" stroke-width="3"/>
  <line x1="6" y1="7" x2="38" y2="29" stroke="#C8102E" stroke-width="1.5"/>
  <line x1="38" y1="7" x2="6" y2="29" stroke="#C8102E" stroke-width="1.5"/>
  <line x1="22" y1="7" x2="22" y2="29" stroke="#FFFFFF" stroke-width="5"/>
  <line x1="6" y1="18" x2="38" y2="18" stroke="#FFFFFF" stroke-width="5"/>
  <line x1="22" y1="7" x2="22" y2="29" stroke="#C8102E" stroke-width="2.6"/>
  <line x1="6" y1="18" x2="38" y2="18" stroke="#C8102E" stroke-width="2.6"/>
  <!-- EU mini flag -->
  <rect x="44" y="7" width="32" height="22" fill="#1D4ED8" stroke="#FFFFFF" stroke-width="0.7"/>
  <g transform="translate(60,18)" fill="#FACC15">
    <circle cx="0" cy="-7" r="1.1"/><circle cx="5" cy="-5" r="1.1"/><circle cx="7" cy="0" r="1.1"/>
    <circle cx="5" cy="5" r="1.1"/><circle cx="0" cy="7" r="1.1"/><circle cx="-5" cy="5" r="1.1"/>
    <circle cx="-7" cy="0" r="1.1"/><circle cx="-5" cy="-5" r="1.1"/>
  </g>
  <!-- Giant 300px Display Text -->
  <text x="130" y="26" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="20.5" font-weight="800" fill="#FFFFFF">UK–EU</text>
  <rect x="6" y="34" width="172" height="14" rx="2" fill="#FACC15"/>
  <text x="92" y="44.2" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="9.2" font-weight="800" fill="#0F2557">RESET · 100K VISAS</text>
</svg>`;
}

function drawCop31(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 52" width="100%" height="100%" role="img" aria-label="COP31 climate talks overtime deadlock">
  <rect width="184" height="52" fill="#1E293B"/>
  <!-- Globe + Overtime Clock (clean 3px separation) -->
  <circle cx="22" cy="24" r="14.5" fill="#0284C7" stroke="#7DD3FC" stroke-width="1.2"/>
  <path d="M15,17 Q22,14 28,19 Q26,26 19,27 Z" fill="#16A34A"/>
  <circle cx="54" cy="24" r="13.5" fill="#FEF3C7" stroke="#DC2626" stroke-width="2.4"/>
  <line x1="54" y1="24" x2="54" y2="14.5" stroke="#141413" stroke-width="2" stroke-linecap="round"/>
  <line x1="54" y1="24" x2="62" y2="19.5" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
  <!-- Giant 300px Display Text -->
  <text x="128" y="26" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="19.5" font-weight="800" fill="#FFFFFF">NO DEAL</text>
  <rect x="75" y="33" width="103" height="14" rx="2" fill="#B91C1C"/>
  <text x="126.5" y="43.2" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="9.0" font-weight="800" fill="#FFFFFF">COP31 OVERTIME</text>
</svg>`;
}

function drawHormuzTanker(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 52" width="100%" height="100%" role="img" aria-label="Tanker ablaze near Strait of Hormuz">
  <rect width="184" height="52" fill="#0F2940"/>
  <path d="M0,40 L184,40 L184,52 L0,52 Z" fill="#091B2C"/>
  <!-- Tanker + Blaze -->
  <polygon points="10,39 66,39 71,32 6,32" fill="#334155" stroke="#94A3B8" stroke-width="0.9"/>
  <rect x="54" y="25" width="9" height="7" fill="#E2E8F0"/>
  <path d="M24,32 Q18,16 6,10 Q22,7 36,19 Q38,26 35,32 Z" fill="#475569"/>
  <path d="M24,32 C21,22 27,16 31,14 C33,21 36,24 33,32 Z" fill="#EA580C"/>
  <path d="M26,32 C25,26 28,22 30,20 C32,24 32,27 30,32 Z" fill="#FDE047"/>
  <!-- Giant 300px Display Text -->
  <text x="128" y="27" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="22.0" font-weight="800" fill="#FEF08A">$92.57</text>
  <rect x="76" y="33" width="102" height="14" rx="2" fill="#B45309"/>
  <text x="127" y="43.2" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.8" font-weight="800" fill="#FFFFFF">HORMUZ TANKER</text>
</svg>`;
}

function drawIraqJurf(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 52" width="100%" height="100%" role="img" aria-label="Iraqi army enters Jurf al-Sakhar">
  <rect width="184" height="52" fill="#B45309"/>
  <rect x="0" y="33" width="184" height="19" fill="#5C2808"/>
  <!-- Iraqi Flag -->
  <g transform="translate(8,7)">
    <rect width="38" height="7.5" fill="#DC2626"/>
    <rect y="7.5" width="38" height="7.5" fill="#FFFFFF"/>
    <rect y="15" width="38" height="7.5" fill="#141413"/>
    <rect x="13" y="9.3" width="12" height="3.8" rx="1" fill="#15803D"/>
  </g>
  <!-- Convoy -->
  <g fill="#1C1917">
    <rect x="10" y="34" width="22" height="7" rx="1"/>
    <circle cx="15" cy="42" r="2.3"/><circle cx="26" cy="42" r="2.3"/>
    <rect x="38" y="34" width="22" height="7" rx="1"/>
    <circle cx="43" cy="42" r="2.3"/><circle cx="54" cy="42" r="2.3"/>
  </g>
  <!-- Giant 300px Display Text -->
  <text x="124" y="27" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="22.0" font-weight="800" fill="#FFFFFF">IRAQ</text>
  <rect x="68" y="34" width="110" height="14" rx="2" fill="#141413"/>
  <text x="123" y="44" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.6" font-weight="800" fill="#FEF3C7">JURF AL-SAKHAR</text>
</svg>`;
}

function drawKenyaOil(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 52" width="100%" height="100%" role="img" aria-label="Kenya South Lokichar oil drilling">
  <rect width="184" height="52" fill="#9A3412"/>
  <rect x="0" y="38" width="184" height="14" fill="#1C1917"/>
  <!-- Kenyan color band left -->
  <rect x="0" y="0" width="7" height="17" fill="#141413"/>
  <rect x="0" y="17" width="7" height="17" fill="#DC2626"/>
  <rect x="0" y="34" width="7" height="18" fill="#15803D"/>
  <!-- Oil Derrick -->
  <path d="M22,38 L31,7 L39,7 L48,38 M25,28 L45,28 M27,19 L43,19" fill="none" stroke="#FEF3C7" stroke-width="2"/>
  <line x1="25" y1="28" x2="43" y2="19" stroke="#FEF3C7" stroke-width="1.2"/>
  <line x1="45" y1="28" x2="27" y2="19" stroke="#FEF3C7" stroke-width="1.2"/>
  <!-- Giant 300px Display Text -->
  <text x="120" y="26" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="20.0" font-weight="800" fill="#FEF08A">OIL WELL</text>
  <rect x="62" y="33" width="116" height="14" rx="2" fill="#14532D"/>
  <text x="120" y="43.2" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.8" font-weight="800" fill="#FFFFFF">TURKANA, KENYA</text>
</svg>`;
}

function drawItalyStrike(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 52" width="100%" height="100%" role="img" aria-label="CGIL Italy 24h general strike">
  <rect width="184" height="52" fill="#EFE8DA"/>
  <!-- Italian Tricolore -->
  <rect x="0" y="0" width="8" height="52" fill="#15803D"/>
  <rect x="8" y="0" width="8" height="52" fill="#FFFFFF"/>
  <rect x="16" y="0" width="8" height="52" fill="#B91C1C"/>
  <!-- Crowd silhouettes -->
  <g fill="#292524">
    <circle cx="34" cy="24" r="4"/><rect x="30" y="29" width="8" height="14"/>
    <circle cx="48" cy="22" r="4.2"/><rect x="44" y="27" width="8" height="16"/>
    <circle cx="62" cy="24" r="4"/><rect x="58" y="29" width="8" height="14"/>
  </g>
  <!-- Giant 300px Display Text -->
  <rect x="74" y="5" width="104" height="25" rx="2.5" fill="#B91C1C"/>
  <text x="126" y="24" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="19.5" font-weight="800" fill="#FFFFFF">STRIKE</text>
  <rect x="74" y="33" width="104" height="14" rx="2" fill="#141413"/>
  <text x="126" y="43.2" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.8" font-weight="800" fill="#FFFFFF">ITALY · 100+ CITIES</text>
</svg>`;
}

function drawDaraxonrasib(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 52" width="100%" height="100%" role="img" aria-label="Daraxonrasib trial 60.7% response">
  <rect width="184" height="52" fill="#0B2933"/>
  <!-- Pill capsule + radial progress -->
  <g transform="translate(36,26) rotate(-25)">
    <rect x="-22" y="-8" width="22" height="16" rx="8" fill="#2DD4BF"/>
    <rect x="0" y="-8" width="22" height="16" rx="8" fill="#F8FAFC"/>
    <rect x="-2" y="-8" width="4" height="16" fill="#0F766E"/>
  </g>
  <!-- Giant 300px Display Text -->
  <text x="124" y="27" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="22.5" font-weight="800" fill="#6EE7B7">60.7%</text>
  <rect x="70" y="33" width="108" height="14" rx="2" fill="#0F766E"/>
  <text x="124" y="43.2" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.8" font-weight="800" fill="#FFFFFF">CANCER RESPONSE</text>
</svg>`;
}

function drawArgentinaRisk(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 52" width="100%" height="100%" role="img" aria-label="Argentina country risk surges 15% to 1,070">
  <rect width="184" height="52" fill="#111827"/>
  <!-- Gauge Arc -->
  <g transform="translate(38,40)">
    <path d="M-26,0 A26,26 0 0,1 -10,-24" fill="none" stroke="#16A34A" stroke-width="5.5"/>
    <path d="M-8,-25 A26,26 0 0,1 10,-24" fill="none" stroke="#F59E0B" stroke-width="5.5"/>
    <path d="M12,-23 A26,26 0 0,1 26,0" fill="none" stroke="#DC2626" stroke-width="6"/>
    <line x1="0" y1="0" x2="22" y2="-9" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="0" cy="0" r="3.5" fill="#EF4444"/>
  </g>
  <!-- Giant 300px Display Text -->
  <text x="124" y="27" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="22.5" font-weight="800" fill="#FCA5A5">1,070</text>
  <rect x="74" y="33" width="104" height="14" rx="2" fill="#991B1B"/>
  <text x="126" y="43.2" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.8" font-weight="800" fill="#FFFFFF">RISK +15% ARG</text>
</svg>`;
}

function drawWellingtonCricket(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 52" width="100%" height="100%" role="img" aria-label="New Zealand cricket 118 and 175 not out">
  <rect width="184" height="52" fill="#14532D"/>
  <!-- Pitch & Stumps & Bat -->
  <rect x="8" y="8" width="48" height="36" rx="2" fill="#166534" stroke="#86EFAC" stroke-width="0.9"/>
  <g stroke="#FDE047" stroke-width="2" stroke-linecap="round">
    <line x1="20" y1="15" x2="20" y2="37"/>
    <line x1="26" y1="15" x2="26" y2="37"/>
    <line x1="32" y1="15" x2="32" y2="37"/>
    <line x1="19" y1="14.5" x2="33" y2="14.5"/>
  </g>
  <circle cx="46" cy="20" r="4.5" fill="#DC2626" stroke="#FFFFFF" stroke-width="0.8"/>
  <!-- Giant 300px Display Text -->
  <text x="122" y="27" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="20.5" font-weight="800" fill="#FFFFFF">118 · 175*</text>
  <rect x="64" y="33" width="114" height="14" rx="2" fill="#052E16" stroke="#4ADE80" stroke-width="0.9"/>
  <text x="121" y="43.2" text-anchor="middle" font-family="'Ubuntu Sans', 'Noto Sans', sans-serif" font-size="8.8" font-weight="800" fill="#86EFAC">NZ 368 vs INDIA</text>
</svg>`;
}
