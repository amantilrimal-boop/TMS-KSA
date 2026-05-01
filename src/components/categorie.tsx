import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "ar";

type CategoryItem = {
  href: string;
  title: string;
  titleAr: string;
  image: string;
};

const categoryItems: CategoryItem[] = [
  {
    href: "/ac-cleaning",
    title: "AC Cleaning",
    titleAr: "تنظيف المكيف",
    image: "/services/ac-cleaning-service.webp",
  },
  {
    href: "/carpet-cleaning",
    title: "Carpet Cleaning",
    titleAr: "تنظيف السجاد",
    image: "/services/carpet-cleaning-service.webp",
  },
  {
    href: "/mattress-cleaning",
    title: "Mattress Cleaning",
    titleAr: "تنظيف المراتب",
    image: "/services/mattress-cleaning-service.webp",
  },
  {
    href: "/furniture-cleaning",
    title: "Furniture Cleaning",
    titleAr: "تنظيف الأثاث",
    image: "/services/sofa-cleaning-service.webp",
  },
  {
    href: "/home-deep-cleaning",
    title: "Home Deep Cleaning",
    titleAr: "تنظيف المنزل العميق",
    image: "/services/deep-cleaning-service.webp",
  },
  {
    href: "/pest-control",
    title: "Pest Control",
    titleAr: "مكافحة الحشرات",
    image: "/services/pest-control-service.webp",
  },
  {
    href: "/water-tank-cleaning",
    title: "Water Tank Cleaning",
    titleAr: "تنظيف خزانات المياه",
    image: "/services/water-tank-cleaning-service.webp",
  },
  {
    href: "/packages-contracts",
    title: "Contract & Packages",
    titleAr: "العقود والباقات",
    image: "/services/contract-packages.webp",
  },
  {
    href: "/service",
    title: "More Services",
    titleAr: "المزيد من الخدمات",
    image: "/services/other-service.webp",
  },
];

export default function Categorie({ locale }: { locale: Locale }) {
  const isRTL = locale === "ar";

  return (
    <section
      className="relative overflow-hidden rounded-[28px]  py-8 px-4 lg:px-8 my-8 text-slate-900"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 bg-gradient-to-br    opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-3 grid-cols-3 sm:grid-cols-5 xl:grid-cols-9">
          {categoryItems.map((item, index) => (
            <Link
              key={index}
              href={`/${locale}${item.href}`}
              className="group overflow-hidden rounded-[20px] border border-black/10 bg-white/95 p-3 text-center shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 shadow-md shadow-cyan-500/10 transition duration-300 group-hover:bg-cyan-100">
                <Image
                  src={item.image}
                  alt={locale === "ar" ? item.titleAr : item.title}
                  width={36}
                  height={36}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="mt-3 text-xs font-semibold text-slate-900 leading-snug">
                {locale === "ar" ? item.titleAr : item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
