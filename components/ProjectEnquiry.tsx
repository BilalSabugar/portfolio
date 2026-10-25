"use client";
import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { links, works } from "@/lib/portfolio";
import { contactIntents, type ContactIntent } from "@/lib/contact";

export function ProjectEnquiry() {
  return <Suspense fallback={<p>Loading enquiry options. You can also email me directly using the link above.</p>}><EnquiryFromUrl /></Suspense>;
}

function EnquiryFromUrl() {
  const params = useSearchParams();
  const initialIntent = contactIntents.find(item => item.id === params.get("intent"))?.id ?? "freelance";
  const initialProject = works.find(work => work.slug === params.get("project"))?.title ?? "";
  return <EnquiryForm key={`${initialIntent}/${initialProject}`} initialIntent={initialIntent} initialProject={initialProject} />;
}

function EnquiryForm({ initialIntent, initialProject }: { initialIntent: ContactIntent; initialProject: string }) {
  const [intent, setIntent] = useState<ContactIntent>(initialIntent);
  const [project, setProject] = useState(initialProject);
  const [draft, setDraft] = useState("");
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const selected = contactIntents.find(item => item.id === intent)!;
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `${data.get("brief")}\n\nName: ${data.get("name")}\nReply to: ${data.get("email")}\nEnquiry: ${selected.label}\nTimeline: ${data.get("timeline") || "To discuss"}${project ? `\nPortfolio reference: ${project}` : ""}`;
    const subject = `${selected.label}${project ? ` — ${project}` : ""}`;
    setDraft(`Subject: ${subject}\n\n${body}`);
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  async function copy(value: string, isAddress: boolean) {
    try { await navigator.clipboard.writeText(value); if (isAddress) setCopied(true); setMessage(isAddress ? "Email address copied." : "Draft copied. Paste it into your email app and send it to the address below."); }
    catch { setMessage("Copy was unavailable. Select and copy the address or draft text below."); }
  }
  return <>
    <fieldset className="enquiry-intents"><legend>What would you like to discuss?</legend><div>{contactIntents.map(item => <label key={item.id} className={intent === item.id ? "intent-selected" : ""}><input type="radio" name="contact-intent" value={item.id} checked={intent === item.id} onChange={() => { setIntent(item.id); setPrepared(false); }} /><span>{item.label}</span></label>)}</div></fieldset>
    <div className="intent-context"><h2>{selected.title}</h2><p>{selected.description}</p>{project && <p className="enquiry-reference">Portfolio reference: {project}<button type="button" onClick={() => setProject("")}>Remove</button></p>}</div>
    <form className="enquiry-form" onSubmit={prepare} onChange={() => setPrepared(false)}><div className="form-pair"><label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label></div><label>Timeline <span>(optional)</span><input name="timeline" placeholder="A date or a rough timeframe" maxLength={100} /></label><label>Your message<span className="brief-guidance" id="brief-guidance">{selected.prompt}</span><textarea name="brief" aria-describedby="brief-guidance" rows={6} required minLength={20} maxLength={2000} /></label><p className="form-note">This prepares a draft in your email app. Review and send it there. Nothing is submitted to or stored by this website.</p><button className="button-primary" type="submit">Prepare an email draft<ArrowUpRight size={18} /></button></form>
    {prepared && <div className="prepared-draft"><p role="status">Your email app was requested. If it did not open, copy this draft into your preferred email service.</p><label>Prepared draft<textarea readOnly rows={8} value={draft} /></label><button className="button-secondary" type="button" onClick={() => copy(draft, false)}>Copy draft<Copy size={16} /></button></div>}
    <div className="direct-email"><a href={`mailto:${links.email}`}>{links.email}</a><button onClick={() => copy(links.email, true)} aria-label="Copy email address">{copied ? <Check size={18} /> : <Copy size={18} />}</button></div><p className="form-feedback" role="status">{message}</p>
  </>;
}
