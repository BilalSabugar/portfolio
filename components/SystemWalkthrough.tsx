"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { SystemWalkthrough as Walkthrough } from "@/lib/walkthroughs";

export function SystemWalkthrough({ walkthrough }: { walkthrough: Walkthrough }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const step = walkthrough.steps[active];

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % walkthrough.steps.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + walkthrough.steps.length) % walkthrough.steps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = walkthrough.steps.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`${id}-step-${next}`)?.focus();
  }

  return <section id="system-walkthrough" className="system-walkthrough" aria-labelledby={`${id}-title`}>
    <div className="section-heading"><div><p className="eyebrow">Inside the engineering / Interactive walkthrough</p><h2 id={`${id}-title`}>{walkthrough.title}</h2></div><p>{walkthrough.introduction}</p></div>
    <div className="system-stages" role="tablist" aria-label="Explore system stages">{walkthrough.steps.map((item, index) => <button key={item.id} id={`${id}-step-${index}`} type="button" role="tab" aria-selected={active === index} aria-controls={`${id}-panel`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => navigate(event, index)}><span className="system-stage-number">0{index + 1}</span><span>{item.label}</span><ArrowRight size={18} aria-hidden="true" /></button>)}</div>
    <div id={`${id}-panel`} className="system-panel" role="tabpanel" aria-labelledby={`${id}-step-${active}`} tabIndex={0}>
      <div className="system-explanation" key={step.id}><span className="eyebrow">0{active + 1} / {step.label}</span><h3>{step.title}</h3><p>{step.explanation}</p><div className="system-reason"><h4>Why this matters</h4><p>{step.reason}</p></div><a className="text-link" href={step.source} target="_blank" rel="noreferrer">{step.sourceLabel}<ArrowUpRight size={18} /></a></div>
      <dl className="system-transformation"><div><dt>Input</dt><dd>{step.input}</dd></div><div><dt>Output</dt><dd>{step.output}</dd></div></dl>
    </div><p className="system-note">{walkthrough.note}</p>
    <details className="walkthrough-reading"><summary>Read all stages without using the tabs</summary>{walkthrough.steps.map(item => <article key={item.id}><h3>{item.title}</h3><p>{item.explanation}</p><p><strong>Why it matters:</strong> {item.reason}</p><p><strong>Input:</strong> {item.input}<br /><strong>Output:</strong> {item.output}</p><a className="text-link" href={item.source} target="_blank" rel="noreferrer">{item.sourceLabel}<ArrowUpRight size={18} /></a></article>)}</details>
  </section>;
}
