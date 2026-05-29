"use client";

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
}) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div className="inline-flex items-center rounded-full border border-sand bg-white shadow-sm">
      <button
        type="button"
        onClick={dec}
        aria-label="decrease quantity"
        className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-ink/70 transition hover:bg-sand disabled:opacity-40"
        disabled={value <= min}
      >
        −
      </button>
      <span className="min-w-[2.5rem] text-center font-semibold tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={inc}
        aria-label="increase quantity"
        className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-ink/70 transition hover:bg-sand disabled:opacity-40"
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}
