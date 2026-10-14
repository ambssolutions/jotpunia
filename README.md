# Jot Punia: homepage concepts

Homepage concepts for **Jot Punia**, Residential Sales at Barfoot & Thompson in South Auckland. Open `index.html` for the gallery. Each concept is one self-contained page at `designs/NN-slug/index.html`, and they all share `assets/`.

| # | Concept | Style | Motion |
|---|---|---|---|
| 01 | Creator Channel | Social (first version) | Animated |
| 02 | The Feed | Vertical reel feed with snap transitions | Highly animated |
| 03 | Golden Hour | Calm and cinematic, dusk-to-night scroll lighting | Animated |
| 04 | Southside | Interactive night map of South Auckland | Interactive |
| 05 | Level Up | Selling your home as a polished game | Interactive |
| 06 | Home Screen | The site is Jot's phone (JotOS) | Interactive |

All concepts use Barfoot & Thompson branding, the same copy deck and the same compliance content (see `COMPLIANCE.md`). Every concept passes an axe-core WCAG 2.2 AA scan with 0 violations and has no horizontal scroll at 360px.

Once a concept is chosen, it moves to the site root and the gallery is removed.

---

## Branding

The site is co-branded with Barfoot & Thompson, using their brand tokens from barfoot.co.nz:

- **Colours:** BT blue `#003572`, BT yellow `#F8C00B` and brand light blue `#47A9D8`.
- **Headings:** Montserrat, a free stand-in for Barfoot's licensed Nexa.
- **Logo:** in the nav and footer.

Get Barfoot's sign-off before launch (see `CONTENT-NEEDED.md`).

## Files

- `index.html`: the whole site (inline CSS and JS, no build step)
- `assets/vendor/`: self-hosted GSAP 3.12.5, ScrollTrigger and Lenis 1.1.13
- `assets/img/`: imagery in `-800` and `-1400` webp sizes (illustrative stock photos from Unsplash)
- `privacy.html`: Privacy Act 2020 statement, linked from the form and the footer
- `404.html`, `robots.txt`, `vercel.json` (main-only deploys, clean URLs, security headers)
- `COMPLIANCE.md`: how the site meets REAA 2008 / Code of Conduct, Fair Trading Act, Privacy Act and WCAG 2.2 AA, and what still needs sign-off

Preview locally: `python3 -m http.server`, then open http://localhost:8000.

## Things to finish before launch

See `CONTENT-NEEDED.md` (the compliance sign-off table comes first). The appraisal form opens the visitor's email app until a `FORM_ENDPOINT` is set.
