# Search discovery handoff - 26 October 2026

## Implemented

- Pre-rendered HTML pages, distinct titles and descriptions, canonical URLs, crawlable project links, breadcrumbs and relevant structured data.
- Sitemap: https://bilalsabugar.github.io/portfolio/sitemap.xml
- Public CV linked from About, the hiring enquiry and the footer.
- A dedicated portfolio sharing card plus six project-specific sharing cards. Research records use the related project's preview.
- Responsive image derivatives and self-hosted, licensed fonts. Original project assets are retained.

## Owner access needed: Google Search Console

### Verification proof supplied

The owner supplied the HTML verification file and HTML-tag token on 26 October 2026. Both are installed for the URL-prefix property `https://bilalsabugar.github.io/portfolio/`. Keep `public/google44b86cf86f16f1fb.html` and the Google verification metadata in `app/layout.tsx` after verification. These are public ownership proofs, not application API credentials. The separately supplied DNS TXT token is not used: this project does not control GitHub's `github.io` DNS.

The owner's subsequent screenshot confirms **Ownership verified**, using the HTML file method. Keep the verification file in every deployment. This confirmation comes from the owner's evidence, not an authenticated account action performed by this agent.

The owner also supplied screenshots of a successful submission followed by **Couldn't fetch / Sitemap could not be read**, with zero discovered pages. The sitemap itself returns HTTP 200 and valid XML at the correct project path. Browser availability is not evidence that Google fetched it successfully. No indexing or ranking is claimed. The automation browser does not have the owner's authenticated Search Console session.

1. Open https://search.google.com/search-console/ with the Google account that should own the property.
2. Add a **URL-prefix** property for `https://bilalsabugar.github.io/portfolio/`. A domain property is not appropriate for this shared GitHub Pages host unless the owner controls a separate custom domain and its DNS.
3. Choose HTML-tag verification and provide only the verification tag/token, not a password or account cookie. It can then be added to the root metadata and deployed. Alternatively, provide Google's verification HTML file for inclusion under `public/`.
4. Use the full sitemap URL `https://bilalsabugar.github.io/portfolio/sitemap.xml`. The host-root `/sitemap.xml` is a different URL and is not this project's sitemap. Check **Open sitemap** in the submitted record to confirm its actual address.
5. Review indexing status after Google recrawls. An indexing request, valid sitemap or successful HTTP response does not guarantee inclusion or ranking.

### Remaining fetch investigation

In the verified URL-prefix property, inspect `https://bilalsabugar.github.io/portfolio/`, select **Test live URL**, and record whether page fetch and indexing are allowed. Inspect a representative project URL as well. If those tests fail, use the exact fetch error to diagnose the next step. If they pass, resubmit the exact sitemap URL once and allow processing; repeated submissions do not establish indexing. Keep the status and last-read timestamp as evidence. Do not use Google's restricted Indexing API as a substitute for normal portfolio crawling.

## Profile links

Add the canonical portfolio URL to GitHub's profile website field, LinkedIn's contact/featured links, and the Aetheron founder profile where appropriate. Those account/profile changes were not performed in this repository task. Project-specific links are useful when describing Novexa or OSRS in a post.

## Measurement

Keep Lighthouse reports separate from field Core Web Vitals and indexing evidence. Automated scores describe the audited URL and test conditions, not the full site or every visitor. A public search with no returned result is not proof that every search engine has excluded the site.
