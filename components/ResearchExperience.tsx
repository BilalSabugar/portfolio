import { ArrowUpRight } from "lucide-react";
import { TextLink } from "@/components/PortfolioShell";
import { researchExperience } from "@/lib/profile";

export function ResearchExperience() {
  return <section className="research-experience section-space" id="research-experience" aria-labelledby="research-experience-title">
    <div className="section-heading"><div><p className="eyebrow">Research experience / {researchExperience.role}</p><h2 id="research-experience-title">IIT Gandhinagar.<br />Robotics in the lab.</h2></div><p>At the IITGN Robotics Lab, I worked with Aditya Jadav and Archie Veera on tactile-based ball balancing using a half-humanoid platform.</p></div>
    <div className="research-experience-details"><div><h3>From sensing to physical control</h3><p>The work progressed from single-axis visual balancing toward two-axis control and force-based sensing. OSRS connects this work to my credited responsibilities in platform engineering, online system identification and full-stack robotics.</p><TextLink href="/work/osrs/">Explore the system and my contribution</TextLink></div><dl><div><dt>Lab</dt><dd>{researchExperience.lab}</dd></div><div><dt>Research focus</dt><dd>{researchExperience.focus}</dd></div><div><dt>Collaborators</dt><dd>Aditya Jadav and Archie Veera</dd></div></dl></div>
    <a className="research-announcement" href={researchExperience.announcement} target="_blank" rel="noreferrer">Public internship announcement by Dr. Rabinder Henry<ArrowUpRight size={15} /></a>
  </section>;
}
