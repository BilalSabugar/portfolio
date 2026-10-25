import ResearchDetail from "@/app/research/[slug]/page";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Novexa research", "Published design and fabrication research behind the Novexa hexapod.", "/research/novexa-hexapod/");
export function generateStaticParams() { return [{ slug: "fabrication-of-a-3d-printed-hexapod" }]; }
export default async function LegacyPaper({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== "fabrication-of-a-3d-printed-hexapod") notFound();
  return <ResearchDetail params={Promise.resolve({ slug: "novexa-hexapod" })} />;
}
