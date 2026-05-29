"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { toggleLocale, tr } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={`inline-flex items-center gap-1.5 rounded-full border border-sand px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-sand ${className}`}
      aria-label="Toggle language"
    >
      <span aria-hidden>🌐</span>
      {tr("lang_switch")}
    </button>
  );
}
