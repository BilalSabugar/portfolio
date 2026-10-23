# Maintaining this portfolio

The public site is a static Next.js export deployed to GitHub Pages. There is no connected browser CMS. The legacy admin routes explain this instead of offering an editor whose changes never reach the public site.

## Content locations

- `components/PortfolioExperience.tsx`: chapter introductions, project context and contact flow.
- `lib/atlas-data.ts`: public repositories, company programs and profile links.
- `lib/portfolio-data.ts`: education, credentials, services and archive records.
- `lib/site-content.ts`: research article summaries.

## Before publishing a record

1. Verify its title, dates, contribution and status against an accessible source.
2. Distinguish personal work, team work and company-owned work. Company programs stay under Aetheron Labs.
3. Separate working features from plans and performance targets. Do not publish client-confidential details or claims without approval.
4. Use real project photos as evidence. The night-lab background and interactive robot are illustrative, not prototype photographs or engineering CAD.
5. Add only credentials that can be substantiated. Do not invent achievements to fill a section.

## Contact and privacy

The contact form creates a `mailto:` draft. It does not send, save or upload enquiries. The visitor sends the message from their email application. Direct email and LinkedIn remain alternatives.

No CV download is offered because no approved public CV is in this repository. If added later, remove private addresses, signatures, references' contact details and other information not intended for public distribution.

## Verify and deploy

Run `npm run build`. Review the homepage, all seven chapter dialogs, keyboard Escape/focus, mobile navigation, project and research archives, and contact field validation. Commit and push approved changes to `main` to trigger the existing GitHub Pages workflow. Do not include `.env.local` in Git.

Shared chapter URLs use hashes: `#projects`, `#systems`, `#research`, `#opensource`, `#company`, `#credentials`, `#contact`. GitHub Pages remains compatible because they do not require a server router.
