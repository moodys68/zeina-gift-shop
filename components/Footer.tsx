"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { categories } from "@/data/categories";

export default function Footer() {
  const { tr, locale } = useLanguage();

  const socials = [
    { label: "Instagram", icon: "📷", href: "https://instagram.com/zeinasgiftshop" },
    { label: "Twitter / X", icon: "🐦", href: "#" },
    { label: "WhatsApp", icon: "💬", href: "https://wa.me/96179167821" },
    { label: "Snapchat", icon: "👻", href: "#" },
  ];

  return (
    <footer className="mt-16 border-t border-sand bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush-500 text-lg">
              🎁
            </span>
            <span className="text-lg font-bold">{tr("brand")}</span>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-3 font-semibold">{tr("footer_quick_links")}</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <Link href="/" className="transition hover:text-cream">
                {tr("nav_home")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-cream">
                {tr("nav_about")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-cream">
                {tr("nav_contact")}
              </Link>
            </li>
            <li>
              <Link href="/cart" className="transition hover:text-cream">
                {tr("nav_cart")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-3 font-semibold">{tr("footer_categories")}</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/categories/${c.id}`}
                  className="transition hover:text-cream"
                >
                  {locale === "ar" ? c.name_ar : c.name_en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + social */}
        <div>
          <h4 className="mb-3 font-semibold">{tr("footer_contact")}</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <a
                href="tel:+96179167821"
                dir="ltr"
                className="inline-block transition hover:text-cream"
              >
                📞 +961 79 167 821
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/96179167821"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="inline-block transition hover:text-cream"
              >
                💬 WhatsApp: +961 79 167 821
              </a>
            </li>
            <li>✉️ hello@zeinagiftshop.com</li>
            <li>📍 {tr("contact_address_value")}</li>
            <li>
              <a
                href="https://instagram.com/zeinasgiftshop"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="inline-block transition hover:text-cream"
              >
                📷 @zeinasgiftshop
              </a>
            </li>
          </ul>
          <h4 className="mb-3 mt-5 font-semibold">{tr("footer_follow")}</h4>
          <div className="flex gap-2">
            {socials.map((s) => {
              const external = s.href !== "#";
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-lg transition hover:bg-cream/20"
                >
                  {s.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
