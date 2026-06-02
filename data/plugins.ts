import { Plugin, PluginCategory } from "@/lib/types";

export const plugins: Plugin[] = [
  // ─────────────────────── Marketing ───────────────────────
  {
    id: "whatsapp-orders",
    name_ar: "إشعارات واتساب",
    name_en: "WhatsApp Order Alerts",
    description_ar: "أرسل تأكيدات الطلبات وتحديثات التوصيل لعملائك عبر واتساب تلقائيًا.",
    description_en: "Automatically send order confirmations and delivery updates to customers via WhatsApp.",
    longDescription_ar:
      "تتيح لك هذه الإضافة الاتصال بواتساب بيزنس وإرسال رسائل آلية عند كل مرحلة من مراحل الطلب: التأكيد، التحضير، الشحن، والتسليم. يمكنك تخصيص نص الرسائل بالعربية أو الإنجليزية، وإضافة اسم عميلك واسم المنتج تلقائيًا. تُعد هذه الأداة الأمثل للمتاجر التي تعمل في منطقة الخليج والشام حيث يُهيمن واتساب على التواصل.",
    longDescription_en:
      "Connect your WhatsApp Business account to send automated messages at every order stage: confirmation, preparation, shipping, and delivery. Customize message text in Arabic or English with dynamic customer name and product name injection. Ideal for MENA-region shops where WhatsApp dominates customer communication.",
    category: "marketing",
    icon: "💬",
    price: 0,
    rating: 4.8,
    reviews: 312,
    developer_ar: "زينة للتقنية",
    developer_en: "Zeina Tech",
    featured: true,
    tags_ar: ["واتساب", "إشعارات", "تواصل"],
    tags_en: ["whatsapp", "notifications", "messaging"],
  },
  {
    id: "email-campaigns",
    name_ar: "حملات البريد الإلكتروني",
    name_en: "Email Marketing Campaigns",
    description_ar: "أنشئ وأرسل حملات بريدية مخصصة لزيادة المبيعات والولاء.",
    description_en: "Build and send targeted email campaigns to boost sales and loyalty.",
    longDescription_ar:
      "أداة متكاملة لإدارة قوائم البريد الإلكتروني وإنشاء حملات جذابة بتصاميم جاهزة. تدعم التقسيم الذكي للجمهور وفق سجل المشتريات، وتوفر تقارير مفصلة عن معدلات الفتح والنقر والتحويل. تكاملات فورية مع Mailchimp وSendinblue.",
    longDescription_en:
      "A complete tool for managing email lists and building attractive campaigns with ready-made templates. Supports smart audience segmentation based on purchase history, with detailed reports on open rates, click rates, and conversions. Instant integrations with Mailchimp and Sendinblue.",
    category: "marketing",
    icon: "📧",
    price: 15,
    rating: 4.5,
    reviews: 189,
    developer_ar: "ميل برو",
    developer_en: "MailPro",
    tags_ar: ["بريد", "حملات", "تسويق"],
    tags_en: ["email", "campaigns", "marketing"],
  },
  {
    id: "social-share",
    name_ar: "مشاركة وسائل التواصل",
    name_en: "Social Media Sharing",
    description_ar: "أضف أزرار مشاركة أنيقة لكل منتج على إنستغرام وتويتر وتيليغرام.",
    description_en: "Add elegant share buttons to every product for Instagram, X, and Telegram.",
    longDescription_ar:
      "يضيف هذه الإضافة أزرار مشاركة عصرية على صفحات المنتجات تتيح للعملاء نشر ما أعجبهم على منصات التواصل الاجتماعي. يمكن تخصيص تصميم الأزرار، اختيار المنصات المُفعَّلة، وإعداد نصوص المشاركة الافتراضية.",
    longDescription_en:
      "Adds modern share buttons on product pages allowing customers to post items they love on social media. Customize button design, choose which platforms to enable, and configure default share text.",
    category: "marketing",
    icon: "📱",
    price: 0,
    rating: 4.3,
    reviews: 97,
    developer_ar: "شير بلس",
    developer_en: "SharePlus",
    tags_ar: ["سوشيال ميديا", "مشاركة", "إنستغرام"],
    tags_en: ["social", "share", "instagram"],
  },
  {
    id: "coupon-manager",
    name_ar: "مدير الكوبونات والخصومات",
    name_en: "Coupon & Discount Manager",
    description_ar: "أنشئ وأدر كوبونات خصم بقواعد مرنة وتواريخ انتهاء صلاحية.",
    description_en: "Create and manage discount coupons with flexible rules and expiry dates.",
    longDescription_ar:
      "أنشئ كوبونات بخصم ثابت أو نسبة مئوية، حدد الحد الأدنى للطلب، وقيّد الكوبون بفئات أو منتجات بعينها. تتبع استخدام الكوبونات في لوحة تحكم مفصلة. مثالي للمبيعات الموسمية والعروض الترويجية.",
    longDescription_en:
      "Create coupons with fixed or percentage discounts, set minimum order thresholds, and restrict coupons to specific categories or products. Track coupon usage in a detailed dashboard. Perfect for seasonal sales and promotions.",
    category: "marketing",
    icon: "🏷️",
    price: 9,
    rating: 4.6,
    reviews: 241,
    developer_ar: "ديل كرافت",
    developer_en: "DealCraft",
    featured: true,
    tags_ar: ["كوبون", "خصم", "عروض"],
    tags_en: ["coupon", "discount", "promo"],
  },

  // ─────────────────────── Shipping ───────────────────────
  {
    id: "delivery-tracker",
    name_ar: "تتبع التوصيل المباشر",
    name_en: "Live Delivery Tracker",
    description_ar: "أعطِ عملاءك رابط تتبع مباشر لرؤية موقع طلبهم بدقة.",
    description_en: "Give customers a live tracking link to see their order's exact location.",
    longDescription_ar:
      "تتكامل هذه الإضافة مع أبرز شركات الشحن في المنطقة (أرامكس، DHL، Fetchr) لتوفير صفحة تتبع آنية لكل طلب. يتلقى العميل رابط تتبع خاصًا برسالة واتساب أو بريد إلكتروني فور شحن طلبه.",
    longDescription_en:
      "Integrates with leading regional carriers (Aramex, DHL, Fetchr) to provide a live tracking page for every order. The customer receives a personal tracking link via WhatsApp or email as soon as their order ships.",
    category: "shipping",
    icon: "📦",
    price: 19,
    rating: 4.7,
    reviews: 158,
    developer_ar: "تراك برو",
    developer_en: "TrackPro",
    featured: true,
    tags_ar: ["تتبع", "شحن", "توصيل"],
    tags_en: ["tracking", "shipping", "delivery"],
  },
  {
    id: "multi-zone-shipping",
    name_ar: "أسعار الشحن متعددة المناطق",
    name_en: "Multi-Zone Shipping Rates",
    description_ar: "حدد أسعار شحن مختلفة لكل مدينة أو منطقة أو دولة.",
    description_en: "Set different shipping rates per city, region, or country.",
    longDescription_ar:
      "يتيح لك تعريف مناطق جغرافية مخصصة وربط كل منطقة بسعر شحن محدد أو شروط شحن مجاني. يدعم أسعار الوزن والحجم والقيمة. مفيد للمتاجر التي توصل لعدة محافظات أو دول.",
    longDescription_en:
      "Define custom geographic zones and link each zone to a specific shipping rate or free shipping conditions. Supports weight, volume, and value-based pricing. Essential for stores delivering to multiple governorates or countries.",
    category: "shipping",
    icon: "🗺️",
    price: 12,
    rating: 4.4,
    reviews: 76,
    developer_ar: "شيب زون",
    developer_en: "ShipZone",
    tags_ar: ["مناطق", "شحن", "أسعار"],
    tags_en: ["zones", "shipping", "rates"],
  },
  {
    id: "gift-wrapping",
    name_ar: "تغليف الهدايا الفاخر",
    name_en: "Gift Wrapping Pro",
    description_ar: "دع عملاءك يختارون تغليفًا فاخرًا وبطاقة تهنئة مخصصة عند الدفع.",
    description_en: "Let customers choose premium wrapping and a personalized card at checkout.",
    longDescription_ar:
      "يضيف خيارات تغليف قابلة للتخصيص على صفحة الدفع: أنواع ورق التغليف، الألوان، الشرائط، وبطاقة تهنئة بنص مكتوب. يمكن تسعير كل خيار باستقلالية وعرض معاينة بصرية. زيادة متوسط قيمة الطلب مضمونة.",
    longDescription_en:
      "Adds customizable wrapping options at checkout: paper types, colors, ribbons, and a personalized greeting card. Price each option independently and show a visual preview. A proven upsell that increases average order value.",
    category: "shipping",
    icon: "🎁",
    price: 0,
    rating: 4.9,
    reviews: 403,
    developer_ar: "رابّ إت",
    developer_en: "WrapIt",
    featured: true,
    tags_ar: ["تغليف", "هدايا", "تخصيص"],
    tags_en: ["wrapping", "gifts", "customization"],
  },

  // ─────────────────────── Analytics ───────────────────────
  {
    id: "analytics-dashboard",
    name_ar: "لوحة تحليلات المبيعات",
    name_en: "Sales Analytics Dashboard",
    description_ar: "تقارير واضحة عن مبيعاتك، أكثر المنتجات رواجًا، وسلوك العملاء.",
    description_en: "Clear reports on your sales, top products, and customer behavior.",
    longDescription_ar:
      "لوحة تحكم تحليلية شاملة تعرض مخططات المبيعات اليومية والأسبوعية والشهرية، أكثر المنتجات مبيعًا، معدلات التحويل، ومصادر الزيارات. تصدير التقارير بصيغة Excel أو PDF بنقرة واحدة.",
    longDescription_en:
      "A comprehensive analytics dashboard showing daily, weekly, and monthly sales charts, best-selling products, conversion rates, and traffic sources. Export reports to Excel or PDF in one click.",
    category: "analytics",
    icon: "📊",
    price: 25,
    rating: 4.6,
    reviews: 134,
    developer_ar: "ستات هاب",
    developer_en: "StatHub",
    tags_ar: ["تحليلات", "مبيعات", "تقارير"],
    tags_en: ["analytics", "sales", "reports"],
  },
  {
    id: "heatmap",
    name_ar: "خريطة حرارية للزوار",
    name_en: "Visitor Heatmap",
    description_ar: "اكتشف أين ينقر زوارك وما الذي يلفت انتباههم في متجرك.",
    description_en: "Discover where visitors click and what grabs their attention in your shop.",
    longDescription_ar:
      "تُولِّد خرائط حرارية بصرية لكل صفحة في متجرك توضح أين يضغط الزوار وأين تتوقف أعينهم. استخدم هذه البيانات لتحسين تصميم صفحات المنتجات والصفحة الرئيسية ورفع معدلات التحويل.",
    longDescription_en:
      "Generates visual heatmaps for every page in your shop showing where visitors click and where their eyes stop. Use this data to optimize product page design and the homepage to increase conversion rates.",
    category: "analytics",
    icon: "🔥",
    price: 18,
    rating: 4.2,
    reviews: 89,
    developer_ar: "هيت فيجن",
    developer_en: "HeatVision",
    tags_ar: ["خريطة حرارية", "تحليل", "تصميم"],
    tags_en: ["heatmap", "analysis", "UX"],
  },

  // ─────────────────────── Payments ───────────────────────
  {
    id: "multi-currency",
    name_ar: "محول العملات المتعدد",
    name_en: "Multi-Currency Converter",
    description_ar: "اعرض الأسعار بعملة المتسوق تلقائيًا بأسعار صرف محدّثة.",
    description_en: "Automatically display prices in the shopper's currency with live exchange rates.",
    longDescription_ar:
      "يكشف الموقع الجغرافي للزائر ويعرض الأسعار فورًا بعملته المحلية (درهم، ريال، دينار، دولار...) استنادًا إلى أسعار صرف مباشرة. يمكن للعميل تغيير العملة يدويًا من القائمة.",
    longDescription_en:
      "Detects visitor location and instantly displays prices in their local currency (AED, SAR, KWD, USD…) using live exchange rates. Customers can also manually switch currencies from a dropdown.",
    category: "payments",
    icon: "💱",
    price: 14,
    rating: 4.5,
    reviews: 211,
    developer_ar: "فوريكس شوب",
    developer_en: "ForexShop",
    tags_ar: ["عملات", "دفع", "صرف"],
    tags_en: ["currency", "payment", "exchange"],
  },
  {
    id: "installments",
    name_ar: "الدفع بالتقسيط",
    name_en: "Buy Now Pay Later",
    description_ar: "قدم خيار التقسيط لعملائك عبر تمبو أو تابي أو تقسيط.",
    description_en: "Offer installment payment via Tamara, Tabby, or similar BNPL providers.",
    longDescription_ar:
      "يدمج خدمات الدفع الآجل الرائدة في المنطقة (تمارا، تابي) في صفحة الدفع بشكل سلس. أثبتت هذه الخيارات رفع معدل إتمام الشراء بنسبة تصل إلى ٣٠٪ خاصة للسلع متوسطة وعالية القيمة.",
    longDescription_en:
      "Seamlessly integrates leading regional BNPL services (Tamara, Tabby) into the checkout page. These options have been proven to increase purchase completion rates by up to 30%, especially for mid-to-high value items.",
    category: "payments",
    icon: "💳",
    price: 0,
    rating: 4.7,
    reviews: 178,
    developer_ar: "تمارا",
    developer_en: "Tamara",
    featured: true,
    tags_ar: ["تقسيط", "دفع", "BNPL"],
    tags_en: ["installments", "BNPL", "payment"],
  },

  // ─────────────────────── Customer Service ───────────────────────
  {
    id: "live-chat",
    name_ar: "دردشة مباشرة",
    name_en: "Live Chat Support",
    description_ar: "أضف نافذة دردشة حية لمساعدة عملائك فورًا أثناء التصفح.",
    description_en: "Add a live chat widget to help customers instantly while they browse.",
    longDescription_ar:
      "نافذة دردشة بسيطة وسريعة تُفعَّل من لوحة التحكم وتتصل بتطبيق الجوال الخاص بك. تعمل بدون اتصال: تحفظ الرسائل وترسلها حين تعود. تدعم الردود الجاهزة، التحويل بين الوكلاء، والردود المجدولة.",
    longDescription_en:
      "A fast, lightweight chat widget activated from your dashboard and connected to your mobile app. Offline-capable: saves messages and delivers them when you return. Supports canned responses, agent transfers, and scheduled replies.",
    category: "customer-service",
    icon: "🗨️",
    price: 0,
    rating: 4.4,
    reviews: 267,
    developer_ar: "تشات فاست",
    developer_en: "ChatFast",
    tags_ar: ["دردشة", "دعم", "عملاء"],
    tags_en: ["chat", "support", "customers"],
  },
  {
    id: "review-system",
    name_ar: "نظام التقييمات والمراجعات",
    name_en: "Customer Reviews & Ratings",
    description_ar: "امنح عملاءك القدرة على تقييم المنتجات ونشر تجاربهم.",
    description_en: "Let customers rate products and share their experiences.",
    longDescription_ar:
      "يضيف نموذج تقييم بالنجوم ومراجعة نصية على كل صفحة منتج. يعرض متوسط التقييمات ويتيح الفلترة حسب عدد النجوم. يمكنك مراجعة التقييمات والرد عليها قبل نشرها. تحسّن ملحوظ لثقة العميل ومعدلات التحويل.",
    longDescription_en:
      "Adds a star rating and text review form to every product page. Displays average ratings and allows filtering by star count. Review and respond to reviews before publishing. Measurable improvement in customer trust and conversion rates.",
    category: "customer-service",
    icon: "⭐",
    price: 8,
    rating: 4.8,
    reviews: 389,
    developer_ar: "ريفيو بلاس",
    developer_en: "ReviewPlus",
    featured: true,
    tags_ar: ["تقييمات", "مراجعات", "ثقة"],
    tags_en: ["reviews", "ratings", "trust"],
  },
  {
    id: "loyalty-rewards",
    name_ar: "برنامج الولاء والنقاط",
    name_en: "Loyalty Rewards Program",
    description_ar: "كافئ عملاءك الدائمين بنقاط قابلة للاستبدال على كل عملية شراء.",
    description_en: "Reward returning customers with redeemable points on every purchase.",
    longDescription_ar:
      "يمنح العملاء نقاطًا بكل عملية شراء ويتيح لهم استبدالها بخصومات أو هدايا. تحكم في معدل الكسب والاستبدال من لوحة التحكم. أرسل إشعارات آلية حين يقترب رصيد النقاط من المكافأة لتحفيز العودة.",
    longDescription_en:
      "Awards customers points with every purchase and lets them redeem them for discounts or gifts. Control earn and redeem rates from your dashboard. Send automated nudges when point balance is close to a reward to encourage return visits.",
    category: "customer-service",
    icon: "🎖️",
    price: 22,
    rating: 4.6,
    reviews: 142,
    developer_ar: "لويال",
    developer_en: "Loyale",
    tags_ar: ["ولاء", "نقاط", "مكافآت"],
    tags_en: ["loyalty", "points", "rewards"],
  },
  {
    id: "abandoned-cart",
    name_ar: "استرداد السلة المتروكة",
    name_en: "Abandoned Cart Recovery",
    description_ar: "أعد عملاءك الذين تركوا السلة برسائل تذكير تلقائية.",
    description_en: "Win back customers who left their cart with automated reminder messages.",
    longDescription_ar:
      "يرصد السلات التي تُترك دون إتمام الشراء ويرسل رسائل تذكير مجدولة عبر البريد الإلكتروني أو واتساب. يمكن إضافة كوبون خصم محدود المدة في الرسالة الثالثة لتحفيز الإتمام. يُعد من أعلى الأدوات عائدًا على الاستثمار.",
    longDescription_en:
      "Detects abandoned carts and sends scheduled reminder messages via email or WhatsApp. Add a time-limited discount coupon in the third message to incentivize completion. One of the highest-ROI tools in e-commerce.",
    category: "customer-service",
    icon: "🛒",
    price: 17,
    rating: 4.7,
    reviews: 203,
    developer_ar: "كارت ريكور",
    developer_en: "CartRecov",
    tags_ar: ["سلة متروكة", "استرداد", "تحويل"],
    tags_en: ["abandoned cart", "recovery", "conversion"],
  },

  // ─────────────────────── Design ───────────────────────
  {
    id: "custom-cards",
    name_ar: "بطاقات التهنئة الشخصية",
    name_en: "Personalized Greeting Cards",
    description_ar: "دع عملاءك يصمموا بطاقة تهنئة مخصصة تُرفق مع هديتهم.",
    description_en: "Let customers design a personalized greeting card attached to their gift.",
    longDescription_ar:
      "محرر بطاقات تهنئة مدمج في صفحة المنتج يتيح اختيار التصميم، اللون، الخط، وكتابة رسالة شخصية. تُطبع البطاقة وترفق بالطرد قبل الشحن. خيار رائع لرفع قيمة كل هدية وجعلها لا تُنسى.",
    longDescription_en:
      "A built-in greeting card editor on the product page allows choosing design, color, font, and writing a personal message. The card is printed and attached to the parcel before shipping. A great option for elevating every gift and making it unforgettable.",
    category: "design",
    icon: "💌",
    price: 0,
    rating: 4.9,
    reviews: 517,
    developer_ar: "كارد كرافت",
    developer_en: "CardCraft",
    featured: true,
    tags_ar: ["بطاقات", "تخصيص", "هدايا"],
    tags_en: ["cards", "personalization", "gifts"],
  },
  {
    id: "product-videos",
    name_ar: "معرض فيديو المنتجات",
    name_en: "Product Video Gallery",
    description_ar: "أضف مقاطع فيديو قصيرة إلى صفحات المنتجات لزيادة الثقة والمبيعات.",
    description_en: "Add short video clips to product pages to build trust and boost sales.",
    longDescription_ar:
      "يتيح رفع أو ربط مقاطع فيديو لكل منتج تعرض طريقة الاستخدام، التغليف، أو تجارب العملاء. مشغّل متجاوب يعمل على جميع الأجهزة بجودة عالية ودون إبطاء سرعة الصفحة.",
    longDescription_en:
      "Upload or link video clips for each product showcasing usage, packaging, or customer experiences. A fully responsive player works on all devices with high quality and no page speed impact.",
    category: "design",
    icon: "🎥",
    price: 11,
    rating: 4.3,
    reviews: 95,
    developer_ar: "فيد فلو",
    developer_en: "VidFlow",
    tags_ar: ["فيديو", "معرض", "منتجات"],
    tags_en: ["video", "gallery", "products"],
  },
];

export const pluginCategories: Array<{
  id: "all" | Plugin["category"];
  label_ar: string;
  label_en: string;
  icon: string;
}> = [
  { id: "all", label_ar: "الكل", label_en: "All", icon: "🧩" },
  { id: "marketing", label_ar: "تسويق", label_en: "Marketing", icon: "📣" },
  { id: "shipping", label_ar: "شحن وتوصيل", label_en: "Shipping", icon: "🚚" },
  { id: "analytics", label_ar: "تحليلات", label_en: "Analytics", icon: "📊" },
  { id: "payments", label_ar: "مدفوعات", label_en: "Payments", icon: "💳" },
  { id: "customer-service", label_ar: "خدمة العملاء", label_en: "Customer Service", icon: "🤝" },
  { id: "design", label_ar: "تصميم", label_en: "Design", icon: "🎨" },
];

export function getPlugin(id: string): Plugin | undefined {
  return plugins.find((p) => p.id === id);
}

export function getPluginsByCategory(category: PluginCategory): Plugin[] {
  return plugins.filter((p) => p.category === category);
}

export function getFeaturedPlugins(): Plugin[] {
  return plugins.filter((p) => p.featured);
}
