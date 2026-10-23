import { ArchiveShell } from "@/components/ArchiveShell";
import { portfolioData } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <ArchiveShell eyebrow="Project archive" title="Robotics work, in context." intro="Novexa is a collaborative personal project. The other programs belong to Aetheron Labs and are presented separately as company work.">
      <section className="archive-projects">
        {portfolioData.projects.map((project) => (
          <article key={project.id}>
            <div className="archive-project-title"><span>{project.id === "NX-18" ? "Personal · Team project" : "Aetheron Labs · Company program"}</span><p>{project.category}</p><h2>{project.title}</h2><p className="archive-project-summary">{project.summary}</p><a href={project.id === "NX-18" ? "https://github.com/BilalSabugar/Novexa" : "https://www.aetheronlabs.in/"} target="_blank" rel="noreferrer">{project.id === "NX-18" ? "View repository ↗" : "View company source ↗"}</a></div>
            <div className="archive-project-proof"><div><small>{project.id === "NX-18" ? "Contribution" : "Company context"}</small><p>{project.id === "NX-18" ? project.role : "Developed by the Aetheron Labs team. Bilal is co-founder and CTO; program descriptions do not imply sole authorship."}</p></div><div><small>The challenge</small><p>{project.challenge}</p></div><div><small>Prototype scope</small><p>{project.outcome}</p></div><div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
          </article>
        ))}
      </section>
    </ArchiveShell>
  );
}
