"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { formatPrice, productName } from "@/lib/format";
import ProductImage from "@/components/ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  const { locale, tr } = useLanguage();
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, 1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <Link
        href={`/products/${product.id}`}
        className="block"
        aria-label={productName(product, locale)}
      >
        <ProductImage
          product={product}
          className="aspect-square w-full transition group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="line-clamp-2 min-h-[2.8rem] font-semibold leading-snug text-ink transition group-hover:text-blush-600">
            {productName(product, locale)}
          </h3>
        </Link>

        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-blush-600">
            {formatPrice(product.price, locale)}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              justAdded
                ? "bg-emerald-500 text-white"
                : "bg-ink text-cream hover:bg-blush-600"
            }`}
          >
            {justAdded ? tr("added") : tr("add_to_cart")}
          </button>
        </div>
      </div>
    </div>
  );
}
