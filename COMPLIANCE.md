# Compliance notes

What this site does to meet New Zealand requirements, and what still needs a person to sign off.
This is a working checklist, not legal advice. Barfoot & Thompson's compliance team should approve the site before launch.

## Real Estate Agents Act 2008 and the Code of Conduct (Professional Conduct and Client Care Rules 2012)
| Requirement | How the site handles it |
|---|---|
| Agency named and licensed status shown in advertising | "Barfoot & Thompson Ltd · Licensed REAA 2008" under the hero buttons and in the footer |
| Licence details checkable | Footer link to the REA public register |
| No misleading information (rules 6.4, 9.4) | No unproven reach claims or rankings. "Number one" is labelled as a goal. Stock photos are labelled "illustrative, not current listings" in the stories, formats and suburb sections and in the footer. Service times are phrased as aims |
| Written appraisals backed by comparable sales (rules 10.2, 10.3) | Scene 01 and the FAQ say the appraisal is written and based on comparable sales, and that missing comparables are explained in writing |
| Advertising only on terms the client authorises (rule 10.9) | FAQ: "Nothing is advertised without your approval." Early access to listings only "when the seller is happy for me to share them early" |
| Recommend legal advice before signing (rule 9.7) | Scene 02 (agency agreement) and the buyers note |
| Fair dealing with customers, and who the licensee acts for (rule 6.2) | Buyers note: "When I'm marketing a home, I act for the seller. I'll always deal with you fairly and honestly." |
| Conflicts and referral benefits (rules 9.14, 9.15) | Buyers section: any fee or benefit for a referral is disclosed first |
| Complaints information available (rules 12.1 to 12.3) | FAQ "What if I'm not happy with something?" covers talking to Jot, Barfoot's complaints process and REA |
| Independent guidance | FAQ and footer link to settled.govt.nz |

## Fair Trading Act 1986
- The only review is a real public review; written permission is still needed (see CONTENT-NEEDED.md).
- Every figure used (40+ years in the family, 15+ years in NZ, 12K+ followers) needs evidence on file before launch.
- No "free" offer has hidden conditions. The appraisal is stated as free with no obligation.

## Privacy Act 2020
- `privacy.html` covers who collects the information, why, who may see it (including overseas form services), storage, and the rights to access and correct it, with a link to the Privacy Commissioner. It is linked from the form and the footer.
- The form asks only for what's needed. Email is optional. There is a honeypot instead of a tracking captcha.
- No analytics or tracking cookies. Only theme and motion preferences are stored, on the visitor's own device.

## Accessibility (WCAG 2.2 AA)
- An axe-core 4.10 scan (WCAG 2.0/2.1/2.2 A and AA rules) found 0 violations on the home page (light and dark modes), the privacy page and the 404 page.
- A "Pause animations" control stops the marquee, the stories, the timecode and the decorative motion (WCAG 2.2.2). The choice is remembered, and reduced-motion settings are respected.
- Stories can be paused and driven by keyboard (arrow keys, buttons), with labelled controls.
- The page has a skip link, labelled landmarks, visible focus, 44px touch targets, form errors linked to their fields and an `aria-live` status.

## Still to confirm (blocks launch)
See the "Compliance sign-off" table in `CONTENT-NEEDED.md`:
- Barfoot approval
- Jot's licence class on the REA register
- written review permission
- follower-count evidence
- Barfoot complaints link
- privacy officer review
