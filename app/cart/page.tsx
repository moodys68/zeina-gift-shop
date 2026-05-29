"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { formatPrice, productName } from "@/lib/format";
import ProductImage from "@/components/ProductImage";
import QuantitySelector from "@/components/QuantitySelector";

export default function CartPage() {
  const { tr, locale } = useLanguage();
  const { items, updateQuantity, removeItem, clear, totalPrice, hydrated } =
    useCart();

  if (hydrated && items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center py-24 text-center">
        <span className="text-6xl">🛒</span>
        <h1 className="mt-4 text-2xl font-bold">{tr("cart_empty")}</h1>
        <Link href="/" className="btn-primary mt-6">
          {tr("cart_empty_cta")}
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page animate-fade-in-up py-10">
      <h1 className="section-title mb-8">{tr("cart_title")}</h1>

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        {/* Items */}
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-4 rounded-2xl bg-white p-4 shadow-card"
            >
              <Link href={`/products/${item.product.id}`} className="shrink-0">
                <ProductImage
                  product={item.product}
                  iconSize="text-3xl"
                  className="h-24 w-24 rounded-xl"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <Link
                  href={`/products/${item.product.id}`}
                  className="font-semibold text-ink transition hover:text-blush-600"
                >
                  {productName(item.product, locale)}
                </Link>
                <span className="text-sm text-ink/60">
                  {formatPrice(item.product.price, locale)}
                </span>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(q) => updateQuantity(item.product.id, q)}
                    min={1}
                  />
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-blush-600">
                      {formatPrice(item.product.price * item.quantity, locale)}
                    </span>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-sm text-ink/50 underline-offset-2 transition hover:text-blush-600 hover:underline"
                    >
                      {tr("cart_remove")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={clear}
            className="text-sm text-ink/50 underline-offset-2 transition hover:text-blush-600 hover:underline"
          >
            {tr("cart_clear")}
          </button>
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-2xl bg-white p-6 shadow-card lg:sticky lg:top-28">
          <h2 className="mb-4 text-lg font-bold">{tr("order_summary")}</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-ink/60">{tr("cart_subtotal")}</span>
              <span className="font-medium">
                {formatPrice(totalPrice, locale)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/60">{tr("shipping")}</span>
              <span className="font-medium text-emerald-600">
                {tr("shipping_free")}
              </span>
            </div>
            <div className="my-2 border-t border-sand" />
            <div className="flex justify-between text-base font-bold">
              <span>{tr("cart_total")}</span>
              <span className="text-blush-600">
                {formatPrice(totalPrice, locale)}
              </span>
            </div>
          </div>

          <Link href="/checkout" className="btn-primary mt-6 w-full">
            {tr("cart_checkout")}
          </Link>
          <Link
            href="/"
            className="mt-3 block text-center text-sm text-ink/60 transition hover:text-blush-600"
          >
            {tr("cart_continue")}
          </Link>
        </aside>
      </div>
    </div>
  );
}
