# Rebuild verification — 26 October 2026

## User journey

Identify Bilal's engineering focus, inspect a substantive project, understand contribution and source evidence, then find a professional contact route.

## Recorded checks

1. **Homepage — passed.** The redesigned page renders the identity, navigation and genuine source imagery. Design/Build/Control tabs switch to the intended source views. These are visitor-controlled rather than automatic animations. The previous simulated-room screenshot is retained locally as `qa-rebuild-before.png`.
2. **Work index — passed.** Robotics filter returns two records. Software plus a RoboScout query returns one record. An unmatched query displays an explicit empty state; clearing it restores six. Project links lead to dedicated pages. Earlier repositories remain in a distinct archive.
3. **Project/CAD — passed.** Novexa opens with role, team, source and development scope. The original 19 MB STL loads on request, renders in a Three.js canvas, and resets. Initial framing was corrected. No browser console errors were reported after this check. This is a mesh viewer, not a simulator.
4. **Mobile navigation — passed inspected states.** Menu opens and exposes links, Escape closes it and restores focus. Tested widths include 390 px and 320 px; document width stayed within the viewport on the inspected home, contact, research index and research record states. No horizontal overflow was observed in those states.
5. **Enquiries — validation passed.** Empty submission identifies name, email and brief as invalid. Form copy explains draft creation and direct email is available. No enquiry was sent. Successful mail delivery requires the visitor's email application and is not tested here.
6. **Research/credentials — passed inspected states.** Original paper link points to IJIRT199344_PAPER.pdf. Journal publication and repository technical report are separate. Credential record includes listed issuer, identifier, issue date and expiry; it does not imply current professional certification.
7. **Export/SEO — passed with deployment corrections.** Production build with GitHub Actions repository settings succeeded. Export checker validates public/legacy/error HTML files, internal asset and page targets, JSON-LD syntax, and 16 canonical sitemap entries under `/portfolio`. It caught an initial unprefixed icon URL. Live URL checks then exposed Next's nested output for the literal `/index/` route; the site index now uses `/directory/`, and the checker requires an actual file or directory index rather than accepting a folder alone. The custom icon now uses `/brand-icon.png` for an appropriate GitHub Pages MIME type. CI runs the export check before deploy.

## Screenshot evidence

Local screenshots (ignored by Git) include `qa-rebuild-home.png`, `qa-rebuild-mobile.png`, `qa-rebuild-work.png`, `qa-rebuild-cad.png`, `qa-rebuild-contact.png`, `qa-rebuild-paper.png` and `qa-rebuild-credential.png`. They were inspected during the browser checks. Some captures show the currently scrolled state rather than a full page.

## Limits and follow-through

### Contribution and enquiry refinement

- GitHub Pages production-mode build and TypeScript compilation passed. Targeted ESLint check passed for all changed TSX and content modules.
- Export checks passed for 22 public HTML pages and 16 sitemap URLs, plus six case-study contribution/scope/context checks and four homepage enquiry links.
- Browser: Software filter plus RoboScout query returned one case. Opening that case and its enquiry link retained the RoboScout reference. The homepage hiring link preselected hiring. Hiring, research and company options each displayed their matching guidance.
- Empty form submission identified name, email and message as invalid. No draft was sent and email delivery was not tested. The prepared-draft copy fallback is implemented but was not exercised with a submitted test message.
- Desktop (1440 px) and mobile (390 px) home/work/contact states were inspected. Checked mobile work and contact document widths remained within the viewport. Enquiry options precede the supporting services on mobile.
- React review removed effect-driven URL-to-state copying; contact query parameters are read under a Suspense boundary and initialise a keyed enquiry form. This also handles navigation between enquiry contexts without stale form state.

- No field Core Web Vitals data, Search Console ownership, actual Google index coverage, assistive-technology session or independent usability study was available. The strategy document's performance values are targets, not achieved measurements.
- Sources were public GitHub files/API, the original IJIRT PDF, the company website and an indexed LinkedIn profile result. Direct LinkedIn page access was blocked; the credential is not independently issuer-verified. No certificate image or public CV was fabricated.
- Code and research are presented with source context; external project benchmark claims were not independently reproduced. AI-assisted development disclosures were preserved for RoboScout and OSRS.
- Sitemap generation does not submit the site to Search Console or guarantee ranking. Profile backlink changes and Search Console account actions were not performed.
- The public site remains a static export. Content updates use the repository; no claim is made that a browser CMS is connected.
