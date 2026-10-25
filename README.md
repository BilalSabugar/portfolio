# Bilal Sabugar — engineering portfolio

A research-led portfolio connecting robotics, control systems, software and public source material. Built with Next.js, React, Three.js and Framer Motion; exported to GitHub Pages.

## Structure

- Interactive homepage evidence exhibit using real project CAD and prototype imagery.
- Searchable work index and six dedicated case studies.
- Separate records for the IJIRT journal paper and OSRS repository report.
- Company context, professional background, credentials and freelance enquiries.
- Optional 3D inspection of the original Novexa assembly STL.
- Canonical page metadata, structured data, site index and XML sitemap.

## Development

Run `npm install`, then `npm run dev`. The dev server serves the portfolio at port 3000.

## Verify

Run `npm run build`, then `node scripts/check-export.mjs`. The checker validates public HTML headings, titles, internal links/assets, JSON-LD and sitemap routes. For a GitHub Actions base-path build, it detects the repository path from the environment. You can also specify it: `node scripts/check-export.mjs /portfolio`.

The existing GitHub Actions workflow builds and validates the export before deploying to GitHub Pages on pushes to main. The generated `out/` folder needs no application server.

## Maintain

Use [CONTENT_GUIDE.md](CONTENT_GUIDE.md). Project and research data lives in `lib/portfolio.ts`. The research brief, source register, architecture and growth plan are in [docs/PORTFOLIO_STRATEGY.md](docs/PORTFOLIO_STRATEGY.md).

The contact form prepares an email draft rather than storing or sending messages. No analytics, browser CMS, private CV or unverified additional credentials are included. The original night-lab components remain in source history but are not rendered by the current homepage.
