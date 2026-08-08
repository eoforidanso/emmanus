// GitHub Pages has no server-side routing, so an SPA route like /services
// only resolves via the 404.html fallback — which serves the right content
// but with an HTTP 404 status. Google will not index a 404, so every page
// except the homepage stayed out of the index.
//
// Fix: emit a real dist/<route>/index.html for each route. GitHub Pages then
// serves it directly with a 200. 404.html stays as a genuine catch-all.
import { mkdirSync, copyFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");

// Derived from public/sitemap.xml so the two can't drift apart.
const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => new URL(m[1]).pathname)
  .filter((p) => p !== "/");

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(join(dist, "index.html"), join(dir, "index.html"));
}

// Catch-all for anything genuinely missing.
copyFileSync(join(dist, "index.html"), join(dist, "404.html"));

console.log(`✓ prerendered ${routes.length} routes + 404 fallback`);
