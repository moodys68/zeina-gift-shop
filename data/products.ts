import { Product } from "@/lib/types";

/**
 * Mock product database. Replace these placeholder entries with real products.
 * `images` holds placeholder seeds — each string renders a distinct gradient
 * tile via the <ProductImage /> component. Swap in real image URLs/paths when
 * available and update <ProductImage /> accordingly. See README for details.
 */
export const products: Product[] = [
  // ───────────────────────── Newborn ─────────────────────────
  {
    id: "nb-001",
    name_ar: "صندوق تذكار المولود الفاخر",
    name_en: "Luxury Newborn Keepsake Box",
    price: 74,
    category: "newborn",
    images: ["a", "b", "c"],
    description_ar:
      "صندوق خشبي أنيق محفور بالاسم لحفظ أول خصلة شعر وسوار المستشفى وأجمل ذكريات الولادة.",
    description_en:
      "An elegant engraved wooden box to treasure baby's first lock of hair, hospital bracelet, and precious birth memories.",
    popularity: 92,
    featured: true,
  },
  {
    id: "nb-002",
    name_ar: "طقم بطانية ولّابة مطرزة",
    name_en: "Embroidered Swaddle Blanket Set",
    price: 48,
    category: "newborn",
    images: ["a", "b"],
    description_ar:
      "بطانية قطنية ناعمة فائقة الجودة مع تطريز الاسم، مثالية للف المولود بدفء وأناقة.",
    description_en:
      "Ultra-soft premium cotton swaddle with name embroidery — perfect for wrapping baby in warmth and style.",
    popularity: 80,
  },
  {
    id: "nb-003",
    name_ar: "لوحة بصمة اليد والقدم",
    name_en: "Hand & Footprint Frame Kit",
    price: 38,
    category: "newborn",
    images: ["a", "b", "c"],
    description_ar:
      "طقم لطباعة بصمة يد وقدم المولود مع إطار خشبي راقٍ لتخليد اللحظات الأولى.",
    description_en:
      "A clay imprint kit with a refined wooden frame to immortalize baby's tiny hands and feet.",
    popularity: 74,
  },
  {
    id: "nb-004",
    name_ar: "سلة هدايا الترحيب بالمولود",
    name_en: "Newborn Welcome Gift Basket",
    price: 96,
    category: "newborn",
    images: ["a", "b", "c"],
    description_ar:
      "سلة متكاملة تضم لبس قطني، دمية ناعمة، وبطاقة تهنئة مخصصة لاستقبال الضيف الجديد.",
    description_en:
      "A complete basket with cotton onesies, a soft plush toy, and a personalized card to welcome the new arrival.",
    popularity: 88,
    featured: true,
  },
  {
    id: "nb-005",
    name_ar: "علبة موسيقية للأطفال",
    name_en: "Baby Musical Keepsake",
    price: 52,
    category: "newborn",
    images: ["a", "b"],
    description_ar:
      "علبة موسيقية هادئة بألحان مهدئة تساعد على نوم الطفل وتضيف لمسة دافئة لغرفته.",
    description_en:
      "A gentle musical box with soothing lullabies to help baby drift off and warm up the nursery.",
    popularity: 61,
  },

  // ──────────────────────── Anniversary ───────────────────────
  {
    id: "an-001",
    name_ar: "لوحة نقش الاسمين بالذهبي",
    name_en: "Gold Couple Names Plaque",
    price: 84,
    category: "anniversary",
    images: ["a", "b", "c"],
    description_ar:
      "لوحة فنية فاخرة بنقش ذهبي لاسمي الزوجين وتاريخ الزفاف، إطار خشبي راقٍ يزيّن المنزل.",
    description_en:
      "A luxurious art plaque with gold lettering of the couple's names and wedding date in a refined wooden frame.",
    popularity: 90,
    featured: true,
  },
  {
    id: "an-002",
    name_ar: "طقم شموع عطرية رومانسية",
    name_en: "Romantic Scented Candle Set",
    price: 56,
    category: "anniversary",
    images: ["a", "b"],
    description_ar:
      "مجموعة شموع عطرية بروائح الورد والعنبر داخل علبة هدايا فاخرة لأمسية لا تُنسى.",
    description_en:
      "A collection of rose and amber scented candles in a premium gift box for an unforgettable evening.",
    popularity: 72,
  },
  {
    id: "an-003",
    name_ar: "ساعة حائط مخصصة للزوجين",
    name_en: "Personalized Couple Wall Clock",
    price: 70,
    category: "anniversary",
    images: ["a", "b", "c"],
    description_ar:
      "ساعة حائط أنيقة تُطبع عليها صورة أو اسم الزوجين، هدية عملية تدوم لسنوات.",
    description_en:
      "An elegant wall clock printed with the couple's photo or names — a practical gift that lasts for years.",
    popularity: 65,
  },
  {
    id: "an-005",
    name_ar: "كأسان منقوشان بالكريستال",
    name_en: "Engraved Crystal Glass Pair",
    price: 64,
    category: "anniversary",
    images: ["a", "b"],
    description_ar:
      "طقم من كأسين كريستال منقوشين بتاريخ الذكرى، لتوثيق نخب الحب في كل مناسبة.",
    description_en:
      "A pair of crystal glasses engraved with your anniversary date — to toast your love on every occasion.",
    popularity: 58,
  },

  // ──────────────────────── Hajj & Umrah ──────────────────────
  {
    id: "hu-001",
    name_ar: "سجادة صلاة مطرزة بالاسم",
    name_en: "Name-Embroidered Prayer Rug",
    price: 60,
    category: "hajj-umrah",
    images: ["a", "b", "c"],
    description_ar:
      "سجادة صلاة فاخرة ناعمة الملمس مطرزة بالاسم، هدية مباركة للحاج والمعتمر.",
    description_en:
      "A premium soft-touch prayer rug embroidered with a name — a blessed gift for pilgrims.",
    popularity: 89,
    featured: true,
  },
  {
    id: "hu-002",
    name_ar: "صندوق هدايا العودة من الحج",
    name_en: "Hajj Return Gift Box",
    price: 88,
    category: "hajj-umrah",
    images: ["a", "b", "c"],
    description_ar:
      "صندوق يضم تمر فاخر، ماء زمزم، مسبحة، وعطر، لتوزيعه عند العودة من الرحلة المباركة.",
    description_en:
      "A box with premium dates, Zamzam water, prayer beads, and fragrance to share upon return from the journey.",
    popularity: 86,
    featured: true,
  },
  {
    id: "hu-003",
    name_ar: "مسبحة عقيق فاخرة بعلبة",
    name_en: "Premium Agate Prayer Beads",
    price: 44,
    category: "hajj-umrah",
    images: ["a", "b"],
    description_ar:
      "مسبحة من حجر العقيق الطبيعي بحبات مصقولة داخل علبة هدية أنيقة.",
    description_en:
      "Natural agate prayer beads with polished stones presented in an elegant gift case.",
    popularity: 70,
  },
  {
    id: "hu-004",
    name_ar: "طقم عطور المسك والعود",
    name_en: "Musk & Oud Fragrance Set",
    price: 78,
    category: "hajj-umrah",
    images: ["a", "b", "c"],
    description_ar:
      "مجموعة عطور شرقية أصيلة بروائح المسك والعود في تغليف هدية راقٍ.",
    description_en:
      "An authentic oriental fragrance collection of musk and oud in a refined gift wrap.",
    popularity: 68,
  },
  {
    id: "hu-005",
    name_ar: "لوحة آية قرآنية مزخرفة",
    name_en: "Decorative Quranic Verse Frame",
    price: 66,
    category: "hajj-umrah",
    images: ["a", "b"],
    description_ar:
      "لوحة فنية بزخرفة إسلامية وآية قرآنية مذهّبة تضفي روحانية على المكان.",
    description_en:
      "An Islamic-art frame with a gilded Quranic verse that brings serenity to any space.",
    popularity: 63,
  },

  // ───────────────────────── Graduation ───────────────────────
  {
    id: "gr-001",
    name_ar: "ميدالية وشهادة تخرج مخصصة",
    name_en: "Custom Graduation Medal & Scroll",
    price: 52,
    category: "graduation",
    images: ["a", "b", "c"],
    description_ar:
      "ميدالية معدنية فاخرة مع شهادة رمزية منقوشة بالاسم والتخصص، لتتويج الإنجاز.",
    description_en:
      "A premium metal medal with a symbolic scroll engraved with name and major to crown the achievement.",
    popularity: 87,
    featured: true,
  },
  {
    id: "gr-002",
    name_ar: "صندوق هدايا التخرج المتكامل",
    name_en: "Complete Graduation Gift Box",
    price: 100,
    category: "graduation",
    images: ["a", "b", "c"],
    description_ar:
      "صندوق يجمع قلم فاخر، مفكرة جلدية، وبطاقة تهنئة مخصصة لبداية فصل جديد.",
    description_en:
      "A box pairing a luxury pen, leather notebook, and a personalized card for a brand-new chapter.",
    popularity: 83,
    featured: true,
  },
  {
    id: "gr-003",
    name_ar: "باقة المال والحلوى للتخرج",
    name_en: "Graduation Money & Sweets Bouquet",
    price: 70,
    category: "graduation",
    images: ["a", "b"],
    description_ar:
      "باقة مبتكرة تجمع بين الحلوى الفاخرة وحاملات للنقود، هدية مرحة ليوم التخرج.",
    description_en:
      "A creative bouquet combining gourmet sweets with money holders — a fun gift for graduation day.",
    popularity: 76,
  },
  {
    id: "gr-004",
    name_ar: "قلم فاخر منقوش بالاسم",
    name_en: "Engraved Luxury Pen",
    price: 36,
    category: "graduation",
    images: ["a", "b"],
    description_ar:
      "قلم معدني أنيق منقوش بالاسم داخل علبة هدية، رفيق مثالي للخريج الجديد.",
    description_en:
      "An elegant metal pen engraved with a name in a gift case — the perfect companion for a new graduate.",
    popularity: 60,
  },
  {
    id: "gr-005",
    name_ar: "إطار صورة قبعة التخرج",
    name_en: "Graduation Cap Photo Frame",
    price: 42,
    category: "graduation",
    images: ["a", "b", "c"],
    description_ar:
      "إطار صورة مزخرف بتصميم قبعة التخرج لحفظ أجمل لحظات يوم النجاح.",
    description_en:
      "A photo frame adorned with a graduation-cap design to keep the proudest moments of the big day.",
    popularity: 57,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
