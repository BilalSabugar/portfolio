# Rebuild verification — 26 October 2026

## Latest comprehensive review

See [COMPREHENSIVE_REVIEW.md](COMPREHENSIVE_REVIEW.md) for the current audit, seven-case export checks, Nook review and new measurements. The earlier entries below are a historical log. In particular, the owner subsequently confirmed Search Console ownership via screenshot; sitemap fetch remains unresolved, and the approved three-page PDF supersedes the earlier generated résumé.

## Prepare-message feedback fix

- Reproduced on the public contact page: empty fields invoked native validation without persistent inline feedback; no JavaScript error was logged. A valid form created the draft below the button without moving focus to it. No email was sent.
- Added explicit required-name/email/trimmed-20-character-message validation, inline messages linked by aria-describedby, invalid-field styling, an alert summary and first-invalid-field focus. The message-length requirement is visible before submitting.
- Valid preparation now focuses and scrolls to the labelled draft region, including repeated clicks. Editing form fields or removing the project reference invalidates the old draft. The website still only prepares mailto/copy content locally; it has no email-sending API.
- Production build/TypeScript, export checks and targeted ESLint passed. Browser tests covered empty fields, malformed email, short message, valid input with a project reference and ampersand, repeated preparation and successful clipboard feedback. At 390 px, document width was 378 px and the draft received focus within the viewport. External email-app launch/delivery was not executed.

## CV-alignment pass — 26 October 2026

Story: a visitor reads the updated background, training, company or coursework record, inspects its CV/source context and reaches the matching enquiry without submitting data to a backend.

- Build and TypeScript passed. Export checks passed for 22 public HTML pages and 16 canonical sitemap URLs, including new assertions for internship/company dates, four training records, company contribution/planned-work labels and coursework scope. Static imports report 42 reachable modules and no unreachable modules; targeted ESLint passed.
- About now reflects the CV's June–July 2026 internship, degree wording and May 2026 company-role start. The CV itself is unchanged. Dates are owner-supplied facts, not independent institutional verification; no supervisor assignment was inferred.
- Browser: About → training navigation passed. Four training records rendered under two groups. At 390 px, training and company document widths were 378 px; coursework Work at 320 px was 308 px. No horizontal page overflow was measured in those states.
- Company page rendered four programs with contribution and next/planned sections. Its enquiry link selected the company radio option. Work's coursework jump reached #coursework; the robot-learning enquiry selected research. All contact actions remained local draft preparation; no email was sent.
- The official S.L.A.B., Raven and VIER program URLs each returned HTTP 200. Novexa and OSRS GitHub trees contained no committed MP4/WebM/MOV/GIF demo in the checked tree. Existing CSV simulation evidence remains separate from physical test results; no new physical measurement or demonstration was invented.
- Search Console opened Google's sign-in screen, so ownership verification, sitemap submission and index coverage remain unverified. No credentials, property token or profile settings were changed. The sitemap and page metadata remain available for owner follow-through.
- React quality review: new content is server-rendered, stable keys and labelled sections are used, no new effects/client fetching or libraries were introduced, and the existing responsive/reduced-motion system is retained.

Historical verification record. Temporary screenshots, Lighthouse JSON reports, isolated app checkouts and the superseded generated CV were deleted during the owner's requested cleanup. The results below record earlier checks; current source imagery, the owner-supplied CV and preview reproduction patches remain versioned. Previously tracked retired files can be recovered from Git history; deleted untracked QA artifacts have no repository recovery copy.

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

### Interactive engineering and profile refinement

- All three Novexa stages and all four OSRS stages were exercised in the local browser. Stage selection changed the explanatory heading and content. Home/End navigation and right-arrow wrapping were checked. The wrapped focus landed on Sense, with exactly one selected tab; the panel's accessible label matched the selected tab ID.
- Desktop (1440 px) and mobile (390 px) walkthrough layouts were visually inspected. At 320 px, OSRS's document width stayed within the viewport; the About page was also checked for overflow at that width. No browser console errors were returned in the inspected OSRS state.
- The case-header walkthrough link was exercised. OSRS's project enquiry retained its project reference, and the company page's enquiry link opened the company-specific guidance.
- Targeted ESLint passed on the changed React and data files. Production-mode build and the export checker passed before final publishing. The checker also validates three/four stage counts, exactly one initially selected tab and exported tab-to-panel relationships for the two walkthroughs.
- These checks establish the implemented interactions and inspected layouts, not general accessibility certification, independent research reproduction or improved hiring/investment conversion.

- No field Core Web Vitals data, Search Console ownership, actual Google index coverage, assistive-technology session or independent usability study was available. The strategy document's performance values are targets, not achieved measurements.
- Sources were public GitHub files/API, the original IJIRT PDF, the company website and an indexed LinkedIn profile result. Direct LinkedIn page access was blocked; the credential is not independently issuer-verified. No certificate image or public CV was fabricated.
- Code and research are presented with source context; external project benchmark claims were not independently reproduced. AI-assisted development disclosures were preserved for RoboScout and OSRS.
- Sitemap generation does not submit the site to Search Console or guarantee ranking. Profile backlink changes and Search Console account actions were not performed.
- The public site remains a static export. Content updates use the repository; no claim is made that a browser CMS is connected.

### Review follow-through — 26 October 2026

- Added IIT Gandhinagar research experience with public announcement sources. Exact dates and formal supervisor remain unconfirmed and are omitted. Detailed provenance is in REVIEW_FOLLOW_THROUGH.md.
- Generated and visually inspected the public one-page A4 PDF CV. Text is selectable, fonts embedded and links clickable. Private address, phone, date of birth and references are excluded. The earlier note about no public CV predates this intentionally authored document.
- Captured genuine RoboScout, WIRK, RecoverOS and Calm Pulse interfaces from source checkouts. Preview-only startup patches for WIRK and Calm Pulse are preserved in preview-patches/; reverse-apply checks passed. Starter, synthetic and static sample data are labelled. No upstream application repository was modified remotely.
- OSRS reports repository means and standard deviations for 20 simulated trials per configuration, with conditions and metric definitions. Experiments were not independently rerun; no physical-hardware benchmark is claimed.
- Production export and TypeScript build passed. Complete ESLint passed. Static imports report 41 reachable modules and no unreachable modules. Export checks cover 22 HTML pages, 16 sitemap entries, responsive assets, seven 1200×630 sharing cards and the PDF signature. Use /portfolio when checking the repository-prefixed local build.
- Browser checks exercised the homepage research link, About research section, CV URL, hiring enquiry selection, invalid form feedback, prepared message and successful copy fallback. No email was sent. Software filtering displayed four genuine previews. Mobile research and About layouts were inspected; OSRS document width was 308 px in a 320 px viewport.
- Self-hosted fonts and responsive WebP delivery were verified. Mobile hero selects the 640 px derivative. Removed legacy modules and assets remain recoverable from Git history; retired assets also remain in ignored qa-retired-assets/.
- Lighthouse 13.5.0 baseline on the previous public homepage: mobile performance 69, desktop 92; accessibility, best practices and SEO 100. Optimised local production preview: mobile performance 97, accessibility 100, best practices 100, SEO 100; LCP 2.6 s, CLS 0, TBT 40 ms. Published release 7fa0e0c: mobile performance 95 (LCP 2.6 s, CLS 0, TBT 30 ms); desktop performance 100 (LCP 0.5 s, CLS 0.01, TBT 0 ms). Accessibility, best practices and SEO were 100 in both public runs. These are lab snapshots, not field Core Web Vitals or guaranteed visitor performance. Reports: ignored qa-lighthouse-after-mobile.json and qa-lighthouse-after-desktop.json.
- GitHub Pages workflow 40265186721 completed successfully. Live homepage-to-research navigation and four-project software filtering passed; all four genuine software images loaded. Public PDF, portfolio/OSRS sharing cards, sitemap and a responsive screenshot returned HTTP 200 with appropriate MIME types. Published screenshots are saved locally as qa-review-live.png and qa-review-live-research.png.
- Search Console ownership and sitemap submission are not complete. Owner verification is required; instructions are in SEARCH_DISCOVERY.md. External profile backlinks and exact internship dates remain owner follow-through.
