import type { Metadata } from "next";
import { siteUrl } from "./portfolio";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path}`;
  return { title, description, alternates: { canonical: url },
    openGraph: { title: `${title} — Bilal Sabugar`, description, url, type: "website", images: [{ url: `${siteUrl}/work/novexa-cad.png`, width: 1920, height: 873, alt: "Novexa hexapod CAD from the project repository" }] },
    twitter: { card: "summary_large_image", title: `${title} — Bilal Sabugar`, description, images: [`${siteUrl}/work/novexa-cad.png`] },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
