'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, CalendarDays, ChevronRight } from "lucide-react";

type Lang = "en" | "ar";

interface ChildItem {
  href: string;
  label: string;
  subChildren?: SubChildItem[];
}

interface SubChildItem {
  href: string;
  label: string;
}

interface MenuItem {
  href: string;
  label: string;
  children?: ChildItem[];
}

export default function Navbar({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      href: "/home-services",
      label: lang === "ar" ? "خدمات المنزل" : "Home Services",
      children: [
        {
          href: "/packages-contracts",
          label: lang === "ar" ? "الحزم والعقود" : "Packages & Contracts",
          subChildren: [
            { href: "/furniture-cleaning-packages", label: lang === "ar" ? "باقات تنظيف الأثاث" : "Furniture Cleaning & Sanitization Packages" },
            { href: "/ac-aftercare-contract", label: lang === "ar" ? "عقد العناية اللاحقة للمكيفات" : "Annual AC Aftercare Cleaning Contract" },
            { href: "/ac-amc", label: lang === "ar" ? "عقد صيانة المكيفات السنوي" : "Annual AC Maintenance Contract (AMC)" },
            { href: "/pest-control-contracts", label: lang === "ar" ? "عقود مكافحة الحشرات" : "Pest Control Contracts" },
            { href: "/furniture-deep-cleaning-contract", label: lang === "ar" ? "عقد تنظيف الأثاث العميق" : "Furniture Deep Cleaning Contract" },
          ],
        },
        {
          href: "/ac-services",
          label: lang === "ar" ? "خدمات المكيفات" : "AC Services",
          subChildren: [
            { href: "/ac-cleaning", label: lang === "ar" ? "تنظيف المكيفات" : "AC Cleaning" },
            { href: "/ac-coil-cleaning", label: lang === "ar" ? "تنظيف ملف المكيف" : "AC Coil Cleaning" },
            { href: "/ac-repair", label: lang === "ar" ? "إصلاح وصيانة المكيفات" : "AC Repair & Maintenance" },
            { href: "/mold-removal", label: lang === "ar" ? "إزالة العفن" : "Mold Removal" },
            { href: "/ac-duct-liner", label: lang === "ar" ? "خدمات بطانة مجاري المكيف" : "AC Duct Liner Services" },
            { href: "/ac-installation", label: lang === "ar" ? "تركيب واستبدال المكيفات" : "AC Installation & Replacement" },
            { href: "/air-purifiers", label: lang === "ar" ? "أجهزة تنقية الهواء" : "Air Purifiers" },
          ],
        },
        {
          href: "/furniture-cleaning",
          label: lang === "ar" ? "تنظيف الأثاث" : "Furniture Cleaning Services",
          subChildren: [
            { href: "/mattress-cleaning", label: lang === "ar" ? "تنظيف المراتب" : "Mattress Cleaning" },
            { href: "/sofa-cleaning", label: lang === "ar" ? "تنظيف الكنب" : "Sofa Cleaning" },
            { href: "/carpet-cleaning", label: lang === "ar" ? "تنظيف السجاد" : "Carpet Cleaning" },
            { href: "/curtains-cleaning", label: lang === "ar" ? "تنظيف الستائر" : "Curtains Cleaning" },
            { href: "/upholstery-shampooing", label: lang === "ar" ? "شامبو التنجيد" : "Upholstery Shampooing" },
            { href: "/nano-coating", label: lang === "ar" ? "الطلاء النانوي وحماية البقع" : "Nano Coating & Stain Protection" },
            { href: "/full-home-furniture-package", label: lang === "ar" ? "باقة تنظيف أثاث المنزل بالكامل" : "Full Home Furniture Deep Cleaning Package" },
          ],
        },
        {
          href: "/water-pipeline",
          label: lang === "ar" ? "خدمات المياه والأنابيب" : "Water & Pipeline Services",
          subChildren: [
            { href: "/water-tank-cleaning", label: lang === "ar" ? "تنظيف خزانات المياه" : "Water Tank Cleaning" },
            { href: "/pipeline-disinfection", label: lang === "ar" ? "تطهير الأنابيب" : "Pipeline Disinfection" },
            { href: "/water-filters", label: lang === "ar" ? "فلاتر ومنقيات مياه فاخرة" : "Premium Water Filters & Purifiers" },
            { href: "/whole-house-filtration", label: lang === "ar" ? "نظام ترشيح المياه للمنزل بالكامل" : "Whole House Water Filtration System" },
            { href: "/blu-shower-filters", label: lang === "ar" ? "فلاتر استحمام blu" : "blu® Shower Filters" },
          ],
        },
        {
          href: "/home-deep-cleaning",
          label: lang === "ar" ? "خدمات التنظيف العميق للمنزل" : "Home Deep Cleaning Services",
          subChildren: [
            { href: "/move-in-out-unfurnished", label: lang === "ar" ? "تنظيف الانتقال (غير مفروش)" : "Move-In Move-Out Deep Cleaning (Unfurnished)" },
            { href: "/premium-deep-cleaning", label: lang === "ar" ? "تنظيف عميق فاخر (مفروش)" : "Premium Deep Cleaning (Furnished)" },
            { href: "/furniture-cleaning", label: lang === "ar" ? "تنظيف الأثاث" : "Furniture Cleaning" },
          ],
        },
        {
          href: "/painting-moving",
          label: lang === "ar" ? "الدهان والتحريك" : "Painting & Moving",
          subChildren: [
            { href: "/painting-services", label: lang === "ar" ? "خدمات الدهان" : "Painting Services" },
            { href: "/movers-packers", label: lang === "ar" ? "خدمات النقل والتغليف" : "Movers & Packers" },
          ],
        },
        {
          href: "/environmental-testing",
          label: lang === "ar" ? "خدمات الاختبار البيئي الداخلي" : "Indoor Environmental Testing Services",
          subChildren: [
            { href: "/air-quality-testing", label: lang === "ar" ? "اختبار جودة الهواء الداخلي" : "Indoor Air Quality Testing" },
            { href: "/water-quality-testing", label: lang === "ar" ? "اختبار جودة المياه" : "Water Quality Testing" },
          ],
        },
        {
          href: "/home-improvement",
          label: lang === "ar" ? "تحسين المنزل" : "Home Improvement",
          subChildren: [
            { href: "/roof-waterproofing", label: lang === "ar" ? "حلول عزل الأسطح" : "Roof Waterproofing Solutions" },
            { href: "/home-wrapping", label: lang === "ar" ? "تغليف المنزل والمطبخ" : "Home & Kitchen Wrapping" },
            { href: "/smart-home", label: lang === "ar" ? "حلول المنزل الذكي" : "Smart Home Solutions" },
            { href: "/parquet-flooring", label: lang === "ar" ? "الأرضيات الخشبية" : "Parquet Flooring" },
          ],
        },
        {
          href: "/maintenance-services",
          label: lang === "ar" ? "الخدمات الرئيسية" : "Main Services",
          subChildren: [
            { href: "/finishing-decorations", label: lang === "ar" ? "التشطيبات والديكورات" : "Finishing & Decorations" },
            { href: "/ac-maintenance", label: lang === "ar" ? "صيانة المكيفات" : "Air Conditioning Maintenance" },
            { href: "/plumbing", label: lang === "ar" ? "السباكة" : "Plumbing" },
            { href: "/electrical", label: lang === "ar" ? "الكهرباء" : "Electrical Work" },
            { href: "/pest-control", label: lang === "ar" ? "مكافحة الحشرات" : "Pest Control" },
            { href: "/water-tank-insulation", label: lang === "ar" ? "تنظيف وعزل خزانات المياه" : "Water Tank Cleaning & Insulation" },
          ],
        },
      ],
    },
    // {
    //   href: "/personal-services",
    //   label: lang === "ar" ? "الخدمات الشخصية" : "Personal Services",
    //   children: [
    //     { href: "/nursing", label: lang === "ar" ? "تمريض" : "Nursing" },
    //     { href: "/therapy", label: lang === "ar" ? "علاج" : "Therapy" },
    //   ],
    // },
    { href: "/shop", label: lang === "ar" ? "المتجر" : "Shop" },
    { href: "/contact", label: lang === "ar" ? "اتصل بنا" : "Contact Us" },
  ];

  const isActive = (href: string) => pathname.startsWith(`/${lang}${href}`);

  const flagSrc =
    lang === "en"
      ? "https://thehealthyhome.me/img/1dafa907-4aea-4380-b353-599957cb36f9/saudi-arabia-flag-icon-24.png"
      : "https://thehealthyhome.me/img/be667bd6-9fa1-42b2-ab71-f05fa95fee81/ae.png";

  return (
    <header
      className="fixed top-0 left-0 w-full bg-[#f7f7f7] border-b border-gray-200 z-[9999] shadow-sm"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-full px-6 lg:px-14">
        <div className="flex items-center justify-between h-[100px]">

          {/* Logo */}
          <Link href={`/${lang}`} className="flex-shrink-0 z-[10000]">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[58px] w-auto object-contain"
            />
          </Link>

        {/* Desktop Menu */}
<nav className="hidden lg:flex items-center gap-14 z-[10000]">
  {menuItems.map((item, index) => (
    <div key={index} className="relative group">
      <Link
        href={`/${lang}${item.href}`}
        className={`flex items-center gap-1 text-[17px] font-medium tracking-[0.08em] transition-colors duration-300
        ${
          isActive(item.href)
            ? "text-[#0d4d66]"
            : "text-[#2f3744] hover:text-[#0d4d66]"
        }`}
      >
        <span className="leading-tight text-center">{item.label}</span>
        {item.children && <ChevronDown className="w-4 h-4" />}
      </Link>

      {/* Level 1 Dropdown */}
      {item.children && (
        <div
          className={`absolute top-full mt-1 min-w-[280px] rounded-2xl bg-white shadow-2xl border border-gray-100 p-3 z-[10001] transition-all duration-300 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
          ${lang === "ar" ? "right-0" : "left-0"}`}
        >
          {item.children.map((child, i) => (
            <div key={i} className="relative group/sub">
              {/* If child has subChildren */}
              {"subChildren" in child && child.subChildren ? (
                <>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-[#f8fafc] cursor-pointer">
                    <span>{child.label}</span>

                    {/* Arrow direction changes for Arabic */}
                    <ChevronRight
                      className={`w-4 h-4 ${
                        lang === "ar" ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Level 2 Dropdown */}
                  <div
                    className={`absolute top-0 min-w-[260px] rounded-2xl bg-white shadow-2xl border border-gray-100 p-3 z-[10002] transition-all duration-300 opacity-0 invisible
                    ${
                      lang === "ar"
                        ? "right-full mr-1 translate-x-2 group-hover/sub:translate-x-0"
                        : "left-full ml-1 -translate-x-2 group-hover/sub:translate-x-0"
                    }
                    group-hover/sub:opacity-100 group-hover/sub:visible`}
                  >
                    {child.subChildren.map((subChild, j) => (
                      <Link
                        key={j}
                        href={`/${lang}${subChild.href}`}
                        className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-[#f8fafc] hover:text-[#0d4d66] transition"
                      >
                        {subChild.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={`/${lang}${child.href}`}
                  className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-[#f8fafc] hover:text-[#0d4d66] transition"
                >
                  {child.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-8 z-[10000]">
            <Link
              href={`https://wa.me/+966540915000`}
              className="flex items-center gap-3 bg-[#f2a413] text-white px-7 py-4 rounded-full text-[16px] font-semibold hover:scale-105 transition"
            >
              <CalendarDays className="w-5 h-5" />
              <span>{lang === "ar" ? "احجز الآن" : "Book Now"}</span>
            </Link>

            <Link
              href={lang === "en" ? "/ar" : "/en"}
              className="flex items-center gap-3 text-[18px] font-medium text-[#2f3744]"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                <img
                  src={flagSrc}
                  alt="Language"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-[10000]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu (simplified - you can expand with nested accordion if needed) */}
        {mobileOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white z-[10001] relative">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={`/${lang}${item.href}`}
                className="block py-3 text-base font-medium text-[#2f3744]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={`/${lang}/booking`}
              className="inline-flex items-center gap-2 mt-4 bg-[#f2a413] text-white px-6 py-3 rounded-full font-semibold"
            >
              <CalendarDays className="w-5 h-5" />
              {lang === "ar" ? "احجز الآن" : "Book Now"}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}