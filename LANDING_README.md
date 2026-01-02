# Notaly Landing (Astro + Tailwind)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Pages

- Root directory: `/`
- Build command: `npm run build`
- Output directory: `dist`

## URL configuration

All external URLs are centralized in `src/config/site.ts`.

- Update download, docs, FAQ, Discussions, and GitHub URLs there.
- If a URL is an empty string, the corresponding CTA is hidden.

### Discussion category slugs

Category links use the pattern:

```
${discussionsBaseUrl}/categories/${slug}
```

To find a slug, open the category in GitHub Discussions and copy the last path segment from the URL (e.g. `.../categories/q-a-korean`). Update the values under `discussions.categories` in `src/config/site.ts`.

## Canonical site URL

The canonical domain is set in:

- `astro.config.mjs` (`site: "https://notaly.dev"`)
- `src/config/site.ts` (`siteUrl`)

Update both if the canonical domain changes.

## Language routing

The root route `/` redirects to `/ko/`. The localized pages live at:

- `/ko/`
- `/en/`

The redirect is defined in `src/pages/index.astro`.
