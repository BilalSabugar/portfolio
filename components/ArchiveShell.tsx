import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ArchiveShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="archive-shell">
      <header className="archive-header">
        <Link href="/" className="archive-back"><ArrowLeft size={16} /> Back to portfolio</Link>
        <Link href="/#contact" className="archive-contact">Discuss a project <ArrowRight size={15} /></Link>
      </header>
      <main>
        <section className="archive-hero">
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <div className="archive-hero-note">{intro}</div>
        </section>
        {children}
      </main>
      <footer className="archive-footer"><span>Bilal Sabugar</span><Link href="/">Return home ↑</Link></footer>
    </div>
  );
}
