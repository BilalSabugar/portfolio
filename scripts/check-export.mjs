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
}
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
for (const url of urls) {
  const route = new URL(url).pathname.replace(/^\/portfolio/, "");
  if (!exists(route)) issues.push(`sitemap: missing ${route}`);
}
if (urls.length !== 16) issues.push(`sitemap: expected 16 canonical URLs, found ${urls.length}`);
if (issues.length) { console.error(issues.join("\n")); process.exit(1); }
console.log(`Verified ${pages} exported public HTML pages, internal assets/links, JSON-LD and ${urls.length} sitemap entries. Base path: ${base || "/"}`);
