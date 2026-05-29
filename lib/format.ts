import { Locale, Product } from "@/lib/types";

/** Localized product name. */
export function productName(product: Product, locale: Locale): string {
  return locale === "ar" ? product.name_ar : product.name_en;
}

/** Localized product description. */
export function productDescription(product: Product, locale: Locale): string {
  return locale === "ar" ? product.description_ar : product.description_en;
}

/** Format a price with the USD currency label in the active locale. */
export function formatPrice(amount: number, locale: Locale): string {
  const number = new Intl.NumberFormat(locale === "ar" ? "ar-LB" : "en-US", {
    maximumFractionDigits: 0,
  }).format(amount);
  return locale === "ar" ? `${number} $` : `$${number}`;
}
