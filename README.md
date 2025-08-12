# Sharpened Website

A premium dark-mode landing page for Sharpened, built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
pnpm i

# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build
```

## Project Structure

- **`src/lib/brand.ts`** - Brand constants extracted from `brand.md`
- **`src/app/page.tsx`** - Main landing page component
- **`tailwind.config.js`** - Custom color tokens from brand palette
- **`brand.md`** - Source of truth for all brand content and colors

## Editing Brand Content

All website content is pulled from `brand.md`. To update:

1. Edit `brand.md` with new content
2. Update constants in `src/lib/brand.ts` if needed
3. Content automatically updates on next build

## Brand Colors (Tailwind)

- **Core**: `charcoal`, `deep-gray`, `electric-blue`
- **Products**: `vibrant-red` (FeelSharper), `cyan-pulse` (StudySharper)

## Features

- ✅ Dark mode default
- ✅ Smooth anchor scrolling
- ✅ Mobile responsive
- ✅ Email CTAs with mailto fallbacks
- ✅ Expandable manifesto section
- ✅ SEO optimized with OG tags
- ✅ Fast Next.js 14 App Router