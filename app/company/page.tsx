import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioShell, PageIntro, TextLink } from "@/components/PortfolioShell";
import { programs, links } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Aetheron Labs", "Bilal Sabugar's role as co-founder and CTO of Aetheron Labs, with company robotics programs, contribution context and official project sources.", "/company/");

export default function CompanyPage() {
  return <PortfolioShell>
    <PageIntro label="Company / Co-founder & CTO" title="Aetheron Labs." intro="A robotics and mechatronics company I’m building with co-founder and CEO Aditya Jadav. My focus is mechanical design, fabrication and bringing the physical system together." />
    <div className="company-introduction">
      <div><p className="eyebrow">My contribution</p><h2>Design the parts.<br />Build the system.<br />Work as a team.</h2></div>
      <div><p>As co-founder and CTO, I work across mechanical concepts, structural fabrication and mechatronic integration. That means considering how the structure, actuators, electronics and assembly fit together.</p><p>The programs below belong to Aetheron Labs and are developed by the team. Each has its own development stage, engineering constraints and official record.</p><a className="button-secondary" href={links.company} target="_blank" rel="noreferrer">Visit Aetheron Labs<ArrowUpRight size={18} /></a></div>
    </div>
    <section className="company-programs section-space">
      <div className="section-heading"><div><p className="eyebrow">Company programs</p><h2>Different applications.<br />A shared engineering team.</h2></div><p>Work spanning material handling, legged robots, inspection and training. Each program is at its own development stage; follow the company records for the current scope.</p></div>
      {programs.map((program, index) => <article key={program.title}>
        <span className="record-number">0{index + 1}</span>
        <div><h3>{program.title}</h3><p>{program.description}</p></div>
        <div><span className="eyebrow">{program.status}</span>{program.href.startsWith("/") ? <Link className="text-link" href={program.href}>Explore the project<ArrowUpRight size={18} /></Link> : <a className="text-link" href={program.href} target="_blank" rel="noreferrer">Read the company record<ArrowUpRight size={18} /></a>}</div>
      </article>)}
    </section>
    <section className="case-conversation company-conversation"><p className="eyebrow">Partnerships & company enquiries</p><h2>Want to discuss Aetheron Labs?</h2><p>For a technical partnership, a program discussion or an investment conversation, share your organisation and the area you want to explore. Company-specific details can then be discussed in the right context.</p><TextLink href="/contact/?intent=company">Start a company conversation</TextLink></section>
  </PortfolioShell>;
}
