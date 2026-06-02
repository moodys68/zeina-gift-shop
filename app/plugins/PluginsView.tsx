"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { usePlugins } from "@/context/PluginContext";
import { plugins, pluginCategories, getFeaturedPlugins } from "@/data/plugins";
import { Plugin, PluginCategory } from "@/lib/types";
import PluginCard from "@/components/PluginCard";

type CategoryFilter = "all" | PluginCategory;

export default function PluginsView() {
  const { tr, locale } = useLanguage();
  const { installed, hydrated } = usePlugins();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result: Plugin[] = plugins;
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((p) =>
        p.name_ar.includes(q) ||
        p.name_en.toLowerCase().includes(q) ||
        p.description_ar.includes(q) ||
        p.description_en.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, search]);

  const featured = getFeaturedPlugins();

  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="bg-ink py-16 text-center text-cream">
        <p className="eyebrow mb-3 text-cream/60">🧩 {tr("nav_plugins")}</p>
        <h1 className="section-title mb-4 text-cream">{tr("plugins_hero_title")}</h1>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-cream/70">
          {tr("plugins_hero_subtitle")}
        </p>

        {/* Installed count badge */}
        {hydrated && installed.length > 0 && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-300">
            <span>✓</span>
            <span>
              {installed.length} {tr("plugins_installed_count")}
            </span>
          </div>
        )}
      </section>

      <div className="container-page py-12">
        {/* Search + category filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={tr("plugins_search_placeholder")}
              className="input-field w-full ps-10"
            />
            <span className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-ink/40">
              🔍
            </span>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {pluginCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] transition ${
                  activeCategory === cat.id
                    ? "bg-ink text-cream"
                    : "bg-white text-ink/60 hover:bg-sand hover:text-ink"
                }`}
              >
                <span>{cat.icon}</span>
                {locale === "ar" ? cat.label_ar : cat.label_en}
              </button>
            ))}
          </div>
        </div>

        {/* Featured section — only on "all" tab with no search */}
        {activeCategory === "all" && !search.trim() && (
          <section className="mb-12">
            <div className="mb-6 flex items-baseline gap-3">
              <h2 className="text-lg font-semibold text-ink">{tr("plugins_featured")}</h2>
              <div className="h-px flex-1 bg-sand" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <PluginCard key={p.id} plugin={p} />
              ))}
            </div>
          </section>
        )}

        {/* All / filtered results */}
        {(activeCategory !== "all" || search.trim()) && (
          <p className="mb-4 text-sm text-ink/50">
            {filtered.length} {tr("plugins_count")}
          </p>
        )}

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-ink/50">{tr("plugins_no_results")}</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(activeCategory === "all" && !search.trim()
              ? plugins.filter((p) => !p.featured)
              : filtered
            ).map((p) => (
              <PluginCard key={p.id} plugin={p} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
