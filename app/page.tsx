"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const { tr } = useLanguage();
  const featured = getFeaturedProducts();

  return (
    <div className="animate-fade-in-up">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blush-600 via-ink to-gold-600">
        <span className="pointer-events-none absolute -top-16 -end-16 h-72 w-72 rounded-full bg-blush-400/30 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-20 -start-10 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
        <div className="container-page relative grid items-center gap-8 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-blush-600 shadow-sm">
              {tr("brandTagline")}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-cream sm:text-5xl">
              {tr("hero_title")}
            </h1>
            <p className="mt-4 max-w-md text-lg text-cream/85">
              {tr("hero_subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/categories/newborn" className="btn-primary">
                {tr("hero_cta")}
              </Link>
              <a href="#categories" className="btn-secondary">
                {tr("hero_cta_secondary")}
              </a>
            </div>
          </div>

          {/* Decorative gift collage */}
          <div className="relative mx-auto grid w-full max-w-sm grid-cols-2 gap-4">
            {categories.map((c, i) => (
              <div
                key={c.id}
                className={`flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br ${c.gradient} text-5xl shadow-card ${
                  i % 2 === 0 ? "translate-y-3" : "-translate-y-3"
                }`}
              >
                {c.icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="container-page py-14 scroll-mt-24">
        <div className="mb-8 text-center">
          <h2 className="section-title">{tr("categories_title")}</h2>
          <p className="mt-2 text-ink/60">{tr("categories_subtitle")}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-sand/40 py-14">
        <div className="container-page">
          <div className="mb-8 text-center">
            <h2 className="section-title">{tr("featured_title")}</h2>
            <p className="mt-2 text-ink/60">{tr("featured_subtitle")}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-page py-16">
        <div className="grid items-center gap-8 rounded-3xl bg-white p-8 shadow-card sm:p-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="section-title">{tr("about_title")}</h2>
            <p className="mt-4 leading-relaxed text-ink/70">{tr("about_body")}</p>
            <Link href="/about" className="btn-secondary mt-6">
              {tr("nav_about")}
            </Link>
          </div>
          <div className="flex justify-center gap-3 text-6xl">
            <span className="rotate-[-8deg]">🎁</span>
            <span className="translate-y-3 text-7xl">💝</span>
            <span className="rotate-[8deg]">🎀</span>
          </div>
        </div>
      </section>
    </div>
  );
}
