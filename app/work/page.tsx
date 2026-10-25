import { PortfolioShell, PageIntro, TextLink } from "@/components/PortfolioShell";
import { WorkIndex } from "@/components/WorkIndex";
import { repositoryArchive, links } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Work", "Explore Bilal Sabugar's robotics and software projects: Novexa, OSRS, RoboScout, WIRK, RecoverOS and Calm Pulse, with individual contributions and source links.", "/work/");
export default function WorkPage() {
  return <PortfolioShell><PageIntro label="Selected work / My contribution & the results" title="Robotics & software." intro="Physical robots, the software that controls them, and tools that make engineering work easier. Explore my contribution, the design decisions and what exists today." /><WorkIndex />
    <section className="repository-archive section-space"><div className="section-heading"><div><p className="eyebrow">Earlier work & smaller repositories</p><h2>More from the archive.</h2></div><p>Smaller applications and programming exercises. Browse the code on GitHub; the selected work above offers a closer look at my current interests.</p></div>{repositoryArchive.map(repo => <a href={`${links.github}/${repo.name}`} key={repo.name} target="_blank" rel="noreferrer"><span>{repo.name}</span><small>{repo.language}</small><span aria-hidden="true">↗</span></a>)}<TextLink href="/company/">Explore Aetheron Labs and its programs</TextLink></section>
  </PortfolioShell>;
}
