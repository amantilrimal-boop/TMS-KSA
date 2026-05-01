"use client";

type Locale = "en" | "ar";

const content: Record<Locale, {
  heading: string;
  stats: { icon: string; title: string; description: string }[];
}> = {
  en: {
    heading: "Experience the Difference with The TMS Services",
    stats: [
      {
        icon: "⭐",
        title: "4.9/5 Google Rating",
        description: "Trusted by our customers! Rated 4.9/5 on Google, we're a top choice for home wellness solutions.",
      },
      {
        icon: "👷",
        title: "Certified Professionals",
        description: "Our certified experts ensure a cleaner, safer, and healthier home.",
      },
      {
        icon: "🏆",
        title: "10 years of Industry Experience",
        description: "With over a decade of experience, we deliver unmatched quality and expertise.",
      },
      {
        icon: "✨",
        title: "Unique Premium Customer Experience",
        description: "We go beyond cleaning with a customer-first approach for a seamless, hassle-free experience.",
      },
    ],
  },
  ar: {
    heading: "اختبر الفرق مع The TMS Services",
    stats: [
      {
        icon: "⭐",
        title: "تقييم 4.9/5 على Google",
        description: "موثوق من عملائنا! نحن الخيار الأول لحلول صحة المنزل بتقييم 4.9/5.",
      },
      {
        icon: "👷",
        title: "محترفون معتمدون",
        description: "خبراؤنا المعتمدون يضمنون منزلاً أنظف وأكثر أماناً وصحة.",
      },
      {
        icon: "🏆",
        title: "10 سنوات من الخبرة",
        description: "بأكثر من عقد من الخبرة، نقدم جودة وخبرة لا مثيل لها.",
      },
      {
        icon: "✨",
        title: "تجربة عملاء فريدة ومتميزة",
        description: "نتجاوز التنظيف بنهج يضع العميل أولاً لتجربة سلسة وخالية من المتاعب.",
      },
    ],
  },
};

export default function WhyUs({ locale }: { locale: Locale }) {
  const t = content[locale];
  const isRTL = locale === "ar";
  const left = t.stats.slice(0, 2);
  const right = t.stats.slice(2, 4);

  return (
    <section className="py-12 px-4 lg:px-8 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 text-center mb-8 max-w-2xl mx-auto leading-snug">
        {t.heading}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">

        {/* Left stats column */}
        <div className="flex flex-col gap-4">
          {left.map((stat, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3 flex-1">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl">
                {stat.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-base leading-snug">{stat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Center video */}
        <div className="rounded-2xl overflow-hidden relative min-h-[360px] lg:min-h-0">
          <video
            src="/rightsidevideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white font-semibold text-lg leading-tight">
              {locale === "ar" ? "لنأخذ نفساً عميقاً" : "Take a deep breath"}
            </p>
            {locale === "en" && (
              <p className="text-white/80 text-sm mt-1">لنأخذ نفساً عميقاً</p>
            )}
          </div>
        </div>

        {/* Right stats column */}
        <div className="flex flex-col gap-4">
          {right.map((stat, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3 flex-1">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl">
                {stat.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-base leading-snug">{stat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}