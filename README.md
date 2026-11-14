# Donnell Khanderia Home Search

Shannon and Parthey's home-search journal — two sides, **Buy** and **Lease**;
every property they look at appears with what they judged it on, and the
verdict it got.

**Live:** https://beastmodepk.github.io/khanderiahomesearch/
Domain (not yet connected): khanderiahomesearch.com

## How the site is put together (the hybrid)

The site is **one polished app page** — and the listings' words live in
small separate files the app reads:

```
index.html      the app itself (design, behaviour, photos — don't edit
                this by hand; it is generated from the Muse app)
listings/       ONE small file per listing — THE WORDS LIVE HERE
  3-balsam-dr.json
  towers-at-longfellow.json   (the building + its five units)
  315-on-a.json
  halstead-burlington.json
images/         the listing photos, as files
```

When the page loads, the app fetches each `listings/*.json` and renders
from it. If a file can't be loaded, the app falls back to a baked-in
copy of the same words, so the page never renders empty.

## How to edit (for Shannon, or her Muse)

- **Change any words** — a price, a spec, a tour note, a cost: open
  that listing's file in `listings/`, change the text between the
  quotes, and send it back (or open a pull request). It goes live on
  merge. Nothing else needs touching.
- **Tour notes are verbatim.** The `notes` lists carry the recorded
  tour notes word for word — never dressed up, and a rent is never
  invented: if it wasn't noted, the file says "Rent not noted".
- **Add a property:** add a new file in `listings/` in the same shape
  and tell Alfred — the app's list of files lives in its code, so a
  brand-new listing also needs one line added there (Alfred does it).
- **Change the design:** that's the Muse app's job — ask Alfred.
  `index.html` is regenerated from it, never hand-edited.

## House rules

- The split screen never stacks — Buy and Lease sit side by side on
  every screen, sized by how many entries each side holds.
- Multi-unit buildings get ONE picture; the units live inside the
  building's panel as boxes, and a unit's post opens as a box with
  **Back/Close** and **Home**.
- Single-unit buildings have no separate post: everything lives in
  their one place (315 on A in its box on the Lease homepage;
  Halstead in its own building panel).
- Verdicts land as stamps (REJECTED / IN REVIEW / CURRENT HOME) only
  when Parthey gives them.
