/* ================= Content: edit these lists ================= */

/* Writing = news. Short reads (3 to 5 minutes) on emerging and current news. Empty for now.
   Add one object per post, newest first:
   { slug: "ai-act-dates-move", title: "...", cat: "News", date: "21 Nov 2026", read: "4 min read",
     line: "One-sentence summary for the card.", img: null,   // null uses a designed cover; or a data/image URL
     body: "<p>First paragraph.</p><p>Second paragraph.</p>" } */
const NEWS = [];

/* Projects: each gets a card and its own page. */
const PROJECTS = [
  { slug: "third-party-model-review", cov: "tp", name: "Third-Party Model Review", cat: "Model risk · Third-party risk", date: "Nov 2026",
    line: "Can a bank use a credit bureau's new score before Germany's scoring rules change? A review built only on public evidence, with a decision written in code and a ready-to-run test kit." },
  { slug: "cyclesignal", cov: "cs", name: "CycleSignal", cat: "Health AI · Team project", date: "Oct 2026",
    line: "AI powered cycle tracking for earlier PCOS risk awareness. A wearable, a short monthly check-in and two machine learning models spot a concerning pattern early, explain why in plain words, and suggest when to see a GP." }
];

/* Deliverables on the Third-Party Model Review page. Add a url when the repository is public. */
const DELIVERABLES = [
  { name: "Full case study", kind: "Article", url: "#/post/transparency-is-not-evidence" },
  { name: "Decision memo", kind: "PDF · 1 page", url: null },
  { name: "Full review", kind: "PDF · 24 pages", url: null },
  { name: "Model-risk crosswalk", kind: "PDF · 1 page", url: null },
  { name: "Points-table calculator", kind: "Interactive", url: null },
  { name: "Code, tests and evidence register", kind: "Repository", url: null }
];

/* ================= Rendering ================= */
const $ = id => document.getElementById(id);

/* Designed covers (thumbnails), drawn as SVG. The work itself lives on the project pages. */
const COVERS = {
  "tp": { bg: "#2649D8", fg: "#FFFFFF", sub: "#C9D4FF", chip: "Model risk · Third-party risk", lines: ["Third-Party", "Model Review"], motif: "scale", tone: "rgba(255,255,255,.22)" },
  "cs": { bg: "#B0346A", fg: "#FFFFFF", sub: "#F8D3E3", chip: "Health AI · Team project", lines: ["CycleSignal"], motif: "wave", tone: "rgba(255,255,255,.24)" },
  "news": { bg: "#F3F5F9", fg: "#0F1115", sub: "#2649D8", chip: "News", lines: [], motif: "scale", tone: "rgba(38,73,216,.18)" }
};
function wrapTitle(s, max) {
  const out = []; let line = "";
  for (const w of s.split(" ")) { if ((line + " " + w).trim().length > max && line) { out.push(line); line = w; } else line = (line + " " + w).trim(); }
  if (line) out.push(line);
  return out.slice(0, 3);
}
function coverSVG(key, override) {
  const c = Object.assign({}, COVERS[key], override || {});
  const n = c.lines.length, size = n === 1 ? 118 : n === 2 ? 96 : 76, lh = size * 1.08;
  const y0 = 330 - ((n - 1) * lh) / 2 + size * 0.34;
  const title = c.lines.map((l, i) => `<tspan x="600" y="${(y0 + i * lh).toFixed(0)}">${l}</tspan>`).join("");
  const chipW = 26 + c.chip.length * 15.5;
  let motif = "";
  if (c.motif === "scale") {
    const ticks = Array.from({ length: 19 }, (_, i) => `<line x1="${120 + i * 53.3}" y1="548" x2="${120 + i * 53.3}" y2="${i % 3 === 0 ? 522 : 534}"/>`).join("");
    motif = `<g class="mo" fill="none" stroke="${c.tone}" stroke-width="10"><circle cx="1090" cy="70" r="150"/><circle cx="1090" cy="70" r="230"/><circle cx="90" cy="600" r="120"/></g>
      <g stroke="${c.tone}" stroke-width="4">${ticks}</g><line x1="120" y1="548" x2="1080" y2="548" stroke="${c.tone}" stroke-width="4"/>
      <g class="mk"><line x1="812" y1="490" x2="812" y2="560" stroke="${c.sub}" stroke-width="6"/><circle cx="812" cy="490" r="11" fill="${c.sub}"/></g>`;
  } else {
    const wave = (amp, ph, y) => { let d = `M -20 ${y}`; for (let x = -20; x <= 1220; x += 20) d += ` L ${x} ${(y + Math.sin((x / 1200) * Math.PI * 4 + ph) * amp).toFixed(1)}`; return d; };
    motif = `<g class="mo" fill="none" stroke="${c.tone}" stroke-width="10"><circle cx="110" cy="80" r="160"/><circle cx="1130" cy="590" r="140"/></g>
      <path d="${wave(34, 0, 540)}" fill="none" stroke="${c.tone}" stroke-width="8"/><path d="${wave(22, 1.4, 560)}" fill="none" stroke="${c.tone}" stroke-width="5"/>
      <g class="mk"><circle cx="1050" cy="506" r="12" fill="${c.sub}"/></g>`;
  }
  return `<svg class="cov-svg" viewBox="0 0 1200 630" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${c.lines.join(" ")}">
    <rect width="1200" height="630" fill="${c.bg}"/>${motif}
    <g transform="translate(${600 - chipW / 2} 120)"><rect width="${chipW}" height="48" rx="24" fill="none" stroke="${c.sub}" stroke-width="2.5"/><text x="${chipW / 2}" y="32" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="600" letter-spacing="1" fill="${c.sub}">${c.chip.toUpperCase()}</text></g>
    <text text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="${size}" letter-spacing="-3" fill="${c.fg}">${title}</text>
    <g transform="translate(56 560)"><rect width="44" height="44" rx="11" fill="${c.fg === "#FFFFFF" ? "#FFFFFF" : "#2649D8"}"/><text x="22" y="29" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="17" font-weight="700" fill="${c.fg === "#FFFFFF" ? c.bg : "#FFFFFF"}">FE</text><text x="58" y="29" font-family="Inter, system-ui, sans-serif" font-size="20" font-weight="600" fill="${c.fg}">Fiona Edocket</text></g>
  </svg>`;
}
const newsThumb = a => a.img ? `<img src="${a.img}" alt="" loading="lazy">` : coverSVG("news", { chip: a.cat || "News", lines: wrapTitle(a.title, 22) });

/* Project cards: Featured projects on Home and the Projects page */
const pcard = (p, i) => `<a class="pcard reveal" style="--d:${i * 0.08}s" href="#/projects/${p.slug}">
  <div class="thumb">${coverSVG(p.cov)}</div>
  <span class="kick">${p.cat} · ${p.date}</span>
  <b>${p.name}</b>
  <em>${p.line}</em>
  <i>View project →</i>
</a>`;
$("proj-home").innerHTML = PROJECTS.map(pcard).join("");
$("proj-list").innerHTML = PROJECTS.map(pcard).join("");

/* News: a featured first post, then a grid; a quiet empty state until the first post */
const ncard = (a, i) => `<a class="ncard reveal" style="--d:${(i % 3) * 0.06}s" href="#/news/${a.slug}">
  <div class="thumb">${newsThumb(a)}</div>
  <span class="kick">${a.cat || "News"} · ${a.date}</span>
  <b>${a.title}</b>
  <em>${a.line}</em>
  <small>${a.read}</small>
</a>`;
const nfeature = a => `<a class="nfeature reveal" href="#/news/${a.slug}">
  <div class="nf-text"><span class="kick">${a.cat || "News"} · ${a.date}</span><b>${a.title}</b><em>${a.line}</em><small>${a.read} · Read the post →</small></div>
  <div class="thumb">${newsThumb(a)}</div>
</a>`;
const EMPTY = `<div class="empty reveal"><b>No posts yet</b><span>Short news pieces on model risk and AI governance will appear here.</span></div>`;
function renderNews(list, el, feature) {
  if (!list.length) { el.innerHTML = EMPTY; return; }
  const [first, ...rest] = list;
  el.innerHTML = (feature ? nfeature(first) : "") + `<div class="ngrid">${(feature ? rest : list).map(ncard).join("")}</div>`;
}
renderNews(NEWS.slice(0, 4), $("news-home"), true);
renderNews(NEWS, $("news-list"), false);
if (NEWS.length) {
  const cats = ["All", ...new Set(NEWS.map(a => a.cat || "News"))];
  const tabs = $("tabs"); tabs.hidden = false;
  tabs.innerHTML = cats.map((c, i) => `<button type="button" class="${i ? "" : "on"}">${c}</button>`).join("");
  tabs.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    tabs.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    renderNews(b.textContent === "All" ? NEWS : NEWS.filter(a => (a.cat || "News") === b.textContent), $("news-list"), false);
    observe($("news-list"));
  });
}
function showNews(slug) {
  const a = NEWS.find(x => x.slug === slug); if (!a) return false;
  $("nCat").textContent = a.cat || "News"; $("nTitle").textContent = a.title; $("nDate").textContent = a.date; $("nRead").textContent = a.read;
  $("nBody").innerHTML = (a.img ? `<figure><img class="nimg" src="${a.img}" alt=""></figure>` : "") + a.body;
  return true;
}

$("deliv").innerHTML = DELIVERABLES.map(d => d.url
  ? `<li><a href="${d.url}"${d.url.startsWith("#") ? "" : ' target="_blank" rel="noopener"'}><span>${d.name}</span><small>${d.kind}</small><b>→</b></a></li>`
  : `<li><span>${d.name}</span><small>${d.kind}</small></li>`).join("");

