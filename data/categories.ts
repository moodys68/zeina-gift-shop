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

export const categoryMap: Record<CategoryId, Category> = categories.reduce(
  (acc, c) => {
    acc[c.id] = c;
    return acc;
  },
  {} as Record<CategoryId, Category>
);

export function getCategory(id: string): Category | undefined {
  return categoryMap[id as CategoryId];
}
