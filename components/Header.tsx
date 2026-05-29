"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { categories } from "@/data/categories";
import LanguageToggle from "@/components/LanguageToggle";
import CartIcon from "@/components/CartIcon";

export default function Header() {
  const { tr, locale } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: tr("nav_home") },
    { href: "/about", label: tr("nav_about") },
    { href: "/contact", label: tr("nav_contact") },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/70 bg-cream/90 backdrop-blur">
      {/* Promo banner */}
      <div className="bg-ink py-1.5 text-center text-xs text-cream">
        {tr("free_shipping_banner")}
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-500 text-xl text-white shadow-sm">
            🎁
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-ink">{tr("brand")}</span>
            <span className="hidden text-[11px] text-ink/60 sm:block">
              {tr("brandTagline")}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition hover:bg-sand ${
                isActive(link.href) ? "text-blush-600" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Categories dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink transition hover:bg-sand">
              {tr("nav_categories")}
              <span className="text-xs">▾</span>
            </button>
            <div className="invisible absolute top-full z-50 mt-1 w-64 rounded-xl border border-sand bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100 ltr:left-0 rtl:right-0">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/categories/${c.id}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink transition hover:bg-sand"
                >
                  <span className="text-lg">{c.icon}</span>
                  {locale === "ar" ? c.name_ar : c.name_en}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1">
          <LanguageToggle className="hidden sm:inline-flex" />
          <CartIcon />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-sand md:hidden"
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
        <div className="border-t border-sand bg-cream px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-sand ${
                  isActive(link.href) ? "text-blush-600" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-1 border-t border-sand" />
            <span className="px-3 py-1 text-xs font-semibold uppercase text-ink/50">
              {tr("nav_categories")}
            </span>
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/categories/${c.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink transition hover:bg-sand"
              >
                <span className="text-lg">{c.icon}</span>
                {locale === "ar" ? c.name_ar : c.name_en}
              </Link>
            ))}
            <div className="my-1 border-t border-sand" />
            <LanguageToggle className="self-start" />
          </nav>
        </div>
      )}
    </header>
  );
}
