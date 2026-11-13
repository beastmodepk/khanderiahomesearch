# Khanderia Home Search — plan

## The idea

**Khanderia Home Search** is a public house-hunting journal with a simple rule:
every serious house gets investigated properly, written up honestly, and given a verdict.

Working line: *We tour the houses. We run the numbers. Most of them get rejected — here's why.*

The tone is part buyer's diary, part cooking blog: each house is a "recipe" with ingredients,
prep time, method, cost per serving — and then the serious maths underneath the joke.

## Launch content (v1 — already built locally)

| File | Purpose |
|---|---|
| `index.html` | Home page: site header, latest house card, About section |
| `posts/3-balsam-dr-chelmsford.html` | House #1 — 3 Balsam Dr, Chelmsford: the full investigation |
| `styles.css` | Shared styling for home page and all posts |
| `CNAME` | Tells GitHub Pages the custom domain is `khanderiahomesearch.com` |
| `README.md` | Repo front page: what the site is, posts list, publishing notes |
| `PLAN.md` | This plan |

## House #1 (launch post)

**The Ranch That Wanted to Be a Colonial** — 3 Balsam Dr, Chelmsford, MA · $699,900 · MLS #73599405

- The question: buy a 1,766 sq ft 1959 ranch and add a full second floor?
- Zoning (Chelmsford RB, §195-8E): likely allowed in principle — height, storeys and FAR pass on the maths; coverage and the corner-lot setbacks need a survey; only the Building Commissioner can bind.
- The real gate: the 1959 foundation/framing was never built for a second storey.
- Costs: full second floor $425k–$675k all-in; doors + paint + countertop package $25k–$40k.
- Comps: 13 sold Chelmsford homes ~2,600–3,800 sq ft; median $970,000 / $336 per sq ft.
- The post runs the house **twice**: without the floor (~$725k–$740k in, roughly break-even) and with it (~$1.28M in vs ~$1.0M–$1.05M value).
- **Verdict: REJECTED — value maths.** Defensible only as a 10+ year home, not as a value play.

## The standard format for every future house post

1. **The listing, as the agent tells it** — the pitch, then the fine print.
2. **The recipe** — what we'd do to it, in cooking-blog form.
3. **Feasibility** — zoning/planning rules, structural unknowns, what only a professional or the town can answer.
4. **Costs** — the big job and the side jobs, each priced separately, ranges not single numbers.
5. **Comps** — actual sold prices, with unlike-for-like sales called out explicitly.
6. **Run it twice** — the plan vs no-plan scenarios, money in vs value out for each.
7. **Scorecard + verdict** — a stamp: Rejected (with the reason), Shortlisted, or Offer.
8. **Sources & disclaimer** — where every number came from, dated; estimates are planning figures, not quotes or appraisals.

## Publishing plan

1. **Parthey creates the GitHub repo** (his step):
   - Owner: `beastmodepk`
   - Suggested name: `khanderiahomesearch.com`
   - **Public** (required for free GitHub Pages), **empty** — no auto README, .gitignore or licence, since this folder already contains all of them/the content.
   - Then send Alfred the repo URL in this chat.
2. **Alfred wires and pushes** (next step after the URL arrives):
   - Add the repo as `origin` on this local repo and push `main`.
   - Verify the remote commit matches the local commit.
3. **GitHub Pages** (after the push):
   - Settings → Pages → Source: **Deploy from a branch** → `main` / `(root)`.
   - Site first appears at `https://beastmodepk.github.io/khanderiahomesearch.com/`.
4. **Custom domain** (separate, later):
   - Register `khanderiahomesearch.com` at a registrar (Parthey's purchase).
   - Point DNS at GitHub Pages (apex A records 185.199.108.153 / .109.153 / .110.153 / .111.153).
   - The `CNAME` file is already in the repo; confirm the domain under Settings → Pages and enforce HTTPS once the certificate issues.

## Later, if it grows

- An index filter: Rejected / Shortlisted / Offer.
- A reusable post template file so each new house is mostly filling in blanks.
- A map page once there are enough houses to make it interesting.
- Search and email subscriptions only if the blog gets real readers — not in v1.
