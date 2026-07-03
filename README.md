# ollima-marketing

Marketing site for **ollima.com** — Astro static SSG, deploys to Cloudflare Pages.

**This repo contains the marketing site ONLY.** No gateway, no extension, no other
product code. (Gateway lives in `ollima-llm`; the VS Code extension in
`ollima-vs-extension`.)

## Develop

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static output -> ./dist
```

## Deploy (Cloudflare Pages)

Build output is `./dist`. Deploy with a Pages-Write token:

```bash
npx wrangler pages deploy dist --project-name=ollima-marketing --branch=main
```

(Pass `--branch=main` so it's a production deploy, not a preview.)
