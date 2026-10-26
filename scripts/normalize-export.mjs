// Next 16 on Windows can emit nested RSC segment paths while the client
// requests dot-separated filenames. Add matching aliases; Linux is a no-op.
// Upstream: https://github.com/vercel/next.js/issues/85374
import fs from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
async function files(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(item => item.isDirectory() ? files(path.join(directory, item.name)) : [path.join(directory, item.name)]))).flat();
}
let aliases = 0;
for (const file of await files(root)) {
  if (!file.endsWith(".txt")) continue;
  const parts = path.relative(root, file).split(path.sep);
  const start = parts.findIndex(part => part.startsWith("__next."));
  if (start < 0 || start === parts.length - 1) continue;
  const target = path.join(root, ...parts.slice(0, start), parts.slice(start).join("."));
  await fs.copyFile(file, target);
  aliases++;
}
console.log(`Static RSC segment aliases: ${aliases}`);
