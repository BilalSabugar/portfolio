import type { Metadata } from "next";
import { research, siteUrl, works } from "./portfolio";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path}`;
  const work = works.find(item => path === `/work/${item.slug}/`) ?? works.find(item => research.some(paper => path === `/research/${paper.slug}/` && paper.project === item.slug));
  const preview = `${siteUrl}/share/${work?.slug ?? "portfolio"}.png`;
  return { title, description, alternates: { canonical: url },
    openGraph: { title: `${title} — Bilal Sabugar`, description, url, type: "website", images: [{ url: preview, width: 1200, height: 630, alt: work ? `${work.title} — ${work.contribution}` : "Bilal Sabugar — Robotics and software engineering portfolio" }] },
    twitter: { card: "summary_large_image", title: `${title} — Bilal Sabugar`, description, images: [preview] },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
