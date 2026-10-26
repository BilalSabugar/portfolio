import Link from "next/link";
import { ArrowUpRight, ArrowRight, Github, Linkedin } from "lucide-react";
import { links, asset } from "@/lib/portfolio";
import { resumePath } from "@/lib/profile";
import { SiteNavigation } from "./SiteNavigation";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  return <div className="folio">
    <a className="skip-link" href="#content">Skip to content</a>
    <header className="folio-header">
      <Link className="wordmark" href="/"><span className="wordmark-symbol" aria-hidden="true">b<span>.</span></span><span>Bilal Sabugar<small>Robotics & product engineering</small></span></Link>
      <SiteNavigation />
      <Link className="header-contact" href="/contact/">Let’s talk <ArrowUpRight size={16} /></Link>
    </header>
    <main id="content">{children}</main>
    <footer className="folio-footer">
      <div className="footer-invite"><p className="eyebrow">Have something worth building?</p><Link href="/contact/">Let’s work on it.<ArrowUpRight /></Link></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Bilal Sabugar</span><div><a href={links.github} target="_blank" rel="noreferrer"><Github size={15} />GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} />LinkedIn</a><a href={links.coffee} target="_blank" rel="noreferrer">Buy me a coffee <ArrowUpRight size={14} /></a><a href={asset(resumePath)} download>CV (PDF)</a><Link href="/certificates/">Credentials</Link><Link href="/directory/">Site index</Link></div></div>
    </footer>
  </div>;
}

export function PageIntro({ label, title, intro }: { label: string; title: string; intro: string }) {
  return <header className="page-intro"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="page-intro-copy">{intro}</p></header>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="text-link" href={href}>{children}<ArrowRight size={18} /></Link>;
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map(item => <span key={item.label}><span aria-hidden="true">/</span>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav>;
}
