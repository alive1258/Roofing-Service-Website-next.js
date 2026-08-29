# Ironclad Roofing — Frontend

Public marketing site + admin dashboard for a roofing services company, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **State:** Redux Toolkit + redux-persist
- **Forms:** react-hook-form
- **Icons:** lucide-react, react-icons
- **Notifications:** react-toastify

## Getting Started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000` (Next.js will pick the next free port if 3000 is busy).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

## Environment Variables

Set these in `.env.local`:

| Variable              | Purpose                     |
| --------------------- | --------------------------- |
| `NEXT_PUBLIC_API_URL` | Base URL of the backend API |

## Public Site Pages

| Route                      | Description                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| `/`                        | Home                                                                                             |
| `/services`                | All services, pricing, materials, FAQ                                                            |
| `/services/[slug]`         | Per-service detail page (pricing, features, related services) — generated from `servicesData.ts` |
| `/roof-repair-replacement` | Repair vs. replacement, process, gallery                                                         |
| `/about`                   | Company story, team, certifications                                                              |
| `/contact`                 | Free-estimate quote form, service areas, map                                                     |

Adding a new service: add an entry to `src/components/Ui/Roofing/shared/servicesData.ts` — its detail page, home/services grid card, and pricing row are generated automatically.

## Content & Branding Placeholders

The public site ships with realistic **placeholder** business details that should be replaced before launch:

- Company name/logo: `src/components/Shared/Logo/Logo.tsx`
- Phone number & hours: `src/components/Shared/Navbar/menuItems.ts`
- Email, address, footer links: `src/components/Shared/Footer/Footer.tsx`
- Service area cities, contact email: `src/components/Ui/ContactPage/sections/*`

## Images

Roofing photography in `public/images/roofing/` is sourced from Unsplash (free-to-use license) for placeholder purposes. Swap in the client's own project photos before launch.

## Design System

Color tokens and fonts live in `src/app/globals.css` (`@theme` block):

- `brand-*` — navy (primary) / orange (accent, `brand-600`)
- `gold-*` — warm gold accent used for highlights and secondary CTAs
- Headings use Poppins (`font-heading`), body text uses Inter (`font-sans`)
