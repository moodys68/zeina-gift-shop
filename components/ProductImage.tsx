import Image from "next/image";
import { categoryMap } from "@/data/categories";
import { Product } from "@/lib/types";

const directions = [
  "bg-gradient-to-br",
  "bg-gradient-to-tr",
  "bg-gradient-to-r",
  "bg-gradient-to-bl",
];

/**
 * Renders a product image tile. When the selected `images` entry is a real
 * file path (e.g. "/products/z1.jpeg") it shows that photo; otherwise it falls
 * back to a gradient artwork featuring the category icon (used for products
 * that don't have photography yet). See README for how to add photos.
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
  const src = product.images[seedIndex];
  const isPhoto = typeof src === "string" && src.startsWith("/");

  if (isPhoto) {
    return (
      <div className={`img-frame relative overflow-hidden bg-sand ${className}`}>
        <Image
          src={src}
          alt={product.name_en}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
    );
  }

  const direction = directions[seedIndex % directions.length];

  return (
    <div
      className={`img-frame relative flex items-center justify-center overflow-hidden ${direction} ${category.gradient} ${className}`}
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
