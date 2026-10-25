# Maintaining Bilal Sabugar's portfolio

This is a Next.js static export deployed to GitHub Pages. Changes to main trigger the existing Pages workflow. Content is maintained in the repository; the old browser CMS is not connected to the public site.

## Content map

- `lib/portfolio.ts`: selected work, research, company programs, services, source links and smaller repositories.
- `app/about/page.tsx`: biography and education.
- `app/certificates/page.tsx`: course credential and its public record.
- `components/WorkExhibit.tsx`: interactive homepage evidence views.
- `app/portfolio.css`: current visual system. `app/globals.css` retains global/native-scrollbar and legacy styles.
- `lib/seo.tsx`, `app/sitemap.ts`: page metadata, structured data and the XML sitemap.
- `docs/PORTFOLIO_STRATEGY.md`: research, source register, architectural decisions and search strategy.

## Add a project

Add a record to `works` in `lib/portfolio.ts`. The case-study route and static URL are generated automatically. Include a problem, specific role, team context, decisions, scope, source URL and current status. Use source material rather than invented results. All selected projects enter the work index, site index and sitemap automatically.

Company programs stay under Aetheron Labs. A detailed company-related case study can also appear in the work index if its ownership and team context are explicit. Novexa's current repository is Labs-Aetheron/Novexa.

## Add research or credentials

Add a research record to `research`. Distinguish journal articles, preprints and repository reports. Use the exact source title, list collaborators, and do not claim peer review or a DOI without evidence. Course certificates belong in the credentials page, not as duplicate publications.

The current Robot Kinematics record comes from the public LinkedIn listing, including its listed expiry. No original certificate scan is available in this checkout. Additional awards or credentials need supporting material before inclusion.

## Media

`public/work/` contains real Novexa repository imagery and OSRS research figures. The Novexa CAD viewer loads the original 19 MB source STL only after a visitor opts in. It is a design viewer, not a movement simulation. Do not replace it with a generated imitation and describe that as original CAD.

Existing generated night-lab images remain in the repository for history but are not used by the rebuilt public pages.

## Contact and CV

The enquiry form prepares a mailto draft; the visitor reviews and sends it in their email application. No entries are submitted or stored by the site. Direct email, LinkedIn and Buy Me a Coffee are available.

No approved public CV is available. The site offers a CV request link. Prepare a public version deliberately before adding a download; omit private addresses, signatures, references' contacts and confidential details.

## Verify and deploy

Run `npm run build`, then `node scripts/check-export.mjs`. For a Pages base-path build, set GITHUB_ACTIONS=true and GITHUB_REPOSITORY=BilalSabugar/portfolio, build, then run `node scripts/check-export.mjs /portfolio`.

Check native links, work filters/search, exhibit tabs, mobile menu/Escape, a case study, research source links, and enquiry validation. Commit and push to main. Keep .env.local, screenshots and build output out of Git.

Old /projects and /blog routes remain as canonicalized aliases. Old chapter hashes route to the corresponding new pages. Search Console ownership and sitemap submission are separate account actions; generating the sitemap does not submit it or guarantee indexing.
