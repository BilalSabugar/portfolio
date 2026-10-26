import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { gzipSync } from "node:zlib";
const root = path.resolve("out");
const base = "/portfolio";
const types = { ".html": "text/html; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".png": "image/png", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".pdf": "application/pdf", ".xml": "application/xml", ".json": "application/json" };
http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    if (pathname === "/" || pathname === base) { response.writeHead(302, { Location: `${base}/` }); response.end(); return; }
    if (!pathname.startsWith(`${base}/`)) { response.writeHead(404); response.end("Not found"); return; }
    let target = path.resolve(root, `.${pathname.slice(base.length)}`);
    if (!target.startsWith(root + path.sep) && target !== root) { response.writeHead(403); response.end(); return; }
    if ((await fs.stat(target)).isDirectory()) target = path.join(target, "index.html");
    const bytes = await fs.readFile(target);
    const type = types[path.extname(target)] ?? "application/octet-stream";
    if (/text|javascript|json|xml/.test(type) && /gzip/.test(request.headers["accept-encoding"] ?? "")) {
      response.writeHead(200, { "Content-Type": type, "Content-Encoding": "gzip", Vary: "Accept-Encoding" }); response.end(gzipSync(bytes));
    } else { response.writeHead(200, { "Content-Type": type }); response.end(bytes); }
  } catch { response.writeHead(404); response.end("Not found"); }
}).listen(4173, "127.0.0.1", () => console.log("Production export preview: http://127.0.0.1:4173/portfolio/"));
