// 共用：頁首頁尾、風景插畫、格式化工具

const W = 400, H = 180;

// 由折線點產生封閉的山形路徑；smooth 為 true 時用曲線連接，做出丘陵感
function ridge(points, smooth) {
  let d = `M0,${H} L${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const [x, y] = points[i];
    if (smooth) {
      const [px, py] = points[i - 1];
      d += ` Q${px + (x - px) / 2},${py} ${x},${y}`;
    } else {
      d += ` L${x},${y}`;
    }
  }
  return `<path d="${d} L${W},${H} Z"`;
}

function layer(points, color, smooth) {
  return `${ridge(points, smooth)} fill="${color}"/>`;
}

function snowCaps(peaks, color = "#fff") {
  // peaks: [x, y, 寬度]
  return peaks.map(([x, y, w]) =>
    `<path d="M${x - w},${y + w * 1.1} L${x},${y} L${x + w},${y + w * 1.1} L${x + w * 0.4},${y + w * 0.8} L${x},${y + w * 1.2} L${x - w * 0.5},${y + w * 0.8} Z" fill="${color}"/>`
  ).join("");
}

function trees(y, count, color, size = 10, seed = 1) {
  let out = "";
  for (let i = 0; i < count; i++) {
    const x = (i + 0.5) * (W / count) + ((i * 37 * seed) % 9) - 4;
    const s = size * (0.8 + ((i * 13 * seed) % 5) / 10);
    out += `<circle cx="${x}" cy="${y - ((i * 7) % 6)}" r="${s}" fill="${color}"/>`;
  }
  return out;
}

function pines(y, count, color, h = 22) {
  let out = "";
  for (let i = 0; i < count; i++) {
    const x = (i + 0.5) * (W / count) + ((i * 29) % 7);
    const hh = h * (0.8 + ((i * 17) % 5) / 10);
    out += `<path d="M${x},${y - hh} L${x - hh / 3},${y} L${x + hh / 3},${y} Z" fill="${color}"/>`;
  }
  return out;
}

const SCENES = {
  canyon: { sky: ["#ff9f5a", "#ffe0b0"], sun: "#fff3c4", body: () =>
    layer([[0, 95], [40, 95], [55, 80], [120, 80], [135, 100], [210, 100], [225, 70], [300, 70], [315, 92], [400, 92]], "#d4794a") +
    layer([[0, 125], [70, 125], [85, 108], [170, 108], [185, 130], [260, 130], [275, 112], [400, 112]], "#b0502c") +
    layer([[0, 150], [130, 150], [145, 140], [400, 145]], "#7d3420") },
  hills: { sky: ["#9fd0f0", "#e8f6ff"], sun: "#fffbe0", body: () =>
    layer([[0, 100], [80, 80], [170, 105], [260, 78], [340, 98], [400, 88]], "#9ccc7f", true) +
    layer([[0, 125], [100, 108], [200, 130], [300, 110], [400, 128]], "#6aac58", true) +
    layer([[0, 152], [120, 140], [260, 158], [400, 145]], "#3f7f3a", true) +
    `<path d="M40,${H} Q140,140 240,${H}" stroke="#d9c69b" stroke-width="6" fill="none"/>` },
  lake: { sky: ["#86c2ee", "#e0f1ff"], sun: "#fffbe0", body: () =>
    layer([[0, 100], [60, 55], [110, 90], [170, 40], [240, 95], [300, 50], [360, 88], [400, 70]], "#7f90ab") +
    snowCaps([[60, 55, 12], [170, 40, 15], [300, 50, 13]]) +
    pines(125, 22, "#2f5d3a", 26) +
    `<rect x="0" y="125" width="${W}" height="${H - 125}" fill="#4e9fd4"/>` +
    `<rect x="0" y="132" width="${W}" height="2" fill="#8cc6ea" opacity=".7"/>` },
  outback: { sky: ["#ff8a4c", "#ffd59a"], sun: "#fff2c0", body: () =>
    `<path d="M120,140 Q125,95 170,92 L260,92 Q300,95 305,140 Z" fill="#c2482a"/>` +
    `<path d="M150,110 L160,135 M200,96 L205,135 M250,98 L255,135" stroke="#9c3519" stroke-width="3"/>` +
    layer([[0, 140], [100, 136], [220, 142], [400, 136]], "#e08a4a", true) +
    layer([[0, 160], [150, 155], [400, 162]], "#c96d34", true) },
  fjord: { sky: ["#9cc4da", "#e5eff5"], sun: "#ffffff", body: () =>
    layer([[0, 30], [50, 50], [110, 110], [130, 135]], "#4c6a66") +
    `<path d="M400,${H} L400,40 L350,60 L290,115 L270,135 L270,${H} Z" fill="#3c5652"/>` +
    snowCaps([[0, 30, 14], [400, 40, 14]]) +
    `<rect x="0" y="135" width="${W}" height="${H - 135}" fill="#3f7fa0"/>` +
    layer([[0, 160], [80, 150], [140, 162]], "#6aa65a", true) },
  cliffs: { sky: ["#a9cfe6", "#eaf4fa"], sun: "#ffffff", body: () =>
    `<rect x="0" y="110" width="${W}" height="${H - 110}" fill="#2f6f9a"/>` +
    `<path d="M140,${H} L140,80 Q240,70 400,60 L400,${H} Z" fill="#6b5e50"/>` +
    `<path d="M140,80 Q240,70 400,60 L400,74 Q250,84 150,92 Z" fill="#5ea24f"/>` +
    `<path d="M0,150 Q60,140 140,150" stroke="#cfe6f3" stroke-width="3" fill="none"/>` },
  coast: { sky: ["#5bbcf2", "#d2f0ff"], sun: "#fff6c9", body: () =>
    `<rect x="0" y="105" width="${W}" height="${H - 105}" fill="#17a2c9"/>` +
    `<rect x="0" y="105" width="${W}" height="18" fill="#53c6dd"/>` +
    `<path d="M220,${H} L220,95 L250,82 L330,80 L400,88 L400,${H} Z" fill="#e7d3a1"/>` +
    `<path d="M265,120 Q285,92 305,120 Z" fill="#17a2c9"/>` +
    `<path d="M20,140 l12,-4 l12,4 M70,160 l10,-3 l10,3" stroke="#bdeaf5" stroke-width="2" fill="none"/>` },
  garden: { sky: ["#93dcc8", "#ecfff7"], sun: "#fffbe0", body: () =>
    `<path d="M80,140 L95,60 L110,140 Z M280,140 L300,50 L320,140 Z" fill="#5a7a74"/>` +
    `<ellipse cx="95" cy="58" rx="28" ry="7" fill="#c75c8a"/><ellipse cx="300" cy="48" rx="32" ry="8" fill="#c75c8a"/>` +
    trees(130, 14, "#3f9a5a", 18, 2) + trees(150, 18, "#2e7a46", 14, 3) +
    layer([[0, 162], [200, 158], [400, 164]], "#24603a", true) },
  beach: { sky: ["#5ac4ef", "#d8f4ff"], sun: "#fff3b8", body: () =>
    `<g fill="#8a6a3a">${[30, 75, 120, 165].map(x => `<ellipse cx="${x}" cy="105" rx="24" ry="20"/>`).join("")}</g>` +
    `<rect x="0" y="105" width="${W}" height="35" fill="#22b4c8"/>` +
    layer([[0, 140], [150, 135], [400, 142]], "#f2dea5", true) +
    `<path d="M320,145 Q318,110 330,85" stroke="#7a5230" stroke-width="5" fill="none"/>` +
    `<path d="M330,85 q-30,-5 -40,10 M330,85 q30,-8 40,8 M330,85 q-10,-20 -30,-22 M330,85 q12,-20 32,-20" stroke="#2f8a3c" stroke-width="6" fill="none" stroke-linecap="round"/>` },
  rainforest: { sky: ["#b8e3c0", "#eefbef"], sun: "#ffffff", body: () =>
    trees(80, 12, "#5fae6a", 26, 1) + trees(110, 14, "#3d8e4e", 24, 2) +
    trees(140, 16, "#2a6e3c", 22, 3) +
    `<rect x="0" y="150" width="${W}" height="${H - 150}" fill="#1f5530"/>` +
    `<path d="M0,170 Q100,150 200,168 T400,160" stroke="#6fb0c8" stroke-width="8" fill="none"/>` },
  fuji: { sky: ["#ffc6d4", "#fff1f5"], sun: "#ff6b6b", body: () =>
    `<path d="M60,140 L170,48 Q200,40 230,48 L340,140 Z" fill="#6a7ca8"/>` +
    `<path d="M170,48 Q200,40 230,48 L255,70 L238,66 L222,76 L205,64 L188,76 L170,66 L145,70 Z" fill="#fff"/>` +
    layer([[0, 140], [120, 132], [280, 144], [400, 134]], "#7dad6a", true) +
    trees(145, 9, "#f6a5c0", 16, 2) + trees(165, 11, "#f08bb0", 13, 3) },
  alps: { sky: ["#86ccff", "#e6f6ff"], sun: "#fffbe0", body: () =>
    layer([[0, 90], [50, 40], [90, 80], [140, 30], [200, 85], [250, 45], [310, 82], [360, 35], [400, 70]], "#8394ad") +
    snowCaps([[50, 40, 14], [140, 30, 18], [250, 45, 14], [360, 35, 16]]) +
    layer([[0, 120], [120, 105], [260, 125], [400, 110]], "#7fc06a", true) +
    `<ellipse cx="290" cy="150" rx="90" ry="14" fill="#4aa3d8"/>` +
    layer([[0, 165], [200, 155], [400, 168]], "#5aa04c", true) }
};

function sceneSVG(country, opts = {}) {
  const s = SCENES[country.scene];
  const gid = `sky-${country.id}-${opts.key || "a"}`;
  const iconSize = opts.big ? 46 : 40;
  const icons = country.nature.icons.map((e, i) =>
    `<text x="${W - 30 - i * (iconSize + 8)}" y="${H - 14}" font-size="${iconSize}" text-anchor="middle">${e}</text>`
  ).join("");
  return `<svg class="scene" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${country.name}代表風景：${country.nature.caption}">
    <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${s.sky[0]}"/><stop offset="1" stop-color="${s.sky[1]}"/>
    </linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#${gid})"/>
    <circle cx="70" cy="38" r="18" fill="${s.sun}" opacity=".9"/>
    ${s.body()}
    ${icons}
  </svg>`;
}

function money(range) {
  return range[0] === range[1] ? `${range[0]} 萬` : `${range[0]}–${range[1]} 萬`;
}

function totalRange(c, weeks) {
  return [
    Math.round((c.weekly[0] * weeks + c.flight[0]) * 10) / 10,
    Math.round((c.weekly[1] * weeks + c.flight[1]) * 10) / 10
  ];
}

function stars(n) {
  return "★".repeat(n) + `<span class="dim">${"★".repeat(5 - n)}</span>`;
}

function renderChrome(active) {
  const links = [
    ["index.html", "總覽比較"],
    ["recommend.html", "幫我推薦"]
  ];
  document.getElementById("site-header").innerHTML = `
    <div class="wrap header-inner">
      <a class="brand" href="index.html">🌍 國外夏令營選擇指南</a>
      <nav>${links.map(([href, label]) =>
        `<a href="${href}" class="${active === href ? "active" : ""}">${label}</a>`).join("")}</nav>
    </div>`;
  document.getElementById("site-footer").innerHTML = `
    <div class="wrap">
      <p>費用為新台幣粗估區間，會隨匯率、營隊、週數變動；簽證與入境規定可能隨時調整，出發前請以各國官方網站與
      <a href="https://www.boca.gov.tw/" target="_blank" rel="noopener">外交部領事事務局</a>公告為準。</p>
      <p>簽約前建議參考行政院消保處公告的「國外遊學定型化契約」範本。本站資訊僅供參考，不代表推薦或背書任何營隊。</p>
    </div>`;
}
