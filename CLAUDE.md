# CLAUDE.md - Project Instructions

## Project Overview

Personal portfolio website for Manuel Kyd Thomas O. Nagpala. Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, and TypeScript 5.

## Tech Stack

- **Framework:** Next.js 16.0.10 with App Router
- **UI:** React 19.2.0, Tailwind CSS 4 (PostCSS plugin)
- **Language:** TypeScript 5
- **Animations:** AOS (Animate On Scroll), CSS keyframes, Canvas API
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
  globals.css         # Tailwind imports, CSS variables, animations
components/
  layouts/            # Page sections: hero, Navbar, AboutMe, Project, Experience, Contact, Footer
  ui/                 # Reusable: ThemeToggle, GeometricBackground, CustomCursor, ScrollButton, GalaxyLoader, ClientWrapper
  forms/              # GetInTouch form
data/                 # Static data: NavItem.data.ts, Project.data.ts, Experience.data.ts
types/                # TypeScript interfaces: Nav.ts, Project.ts, Experience.ts
public/               # Static assets (images, CV PDF)
```

## Styling & Theming

### Tailwind CSS 4 Setup
- Uses `@tailwindcss/postcss` plugin (no tailwind.config file)
- Theme defined via CSS variables in `globals.css`
- Custom theme values via `@theme inline` block

### Dark Mode (Class-Based)
- **Critical:** Tailwind v4 requires `@custom-variant dark (&:where(.dark, .dark *));` in globals.css for class-based dark mode. Without this, `dark:` utilities only respond to `prefers-color-scheme`.
- Default: `.dark` class on `<html>` element
- Toggle: `ThemeToggle` component adds/removes `.dark` class, persists to localStorage
- Flash prevention: Inline `<script>` in layout.tsx reads localStorage before first paint
- Pattern: Base classes = light mode, `dark:` prefix = dark mode

### Color Conventions
- Light mode text: `text-slate-900` (headings), `text-slate-600` (body), `text-slate-500` (muted)
- Dark mode text: `dark:text-white` (headings), `dark:text-gray-300` (body), `dark:text-gray-400` (muted)
- Light mode backgrounds: `bg-slate-100` (cards), `bg-white` (inputs)
- Dark mode backgrounds: `dark:bg-white/5` (cards), `dark:bg-white/5` (inputs)
- Always add `transition-colors duration-300` when using theme-dependent colors

## Code Patterns

### Component Architecture
- Page sections are in `components/layouts/` — each renders a full `<section>`
- UI utilities are in `components/ui/` — reusable across sections
- Below-fold components use `dynamic()` imports in page.tsx for code splitting
- `ClientWrapper` provides AOS initialization

### Performance Optimizations
- Dynamic imports for below-fold content
- Image optimization: AVIF/WebP formats, responsive sizes
- Console logs removed in production (except error/warn)
- Source maps disabled in production
- Package import optimization for aos, react, react-dom
- `will-change` on parallax elements
- `prefers-reduced-motion` media query support

### Canvas Background (GeometricBackground)
- Uses `MutationObserver` on `<html>` class attribute to detect theme changes
- Swaps line colors and clear color based on `isDarkRef` in animation loop
- Canvas background color handled via Tailwind classes (`bg-white dark:bg-black`)

## Environment Variables

Required in `.env.local` / `.env.production`:
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

## Rules

- Never hard-code colors directly — use Tailwind utilities with `dark:` variants
- Always provide both light and dark mode classes for themed elements
- Keep floating logo icon backgrounds as brand colors (not theme-dependent)
- Use `text-slate-*` for light mode, `dark:text-white` / `dark:text-gray-*` for dark mode
- Form submit buttons invert: `bg-slate-900 text-white dark:bg-white dark:text-black`
- Do not commit `.env.local` or `.env.production`
