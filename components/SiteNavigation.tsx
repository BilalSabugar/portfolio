"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";

const pages = [["/work/", "Work"], ["/research/", "Research"], ["/company/", "Aetheron Labs"], ["/about/", "About"]];
export function SiteNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const legacy: Record<string, string> = { projects: "/work/novexa/", systems: "/work/osrs/", research: "/research/", opensource: "/work/", company: "/company/", proof: "/certificates/", credentials: "/certificates/", hire: "/contact/", contact: "/contact/" };
    const destination = legacy[window.location.hash.slice(1)];
    if (pathname === "/" && destination) router.replace(destination);
  }, [pathname, router]);
  return <>
    <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
    <button className="mobile-menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    <nav id="site-navigation" className={`folio-navigation ${open ? "navigation-open" : ""}`} aria-label="Main navigation" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".mobile-menu-button")?.focus(); } }}>
      {pages.map(([href, label]) => <Link key={href} href={href} aria-current={pathname.startsWith(href.replace(/\/$/, "")) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="mobile-contact-link" href="/contact/" onClick={() => setOpen(false)}>Contact</Link>
    </nav>
  </>;
}
