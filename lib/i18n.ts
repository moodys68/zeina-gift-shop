import { Locale } from "@/lib/types";

export const locales: Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";

export const dir = (locale: Locale): "rtl" | "ltr" =>
  locale === "ar" ? "rtl" : "ltr";

type Dict = Record<string, { ar: string; en: string }>;

const dict: Dict = {
  // Brand
  brand: { ar: "زينة للهدايا", en: "Zeina Gift Shop" },
  brandTagline: {
    ar: "هدايا وتذكارات تُروى بها أجمل المناسبات",
    en: "Gifts & keepsakes for life's finest moments",
  },

  // Navigation
  nav_home: { ar: "الرئيسية", en: "Home" },
  nav_categories: { ar: "الأقسام", en: "Categories" },
  nav_about: { ar: "من نحن", en: "About" },
  nav_contact: { ar: "تواصل معنا", en: "Contact" },
  nav_cart: { ar: "السلة", en: "Cart" },

  // Language toggle
  lang_switch: { ar: "English", en: "العربية" },

  // Home
  hero_title: {
    ar: "هدايا تُعبّر عمّا لا تقوله الكلمات",
    en: "Gifts that say what words cannot",
  },
  hero_subtitle: {
    ar: "مجموعات مختارة بعناية للمواليد، الزواج، الحج والعمرة، والتخرّج.",
    en: "Thoughtfully curated collections for newborns, anniversaries, Hajj & Umrah, and graduations.",
  },
  hero_cta: { ar: "تسوّق الآن", en: "Shop Now" },
  hero_cta_secondary: { ar: "تصفّح الأقسام", en: "Browse Categories" },
  featured_title: { ar: "منتجات مميزة", en: "Featured Gifts" },
  featured_subtitle: {
    ar: "الأكثر اختيارًا من عملائنا",
    en: "Our customers' favorites",
  },
  categories_title: { ar: "تسوّق حسب المناسبة", en: "Shop by Occasion" },
  categories_subtitle: {
    ar: "لكل مناسبة هدية تليق بها",
    en: "A perfect gift for every occasion",
  },
  about_title: { ar: "عن زينة للهدايا", en: "About Zeina Gift Shop" },
  about_body: {
    ar: "في زينة، نؤمن أن الهدية لغةٌ للحب والتقدير. نختار كل قطعة بعناية لتحمل لمسة دافئة وتفاصيل راقية تجعل لحظاتكم المميزة لا تُنسى. من تذكارات المواليد إلى هدايا التخرّج، نهتم بأدق التفاصيل لنقدّم لكم تجربة هدايا استثنائية.",
    en: "At Zeina, we believe a gift is a language of love and appreciation. Every piece is chosen with care to carry a warm touch and refined detail that make your special moments unforgettable. From newborn keepsakes to graduation gifts, we obsess over the details to deliver an exceptional gifting experience.",
  },

  // Product / listing
  add_to_cart: { ar: "أضف إلى السلة", en: "Add to Cart" },
  added: { ar: "تمت الإضافة ✓", en: "Added ✓" },
  view_details: { ar: "عرض التفاصيل", en: "View Details" },
  quantity: { ar: "الكمية", en: "Quantity" },
  description: { ar: "الوصف", en: "Description" },
  sort_by: { ar: "ترتيب حسب", en: "Sort by" },
  sort_popularity: { ar: "الأكثر رواجًا", en: "Most Popular" },
  sort_price_asc: { ar: "السعر: الأقل أولًا", en: "Price: Low to High" },
  sort_price_desc: { ar: "السعر: الأعلى أولًا", en: "Price: High to Low" },
  filter_price: { ar: "نطاق السعر", en: "Price range" },
  price_all: { ar: "كل الأسعار", en: "All prices" },
  no_products: {
    ar: "لا توجد منتجات مطابقة.",
    en: "No matching products.",
  },
  products_count: { ar: "منتج", en: "products" },
  back_to_category: { ar: "العودة للقسم", en: "Back to category" },
  you_may_like: { ar: "قد يعجبك أيضًا", en: "You may also like" },

  // Cart
  cart_title: { ar: "سلة التسوّق", en: "Shopping Cart" },
  cart_empty: { ar: "سلتك فارغة حاليًا.", en: "Your cart is empty." },
  cart_empty_cta: { ar: "ابدأ التسوّق", en: "Start shopping" },
  cart_item: { ar: "المنتج", en: "Item" },
  cart_price: { ar: "السعر", en: "Price" },
  cart_subtotal: { ar: "المجموع الفرعي", en: "Subtotal" },
  cart_remove: { ar: "إزالة", en: "Remove" },
  cart_clear: { ar: "إفراغ السلة", en: "Clear cart" },
  cart_total: { ar: "الإجمالي", en: "Total" },
  cart_checkout: { ar: "إتمام الطلب", en: "Checkout" },
  cart_continue: { ar: "متابعة التسوّق", en: "Continue shopping" },
  shipping: { ar: "الشحن", en: "Shipping" },
  shipping_free: { ar: "مجاني", en: "Free" },

  // Checkout
  checkout_title: { ar: "إتمام الطلب", en: "Checkout" },
  checkout_details: { ar: "بيانات التوصيل", en: "Delivery details" },
  field_name: { ar: "الاسم الكامل", en: "Full name" },
  field_phone: { ar: "رقم الجوال", en: "Phone number" },
  field_city: { ar: "المدينة", en: "City" },
  field_address: { ar: "العنوان بالتفصيل", en: "Detailed address" },
  field_notes: { ar: "ملاحظات (اختياري)", en: "Notes (optional)" },
  field_required: { ar: "هذا الحقل مطلوب", en: "This field is required" },
  phone_invalid: { ar: "رقم جوال غير صالح", en: "Invalid phone number" },
  order_summary: { ar: "ملخّص الطلب", en: "Order summary" },
  place_order: { ar: "تأكيد الطلب", en: "Place Order" },

  // Confirmation
  confirm_title: { ar: "تم استلام طلبك بنجاح!", en: "Your order is confirmed!" },
  confirm_body: {
    ar: "شكرًا لتسوّقك من زينة للهدايا. سيتواصل معك فريقنا قريبًا لتأكيد التوصيل.",
    en: "Thank you for shopping at Zeina Gift Shop. Our team will contact you shortly to confirm delivery.",
  },
  confirm_order_no: { ar: "رقم الطلب", en: "Order number" },
  confirm_back_home: { ar: "العودة للرئيسية", en: "Back to home" },

  // Contact / About page
  contact_title: { ar: "تواصل معنا", en: "Contact Us" },
  contact_subtitle: {
    ar: "يسعدنا خدمتك والإجابة على استفساراتك",
    en: "We'd love to help and answer your questions",
  },
  contact_phone: { ar: "الهاتف", en: "Phone" },
  contact_whatsapp: { ar: "واتساب", en: "WhatsApp" },
  contact_email: { ar: "البريد الإلكتروني", en: "Email" },
  contact_address: { ar: "العنوان", en: "Address" },
  contact_hours: { ar: "ساعات العمل", en: "Working hours" },
  contact_hours_value: {
    ar: "السبت - الخميس: ٩ صباحًا - ١٠ مساءً",
    en: "Sat - Thu: 9 AM - 10 PM",
  },
  contact_address_value: {
    ar: "بيروت، لبنان",
    en: "Beirut, Lebanon",
  },
  form_message: { ar: "رسالتك", en: "Your message" },
  form_send: { ar: "إرسال", en: "Send" },
  form_sent: {
    ar: "تم إرسال رسالتك، شكرًا لتواصلك!",
    en: "Your message has been sent. Thank you!",
  },

  // Footer
  footer_quick_links: { ar: "روابط سريعة", en: "Quick links" },
  footer_categories: { ar: "الأقسام", en: "Categories" },
  footer_contact: { ar: "تواصل معنا", en: "Get in touch" },
  footer_follow: { ar: "تابعنا", en: "Follow us" },

  // Misc
  currency: { ar: "$", en: "USD" },
  free_shipping_banner: {
    ar: "🚚 شحن مجاني لجميع الطلبات داخل لبنان",
    en: "🚚 Free shipping on all orders within Lebanon",
  },
  pilgrim_banner: {
    ar: "🕋 منتجاتنا الجديدة للحجّاج العائدين من مكة المكرمة — اطلب الآن!",
    en: "🕋 Our new products for pilgrims coming back from Makkah — order now!",
  },
};

export type TranslationKey = keyof typeof dict;

export function t(key: TranslationKey, locale: Locale): string {
  const entry = dict[key];
  if (!entry) return key;
  return entry[locale];
}
