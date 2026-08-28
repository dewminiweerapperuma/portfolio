# Dewmini Weerapperuma — Portfolio (Next.js)

A Next.js 14 (App Router) + TypeScript + Tailwind CSS multi-page portfolio,
merging the schematic/blueprint look with the editorial layout — dark
blueprint background with a trace-line/node motif connecting each section,
serif display headings, and pill-shaped skill tags.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home (intro + links to every section)
- `/about` — About Me + technical skills
- `/education` — Dated education timeline
- `/certifications` — Certifications with issuer detail
- `/projects` — Full project write-ups
- `/contact` — Contact links, phone, address

## Project structure

```
app/
  layout.tsx           — fonts, metadata, shared Header/Footer shell
  page.tsx              — Home page
  about/page.tsx
  education/page.tsx
  certifications/page.tsx
  projects/page.tsx
  contact/page.tsx
  globals.css            — Tailwind + custom trace-line styles
components/
  Header.tsx              — desktop nav
  MobileNav.tsx            — mobile nav bar
  PageHeader.tsx            — reusable page title block
  Footer.tsx
public/assets/               — your photo + project photo
```

## Editing content

- **Home intro** — `app/page.tsx`
- **About text / skills** — `app/about/page.tsx` (the `categories` array)
- **Education timeline** — the `timeline` array in `app/education/page.tsx`
- **Certifications** — the `certifications` array in `app/certifications/page.tsx`
- **Projects** — `app/projects/page.tsx` (each project is its own `<article>`)
- **Contact links** — the `items` array in `app/contact/page.tsx`
- **Colors / fonts** — `tailwind.config.ts`

## Deploying

This is a standard Next.js app — deploy for free on
[Vercel](https://vercel.com/new) by pushing this project to a GitHub repo and
importing it, or run `npm run build && npm run start` on any Node host.
