"use client";

import Image from "next/image";

type Locale = "en" | "ar";

const WHATSAPP_NUMBER = "966540915000"; // Replace with your actual WhatsApp number

const subCategories = [
  { label: "Spa & Beauty at Home", labelAr: "سبا وتجميل في المنزل", href: "/personal-services#spa-beauty-at-home" },
  { label: "Healthcare At Home", labelAr: "الرعاية الصحية في المنزل", href: "/personal-services#healthcare-at-home" },
  { label: "Health & Nutrition", labelAr: "الصحة والتغذية", href: "/personal-services#health-nutrition" },
  { label: "Laundry Services", labelAr: "خدمات الغسيل", href: "/personal-services#laundry-services" },
  { label: "Personal Wellness", labelAr: "العناية الشخصية", href: "/personal-services#personal-wellness" },
  { label: "Mom and Baby", labelAr: "الأم والطفل", href: "/personal-services#mom-and-baby" },
];

const faqs = [
  { q: "What are the verified partner services?", qAr: "ما هي خدمات الشركاء المعتمدين؟", a: "Verified partner services are premium services provided by trusted industry experts in partnership with The Healthy Home.", aAr: "خدمات الشركاء المعتمدين هي خدمات مميزة مقدمة من خبراء موثوقين بالشراكة مع The Healthy Home." },
  { q: "What is the booking process for verified partner services?", qAr: "ما هي عملية حجز خدمات الشركاء المعتمدين؟", a: "You can book directly through our website by selecting your preferred service and time slot.", aAr: "يمكنك الحجز مباشرة عبر موقعنا باختيار الخدمة والوقت المناسب." },
  { q: "Which areas do the verified partner services serve?", qAr: "ما المناطق التي تخدمها خدمات الشركاء؟", a: "We serve all major cities across Saudi Arabia including Riyadh, Jeddah, and Dammam.", aAr: "نخدم جميع المدن الرئيسية في المملكة العربية السعودية بما فيها الرياض وجدة والدمام." },
  { q: "Are these services performed by The Healthy Home staff?", qAr: "هل يقدم هذه الخدمات موظفو The Healthy Home؟", a: "These services are performed by our verified partner professionals who meet our quality standards.", aAr: "تُقدَّم هذه الخدمات من قِبل محترفي شركائنا المعتمدين الذين يلتزمون بمعاييرنا." },
  { q: "How do I cancel or reschedule a verified partner service?", qAr: "كيف أُلغي أو أُعيد جدولة الخدمة؟", a: "You can cancel or reschedule up to 24 hours before the appointment through your account dashboard.", aAr: "يمكنك الإلغاء أو إعادة الجدولة حتى 24 ساعة قبل الموعد من لوحة التحكم الخاصة بك." },
  { q: "What are the payment options available?", qAr: "ما هي خيارات الدفع المتاحة؟", a: "We accept credit/debit cards, bank transfers, and cash on delivery.", aAr: "نقبل بطاقات الائتمان/الخصم والتحويل البنكي والدفع عند الاستلام." },
];

const handleWhatsAppRedirect = (serviceName: string, locale: Locale) => {
  const message = locale === "ar" 
    ? `مرحباً، أنا مهتم بخدمة: ${serviceName}`
    : `Hello, I'm interested in: ${serviceName}`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

export default function PersonalWellnessPage({ locale }: { locale: Locale }) {
  const isRTL = locale === "ar";

  return (
    <div className="bg-white min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="relative h-72 lg:h-96 overflow-hidden rounded-3xl mx-4 mt-4">
        <Image src="/categories/personal-wellness-service.webp" alt="Personal Wellness" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
          <span className="text-cyan-300 text-sm font-medium mb-2 uppercase tracking-widest">
            {locale === "ar" ? "فئاتنا الرئيسية" : "Our Top Category"}
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white max-w-lg leading-tight">
            {locale === "ar" ? "خدمات الصحة الشخصية" : "Personal Wellness Services"}
          </h1>
          <p className="text-white/80 mt-3 max-w-md text-sm leading-relaxed">
            {locale === "ar"
              ? "شريكك المثالي لخدمات الرفاهية الشخصية المميزة من خبراء الصناعة مباشرة إلى باب منزلك."
              : "The Healthy Home has partnered with industry experts to provide premium services to your doorstep."}
          </p>
        </div>
      </section>

      {/* Sub-categories pills */}
      <section className="py-8 px-4 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {locale === "ar" ? "تصفح حسب الفئة" : "Browse by Category"}
        </h2>
        <div className="flex flex-wrap gap-3">
          {subCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => handleWhatsAppRedirect(locale === "ar" ? cat.labelAr : cat.label, locale)}
              className="bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-medium text-sm px-5 py-2.5 rounded-full border border-cyan-200 transition-colors cursor-pointer"
            >
              {locale === "ar" ? cat.labelAr : cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Highlight cards */}
      <section className="py-4 px-4 lg:px-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {locale === "ar" ? "ارتقِ بصحتك الشخصية" : "Elevate Your Personal Wellness"}
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          {locale === "ar"
            ? "خدماتنا المميزة لراحة بالك وصحتك"
            : "Elevate Your Personal Wellness for Better Peace of Mind with Our Premium Services"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subCategories.slice(0, 3).map((cat, i) => (
            <button
              key={i}
              onClick={() => handleWhatsAppRedirect(locale === "ar" ? cat.labelAr : cat.label, locale)}
              className="group relative rounded-2xl overflow-hidden h-56 flex items-end bg-gray-100 hover:-translate-y-1 transition-transform duration-200 shadow-md cursor-pointer w-full text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 to-transparent" />
              <div className="relative z-10 p-5">
                <h3 className="text-white font-bold text-base leading-snug">
                  {locale === "ar" ? cat.labelAr : cat.label}
                </h3>
                <span className="text-cyan-300 text-xs mt-1 block">
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