"""Build the published blog page from blog.src.html.

Embeds the author photo, cover photo and Bondora chart, and draws the ceiling chart
as inline SVG straight from lab/out/ceiling.csv. Usage: python build_blog.py <repo root>
"""
import base64
import csv
import hashlib
import re
import sys
from pathlib import Path

S = Path(__file__).resolve().parent
R = Path(sys.argv[1])
SRC = sys.argv[2] if len(sys.argv) > 2 else "blog.src.html"
OUTF = sys.argv[3] if len(sys.argv) > 3 else "transparent-not-tested.html"


def b64(p: Path, mime: str) -> str:
    return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()


def ceiling_svg() -> str:
    rows = [r for r in csv.DictReader((R / "lab/out/ceiling.csv").open()) if int(r["months_in_file"]) <= 96]
    m = [int(r["months_in_file"]) for r in rows]
    lo = [float(r["ceiling_step"]) for r in rows]
    hi = [float(r["ceiling_upper"]) for r in rows]
    X0, X1, Y0, Y1, S0, S1 = 56, 700, 300, 24, 660, 900
    x = lambda mo: X0 + (X1 - X0) * mo / 96
    y = lambda s: Y0 - (Y0 - Y1) * (s - S0) / (S1 - S0)

    def steps(vals):
        pts = [(x(m[0]), y(vals[0]))]
        for i in range(1, len(m)):
            pts += [(x(m[i]), pts[-1][1]), (x(m[i]), y(vals[i]))]
        return pts

    up, dn = steps(hi), steps(lo)
    path = lambda pts: "M" + " L".join(f"{a:.1f},{b:.1f}" for a, b in pts)
    band = path(up + dn[::-1]) + "Z"
    first = lambda vals, t: next(mo for mo, v in zip(m, vals) if v >= t)
    c1_hi, c1_lo = first(hi, 776), first(lo, 776)
    at12 = lo[m.index(12)]
    g = []
    for s in (700, 750, 800, 850, 900):
        g.append(f'<line x1="{X0}" x2="{X1}" y1="{y(s):.1f}" y2="{y(s):.1f}" stroke="var(--rule)"/>'
                 f'<text x="{X0 - 8}" y="{y(s) + 4:.1f}" text-anchor="end">{s}</text>')
    for yr in range(0, 9):
        g.append(f'<text x="{x(yr * 12):.1f}" y="{Y0 + 18}" text-anchor="middle">{yr}</text>')
    for s, lab in ((709, "Class 2 from 709"), (776, "Class 1 from 776")):
        g.append(f'<line x1="{X0}" x2="{X1}" y1="{y(s):.1f}" y2="{y(s):.1f}" stroke="var(--rule-2)" stroke-dasharray="4 4"/>'
                 f'<text class="minor" x="{X1}" y="{y(s) - 6:.1f}" text-anchor="end">{lab}</text>')
    xa, xb, yb = x(c1_hi), x(c1_lo), Y0 - 14
    return f'''<svg viewBox="0 0 760 340" role="img" aria-labelledby="ceil-t">
  <title id="ceil-t">Highest attainable score over the first eight years in the credit file. It is capped at {at12:.0f} after one year and reaches Class 1 between {c1_hi // 12} and {c1_lo // 12} years.</title>
  {"".join(g)}
  <line x1="{X0}" x2="{X1}" y1="{Y0}" y2="{Y0}" stroke="var(--rule-2)"/>
  <text class="minor" x="{(X0 + X1) / 2:.0f}" y="{Y0 + 36}" text-anchor="middle">Years in the German credit file</text>
  <path class="band" d="{band}" fill="var(--blue-soft)"/>
  <path class="line" pathLength="1" d="{path(up)}" stroke="#9db0d6"/>
  <path class="line" pathLength="1" d="{path(dn)}" stroke="var(--blue)"/>
  <g class="late">
    <circle cx="{x(12):.1f}" cy="{y(at12):.1f}" r="5" fill="var(--warn)"/>
    <text x="{x(12) - 8:.1f}" y="{y(at12) - 12:.1f}" text-anchor="middle" class="t-warn desk">{at12:.0f} after one year</text>
    <text x="{x(12) + 10:.1f}" y="{y(at12) - 12:.1f}" text-anchor="start" class="t-warn mob">{at12:.0f}</text>
    <line x1="{xa:.1f}" x2="{xb:.1f}" y1="{yb}" y2="{yb}" stroke="var(--ink)" stroke-width="1.2"/>
    <line x1="{xa:.1f}" x2="{xa:.1f}" y1="{yb - 5}" y2="{yb + 5}" stroke="var(--ink)" stroke-width="1.2"/>
    <line x1="{xb:.1f}" x2="{xb:.1f}" y1="{yb - 5}" y2="{yb + 5}" stroke="var(--ink)" stroke-width="1.2"/>
    <text x="{(xa + xb) / 2:.1f}" y="{yb - 9}" text-anchor="middle" class="t-ink desk">Class 1 reached in {c1_hi // 12} to {c1_lo // 12} years</text>
    <text x="{(xa + xb) / 2:.1f}" y="{yb - 9}" text-anchor="middle" class="t-ink mob">Class 1: {c1_hi // 12} to {c1_lo // 12} yrs</text>
    <text x="{X1 + 6}" y="{y(hi[-1]) + 4:.1f}" class="t-blue" style="fill:#7d93c2">Upper</text>
    <text x="{X1 + 6}" y="{y(lo[-1]) + 4:.1f}" class="t-blue">Lower</text>
  </g>
</svg>'''


t = (S / SRC).read_text(encoding="utf-8")
t = t.replace("--photo: none; --cover: none;",
              f'--photo: url("{b64(S / "photo.jpg", "image/jpeg")}"); --cover: url("{b64(S / "cover_calc.jpg", "image/jpeg")}"); --cs-cover: url("{b64(S / "cs_cover.jpg", "image/jpeg")}");', 1)
t = t.replace("{{SVG_CEILING}}", ceiling_svg())
t = t.replace("{{IMG_RANK}}", b64(R / "lab/out/bondora/bondora_proxy/chart_rank_ordering.png", "image/png"))
# generic: {{IMG_FILE:name.jpg}} embeds a file from this folder
t = re.sub(r"\{\{IMG_FILE:([\w.\-]+)\}\}", lambda m: b64(S / m.group(1), "image/jpeg"), t)
(S / OUTF).write_text(t, encoding="utf-8")

txt = re.sub(r"data:[^\"]+", "", t)
hs = {'c9022b91a83a741282eb8869b066b23b2e655201eed6b5c827960968b461ad6a', 'f08f30e7c133c0d762dd0129f038547b5004756bd6d27ee1f5bc8cd4a89425c9',
      '2e737c2291bc3c37863607197788b1306d4abaa0f67eba3308c97cc709499919', 'e4d9ea270424dd4384d1517d9a809562e0819fe3c9cea4f869f9f5c47f1a1d19'}
print("KB", len(t) // 1024, "| em", t.count("—"), "en", t.count("–"), "| unfilled", t.count("{{"),
      "| contractions", len(re.findall(r"\b\w+n't\b", txt)), "| AI-assisted", "AI-assisted" in txt,
      "| vendor words", sum(hashlib.sha256(w.encode()).hexdigest() in hs for w in set(re.findall(r"[a-z]+", txt.lower()))))
