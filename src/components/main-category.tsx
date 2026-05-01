"use client";

import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "ar";

type Category = {
  icon: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  href: string;
};

const categories: Category[] = [
  {
    icon: "🏠",
    title: "Home Wellness Services",
    titleAr: "خدمات صحة المنزل",
    description:
      "Transform your living space with our expert deep cleaning, AC maintenance, water tank sanitization, and mold remediation services designed for a healthier home.",
    descriptionAr:
      "حوّل مساحتك المعيشية مع خدمات التنظيف العميق، صيانة المكيفات، تعقيم خزانات المياه، ومعالجة العفن لمنزل أكثر صحة.",
    image: "/categories/home-wellness-services.webp",
    href: "/home-wellness",
  },
  {
    icon: "🧘",
    title: "Personal Wellness Services",
    titleAr: "خدمات الصحة الشخصية",
    description:
      "Enhance your well-being with tailored wellness solutions, including IV therapy, air purification, and spa and beauty services—all from the comfort of your home.",
    descriptionAr:
      "عزّز صحتك مع حلول رعاية مخصصة تشمل العلاج الوريدي، تنقية الهواء، وخدمات السبا والتجميل من راحة منزلك.",
    image: "/categories/personal-wellness-service.webp",
    href: "/personal-wellness",
  },
  {
    icon: "🛍️",
    title: "Holistic Wellness Products",
    titleAr: "منتجات الصحة الشاملة",
    description:
      "Discover premium wellness products like air purifiers, dehumidifiers, and natural sanitization solutions to support a cleaner, healthier lifestyle.",
    descriptionAr:
      "اكتشف منتجات الصحة المميزة كأجهزة تنقية الهواء، إزالة الرطوبة، وحلول التعقيم الطبيعية لأسلوب حياة أنظف وأصح.",
    image: "/categories/holistic-wellness-products.webp",
    href: "/wellness-products",
  },
];

const uiContent: Record<Locale, { eyebrow: string; heading: string; subheading: string }> = {
  en: {
    eyebrow: "Our Top Category",
    heading: "Your Partner in Healthier Living",
    subheading:
      "Creating healthier homes with expert wellness services and holistic products for enhanced well-being.",
  },
  ar: {
    eyebrow: "فئاتنا الرئيسية",
    heading: "شريكك نحو حياة أكثر صحة",
    subheading:
      "نخلق منازل أكثر صحة من خلال خدمات الصحة المتخصصة والمنتجات الشاملة لتعزيز الرفاهية.",
  },
};

export default function MainCategory({ locale }: { locale: Locale }) {
  const t = uiContent[locale];
  const isRTL = locale === "ar";

  return (
    <section className="py-12 px-4 lg:px-8 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="mb-8">
        <span className="inline-block bg-cyan-50 text-cyan-700 text-sm font-medium px-4 py-1.5 rounded-full border border-cyan-100 mb-4">
          {t.eyebrow}
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-snug">
          {t.heading}
        </h2>
        <p className="text-sm text-gray-500 max-w-xl leading-relaxed">{t.subheading}</p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={`/${locale}${cat.href}`}
            className="group relative rounded-2xl overflow-hidden min-h-[480px] flex flex-col justify-start cursor-pointer"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={cat.image}
                alt={locale === "ar" ? cat.titleAr : cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay — top portion for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col gap-3">
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-cyan-800 flex items-center justify-center text-white text-xl shadow-md">
                {cat.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 leading-snug mt-1">
                {locale === "ar" ? cat.titleAr : cat.title}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
                {locale === "ar" ? cat.descriptionAr : cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}