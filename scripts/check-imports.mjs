import fs from "node:fs";
import path from "node:path";
const files = [];
function scan(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.posix.join(directory, item.name);
    if (item.isDirectory()) scan(file);
    else if (/\.[jt]sx?$/.test(file)) files.push(file);
  }
}
for (const directory of ["app", "components", "lib"]) scan(directory);
const seen = new Set();
function visit(file) {
  file = file.replaceAll("\\", "/");
  if (seen.has(file)) return;
  seen.add(file);
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(/(?:from\s*|import\s*\()\s*['"]([^'"]+)['"]/g)) {
    let target = match[1];
    if (target.startsWith("@/")) target = target.slice(2);
    else if (target.startsWith(".")) target = path.posix.join(path.posix.dirname(file), target);
    else continue;
    for (const candidate of [target, `${target}.tsx`, `${target}.ts`, `${target}/index.tsx`, `${target}/index.ts`]) {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) { visit(candidate); break; }
    }
  }
}
for (const file of files.filter(file => file.startsWith("app/"))) visit(file);
const unused = files.filter(file => !seen.has(file));
console.log(JSON.stringify({ reachable: seen.size, unreachable: unused }, null, 2));
if (process.argv.includes("--strict") && unused.length) process.exit(1);
