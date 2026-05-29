"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { tr, locale } = useLanguage();
  return (
    <div className="container-page flex flex-col items-center py-28 text-center">
      <span className="text-7xl">🎁</span>
      <h1 className="mt-6 text-3xl font-extrabold text-ink">404</h1>
      <p className="mt-2 text-ink/60">
        {locale === "ar"
          ? "عذرًا، الصفحة التي تبحث عنها غير موجودة."
          : "Sorry, the page you're looking for doesn't exist."}
      </p>
      <Link href="/" className="btn-primary mt-8">
        {tr("confirm_back_home")}
      </Link>
    </div>
  );
}
