import { Category, CategoryId } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "newborn",
    name_ar: "تذكارات المواليد الجدد",
    name_en: "Newborn Souvenirs",
    tagline_ar: "هدايا رقيقة للترحيب بأصغر أفراد العائلة",
    tagline_en: "Tender keepsakes to welcome the newest little one",
    gradient: "from-green-600 via-emerald-700 to-yellow-700",
    icon: "🍼",
  },
  {
    id: "anniversary",
    name_ar: "هدايا سنوية الزواج",
    name_en: "Wedding Anniversary Gifts",
    tagline_ar: "لمسات راقية تحتفي بقصص الحب",
    tagline_en: "Elegant touches to celebrate love stories",
    gradient: "from-emerald-700 via-green-800 to-lime-700",
    icon: "💍",
  },
  {
    id: "hajj-umrah",
    name_ar: "هدايا الحجاج والمعتمرين",
    name_en: "Hajj & Umrah Gifts",
    tagline_ar: "تذكارات مباركة للرحلة الروحانية",
    tagline_en: "Blessed mementos for the spiritual journey",
    gradient: "from-green-800 via-emerald-800 to-green-600",
    icon: "🕋",
  },
  {
    id: "graduation",
    name_ar: "هدايا التخرج",
    name_en: "Graduation Gifts",
    tagline_ar: "احتفِ بالإنجاز من المدرسة إلى الجامعة",
    tagline_en: "Celebrate achievement, from school to university",
    gradient: "from-yellow-700 via-amber-700 to-green-800",
    icon: "🎓",
  },
];

// Candle Flowers is a product line (not an occasion), so it is kept out of the
// "Shop by Occasion" grid and main nav, but still has its own home section and
// category page.
export const candleFlowersCategory: Category = {
  id: "candle-flowers",
  name_ar: "ورود الشموع",
  name_en: "Candle Flowers",
  tagline_ar: "ورود مصنوعة من الشموع برائحة عطرة منعشة",
  tagline_en: "Flowers crafted from candles with an exotic, refreshing scent",
  gradient: "from-pink-300 via-rose-200 to-amber-100",
  icon: "🕯️",
};

// Marble Printing is also a product line (not an occasion) — kept out of the
// occasion grid/nav, with its own home section and category page.
export const marblePrintingCategory: Category = {
  id: "marble-printing",
  name_ar: "الطباعة على الرخام",
  name_en: "Marble Printing",
  tagline_ar: "اطبع صورك ورسائلك على بلاط الرخام الفاخر",
  tagline_en: "Print your photos and messages on premium marble tiles",
  gradient: "from-stone-300 via-stone-200 to-amber-100",
  icon: "🖼️",
};

// Customized printing mugs — another product line, kept out of the occasion
// grid/nav, with its own home section and category page.
export const mugsCategory: Category = {
  id: "mugs",
  name_ar: "أكواب الطباعة المخصصة",
  name_en: "Customized Printing Mugs",
  tagline_ar: "اطبع الأسماء والتصاميم التي تحبها على الأكواب",
  tagline_en: "Print the names and designs you love on mugs",
  gradient: "from-red-300 via-rose-200 to-amber-100",
  icon: "☕",
};

// All categories (occasions + product lines) — used for lookups and routing.
export const allCategories: Category[] = [
  ...categories,
  candleFlowersCategory,
  marblePrintingCategory,
  mugsCategory,
];

export const categoryMap: Record<CategoryId, Category> = allCategories.reduce(
  (acc, c) => {
    acc[c.id] = c;
    return acc;
  },
  {} as Record<CategoryId, Category>
);

export function getCategory(id: string): Category | undefined {
  return categoryMap[id as CategoryId];
}
