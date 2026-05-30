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
      className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.22em] text-ink/70 transition hover:text-ink ${className}`}
      aria-label="Toggle language"
    >
      <span aria-hidden>🌐</span>
      {tr("lang_switch")}
    </button>
  );
}
