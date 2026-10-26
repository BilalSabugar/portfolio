"use client";
import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { links, works } from "@/lib/portfolio";
import { contactIntents, type ContactIntent } from "@/lib/contact";
import { asset } from "@/lib/portfolio";
import { resumePath } from "@/lib/profile";

function revealDraft(node: HTMLDivElement | null) {
  if (!node) return;
  node.focus({ preventScroll: true });
  node.scrollIntoView({ block: "start", behavior: "instant" });
}

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
  const [emailUrl, setEmailUrl] = useState("");
  const [prepared, setPrepared] = useState(false);
  const [preparationId, setPreparationId] = useState(0);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const selected = contactIntents.find(item => item.id === intent)!;
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const brief = String(data.get("brief") ?? "").trim();
    const emailField = form.elements.namedItem("email") as HTMLInputElement;
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!email || !emailField.validity.valid) nextErrors.email = "Enter a valid email address, such as name@example.com.";
    if (brief.length < 20) nextErrors.brief = `Write at least 20 characters about your enquiry (${brief.length}/20 entered).`;
    setErrors(nextErrors);
    setMessage("");
    setPrepared(false);
    if (Object.keys(nextErrors).length) {
      const first = form.elements.namedItem(Object.keys(nextErrors)[0]) as HTMLElement;
      first.focus({ preventScroll: true });
      first.scrollIntoView({ block: "center", behavior: "instant" });
      return;
    }
    data.set("name", name);
    data.set("email", email);
    data.set("brief", brief);
    const body = `${data.get("brief")}\n\nName: ${data.get("name")}\nReply to: ${data.get("email")}\nEnquiry: ${selected.label}\nTimeline: ${data.get("timeline") || "To discuss"}${project ? `\nPortfolio reference: ${project}` : ""}`;
    const subject = `${selected.label}${project ? ` — ${project}` : ""}`;
    setDraft(`Subject: ${subject}\n\n${body}`);
    setEmailUrl(`mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setPrepared(true);
    setPreparationId(value => value + 1);
  }
  async function copy(value: string, isAddress: boolean) {
    try { await navigator.clipboard.writeText(value); if (isAddress) setCopied(true); setMessage(isAddress ? "Email address copied." : "Draft copied. Paste it into your email app and send it to the address below."); }
    catch { setMessage("Copy was unavailable. Select and copy the address or draft text below."); }
  }
  return <>
    <fieldset className="enquiry-intents"><legend>What would you like to discuss?</legend><div>{contactIntents.map(item => <label key={item.id} className={intent === item.id ? "intent-selected" : ""}><input type="radio" name="contact-intent" value={item.id} checked={intent === item.id} onChange={() => { setIntent(item.id); setPrepared(false); }} /><span>{item.label}</span></label>)}</div></fieldset>
    <div className="intent-context"><h2>{selected.title}</h2><p>{selected.description}</p>{intent === "hiring" && <a className="text-link" href={asset(resumePath)} download>Download my CV · PDF<ArrowUpRight size={16} /></a>}{project && <p className="enquiry-reference">Portfolio reference: {project}<button type="button" onClick={() => { setProject(""); setPrepared(false); setMessage(""); }}>Remove</button></p>}</div>
    <form className="enquiry-form" noValidate onSubmit={prepare} onChange={event => { setPrepared(false); setMessage(""); const field = (event.target as HTMLInputElement).name; setErrors(current => { const next = { ...current }; delete next[field]; return next; }); }}><div className="form-pair"><label>Your name<input name="name" autoComplete="name" required maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <span className="field-error" id="name-error">{errors.name}</span>}</label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <span className="field-error" id="email-error">{errors.email}</span>}</label></div><label>Timeline <span>(optional)</span><input name="timeline" placeholder="A date or a rough timeframe" maxLength={100} /></label><label>Your message<span className="brief-guidance" id="brief-guidance">{selected.prompt}</span><textarea name="brief" aria-invalid={!!errors.brief} aria-describedby={`brief-guidance brief-length${errors.brief ? " brief-error" : ""}`} rows={6} required minLength={20} maxLength={2000} /><span id="brief-length">At least 20 characters. A short description is enough.</span>{errors.brief && <span className="field-error" id="brief-error">{errors.brief}</span>}</label><p className="form-note">Prepare a message below, then choose your email app or copy it. Nothing is sent or stored by this website.</p>{Object.keys(errors).length > 0 && <p className="form-error-summary" role="alert">Your draft could not be prepared yet. Check the highlighted fields above.</p>}<button className="button-primary" type="submit">Prepare message<ArrowUpRight size={18} /></button></form>
    {prepared && <div className="prepared-draft" key={preparationId} ref={revealDraft} tabIndex={-1} role="region" aria-labelledby="prepared-draft-title"><h2 id="prepared-draft-title">Your draft is ready.</h2><p role="status">Your message is ready. Open it in your email app, or copy it into your preferred email service. Nothing has been sent.</p><label>Prepared draft<textarea readOnly rows={8} value={draft} /></label><div className="draft-actions"><a className="button-secondary" href={emailUrl}>Open email app<ArrowUpRight size={16} /></a><button className="button-secondary" type="button" onClick={() => copy(draft, false)}>Copy message<Copy size={16} /></button></div></div>}
    <div className="direct-email"><a href={`mailto:${links.email}`}>{links.email}</a><button onClick={() => copy(links.email, true)} aria-label="Copy email address">{copied ? <Check size={18} /> : <Copy size={18} />}</button></div><p className="form-feedback" role="status">{message}</p>
  </>;
}
