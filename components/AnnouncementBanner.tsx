"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/lib/i18n";

/**
 * Eye-catching, flashing announcement banner shown site-wide below the header.
 * The background pulses between two shades and the text flashes to draw
 * attention. Animation is disabled for users who prefer reduced motion
 * (the banner then stays a solid color).
 *
 * Reusable — pass a translation key, an icon, and the flashing background
 * animation class (e.g. "bg-red-600 animate-flash-bg" or
 * "bg-navy-700 animate-flash-bg-navy").
 */
export default function AnnouncementBanner({
  textKey,
  icon = "🕋",
  bgClass = "bg-red-600 animate-flash-bg",
}: {
  textKey: TranslationKey;
  icon?: string;
  bgClass?: string;
}) {
  const { tr } = useLanguage();

  return (
    <div
      role="status"
      className={`${bgClass} text-white motion-reduce:animate-none`}
    >
      <div className="container-page flex items-center justify-center gap-4 py-5 text-center sm:py-7">
        <span
          className="animate-bounce text-3xl motion-reduce:animate-none sm:text-4xl"
          aria-hidden
        >
          {icon}
        </span>
        <p className="animate-flash text-lg font-extrabold uppercase tracking-wide drop-shadow-sm motion-reduce:animate-none sm:text-2xl lg:text-3xl">
          {tr(textKey)}
        </p>
        <span
          className="animate-bounce text-3xl motion-reduce:animate-none sm:text-4xl"
          aria-hidden
        >
          {icon}
        </span>
      </div>
    </div>
  );
}
