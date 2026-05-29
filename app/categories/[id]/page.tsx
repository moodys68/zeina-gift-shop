import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import CategoryView from "./CategoryView";

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = getCategory(params.id);
  if (!category) notFound();

  const products = getProductsByCategory(category.id);
  return <CategoryView category={category} products={products} />;
}
