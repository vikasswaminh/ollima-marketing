import { defineConfig } from "astro/config";

// Static marketing site → Cloudflare Pages. Build with `npm run build`,
// deploy `dist/` (project name e.g. `ollima-marketing`).
export default defineConfig({
  site: "https://ollima.com",
  output: "static",
});
