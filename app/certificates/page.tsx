import { ArchiveShell } from "@/components/ArchiveShell";
import { certificates } from "@/lib/site-content";

export default function Certificates() {
  return (
    <ArchiveShell eyebrow="Proof archive · 02" title="Research and credentials." intro="Verified learning and published work behind the machines—presented as evidence, not decoration.">
      <section className="certificate-index">
        {certificates.map((certificate) => (
          <article key={certificate.id}>
            <span>{certificate.id}</span><div><p>{certificate.area}</p><h2>{certificate.note}</h2></div><small>{certificate.status}</small>
          </article>
        ))}
      </section>
    </ArchiveShell>
  );
}
