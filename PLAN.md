# Khanderia Home Search — plan

## The idea

**Khanderia Home Search** is a public house-hunting journal with a simple rule:
every serious property gets investigated properly, written up honestly, and given a verdict.

Working line: *Rentals vs buying, one property at a time — investigated properly, answered honestly, stamped with a verdict.*

The tone is part buyer's diary, part cooking blog: each house is a "recipe" with ingredients,
prep time, method, cost per serving — and then the serious maths underneath the joke.

The design deliberately sits **one step back from any single house**: the home page is the
search itself (tabs, towns, prices), and each house is one card and one investigation inside it.

## Site structure (v2 — built locally)

| Path | Purpose |
|---|---|
| `index.html` | Home = the search board. **Rentals / Buying tabs**, a **town filter** in each tab, listing cards with price, specs, photo slot and status stamp |
| `posts/<house>.html` | One investigation page per property (House #1: `posts/3-balsam-dr-chelmsford.html`) |
| `blog/index.html` | Blog index |
| `blog/why-this-page-exists.html` | **Blog Post #1** — how and why this page was started |
| `questions.html` | **The Khanderia Questions** — the 8 standard answers (below) |
| `templates/blog-post-template.html` | Copy → fill → link: how a new blog post is added |
| `templates/house-post-template.html` | Copy → fill → link: how a new property investigation is added |
| `images/` | One saved MLS/listing photo per property, shown on its card (see `images/README.md`) |
| `styles.css` | Shared styling, incl. tabs, town chips, listing cards, stamps |
| `CNAME` | Custom domain for GitHub Pages: `khanderiahomesearch.com` |
| `README.md` | Repo front page |

### Tabs and town filters

- Two tabs: **Buying** and **Rentals** — separate hunts, separate maths.
- Inside each tab, town chips filter the cards. A town's chip is added the day its
  first listing arrives ("All towns" is always first). Chelmsford is the only town so far;
  the Rentals tab is empty and says so.
- Every card carries: photo (or its slot), **listing price**, address, town, key specs,
  status stamp, and links to the investigation and the original listing.

### Photos

Cards are photo-ready. Where a listing/MLS photo can be saved, one photo per property
goes into `images/` and onto its card. Photos remain the MLS/brokerage's property and are
credited on the property's page; if a photo can't be saved, the card keeps a labelled slot.

## The Khanderia Questions (defined — see `questions.html`)

Research is Alfred's job; judgement is Parthey's. For **every** property, Parthey answers
the same eight questions **in the Muse chat**, and the answers are recorded on its page:

1. **The gut score** — first reaction, 1–10, before the maths.
2. **What's it for?** — live in it / rent it out / family / flip.
3. **As-is test** — could you live in it as it stands for year one (or move in tomorrow)?
4. **The one change** — first fix, renovation, or landlord ask.
5. **The red flag** — the biggest concern, named early.
6. **Town & commute** — does this place in this town actually work day to day?
7. **The walk-away number** — max price (or max monthly rent); above it, automatic no.
8. **The verdict** — Reject · Keep watching · Visit · Offer/Sign, plus one line of why.

**Workflow:** Parthey sends a listing in the chat → Alfred investigates and drafts the card
and page → Alfred asks the eight questions → Parthey answers in chat → answers go on the page →
**when the property is rejected or bought/signed, the stamp lands and the full write-up publishes.**

## House #1 (launch investigation)

**The Ranch That Wanted to Be a Colonial** — 3 Balsam Dr, Chelmsford, MA · $699,900 · MLS #73599405

- The question: buy a 1,766 sq ft 1959 ranch and add a full second floor?
- Zoning (Chelmsford RB, §195-8E): likely allowed in principle; coverage/setbacks need a survey; only the Building Commissioner can bind.
- The real gate: the 1959 foundation/framing was never built for a second storey.
- Costs: full second floor $425k–$675k all-in; doors + paint + countertop $25k–$40k.
- Comps: 13 sold Chelmsford homes ~2,600–3,800 sq ft; median $970,000 / $336 per sq ft.
- Run twice: without the floor ~$725k–$740k in, roughly break-even; with it ~$1.28M in vs ~$1.0M–$1.05M value.
- **Verdict: REJECTED — value maths.** (Stamped before the Questions system existed; his
  verdict in the chat was the analysis itself — future houses get all eight answers on-page.)

## Adding content

- **New blog post:** copy `templates/blog-post-template.html` into `blog/`, fill it in,
  add its card to `blog/index.html` and the home page, commit.
- **New property:** copy `templates/house-post-template.html` into `posts/`, save its photo
  to `images/`, add its card under the right tab with `data-town` set (plus a new town chip
  if needed), run the Questions in chat, commit.

## Publishing plan

1. **Parthey creates the GitHub repo** (his step): owner `beastmodepk`, suggested name
   `khanderiahomesearch.com`, **public**, **empty** (no auto README/.gitignore/licence),
   then sends Alfred the URL in this chat.
2. **Alfred wires and pushes**: add `origin` to this local repo, push `main`, verify the
   remote commit matches.
3. **GitHub Pages**: Settings → Pages → Deploy from a branch → `main` / `(root)`.
   First live at `https://beastmodepk.github.io/khanderiahomesearch.com/`.
4. **Custom domain** (later): register `khanderiahomesearch.com` (Parthey's purchase),
   apex A records 185.199.108.153 / .109.153 / .110.153 / .111.153 at the registrar;
   `CNAME` is already in the repo; enforce HTTPS once the certificate issues.

## Later, if it grows

- Verdict filter (Rejected / Watching / Bought) alongside the town filter.
- A map page once there are enough properties to make it interesting.
- Search and email subscriptions only if the blog gets real readers — not in v1/v2.
