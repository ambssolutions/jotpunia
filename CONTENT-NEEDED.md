# What we still need from Jot

## Compliance sign-off (must be done before launch)
| Need | Why |
|---|---|
| Barfoot & Thompson approval of the site (name, logo use, colours, wording, AI helper), and the official logo files from Barfoot marketing to replace `assets/img/barfoot-logo.svg` (currently taken from barfoot.co.nz) | Licensees' advertising is the agency's responsibility. Most agencies require sign-off on personal websites |
| Permission to reuse Jot's Barfoot profile photo and the listing photos and details from barfoot.co.nz (`assets/real/`) | Copyright, plus listing photos often belong to the photographer or the vendor |
| Jot's licence class on the REA register (salesperson, branch manager or agent) | REAA 2008: don't describe the licence differently from the register. The copy currently says "Residential Sales" |
| Written permission from Gurdeep Singh to publish his review and name | Fair Trading Act 1986 / Privacy Act 2020 |
| Screenshots of the follower counts on launch day (TikTok about 30K followers and 325.8K likes, Instagram about 12K, all shown "as at 14 October 2026") | Fair Trading Act 1986: claims must be substantiated |
| Check every Punjabi (Gurmukhi) line on the site | We wrote them. A native speaker must confirm them before launch |
| Confirm Barfoot's complaints process link, if it should be linked directly | REA Code rule 12.1 |
| Confirm the privacy statement (including the AI helper wording) with Barfoot's privacy officer | Privacy Act 2020 |

## Setup
| Need | Where |
|---|---|
| **Anthropic API key** to switch on live AI answers. Without it the site uses scripted replies | Vercel > jotpunia > Settings > Environment Variables: `ANTHROPIC_API_KEY` (Production), then redeploy |
| Web3Forms access key, if enquiries should arrive without the email app | `index.html`: `FORM_ENDPOINT` |
| Domain name | add `canonical`, `og:url` and a `sitemap.xml`, and remove the `noindex` header in `vercel.json` |

## Content updates
| Need | Goes in |
|---|---|
| Updated listings (they change weekly) | the `LISTINGS` array (and map coordinates) in `index.html`, `api/ai.mjs`, and the images in `assets/real/` |
| Updated stats (homes for sale, homes sold) and the "as at" date | `index.html`, plus `FACTS` in `api/ai.mjs` |
| 2 to 4 more client reviews with name, suburb and permission | review sections |
| Exact coordinates for the two Airfield Drive lots in Takanini (new streets aren't on OpenStreetMap yet) | `LISTINGS` in `index.html` |
| **Jot's AI welcome video** (9:16 MP4, 10 to 15 seconds, under 4 MB, only Jot in frame). Script and steps: `WELCOME-VIDEO.md` | Save as `assets/video/welcome.mp4` with captions `assets/video/welcome.vtt`, then set `data-video="assets/video/welcome.mp4"` on `#intro` in `index.html` |
| Jot's Facebook profile picture (send the image file or a public link; Facebook blocks downloads) | hero cut-out `assets/real/jot-cut-*.webp` |
| 4 to 6 more photos of Jot on his own (no other people in shot), high resolution | hero, welcome and appraisal sections |
