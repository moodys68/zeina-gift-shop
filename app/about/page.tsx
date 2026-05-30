"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { categories } from "@/data/categories";

export default function AboutPage() {
  const { tr, locale } = useLanguage();

  const values = [
    {
      icon: "✨",
      ar: { t: "جودة راقية", d: "نختار كل قطعة بعناية لتدوم وتُبهر." },
      en: { t: "Refined quality", d: "Every piece is chosen to last and impress." },
    },
    {
      icon: "🎀",
      ar: { t: "تغليف مميّز", d: "تغليف أنيق يضيف لمسة من الفرح." },
      en: { t: "Beautiful wrapping", d: "Elegant packaging that adds joy." },
    },
    {
      icon: "🚚",
      ar: { t: "توصيل سريع", d: "شحن مجاني لجميع أنحاء المملكة." },
      en: { t: "Fast delivery", d: "Free shipping across the Kingdom." },
    },
    {
      icon: "💝",
      ar: { t: "لمسة شخصية", d: "نقش وتخصيص يناسب كل مناسبة." },
      en: { t: "Personal touch", d: "Engraving and customization for any occasion." },
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <section className="container-page py-20 text-center">
        <p className="eyebrow">{tr("brand")}</p>
        <h1 className="section-title mt-3">{tr("about_title")}</h1>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">
          {tr("about_body")}
        </p>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const txt = locale === "ar" ? v.ar : v.en;
            return (
              <div
                key={txt.t}
                className="rounded-2xl bg-white p-6 text-center shadow-card"
              >
                <span className="text-4xl">{v.icon}</span>
                <h3 className="mt-3 font-bold text-ink">{txt.t}</h3>
                <p className="mt-1 text-sm text-ink/60">{txt.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-sand/40 py-14">
        <div className="container-page text-center">
          <h2 className="section-title">{tr("categories_title")}</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/categories/${c.id}`}
                className={`flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br ${c.gradient} p-8 shadow-card transition hover:-translate-y-1`}
              >
                <span className="text-5xl">{c.icon}</span>
                <span className="font-semibold text-cream">
                  {locale === "ar" ? c.name_ar : c.name_en}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
