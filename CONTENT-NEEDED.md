# What we still need from Jot

## Compliance sign-off (must be done before launch)
| Need | Why |
|---|---|
| Barfoot & Thompson approval of the site (name, logo use, colours, wording), and the official logo files from Barfoot marketing to replace `assets/img/barfoot-logo.svg` (currently taken from barfoot.co.nz) | Licensees' advertising is the agency's responsibility; most agencies require sign-off on personal websites |
| Jot's licence class on the REA register (salesperson, branch manager or agent) | REAA 2008: don't describe the licence differently from the register. Copy currently says "Residential Sales" |
| Written permission from Gurdeep Singh to publish his review and name | Fair Trading Act 1986 / Privacy Act 2020 |
| Proof for the 12K+ Instagram figure (screenshot on launch date) | Fair Trading Act 1986: claims must be substantiated |
| Confirm Barfoot's complaints process link, if it should be linked directly | REA Code rule 12.1 |
| Confirm the privacy statement with Barfoot's privacy officer | Privacy Act 2020 |


The site is built and works today. Send these and they go in without a redesign.

| Need | Goes in |
|---|---|
| Portrait photo (vertical, about 1000 x 1250, good light) | `assets/img/jot.webp` (replaces the JP monogram automatically) |
| Confirm mobile number (site uses 027 786 0004 from his homes.co.nz profile) | `index.html`: search `277860004` |
| Confirm email (site uses j.punia@barfoot.co.nz, inferred from his Barfoot profile URL) | `index.html`: `AGENT_EMAIL` and the mailto links |
| Confirm Instagram follower count (site says 12K+) | `index.html`: hero channel strip and origin stats |
| 4 to 8 of his own reels or listing photos, with permission | Story player, Series cards and Storyboard (replace stock images in `assets/img/`) |
| 2 to 4 more client reviews with name, suburb and permission | `#comments` thread |
| Languages he speaks (for example English, Punjabi, Hindi) | Origin story greeting chips |
| Web3Forms access key, if enquiries should arrive without the email app | `index.html`: `FORM_ENDPOINT` and `FORM_KEY` |
| Domain name | add `canonical`, `og:url` and a `sitemap.xml` |
