import { ArrowUpRight } from "lucide-react";
import { TextLink } from "@/components/PortfolioShell";
import { researchExperience, resumePath } from "@/lib/profile";
import { asset } from "@/lib/portfolio";

export function ResearchExperience() {
  return <section className="research-experience section-space" id="research-experience" aria-labelledby="research-experience-title">
    <div className="section-heading"><div><p className="eyebrow">Research experience / {researchExperience.role}</p><h2 id="research-experience-title">IIT Gandhinagar.<br />Robotics in the lab.</h2></div><p>At the IITGN Robotics Lab, I worked with Aditya Jadav and Archie Veera on tactile-based ball balancing using a half-humanoid platform.</p></div>
    <div className="research-experience-details"><div><h3>From sensing to physical control</h3><p>I developed Python control pipelines as the ball-balancing work progressed from single-axis vision-based balancing to two-axis pitch-roll control with dual load-cell sensing. The work combined OpenCV, Intel RealSense, HX711 interfaces and Dynamixel actuators.</p><p>My work included PD/PID control, online system identification, adaptive gain scheduling and backlash compensation. OSRS records the shared platform and team contributions; its published simulation results are kept separate from physical testing.</p><TextLink href="/work/osrs/">Explore the system and my contribution</TextLink></div><dl><div><dt>Period</dt><dd>{researchExperience.period}</dd></div><div><dt>Lab</dt><dd>{researchExperience.lab}</dd></div><div><dt>Research focus</dt><dd>{researchExperience.focus}</dd></div><div><dt>Collaborators</dt><dd>Aditya Jadav and Archie Veera</dd></div><div><dt>Role, dates and responsibilities</dt><dd><a href={asset(resumePath)}>Owner-supplied CV · October 2026</a></dd></div></dl></div>
    <a className="research-announcement" href={researchExperience.announcement} target="_blank" rel="noreferrer">Public internship announcement by Dr. Rabinder Henry<ArrowUpRight size={15} /></a>
  </section>;
}
