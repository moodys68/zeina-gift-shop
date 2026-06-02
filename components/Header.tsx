"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/categories";
import LanguageToggle from "@/components/LanguageToggle";

export default function Header() {
  const { tr, locale } = useLanguage();
  const { totalItems, hydrated } = useCart();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const cartCount = hydrated ? totalItems : 0;

  const navLinks = [
    { href: "/", label: tr("nav_home") },
    { href: "/plugins", label: tr("nav_plugins") },
    { href: "/about", label: tr("nav_about") },
    { href: "/contact", label: tr("nav_contact") },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (active: boolean) =>
    `text-xs font-semibold uppercase tracking-[0.22em] transition hover:text-ink ${
      active ? "text-ink" : "text-ink/70"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-sand bg-white/95 backdrop-blur">
      {/* Top promo banner */}
      <div className="bg-ink py-1.5 text-center text-[11px] uppercase tracking-[0.2em] text-cream">
        {tr("free_shipping_banner")}
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-5">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-xl font-normal tracking-[0.2em] text-ink sm:text-2xl"
        >
          {tr("brand")}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClass(isActive(link.href))}
            >
              {link.label}
            </Link>
          ))}

          {/* Categories dropdown */}
          <div className="group relative">
            <button
              className={`flex items-center gap-1 ${navLinkClass(
                pathname.startsWith("/categories")
              )}`}
            >
              {tr("nav_categories")}
              <span className="text-[10px]">▾</span>
            </button>
            <div className="invisible absolute top-full z-50 mt-2 w-64 border border-sand bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100 ltr:left-0 rtl:right-0">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/categories/${c.id}`}
                  className="flex items-center gap-3 px-3 py-2 text-xs uppercase tracking-[0.2em] text-ink/70 transition hover:bg-sand hover:text-ink"
                >
                  <span className="text-base">{c.icon}</span>
                  {locale === "ar" ? c.name_ar : c.name_en}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <LanguageToggle className="hidden sm:inline-flex" />
          <Link
            href="/cart"
            className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/80 transition hover:text-ink"
            aria-label={`${tr("nav_cart")} (${cartCount})`}
          >
            {tr("nav_cart")} ({cartCount})
          </Link>
          <button
            type="button"
            className="text-lg text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-sand bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 ${navLinkClass(isActive(link.href))}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-sand" />
            <span className="eyebrow px-3 py-1">{tr("nav_categories")}</span>
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/categories/${c.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-xs uppercase tracking-[0.2em] text-ink/70 transition hover:bg-sand hover:text-ink"
              >
                <span className="text-base">{c.icon}</span>
                {locale === "ar" ? c.name_ar : c.name_en}
              </Link>
            ))}
            <div className="my-2 border-t border-sand" />
            <LanguageToggle className="self-start" />
          </nav>
        </div>
      )}
    </header>
  );
}
