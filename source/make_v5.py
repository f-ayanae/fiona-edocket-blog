"""Version 5: editorial look synthesised from the Savee inspirations (see INSPIRATION_PROMPTS.md).
Reads blog_v4.src.html (content and notes already applied), writes blog_v5.src.html."""
from pathlib import Path

here = Path(__file__).parent
t = (here / "blog_v4.src.html").read_text(encoding="utf-8")


def rep(a, b, n=1):
    global t
    assert t.count(a) == n, ("expected", n, "got", t.count(a), a[:90])
    t = t.replace(a, b)


def cut(start, end, new, keep_end=True):
    global t
    s = t.index(start); e = t.index(end, s)
    t = t[:s] + new + (t[e:] if keep_end else t[e + len(end):])


# fonts: Instrument Serif for display
rep("family=Geist+Mono:wght@400;500&display=swap", "family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap")
rep("<title>Fiona Edocket Notes</title>", "<title>Fiona Edocket</title>")

# announcement bar and masthead (centred serif wordmark, small uppercase links either side)
cut('<header class="mast" id="mast">', "</header>", '''<a class="annc" href="#/post/credit-bureau-score-review"><span>New</span> Germany's credit scoring rules apply from 20 November 2026 · <u>Read the case study</u></a>
<header class="mast" id="mast">
  <div class="wrap mast-in">
    <nav class="nl" aria-label="Primary" id="nav"><a href="#/" data-v="home">Home</a><a href="#/writing" data-v="writing">Writing</a><a href="#/projects" data-v="projects">Projects</a><a href="#/about" data-v="about" class="mob-only">About</a></nav>
    <a class="wordmark" href="#/">Fiona Edocket</a>
    <nav class="nr" aria-label="Secondary"><a href="#/about" data-v="about">About</a></nav>
  </div>
  <div class="progress" id="progress"></div>
''', keep_end=True)

# Home, Writing, Projects (news post view kept)
VIEWS = '''<!-- HOME -->
<div class="view" id="home">
  <figure class="wrap lead-photo">
    <img src="{{IMG_FILE:hero.jpg}}" alt="A grand library reading room with arched windows and rows of desks">
    <figcaption>Photo: Carol M. Highsmith, Library of Congress reading room (public domain)</figcaption>
  </figure>

  <section class="wrap sect">
    <div class="sect-head reveal"><h2><i class="dot"></i>Latest</h2><a href="#/writing">All writing</a></div>
    <div id="news-home"></div>
  </section>

  <section class="wrap sect">
    <div class="sect-head reveal"><h2><i class="dot"></i>Featured projects</h2><a href="#/projects">All projects</a></div>
    <div class="tiles" id="proj-home"></div>
  </section>
</div>

<!-- WRITING -->
<div class="view" id="writingv" hidden>
  <section class="wrap page-head">
    <h1 class="reveal">Writing</h1>
    <p class="reveal" style="--d:0.06s">Short reads on emerging and current news in model risk and AI governance, three to five minutes each.</p>
    <div class="tabs reveal" id="tabs" style="--d:0.1s" hidden></div>
  </section>
  <section class="wrap sect"><div id="news-list"></div></section>
</div>

<!-- PROJECTS -->
<div class="view" id="projectsv" hidden>
  <section class="wrap page-head">
    <h1 class="reveal">Projects</h1>
    <p class="reveal" style="--d:0.06s">Each project starts from a real problem and ends with something you can open: the code, the tests, the decision and the write-up.</p>
  </section>
  <section class="wrap sect"><div class="tiles" id="proj-list"></div></section>
</div>

'''
cut("<!-- HOME -->", "<!-- NEWS POST -->", VIEWS)

# About: editorial name, text links instead of buttons
s = t.index('<a class="btn reveal" style="--d:0.3s" href="https://www.linkedin.com/in/fionaedocket/"')
e = t.index("GitHub</a>", s) + len("GitHub</a>")
t = t[:s] + '<p class="elsewhere reveal" style="--d:0.3s"><a href="https://www.linkedin.com/in/fionaedocket/" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://github.com/f-ayanae" target="_blank" rel="noopener">GitHub ↗</a></p>' + t[e:]

# footer in columns
s = t.index('<footer class="site">'); e = t.index("</footer>", s) + len("</footer>")
t = t[:s] + '''<footer class="site"><div class="wrap foot">
  <div class="f-brand"><span class="wordmark">Fiona Edocket</span><small>A blog by Fiona Edocket © 2026</small></div>
  <div class="f-col"><b>Pages</b><a href="#/">Home</a><a href="#/writing">Writing</a><a href="#/projects">Projects</a><a href="#/about">About</a></div>
  <div class="f-col"><b>Elsewhere</b><a href="https://www.linkedin.com/in/fionaedocket/" target="_blank" rel="noopener">LinkedIn</a><a href="https://github.com/f-ayanae" target="_blank" rel="noopener">GitHub</a></div>
</div></footer>''' + t[e:]

# data and rendering
cut("/* ================= Content: edit these lists", "/* ---------- Motion", (here / "parts" / "data_v5.js").read_text(encoding="utf-8"))
t = t.replace("transparency-is-not-evidence", "credit-bureau-score-review")

exec(open(here / "v6_edits.py", encoding="utf-8").read())

# styles last, so they override earlier rules
i = t.rindex("</style>")
t = t[:i] + (here / "parts" / "style_v5.css").read_text(encoding="utf-8") + (here / "parts" / "style_colour.css").read_text(encoding="utf-8") + t[i:]  # colour accents load last

(here / "blog_v5.src.html").write_text(t, encoding="utf-8")
print("wrote blog_v5.src.html")
