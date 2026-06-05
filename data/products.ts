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
    images: ["/products/newborn-welcome-girl.jpeg"],
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
  {
    id: "nb-006",
    name_ar: "صينية ضيافة الترحيب بالمولودة",
    name_en: "Welcome Baby Girl Chocolate Tray",
    price: 50,
    category: "newborn",
    images: ["/products/newborn-cataleya.jpeg"],
    description_ar:
      "صينية ضيافة وردية بشوكولا مغلّفة وبطاقات «Welcome Baby» مخصصة باسم المولودة، مع لوز ملوّن.",
    description_en:
      "A pink welcome tray of wrapped chocolates with personalized “Welcome Baby” cards and colored almonds. Starting at $50.",
    popularity: 86,
  },
  {
    id: "nb-007",
    name_ar: "علب ضيافة ورود الشموع الوردية",
    name_en: "Pink Rose Candle Favor Set",
    price: 50,
    category: "newborn",
    images: ["/products/newborn-welcome-baby-pink.jpeg"],
    description_ar:
      "طقم علب ضيافة أنيقة بشموع على شكل ورود وردية مع شريط ساتان، لاستقبال المولودة الجديدة.",
    description_en:
      "A set of elegant favor boxes with pink rose-shaped candles and satin ribbons to welcome a baby girl. Starting at $50.",
    popularity: 84,
  },
  {
    id: "nb-008",
    name_ar: "صينية ضيافة الترحيب بالأمير الصغير",
    name_en: "Welcome Little Prince Chocolate Tray",
    price: 50,
    category: "newborn",
    images: ["/products/newborn-little-prince.jpeg"],
    description_ar:
      "صينية ضيافة بتصميم «Welcome Little Prince» بالأزرق والذهبي وشوكولا مخصصة باسم المولود.",
    description_en:
      "A navy-and-gold “Welcome Little Prince” tray of personalized chocolates to celebrate a baby boy. Starting at $50.",
    popularity: 85,
  },
  {
    id: "nb-009",
    name_ar: "علب ضيافة الباليرينا الوردية",
    name_en: "Pink Ballerina Favor Boxes",
    price: 50,
    category: "newborn",
    images: ["/products/newborn-ballerina.jpeg"],
    description_ar:
      "علب أكريليك شفافة بوردة وردية وطوبر باليرينا ذهبي، تذكار لطيف لحفلات استقبال المولودة.",
    description_en:
      "Clear acrylic boxes with a pink rose and a gold ballerina topper — a sweet keepsake for baby-girl showers. Starting at $50.",
    popularity: 82,
  },

  // ──────────────────────── Anniversary ───────────────────────
  {
    id: "an-001",
    name_ar: "لوحة نقش الاسمين بالذهبي",
    name_en: "Gold Couple Names Plaque",
    price: 84,
    category: "anniversary",
    images: ["a", "b"],
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
    images: ["/products/anniversary-spotify-mug.jpeg"],
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
  {
    id: "an-006",
    name_ar: "صينية ضيافة الخطوبة بالخواتم الذهبية",
    name_en: "Gold Rings Engagement Favor Tray",
    price: 30,
    category: "anniversary",
    images: ["/products/anniversary-rings-tray.jpeg"],
    description_ar:
      "صينية ذهبية أنيقة بعلب ضيافة مزينة بخواتم ذهبية، مثالية للخطوبة وذكرى الزواج.",
    description_en:
      "An elegant gold tray of favor boxes adorned with gold rings — perfect for engagements and anniversaries.",
    popularity: 82,
    featured: true,
  },

  // ──────────────────────── Hajj & Umrah ──────────────────────
  {
    id: "hu-001",
    name_ar: "صينية ضيافة للحج و العمرة",
    name_en: "Hajj & Umrah Welcome Tray",
    price: 60,
    category: "hajj-umrah",
    images: ["/products/hajj-zamzam.jpeg", "/products/hajj-sugared-almonds.jpeg"],
    description_ar:
      "صينية ضيافة فاخرة بقوارير ماء زمزم ولوز مسكّر، لتوزيعها على المهنّئين بالحج والعمرة.",
    description_en:
      "A premium hospitality tray with Zamzam water bottles and sugared almonds to share with well-wishers for Hajj & Umrah.",
    popularity: 89,
    featured: true,
  },
  {
    id: "hu-002",
    name_ar: "صندوق هدايا العودة من الحج",
    name_en: "Hajj Return Gift Box",
    price: 88,
    category: "hajj-umrah",
    images: ["/products/hajj-favor-boxes.jpeg", "/products/hajj-silver-favors.jpeg"],
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
    images: ["/products/hajj-dates.jpeg"],
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
    images: ["/products/hajj-welcome-favors.jpeg"],
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
    images: ["/products/hajj-gold-decor.jpeg"],
    description_ar:
      "لوحة فنية بزخرفة إسلامية وآية قرآنية مذهّبة تضفي روحانية على المكان.",
    description_en:
      "An Islamic-art frame with a gilded Quranic verse that brings serenity to any space.",
    popularity: 63,
  },
  {
    id: "hu-006",
    name_ar: "صينية ضيافة الحج الذهبية",
    name_en: "Gold Hajj Welcome Tray",
    price: 40,
    category: "hajj-umrah",
    images: ["/products/hajj-gold-tray.jpeg"],
    description_ar:
      "صينية ذهبية فاخرة بحلويات ملفوفة وعبارة «حج مبرور وسعي مشكور»، مثالية لاستقبال الحجاج العائدين.",
    description_en:
      "A luxurious gold tray of wrapped sweets topped with a “Hajj Mabrour” calligraphy piece — perfect for welcoming returning pilgrims.",
    popularity: 85,
    featured: true,
  },
  {
    id: "hu-007",
    name_ar: "صينية ضيافة الحج بالشوكولا",
    name_en: "Hajj Favors Chocolate Tray",
    price: 30,
    category: "hajj-umrah",
    images: ["/products/hajj-favors-tray.jpeg"],
    description_ar:
      "صينية ذهبية بشوكولا ملفوفة وبطاقات «حج مبرور» مزخرفة، لتوزيعها على المهنئين بالعودة.",
    description_en:
      "A gold tray of wrapped chocolates with decorated “Hajj Mabrour” cards to share with well-wishers.",
    popularity: 81,
    featured: true,
  },
  {
    id: "hu-008",
    name_ar: "طبق شوكولا الكعبة للحج",
    name_en: "Kaaba Chocolate Platter",
    price: 30,
    category: "hajj-umrah",
    images: ["/products/hajj-chocolate-platter.jpeg"],
    description_ar:
      "طبق ضيافة بشوكولا مغلّفة بالذهبي وحلوى بيضاء مع ملصقات الكعبة المشرّفة، لمناسبات الحج والعمرة.",
    description_en:
      "A serving platter of gold-wrapped chocolates and white sweets with Kaaba stickers, for Hajj & Umrah occasions.",
    popularity: 79,
    featured: true,
  },

  // ───────────────────────── Graduation ───────────────────────
  {
    id: "gr-001",
    name_ar: "ميدالية وشهادة تخرج مخصصة",
    name_en: "Custom Graduation Medal & Scroll",
    price: 300,
    category: "graduation",
    images: ["/products/hajj-table-display.jpeg"],
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
    price: 200,
    category: "graduation",
    images: ["/products/hajj-tasbih-set.jpeg"],
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

  // ─────────────────────── Candle Flowers ──────────────────────
  {
    id: "cf-001",
    name_ar: "باقة شموع وردية",
    name_en: "Pink Candle Flower Bouquet",
    price: 25,
    category: "candle-flowers",
    images: ["/products/candle-flowers-pink.jpeg"],
    description_ar:
      "باقة ورود مصنوعة يدويًا من الشمع بدرجات الوردي في إناء أنيق، برائحة عطرة منعشة.",
    description_en:
      "A handmade bouquet of pink-toned wax flowers in an elegant pot, with an exotic refreshing scent.",
    popularity: 84,
  },
  {
    id: "cf-002",
    name_ar: "باقة شموع أحمر وكريمي",
    name_en: "Red & Cream Candle Flower Bouquet",
    price: 25,
    category: "candle-flowers",
    images: ["/products/candle-flowers-red-cream.jpeg"],
    description_ar:
      "باقة شموع بورود حمراء وكريمية وزهر مجفف في إناء وردي، لمسة دافئة وعطر يدوم.",
    description_en:
      "A wax-flower bouquet of red and cream roses with baby's breath in a mauve pot — warm and long-scented.",
    popularity: 82,
  },
  {
    id: "cf-003",
    name_ar: "باقة شموع عنابي وخزامى",
    name_en: "Burgundy & Lavender Candle Flower Bouquet",
    price: 25,
    category: "candle-flowers",
    images: ["/products/candle-flowers-burgundy-lavender.jpeg"],
    description_ar:
      "باقة شموع فاخرة بورود عنابية وأعشاب الخزامى المجففة في إناء أبيض مزخرف.",
    description_en:
      "A luxe wax-flower bouquet of burgundy blooms and dried lavender pampas in a textured white pot.",
    popularity: 80,
  },
  {
    id: "cf-004",
    name_ar: "باقة شموع أحمر مشكّل",
    name_en: "Mixed Red Candle Flower Bouquet",
    price: 25,
    category: "candle-flowers",
    images: ["/products/candle-flowers-red-mixed.jpeg"],
    description_ar:
      "باقة شموع غنية بورود حمراء وبيضاء وبيج مع زهر الجبسوفيليا في إناء أبيض.",
    description_en:
      "A rich wax-flower bouquet of red, white, and beige roses with gypsophila in a white pot.",
    popularity: 79,
  },
  {
    id: "cf-005",
    name_ar: "باقة شموع عنابي وأبيض",
    name_en: "Burgundy & White Candle Flower Bouquet",
    price: 25,
    category: "candle-flowers",
    images: ["/products/candle-flowers-burgundy-white.jpeg"],
    description_ar:
      "باقة شموع راقية بورود عنابية وبيضاء في إناء أبيض ناعم، هدية مثالية لكل مناسبة.",
    description_en:
      "An elegant wax-flower bouquet of burgundy and white roses in a soft white pot — a perfect gift for any occasion.",
    popularity: 78,
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
