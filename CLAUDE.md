# CLAUDE.md - Project Instructions

## Project Overview

Personal portfolio website for Manuel Kyd Thomas O. Nagpala. Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, and TypeScript 5. Design philosophy: Functional Brutalism — utility over ornament, borders over color blocks, one accent color, no gradients, sub-150ms transitions only.

## Tech Stack

- **Framework:** Next.js 16.0.10 with App Router
- **UI:** React 19.2.0, Tailwind CSS 4 (PostCSS plugin)
- **Language:** TypeScript 5
- **Email:** @emailjs/browser 4.4.1
- **Build:** Turbopack (default in Next.js 16)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

## Project Structure

```
app/                  # Next.js App Router
  layout.tsx          # Root layout (fonts, dark class, theme script)
  page.tsx            # Home page (client component, dynamic imports)
  globals.css         # Tailwind imports, CSS variables (minimal ~65 lines)
components/
  layouts/            # Page sections: hero, Navbar, AboutMe, Project, Experience, Contact, Footer
  ui/                 # Reusable: ThemeToggle
  forms/              # GetInTouch form (with EmailJS integration)
data/                 # Static data: NavItem.data.ts, Project.data.ts, Experience.data.ts
types/                # TypeScript interfaces: Nav.ts, Project.ts, Experience.ts
public/               # Static assets (images, CV PDF)
```

## Styling & Theming

### Tailwind CSS 4 Setup
- Uses `@tailwindcss/postcss` plugin (no tailwind.config file)
- Theme defined via CSS variables in `globals.css`
- Custom theme values via `@theme inline` block
- Semantic color tokens: `bg-primary`, `text-primary`, `border-primary`, `accent`

### Dark Mode (Class-Based)
- **Critical:** Tailwind v4 requires `@custom-variant dark (&:where(.dark, .dark *));` in globals.css for class-based dark mode.
- Default: `.dark` class on `<html>` element
- Toggle: `ThemeToggle` component adds/removes `.dark` class, persists to localStorage
- Flash prevention: Inline `<script>` in layout.tsx reads localStorage before first paint

### Color System (CSS Variables)
**Dark mode (default):**
- Backgrounds: `#09090b` / `#18181b` / `#27272a` (zinc-950/900/800)
- Text: `#fafafa` / `#a1a1aa` / `#71717a` (zinc-50/400/500)
- Borders: `#27272a` / `#3f3f46` (zinc-800/700)
- Accent: `#3b82f6` (blue-500)

**Light mode:**
- Backgrounds: `#ffffff` / `#f4f4f5` / `#e4e4e7` (white/zinc-100/200)
- Text: `#09090b` / `#52525b` / `#a1a1aa` (zinc-950/600/400)
- Borders: `#e4e4e7` / `#d4d4d8` (zinc-200/300)
- Accent: `#2563eb` (blue-600)

### Tailwind Color Utilities
- `bg-bg-primary` / `bg-bg-secondary` / `bg-bg-tertiary`
- `text-text-primary` / `text-text-secondary` / `text-text-muted`
- `border-border-primary` / `border-border-secondary`
- `text-accent` / `bg-accent`

## Code Patterns

### Component Architecture
- Page sections are in `components/layouts/` — each renders a full `<section>`
- UI utilities are in `components/ui/` — only ThemeToggle remains
- Below-fold components use `dynamic()` imports in page.tsx for code splitting
- No animation libraries — zero decorative animations

### Typography & Spacing
- Fonts: Geist Sans (headings/body), Geist Mono (metadata/overlines/tech)
- Headings: `font-bold`, body: default weight
- Max-width: `max-w-5xl` (1024px)
- Section padding: `py-24` with `border-t border-border-primary` separation
- Card padding: `p-8`
- All transitions: `duration-150` (color, background-color, border-color only)

### Design Rules
- No rounded corners (no `rounded-*`)
- No gradients
- No box shadows
- No animations/keyframes
- Borders for separation, not color blocks
- Monospace (`font-mono`) for metadata, overlines, tech tags
- 1px border grid for project cards (`gap-px bg-border-primary`)

### Performance
- Dynamic imports for below-fold content
- Image optimization: AVIF/WebP formats, responsive sizes
- Console logs removed in production (except error/warn)
- Source maps disabled in production
- `prefers-reduced-motion` media query support
- Zero JS animation libraries, zero canvas/RAF loops

## Environment Variables

Required in `.env.local` / `.env.production`:
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

## Rules

- Never use gradients, box shadows, or rounded corners
- Use semantic color tokens (`text-text-primary`, `bg-bg-secondary`, etc.)
- All transitions must be `duration-150` max
- Sections separated by `border-t border-border-primary`
- No animation libraries — static layout only
- Form submit buttons: `bg-text-primary text-bg-primary`
- Do not commit `.env.local` or `.env.production`
