"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { links } from "@/lib/portfolio";
export function ProjectEnquiry() {
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const body = `${data.get("brief")}\n\nName: ${data.get("name")}\nReply to: ${data.get("email")}\nProject type: ${data.get("type")}\nTimeline: ${data.get("timeline") || "To discuss"}`;
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(`Project enquiry: ${data.get("type")}`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  async function copy() { try { await navigator.clipboard.writeText(links.email); setCopied(true); setMessage("Email address copied."); } catch { setMessage("Select and copy the email address above."); } }
  return <><form className="enquiry-form" onSubmit={prepare}><div className="form-pair"><label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label></div><div className="form-pair"><label>What are you working on?<select name="type"><option>Robotics or mechatronics</option><option>Control or experiment tools</option><option>AI or product software</option><option>Research collaboration</option><option>Other enquiry</option></select></label><label>Timeline <span>(optional)</span><input name="timeline" placeholder="A date or a rough timeframe" maxLength={100} /></label></div><label>Tell me about the project<textarea name="brief" rows={6} required minLength={20} maxLength={2000} placeholder="What should it do? What exists already? What constraints or budget should I know about?" /></label><p className="form-note">This opens a draft in your email app. Review and send it there. The website does not store or submit your entries.</p><button className="button-primary" type="submit">Prepare an email draft<ArrowUpRight size={18} /></button>{prepared && <p className="form-feedback" role="status">Your email app was requested. If it did not open, send your brief directly to the address below.</p>}</form><div className="direct-email"><a href={`mailto:${links.email}`}>{links.email}</a><button onClick={copy} aria-label="Copy email address">{copied ? <Check size={18} /> : <Copy size={18} />}</button></div><p className="form-feedback" role="status">{message}</p></>;
}
