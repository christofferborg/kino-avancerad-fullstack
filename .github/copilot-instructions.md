# Copilot Instructions for Kino Avancerad Fullstack

## Project Overview
**Kino** is a cinema booking web application built with Next.js 16, React 19, and TypeScript. It fetches movie data from the OMDb API and displays upcoming screenings, pricing, and event information. The project uses Tailwind CSS v4 with a custom theme and is deployed on Render with automatic CI/CD.

## Architecture & Data Flow
- **Frontend Framework**: Next.js App Router (server components by default)
- **Styling**: Tailwind CSS v4 with custom theme variables in [globals.css](../src/app/globals.css) using `@theme` directive
- **Component Structure**: 
  - `src/app/` - Pages and layouts (App Router structure)
  - `src/components/` - Reusable UI components organized by context (layout, ui, homepage)
  - `src/lib/` - Utilities and data fetching logic
  - `src/types/` - TypeScript interfaces
- **Data Fetching**: Movies fetched from OMDb API in [lib/getMovies.ts](../src/lib/getMovies.ts) and [api/movies/route.ts](../src/app/api/movies/route.ts)
  - Uses predefined IMDb IDs, pagination with 10 movies per page
  - Requires `OMDB_API_KEY` environment variable
  - Returns typed `Movie` interface with: id, title, plot, rating, genre, img

## Key Conventions & Patterns
1. **Styling**: Use Tailwind + custom color tokens (e.g., `bg-background`, `text-main`, `text-muted`, `bg-primary`, `bg-secondary`)
2. **Component Props**: Components with variants use `clsx` for conditional styling (see [Button.tsx](../src/components/ui/Button.tsx))
3. **Language**: Code comments are in Swedish; UI text is Swedish
4. **Imports**: Use path alias `@/` for all imports (configured in tsconfig.json)
5. **"use client" Directive**: Interactive components like Navbar and dropdowns must include this

## Development Workflows
- **Install dependencies**: `pnpm install` (uses pnpm workspaces)
- **Development**: `pnpm run dev` (runs with Webpack, watch mode enabled)
- **Build**: `pnpm run build`
- **Start production**: `pnpm start`
- **Lint**: `pnpm run lint` (ESLint + Next.js recommended config + TypeScript)
- **E2E Testing**: `pnpm run cypress` (recently added, use for user journey tests)

## External Dependencies
- **Image Optimization**: Remote images from `m.media-amazon.com` (OMDb poster CDN, configured in next.config.ts)
- **OMDb API**: Movie data provider, API key required for local dev and production
- **React Compiler**: Enabled in next.config.ts for performance optimization

## Important Files
- [next.config.ts](../next.config.ts) - React Compiler, image remotePatterns
- [globals.css](../src/app/globals.css) - Theme colors and fonts
- [lib/getMovies.ts](../src/lib/getMovies.ts) - Core data fetching logic
- [types/movie.ts](../src/types/movie.ts) - Movie interface definition

## Deployment
- Deployed on Render with automatic CI/CD
- Environment variables set in Render dashboard
- Auto-deploy on every push to `main` branch
- Live: https://kino-avancerad-fullstack.onrender.com/
