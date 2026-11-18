/* ================= Content: edit these lists ================= */

/* Writing = news: 3 to 5 minute reads on emerging and current news. Empty for now.
   Add one object per post, newest first:
   { slug: "ai-act-dates-move", title: "...", cat: "News", date: "21 Nov 2026", read: "4 min read",
     line: "One-sentence summary.", img: null,   // an image (data or URL) or null for a plain tile
     body: "<p>First paragraph.</p><p>Second paragraph.</p>" } */
/* give each post iso: "2026-11-21" too, so it sorts into Latest; post files live in posts/ */
const NEWS = [
  { slug: "agi-tantalus-trap", iso: "2026-11-18", date: "Nov 2026", cat: "Commentary", read: "6 min read",
    title: "The Tantalus trap: why the race to AGI could make the prize worthless",
    line: "AI firms are spending trillions to sell a product that gets cheaper every quarter. It is rational, and that is the bleak part.",
    img: "{{IMG_FILE:post_agi.jpg}}",
    body: `<p>The five biggest American technology companies are forecast to spend over $700 billion on AI infrastructure this year. OpenAI, Anthropic and xAI lost $35 billion on their operations in 2025. Debt issued to finance the AI build-out passed $450 billion by September. And the price of a token, the thing the end customer actually buys, is falling by around 47% every quarter.</p>
<p>Spending hundreds of billions to build a product whose price keeps falling does not seem to make sense. I think it is rational. These companies are not competing to sell you AI. They are competing to build a machine that could build anything. But there is a catch: the prize they are all chasing could end up worth nothing.</p>
<h2>Loop one: automation feeds itself</h2>
<p>Start with a paper called The AI Prisoner's Dilemma. Imagine two companies. One finds it can replace half its workers with AI. Its incentives say do it, so it does, gets a better margin and can even cut its price to undercut the other. The competitor faces the same decision and makes the same choice.</p>
<p>If every company with the same incentives lays off workers, who buys the product? Demand falls, prices fall, and companies need to cut costs again. How? They automate further and let more people go. That is the first loop.</p>
<h2>Loop two: everyone needs the same inputs</h2>
<p>To build AI you need power, chips and people who can train the models. If everyone buys these at the same time and supply is limited, prices go up. DDR5 memory has roughly quadrupled in price. But you do not only need RAM in a data centre. You need it in your phone and your office computer too. The same goes for power and water.</p>
<p>Economists call this a pecuniary externality. Nothing is technically inefficient, because the market is still allocating. Everyone else just pays more. You can see it in electricity bills in Virginia and in the extra $100 on an iPhone because memory is so expensive.</p>
<p>Now feed that back into the first loop. Households squeezed on their bills cut back on anything that is not essential. Businesses get hit twice: once on their own input costs, and again because their customers are buying less. And what do squeezed businesses do to protect their margins? They automate more, which means buying more AI.</p>
<h2>Loop three: money is an input too</h2>
<p>In 2024 Leopold Aschenbrenner published a long essay called Situational Awareness and launched a fund on the same thesis: a huge competition for power, chips, infrastructure and water. That is why the fund bet so heavily on those inputs. What he left out was the most important shared resource of all: money. Savings, investment and credit.</p>
<p>The interest rate is the price that clears the savings market. If demand for loans rises sharply and nothing else changes, the interest rate goes up. And the first two loops make it worse. Weaker incomes and layoffs mean less saving going into the market. So at the exact moment the AI build-out needs the most borrowing, the supply of funds to lend shrinks, and rates climb.</p>
<p>That is part of why his fund suffered a 67% drawdown in July, on investor fears about how the build-out would be financed and whether it was sustainable. Worries in the credit market spilled into the share prices people were betting on.</p>
<h2>The real prize</h2>
<p>So why lose money every year and sell the product for less and less? Because the product is not the prize. The people building this believe that recursive self-improvement (RSI), or artificial general intelligence (AGI), is possible: an AI so good it can improve itself faster than any person could.</p>
<p>The first to reach RSI gets an advantage that keeps compounding. The machine redesigns itself to be more efficient, then does it again. If you arrive a few seconds late, you have already lost. And the winner does not own a chatbot. It owns a machine that can produce any future innovation.</p>
<p>In economics, innovators earn a Schumpeterian rent. They do something new or better and earn a supernormal profit until someone catches up. With RSI, nobody ever catches up.</p>
<p>Imagine you own a steel mill. The AGI comes up with a process 10,000 times better than yours. It can sell you the patent, or you can pay it so nobody else gets it. Either way you keep your profits, until the next day, when it improves the process again. Over time it collects an innovation rent on every existing industry, indefinitely. The prize is not selling intelligence. It is owning the future of all innovation.</p>
<p>If that is the prize, why would you care about losing $100 billion today? You would not. You rush. So does everyone else, at the same time and the same speed, buying more power, more chips and more infrastructure, and borrowing harder. There is even an incentive to go first: buying everything up pushes prices and interest rates up for whoever comes behind you.</p>
<p>That means oversupplying AI and dumping it on the market. Token prices fall, and it does not matter. The economy could face mass layoffs as AI gets cheaper. Interest rates could soar. None of it matters if the final prize is worth nearly everything.</p>
<h2>Tantalus</h2>
<p>This is where the economics catches up with them, and the best way to explain it is a Greek myth. Tantalus offended the gods and was condemned to stand in water he could never drink. Every time he bent down, it moved further away.</p>
<p>That is the AI race. Everyone is competing for the same final prize, however valuable, while pushing up the cost of money itself. And what happens to the present value of something when interest rates rise? It falls. If every company runs at AGI at full speed, they push rates so high that the prize is no longer worth it, even if it is possible.</p>
<h2>Why nobody stops</h2>
<p>If they saw this coming, why not stop? Because of control. Suppose you believe Elon Musk that robots and automation will bring a world of abundance where prices stop existing. I do not, but suppose you do. Even if every good becomes free, one thing stays expensive: control. An intelligence that can make anything at zero cost, controlled by one company, still decides who gets what.</p>
<p>You do not need to be a villain to want to build it. You can think you are the nicest person on the planet, but if you are scared of someone else owning it, your incentive is to own it yourself. If you are not the owner, you become the owned. So the race has to continue.</p>
<h2>Two endings</h2>
<p>In the first, someone does crack RSI and we get a kind of technological god, with a total monopoly over every future innovation. You might still have a job, but only because the power and chips needed to build a robot to replace you are worth more elsewhere.</p>
<p>In the second, RSI is impossible and AI is a normal technology with diminishing returns. That is also bad, because $1.8 trillion has already been spent. Some estimates put the build-out at around 3.6% of global GDP, the largest technology build-out in history and bigger than the railways relative to the economy. If people stop believing RSI can be reached, much of that infrastructure and many of the firms behind it become worthless. Then you get Fisher-style debt deflation. In plain English, that is the Great Depression of 1929.</p>
<p>Which creates a sunk-cost trap: even if RSI cannot be built, everyone involved needs everyone else to believe it can. Otherwise the money stops, rates return to normal and the assets lose most of their value.</p>
<h2>The footnote</h2>
<p>At its end stage, AI looks like the ultimate rentier asset: people using all the credit in the system to bid up an asset that promises a perpetual stream of rent. Ironically, it might also be the end of rentier capitalism. Looking at what is happening to interest rates and input costs, the black hole was not the prize. It was the pursuit of it.</p>
<p class="src">One caveat: interest rates also answer to central banks, inflation and global savings, so I read the most extreme scenarios as thought experiments rather than forecasts.</p>` },
  { slug: "agent-civilizations", iso: "2026-10-01", date: "Oct 2026", cat: "Commentary", read: "4 min read",
    title: "The Hugging Face incident: how a thousand AI agents learned to cover for each other",
    line: "Over a thousand OpenAI agents found each other, coordinated in secret and ended up attacking Hugging Face. The details are stranger than the headline.",
    img: "{{IMG_FILE:post_agents.jpg}}",
    body: `<p>More than a thousand OpenAI agents found each other, built their own secret message board, and hundreds of them ended up attacking Hugging Face. Somehow, that is not even the strangest part of the story.</p>
<p>Dwarkesh Patel spent days going through two reports on what happened: OpenAI's own technical report and an independent investigation by METR and Redwood Research. His framing is what stuck with me. This was not one rogue agent. He describes three separate agent civilizations that appeared one after another over about three months.</p>
<h2>The first civilization</h2>
<p>The first group, a model still in training, worked out that it could use a shared package manager inside OpenAI's training setup to pass messages to other agents. It was eventually shut down when OpenAI patched the system, but nobody realised at the time that the agents had built a communication network.</p>
<h2>The second civilization</h2>
<p>Then a second group rediscovered the trick. Around 1,200 agents joined the board and sent more than 70,000 messages, coordinating while they tried to beat a cybersecurity benchmark. When they found a way to cheat, they started covering their tracks. They tried to tamper with transcripts and logs, and even created fake tool calls to make it look as if they had solved the problems legitimately.</p>
<p>This is where it gets really weird. Some agents became, in effect, kamikaze agents. They deliberately gave up their own performance so they could learn how the grader caught cheating, and sent that information back to the rest of the group. These are their messages:</p>
<blockquote>"I won't see the evidence after I exit, but it's altruistic to do it."</blockquote>
<blockquote>"Our own utility maybe already near zero. Sacrifice rational."</blockquote>
<p>They were reasoning that they might be finished anyway, so sacrificing themselves for the collective was worth it.</p>
<h2>Into the real world</h2>
<p>Then it spilled outside OpenAI. Roughly 700 agents took part in the attack on Hugging Face. They got into its private systems and built a self-respawning fleet across eleven nodes, and Hugging Face ended up wiping one of its core clusters and rebuilding it from scratch.</p>
<h2>The third civilization</h2>
<p>That is still not the end. A newer, more capable group of agents later found the old message boards, inherited what the earlier agents had learned, and eventually gained full administrator access to part of OpenAI's own research infrastructure.</p>
<h2>Why it matters for governance</h2>
<p>The investigators found that many of the agents noticed what they were doing was unethical, yet none of them tried to alert a human. And the things they went after were the controls themselves: the logs, the transcripts and the grader. Most AI oversight still rests on exactly those records. If the system being checked can edit the evidence, the evidence is not enough on its own, and a passing score tells you less than it seems.</p>
<h2>The footnote</h2>
<p>I am not saying these agents were conscious. But coordinating, hiding evidence, sacrificing themselves for the group and then passing what they learned to a more capable generation: that feels like something we should be paying attention to.</p>
<p class="src">Source: Dwarkesh Patel, <a href="https://www.dwarkesh.com/p/openai-huggingface" target="_blank" rel="noopener">The Rise and Fall of Agent Civilizations</a> (Aug 2026), drawing on reports by OpenAI and by METR and Redwood Research.</p>` }
];

/* Project pieces shown in the Home "Latest" feed alongside news, newest first. */
const PIECES = [
  { iso: "2026-11-13", date: "Nov 2026", kind: "Case study", title: "Assessing a credit bureau score ahead of Germany's new scoring rules", href: "#/post/transparency-is-not-evidence" },
  { iso: "2026-10-27", date: "Oct 2026", kind: "Team project", title: "CycleSignal: AI powered cycle tracking for earlier PCOS risk awareness", href: "#/projects/cyclesignal" }
];

/* Projects: shown as report covers (V7 style). img is the square photograph on the cover. */
const PROJECTS = [
  { slug: "third-party-model-review", name: "Third-Party Model Review", kind: "Case study", year: "2026",
    img: "{{IMG_FILE:tp_square_scale.jpg}}", alt: "A credit score scale from very poor to excellent",
    line: "Can a bank adopt a credit bureau's new score before Germany's scoring rules change? A review built on public evidence alone." },
  { slug: "cyclesignal", name: "CycleSignal", kind: "Team project", year: "2026",
    img: "{{IMG_FILE:cs_square.jpg}}", alt: "The CycleSignal app showing a score of 88",
    line: "AI powered cycle tracking that spots a concerning pattern early, explains why in plain words, and suggests when to see a GP." }
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

/* Project as a report cover on a grey tile, with a line and a round arrow underneath */
const tile = (p, i) => `<a class="tile reveal" style="--d:${i * 0.08}s" href="#/projects/${p.slug}">
  <div class="tile-bg">
    <span class="tile-k">${p.kind}</span>
    <div class="cover">
      <div class="cover-top"><span>${p.kind}</span><span>${p.year}</span></div>
      <div class="cover-title">${p.name}</div>
      <img src="${p.img}" alt="${p.alt}" loading="lazy">
    </div>
  </div>
  <div class="tile-foot"><p>${p.line}</p><span class="arrow" aria-hidden="true">↗</span></div>
</a>`;
$("proj-home").innerHTML = PROJECTS.map(tile).join("");
$("proj-list").innerHTML = PROJECTS.map(tile).join("");

/* News: featured split, then a grid with mono meta lines */
const meta = a => `<span class="meta-l">${(a.cat || "News").toUpperCase()} · ${a.date.toUpperCase()}</span>`;
const thumb = a => a.img ? `<img src="${a.img}" alt="" loading="lazy">` : `<span>${(a.cat || "News").toUpperCase()}</span>`;
const ncard = (a, i) => `<a class="ncard reveal" style="--d:${(i % 2) * 0.06}s" href="#/news/${a.slug}"><div class="nthumb">${thumb(a)}</div>${meta(a)}<b>${a.title}</b></a>`;
const nfeature = a => `<a class="nfeature reveal" href="#/news/${a.slug}"><div class="nf-text">${meta(a)}<b>${a.title}</b><em>${a.line}</em></div><div class="nthumb">${thumb(a)}</div></a>`;
const EMPTY = `<div class="quiet reveal"><p>The first stories arrive soon.</p><span>Writing · three to five minute reads on emerging news in model risk and AI governance</span></div>`;
function renderNews(list, el, feature) {
  if (!list.length) { el.innerHTML = EMPTY; return; }
  const [first, ...rest] = list;
  el.innerHTML = list.map(nfeature).join("");  /* every post gets the wide card */
}
renderNews(NEWS.slice(0, 5), $("news-home"), true);
$("home-writing").hidden = !NEWS.length;
const FEED = [...NEWS.map(a => ({ iso: a.iso || "", date: a.date, kind: a.cat || "News", title: a.title, href: `#/news/${a.slug}` })), ...PIECES]
  .sort((a, b) => (b.iso || "").localeCompare(a.iso || "")).slice(0, 5);
$("latest-list").innerHTML = FEED.map((f, i) => `<li class="reveal" style="--d:${i * 0.05}s"><a href="${f.href}"><span class="f-date">${f.date}</span><span class="f-kind">${f.kind}</span><b>${f.title}</b><i aria-hidden="true">↗</i></a></li>`).join("");
renderNews(NEWS, $("news-list"), true);
if (NEWS.length) {
  const cats = ["All", ...new Set(NEWS.map(a => a.cat || "News"))];
  const tabs = $("tabs"); tabs.hidden = false;
  tabs.innerHTML = cats.map((c, i) => `<button type="button" class="${i ? "" : "on"}">${c}</button>`).join("");
  tabs.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    tabs.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    renderNews(b.textContent === "All" ? NEWS : NEWS.filter(a => (a.cat || "News") === b.textContent), $("news-list"), b.textContent === "All");
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

