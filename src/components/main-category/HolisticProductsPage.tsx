"use client";

import Image from "next/image";

type Locale = "en" | "ar";

const WHATSAPP_NUMBER = "966540915000";

const products = [
  { title: "Air Purifiers", titleAr: "أجهزة تنقية الهواء", href: "/products/air-purifiers", image: "/services/ser/cleaner-cleaning.jpg", desc: "Remove allergens, dust, and pollutants from your indoor air.", descAr: "إزالة مسببات الحساسية والغبار والملوثات من هواء منزلك." },
  { title: "Dehumidifiers", titleAr: "أجهزة إزالة الرطوبة", href: "/products/dehumidifiers", image: "/services/ser/deep.jpg", desc: "Control indoor humidity to prevent mold and improve comfort.", descAr: "تحكم في رطوبة المنزل للوقاية من العفن وتحسين الراحة." },
  { title: "Natural Sanitizers", titleAr: "معقمات طبيعية", href: "/products/sanitizers", image: "/services/ser/protective-medical.jpg", desc: "Eco-friendly sanitization solutions safe for your family.", descAr: "حلول تعقيم صديقة للبيئة وآمنة لعائلتك." },
  { title: "Wellness Bundles", titleAr: "باقات الصحة", href: "/products/bundles", image: "/services/ser/matrees-cleaning.jpg", desc: "Curated wellness product bundles for complete home health.", descAr: "باقات منتجات صحية منسقة لصحة منزلية شاملة." },
];

const faqs = [
  { q: "Are your wellness products certified?", qAr: "هل منتجاتكم الصحية معتمدة؟", a: "Yes, all our products meet international safety and quality certifications.", aAr: "نعم، جميع منتجاتنا تستوفي معايير السلامة والجودة الدولية." },
  { q: "Do you offer delivery across Saudi Arabia?", qAr: "هل توصلون في جميع أنحاء المملكة؟", a: "Yes, we deliver to all major cities and regions across Saudi Arabia.", aAr: "نعم، نوصل إلى جميع المدن والمناطق الرئيسية في المملكة." },
  { q: "Can I return a product if I'm not satisfied?", qAr: "هل يمكنني إرجاع المنتج إذا لم أكن راضياً؟", a: "We offer a 14-day return policy on all unused products in original packaging.", aAr: "نقدم سياسة إرجاع لمدة 14 يوماً على جميع المنتجات غير المستخدمة." },
  { q: "Do you offer product installation?", qAr: "هل تقدمون خدمة تركيب المنتجات؟", a: "Yes, professional installation is available for air purifiers and dehumidifiers.", aAr: "نعم، التركيب المهني متاح لأجهزة تنقية الهواء وإزالة الرطوبة." },
];

const handleWhatsAppRedirect = (productName: string, locale: Locale) => {
  const message = locale === "ar" 
    ? `مرحباً، أنا مهتم بمنتج: ${productName}`
    : `Hello, I'm interested in: ${productName}`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

export default function HolisticProductsPage({ locale }: { locale: Locale }) {
  const isRTL = locale === "ar";

  return (
    <div className="bg-white min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="relative h-72 lg:h-96 overflow-hidden rounded-3xl mx-4 mt-4">
        <Image src="/categories/holistic-wellness-products.webp" alt="Holistic Products" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
          <span className="text-cyan-300 text-sm font-medium mb-2 uppercase tracking-widest">
            {locale === "ar" ? "فئاتنا الرئيسية" : "Our Top Category"}
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white max-w-lg leading-tight">
            {locale === "ar" ? "منتجات الصحة الشاملة" : "Holistic Wellness Products"}
          </h1>
          <p className="text-white/80 mt-3 max-w-md text-sm leading-relaxed">
            {locale === "ar"
              ? "اكتشف منتجات الصحة المميزة كأجهزة تنقية الهواء وإزالة الرطوبة وحلول التعقيم الطبيعية."
              : "Discover premium wellness products like air purifiers, dehumidifiers, and natural sanitization solutions."}
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {locale === "ar" ? "منتجاتنا المميزة" : "Our Premium Products"}
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          {locale === "ar" ? "لأسلوب حياة أنظف وأصح" : "For a cleaner, healthier lifestyle"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <button
              key={i}
              onClick={() => handleWhatsAppRedirect(locale === "ar" ? p.titleAr : p.title, locale)}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-200 w-full text-left cursor-pointer"
            >
              <div className="relative w-full h-44">
                <Image src={p.image} alt={locale === "ar" ? p.titleAr : p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {locale === "ar" ? p.titleAr : p.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {locale === "ar" ? p.descAr : p.desc}
                </p>
                <span className="inline-block mt-3 text-cyan-600 text-xs font-semibold">
                  {locale === "ar" ? "اكتشف المزيد ←" : "Explore →"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} locale={locale} />
    </div>
  );
}

type FAQ = {
  q: string;
  qAr: string;
  a: string;
  aAr: string;
};

function FAQSection({ faqs, locale }: { faqs: FAQ[]; locale: Locale }) {
  return (
    <section className="py-10 px-4 lg:px-8 max-w-3xl mx-auto mb-12">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        {locale === "ar" ? "الأسئلة الشائعة" : "FAQs"}
      </h2>
      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => (
          <details key={i} className="bg-gray-50 rounded-2xl px-5 py-4 group cursor-pointer">
            <summary className="font-semibold text-gray-900 text-sm flex justify-between items-center list-none">
              {locale === "ar" ? f.qAr : f.q}
              <span className="text-cyan-600 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              {locale === "ar" ? f.aAr : f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}