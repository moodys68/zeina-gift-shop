import { notFound } from "next/navigation";
import {
  getProduct,
  getProductsByCategory,
  products,
} from "@/data/products";
import ProductView from "./ProductView";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <ProductView product={product} related={related} />;
}
