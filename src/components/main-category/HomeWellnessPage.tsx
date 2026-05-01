"use client";

import Image from "next/image";

type Locale = "en" | "ar";

const WHATSAPP_NUMBER = "966540915000";

const services = [
  { title: "AC Cleaning", titleAr: "تنظيف المكيف", href: "/ac-cleaning", image: "/services/ac-cleaning-service.webp" },
  { title: "Carpet Cleaning", titleAr: "تنظيف السجاد", href: "/carpet-cleaning", image: "/services/carpet-cleaning-service.webp" },
  { title: "Mattress Cleaning", titleAr: "تنظيف المراتب", href: "/mattress-cleaning", image: "/services/mattress-cleaning-service.webp", popular: true },
  { title: "Furniture Cleaning", titleAr: "تنظيف الأثاث", href: "/furniture-cleaning", image: "/services/sofa-cleaning-service.webp" },
  { title: "Home Deep Cleaning", titleAr: "تنظيف المنزل العميق", href: "/home-deep-cleaning", image: "/services/deep-cleaning-service.webp" },
  { title: "Water Tank Cleaning", titleAr: "تنظيف خزانات المياه", href: "/water-tank-cleaning", image: "/services/water-tank-cleaning-service.webp" },
];

const faqs = [
  { q: "What home wellness services do you offer?", qAr: "ما هي خدمات صحة المنزل التي تقدمونها؟", a: "We offer deep cleaning, AC maintenance, water tank sanitization, carpet and mattress cleaning, and more.", aAr: "نقدم التنظيف العميق، صيانة المكيفات، تعقيم خزانات المياه، تنظيف السجاد والمراتب والمزيد." },
  { q: "How do I book a service?", qAr: "كيف أحجز خدمة؟", a: "You can book directly through our website or call our support team.", aAr: "يمكنك الحجز مباشرة عبر موقعنا أو الاتصال بفريق الدعم." },
  { q: "Are your technicians certified?", qAr: "هل فنيوكم معتمدون؟", a: "Yes, all our technicians are trained and certified professionals.", aAr: "نعم، جميع فنيينا محترفون مدربون ومعتمدون." },
  { q: "Which areas do you serve?", qAr: "ما المناطق التي تخدمونها؟", a: "We serve all major cities across Saudi Arabia.", aAr: "نخدم جميع المدن الرئيسية في المملكة العربية السعودية." },
];

const handleWhatsAppRedirect = (serviceName: string, locale: Locale) => {
  const message = locale === "ar" 
    ? `مرحباً، أنا مهتم بخدمة: ${serviceName}`
    : `Hello, I'm interested in: ${serviceName}`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

export default function HomeWellnessPage({ locale }: { locale: Locale }) {
  const isRTL = locale === "ar";
  const bookLabel = locale === "ar" ? "احجز الآن" : "Book Now";

  return (
    <div className="bg-white min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="relative h-72 lg:h-96 overflow-hidden rounded-3xl mx-4 mt-4">
        <Image src="/categories/home-wellness-services.webp" alt="Home Wellness" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
          <span className="text-cyan-300 text-sm font-medium mb-2 uppercase tracking-widest">
            {locale === "ar" ? "فئاتنا الرئيسية" : "Our Top Category"}
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white max-w-lg leading-tight">
            {locale === "ar" ? "خدمات صحة المنزل" : "Home Wellness Services"}
          </h1>
          <p className="text-white/80 mt-3 max-w-md text-sm leading-relaxed">
            {locale === "ar"
              ? "حوّل مساحتك المعيشية مع خدمات التنظيف العميق وصيانة المكيفات وتعقيم خزانات المياه."
              : "Transform your living space with expert deep cleaning, AC maintenance, water tank sanitization, and mold remediation."}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {locale === "ar" ? "أكثر الخدمات طلباً" : "Most Popular Services"}
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          {locale === "ar" ? "اختر الخدمة المناسبة لمنزلك" : "Choose the right service for your home"}
        </p>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {services.map((s, i) => (
            <div key={i} className="relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col flex-shrink-0 w-52 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
              {s.popular && (
                <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden z-10">
                  <span className="absolute top-[18px] left-[-22px] bg-blue-700 text-white text-[10px] font-bold py-1 text-center rotate-[-45deg] w-[110px] tracking-wide shadow-md">
                    {locale === "ar" ? "الأكثر طلباً" : "Most Popular"}
                  </span>
                </div>
              )}
              <div className="relative w-full h-44">
                <Image src={s.image} alt={locale === "ar" ? s.titleAr : s.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col items-center gap-4 p-4 flex-1">
                <h3 className="text-sm font-semibold text-gray-900 text-center leading-snug min-h-[40px] flex items-center">
                  {locale === "ar" ? s.titleAr : s.title}
                </h3>
                <button
                  onClick={() => handleWhatsAppRedirect(locale === "ar" ? s.titleAr : s.title, locale)}
                  className="bg-amber-400 hover:bg-amber-500 text-white font-semibold text-sm rounded-full px-7 py-2 transition-colors w-full max-w-[160px] text-center cursor-pointer"
                >
                  {bookLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Stats */}
      <section className="py-10 px-4 lg:px-8 bg-gray-50 rounded-3xl mx-4 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          {locale === "ar" ? "لماذا تختارنا؟" : "Why Choose Us?"}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: "⭐", label: locale === "ar" ? "تقييم 4.9/5" : "4.9/5 Rating" },
            { icon: "👷", label: locale === "ar" ? "فنيون معتمدون" : "Certified Technicians" },
            { icon: "🏆", label: locale === "ar" ? "10 سنوات خبرة" : "10 Years Experience" },
            { icon: "✅", label: locale === "ar" ? "ضمان الجودة" : "Quality Guaranteed" },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 flex flex-col items-center gap-2 shadow-sm text-center">
              <span className="text-3xl">{s.icon}</span>
              <p className="text-sm font-semibold text-gray-800">{s.label}</p>
            </div>
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