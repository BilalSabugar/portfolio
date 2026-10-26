import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioShell, PageIntro, TextLink } from "@/components/PortfolioShell";
import { research } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";
import { ResearchExperience } from "@/components/ResearchExperience";
export const metadata = pageMetadata("Research & publications", "Published Novexa hexapod research and OSRS technical documentation by Bilal Sabugar and collaborators, with original sources, authorship and publication status.", "/research/");
export default function ResearchPage() {
  return <PortfolioShell><PageIntro label="Research / Publications & reports" title="Make the reasoning visible." intro="The methods, architecture and development behind the work. Journal publications and repository technical reports are identified separately." /><ResearchExperience /><div className="research-records">{research.map((item, i) => <article key={item.slug}><span className="record-number">0{i + 1}</span><div><p className="eyebrow">{item.type} / {item.date}</p><h2><Link href={`/research/${item.slug}/`}>{item.title}<ArrowUpRight /></Link></h2><p>{item.summary}</p><p className="research-byline">{item.authors}</p><span className="record-venue">{item.venue}</span><TextLink href={`/research/${item.slug}/`}>Read the research record</TextLink></div></article>)}</div><section className="research-note section-space"><p className="eyebrow">Research in practice</p><h2>Read the source.<br />Then inspect the system.</h2><p>The related project pages connect the research to CAD, code, architecture and development scope.</p><TextLink href="/work/">Explore the projects</TextLink></section></PortfolioShell>;
}
