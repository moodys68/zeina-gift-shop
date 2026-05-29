"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CartIcon() {
  const { totalItems, hydrated } = useCart();
  const { tr } = useLanguage();
  const count = hydrated ? totalItems : 0;

  return (
    <Link
      href="/cart"
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-sand"
      aria-label={`${tr("nav_cart")} (${count})`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2.5 3h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.2L21 7H5.2" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-0.5 -end-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-blush-500 px-1 text-xs font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
