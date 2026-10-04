# RNikhil10.github.io

Personal portfolio of Nikhil Yengala Reddy, built with React, TypeScript and Vite.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
```

## Editing content

All text, links, education, experience, skills and projects live in
[`src/data/content.ts`](src/data/content.ts). Images and the resume PDF are in `public/`.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes
it to GitHub Pages. In the repo settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**.
