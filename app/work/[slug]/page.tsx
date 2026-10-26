import { WorkImage as Image } from "@/components/WorkImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PortfolioShell, Breadcrumb, TextLink } from "@/components/PortfolioShell";
import { CadExplorer } from "@/components/CadExplorer";
import { SystemWalkthrough } from "@/components/SystemWalkthrough";
import { walkthroughs } from "@/lib/walkthroughs";
import { ExperimentEvidence } from "@/components/ExperimentEvidence";
import { works, research, asset, siteUrl } from "@/lib/portfolio";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { projectContext } from "@/lib/project-context";

export function generateStaticParams() { return works.map(work => ({ slug: work.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const work = works.find(item => item.slug === slug);
  return work ? pageMetadata(work.title, work.summary, `/work/${slug}/`) : {};
}
export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const work = works.find(item => item.slug === slug); if (!work) notFound();
  const related = research.find(item => item.project === work.slug);
  const next = works[(works.indexOf(work) + 1) % works.length];
  const context = projectContext[slug];
  return <PortfolioShell>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CreativeWork", name: work.title, description: work.summary, url: `${siteUrl}/work/${work.slug}/`, contributor: { "@type": "Person", name: "Bilal Sabugar" }, isBasedOn: work.source }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Work", item: `${siteUrl}/work/` }, { "@type": "ListItem", position: 2, name: work.title, item: `${siteUrl}/work/${work.slug}/` }] }} />
    <Breadcrumb items={[{ label: "Work", href: "/work/" }, { label: work.title }]} />
    <header className="case-header"><p className="eyebrow">{work.number} / {work.label}</p><h1>{work.title}<span>.</span></h1><p className="case-question">{work.question}</p><div className="case-header-actions">{walkthroughs[slug] && <a href="#system-walkthrough" className="button-primary">Explore how it works<ArrowDown size={18} /></a>}<a href={work.repository} className="button-secondary" target="_blank" rel="noreferrer">Open source repository<ArrowUpRight size={18} /></a></div></header>
    <dl className="case-at-a-glance"><div><dt>My contribution</dt><dd>{work.contribution}</dd></div><div><dt>Current stage</dt><dd>{work.status}</dd></div><div><dt>Available evidence</dt><dd>{work.evidence}</dd></div></dl>
    {work.image && <figure className={`case-cover case-cover-${work.slug}`}><Image src={asset(work.image)} alt={work.imageAlt ?? work.title} width={work.imageWidth ?? 1920} height={work.imageHeight ?? 1080} priority /><figcaption>{work.imageCaption}</figcaption></figure>}
    {walkthroughs[slug] && <SystemWalkthrough walkthrough={walkthroughs[slug]} />}
    <div className="case-layout"><aside className="case-toc"><span className="eyebrow">On this page</span>{walkthroughs[slug] && <a href="#system-walkthrough">Interactive walkthrough</a>}<a href="#overview">The project</a><a href="#contribution">My contribution</a><a href="#architecture">System architecture</a>{slug === "osrs" && <a href="#experiment-evidence">Experiment results</a>}<a href="#decisions">Engineering decisions</a><a href="#scope">Status & scope</a><a href="#sources">Sources</a></aside>
      <div className="case-body"><section id="overview"><p className="eyebrow">01 / The project</p><h2>{work.summary}</h2><p>{work.context}</p><dl className="project-facts"><div><dt>Status</dt><dd>{work.status}</dd></div><div><dt>Tools & technologies</dt><dd>{work.stack.join(" · ")}</dd></div></dl></section>
      <section id="contribution"><p className="eyebrow">02 / My contribution</p><h2>{work.contribution}.</h2><p className="lead-copy">{work.role}</p>{work.disclosure && <p className="source-note">{work.disclosure}</p>}</section>
      {context && <section id="architecture"><p className="eyebrow">03 / Purpose & architecture</p><h2>The problem behind the implementation.</h2><p>{context.purpose}</p><h3>How the parts connect</h3><p>{context.architecture}</p></section>}
      <section id="decisions"><p className="eyebrow">04 / Engineering decisions</p><h2>Decisions that shape the system.</h2>{work.decisions.map((decision, i) => <article className="decision" key={decision.title}><span>0{i + 1}</span><div><h3>{decision.title}</h3><p>{decision.text}</p></div></article>)}</section>
      {slug === "novexa" && <><figure className="inline-evidence"><Image src={asset("/work/novexa-front.jpg")} alt="Actual Novexa prototype showing its printed structure, servos and electronics in the workshop" width={1600} height={1200} /><figcaption>Physical prototype · Original workshop photograph from the project repository</figcaption></figure><CadExplorer /></>}
      {slug === "osrs" && <><ExperimentEvidence /><figure className="inline-evidence"><Image src={asset("/work/osrs-response.png")} alt="Step-response plot supplied in the OSRS software-in-the-loop experiment directory" width={1800} height={1100} /><figcaption>Software-in-the-loop experiment figure · A simulation trace, not a measured physical-hardware result</figcaption></figure></>}
      <section id="scope"><p className="eyebrow">05 / Results & current scope</p><h2>What exists today.</h2><p>{work.outcome}</p><blockquote className="case-takeaway"><span>Engineering principle</span>{work.takeaway}</blockquote><p className="source-note">{work.scope}</p></section>
      <section id="sources"><p className="eyebrow">06 / Source material</p><h2>Inspect the work.</h2><div className="source-links"><a href={work.repository} target="_blank" rel="noreferrer">Project repository<ArrowUpRight size={18} /></a><a href={work.source} target="_blank" rel="noreferrer">{slug === "osrs" ? "Authorship & team contributions" : "Project documentation"}<ArrowUpRight size={18} /></a>{related && <Link href={`/research/${related.slug}/`}>Related {related.type.toLowerCase()}<ArrowUpRight size={18} /></Link>}</div></section>
      </div></div>
      <div className="case-conversation"><h2>Working on a related problem?</h2><p>Tell me what you need to build, test or understand. Mention {work.title} if it is a useful starting point.</p><TextLink href={`/contact/?intent=freelance&project=${work.slug}`}>Discuss your project</TextLink></div>
      <section className="next-case section-space"><p className="eyebrow">Continue exploring</p><Link href={`/work/${next.slug}/`}>{next.title}<ArrowUpRight size={46} /></Link><TextLink href="/work/">Back to all work</TextLink></section>
  </PortfolioShell>;
}
