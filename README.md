# Donnell Khanderia Home Search

A house-hunting journal for Parthey & Shannon: homes to **buy** on the left, places to **lease** on the right — every entry investigated properly, answered honestly, and stamped with a verdict.

Live: https://beastmodepk.github.io/khanderiahomesearch/

## How the site works

The public page is a single self-contained `index.html`: a Buy/Lease split screen whose seam is sized by the entry counts, real listing photos as separate framed prints, Liquid Glass throughout, and details that open in place — no separate collection pages. The blog, the Khanderia Questions and the About page live inside the same page.

**Source of truth:** the page is designed and edited as a Muse page ("Khanderia Home Search — Shutter Example"). `index.html` in this repo is its export. To update the site: change the Muse page → export → replace `index.html` → commit (small, one functionality per commit) → push. The GitHub Actions workflow deploys to Pages on every push to `main`.

## What's on it now

- **Buy — 1 home:** 3 Balsam Dr, Chelmsford, MA ($699,900) — "The Ranch That Wanted to Be a Colonial." Could we add a second floor? Zoning said probably yes; the comps said no. **Rejected — value maths.**
- **Lease — 2 buildings, 6 units inside, all In Review:** Towers at Longfellow, Boston (5 units toured Nov 7, 2026 — 4-3011 leads) and 315 on A #1405, Fort Point.

## Publishing workflow for a new property

1. Parthey sends the listing in the Muse chat.
2. Alfred investigates (feasibility, costs, comps) and drafts the entry.
3. Parthey answers the eight Khanderia Questions in chat; the answers go on the entry.
4. The entry posts as **In Review** until Parthey's verdict; then it gets its stamp and full write-up.

## Custom domain (pending)

`khanderiahomesearch.com` — available (checked Nov 13, 2026: Cloudflare Registrar $11.17/yr, Porkbun $11.81/yr), not yet registered. Once bought: add a `CNAME` file containing `khanderiahomesearch.com`, point the apex A records at GitHub Pages (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153), and enforce HTTPS in Settings → Pages.
