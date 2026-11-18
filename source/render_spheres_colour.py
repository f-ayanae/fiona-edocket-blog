"""Original render: pearly spheres with warm key light and cool lavender shadows (mood of the ByJuly reference, not a copy)."""
import numpy as np
from PIL import Image, ImageFilter
from pathlib import Path

W, H = 2600, 1400
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
u, v = xx / W, yy / H
# background: cool slate-lavender top left, warm taupe-peach bottom right
cool = np.array([0.40, 0.42, 0.52]); warm = np.array([0.66, 0.51, 0.43])
mix = np.clip(0.55 * u + 0.45 * v, 0, 1)[..., None]
bg = cool * (1 - mix) + warm * mix
bg *= (0.92 + 0.12 * (1 - v))[..., None]
canvas = Image.fromarray((np.clip(bg, 0, 1) * 255).astype(np.uint8)).convert("RGBA")

L = np.array([-0.45, -0.75, 0.48]); L /= np.linalg.norm(L)
KEY = np.array([1.00, 0.87, 0.75])      # warm light
AMB = np.array([0.52, 0.55, 0.72])      # cool lavender fill
ALB = np.array([0.86, 0.86, 0.88])      # pearly surface
S = [(0.78, 0.10, 0.17, 18), (0.30, 0.05, 0.15, 16), (0.55, 0.42, 0.16, 9), (0.08, 0.38, 0.20, 7),
     (0.92, 0.62, 0.26, 4), (0.36, 0.86, 0.24, 2), (0.70, 1.02, 0.20, 0)]
for fx, fy, fr, blur in S:
    cx, cy, r = fx * W, fy * H, fr * W
    sh = np.exp(-(((xx - cx - 0.16 * r) ** 2 + (yy - cy - 0.24 * r) ** 2) / (2 * (0.95 * r) ** 2))).astype(np.float32)
    dark = Image.new("RGBA", (W, H), (34, 30, 44, 0))
    dark.putalpha(Image.fromarray((np.clip(sh * 0.40, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(40)))
    canvas = Image.alpha_composite(canvas, dark)
    dx, dy = xx - cx, yy - cy
    d2 = dx * dx + dy * dy
    inside = d2 < r * r
    z = np.sqrt(np.clip(r * r - d2, 0, None))
    nx, ny, nz = dx / r, dy / r, z / r
    ndl = nx * L[0] + ny * L[1] + nz * L[2]
    lam = np.clip(ndl, 0, 1)
    wrap = np.clip((ndl + 0.4) / 1.4, 0, 1)
    rim = np.clip(1 - nz, 0, 1) ** 3
    spec = np.clip(ndl, 0, 1) ** 36
    col = ALB * (AMB * (0.42 + 0.25 * wrap[..., None]) + KEY * (0.62 * lam[..., None]))
    col += 0.14 * rim[..., None] * np.array([1.0, 0.82, 0.74])      # warm bounce on the rim
    col += 0.16 * spec[..., None] * KEY
    layer = Image.fromarray(np.dstack([np.clip(col, 0, 1) * 255, inside * 255]).astype(np.uint8), "RGBA")
    if blur:
        layer = layer.filter(ImageFilter.GaussianBlur(blur))
    canvas = Image.alpha_composite(canvas, layer)
im = canvas.convert("RGB").filter(ImageFilter.GaussianBlur(1.2)).resize((2000, 1077), Image.LANCZOS)
a = np.asarray(im, np.float32) + np.random.default_rng(5).normal(0, 3.0, (1077, 2000, 3))
out = Path(__file__).with_name("hero_spheres_colour.jpg")
Image.fromarray(np.clip(a, 0, 255).astype(np.uint8)).save(out, quality=80, optimize=True, progressive=True)
print(out.name, out.stat().st_size // 1024, "KB")
