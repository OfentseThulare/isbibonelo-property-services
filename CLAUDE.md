# Isibonelo Property Services

## Project Overview

Isibonelo Property Services is a South African real estate development and management company founded in 1999. This is a 4-page marketing website with an interactive Fit Finder quiz and conversion-optimized paths for property development and management services.

**Core Services:** Property Development, Property Management, Facilities Management, Asset Management, Leasing & Brokerage

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS (CDN via `<script src="https://cdn.tailwindcss.com">` in index.html)
- **Routing:** React Router DOM v7 (HashRouter)
- **Fonts:** Google Fonts (Poppins + Inter)
- **No external UI library** — custom Button component only

## Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build
```

## Project Structure

```
├── index.html           # Entry HTML with Tailwind config & CSS variables
├── index.tsx            # React entry point
├── App.tsx              # Router + navigation + footer (all inline)
├── types.ts             # TypeScript interfaces
├── constants.tsx         # SERVICES, PORTFOLIO, CONTACT_INFO data
├── components/
│   ├── ui/
│   │   └── Button.tsx   # Reusable button (4 variants, 3 sizes)
│   └── quiz/
│       └── FitFinder.tsx # 6-step interactive service recommendation quiz
├── pages/
│   ├── Home.tsx         # Landing: hero, proof bar, services grid, quiz, portfolio, CSR
│   ├── About.tsx        # Company story, leadership, focus areas, community impact
│   ├── Services.tsx     # Tab switcher, expandable cards, portfolio filter
│   └── Contact.tsx      # Contact cards, map placeholder, multi-step form, FAQ
└── services/
    └── analytics.ts     # trackEvent() and trackFunnelClick() (stubbed)
```

## Design System

### Color Palette (Tailwind config in index.html)

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Brand 600 | `#E4572E` | `bg-brand-600` / `text-brand-600` | Primary brand, CTAs, accents |
| Brand 700 | `#C94825` | `bg-brand-700` | Hover/active states |
| Ink 700 | `#374151` | `text-ink-700` | Secondary text |
| Ink 900 | `#111111` | `text-ink-900` | Primary headings, dark text |
| Surface 0 | `#FFFFFF` | `bg-surface-0` | Page background |
| Surface 50 | `#F7F7F8` | `bg-surface-50` | Section backgrounds, cards |
| Border 200 | `#E5E7EB` | `border-border-200` | Borders, dividers |
| Success 600 | `#16A34A` | `text-success-600` | Success states |
| Warning 600 | `#D97706` | `text-warning-600` | Warning states |
| Focus 500 | `#2563EB` | `ring-focus-500` | Focus rings |

### CSS Variables (defined in index.html `:root`)

```css
--brand-600: #E4572E;
--brand-700: #C94825;
--ink-900: #111111;
--ink-700: #374151;
--surface-0: #FFFFFF;
--surface-50: #F7F7F8;
--border-200: #E5E7EB;
--success-600: #16A34A;
--warning-600: #D97706;
--focus-500: #2563EB;
```

### Typography

| Role | Font | Tailwind Class | Weights |
|------|------|----------------|---------|
| Headings | Poppins | `font-heading` | 500, 600, 700 |
| Body | Inter | `font-sans` (default) | 400, 500, 600, 700 |

### Custom Tailwind Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-card` | 16px | Card border radius |
| `rounded-pill` | 999px | Pill buttons, tags |

### Button Component (`components/ui/Button.tsx`)

4 variants with 3 sizes — always reuse this component:

| Variant | Style |
|---------|-------|
| `primary` | Brand orange bg, white text |
| `secondary` | Surface-50 bg, ink text |
| `outline` | White bg, brand border, brand text |
| `ghost` | Transparent bg, brand text |

| Size | Padding |
|------|---------|
| `sm` | `px-4 py-2 text-sm` |
| `md` | `px-6 py-3 text-base` |
| `lg` | `px-8 py-4 text-lg` |

### Design Conventions

1. **Headings:** `font-heading font-bold text-ink-900` — Poppins bold
2. **Body text:** `text-ink-700` — Inter regular
3. **Section spacing:** `py-16` to `py-24` for major sections
4. **Container:** `max-w-7xl mx-auto px-4 sm:px-6`
5. **Cards:** `bg-surface-50 rounded-card` or `bg-white rounded-card border border-border-200`
6. **CTAs:** Use `<Button variant="primary">` — never raw `<button>`
7. **Animations:** `animate-fadeIn` (opacity 0→1), `animate-slideDown` (menu)
8. **Images:** `object-cover rounded-card` for portfolio/hero images
9. **Links:** React Router `<Link>` with `text-brand-600 hover:text-brand-700`
10. **Focus:** All interactive elements have `focus:ring-2 focus:ring-focus-500` support

### Analytics Integration

```typescript
import { trackEvent, trackFunnelClick } from './services/analytics';

trackEvent('category', 'action', 'label');  // Generic event
trackFunnelClick('cta_name', 'A');           // Funnel A = Owners/Stakeholders
trackFunnelClick('cta_name', 'B');           // Funnel B = Tenants/Brokers
```

### Key Data Patterns

All content data is in `constants.tsx`:
- `SERVICES` — Array of service objects with id, icon, title, description
- `PORTFOLIO` — Array of development projects with tags for filtering
- `CONTACT_INFO` — HQ address, phone, email

Components map over these arrays — update `constants.tsx` to change content.

## UI/UX Pro Max Skill

This project includes the UI/UX Pro Max design intelligence skill at `.claude/skills/ui-ux-pro-max/`.

When working on UI/UX tasks, use the search engine:

```bash
# Generate design system recommendation
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "real estate property development" --design-system -p "Isibonelo Property Services"

# Search specific domains
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>

# React stack guidelines (use this for this project)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack react
```

Available domains: `product`, `style`, `typography`, `color`, `landing`, `chart`, `ux`, `react`, `web`, `icons`

## Important Notes

- Tailwind CSS is loaded via CDN (`<script>` tag), NOT PostCSS — config is inline in index.html
- Uses HashRouter (`#/path`) not BrowserRouter
- No backend — all data is static in `constants.tsx`
- Several placeholders exist: `[UNKNOWN_PHONE]`, `[UNKNOWN_EMAIL]`, `WHATSAPP_NUMBER`, `BOOKING_LINK`
- Analytics is stubbed (console.log only — no GA4/GTM connected)
- Python 3 must be available for the skill search engine (zero external dependencies)
