import { ArrowUpRight } from "lucide-react";
import { PortfolioShell, PageIntro, TextLink } from "@/components/PortfolioShell";
import { asset, links } from "@/lib/portfolio";
import { resumePath, training } from "@/lib/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Training & credentials", "Bilal Sabugar's robotic-arm, drone, robotics and space-technology training, with providers, dates and source context.", "/certificates/");

export default function CredentialsPage() {
  return <PortfolioShell>
    <PageIntro label="Background / Training & credentials" title="Learning, applied." intro="Workshops and technical programs that support my work in robotics, control and embedded systems. Training records are kept separate from research employment and publications." />
    <p className="content-source">The four training records below follow my <a href={asset(resumePath)}>October 2026 CV</a>. Original certificate scans are not linked; participation is owner-reported, not independently verified with the providers.</p>
    {(["Workshops", "Programs"] as const).map(group => <section className="training-group section-space" key={group} aria-labelledby={`training-${group.toLowerCase()}`}>
      <div className="section-heading"><div><p className="eyebrow">{group === "Workshops" ? "Practical training" : "Structured learning"}</p><h2 id={`training-${group.toLowerCase()}`}>{group === "Workshops" ? "Workshops." : "Programs & summer school."}</h2></div></div>
      {training.filter(item => item.group === group).map(item => <article className="training-record" key={item.title}><div><p className="eyebrow">{item.period}</p><h3>{item.title}</h3><p>{item.provider}</p></div><div><p>{item.description}</p><span className="record-source">Source: owner-supplied CV</span></div></article>)}
    </section>)}
    <section className="section-space" aria-labelledby="profile-credential-title"><div className="section-heading"><div><p className="eyebrow">Separate public-profile record</p><h2 id="profile-credential-title">Robot kinematics.</h2></div><p>This public-profile listing is retained separately; it has not been assumed to be the same record as the CV workshop.</p></div>
      <article className="credential-card"><div><h3>Introduction to Robot Kinematics</h3><p>Indian Institute of Technology Gandhinagar</p></div><div><dl className="project-facts"><div><dt>Issued</dt><dd>September 2025</dd></div><div><dt>Listed expiry</dt><dd>December 2025</dd></div><div><dt>Credential ID</dt><dd>AB6250044</dd></div><div><dt>Public record</dt><dd>LinkedIn profile</dd></div></dl><p>The profile lists an expiry date. This is a learning record, not a claim of current professional certification.</p><a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">View the public profile<ArrowUpRight size={18} /></a></div></article>
    </section>
    <section className="research-note section-space"><p className="eyebrow">Related background</p><h2>Education and research.</h2><TextLink href="/about/">Education & professional background</TextLink><br /><TextLink href="/research/">Papers & technical reports</TextLink></section>
  </PortfolioShell>;
}
