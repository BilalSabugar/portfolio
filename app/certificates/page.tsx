import { ArchiveShell } from "@/components/ArchiveShell";
import { certificates } from "@/lib/site-content";

export default function Certificates() {
  return (
    <ArchiveShell eyebrow="Proof archive · 02" title="Research and credentials." intro="Verified learning and published work behind the machines—presented as evidence, not decoration.">
      <section className="certificate-index">
        {certificates.map((certificate) => (
          <article key={certificate.id}>
            <span>{certificate.id}</span><div><p>{certificate.area}</p><h2>{certificate.note}</h2><a href={certificate.area === "IJIRT" ? "https://ijirt.org/publishedpaper/IJIRT199344_PAPER.pdf" : "https://www.linkedin.com/in/bilal-sabugar/"} target="_blank" rel="noreferrer">{certificate.area === "IJIRT" ? "Read original publication ↗" : "View professional profile ↗"}</a></div><small>{certificate.status}</small>
          </article>
        ))}
      </section>
    </ArchiveShell>
  );
}
