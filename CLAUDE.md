# getliftio.com — Development Guide

Landing page for the **Liftio** mobile app — a minimalist gym tracking app for iOS and Android.

## Tech Stack

| Concern | Technology |
|---------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Hosting | Vercel |
| Domain | getliftio.com |

## Key Links

- **App Store:** https://apps.apple.com/gb/app/liftio/id6759969740
- **App repo:** github.com/MattKay02/Liftio
- **Social media:** Instagram, TikTok, X (Twitter)

## Colour Palette (from Liftio app)

Dark-only theme. Never apply light mode styles.

### Backgrounds
| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#1A1A1A` | Page background |
| `bgCard` | `#2D2D2D` | Card surfaces |
| `bgElevated` | `#404040` | Inputs, elevated elements |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `textPrimary` | `#FFFFFF` | Headings, primary content |
| `textSecondary` | `#9CA3AF` | Descriptions, labels |
| `textTertiary` | `#6B7280` | Subtle text, placeholders |

### UI Elements
| Token | Hex | Usage |
|-------|-----|-------|
| `border` | `#404040` | Borders and dividers |
| `accent` | `#C0C0C0` | Primary buttons (silver) |
| `accentText` | `#1A1A1A` | Text on accent buttons |

### Semantic
| Token | Hex | Usage |
|-------|-----|-------|
| `red` | `#DC2626` | Errors, destructive actions |
| `green` | `#16A34A` | Success indicators |

## Typography

System font stack: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif`

No custom fonts loaded. Keep it clean and fast.

## Image Assets

```
public/
├── icon.png                          — App icon (favicon source)
├── images/
│   ├── logos/
│   │   ├── liftio-logo-transparent.png
│   │   ├── liftio-logo-grayscale-transparent.png
│   │   ├── liftio-logo.png
│   │   └── liftio-logo-grayscale.png
│   └── screenshots/
│       ├── ios-hero.png              — App Store hero promo
│       ├── ios-tracking.png          — Active workout screen
│       ├── ios-progress.png          — Stats + calendar + heatmap
│       ├── ios-templates.png         — Workout templates
│       ├── ios-charts.png            — Charts + personal records
│       └── ios-exercise-detail.png   — Exercise deep dive
```

## Development

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Serve production build locally
```

## Hard Rules

- Dark-only. Background is always `#1A1A1A`. Never add light mode.
- Always use Tailwind theme tokens for colours — never hardcode hex values in components.
- Optimise images with Next.js `<Image>` component.
- Mobile-first responsive design — most users arrive from social media on phones.
- All external links open in new tabs (`target="_blank" rel="noopener noreferrer"`).
