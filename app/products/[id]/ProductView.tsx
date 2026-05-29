"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { categoryMap } from "@/data/categories";
import {
  formatPrice,
  productDescription,
  productName,
} from "@/lib/format";
import ProductImage from "@/components/ProductImage";
import ProductCard from "@/components/ProductCard";
import QuantitySelector from "@/components/QuantitySelector";

export default function ProductView({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { tr, locale } = useLanguage();
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const category = categoryMap[product.category];
  const categoryName =
    locale === "ar" ? category.name_ar : category.name_en;

  const handleAdd = () => {
    addItem(product, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div className="container-page animate-fade-in-up py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-ink/60">
        <Link href="/" className="hover:text-blush-600">
          {tr("nav_home")}
        </Link>
        <span>/</span>
        <Link
          href={`/categories/${category.id}`}
          className="hover:text-blush-600"
        >
          {categoryName}
        </Link>
        <span>/</span>
        <span className="text-ink">{productName(product, locale)}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <ProductImage
            product={product}
            seedIndex={activeImage}
            iconSize="text-8xl"
            className="aspect-square w-full rounded-3xl shadow-card"
          />
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`view image ${i + 1}`}
                  className={`overflow-hidden rounded-xl ring-2 transition ${
                    activeImage === i
                      ? "ring-blush-500"
                      : "ring-transparent hover:ring-sand"
                  }`}
                >
                  <ProductImage
                    product={product}
                    seedIndex={i}
                    iconSize="text-2xl"
                    className="h-20 w-20"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <Link
            href={`/categories/${category.id}`}
            className="inline-flex w-fit items-center gap-1 rounded-full bg-sand px-3 py-1 text-sm text-ink/70 transition hover:text-blush-600"
          >
            <span>{category.icon}</span>
            {categoryName}
          </Link>

          <h1 className="mt-3 text-3xl font-extrabold text-ink">
            {productName(product, locale)}
          </h1>

          <p className="mt-3 text-3xl font-bold text-blush-600">
            {formatPrice(product.price, locale)}
          </p>

          <div className="mt-6">
            <h2 className="mb-1 font-semibold text-ink">{tr("description")}</h2>
            <p className="leading-relaxed text-ink/70">
              {productDescription(product, locale)}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div>
              <p className="mb-1 text-sm text-ink/60">{tr("quantity")}</p>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className={`mt-5 flex-1 rounded-full px-6 py-3 font-semibold text-white shadow-sm transition sm:flex-none ${
                justAdded
                  ? "bg-emerald-500"
                  : "bg-blush-500 hover:bg-blush-600"
              }`}
            >
              {justAdded ? tr("added") : tr("add_to_cart")}
            </button>
          </div>

          <div className="mt-6 rounded-2xl bg-sand/50 p-4 text-sm text-ink/70">
            {tr("free_shipping_banner")}
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="section-title mb-6">{tr("you_may_like")}</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
