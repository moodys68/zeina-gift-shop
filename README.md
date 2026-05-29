# زينة للهدايا · Zeina Gift Shop

A bilingual (Arabic / English) e-commerce gift shop built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Arabic is the default language with full RTL support; English is available via the in-header language toggle (LTR).

The store sells souvenirs and gifts across four occasions:

| Category | عربي | English |
|---|---|---|
| `newborn` | تذكارات المواليد الجدد | Newborn souvenirs |
| `anniversary` | هدايا سنوية الزواج | Wedding anniversary gifts |
| `hajj-umrah` | هدايا الحجاج والمعتمرين | Hajj & Umrah gifts |
| `graduation` | هدايا التخرج | Graduation gifts |

---

## Getting started

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

### Other scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint |

---

## Features

- **Bilingual + RTL/LTR** — Arabic by default; toggle to English from the header. The chosen language is saved to `localStorage` and applied via the `lang`/`dir` attributes on `<html>`.
- **Pages** — Home, per-category listing (with price filter + sort), product detail (image gallery, quantity, add to cart, related items), cart, checkout (with confirmation), About, and Contact.
- **Cart** — Managed with React Context and persisted to `localStorage`. The header cart badge reflects the live item count.
- **Checkout** — Collects customer info (name, phone, city, address, notes) with validation. There is **no real payment** — submitting shows an order-confirmation screen with a generated order number (cash on delivery).
- **Placeholder artwork** — Until real product photos exist, each product renders an on-brand gradient tile with its category icon (see [How images work](#how-images-work)).

---

## Project structure

```
zeinagiftshop/
├── app/
│   ├── layout.tsx              # Root layout: fonts, providers, header/footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Tailwind layers + shared component classes
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   ├── categories/[id]/        # Category listing (server page + client view)
│   └── products/[id]/          # Product detail (server page + client view)
├── components/                 # Header, Footer, ProductCard, CategoryCard, etc.
├── context/
│   ├── CartContext.tsx         # Cart state + localStorage
│   ├── LanguageContext.tsx     # Locale state + RTL/LTR + localStorage
│   └── Providers.tsx           # Wraps the app with both providers
├── data/
│   ├── categories.ts           # The four categories
│   └── products.ts             # Mock product database  ← edit this to add products
├── lib/
│   ├── types.ts                # Shared TypeScript types
│   ├── i18n.ts                 # UI translation strings (ar/en)
│   └── format.ts               # Price + localized name/description helpers
└── ...config files
```

---

## How to add a new product

1. Open **`data/products.ts`**.
2. Add an entry to the `products` array. Every field is required except `featured`:

   ```ts
   {
     id: "gr-006",                       // unique id (used in the URL: /products/gr-006)
     name_ar: "اسم المنتج بالعربية",
     name_en: "Product name in English",
     price: 145,                          // number, shown in USD
     category: "graduation",              // newborn | anniversary | hajj-umrah | graduation
     images: ["a", "b", "c"],             // placeholder seeds — see "How images work"
     description_ar: "الوصف بالعربية",
     description_en: "English description",
     popularity: 70,                      // higher = ranks first under "Most Popular"
     featured: true,                      // optional — shows on the home page
   },
   ```

3. Save. The new product appears automatically on its category page, and at `/products/<id>`. (Restart `npm run dev` if it was already running so the new static route is picked up.)

### Adding a whole new category

Edit **`data/categories.ts`** and add a `Category` object, then add the matching id to the `CategoryId` union in **`lib/types.ts`**. Add UI labels to **`lib/i18n.ts`** if you introduce new on-screen text.

---

## How images work

This starter ships **without photography**. The `images` array on each product holds *placeholder seeds* (e.g. `["a", "b", "c"]`); each seed renders a distinct gradient tile via `components/ProductImage.tsx`, using the product's category gradient and icon. The number of seeds = the number of gallery thumbnails on the product page.

**To use real photos:** drop image files in `public/` and update `components/ProductImage.tsx` to render a Next.js `<Image />` (or `<img>`) from the product's `images` paths instead of the gradient. No other files need to change.

---

## Editing text / translations

All user-facing UI strings live in **`lib/i18n.ts`** as `{ ar, en }` pairs. Add a key there and reference it with the `tr("your_key")` helper from `useLanguage()`. Product and category names/descriptions live alongside their data in `data/`.

---

## Notes

- Prices are display-only and formatted in **USD** (`lib/format.ts`).
- There is no backend or database — `data/*.ts` is the mock product source, and cart/language state persists only in the browser's `localStorage`.
- Checkout does not process payments; it simply confirms the order locally.
