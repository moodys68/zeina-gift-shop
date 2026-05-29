"use client";

import Link from "next/link";
import { Category } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

export default function CategoryCard({ category }: { category: Category }) {
  const { locale } = useLanguage();
  const name = locale === "ar" ? category.name_ar : category.name_en;
  const tagline = locale === "ar" ? category.tagline_ar : category.tagline_en;

  return (
    <Link
      href={`/categories/${category.id}`}
      className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-card transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div
        className={`flex aspect-[4/5] flex-col items-center justify-center bg-gradient-to-br ${category.gradient}`}
      >
        <span className="text-6xl drop-shadow-sm transition group-hover:scale-110">
          {category.icon}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10 text-cream">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-cream/85">{tagline}</p>
      </div>
    </Link>
  );
}
