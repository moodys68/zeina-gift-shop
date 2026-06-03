"use client";

import { useLanguage } from "@/context/LanguageContext";

/**
 * Eye-catching, flashing red announcement banner shown site-wide below the
 * header. The background pulses between two reds and the text flashes to draw
 * attention. Animation is disabled for users who prefer reduced motion
 * (the banner then stays a solid red).
 */
export default function AnnouncementBanner() {
  const { tr } = useLanguage();

  return (
    <div
      role="status"
      className="animate-flash-bg bg-red-600 text-white motion-reduce:animate-none"
    >
      <div className="container-page flex items-center justify-center gap-3 py-2.5 text-center">
        <span className="animate-bounce text-lg motion-reduce:animate-none" aria-hidden>
          🕋
        </span>
        <p className="animate-flash text-sm font-extrabold uppercase tracking-wide drop-shadow-sm motion-reduce:animate-none sm:text-base">
          {tr("pilgrim_banner")}
        </p>
        <span className="animate-bounce text-lg motion-reduce:animate-none" aria-hidden>
          🕋
        </span>
      </div>
    </div>
  );
}
