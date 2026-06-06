"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  categories,
  candleFlowersCategory,
  marblePrintingCategory,
  mugsCategory,
} from "@/data/categories";
import { getFeaturedProducts, getProductsByCategory } from "@/data/products";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const { tr, locale } = useLanguage();
  const featured = getFeaturedProducts();
  const candleFlowers = getProductsByCategory("candle-flowers");
  const marblePrinting = getProductsByCategory("marble-printing");
  const mugs = getProductsByCategory("mugs");

  return (
    <div className="animate-fade-in-up">
      {/* Hero — editorial, centered */}
      <section className="container-page py-20 text-center sm:py-28">
        <p className="eyebrow">{tr("brandTagline")}</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-normal leading-[1.1] tracking-tight text-gold-500 sm:text-6xl lg:text-7xl">
          {tr("hero_title")}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
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
      <section className="border-y border-ink/10 bg-cream/40 py-16">
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

      {/* Candle Flowers */}
      <section className="container-page py-16">
        <div className="mb-10 text-center">
          <p className="eyebrow">
            {locale === "ar"
              ? candleFlowersCategory.tagline_ar
              : candleFlowersCategory.tagline_en}
          </p>
          <h2 className="section-title mt-3">
            {locale === "ar"
              ? candleFlowersCategory.name_ar
              : candleFlowersCategory.name_en}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {candleFlowers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/categories/candle-flowers" className="btn-secondary">
            {tr("view_details")}
          </Link>
        </div>
      </section>

      {/* Marble Printing */}
      <section className="border-y border-ink/10 bg-cream/40 py-16">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="eyebrow">
              {locale === "ar"
                ? marblePrintingCategory.tagline_ar
                : marblePrintingCategory.tagline_en}
            </p>
            <h2 className="section-title mt-3">
              {locale === "ar"
                ? marblePrintingCategory.name_ar
                : marblePrintingCategory.name_en}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {marblePrinting.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/categories/marble-printing" className="btn-secondary">
              {tr("view_details")}
            </Link>
          </div>
        </div>
      </section>

      {/* Customized Mugs */}
      <section className="container-page py-16">
        <div className="mb-10 text-center">
          <p className="eyebrow">
            {locale === "ar"
              ? mugsCategory.tagline_ar
              : mugsCategory.tagline_en}
          </p>
          <h2 className="section-title mt-3">
            {locale === "ar" ? mugsCategory.name_ar : mugsCategory.name_en}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {mugs.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/categories/mugs" className="btn-secondary">
            {tr("view_details")}
          </Link>
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
