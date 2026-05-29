import { categoryMap } from "@/data/categories";
import { Product } from "@/lib/types";

const directions = [
  "bg-gradient-to-br",
  "bg-gradient-to-tr",
  "bg-gradient-to-r",
  "bg-gradient-to-bl",
];

/**
 * Renders a polished placeholder tile for a product. Because the shop ships
 * without real photography yet, each image "seed" produces a distinct gradient
 * artwork featuring the category icon. Replace this component's body with a
 * real <Image /> once product photos are available.
 */
export default function ProductImage({
  product,
  seedIndex = 0,
  className = "",
  iconSize = "text-6xl",
}: {
  product: Product;
  seedIndex?: number;
  className?: string;
  iconSize?: string;
}) {
  const category = categoryMap[product.category];
  const direction = directions[seedIndex % directions.length];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${direction} ${category.gradient} ${className}`}
      role="img"
      aria-label={`${product.name_en} — placeholder image`}
    >
      {/* Soft decorative circles */}
      <span className="pointer-events-none absolute -top-6 -start-6 h-24 w-24 rounded-full bg-white/30 blur-xl" />
      <span className="pointer-events-none absolute -bottom-8 -end-4 h-28 w-28 rounded-full bg-white/20 blur-xl" />
      <span className={`relative drop-shadow-sm ${iconSize}`}>
        {category.icon}
      </span>
    </div>
  );
}
