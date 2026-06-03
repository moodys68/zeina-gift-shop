# زينة للهدايا · Zeina Gift Shop — Website Overview

A bilingual (Arabic / English) e-commerce **gift shop** website. Arabic is the
default language with full right-to-left (RTL) support; English (LTR) is one tap
away via the header language toggle. The design follows a warm, editorial
"ÆBELE" aesthetic — ivory background, brass-gold serif headings, and a deep-navy
call-to-action.

- **Live repository:** https://github.com/moodys68/zeina-gift-shop
- **Default language:** Arabic (RTL) · **Secondary:** English (LTR)
- **Currency:** USD · **Market:** Lebanon

---

## What the shop sells

Souvenirs and gifts curated across four occasions (**18 products** total):

| Category | العربية | English | Products |
|---|---|---|---|
| `newborn` | تذكارات المواليد الجدد | Newborn souvenirs | 4 |
| `anniversary` | هدايا سنوية الزواج | Wedding anniversary gifts | 4 |
| `hajj-umrah` | هدايا الحجاج والمعتمرين | Hajj & Umrah gifts | 5 |
| `graduation` | هدايا التخرج | Graduation gifts | 5 |

Six products are flagged **featured** and appear on the home page.

---

## Technology

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Cairo (Arabic UI), Playfair Display + Amiri (serif display headings) |
| State | React Context + `localStorage` (cart & language) |
| Data | Local TypeScript files (no backend/database) |
| Images | Next.js `<Image>` optimization for real photos; gradient tiles as fallback |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — editorial hero, four category cards, featured products, about teaser |
| `/categories/[id]` | Category listing with price filter + sort (popularity / price) |
| `/products/[id]` | Product detail — image gallery, description, quantity, add-to-cart, related items |
| `/cart` | Cart — edit quantities, remove items, live totals, checkout button |
| `/checkout` | Customer info form (validated) → order-confirmation screen with order number |
| `/about` | About the shop + values |
| `/contact` | Contact details + message form |
| `*` | Custom 404 page |

---

## Key features

- **Bilingual + RTL/LTR** — toggling language updates `<html lang>`/`dir` and persists to `localStorage`.
- **Cart** — React Context, persisted to `localStorage`; the header "CART (n)" count is live.
- **Checkout** — collects name, phone, city, address, notes with validation. **No real payment** — it generates an order number and shows a confirmation (cash on delivery).
- **Product photos** — real shop photography under `public/products/` (9 images), rendered via optimized `<Image>`; products without a photo fall back to an on-brand gradient tile. Every image sits in a thin dark gallery frame.
- **Free-shipping banner** — a top promo bar on every page.

---

## Design / theme (ÆBELE editorial)

| Token | Value | Role |
|---|---|---|
| `page` | `#F4EEE1` | Warm ivory page background |
| `gold` (brass) | `#A98A4B` / `#8C7039` | Serif display headings + uppercase eyebrow labels |
| `navy` | `#21385B` | Primary call-to-action buttons |
| `ink` | `#2A2622` | Warm charcoal body text |
| `cream` | `#FFFFFF` | Cards, frames, text on dark elements |
| `sand` | `#EAE2D2` | Warm beige bands / borders |

Headings use a serif display stack (Playfair Display for Latin, Amiri for
Arabic). Buttons and navigation use small uppercase, letter-spaced labels.

---

## Contact details (as shown on the site)

- **Phone / WhatsApp:** +961 79 167 821
- **Email:** hello@zeinagiftshop.com
- **Instagram:** [@zeinasgiftshop](https://instagram.com/zeinasgiftshop)
- **Location:** Beirut, Lebanon

---

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build (after `build`) |
| `npm run lint` | Run ESLint |

---

## Project structure

```
zeinagiftshop/
├── app/
│   ├── layout.tsx              # Root layout: fonts, providers, header/footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Tailwind layers + shared component classes
│   ├── not-found.tsx           # 404 page
│   ├── about/ contact/ cart/ checkout/
│   ├── categories/[id]/        # Category listing (server page + client view)
│   └── products/[id]/          # Product detail (server page + client view)
├── components/                 # Header, Footer, ProductCard, CategoryCard, ProductImage, …
├── context/                    # CartContext, LanguageContext, Providers
├── data/
│   ├── categories.ts           # The four categories
│   └── products.ts             # Product database  ← edit to add/remove products
├── lib/
│   ├── types.ts                # Shared types
│   ├── i18n.ts                 # UI translation strings (ar/en)
│   └── format.ts               # Price + localized name/description helpers
├── public/products/            # Real product photography
└── …config (tailwind, tsconfig, next.config, …)
```

---

## Editing content

- **Add a product:** append an entry to the `products` array in `data/products.ts`
  (unique `id`, bilingual name/description, `price`, `category`, `images`,
  `popularity`, optional `featured`). Restart `npm run dev` to pick up the new route.
- **Add a photo:** drop a file in `public/products/` and set the product's
  `images` entry to its path (e.g. `"/products/my-photo.jpeg"`). Mix paths and
  gradient seeds freely.
- **Edit UI text:** all strings live in `lib/i18n.ts` as `{ ar, en }` pairs,
  referenced via `tr("key")`.

---

## Notes & limitations

- No backend, database, or payment gateway — data is local and cart/language
  state lives only in the browser's `localStorage`.
- Prices are display-only, formatted in USD.
- Several product **names/descriptions are placeholders** that don't always match
  their (real) photos — the occasion is correct, but exact item names may differ.
