import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "ar";

type Feature = {
  title: string;
  titleAr: string;
  description: string;
  image: string;
  href: string;
  popular?: boolean;
};

const features: Feature[] = [
  {
    href: "/ac-cleaning",
    title: "AC Cleaning",
    titleAr: "تنظيف المكيف",
    description: "",
    image: "/services/ser/cleaner-cleaning.jpg",
  },
  {
    href: "/carpet-cleaning",
    title: "Carpet Cleaning",
    titleAr: "تنظيف السجاد",
    description: "",
    image: "/services/ser/furniture.jpg",
  },
  {
    href: "/mattress-cleaning",
    title: "Mattress Cleaning",
    titleAr: "تنظيف المراتب",
    description: "",
    image: "/services/ser/matrees-cleaning.jpg",
    popular: true,
  },
  {
    href: "/furniture-cleaning",
    title: "Furniture Cleaning",
    titleAr: "تنظيف الأثاث",
    description: "",
    image: "/services/ser/furniture.jpg",
  },
  {
    href: "/home-deep-cleaning",
    title: "Home Deep Cleaning",
    titleAr: "تنظيف المنزل العميق",
    description: "",
    image: "/services/ser/deep.jpg",
  },
  {
    href: "/pest-control",
    title: "Pest Control",
    titleAr: "مكافحة الحشرات",
    description: "",
    image: "/services/ser/protective-medical.jpg",
  },
];

const headingContent: Record<Locale, { heading: string; subheading: string }> = {
  en: {
    heading: "Our Popular Services",
    subheading:
      "Explore our most-rated services, designed to create healthier spaces for every home and business.",
  },
  ar: {
    heading: "خدماتنا الأكثر طلباً",
    subheading:
      "استكشف خدماتنا الأعلى تقييماً، المصممة لخلق بيئات أكثر صحة لكل منزل وعمل.",
  },
};

function ServiceCard({ feature, locale }: { feature: Feature; locale: Locale }) {
  const bookLabel = locale === "ar" ? "احجز الآن" : "Book Now";
  const title = locale === "ar" ? feature.titleAr : feature.title;

  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col flex-shrink-0 w-52 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
      {feature.popular && (
        <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden z-10">
          <span className="absolute top-[18px] left-[-22px] bg-blue-700 text-white text-[10px] font-bold py-1 text-center rotate-[-45deg] w-[110px] tracking-wide shadow-md">
            {locale === "ar" ? "الأكثر طلباً" : "Most Popular"}
          </span>
        </div>
      )}

      <div className="relative w-full h-44">
        <Image src={feature.image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col items-center gap-4 p-4 flex-1">
        <h3 className="text-sm font-semibold text-gray-900 text-center leading-snug min-h-[40px] flex items-center">
          {title}
        </h3>
        <Link
          href={`/${locale}${feature.href}`}
          className="bg-amber-400 hover:bg-amber-500 text-white font-semibold text-sm rounded-full px-7 py-2 transition-colors w-full max-w-[160px] text-center"
        >
          {bookLabel}
        </Link>
      </div>
    </div>
  );
}

export default function Services({ locale }: { locale: Locale }) {
  const t = headingContent[locale];
  const isRTL = locale === "ar";

  return (
    <section className="py-10 px-6 bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{t.heading}</h2>
        <p className="text-sm text-gray-500 max-w-xl">{t.subheading}</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {features.map((f, i) => (
          <ServiceCard key={i} feature={f} locale={locale} />
        ))}
      </div>
    </section>
  );
}