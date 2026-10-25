"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
import { works, asset } from "@/lib/portfolio";

export function WorkIndex() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const visible = works.filter(work => (filter === "All" || work.category === filter) && `${work.title} ${work.summary} ${work.stack.join(" ")} ${work.label}`.toLowerCase().includes(query.toLowerCase()));
  return <>
    <div className="work-controls"><div role="group" aria-label="Filter projects">{["All", "Robotics", "Software"].map(name => <button key={name} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}<span>{name === "All" ? works.length : works.filter(work => work.category === name).length}</span></button>)}</div><label className="work-search"><Search size={17} /><input type="search" aria-label="Search projects" placeholder="Search projects or technologies" value={query} onChange={event => setQuery(event.target.value)} /></label></div>
    <p className="results-count" role="status">{visible.length} {visible.length === 1 ? "project" : "projects"}</p>
    <div className="work-grid">{visible.map(work => <Link className={`work-entry work-entry-${work.slug}`} href={`/work/${work.slug}/`} key={work.slug}>
      <div className="work-entry-visual">{work.image ? <Image src={asset(work.image)} alt={work.imageAlt ?? work.title} fill sizes="(max-width: 760px) 100vw, 50vw" /> : <div className="software-title"><span>{work.category} / {work.number}</span><strong>{work.title}</strong><small>{work.stack.slice(0, 3).join(" / ")}</small></div>}<span className="work-entry-arrow"><ArrowUpRight size={24} /></span></div>
      <div className="work-entry-heading"><div><p className="eyebrow">{work.label}</p><h2>{work.title}</h2></div><span>{work.number}</span></div><p>{work.summary}</p>
    </Link>)}</div>
    {visible.length === 0 && <div className="empty-results"><h2>No matching projects.</h2><p>Try a project name, a technology, or clear the filters.</p><button className="button-secondary" onClick={() => { setFilter("All"); setQuery(""); }}>Show all projects</button></div>}
  </>;
}
