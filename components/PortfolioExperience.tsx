"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import PortfolioDialog from "./PortfolioDialog";
import SceneBoundary from "./SceneBoundary";
import { portfolioData } from "@/lib/portfolio-data";
import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { companyPrograms, githubProjects, profileLinks } from "@/lib/atlas-data";
import type { MachineChapter } from "@/components/LivingSculpture";

const LivingSculpture = dynamic(() => import("@/components/LivingSculpture"), { ssr: false, loading: () => <p className="scene-fallback" role="status">Loading interactive model…</p> });
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Chapter = "projects" | "systems" | "research" | "opensource" | "company" | "credentials" | "contact";
type ChapterData = { eyebrow: string; title: string; statement: string; detail: string; evidence: string; tags: string[]; link?: string; linkLabel?: string; };

const chapterOrder: Chapter[] = ["projects", "systems", "research", "opensource", "company", "credentials", "contact"];

const chapters: Record<Chapter, ChapterData> = {
  projects: {
    eyebrow: "01 / Mechanical system", title: "Novexa",
    statement: "An 18-DOF hexapod built to study stable locomotion across uneven terrain.",
    detail: "Six legs, three controlled joints per leg, a modular 3D-printed structure and an Arduino Mega control prototype. Additional sensing and controller upgrades are development plans, not demonstrated capabilities of the prototype.",
    evidence: "Working prototype · June–December 2025 · IJIRT 199344",
    tags: ["18 DOF", "Fusion 360", "3D printing", "Arduino Mega"],
    link: "https://github.com/BilalSabugar/Novexa", linkLabel: "Open Novexa repository",
  },
  systems: {
    eyebrow: "02 / Control and perception", title: "OSRS",
    statement: "A modular platform for real-time robot control, perception, simulation and telemetry.",
    detail: "Developed through the IIT Gandhinagar Robotics Lab internship with Aditya Jadav and Archie Veera. The work progressed from vision-based balancing to two-axis control and dual HX711 load-cell feedback on a half-humanoid platform.",
    evidence: "Python + FastAPI backend · React telemetry interface · Public repository",
    tags: ["MuJoCo", "OpenCV", "RealSense", "Dynamixel", "HX711", "Predictive PID"],
    link: "https://github.com/TeamOSRS/OSRS", linkLabel: "Open OSRS",
  },
  research: {
    eyebrow: "03 / Published research", title: "Novexa research",
    statement: "The Novexa development process is documented as a co-authored technical paper.",
    detail: "Fabrication of a 3D Printed Hexapod for All Terrain Adaptive Locomotion was published on 24 April 2026 in IJIRT, Volume 12, Issue 11, pages 12393–12396.",
    evidence: "IJIRT 199344 · ISSN 2349-6002", tags: ["Locomotion", "Kinematics", "Fabrication", "Technical writing"],
    link: "https://ijirt.org/publishedpaper/IJIRT199344_PAPER.pdf", linkLabel: "Read the paper",
  },
  opensource: {
    eyebrow: "04 / Open-source systems", title: "Open-source software",
    statement: "Public systems for engineering research, focused work, financial control and wellness support.",
    detail: "The portfolio includes robotics infrastructure and broader product-engineering work. Each repository is presented with its actual scope, stack, team context and prototype boundaries.",
    evidence: "Four selected public repositories · Full source available", tags: ["Next.js", "React", "Python", "FastAPI", "Applied AI"],
    link: "https://github.com/BilalSabugar", linkLabel: "View GitHub profile",
  },
  company: {
    eyebrow: "05 / Company building", title: "Aetheron Labs",
    statement: "Robotics programs developed from mechanical architecture through physical validation.",
    detail: "As co-founder and CTO, Bilal leads mechanical design, structural fabrication and mechatronic integration, including high-torque actuation, custom PCB layouts and prototype validation.",
    evidence: "Co-founder and CTO · Active robotics company", tags: ["Technical leadership", "Actuation", "Custom PCBs", "Validation"],
    link: "https://www.aetheronlabs.in/", linkLabel: "Visit Aetheron Labs",
  },
  credentials: {
    eyebrow: "06 / Education and credentials", title: "Learning and research",
    statement: "Formal study, robotics training and a co-authored publication.",
    detail: "B.Tech in Computer Science, AI & Robotics at ATLAS SkillTech University (2025–2029). The records below distinguish a course credential from a research publication.",
    evidence: "IIT Gandhinagar course · IJIRT publication", tags: ["Robot kinematics", "Research", "Engineering"],
    link: profileLinks.linkedin, linkLabel: "View professional background",
  },
  contact: {
    eyebrow: "07 / Work together", title: "Let’s discuss your project.",
    statement: "Available for selected robotics, mechatronics, embedded-control and prototype-validation work.",
    detail: "Share what the system must do, where it will operate, its current stage and the main constraints. The first response will focus on defining a practical technical scope.",
    evidence: "Freelance projects and research collaborations", tags: ["Robotics", "Mechatronics", "Embedded control", "R&D"],
  },
};

const machineChapter: Record<Chapter, MachineChapter> = { projects: "overview", systems: "control", research: "research", opensource: "control", company: "company", credentials: "overview", contact: "overview" };

export default function PortfolioExperience() {
  const reducedMotion = Boolean(useReducedMotion());
  const [active, setActive] = useState<Chapter>("projects");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      const chapter = hash === "hire" ? "contact" : hash === "proof" ? "credentials" : hash;
      if (chapterOrder.includes(chapter as Chapter)) { setActive(chapter as Chapter); setDrawerOpen(true); }
      else { setDrawerOpen(false); }
    };
    sync(); window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const closeDetail = () => { setDrawerOpen(false); window.history.replaceState(null, "", window.location.pathname + window.location.search); };
  const copyEmail = async () => { try { await navigator.clipboard.writeText(profileLinks.email); setCopied(true); } catch { setCopied(false); } };
  const current = chapters[active];
  const activeIndex = chapterOrder.indexOf(active);

  const select = (chapter: Chapter, open = true) => { setActive(chapter); setDrawerOpen(open); setSubmitted(false); if (open) window.history.pushState(null, "", `#${chapter}`); };
  const shiftChapter = (direction: number) => { const next = chapterOrder[(activeIndex + direction + chapterOrder.length) % chapterOrder.length]; select(next, drawerOpen); };
  const onMachineSelect = (chapter: MachineChapter) => {
    const destination = chapter === "mechanics" ? "projects" : chapter === "control" ? "systems" : chapter === "research" ? "research" : chapter === "company" ? "company" : "projects";
    select(destination, true);
  };
  const prepareEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const brief = String(form.get("brief") ?? "").trim();
    setSubmitted(true);
    window.location.href = `mailto:${profileLinks.email}?subject=${encodeURIComponent(`Project enquiry from ${name || "a new contact"}`)}&body=${encodeURIComponent(`${brief}\n\nName: ${name}\nReply to: ${email}`)}`;
  };
  const statusCopy = active === "projects" ? "18 DOF · Working prototype" : current.evidence;

  return (
    <main className="night-lab">
      <a className="skip-link" href="#lab-navigation">Skip to portfolio navigation</a>
      <div className="lab-background" style={{ backgroundImage: `url("${publicBasePath}/night-lab.png")` }} aria-hidden="true" /><div className="lab-vignette" aria-hidden="true" />
      <header className="lab-header">
        <button className="lab-identity" onClick={() => { closeDetail(); setActive("projects"); }}><span>BS</span><span><strong>Bilal Sabugar</strong><small>Robotics · Embedded systems · Applied AI</small></span></button>
        <div className="lab-header-actions"><button className="index-trigger" onClick={() => setIndexOpen(true)}><Menu size={15} /> Work index</button><button className="lab-availability" onClick={() => select("contact", true)}><i /> Available for selected<br />R&amp;D and freelance work</button></div>
      </header>

      <section className="lab-scene" aria-label="Interactive night robotics laboratory">
        <div className="lab-machine" aria-label="Illustrative hexapod. Drag to rotate; use the chapter navigation to read all records."><SceneBoundary><LivingSculpture chapter={machineChapter[active]} reducedMotion={reducedMotion || motionPaused} onSelect={onMachineSelect} /></SceneBoundary></div>
        <div className="scene-tools"><span>Interactive illustration · Drag to rotate</span><button aria-pressed={motionPaused} onClick={() => setMotionPaused(!motionPaused)}>{motionPaused ? "Resume motion" : "Pause motion"}</button></div>
        <button className="object-label object-projects" onClick={() => select("projects", true)}><span>01</span> Projects</button>
        <button className="object-label object-systems" onClick={() => select("systems", true)}><span>02</span> Systems</button>
        <button className="object-label object-research" onClick={() => select("research", true)}><span>03</span> Research</button>
        <button className="object-label object-company" onClick={() => select("company", true)}><span>05</span> Aetheron Labs</button>
        <div className="lab-hero"><p>Robotics engineer · Researcher · Open-source builder</p><h1>Bilal Sabugar</h1><h2>Robotics systems, built<br />from structure to software.</h2><button onClick={() => select("contact", true)}><i /> Available for selected R&amp;D and freelance work.</button></div>
        <nav className="chapter-rail" id="lab-navigation" aria-label="Portfolio chapters">{chapterOrder.map((chapter, index) => <button key={chapter} aria-current={active === chapter ? "page" : undefined} className={active === chapter ? "is-active" : ""} onClick={() => select(chapter)}><span>{String(index + 1).padStart(2, "0")}</span>{chapter === "opensource" ? "Open source" : chapter}</button>)}</nav>
        <div className="project-dock"><div className="dock-mark">{String(activeIndex + 1).padStart(2, "0")}</div><div className="dock-title"><strong>{active === "projects" ? "Novexa" : current.title}</strong><span>{statusCopy}</span><button onClick={() => select(active, true)}>Open {active === "projects" ? "case study" : "record"} <ArrowRight size={13} /></button></div><div className="dock-facts"><span><strong>{String(activeIndex + 1).padStart(2, "0")}</strong>Chapter</span>{active === "projects" && <><span><strong>6</strong>Legs</span><span><strong>18</strong>DOF</span></>}</div><div className="dock-arrows"><button onClick={() => shiftChapter(-1)} aria-label="Previous chapter"><ArrowLeft size={17} /></button><button onClick={() => shiftChapter(1)} aria-label="Next chapter"><ArrowRight size={17} /></button></div></div>
      </section>

      <AnimatePresence>{drawerOpen && <PortfolioDialog className="chapter-drawer" label={current.title} onClose={closeDetail}>
        <button className="drawer-close" onClick={closeDetail} aria-label="Close detail"><X size={18} /></button><p className="drawer-eyebrow">{current.eyebrow}</p><h2>{current.title}</h2><p className="drawer-statement">{current.statement}</p><p className="drawer-detail">{current.detail}</p><div className="drawer-proof"><span>Evidence</span><strong>{current.evidence}</strong></div><div className="drawer-tags">{current.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {active === "projects" && <div className="record-context"><h3>The engineering problem</h3><p>Coordinate six articulated legs while keeping the structure modular, manufacturable and repairable.</p><h3>Contribution and current scope</h3><p>Team development across CAD, fabrication, assembly and mechatronic integration. The Arduino Mega prototype is distinct from planned sensing and controller upgrades; those plans are not validated performance claims.</p><Link href="/blog/fabrication-of-a-3d-printed-hexapod/">Read the development summary <ArrowRight size={14} /></Link></div>}
        {active === "systems" && <div className="record-context"><h3>Team context</h3><p>Robotics Lab internship work with Aditya Jadav and Archie Veera. This is collaborative engineering, not a claim of sole ownership.</p><h3>What to inspect</h3><p>The public repository documents control, perception and simulation modules. Its code and setup instructions provide the technical detail behind this overview.</p></div>}
        {active === "credentials" && <div className="credential-records">{portfolioData.credentials.map(item => <article key={item.id}><span>{item.issuer} · {item.date}</span><h3>{item.title}</h3><p>{item.credential}</p></article>)}</div>}
        {active === "research" && <div className="record-context"><h3>Co-authored work</h3><p>With Aditya Jadav, Archie Veera and Rabinder Henry. Read the original paper for the design method and reported scope; the interactive robot here is an illustration, not experimental evidence.</p></div>}
        {active === "opensource" && <div className="drawer-repositories">{githubProjects.map((project) => <a key={project.title} href={project.href} target="_blank" rel="noreferrer"><strong>{project.title}</strong><span>{project.type}</span><p>{project.summary}</p><small>{project.note}</small><ExternalLink size={13} /></a>)}</div>}
        {active === "company" && <div className="drawer-programs"><p>Company-owned programs developed by the Aetheron Labs team. My company role is described above; these are not independent personal projects.</p>{companyPrograms.map((program) => <div key={program.title}><strong>{program.title}</strong><span>{program.detail} · {program.status}</span><p>{program.contribution}</p></div>)}</div>}
        {active === "contact" && <><div className="service-scope">{portfolioData.services.map(service => <details key={service.number}><summary>{service.title}</summary><p>{service.text}</p></details>)}</div><p className="contact-help">This form opens your email app with a draft. Nothing is sent or stored by this website. Review the draft and send it there.</p><form className="lab-contact" onSubmit={prepareEmail}><label>Name<input name="name" maxLength={100} required autoComplete="name" /></label><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>Project context<textarea name="brief" maxLength={3000} required rows={4} /></label><button type="submit">Open email draft<ArrowRight size={14} /></button></form>{submitted && <p className="contact-help" role="status">Your email app was requested. If it did not open, copy the address below and send your brief directly.</p>}<div className="contact-direct"><a href={`mailto:${profileLinks.email}`}>{profileLinks.email}</a><button onClick={copyEmail}>{copied ? "Address copied" : "Copy email address"}</button><a href={profileLinks.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ExternalLink size={14} /></a><a href={profileLinks.coffee} target="_blank" rel="noreferrer">Buy me a coffee <ExternalLink size={14} /></a></div></>}
        {current.link && <a className="drawer-link" href={current.link} target="_blank" rel="noreferrer">{current.linkLabel}<ExternalLink size={14} /></a>}{active !== "contact" && <button className="drawer-next" onClick={() => shiftChapter(1)}>Next chapter <span>{chapterOrder[(activeIndex + 1) % chapterOrder.length]}</span><ArrowRight size={15} /></button>}
      </PortfolioDialog>}</AnimatePresence>

      <AnimatePresence>{indexOpen && <PortfolioDialog className="work-index" label="Work index" onClose={() => setIndexOpen(false)}>
        <button className="index-close" onClick={() => setIndexOpen(false)}><X size={18} /> Close</button><div className="index-intro"><p>Portfolio / Work and background</p><h2 id="work-index-title">Physical systems.<br />Research. Software.</h2><span>A concise index for recruiters, collaborators and clients.</span></div>
        <div className="index-sections"><button onClick={() => { setIndexOpen(false); select("projects", true); }}><span>01</span><strong>Novexa</strong><small>18-DOF hexapod · Working prototype</small></button><button onClick={() => { setIndexOpen(false); select("systems", true); }}><span>02</span><strong>OSRS</strong><small>Robot control, perception and simulation</small></button><button onClick={() => { setIndexOpen(false); select("research", true); }}><span>03</span><strong>IJIRT 199344</strong><small>Published hexapod research · April 2026</small></button><button onClick={() => { setIndexOpen(false); select("company", true); }}><span>04</span><strong>Aetheron Labs</strong><small>Co-founder and CTO</small></button><button onClick={() => { setIndexOpen(false); select("credentials", true); }}><span>05</span><strong>Education & credentials</strong><small>Coursework, education and publication</small></button><button onClick={() => { setIndexOpen(false); select("contact", true); }}><span>06</span><strong>Work together</strong><small>Freelance services and research collaboration</small></button></div>
        <div className="index-repos">{githubProjects.map((project, index) => <a href={project.href} target="_blank" rel="noreferrer" key={project.title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{project.title}</strong><small>{project.summary}</small><i>{project.stack.join(" · ")}</i><ExternalLink size={15} /></a>)}</div>
        <div className="index-links"><a href={profileLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href={profileLinks.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href={profileLinks.coffee} target="_blank" rel="noreferrer">Support my work <ExternalLink size={14} /></a><a href={`mailto:${profileLinks.email}`}><Mail size={15} /> Email</a></div>
      </PortfolioDialog>}</AnimatePresence>
    </main>
  );
}
