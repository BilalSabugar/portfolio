"use client";
import { useState } from "react";
import { WorkImage as Image } from "@/components/WorkImage";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { asset } from "@/lib/portfolio";

const views = [
  { title: "The mechanism", label: "01 / Design", image: "/work/novexa-cad.png", alt: "Original Novexa CAD render showing the six-leg mechanical assembly", caption: "Novexa · Source CAD render", href: "/work/novexa/", text: "Eighteen joints. One coordinated platform." },
  { title: "The prototype", label: "02 / Build", image: "/work/novexa-front.jpg", alt: "Actual Novexa workshop prototype with printed legs, actuators and wiring", caption: "Novexa · Physical prototype", href: "/work/novexa/", text: "From a model to a machine on the workshop floor." },
  { title: "The control system", label: "03 / Control", image: "/work/osrs-architecture.png", alt: "Original OSRS control architecture figure", caption: "OSRS · Source architecture figure", href: "/work/osrs/", text: "Connect the hardware. Observe the system. Close the loop." },
];

export function WorkExhibit() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const view = views[index];
  return <section className="work-exhibit" aria-label="Interactive engineering exhibit">
    <div className="exhibit-toolbar"><span className="eyebrow">Inside the work</span><div role="tablist" aria-label="Engineering stages">{views.map((item, i) => <button role="tab" id={`exhibit-tab-${i}`} aria-controls="exhibit-view" aria-selected={index === i} tabIndex={index === i ? 0 : -1} onClick={() => setIndex(i)} onKeyDown={event => { let next: number; if (event.key === "Home") next = 0; else if (event.key === "End") next = views.length - 1; else if (event.key === "ArrowRight" || event.key === "ArrowLeft") next = (i + (event.key === "ArrowRight" ? 1 : -1) + views.length) % views.length; else return; event.preventDefault(); setIndex(next); document.getElementById(`exhibit-tab-${next}`)?.focus(); }} key={item.label}>{item.label.split(" / ")[1]}</button>)}</div></div>
    <div id="exhibit-view" role="tabpanel" tabIndex={0} aria-labelledby={`exhibit-tab-${index}`} className={`exhibit-media exhibit-media-${index}`}>
      <AnimatePresence mode="wait" initial={false}><motion.div className="exhibit-frame" key={view.image} initial={reduce ? false : { opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .45 }}><Image src={asset(view.image)} alt={view.alt} fill sizes="(max-width: 760px) 100vw, 70vw" priority={index === 0} /></motion.div></AnimatePresence>
      <span className="exhibit-caption">{view.caption}</span>
      <Link className="exhibit-open" href={view.href} aria-label={`Explore ${index === 2 ? "OSRS" : "Novexa"}`}><ArrowUpRight size={24} /></Link>
    </div>
    <div className="exhibit-footer"><div aria-live="polite"><span className="eyebrow">{view.title}</span><p>{view.text}</p></div><div className="exhibit-arrows"><button aria-label="Previous exhibit" onClick={() => setIndex((index + views.length - 1) % views.length)}><ArrowLeft size={18} /></button><button aria-label="Next exhibit" onClick={() => setIndex((index + 1) % views.length)}><ArrowRight size={18} /></button></div></div>
  </section>;
}
