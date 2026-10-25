import { PortfolioShell, PageIntro, TextLink } from "@/components/PortfolioShell";
import { WorkIndex } from "@/components/WorkIndex";
import { repositoryArchive, links } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Work", "Explore Bilal Sabugar's robotics and software projects: Novexa, OSRS, RoboScout, WIRK, RecoverOS and Calm Pulse, with individual contributions and source links.", "/work/");
export default function WorkPage() {
  return <PortfolioShell><PageIntro label="Work / Project index" title="Built to be understood." intro="Robotics, research tools and product software. Each record explains the problem, my contribution, the design decisions and the current scope." /><WorkIndex />
    <section className="repository-archive section-space"><div className="section-heading"><div><p className="eyebrow">Earlier work & smaller repositories</p><h2>The wider archive.</h2></div><p>Additional public repositories are kept here without turning every exercise into a featured case study.</p></div>{repositoryArchive.map(repo => <a href={`${links.github}/${repo.name}`} key={repo.name} target="_blank" rel="noreferrer"><span>{repo.name}</span><small>{repo.language}</small><span aria-hidden="true">↗</span></a>)}<TextLink href="/company/">Company programs at Aetheron Labs</TextLink></section>
  </PortfolioShell>;
}
