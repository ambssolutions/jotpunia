# Jot Punia: homepage concepts

Homepage concepts for **Jot Punia**, Residential Sales at Barfoot & Thompson in South Auckland. The site opens on concept 01 (`index.html` forwards to `designs/01-landmark/`). The gallery with all concepts is at `gallery/index.html`. On any concept page, the floating bar at the bottom switches between concepts and stars a concept for the shortlist (saved in the browser, shareable with a `?s=02,04` link). The concept list lives in `assets/concepts.js`. Each concept is one self-contained page at `designs/NN-slug/index.html`, and they all share `assets/`.

| # | Concept | Style | Motion |
|---|---|---|---|
| 02 | The Feed | Vertical reel feed with snap transitions | Highly animated |
| 03 | Golden Hour | Calm and cinematic, dusk-to-night scroll lighting | Animated |
| 04 | Southside | Interactive night map of South Auckland | Interactive |
| 05 | Level Up | Selling your home as a polished game | Interactive |
| 06 | Home Screen | The site is Jot's phone (JotOS) | Interactive |

All concepts use Barfoot & Thompson branding, the same copy deck and the same compliance content (see `COMPLIANCE.md`). The whole site is `noindex` (meta tag and `X-Robots-Tag` header) until Barfoot & Thompson approves it. Every concept passes an axe-core WCAG 2.2 AA scan with 0 violations and has no horizontal scroll at 360px.

Once a concept is chosen, it moves to the site root and the gallery is removed.

---

## Branding

The site is co-branded with Barfoot & Thompson, using their brand tokens from barfoot.co.nz:

- **Colours:** BT blue `#003572`, BT yellow `#F8C00B` and brand light blue `#47A9D8`.
- **Headings:** Montserrat, a free stand-in for Barfoot's licensed Nexa.
- **Logo:** in the nav and footer.

Get Barfoot's sign-off before launch (see `CONTENT-NEEDED.md`).

## Files

- `index.html`: the concept gallery with the shortlist and share links
- `designs/NN-slug/index.html`: the five concepts, each a single file with inline CSS and JS
- `assets/concepts.js`: the concept list, the floating concept switcher and the shortlist storage
- `assets/real/`: Jot's portrait and the listing photos from his Barfoot profile, in webp
- `assets/vendor/`: self-hosted GSAP 3.12.5, ScrollTrigger and Lenis 1.1.13
- `api/ai.mjs`: the AI helper used in every hero. It's a Vercel function that calls Claude and needs `ANTHROPIC_API_KEY`. Without the key, the pages use scripted replies
- `privacy.html`, `404.html`, `robots.txt`, `vercel.json` (main-only deploys, security headers, noindex while in review)
- `COMPLIANCE.md`: how the site meets REAA 2008 and the Code of Conduct, the Fair Trading Act, the Privacy Act and WCAG 2.2 AA, plus the AI guardrails

Preview locally with `python3 -m http.server`, then open http://localhost:8000. The AI uses scripted replies locally. To test live AI, run `vercel dev` with the key set.

## Things to finish before launch

See `CONTENT-NEEDED.md` (the compliance sign-off table comes first). The appraisal form opens the visitor's email app until a `FORM_ENDPOINT` is set.
