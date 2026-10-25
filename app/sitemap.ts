import type { MetadataRoute } from "next";
import { siteUrl, works, research, reviewedOn } from "@/lib/portfolio";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/work/", "/research/", "/company/", "/about/", "/certificates/", "/contact/", "/directory/", ...works.map(work => `/work/${work.slug}/`), ...research.map(item => `/research/${item.slug}/`)];
  return paths.map(path => ({ url: `${siteUrl}${path}`, lastModified: reviewedOn }));
}
