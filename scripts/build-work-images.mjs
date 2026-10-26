// Delivery-only derivatives. Keep the original project imagery unchanged.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
const directory = path.resolve("public/work");
const manifest = {};
for (const file of await fs.readdir(directory)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  const source = path.join(directory, file);
  const stem = path.parse(file).name;
  const metadata = await sharp(source).metadata();
  const sizes = [640, 960, 1440].filter(width => width <= metadata.width);
  if (!sizes.length) sizes.push(metadata.width);
  else if (metadata.width < 1440 && !sizes.includes(metadata.width)) sizes.push(metadata.width);
  manifest[file] = { width: metadata.width, height: metadata.height, variants: sizes };
  for (const width of sizes) {
    const target = path.join(directory, `${stem}-${width}.webp`);
    await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 88 }).toFile(target);
    const { size } = await fs.stat(target);
    console.log(`${stem}: ${width}px, ${Math.round(size / 1024)} KB`);
  }
}
await fs.writeFile(path.join(directory, "image-manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
