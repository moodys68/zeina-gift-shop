"use client";

import { useMemo, useState } from "react";
import { Category, Product } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import ProductCard from "@/components/ProductCard";

type SortKey = "popularity" | "price_asc" | "price_desc";
type PriceBand = "all" | "0-120" | "120-200" | "200+";

export default function CategoryView({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  const { tr, locale } = useLanguage();
  const [sort, setSort] = useState<SortKey>("popularity");
  const [price, setPrice] = useState<PriceBand>("all");

  const name = locale === "ar" ? category.name_ar : category.name_en;
  const tagline =
    locale === "ar" ? category.tagline_ar : category.tagline_en;

  const visible = useMemo(() => {
    let list = [...products];

    list = list.filter((p) => {
      if (price === "all") return true;
      if (price === "0-120") return p.price < 120;
      if (price === "120-200") return p.price >= 120 && p.price <= 200;
      return p.price > 200;
    });

    list.sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      return b.popularity - a.popularity;
    });

    return list;
  }, [products, sort, price]);

  return (
    <div className="animate-fade-in-up">
      {/* Category hero */}
      <section className="container-page py-16 text-center sm:py-20">
        <span className="text-5xl">{category.icon}</span>
        <p className="eyebrow mt-5">{tagline}</p>
        <h1 className="section-title mt-3">{name}</h1>
      </section>

      <div className="container-page py-10">
        {/* Toolbar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-ink/60">
            {visible.length} {tr("products_count")}
          </p>
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 text-sm">
              <span className="text-ink/60">{tr("filter_price")}:</span>
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value as PriceBand)}
                className="rounded-full border border-sand bg-white px-3 py-2 text-sm outline-none focus:border-blush-400"
              >
                <option value="all">{tr("price_all")}</option>
                <option value="0-120">&lt; 120</option>
                <option value="120-200">120 – 200</option>
                <option value="200+">200+</option>
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm">
              <span className="text-ink/60">{tr("sort_by")}:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-full border border-sand bg-white px-3 py-2 text-sm outline-none focus:border-blush-400"
              >
                <option value="popularity">{tr("sort_popularity")}</option>
                <option value="price_asc">{tr("sort_price_asc")}</option>
                <option value="price_desc">{tr("sort_price_desc")}</option>
              </select>
            </label>
          </div>
        </div>

        {/* Grid */}
        {visible.length === 0 ? (
          <p className="py-16 text-center text-ink/50">{tr("no_products")}</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
