import { TextLink } from "@/components/PortfolioShell";
import { asset } from "@/lib/portfolio";
import { resumePath } from "@/lib/profile";

export function CourseworkProject() {
  return <section className="coursework-project section-space" id="coursework" aria-labelledby="coursework-title">
    <div className="section-heading"><div><p className="eyebrow">Coursework / Robotics / Since May 2026</p><h2 id="coursework-title">T.H.O.M.A.S.<br />Learning to find a route.</h2></div><p>An autonomous maze-solving robot developed as AI & Robotics coursework. The work starts in simulation and is moving toward physical hardware.</p></div>
    <div className="research-experience-details"><div><h3>Navigation without a map</h3><p>The simulated robot uses Q-learning and line-sensor observations to learn navigation without access to a map. My CV records training and testing across different maze layouts in MuJoCo.</p><p>The next stage covers mechanical design, electronics and control-system integration. No physical maze-solving result or measured success rate is claimed here.</p><TextLink href="/contact/?intent=research">Discuss robot learning</TextLink></div><dl><div><dt>Context</dt><dd>AI & Robotics coursework</dd></div><div><dt>Current stage</dt><dd>Simulation work; physical-hardware development</dd></div><div><dt>Technical focus</dt><dd>Q-learning · MuJoCo · Line-sensor navigation</dd></div><div><dt>Available record</dt><dd><a href={asset(resumePath)}>Project description in my CV</a> · No separate demo or test report is linked yet.</dd></div></dl></div>
  </section>;
}
