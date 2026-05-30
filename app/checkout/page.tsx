"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { formatPrice, productName } from "@/lib/format";

interface FormState {
  name: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  phone: "",
  city: "",
  address: "",
  notes: "",
};

export default function CheckoutPage() {
  const { tr, locale } = useLanguage();
  const { items, totalPrice, clear, hydrated } = useCart();

  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [orderNo, setOrderNo] = useState<string | null>(null);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = tr("field_required");
    if (!form.city.trim()) next.city = tr("field_required");
    if (!form.address.trim()) next.address = tr("field_required");

    const phone = form.phone.replace(/[\s-]/g, "");
    if (!phone) next.phone = tr("field_required");
    else if (!/^\+?\d{8,15}$/.test(phone)) next.phone = tr("phone_invalid");

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const id = "ZG-" + Math.floor(100000 + Math.random() * 900000);
    setOrderNo(id);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Order confirmation view
  if (orderNo) {
    return (
      <div className="container-page flex flex-col items-center py-20 text-center animate-fade-in-up">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
          ✓
        </span>
        <h1 className="mt-6 text-3xl font-extrabold text-ink">
          {tr("confirm_title")}
        </h1>
        <p className="mt-3 max-w-md text-ink/70">{tr("confirm_body")}</p>
        <div className="mt-6 rounded-2xl bg-white px-8 py-4 shadow-card">
          <span className="text-sm text-ink/60">{tr("confirm_order_no")}</span>
          <p className="text-xl font-bold tracking-wider text-blush-600">
            {orderNo}
          </p>
        </div>
        <Link href="/" className="btn-primary mt-8">
          {tr("confirm_back_home")}
        </Link>
      </div>
    );
  }

  // Empty cart guard
  if (hydrated && items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center py-24 text-center">
        <span className="text-6xl">🛍️</span>
        <h1 className="mt-4 text-2xl font-bold">{tr("cart_empty")}</h1>
        <Link href="/" className="btn-primary mt-6">
          {tr("cart_empty_cta")}
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page animate-fade-in-up py-10">
      <h1 className="section-title mb-8">{tr("checkout_title")}</h1>

      <form
        onSubmit={handleSubmit}
        className="grid gap-8 lg:grid-cols-[1.4fr_1fr]"
        noValidate
      >
        {/* Customer info */}
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="mb-5 text-lg font-bold">{tr("checkout_details")}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label={tr("field_name")}
              value={form.name}
              onChange={update("name")}
              error={errors.name}
              className="sm:col-span-2"
            />
            <Field
              label={tr("field_phone")}
              value={form.phone}
              onChange={update("phone")}
              error={errors.phone}
              type="tel"
              dir="ltr"
            />
            <Field
              label={tr("field_city")}
              value={form.city}
              onChange={update("city")}
              error={errors.city}
            />
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-ink/80">
                {tr("field_address")}
              </label>
              <textarea
                value={form.address}
                onChange={update("address")}
                rows={3}
                className="input-field resize-none"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-blush-600">{errors.address}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-ink/80">
                {tr("field_notes")}
              </label>
              <textarea
                value={form.notes}
                onChange={update("notes")}
                rows={2}
                className="input-field resize-none"
              />
            </div>
          </div>
        </div>

        {/* Order summary */}
        <aside className="h-fit rounded-2xl bg-white p-6 shadow-card lg:sticky lg:top-28">
          <h2 className="mb-4 text-lg font-bold">{tr("order_summary")}</h2>
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.product.id}
                className="flex justify-between gap-2 text-sm"
              >
                <span className="text-ink/70">
                  {productName(item.product, locale)}
                  <span className="text-ink/40"> × {item.quantity}</span>
                </span>
                <span className="whitespace-nowrap font-medium">
                  {formatPrice(item.product.price * item.quantity, locale)}
                </span>
              </li>
            ))}
          </ul>
          <div className="my-4 border-t border-sand" />
          <div className="flex justify-between text-sm">
            <span className="text-ink/60">{tr("shipping")}</span>
            <span className="font-medium text-emerald-600">
              {tr("shipping_free")}
            </span>
          </div>
          <div className="mt-3 flex justify-between text-base font-bold">
            <span>{tr("cart_total")}</span>
            <span className="text-blush-600">
              {formatPrice(totalPrice, locale)}
            </span>
          </div>
          <button type="submit" className="btn-primary mt-6 w-full">
            {tr("place_order")}
          </button>
        </aside>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  dir,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  dir?: "ltr" | "rtl";
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1 block text-sm font-medium text-ink/80">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        dir={dir}
        className="input-field"
      />
      {error && <p className="mt-1 text-sm text-blush-600">{error}</p>}
    </div>
  );
}
