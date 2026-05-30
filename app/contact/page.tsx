"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { tr } = useLanguage();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    window.setTimeout(() => setSent(false), 4000);
  };

  const info: {
    icon: string;
    label: string;
    value: string;
    dir?: "ltr";
    href?: string;
    external?: boolean;
  }[] = [
    {
      icon: "📞",
      label: tr("contact_phone"),
      value: "+961 79 167 821",
      dir: "ltr",
      href: "tel:+96179167821",
    },
    {
      icon: "💬",
      label: tr("contact_whatsapp"),
      value: "+961 79 167 821",
      dir: "ltr",
      href: "https://wa.me/96179167821",
      external: true,
    },
    {
      icon: "✉️",
      label: tr("contact_email"),
      value: "hello@zeinagiftshop.com",
      dir: "ltr",
      href: "mailto:hello@zeinagiftshop.com",
    },
    {
      icon: "📷",
      label: "Instagram",
      value: "@zeinasgiftshop",
      dir: "ltr",
      href: "https://instagram.com/zeinasgiftshop",
      external: true,
    },
    {
      icon: "📍",
      label: tr("contact_address"),
      value: tr("contact_address_value"),
    },
    {
      icon: "🕐",
      label: tr("contact_hours"),
      value: tr("contact_hours_value"),
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <section className="container-page py-16 text-center">
        <p className="eyebrow">{tr("contact_subtitle")}</p>
        <h1 className="section-title mt-3">{tr("contact_title")}</h1>
      </section>

      <div className="container-page grid gap-8 py-14 lg:grid-cols-2">
        {/* Info cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {info.map((i) => (
            <div key={i.label} className="rounded-2xl bg-white p-6 shadow-card">
              <span className="text-3xl">{i.icon}</span>
              <h3 className="mt-3 font-semibold text-ink">{i.label}</h3>
              {i.href ? (
                <a
                  href={i.href}
                  target={i.external ? "_blank" : undefined}
                  rel={i.external ? "noopener noreferrer" : undefined}
                  dir={i.dir}
                  className="mt-1 inline-block text-sm text-ink/70 underline-offset-2 transition hover:text-blush-600 hover:underline"
                >
                  {i.value}
                </a>
              ) : (
                <p className="mt-1 text-sm text-ink/60" dir={i.dir}>
                  {i.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-card"
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-ink/80">
                {tr("field_name")}
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-ink/80">
                {tr("contact_email")}
              </label>
              <input
                required
                type="email"
                dir="ltr"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-ink/80">
                {tr("form_message")}
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input-field resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              {tr("form_send")}
            </button>
            {sent && (
              <p className="rounded-xl bg-emerald-50 p-3 text-center text-sm text-emerald-700">
                {tr("form_sent")}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
