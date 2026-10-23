import type { Metadata } from "next";
import { ArchiveShell } from "@/components/ArchiveShell";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function AdminLayout() {
  return <ArchiveShell eyebrow="Content maintenance" title="This portfolio is repository-managed." intro="The public site is a static GitHub Pages build. The previous browser editor is not connected to these published records.">
    <section className="article-body"><h2>Update the source, then publish</h2><p>Project records and profile links are maintained in the repository. Each update can be reviewed before the GitHub Pages workflow rebuilds the site.</p><p>No administrator login is required to browse the portfolio. This page does not accept credentials or claim to save changes.</p><a href="https://github.com/BilalSabugar/portfolio" target="_blank" rel="noreferrer">Open portfolio repository ↗</a></section>
  </ArchiveShell>;
}
