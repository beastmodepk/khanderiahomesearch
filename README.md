# Khanderia Home Search

A house-hunting blog: every house we seriously consider gets a post — what it is, what we'd do to it, what that would cost, what it would actually be worth afterwards, and the verdict.

Live (once GitHub Pages is enabled): https://beastmodepk.github.io/khanderiahomesearch.com/
Custom domain: **khanderiahomesearch.com** (CNAME file is in place; the domain itself still needs to be registered and its DNS pointed at GitHub Pages)

## Posts

- **House #1 — The Ranch That Wanted to Be a Colonial** (`posts/3-balsam-dr-chelmsford.html`)
  3 Balsam Dr, Chelmsford, MA — $699,900. Could we add a second floor? Zoning said probably yes; the comps said no. **Rejected — value maths.**

## Publishing

Static HTML/CSS, no build step. GitHub Pages serves the `main` branch root.

To finish the custom domain:
1. Register `khanderiahomesearch.com` at any registrar.
2. In the repo: Settings → Pages → set Source to `main` / root, and confirm the custom domain shows `khanderiahomesearch.com`.
3. At the registrar, add the GitHub Pages A records (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) for the apex domain.
