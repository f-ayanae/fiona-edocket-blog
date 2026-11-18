# Footnotes: a personal blog by Fiona Edocket

`index.html` is the whole site. It is one self-contained file with the images embedded, so any static host can serve it as it is.

## Rebuild after a change

The page is generated from `source/`. Run these from inside `source/`:

```
python make_v5.py
python build_blog.py "<path to third-party-model-review>" blog_v5.src.html fiona-edocket.html
```

Then copy the result over `../index.html`, keeping the `<!doctype html>` header lines at the top of the current `index.html`.

Where to make common edits:

| To change | Edit |
|---|---|
| A blog post | Add it to the `NEWS` list in `source/parts/data_v5.js` and put its thumbnail in `source/` |
| A project | Add it to the `PROJECTS` list in `source/parts/data_v5.js` |
| About text, the landing line, the case study wording | `source/v6_edits.py` and `source/parts/prose_v6.html` |

## Credits

- Post and project thumbnails: Fiona Edocket's own video thumbnails.
- CycleSignal images: the CycleSignal team (Women in AI Ireland).
- Landing image: an original render.
