/**
 * Build simples, sem dependências: copia src/ -> dist/
 * e injeta a data de build no placeholder __BUILD_DATE__.
 */
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "src");
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const entry of readdirSync(src)) {
  const from = join(src, entry);
  const to = join(dist, entry);
  cpSync(from, to, { recursive: true });
}

// Injeta data de build no HTML (cache-busting simples / transparência)
const htmlPath = join(dist, "index.html");
if (existsSync(htmlPath)) {
  const html = readFileSync(htmlPath, "utf8");
  const stamped = html.replaceAll(
    "__BUILD_DATE__",
    new Date().toISOString().slice(0, 10)
  );
  writeFileSync(htmlPath, stamped);
}

console.log(`build ok -> ${dist}`);
