import { ArchiveShell } from "@/components/ArchiveShell";
import { portfolioData } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <ArchiveShell eyebrow="Aetheron programs · 01" title="Machines built for the real world." intro="Five active robotics programs. Each entry explains the physical problem, Bilal's work and the current state without invented outcomes.">
      <section className="archive-projects">
        {portfolioData.projects.map((project) => (
          <article key={project.id}>
            <div className="archive-project-title"><span>{project.id}</span><p>{project.category}</p><h2>{project.title}</h2><p className="archive-project-summary">{project.summary}</p></div>
            <div className="archive-project-proof"><div><small>My role</small><p>{project.role}</p></div><div><small>The challenge</small><p>{project.challenge}</p></div><div><small>The outcome</small><p>{project.outcome}</p></div><div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
          </article>
        ))}
      </section>
    </ArchiveShell>
  );
}
