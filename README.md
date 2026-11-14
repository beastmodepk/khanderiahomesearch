# Donnell Khanderia Home Search

Shannon and Parthey's home-search journal — two sides, **Buy** and **Lease**;
every property they look at appears with what they judged it on, and the
verdict it got.

**Live:** https://beastmodepk.github.io/khanderiahomesearch/
Domain (not yet connected): khanderiahomesearch.com

## How the site is put together

This repo IS the site — plain files, no build step. GitHub Pages serves it
as-is on every push to `main`.

```
index.html                        the Buy/Lease split screen (the front door)
about.html                        the About page
questions.html                    The Khanderia Questions
blog/why-this-page-exists.html    Blog Post #1
buy/index.html                    the Buy homepage (town filter + tiles)
buy/3-balsam-dr.html              a Buy post — one file per house
rent/index.html                   the Lease homepage (town filter + tiles)
rent/towers-at-longfellow.html    a building page (one photo, unit boxes inside)
rent/longfellow-4-3011.html       a unit post — one file per unit
rent/315-on-a.html                a Lease post
rent/halstead-burlington.html     the current-home building page — its box
                                   carries the Current Home details (monthly
                                   costs) directly; there is no separate post
assets/spices.css                 ALL styling, shared by every page
assets/spices.js                  ALL behaviour, shared by every page
images/                           the photos, as real files
```

## How to edit (for Shannon, or her Muse)

- **Change words:** open the page's own `.html` file and edit the text
  between the tags — what you see in the file is what's on the page.
  Send the changed file (or a pull request) and it goes live on merge.
- **Change a design thing everywhere:** edit `assets/spices.css` —
  one file holds every "spice" (glass, stamps, tiles, colours).
- **Add a property:** copy the closest existing post page, change its
  text and photo, then add its tile to the side homepage
  (`buy/index.html` or `rent/index.html`) and to the split screen
  (`index.html`), and update the counts there.
- **Tour posts all share one format:** the "Toured - <date>" heading,
  then "Tour Notes:" with the recorded notes as bullets — verbatim,
  never dressed up.
- **Never invent a rent.** If a unit's rent wasn't noted on the tour,
  its page says "Rent not noted".

## House rules

- The split screen never stacks — Buy and Lease sit side by side on
  every screen, sized by how many entries each side holds.
- Multi-unit buildings get ONE picture on the homepages; the units
  live inside the building's page as boxes.
- Verdicts land as stamps (REJECTED / IN REVIEW / CURRENT HOME) only
  when Parthey gives them.
