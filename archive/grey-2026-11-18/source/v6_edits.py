# v6 edits from Fiona (run inside make_v5.py, which provides t, rep, cut, here)

# no name in the masthead; the links keep their places either side
rep('<a class="wordmark" href="#/">Fiona Edocket</a>', '<span class="mast-gap" aria-hidden="true"></span>')

# opening image: her own soft-spheres render instead of the library photo
rep('''  <figure class="wrap lead-photo">
    <img src="{{IMG_FILE:hero.jpg}}" alt="A grand library reading room with arched windows and rows of desks">
    <figcaption>Photo: Carol M. Highsmith, Library of Congress reading room (public domain)</figcaption>
  </figure>''', '''  <section class="bleed" aria-label="Latest news">
    <img class="bleed-img" src="{{IMG_FILE:hero_spheres_full.jpg}}" alt="">
    <div class="wrap bleed-in">
      <h1 class="bleed-title">Footnotes.<span class="bleed-sub">Because there's always more to say.</span></h1>
      <div class="bleed-row">
        <p class="bleed-cap">A personal blog<span>by Fiona Edocket</span></p>
        <a class="bleed-feat" href="#/post/credit-bureau-score-review"><b>Assessing a credit bureau score ahead of Germany's new scoring rules</b><span>13.11.2026 / Case study</span></a>
      </div>
    </div>
  </section>''')
rep("""  <section class="wrap sect">
    <div class="sect-head reveal"><h2><i class="dot"></i>Latest</h2><a href="#/writing">All writing</a></div>
    <div id="news-home"></div>
  </section>""", """  <section class="wrap sect" id="latest">
    <div class="sect-head reveal"><h2><i class="dot"></i>Latest</h2><span class="sect-note">Newest first</span></div>
    <ol class="feed" id="latest-list"></ol>
  </section>

  <section class="wrap sect" id="home-writing" hidden>
    <div class="sect-head reveal"><h2><i class="dot"></i>Writing</h2><a href="#/writing">All writing</a></div>
    <div id="news-home"></div>
  </section>""")
# Inter light for the hero title
rep("family=Inter:opsz,wght@14..32,400;", "family=Inter:opsz,wght@14..32,300;14..32,400;")
# the masthead sits over the image on Home only; today's date beside the title
rep("    observe(VIEWS[v]);\n", "    observe(VIEWS[v]);\n    document.body.classList.toggle(\"home\", v === \"home\");\n")
i = t.rindex("</style>")
t = t[:i] + (here / "parts" / "style_v6.css").read_text(encoding="utf-8") + t[i:]

# Writing intro shorter; Projects heading on its own
rep("<p class=\"reveal\" style=\"--d:0.06s\">Short reads on emerging and current news in model risk and AI governance, three to five minutes each.</p>",
    "<p class=\"reveal\" style=\"--d:0.06s\">Short reads on emerging and current news.</p>")
rep('''    <h1 class="reveal">Projects</h1>
    <p class="reveal" style="--d:0.06s">Each project starts from a real problem and ends with something you can open: the code, the tests, the decision and the write-up.</p>''',
    '''    <h1 class="reveal">Projects</h1>''')

# About: no name heading, Fiona's own text, matching topics
rep('      <h1 class="reveal" style="--d:0.06s">Fiona Edocket</h1>\n', "")
s = t.index('<p class="reveal" style="--d:0.12s">I work on model risk')
e = t.index('<div class="tags reveal"', s)
t = t[:s] + '''<p class="reveal" style="--d:0.06s">I work in AI Governance, Technology Risk and Regulatory Compliance, with a background in financial services.</p>
      <p class="reveal" style="--d:0.1s">I started in banking compliance and accounting, where I got interested in how organisations manage risk and keep up with regulation. Since then I’ve trained as an ACCA accountant and completed an MSc in Economics and Financial Technology (FinTech) at the University of Galway.</p>
      <p class="reveal" style="--d:0.14s">I’m now Co-Founder of AIRIS.ai, a platform that helps organisations meet their obligations under the EU AI Act.</p>
      <p class="reveal" style="--d:0.18s">My work covers the EU AI Act, DORA, GDPR, NIS2 and standards such as ISO 42001. I’m most interested in how organisations turn regulatory requirements into governance processes that actually work day to day.</p>
      <p class="reveal" style="--d:0.22s">To me, regulation isn’t the enemy of innovation. Done well, it’s the middle ground where new technology earns people’s trust, and I want to help organisations get there.</p>
      <p class="reveal note-own" style="--d:0.24s">Everything here is my personal view, written to explore ideas rather than to advise.</p>
      ''' + t[e:]
rep('<div class="tags reveal" style="--d:0.24s"><span>Model risk management</span><span>Third-party risk</span><span>EU AI Act</span><span>MaRisk</span><span>Python</span></div>',
    '<div class="tags reveal" style="--d:0.26s"><span>EU AI Act</span><span>DORA</span><span>GDPR</span><span>NIS2</span><span>ISO 42001</span></div>')

# footer: no large name
rep('<div class="f-brand"><span class="wordmark">Fiona Edocket</span><small>', '<div class="f-brand"><small>')
rep('<small>A blog by Fiona Edocket © 2026</small></div>', '<small>A blog by Fiona Edocket © 2026</small><small class="credit-l">Frankfurt cover photo: Michielverbeek, CC BY 4.0, via Wikimedia Commons</small></div>')

# Third-Party Model Review: blended tone on the project page and in the case study
rep("<p>From 20 November 2026, German law stops credit scores from using address data, age and other kinds of information, and gives lenders new duties when they turn someone down. Banks rely on scores they did not build, but they are still responsible for them.</p>",
    "<p>From 20 November 2026, German law prohibits the use of address data, age and other categories in credit scores, and gives lenders new duties when they decline an application. Banks rely on scores they did not build, yet remain accountable for them.</p>")
rep("<p>A Python pipeline: a register of 49 sources, a tested points calculator, decision rules written in code, and a test kit tried on 303,949 real loans.</p>",
    "<p>A Python pipeline: an evidence register of 49 sources, a tested points calculator, decision rules applied in code and an outcome test kit run on 303,949 loans.</p>")
rep("<p><b>Not yet, but there is a clear path to yes.</b> Two pieces of evidence decide it, and the tests to run on them are already built.</p>",
    "<p><b>Not yet approvable, with a clear path to approval.</b> Two pieces of evidence decide the outcome, and the tests to apply to them are already built.</p>")
rep("What a bank needs to check before it uses a credit bureau's new score, and how far public information gets you.",
    "What a bank must demonstrate before adopting a credit bureau's new score, and how much of that the public record supports.")
cut('  <div class="prose wrap">\n    <aside class="tldr', '\n  <div class="wrap">\n    <aside class="bio reveal">',
    (here / "parts" / "prose_v6.html").read_text(encoding="utf-8").rstrip("\n"))
