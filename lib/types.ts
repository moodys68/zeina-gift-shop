export type Locale = "ar" | "en";

export type CategoryId =
  | "newborn"
  | "anniversary"
  | "hajj-umrah"
  | "graduation";

export interface Category {
  id: CategoryId;
  name_ar: string;
  name_en: string;
  tagline_ar: string;
  tagline_en: string;
  /** Tailwind gradient classes used by the placeholder artwork. */
  gradient: string;
  /** Decorative emoji/icon shown on the category artwork. */
  icon: string;
}

export interface Product {
  id: string;
  name_ar: string;
  name_en: string;
  price: number;
  category: CategoryId;
  /** Placeholder image seeds — each entry renders a distinct gradient tile. */
  images: string[];
  description_ar: string;
  description_en: string;
  /** Higher = more popular. Used for the "popularity" sort option. */
  popularity: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PluginCategory =
  | "marketing"
  | "shipping"
  | "analytics"
  | "payments"
  | "customer-service"
  | "design";

export interface Plugin {
  id: string;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  longDescription_ar: string;
  longDescription_en: string;
  category: PluginCategory;
  icon: string;
  price: number;
  rating: number;
  reviews: number;
  developer_ar: string;
  developer_en: string;
  featured?: boolean;
  tags_ar: string[];
  tags_en: string[];
}
