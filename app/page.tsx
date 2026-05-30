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
      {/* Hero — editorial, centered */}
      <section className="container-page py-20 text-center sm:py-28">
        <p className="eyebrow">{tr("brandTagline")}</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-normal leading-[1.1] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {tr("hero_title")}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
          {tr("hero_subtitle")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/categories/newborn" className="btn-primary">
            {tr("hero_cta")}
          </Link>
          <a href="#categories" className="btn-secondary">
            {tr("hero_cta_secondary")}
          </a>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="container-page scroll-mt-24 py-16">
        <div className="mb-10 text-center">
          <p className="eyebrow">{tr("categories_subtitle")}</p>
          <h2 className="section-title mt-3">{tr("categories_title")}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-sand/50 py-16">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="eyebrow">{tr("featured_subtitle")}</p>
            <h2 className="section-title mt-3">{tr("featured_title")}</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-page py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">{tr("nav_about")}</p>
            <h2 className="section-title mt-3">{tr("about_title")}</h2>
            <p className="mt-6 leading-relaxed text-ink/70">{tr("about_body")}</p>
            <Link href="/about" className="btn-secondary mt-8">
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
