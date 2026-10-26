import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioShell, PageIntro, TextLink } from "@/components/PortfolioShell";
import { programs, links } from "@/lib/portfolio";
import { companyIdentity, JsonLd, pageMetadata } from "@/lib/seo";
import { resumePath } from "@/lib/profile";
import { asset } from "@/lib/portfolio";

export const metadata = pageMetadata("Aetheron Labs", "Bilal Sabugar's role as co-founder and CTO of Aetheron Labs, with company robotics programs, contribution context and official project sources.", "/company/");

export default function CompanyPage() {
  return <PortfolioShell>
    <JsonLd data={{ "@context": "https://schema.org", ...companyIdentity }} />
    <PageIntro label="Company / Co-founder & CTO / Since May 2026" title="Aetheron Labs." intro="Aetheron Labs LLP develops robotic systems for industrial automation and material handling. I’m building it with co-founder and CEO Aditya Jadav, leading technical development across software, embedded electronics, mechanical design and hardware integration." />
    <div className="company-introduction">
      <div><p className="eyebrow">My contribution</p><h2>Design the parts.<br />Build the system.<br />Work as a team.</h2></div>
      <div><p className="eyebrow">Aetheron Labs LLP — Robotics & Automation, India</p><p>I coordinate prototyping, component selection, testing and integration across the mechanical, electronics and software systems. S.L.A.B. V1 is one example: app-controlled mobility and lifting, developed with the team.</p><p>The programs below are presented in the company context, not as solely owned personal projects. Role and development-stage descriptions follow my October 2026 CV; the company records provide the wider program context.</p><a className="button-secondary" href={links.company} target="_blank" rel="noreferrer">Visit Aetheron Labs<ArrowUpRight size={18} /></a></div>
    </div>
    <section className="company-programs section-space">
      <div className="section-heading"><div><p className="eyebrow">Company programs</p><h2>Different applications.<br />A shared engineering team.</h2></div><p>Work spanning material handling, legged robots, inspection and training. Each program is at its own development stage; follow the company records for the current scope.</p></div>
      {programs.map((program, index) => <article key={program.title}>
        <span className="record-number">0{index + 1}</span>
        <div><h3>{program.title}</h3><p>{program.description}</p><dl className="program-context"><div><dt>My work</dt><dd>{program.contribution}</dd></div><div><dt>Next / planned</dt><dd>{program.next}</dd></div></dl></div>
        <div><span className="eyebrow">{program.status}</span>{program.href.startsWith("/") ? <Link className="text-link" href={program.href}>Explore the project<ArrowUpRight size={18} /></Link> : <a className="text-link" href={program.href} target="_blank" rel="noreferrer">Read the company record<ArrowUpRight size={18} /></a>}</div>
      </article>)}
      <p className="content-source">Development stages and personal contributions: <a href={asset(resumePath)}>owner-supplied CV, October 2026</a>. These descriptions are not independent product validation.</p>
    </section>
    <section className="case-conversation company-conversation"><p className="eyebrow">Partnerships & company enquiries</p><h2>Want to discuss Aetheron Labs?</h2><p>For a technical partnership, a program discussion or an investment conversation, share your organisation and the area you want to explore. Company-specific details can then be discussed in the right context.</p><TextLink href="/contact/?intent=company">Start a company conversation</TextLink></section>
  </PortfolioShell>;
}
