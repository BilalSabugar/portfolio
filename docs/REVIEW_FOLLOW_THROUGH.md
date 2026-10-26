# Portfolio review follow-through - 26 October 2026

## Evidence added

- **IIT Gandhinagar:** Dr. Rabinder Henry's public [internship announcement](https://www.linkedin.com/posts/rabinderhenry_robotics-ai-automation-activity-7460610503229329408-pni7) names Bilal, Aditya and Archie at the Robotics Lab. Indexed text attributed to Bilal's own post describes a half-humanoid ball-balancing internship; it is visible in public LinkedIn activity feeds, including [this indexed profile](https://in.linkedin.com/in/lakshyada-pradhan-b89aa936b). The role is now prominent on Home and About. Exact dates, a formal appointment title and supervisor assignment have not been independently established, so those specifics are not invented.
- **Public CV:** one-page, selectable PDF with embedded fonts, clickable professional links, verified project roles, education and publication. Rendered and inspected with Poppler. It intentionally excludes private address/phone, signatures, references' contacts and unverified internship dates. Its generator is `scripts/build-resume.py`.
- **OSRS results:** the [numerical summary](https://github.com/TeamOSRS/OSRS/blob/main/experiments/ball_balancer_hardware_sil/results_summary.json) and [harness](https://github.com/TeamOSRS/OSRS/blob/main/experiments/ball_balancer_hardware_sil/run_experiments.py) support the displayed means, standard deviations, n=20, 50 Hz simulation step, 8-second trials and randomised initial displacement. Units are converted from metres to centimetres for position error. Faster settling is presented alongside higher overshoot and error, not as an unconditional improvement. No physical-hardware benchmark or independent rerun is claimed.

## Software capture provenance

All screenshots are browser captures of the user's original repositories running locally, not generated mockups. No API keys, real payment credentials or personal workspace data were used. Temporary app checkouts, installations and compatibility patches are under ignored `qa-apps/`; none of those application repositories was pushed or modified remotely.

| Project | Source commit | Captured state | Local compatibility changes / limits |
| --- | --- | --- | --- |
| RoboScout | `e8858cf079dacdfc909c76f5219c77dc591baa38` | Original static torque calculator with default inputs | Prisma client generated. Database push failed, so the database-independent tool was used. Google font fetch was blocked in the QA process; the screenshot uses its font fallback. No paid research/API call was run. |
| WIRK | `1ed5ff2278c51b1a1d168f04887e78e81ecfb7d7` | Local-only dashboard with bundled starter data | Null-Firebase guards, missing logo imports and existing local-mode callback plumbing were fixed in the isolated preview checkout. UI layout was not redesigned. Cloud sync, subscriptions and live AI were not tested. |
| RecoverOS | `c71f87ab266dddde64feeb10abbe6e091c68fa45` | Original command center with the built-in synthetic 100-episode seed | Backend ran in simulation/test mode without payment or AI credentials. Amounts are simulated, not revenue achieved by Bilal or real merchants. No transaction action was executed. |
| Calm Pulse | `cae1401c79180f7515324cca1e53de7f14644e9d` | Original web welcome screen with static sample conversation | Web bundler switched to the repository's Webpack configuration; React Navigation ESM files were treated as JavaScript auto modules to resolve a require/ESM compatibility error. No live chat, health assessment or clinical claim was tested. |

Original captures are under `public/work/*-screen.png`, with delivery-only WebP derivatives. Each case includes its capture context; work-index labels distinguish simulated, starter and sample data. These captures establish interface appearance in the documented QA state, not production readiness of every source project.

## Implementation and maintenance

- Dedicated 1200x630 portfolio preview and six project-specific PNG cards; corresponding Open Graph and Twitter metadata.
- Contact messages prepare on the page first, then offer open-email and copy-message choices. No message is sent by the website.
- Self-hosted Manrope and DM Mono with SIL licence notices. Responsive WebP delivery preserves unchanged source images.
- Removed 20 unreachable legacy source modules, retired the non-connected browser-editor page implementations, and removed unused dependency declarations. Eight unused public assets were moved to ignored `qa-retired-assets/`; prior commits remain recoverable.
- Import reachability checker reports no unreachable modules in app/components/lib. This is a static import check, not a guarantee about arbitrary runtime code generation.
- Added a non-destructive Windows export normalisation step for the [upstream RSC segment filename issue](https://github.com/vercel/next.js/issues/85374). Linux CI remains the authoritative deployment build.

## Owner-only follow-through

Search Console ownership/submission and external profile backlinks are not completed. No corresponding connected-account write capability is available here. See `docs/SEARCH_DISCOVERY.md`. Exact internship dates and supervisor details need owner confirmation before adding them to the CV or timeline.

## Verification results

Production build, export checks, complete ESLint run, import reachability, browser journeys and final Lighthouse results are recorded in `docs/VERIFICATION.md`. Lighthouse reports are local ignored QA artifacts, not field Core Web Vitals or an independent portfolio rating.
