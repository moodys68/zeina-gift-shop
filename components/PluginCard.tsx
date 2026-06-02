"use client";

import Link from "next/link";
import { Plugin } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import { usePlugins } from "@/context/PluginContext";
import { pluginCategories } from "@/data/plugins";

interface Props {
  plugin: Plugin;
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={s <= Math.round(rating) ? "text-blush-600" : "text-sand"}
          style={{ fontSize: "11px" }}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function PluginCard({ plugin }: Props) {
  const { locale, tr } = useLanguage();
  const { isInstalled, install, uninstall, hydrated } = usePlugins();

  const name = locale === "ar" ? plugin.name_ar : plugin.name_en;
  const desc = locale === "ar" ? plugin.description_ar : plugin.description_en;
  const catInfo = pluginCategories.find((c) => c.id === plugin.category);
  const catLabel = catInfo
    ? locale === "ar"
      ? catInfo.label_ar
      : catInfo.label_en
    : plugin.category;

  const installed = hydrated && isInstalled(plugin.id);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (installed) {
      uninstall(plugin.id);
    } else {
      install(plugin.id);
    }
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/plugins/${plugin.id}`} className="flex flex-1 flex-col p-5 gap-4">
        {/* Top row: icon + badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sand text-2xl">
            {plugin.icon}
          </div>
          <span className="mt-1 rounded-full bg-page px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/60">
            {catLabel}
          </span>
        </div>

        {/* Name + description */}
        <div className="flex flex-col gap-1.5">
          <h3 className="font-semibold leading-snug text-ink transition group-hover:text-blush-600">
            {name}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-ink/60">{desc}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Stars rating={plugin.rating} />
          <span className="text-xs text-ink/50">
            {plugin.rating.toFixed(1)} ({plugin.reviews} {tr("plugins_reviews")})
          </span>
        </div>
      </Link>

      {/* Footer: price + action */}
      <div className="flex items-center justify-between gap-3 border-t border-sand px-5 py-3">
        <span className="text-base font-bold text-blush-600">
          {plugin.price === 0
            ? tr("plugins_free")
            : `$${plugin.price}${tr("plugins_per_month")}`}
        </span>
        <button
          type="button"
          onClick={handleToggle}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            installed
              ? "bg-emerald-500 text-white hover:bg-red-500"
              : "bg-ink text-cream hover:bg-blush-600"
          }`}
        >
          {installed ? tr("plugins_installed") : tr("plugins_install")}
        </button>
      </div>
    </div>
  );
}
