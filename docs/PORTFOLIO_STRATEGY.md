# Portfolio research and implementation brief

Research date: 26 October 2026. Owner: Bilal Sabugar.

## Position

Bilal's strongest differentiator is the connection between physical robot development and software for operating, studying and building systems. The portfolio should make that connection visible through real work. A simulated room does not provide the evidence that the CAD, prototype photographs, source code and papers already provide.

Primary journeys: a technical collaborator investigates Novexa or OSRS; a client evaluates engineering services; a recruiter understands contribution, background and range. The first screen should establish name, discipline and a clear route into substantive work. All major records need their own HTML pages, not modal-only content.

## Research and design decisions

| Source | Finding applied | Decision |
| --- | --- | --- |
| [NN/g: UX design portfolios](https://www.nngroup.com/articles/ux-design-portfolios/) | Hiring reviewers need context, process, constraints and individual contribution. This is UX hiring research; its structure is useful here, not direct evidence about robotics hiring. | Every case study has problem, contribution, decisions, scope and sources. |
| [Figma portfolio examples](https://www.figma.com/resource-library/portfolio-website-examples/) | Strong examples connect identity, carefully selected work and a distinctive interaction. | Curate the opening around three connected stories; keep a complete searchable work index deeper in the site. |
| [Dribbble recruiter guidance](https://dribbble.com/resources/career/design-recruiter-portfolio-tips) | Reviewers need quickly understandable previews and cannot spend time decoding motion. | Large readable type, visible navigation, clear source images, purposeful transitions. |
| [AVEA](https://avea.studio/) | Work can feel spatial without crowding the whole screen. | Adopt restraint and an interactive exhibit; do not copy its visual identity or project content. |
| [Bruno Simon](https://bruno-simon.com/) | An interaction can itself demonstrate a person's craft. | Use Bilal's real CAD for optional 3D inspection, rather than a generic procedural robot. |
| [Google: crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) and [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) | Search needs actual URLs and accessible content. | Pre-render all case studies and indexes. Use anchor links rather than chapter buttons as the only route. |
| [Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | Original, useful content and first-hand expertise matter more than keyword repetition. | Explain actual work and its evidence. No invented results, ratings, testimonials or keyword-heavy filler. |
| [Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds) | Loading, responsiveness and layout stability have distinct measures. | Reserve media space; keep heavy 3D out of the initial load. Targets: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the 75th percentile. These are targets, not measured field results. |
| [W3C: interaction animation](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) | Visitors may need nonessential motion disabled. | Respect reduced motion; preserve native scrolling, focus and keyboard controls. |

## Public evidence inventory

Public GitHub API inventory found 11 repositories on BilalSabugar, including one fork and this portfolio. Six substantial work records are selected: Novexa and OSRS (now in organizations), RoboScout, WIRK, RecoverOS and Calm Pulse. Five smaller/earlier repositories remain accessible in a separate archive; the fork is not presented as original work.

- Novexa's old URL redirects to [Labs-Aetheron/Novexa](https://github.com/Labs-Aetheron/Novexa). Real CAD render and prototype photograph are available in `Documents/illustrations/Body/`; mechanical source files are available in `Mechanical/Design/`. Its original team context and current company hosting are both relevant. Do not call it solely Bilal's personal project.
- [OSRS AUTHORS.md](https://github.com/TeamOSRS/OSRS/blob/main/AUTHORS.md) identifies Bilal's contribution as platform engineering, RLS identification and full-stack robotics, with Aditya Jadav and Archie Veera.
- [RoboScout](https://github.com/BilalSabugar/RoboScout), [WIRK](https://github.com/BilalSabugar/wirk-opensource), [RecoverOS](https://github.com/BilalSabugar/RECOVEROS) and [Calm Pulse](https://github.com/BilalSabugar/CalmPulseGenAI) were inspected through public READMEs. Code claims are described as documented project scope, not independently reproduced production outcomes. Calm Pulse explicitly lists Bilal as a back-end developer on a team.
- [IJIRT paper](https://ijirt.org/publishedpaper/IJIRT199344_PAPER.pdf): exact title, four authors, issue and pages confirmed from the PDF. This is one publication, not an additional course certificate.
- [OSRS technical report](https://github.com/TeamOSRS/OSRS/blob/main/docs/BALL_BALANCER_RESEARCH_PAPER.md): the report heading and README use different titles. The portfolio uses the actual Markdown report heading, credits the core team, and labels it a repository technical report. The README's peer-review wording is insufficient to claim an independently verified journal publication.
- [Public LinkedIn search result](https://in.linkedin.com/in/bilal-sabugar) corroborates education 2025–2029 and Robot Kinematics credential AB6250044, issued September 2025 and listed as expiring December 2025. Direct LinkedIn page access was blocked. The credential must not be labeled currently valid or independently issuer-verified.
- [Aetheron Labs](https://www.aetheronlabs.in/) confirms Bilal as co-founder and CTO and lists S.L.A.B., Novexa, Raven, VIER and T.H.O.M.A.S. Programs remain inside the company context. SLAB's current public page describes a remotely operated prototype; V2 payload/lift are targets.

The GitHub connector's repository listing was empty. Public GitHub API and direct file retrieval supplied the repository inventory. No private account data was accessed. No additional certificates or awards were found in the sources inspected; absence here is not evidence that none exist.

## Architecture

Home → Work index → six individual project pages.

Home → Research → publication and technical report detail pages.

Home → Aetheron Labs → company role and official program links.

About → education, experience and credential index.

Contact → services, briefing prompts, direct email, LinkedIn and support.

Legacy project/certificate/blog URLs remain navigable. Site index and XML sitemap enumerate the new structure. All pages must be useful as direct search entry points.

## Content and visual system

Dark graphite and warm paper, copper accents, oversized restrained typography, large genuine work imagery, and deliberate whitespace. The opening exhibit lets visitors switch between CAD and prototype evidence. Case studies carry deeper content. Use real source assets with captions and links; never present generated illustrations as photographs.

Language: specific, formal and understandable. Separate documented features, project goals and measured outcomes. AI-assisted development disclosures remain visible where the project source explicitly documents them. Personal addresses, location labels and private contact details are excluded.

CV: optional. No approved CV exists in the checkout; offer a request link rather than inventing a document. A future public CV should exclude home address, date of birth, private references, signatures and confidential work. This is an editorial privacy recommendation, not legal advice. Company work is linked to existing public records; confidential materials need an explicit rights review before inclusion.

## Ranking and growth plan

1. Ship substantive pre-rendered pages with accurate titles, descriptions, canonical URLs, breadcrumbs and schema matching visible content.
2. Link the public portfolio from GitHub and LinkedIn; link project pages from their project READMEs where the owner chooses to do so. No profile or external repository writes are included in this pass.
3. Publish useful build notes, CAD decisions, reproducible experiments and updates when actual evidence exists. Avoid empty blogs and programmatically generated keyword pages.
4. Use Google Search Console to inspect the site and submit its sitemap. Account verification and submission require the owner's authorized access; creating files does not submit anything.
5. Review branded searches and relevant specific queries such as Novexa hexapod, OSRS robotics and Bilal Sabugar robotics. Measure index coverage, qualified enquiries and project-page engagement rather than vanity traffic.

No design, schema or sitemap guarantees indexing, ranking, award recognition or commercial results. GitHub Pages project sites cannot serve an authoritative domain-root robots.txt from `/portfolio/robots.txt`; rely on crawlable links, per-page robots metadata and sitemap submission, and do not claim otherwise.

## Editorial refinement: contribution before catalogue

The next pass prioritises a visitor understanding Bilal's work, rather than learning the portfolio's filing system. The opening statement names robotics and software directly. Project previews separate purpose, individual contribution, available evidence and current development stage. Robotics and software have distinct groups; smaller repositories remain secondary. Each detailed case adds a short engineering principle, without presenting it as a measured outcome.

Writing follows concise, scannable and objective web-content principles from [NN/g](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/) and the user-needs approach in [GOV.UK content design guidance](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/understand-content-design/). These sources inform the editorial approach; their research does not establish a measured improvement for this portfolio.

Four contact paths cover freelance projects, hiring or internships, research collaboration, and Aetheron Labs / investment conversations. The latter is an enquiry route, not a claim of an active funding round. Hiring guidance offers a CV on request; no unapproved public CV is introduced. Project-specific links preserve a reference in the draft. The visitor reviews and sends the message in their email application; the site is not an email-delivery service.

No new customers, revenue, benchmark performance, qualifications or team responsibilities were invented for this pass. Existing source attribution and AI-assisted implementation disclosures remain in place.
