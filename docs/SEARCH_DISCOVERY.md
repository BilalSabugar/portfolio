# Search discovery handoff - 26 October 2026

## Implemented

- Pre-rendered HTML pages, distinct titles and descriptions, canonical URLs, crawlable project links, breadcrumbs and relevant structured data.
- Sitemap: https://bilalsabugar.github.io/portfolio/sitemap.xml
- Public CV linked from About, the hiring enquiry and the footer.
- A dedicated portfolio sharing card plus six project-specific sharing cards. Research records use the related project's preview.
- Responsive image derivatives and self-hosted, licensed fonts. Original project assets are retained.

## Owner access needed: Google Search Console

Direct browser access was checked on 26 October 2026: Search Console leads to Google's sign-in page. No authenticated ownership session or verification token is available. Nothing has been submitted or connected on the owner's behalf.

1. Open https://search.google.com/search-console/ with the Google account that should own the property.
2. Add a **URL-prefix** property for `https://bilalsabugar.github.io/portfolio/`. A domain property is not appropriate for this shared GitHub Pages host unless the owner controls a separate custom domain and its DNS.
3. Choose HTML-tag verification and provide only the verification tag/token, not a password or account cookie. It can then be added to the root metadata and deployed. Alternatively, provide Google's verification HTML file for inclusion under `public/`.
4. After verification, submit `sitemap.xml` in the Sitemaps section. Use URL Inspection for the homepage and selected case studies, and request indexing where available.
5. Review indexing status after Google recrawls. An indexing request, valid sitemap or successful HTTP response does not guarantee inclusion or ranking.

## Profile links

Add the canonical portfolio URL to GitHub's profile website field, LinkedIn's contact/featured links, and the Aetheron founder profile where appropriate. Those account/profile changes were not performed in this repository task. Project-specific links are useful when describing Novexa or OSRS in a post.

## Measurement

Keep Lighthouse reports separate from field Core Web Vitals and indexing evidence. Automated scores describe the audited URL and test conditions, not the full site or every visitor. A public search with no returned result is not proof that every search engine has excluded the site.
