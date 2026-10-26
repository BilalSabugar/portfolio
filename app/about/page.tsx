import { ArrowUpRight, Download } from "lucide-react";
import { PortfolioShell, PageIntro, TextLink } from "@/components/PortfolioShell";
import { ResearchExperience } from "@/components/ResearchExperience";
import { links, siteUrl, asset } from "@/lib/portfolio";
import { resumePath } from "@/lib/profile";
import { JsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About Bilal Sabugar", "Bilal Sabugar: IIT Gandhinagar robotics research internship, co-founder and CTO of Aetheron Labs, and B.Tech student at ATLAS. Public resume, engineering projects and research.", "/about/");
const capabilities = [
  { label: "Mechanical systems", title: "From CAD to assembly", text: "Mechanical design, printed components and mechatronic integration. In Novexa, I contributed to the work joining the structure, actuators and electronics.", href: "/work/novexa/", link: "Novexa: design and physical prototype" },
  { label: "Robotics software", title: "Connect the experiment", text: "Platform engineering, control interfaces and online system identification. OSRS records my responsibilities alongside the other core contributors.", href: "/work/osrs/", link: "OSRS: platform and team contribution" },
  { label: "Engineering tools", title: "Make decisions inspectable", text: "Product direction and workflow design for research tools. RoboScout connects sources and deterministic calculations; its implementation uses AI coding agents.", href: "/work/roboscout/", link: "RoboScout: research workflow and architecture" },
];

export default function AboutPage() {
  return <PortfolioShell>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: { "@type": "Person", "@id": `${siteUrl}/about/#bilal`, name: "Bilal Sabugar", url: `${siteUrl}/about/`, jobTitle: "Co-founder and CTO", worksFor: { "@type": "Organization", name: "Aetheron Labs", url: links.company }, sameAs: [links.github, links.linkedin], knowsAbout: ["Robotics", "Mechatronics", "Robot control", "Software engineering"] } }} />
    <PageIntro label="About / Bilal Sabugar" title="I like building the whole system." intro="Mechanical design, control, sensing and the software around a machine. My work connects those parts through prototypes, research and engineering tools." />
    <div className="profile-actions"><a className="button-primary" href={asset(resumePath)} download>Download CV · PDF<Download size={17} /></a><TextLink href="/contact/?intent=hiring">Discuss a role</TextLink></div>
    <section className="about-statement"><p>I’m the co-founder and CTO of Aetheron Labs and a B.Tech student in Computer Science, AI and Robotics at ATLAS SkillTech University.</p><p>My experience includes research at the IITGN Robotics Lab, building Novexa with a team, and developing robotics and engineering software. The project records explain my contribution, the decisions and the available evidence.</p></section>
    <ResearchExperience />
    <section className="capability-evidence section-space" aria-labelledby="capability-title"><div className="section-heading"><div><p className="eyebrow">Capabilities / With project context</p><h2 id="capability-title">Where I can contribute.</h2></div><p>Specific areas of work, with a project you can inspect for each.</p></div><div className="capability-grid">{capabilities.map((item, index) => <article key={item.href}><span className="eyebrow">0{index + 1} / {item.label}</span><h3>{item.title}</h3><p>{item.text}</p><TextLink href={item.href}>{item.link}</TextLink></article>)}</div></section>
    <section className="background-records section-space"><div className="section-heading"><div><p className="eyebrow">Background</p><h2>Building. Studying.<br />Documenting.</h2></div></div>
      <article><span className="eyebrow">Company</span><div><h3>Co-founder & CTO</h3><p>Aetheron Labs · Mechanical design, fabrication and mechatronic integration.</p><TextLink href="/company/">Company work</TextLink></div></article>
      <article><span className="eyebrow">Education / 2025–2029</span><div><h3>ATLAS SkillTech University</h3><p>B.Tech in Computer Science, Artificial Intelligence and Robotics.</p><a href={links.linkedin} target="_blank" rel="noreferrer">Professional background<ArrowUpRight size={15} /></a></div></article>
      <article><span className="eyebrow">Learning & research</span><div><h3>Credentials and publications</h3><p>Robot kinematics coursework, the Novexa journal paper and OSRS technical research.</p><TextLink href="/certificates/">View the credential record</TextLink><TextLink href="/research/">View research</TextLink></div></article>
    </section>
    <section className="cv-note"><h2>Have a role or project in mind?</h2><p>Share the team, the technical problem and the contribution you need. We can discuss where my experience fits.</p><TextLink href="/contact/?intent=hiring">Start a conversation</TextLink></section>
  </PortfolioShell>;
}
