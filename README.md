# Jot Punia: website

The homepage for **Jot Punia**, Residential Sales at Barfoot & Thompson Māngere, South Auckland. Live preview: https://jotpunia.vercel.app/

It is a single page (`index.html`) with inline CSS and JS and no build step:
- **3D hero:** a gold Barfoot ampersand made with three.js, plus Ask Jot AI.
- **"My patch, in 3D":** a MapLibre map where Jot travels a gold route through his 12 current listings, suburb by suburb.
- **Editorial sections:** listings, numbers, why choose Jot, the process, buyers, the appraisal form and the FAQ.

The site is `noindex` (meta tag and `X-Robots-Tag` header) until Barfoot & Thompson approves it.

## Files

- `index.html`: the whole site
- `assets/real/`: Jot's portrait and the listing photos from his Barfoot profile, in webp
- `assets/vendor/`: self-hosted GSAP 3.12.5, ScrollTrigger, Lenis 1.1.13, three.js r180 and MapLibre GL 5.9
- `api/ai.mjs`: the AI helper, a Vercel function that calls Claude. It needs `ANTHROPIC_API_KEY`; without it the page uses scripted replies
- `privacy.html`, `404.html`, `robots.txt`, `vercel.json` (main-only deploys, security and cache headers, noindex while in review)
- `COMPLIANCE.md`: how the site meets REAA 2008 and the Code of Conduct, the Fair Trading Act, the Privacy Act and WCAG 2.2 AA
- `CONTENT-NEEDED.md`: what we still need from Jot

Map tiles come from OpenFreeMap (no key needed). Listing pins are approximate street locations.

Preview locally with `python3 -m http.server`, then open http://localhost:8000. The AI uses scripted replies locally. To test live AI, run `vercel dev` with the key set.
