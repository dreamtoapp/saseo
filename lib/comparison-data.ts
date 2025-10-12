// Platform comparison data for DreamToApp vs Salla vs Zid

export interface ComparisonFeature {
  category: string;
  categoryAr: string;
  features: {
    name: string;
    nameAr: string;
    dreamtoapp: boolean | string;
    salla: boolean | string;
    zid: boolean | string;
    highlight?: boolean; // Highlight DreamToApp advantages
  }[];
}

export const platformComparison: ComparisonFeature[] = [
  // 1. PRICING - Most important, show first
  {
    category: "💰 Pricing & Business Model",
    categoryAr: "💰 الأسعار ونموذج العمل",
    features: [
      {
        name: "Free Plan",
        nameAr: "باقة مجانية",
        dreamtoapp: "✅ 57+ features",
        salla: "✅ 8 features only",
        zid: "❌ No free plan",
        highlight: true,
      },
      {
        name: "Starting Price",
        nameAr: "سعر البداية",
        dreamtoapp: "Free",
        salla: "Free (limited)",
        zid: "83 SAR/month",
        highlight: true,
      },
      {
        name: "Mid Plan Price",
        nameAr: "سعر الباقة المتوسطة",
        dreamtoapp: "79 SAR",
        salla: "99 SAR (Plus)",
        zid: "83 SAR (Lite)",
        highlight: true,
      },
      {
        name: "Pro Plan Price",
        nameAr: "سعر الباقة الاحترافية",
        dreamtoapp: "199 SAR",
        salla: "299 SAR (Pro)",
        zid: "Contact Sales",
        highlight: true,
      },
      {
        name: "Sales Commission",
        nameAr: "عمولة على المبيعات",
        dreamtoapp: "2-5%",
        salla: "0%",
        zid: "0%",
      },
    ],
  },

  // 2. UNIQUE FEATURES - Show advantages immediately
  {
    category: "⭐ Unique to DreamToApp (Not in Competitors)",
    categoryAr: "⭐ مزايا حصرية في DreamToApp فقط",
    features: [
      {
        name: "DreamToApp Store (Free Traffic)",
        nameAr: "متجر DreamToApp (زيارات مجانية)",
        dreamtoapp: "✅ All plans",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Driver Management System",
        nameAr: "نظام إدارة السائقين",
        dreamtoapp: "✅ All plans",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Real-time Driver Tracking",
        nameAr: "تتبع السائقين لحظياً",
        dreamtoapp: "✅ All plans",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Store Health Monitoring",
        nameAr: "مراقبة صحة المتجر",
        dreamtoapp: "✅ All plans",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Shift Management System",
        nameAr: "نظام إدارة المناوبات",
        dreamtoapp: "✅ All plans",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "AI Product Descriptions",
        nameAr: "وصف منتجات بالذكاء الاصطناعي",
        dreamtoapp: "✅ 100 Free, ∞ Master+",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "AI Chatbot Support (24/7)",
        nameAr: "دعم بوت ذكي (24/7)",
        dreamtoapp: "✅ Premium",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Built-in Blog System",
        nameAr: "نظام مدونة مدمج",
        dreamtoapp: "✅ All plans",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Product Video Upload",
        nameAr: "إضافة فيديو للمنتج",
        dreamtoapp: "✅ All plans",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Mini Accounting System",
        nameAr: "نظام محاسبة مبسط",
        dreamtoapp: "✅ All plans",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Low Stock SMS Alerts",
        nameAr: "تنبيه SMS عند نفاذ المخزون",
        dreamtoapp: "✅ All plans",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
    ],
  },

  // 3. CORE FEATURES - Basics everyone expects
  {
    category: "🛒 Core E-commerce Features",
    categoryAr: "🛒 المزايا الأساسية للمتجر",
    features: [
      {
        name: "Unlimited Products",
        nameAr: "منتجات غير محدودة",
        dreamtoapp: "✅ All plans",
        salla: "✅ All plans",
        zid: "✅ All plans",
      },
      {
        name: "Unlimited Orders",
        nameAr: "طلبات غير محدودة",
        dreamtoapp: "✅ All plans",
        salla: "✅ All plans",
        zid: "✅ All plans",
      },
      {
        name: "Product Image Gallery",
        nameAr: "ألبوم صور للمنتجات",
        dreamtoapp: "✅ All plans",
        salla: "✅ All plans",
        zid: "✅ All plans",
      },
      {
        name: "Customer Reviews",
        nameAr: "تقييمات العملاء",
        dreamtoapp: "✅ All plans",
        salla: "✅ All plans",
        zid: "✅ All plans",
      },
      {
        name: "Custom Domain",
        nameAr: "نطاق مخصص",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 99 SAR",
        zid: "⚠️ 83 SAR",
        highlight: true,
      },
      {
        name: "Media Storage",
        nameAr: "مساحة التخزين",
        dreamtoapp: "1GB → 50GB → Unlimited",
        salla: "Not specified",
        zid: "Not specified",
        highlight: true,
      },
      {
        name: "Inventory Management",
        nameAr: "إدارة المخزون",
        dreamtoapp: "✅ All plans",
        salla: "✅ All plans",
        zid: "✅ All plans",
      },
      {
        name: "Discount & Coupons",
        nameAr: "خصومات وكوبونات",
        dreamtoapp: "✅ All plans",
        salla: "✅ All plans",
        zid: "✅ All plans",
      },
      {
        name: "Product Bundles & Packages",
        nameAr: "عروض حزم المنتجات",
        dreamtoapp: "✅ All plans",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Loyalty & Rewards Program",
        nameAr: "برنامج الولاء والمكافآت",
        dreamtoapp: "✅ Master+ (Basic/Advanced)",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Multi-Currency Display",
        nameAr: "عرض العملات المتعددة",
        dreamtoapp: "✅ Master+ (hover tooltip with live rates)",
        salla: "⚠️ Limited",
        zid: "⚠️ Limited",
        highlight: true,
      },
      {
        name: "Multi-Language Support",
        nameAr: "دعم اللغات المتعددة",
        dreamtoapp: "✅ Premium (AR/EN + more)",
        salla: "⚠️ AR/EN only",
        zid: "⚠️ AR/EN only",
        highlight: true,
      },
      {
        name: "Progressive Web App (PWA)",
        nameAr: "تطبيق ويب تقدمي",
        dreamtoapp: "✅ All plans (installable app)",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
    ],
  },

  // 4. PAYMENTS - Critical for merchants
  {
    category: "💳 Payment Methods",
    categoryAr: "💳 طرق الدفع",
    features: [
      {
        name: "Payments in YOUR Name",
        nameAr: "المدفوعات باسمك مباشرة",
        dreamtoapp: "✅ FREE",
        salla: "❌ Via Salla",
        zid: "✅ 83 SAR",
        highlight: true,
      },
      {
        name: "Payment Processing (Free Plan)",
        nameAr: "معالجة الدفع (مجاني)",
        dreamtoapp: "✅ All gateways",
        salla: "❌ 99 SAR required",
        zid: "❌ No free plan",
        highlight: true,
      },
      {
        name: "Mada, Visa, Mastercard",
        nameAr: "مدى، فيزا، ماستركارد",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 99 SAR",
        zid: "⚠️ 83 SAR",
        highlight: true,
      },
      {
        name: "Apple Pay",
        nameAr: "آبل باي",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 99 SAR",
        zid: "⚠️ 83 SAR",
        highlight: true,
      },
      {
        name: "Tabby & Tamara BNPL",
        nameAr: "تابي وتمارا (ادفع لاحقاً)",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ Via apps",
        zid: "⚠️ Via apps",
        highlight: true,
      },
      {
        name: "Cash on Delivery (COD)",
        nameAr: "الدفع عند الاستلام",
        dreamtoapp: "✅ FREE",
        salla: "✅ All plans",
        zid: "✅ All plans",
      },
    ],
  },

  // 5. SHIPPING
  {
    category: "📦 Shipping & Delivery",
    categoryAr: "📦 الشحن والتوصيل",
    features: [
      {
        name: "Unified Shipping Contract",
        nameAr: "عقد شحن موحد",
        dreamtoapp: "✅ One contract",
        salla: "❌ Separate",
        zid: "✅ One contract",
        highlight: true,
      },
      {
        name: "Shipping (Free Plan)",
        nameAr: "الشحن (باقة مجانية)",
        dreamtoapp: "✅ SMSA + Aramex + DHL",
        salla: "❌ 99 SAR required",
        zid: "❌ No free plan",
        highlight: true,
      },
      {
        name: "Local & International",
        nameAr: "شحن محلي ودولي",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 99 SAR",
        zid: "⚠️ 83 SAR",
      },
      {
        name: "SMSA Integration",
        nameAr: "تكامل SMSA",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 99 SAR",
        zid: "⚠️ 83 SAR",
      },
      {
        name: "Aramex Integration",
        nameAr: "تكامل أرامكس",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 99 SAR",
        zid: "⚠️ 83 SAR",
      },
    ],
  },

  // 6. SEO & MARKETING
  {
    category: "📣 SEO & Marketing",
    categoryAr: "📣 التسويق والـ SEO",
    features: [
      {
        name: "SEO Optimization",
        nameAr: "تحسين محركات البحث",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 99 SAR",
        zid: "⚠️ 83 SAR",
      },
      {
        name: "SEO Per Product",
        nameAr: "SEO لكل منتج",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 99 SAR",
        zid: "⚠️ Limited",
        highlight: true,
      },
      {
        name: "SEO Per Category",
        nameAr: "SEO لكل تصنيف",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 99 SAR",
        zid: "⚠️ Limited",
        highlight: true,
      },
      {
        name: "SEO Per Blog Post",
        nameAr: "SEO لكل مقال",
        dreamtoapp: "✅ FREE",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "SEO Rich Snippets (Stars)",
        nameAr: "نجوم جوجل بنتائج البحث",
        dreamtoapp: "✅ FREE",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
      {
        name: "Email Marketing",
        nameAr: "التسويق بالبريد",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 299 SAR (Pro)",
        zid: "⚠️ Growth+",
        highlight: true,
      },
      {
        name: "SMS Marketing",
        nameAr: "التسويق بالرسائل",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 299 SAR (Pro)",
        zid: "⚠️ Growth+",
        highlight: true,
      },
      {
        name: "SMS Order Notifications",
        nameAr: "إشعارات SMS للطلبات",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ Paid",
        zid: "⚠️ Paid",
        highlight: true,
      },
      {
        name: "Twitter Auto-Share",
        nameAr: "مشاركة تلقائية للتويتر",
        dreamtoapp: "✅ FREE",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
    ],
  },

  // 7. MARKETPLACE INTEGRATIONS
  {
    category: "🛍️ Marketplace Integrations",
    categoryAr: "🛍️ تكامل الأسواق الإلكترونية",
    features: [
      {
        name: "Amazon (Global)",
        nameAr: "أمازون (عالمي)",
        dreamtoapp: "✅ FREE",
        salla: "❌",
        zid: "✅ Available",
        highlight: true,
      },
      {
        name: "Trendyol (Fashion)",
        nameAr: "ترينديول (أزياء)",
        dreamtoapp: "✅ FREE",
        salla: "❌",
        zid: "✅ Available",
        highlight: true,
      },
      {
        name: "Jahez (Food)",
        nameAr: "جاهز (طعام)",
        dreamtoapp: "✅ FREE",
        salla: "❌",
        zid: "✅ Available",
        highlight: true,
      },
      {
        name: "Instagram Shopping",
        nameAr: "التسوق عبر إنستقرام",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ Via apps",
        zid: "⚠️ Via apps",
        highlight: true,
      },
    ],
  },

  // 8. ANALYTICS & REPORTS
  {
    category: "📊 Analytics & Reports",
    categoryAr: "📊 التقارير والتحليلات",
    features: [
      {
        name: "Basic Reports",
        nameAr: "تقارير أساسية",
        dreamtoapp: "✅ All plans",
        salla: "✅ All plans",
        zid: "✅ All plans",
      },
      {
        name: "Advanced Analytics",
        nameAr: "تحليلات متقدمة",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 299 SAR (Pro)",
        zid: "⚠️ Growth+",
        highlight: true,
      },
      {
        name: "Store Health Reports",
        nameAr: "تقارير صحة المتجر",
        dreamtoapp: "✅ FREE",
        salla: "❌",
        zid: "❌",
        highlight: true,
      },
    ],
  },

  // 9. TEAM & OPERATIONS
  {
    category: "👥 Team & Technical",
    categoryAr: "👥 الفريق والتقنيات",
    features: [
      {
        name: "Team Members (Free)",
        nameAr: "أعضاء الفريق (مجاني)",
        dreamtoapp: "✅ Unlimited",
        salla: "1 admin only",
        zid: "❌ No free",
        highlight: true,
      },
      {
        name: "API & Webhooks",
        nameAr: "API والخطافات",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 299 SAR (Pro)",
        zid: "⚠️ Professional",
        highlight: true,
      },
      {
        name: "Custom CSS/JS",
        nameAr: "CSS/JS مخصص",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 299 SAR (Pro)",
        zid: "⚠️ Professional",
        highlight: true,
      },
      {
        name: "ZATCA E-Invoice",
        nameAr: "فاتورة ضريبية إلكترونية",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 299 SAR (Pro)",
        zid: "⚠️ Growth+",
        highlight: true,
      },
    ],
  },

  // 10. SUPPORT
  {
    category: "🎧 Customer Support",
    categoryAr: "🎧 الدعم والمساعدة",
    features: [
      {
        name: "24/7 Support",
        nameAr: "دعم على مدار الساعة",
        dreamtoapp: "✅ All plans",
        salla: "✅ All plans",
        zid: "✅ All plans",
      },
      {
        name: "Priority Support",
        nameAr: "دعم ذو أولوية",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ 99 SAR",
        zid: "⚠️ Growth+",
        highlight: true,
      },
      {
        name: "Dedicated Manager",
        nameAr: "مدير حساب خاص",
        dreamtoapp: "✅ FREE",
        salla: "⚠️ Custom (Special)",
        zid: "⚠️ Enterprise",
        highlight: true,
      },
      {
        name: "Marketing Support",
        nameAr: "دعم تسويقي",
        dreamtoapp: "✅ Premium (199)",
        salla: "❌",
        zid: "⚠️ Enterprise",
        highlight: true,
      },
    ],
  },
];

// Summary statistics
export const platformStats = {
  dreamtoapp: {
    totalFeatures: 71,
    uniqueFeatures: 15,
    freeFeatures: 60,
    startingPrice: "Free",
    startingPriceAr: "مجاناً",
    savingsVsSalla: "100 SAR/month",
    savingsVsZid: "83 SAR/month",
  },
  salla: {
    totalFeatures: 50,
    uniqueFeatures: 0,
    freeFeatures: 8,
    startingPrice: "Free",
    startingPriceAr: "مجاناً",
    note: "No payments/shipping",
    noteAr: "بدون دفع/شحن",
  },
  zid: {
    totalFeatures: 48,
    uniqueFeatures: 0,
    freeFeatures: 0,
    startingPrice: "83 SAR",
    startingPriceAr: "٨٣ ريال",
    note: "No free plan",
    noteAr: "بدون مجاني",
  },
};
