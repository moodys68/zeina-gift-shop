"use client";

import Link from "next/link";
import { Plugin } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import { usePlugins } from "@/context/PluginContext";
import { plugins, pluginCategories } from "@/data/plugins";
import PluginCard from "@/components/PluginCard";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={s <= Math.round(rating) ? "text-blush-600" : "text-sand"}
          style={{ fontSize: "16px" }}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function PluginView({ plugin }: { plugin: Plugin }) {
  const { locale, tr } = useLanguage();
  const { isInstalled, install, uninstall, hydrated } = usePlugins();

  const name = locale === "ar" ? plugin.name_ar : plugin.name_en;
  const desc = locale === "ar" ? plugin.description_ar : plugin.description_en;
  const longDesc = locale === "ar" ? plugin.longDescription_ar : plugin.longDescription_en;
  const developer = locale === "ar" ? plugin.developer_ar : plugin.developer_en;
  const tags = locale === "ar" ? plugin.tags_ar : plugin.tags_en;

  const catInfo = pluginCategories.find((c) => c.id === plugin.category);
  const catLabel = catInfo
    ? locale === "ar"
      ? catInfo.label_ar
      : catInfo.label_en
    : plugin.category;

  const installed = hydrated && isInstalled(plugin.id);

  const related = plugins
    .filter((p) => p.category === plugin.category && p.id !== plugin.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-page">
      {/* Back link */}
      <div className="bg-white border-b border-sand">
        <div className="container-page py-3">
          <Link
            href="/plugins"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60 transition hover:text-ink"
          >
            ← {tr("plugins_back")}
          </Link>
        </div>
      </div>

      <div className="container-page py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Hero card */}
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                {/* Icon */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-sand text-4xl">
                  {plugin.icon}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="mb-2 inline-block rounded-full bg-page px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                        {catInfo?.icon} {catLabel}
                      </span>
                      <h1 className="text-2xl font-bold text-ink">{name}</h1>
                    </div>
                    <div className="text-end">
                      <p className="text-2xl font-bold text-blush-600">
                        {plugin.price === 0
                          ? tr("plugins_free")
                          : `$${plugin.price}${tr("plugins_per_month")}`}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-ink/70">{desc}</p>

                  <div className="flex items-center gap-3">
                    <Stars rating={plugin.rating} />
                    <span className="text-sm text-ink/50">
                      {plugin.rating.toFixed(1)} · {plugin.reviews} {tr("plugins_reviews")}
                    </span>
                  </div>

                  <p className="text-xs text-ink/50">
                    {tr("plugins_by")} <span className="font-semibold text-ink/70">{developer}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Long description */}
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <h2 className="mb-4 text-lg font-semibold text-ink">{tr("plugins_long_desc")}</h2>
              <p className="text-sm leading-loose text-ink/70 whitespace-pre-line">{longDesc}</p>
            </div>

            {/* Tags */}
            <div className="rounded-2xl bg-white p-6 shadow-card">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">
                {tr("plugins_tags")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sand bg-page px-3 py-1 text-xs text-ink/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5">
            {/* Install card */}
            <div className="rounded-2xl bg-white p-6 shadow-card flex flex-col gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blush-600">
                  {plugin.price === 0
                    ? tr("plugins_free")
                    : `$${plugin.price}${tr("plugins_per_month")}`}
                </p>
              </div>

              <button
                type="button"
                onClick={() => (installed ? uninstall(plugin.id) : install(plugin.id))}
                className={`w-full rounded-full py-3 text-sm font-semibold uppercase tracking-[0.15em] transition ${
                  installed
                    ? "bg-emerald-500 text-white hover:bg-red-500"
                    : "btn-primary"
                }`}
              >
                {installed
                  ? tr("plugins_uninstall")
                  : tr("plugins_install")}
              </button>

              {installed && (
                <p className="text-center text-xs text-emerald-600 font-medium">
                  ✓ {tr("plugins_installed")}
                </p>
              )}
            </div>

            {/* Developer info */}
            <div className="rounded-2xl bg-white p-6 shadow-card">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">
                {tr("plugins_developer")}
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sand text-lg">
                  👤
                </div>
                <div>
                  <p className="font-semibold text-ink">{developer}</p>
                  <p className="text-xs text-ink/50">{catLabel}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related plugins */}
        {related.length > 0 && (
          <section className="mt-16">
            <div className="mb-6 flex items-baseline gap-3">
              <h2 className="text-lg font-semibold text-ink">
                {locale === "ar" ? "إضافات مشابهة" : "Similar Plugins"}
              </h2>
              <div className="h-px flex-1 bg-sand" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PluginCard key={p.id} plugin={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
