# Comprehensive portfolio review — 26 October 2026

## Scope and baseline

Reviewed source and the public site before editing, starting at portfolio commit `49e8022`. Preserved the forest/paper/copper visual identity, typography, original hardware imagery, CAD viewer, approved CV and static GitHub Pages architecture. This is a targeted improvement, not a redesign.

Fresh baseline captures were inspected for the homepage (desktop/mobile), work index and Novexa case. Evidence is saved outside the published site in the task's local `comprehensive-audit` visualization directory. Historical reports remain historical; this report supersedes their current-status statements.

## Confirmed findings and changes

| Surface | Before | After |
| --- | --- | --- |
| Homepage | IITGN internship and CV below the introduction; social profiles in footer | Exact headline retained; CTO, former IITGN internship and ATLAS identity in introduction; immediate research, PDF, GitHub and LinkedIn links |
| About | Research experience documented; organization schema used shortened identity | CV-backed research/team record retained; shared legal company identity in Person/Organization data |
| Projects | Novexa/OSRS decision data existed but was excluded from rendering; architecture implicit | Every selected case has explicit purpose, architecture and engineering decisions; roles, stage, sources and limitations retained |
| Walkthroughs | Only active tab's full explanation in initial reading flow | Native disclosure contains every stage, reason, input/output and source; exhibit supports Home/End and focusable panel |
| Research | Internship accessible on About only | Internship also on research index, distinct from publication/report records |
| Company | V1/V2 distinction present; legal identity inconsistent | Organization JSON-LD; explicit legal identity; payload/lift marked as V2 development targets |
| Contact | Draft/copy worked; copied feedback persisted after intent changes | Copy status cleared on intent change; validation, focus, prepared text and clipboard verified; no collection service added |
| Mobile navigation | Escape handled only inside nav links | Escape handled whenever menu is open, including focus on toggle; listener cleaned up on close |
| SEO | Verification instructions predated owner's successful screenshot | Owner-provided verification success recorded; sitemap fetch error remains unresolved; exact follow-through instructions |

## Nook inclusion decision

Included as a seventh, explicitly experimental case after source review and a genuine local application run. The screenshot is a review-created document, not customer data or a generated mockup.

- Source: `BilalSabugar/Nook`, `master`, commit `c863879ce8ec1f3bc950a22c69c712b1fe6c47f7`.
- UI verified: Space creation, document editing, Markdown preview, retained document after reload.
- Eight repository unit tests passed. These do not establish production security or tool interoperability.
- Direct arithmetic JSON-RPC call returned `Calculation result: 14` for `2+3*4`.
- Terminal `pwd` returned simulated `/workspace`. Source confirms no shell execution or container runtime.
- Browser route retrieves/parses HTTP content with a simulated fallback; it is not a streamed interactive browser. Voice is simulated.
- Provider adapters exist in source, but credentialed requests were not tested. No API key supplied or used.
- Spaces, agents and settings use browser localStorage; chat/computer state is not persistent server infrastructure. No production authentication established.
- Tool endpoints provide limited JSON-RPC, not verified MCP compliance. Search is canned; an advertised fetch tool lacks a matching implementation.
- No specific implementation-authorship/AI-assistance disclosure found. The case does not invent one or claim sole manual implementation.
- `npm ci` failed lockfile consistency under npm 11 and npm 10. A regenerated lockfile in an isolated local checkout allowed preview; no external repository changed remotely.
- Nook's Google Fonts requests failed in the local environment, so the genuine screenshot uses its font fallback. The portfolio itself keeps its self-hosted fonts.
- Only static case content and screenshot are published. Nook APIs/dependencies are not part of the portfolio export.

## Validation

Production-mode build uses `GITHUB_ACTIONS=true`, `GITHUB_REPOSITORY=BilalSabugar/portfolio` and `/portfolio` base path.

- Production build, complete ESLint, explicit TypeScript check and strict import reachability passed during implementation.
- Export checker passed: 23 public/legacy/error HTML pages, 17 canonical sitemap entries, local links/assets, responsive images, JSON-LD syntax, social cards, CV signature and ownership proof. Sitemap pages now require self-canonical metadata and absence of noindex. All seven cases require architecture and decisions.
- Source imports: 43 reachable modules, no unreachable modules. No unproven bulk CSS deletion; route-specific/responsive selectors preserved.
- CV SHA-256 unchanged: `AFBE976BCF94E4DBFB729C357346C9A5ABCDE9021376630CA8BD6A4AC40E1CFC`.
- Browser: homepage → work → search Nook → case → contextual enquiry passed.
- Contact: empty submission showed three errors and focused name; valid input focused prepared draft; actual clipboard contained subject, message and Nook reference. Hiring exposed CV. No email sent.
- Exhibit: End selected/focused Control; Home returned to Design. Novexa End selected Coordination; native read-all disclosure exposed all stages.
- No warnings/errors captured in the inspected local portfolio journey.
- Responsive render checks: 320 homepage, 390 work, 768 OSRS, 1024 research, 1440 contact. Focused checks passed for viewport metadata, contrast, alternatives, button/link names and titles. Screenshots inspected at each width. Representative renders, not exhaustive interactions at every width.
- In-app viewport overrides did not reliably apply. Lighthouse emulation supplied exact-width captures. Native menu interaction used the browser's actual narrow viewport. These are not five physical-device tests.
- Reduced-motion CSS and `useReducedMotion` retained/reviewed in source. No screen-reader or preference-emulation test claimed.

### New local Lighthouse measurements

Lighthouse 13.5.0, local production export homepage, default mobile / desktop preset, single runs. Other activity and network conditions affect results.

| Mode | Performance | Accessibility | Best practices | SEO | LCP | CLS |
| --- | --- | --- | --- | --- | --- | --- |
| Mobile | 94 | 100 | 100 | 100 | 3.05 s | 0 |
| Desktop | 100 | 100 | 100 | 100 | 0.66 s | 0 |

Remaining lab observations: unused JavaScript, image-delivery opportunities and cache lifetimes. Local cache headers do not establish GitHub Pages caching. Scores are not field Core Web Vitals, complete WCAG conformance or indexing evidence. No performance gain claimed from these runs alone.

## Search discovery and external limitations

Ownership success is supported by the owner's screenshot. Submission was accepted, then Search Console reported **Couldn't fetch**. HTTP/XML validation does not resolve Google's fetch failure. Follow `SEARCH_DISCOVERY.md` for live inspection and exact sitemap URL. Google account and profile backlink changes were not performed.

Paper, repository and company links remain claim sources. No new hardware experiment, issuer verification, production revenue, security certification or investor validation invented. Nook's individual contribution/AI-assistance details remain an owner clarification.

Deployment and post-release measurements are reported only after confirming workflow/live content, not assumed from a local build.
