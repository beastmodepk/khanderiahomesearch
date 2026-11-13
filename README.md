# Khanderia Home Search

A house-hunting journal: rentals vs buying, one property at a time — investigated properly, answered honestly, stamped with a verdict.

The home page is the search board: **Rentals** and **Buying** tabs, a **town filter** in each, and a card for every property with its listing price, photo, specs and status. Every serious property also gets a full investigation page, and Parthey answers the same eight questions — [the Khanderia Questions](questions.html) — for each one before any verdict.

The full plan — format, workflow, publishing steps and roadmap — lives in [PLAN.md](PLAN.md).

Live (once GitHub Pages is enabled): https://beastmodepk.github.io/khanderiahomesearch.com/
Custom domain: **khanderiahomesearch.com** (CNAME file is in place; the domain itself still needs to be registered and its DNS pointed at GitHub Pages)

## Investigations

- **House #1 — The Ranch That Wanted to Be a Colonial** (`posts/3-balsam-dr-chelmsford.html`)
  3 Balsam Dr, Chelmsford, MA — $699,900. Could we add a second floor? Zoning said probably yes; the comps said no. **Rejected — value maths.**

## Blog

- **Post #1 — Why This Page Exists** (`blog/why-this-page-exists.html`) — how a Chelmsford ranch and one stubborn spreadsheet started this blog, and the rules every property after it will be judged by.

## Adding content

- New blog post: copy `templates/blog-post-template.html` into `blog/`, fill it in, link it from `blog/index.html` and the home page.
- New property: copy `templates/house-post-template.html` into `posts/`, save one photo to `images/`, add its card under the right tab in `index.html`.

## Publishing

Static HTML/CSS, no build step. GitHub Pages serves the `main` branch root.

To finish the custom domain:
1. Register `khanderiahomesearch.com` at any registrar.
2. In the repo: Settings → Pages → set Source to `main` / root, and confirm the custom domain shows `khanderiahomesearch.com`.
3. At the registrar, add the GitHub Pages A records (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) for the apex domain.
