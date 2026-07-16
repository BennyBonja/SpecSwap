# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (Turbopack)
npm run build    # production build (also runs the TypeScript typecheck)
npm run start    # serve the production build
npm run lint     # ESLint
```

There is no test suite configured in this repo.

## Architecture

This is a Next.js App Router marketing site + lead-capture wizard for SpecSwap, a China-first construction procurement broker (finds/vets/negotiates with factories on behalf of Australian builders, then manages sourcing, QC and freight). Two things drive most of the non-obvious behavior:

**Content lives in `src/lib/constants.ts`, not in components.** FAQ items, pricing tiers, audience segments, comparison examples, the turnaround claim, contact phone/email — all pulled from there. Homepage sections (`src/components/sections/*.tsx`) are thin: each imports its copy from `constants.ts` and composes shared primitives from `src/components/ui/*` (`Container`, `SectionHeading`, `Card`, `Badge`, `IconBadge`, `CountUp`, etc.). `src/app/page.tsx` just lists the sections in order. When changing copy or adding a stat, edit `constants.ts` first — don't hardcode strings into a section component.

**File uploads and form submission never touch a Next.js API route as a proxy — both go directly from the browser to third-party services, and that's load-bearing, not incidental:**
- Files upload straight from the browser to Vercel Blob. `src/app/api/upload/route.ts` only mints a short-lived upload token (`handleUpload` from `@vercel/blob/client`); it never receives file bytes. It gates allowed types by checking the file **extension** against `pathname` (not MIME type), because CAD/BIM formats (`.dwg`, `.rvt`, `.ifc`, etc.) don't report reliable MIME types in browsers.
- Form submission (both the upload wizard and the `/contact` page) posts directly from the browser to Web3Forms via `src/lib/submitToWeb3Forms.ts`. This is **not** a bug to "fix" by proxying through an API route — Cloudflare sits in front of Web3Forms and blocks server-to-server requests with a JS challenge that only a real browser can pass; a Next.js server making that same request gets silently blocked. If you're tempted to route a form submission through an API handler, don't — keep it client-side.

**Multi-step upload wizard** (`src/components/form/`): `UploadFormProvider.tsx` holds reducer-based state (current step, answers, submit status); `UploadFormRoot.tsx` wraps the app and renders `UploadFormModal.tsx` → `StepShell.tsx` → the active `steps/Step*.tsx` component. Step content/labels live in `src/lib/formSteps.ts`; per-step validation is an array of Zod schemas in `formSchema.ts` indexed by step number. On final submit, `UploadFormRoot.tsx` uploads any files (concurrency-limited, `multipart: true` over ~100MB) before building the Web3Forms payload via `src/lib/buildSubmission.ts`.

**Legal pages** (`src/app/privacy/page.tsx`, `src/app/terms/page.tsx`) are long (22 and 36 numbered sections respectively) and use `src/components/legal/LegalSection.tsx` (`LegalSection` / `LegalSubHeading` / `LegalList`) for consistent formatting. They're already extensive — check what's there before assuming a clause needs adding, and renumber subsequent sections if inserting one.

**Styling**: Tailwind v4 with a CSS-first config — there is no `tailwind.config.ts`. Brand colors (`navy-*`, `coral-*` scales) and fonts are defined as `@theme` tokens in `src/app/globals.css`, along with a few custom utilities used across sections (`bg-blueprint-grid`, `animate-float-tag`, `animate-slow-spin`, `animate-wiggle-pulse`).

**SEO/metadata** uses Next's file-convention APIs, not manual `<head>` tags: `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/app/opengraph-image.tsx` (generates the social-share image at request time via `next/og`'s `ImageResponse` rather than a static asset). `src/app/icon.svg` and `src/app/favicon.ico` both need to stay in sync with the actual logo — browsers prefer the SVG, but `favicon.ico` is still the fallback several consumers (including Google Search) rely on.
