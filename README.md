# jeanpaniagua.dev

Personal resume site for Jean Paniagua — full stack engineer at Gorilla Logic.

Built with **Nuxt 3** (Vue 3 + TypeScript) and **Tailwind CSS**. Static output via `nuxt generate`, deployable to Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

## Stack

- Nuxt 3 + `<script setup>` + TypeScript
- Tailwind CSS (`@nuxtjs/tailwindcss`)
- `@nuxt/fonts` (Inter + JetBrains Mono)
- `@nuxtjs/sitemap` + `@nuxtjs/robots`
- `lucide-vue-next` icons

## Getting started

```bash
# Install dependencies
npm install

# Run the dev server at http://localhost:3000
npm run dev

# Type-check + build static output to .output/public/
npm run generate

# Preview the static build locally
npm run preview
```

## Project layout

```
.
├── app.vue                       # Root, global <Head> + JSON-LD
├── nuxt.config.ts                # Nuxt config (modules, SSG, fonts)
├── tailwind.config.ts            # Theme tokens (palette, fonts)
├── assets/css/main.css           # Tailwind directives + base styles
├── layouts/default.vue           # NavBar + <slot /> + Footer
├── pages/index.vue               # Single-page composition of sections
├── components/
│   ├── NavBar.vue
│   ├── SiteFooter.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── SkillsSection.vue
│   │   └── ContactSection.vue
│   └── ui/
│       ├── SectionHeading.vue
│       ├── TimelineItem.vue
│       └── SocialLink.vue
├── composables/useResume.ts      # Returns the resume data, typed
├── data/resume.ts                # Single source of truth (placeholders)
├── types/resume.ts               # Type definitions
└── public/                       # Static assets (favicon, og-image)
```

## Updating content

All content lives in [`data/resume.ts`](./data/resume.ts). Replace anything tagged `// TODO` with the real values:

- `profile.bio` — final 2–3 paragraph bio
- `experience[]` — every past role in reverse-chronological order
- `profile.socials` — confirmed URLs
- `profile.location` — city, country

Types live in [`types/resume.ts`](./types/resume.ts) and TypeScript will flag any shape mismatches.

## Design tokens

Defined in `tailwind.config.ts`:

| Token | Value |
| --- | --- |
| `bg.DEFAULT` | `#0a0a0a` |
| `bg.surface` | `#111111` |
| `border.DEFAULT` | `#1f1f1f` |
| `fg.DEFAULT` | `#e5e7eb` |
| `fg.muted` | `#9ca3af` |
| `accent.DEFAULT` | `#06b6d4` (cyan) |

Re-themeing is a one-line change in `tailwind.config.ts`.

## Deploying

Any static host works. Build with:

```bash
npm run generate
```

Output is in `.output/public/`. For Vercel/Netlify/Cloudflare Pages, connect the repo and the platform auto-detects Nuxt — no extra config required.

## Roadmap

- [ ] Replace all `// TODO` placeholders with real content
- [ ] Add static `og-image.png` (1200×630) to `public/`
- [ ] Add Projects section (v1.1)
- [ ] Connect domain and analytics

## License

Private — © Jean Paniagua.
