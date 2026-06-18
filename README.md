# muse-site

The marketing landing page and user manual for **MUSE** — built with
[Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/).

It is a fully static site: no server, no database. It is configured for GitHub Pages at
`https://atomic-rose.github.io/muse-site/`. App installers themselves are hosted separately
on GitHub Releases.

## Local development

```bash
npm install      # first time only
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the static site into ./dist
npm run preview  # preview the production build locally
```

> Requires Node 20+. This project was scaffolded by hand, so the first
> `npm install` resolves the exact dependency versions.

## Project structure

```text
muse-site/
├── astro.config.mjs            # site config, sidebar, branding
├── src/
│   ├── content.config.ts       # Starlight content collection
│   ├── styles/custom.css       # MUSE brand palette
│   ├── assets/muse-logo.svg    # logo (mirrors ../branding/muse-logo.svg)
│   └── content/docs/
│       ├── index.mdx           # landing page (splash hero)
│       ├── manual/             # the user manual
│       ├── alpha/              # alpha tester guides
│       └── privacy.md          # privacy page
└── public/favicon.svg
```

Content is plain Markdown / MDX. To edit the manual, edit the files under
`src/content/docs/` — the sidebar is defined in `astro.config.mjs`.

## Deployment

This repository deploys to GitHub Pages from `.github/workflows/deploy.yml`.

For the temporary GitHub Project Pages URL, `astro.config.mjs` uses:

- `site: 'https://atomic-rose.github.io'`
- `base: '/muse-site/'`

When moving to a custom domain later, set `SITE` to the custom domain and remove
`BASE_PATH` from `astro.config.mjs`.

Every push to `main` will rebuild and redeploy automatically.

## Keeping content in sync with the app

Several pages were seeded from the app repo's `ALPHA_TESTERS.md`, `PRIVACY.md`, and
`branding/`. When those change materially, update the corresponding pages here.
