"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
import { works, asset } from "@/lib/portfolio";

export function WorkIndex() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const visible = works.filter(work => (filter === "All" || work.category === filter) && `${work.title} ${work.summary} ${work.contribution} ${work.stack.join(" ")} ${work.label}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <>
    <div className="work-controls"><div role="group" aria-label="Filter projects">{["All", "Robotics", "Software"].map(name => <button key={name} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}<span>{name === "All" ? works.length : works.filter(work => work.category === name).length}</span></button>)}</div><label className="work-search"><Search size={17} /><input type="search" aria-label="Search projects" placeholder="Search projects or technologies" value={query} onChange={event => setQuery(event.target.value)} /></label></div>
    <p className="results-count" role="status">{visible.length} {visible.length === 1 ? "project" : "projects"}</p>
    {["Robotics", "Software"].map(category => {
      const group = visible.filter(work => work.category === category);
      if (!group.length) return null;
      return <section className="work-group" key={category} aria-label={`${category} projects`}><div className="work-group-intro"><h2>{category === "Robotics" ? "Machines & the systems behind them" : "Software for specific problems"}</h2><p>{category === "Robotics" ? "Team-built platforms: from physical structure to control, perception and experiments." : "Research, work and decision tools, with each project’s purpose and development stage kept clear."}</p></div><div className={`work-grid ${category === "Software" ? "work-grid-software" : ""}`}>{group.map(work => <article className={`work-entry work-entry-${work.slug}`} key={work.slug}>
      <Link className="work-entry-image-link" href={`/work/${work.slug}/`} aria-label={`Explore ${work.title}`}>
      <div className="work-entry-visual">{work.image ? <Image src={asset(work.image)} alt={work.imageAlt ?? work.title} fill sizes="(max-width: 760px) 100vw, 50vw" /> : <div className="software-title"><span>{work.category} / {work.number}</span><strong>{work.title}</strong><small>{work.stack.slice(0, 3).join(" / ")}</small></div>}<span className="work-entry-arrow"><ArrowUpRight size={24} /></span></div>
      </Link><div className="work-entry-heading"><div><p className="eyebrow">{work.label}</p><h3><Link href={`/work/${work.slug}/`}>{work.title}</Link></h3></div><span>{work.number}</span></div><p>{work.summary}</p><dl className="work-preview-facts"><div><dt>My contribution</dt><dd>{work.contribution}</dd></div><div><dt>What you can inspect</dt><dd>{work.evidence}</dd></div></dl><div className="work-entry-bottom"><span>{work.status}</span><Link href={`/work/${work.slug}/`}>Read the case study<ArrowUpRight size={16} /></Link></div>
    </article>)}</div></section>;
    })}
    {visible.length === 0 && <div className="empty-results"><h2>No matching projects.</h2><p>Try a project name, a technology, or clear the filters.</p><button className="button-secondary" onClick={() => { setFilter("All"); setQuery(""); }}>Show all projects</button></div>}
  </>;
}
