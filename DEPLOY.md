# Deploy

Static site. Build once, host anywhere.

## 1. Build

```bash
npm install
npm run build
```

Output goes to `dist/`.

## 2. Host

Serve `dist/` as static files. Any of these work:

- **GitHub Pages / Netlify / Vercel** — point the site at this repo. Build command `npm run build`, output dir `dist/`.
- **Any static server** — upload `dist/` to nginx, Apache, S3, etc.

## 3. Preview locally

```bash
npm run preview
```
