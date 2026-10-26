import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.argv[2] ?? (process.env.GITHUB_ACTIONS === "true" && repository && !repository.endsWith(".github.io") ? `/${repository}` : "");
const issues = [];
let pages = 0;
function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(item => item.isDirectory() ? files(path.join(directory, item.name)) : [path.join(directory, item.name)]);
}
const htmlFiles = files(root).filter(file => file.endsWith(".html"));
const exists = pathname => {
  let target = path.join(root, decodeURIComponent(pathname));
  return (fs.existsSync(target) && fs.statSync(target).isFile()) || fs.existsSync(`${target}.html`) || fs.existsSync(path.join(target, "index.html"));
};
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file).replaceAll("\\", "/");
  if (relative.startsWith("admin/")) continue;
  pages++;
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) issues.push(`${relative}: expected one h1`);
  if (!/<title>[^<]+<\/title>/.test(html)) issues.push(`${relative}: missing title`);
  if (!html.includes('name="description"')) issues.push(`${relative}: missing description`);
  for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!value.startsWith("/") || value.startsWith("//")) continue;
    const clean = value.split(/[?#]/)[0];
    if (base && !clean.startsWith(`${base}/`) && clean !== base) { issues.push(`${relative}: missing base path: ${clean}`); continue; }
    if (!exists(clean.slice(base.length))) issues.push(`${relative}: missing target: ${clean}`);
  }
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try { JSON.parse(json); } catch { issues.push(`${relative}: invalid JSON-LD`); }
  }
  for (const [, srcset] of html.matchAll(/srcset="([^"]+)"/gi)) {
    for (const entry of srcset.split(",")) {
      const target = entry.trim().split(/\s+/)[0];
      if (target.startsWith("/") && !exists(target.slice(base.length))) issues.push(`${relative}: missing responsive image ${target}`);
    }
  }
  for (const [, preview] of html.matchAll(/<meta (?:property="og:image"|name="twitter:image") content="([^"]+)"/g)) {
    const target = new URL(preview).pathname;
    if (!exists(target.slice(base.length))) issues.push(`${relative}: missing social preview ${target}`);
  }
}
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
for (const url of urls) {
  const route = new URL(url).pathname.replace(/^\/portfolio/, "");
  if (!exists(route)) issues.push(`sitemap: missing ${route}`);
}
if (urls.length !== 16) issues.push(`sitemap: expected 16 canonical URLs, found ${urls.length}`);
for (const slug of ["portfolio", "novexa", "osrs", "roboscout", "wirk", "recoveros", "calm-pulse"]) {
  const image = path.join(root, "share", `${slug}.png`);
  if (!fs.existsSync(image)) { issues.push(`missing social image: ${slug}`); continue; }
  const bytes = fs.readFileSync(image);
  if (bytes.toString("hex", 0, 8) !== "89504e470d0a1a0a" || bytes.readUInt32BE(16) !== 1200 || bytes.readUInt32BE(20) !== 630) issues.push(`invalid social PNG dimensions: ${slug}`);
}
const resume = path.join(root, "bilal-sabugar-resume.pdf");
if (!fs.existsSync(resume) || fs.readFileSync(resume).toString("ascii", 0, 4) !== "%PDF") issues.push("missing/invalid public resume PDF");
const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
const about = fs.readFileSync(path.join(root, "about", "index.html"), "utf8");
const company = fs.readFileSync(path.join(root, "company", "index.html"), "utf8");
const training = fs.readFileSync(path.join(root, "certificates", "index.html"), "utf8");
const workIndex = fs.readFileSync(path.join(root, "work", "index.html"), "utf8");
for (const marker of ["June–July 2026", "May 2026–present", "Artificial Intelligence &amp; Robotics"]) {
  if (!about.includes(marker)) issues.push(`about: missing CV alignment: ${marker}`);
}
for (const marker of ["Robotic Arm Control", "Advanced Drone Technology", "AI &amp; Robotics Summer School", "Winter Internship Technical Training", "owner-reported"]) {
  if (!training.includes(marker)) issues.push(`training: missing record/context: ${marker}`);
}
for (const marker of ["S.L.A.B.", "Raven", "VIER", "My work", "Next / planned"]) {
  if (!company.includes(marker)) issues.push(`company: missing program context: ${marker}`);
}
for (const marker of ['id="coursework"', "T.H.O.M.A.S.", "Q-learning", "No physical maze-solving result"]) {
  if (!workIndex.includes(marker)) issues.push(`work: missing coursework context: ${marker}`);
}
for (const intent of ["freelance", "hiring", "research", "company"]) {
  if (!home.includes(`${base}/contact/?intent=${intent}`)) issues.push(`home: missing ${intent} enquiry path`);
}
for (const slug of ["novexa", "osrs", "roboscout", "wirk", "recoveros", "calm-pulse"]) {
  const file = path.join(root, "work", slug, "index.html");
  if (!fs.existsSync(file)) { issues.push(`case study: missing ${slug}`); continue; }
  const html = fs.readFileSync(file, "utf8");
  for (const marker of ['class="case-at-a-glance"', 'id="contribution"', 'id="scope"', `project=${slug}`]) {
    if (!html.includes(marker)) issues.push(`${slug}: missing contribution, scope or enquiry context: ${marker}`);
  }
  if (slug === "novexa" || slug === "osrs") {
    const expected = slug === "novexa" ? 3 : 4;
    const tabs = [...html.matchAll(/<button[^>]*role="tab"[^>]*>/g)].map(match => match[0]);
    if (tabs.length !== expected) issues.push(`${slug}: expected ${expected} walkthrough stages`);
    if (tabs.filter(tab => tab.includes('aria-selected="true"')).length !== 1) issues.push(`${slug}: walkthrough must have one selected tab`);
    if (!html.includes('id="system-walkthrough"') || !html.includes('role="tabpanel"')) issues.push(`${slug}: missing walkthrough region/panel`);
    for (const tab of tabs) {
      const controls = tab.match(/aria-controls="([^"]+)"/)?.[1];
      if (!controls || !html.includes(`id="${controls}"`)) issues.push(`${slug}: broken tab-to-panel relationship`);
    }
  }
}
if (issues.length) { console.error(issues.join("\n")); process.exit(1); }
console.log(`Verified ${pages} exported public HTML pages, internal assets/links, JSON-LD and ${urls.length} sitemap entries. Base path: ${base || "/"}`);
