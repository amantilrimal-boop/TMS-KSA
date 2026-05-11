import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

type About = {
  locale: 'en' | 'ar';
};

type AboutProps = {
  locale: 'en' | 'ar';
};

const services = [
  {
    key: 'software',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7" stroke="white" strokeWidth="1.8">
        <rect x="6" y="10" width="36" height="26" rx="3" />
        <path d="M16 20l-5 4 5 4M32 20l5 4-5 4M22 30l4-12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'marketing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7" stroke="white" strokeWidth="1.8">
        <path d="M8 34l8-10 8 6 8-12 8 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 40h32M8 8v32" strokeLinecap="round" />
        <circle cx="38" cy="14" r="4" fill="white" fillOpacity="0.3" />
      </svg>
    ),
  },
];

const content = {
  en: {
    divider: 'Section Divider',
    missionLabel: 'our mission',
    visionLabel: 'our vision',
    missionTitle: 'Our Mission',
    missionText:
      'To deliver integrated marine and industrial contracting services across Saudi Arabia, from protective coatings and corrosion protection to thermal insulation, abrasive blasting, and equipment maintenance. We focus on safety, quality, and reliable execution for ships and facilities.',
    visionTitle: 'Our Vision',
    visionText:
      'To be the trusted marine contracting partner for ship owners and facility operators across the Kingdom. We aim to lead with technical excellence, operational reliability, and services that protect assets and extend asset life.',
    whyTitle: 'Why Choose كول نكس - COOL NEX — Marine Contracting in Saudi Arabia',
    whyText:
      'With deep expertise across marine maintenance, protective coatings, corrosion control, and industrial services, our team delivers turnkey solutions that keep assets safe and operational. We combine local knowledge, technical skill, and responsive service to support projects across the KSA.',
    whyLabel: 'why us',
    cards: [
      {
        title: 'Marine Maintenance Expertise',
        text: 'A highly skilled team delivering protective coating, insulation, and maintenance services for ships, offshore platforms, and industrial facilities across Saudi Arabia.',
      },
      {
        title: 'Corrosion Protection',
        text: 'Advanced corrosion control systems and protective solutions designed to extend asset life and improve operational safety in harsh marine environments.',
      },
      {
        title: 'Kingdom-wide Coverage',
        text: 'Comprehensive contracting services throughout the Kingdom, serving customers in Jeddah, Dammam, Riyadh, and major coastal and inland project sites.',
      },
    ],
  },
  ar: {
    divider: 'فاصل القسم',
    missionLabel: 'مهمتنا',
    visionLabel: 'رؤيتنا',
    missionTitle: 'مهمتنا',
    missionText:
      'تقديم خدمات مقاولات بحرية وصناعية متكاملة في السعودية، من الطلاءات الوقائية والحماية من التآكل إلى العزل الحراري والسفع الكاشط وصيانة المعدات. نركز على السلامة والجودة والتنفيذ الموثوق للسفن والمنشآت.',
    visionTitle: 'رؤيتنا',
    visionText:
      'أن نكون الشريك الموثوق للأعمال البحرية والصناعية في المملكة، بقيادة تقنية متفوقة وتنفيذ يعتمد عليه وخدمات تحمي الأصول وتطيل عمرها.',
    whyTitle: 'لماذا تختار كول نكس - COOL NEX — المقاولات البحرية في السعودية',
    whyText:
      'بخبرة واسعة في الصيانة البحرية، الطلاءات الوقائية، حماية التآكل، والخدمات الصناعية، يقدم فريقنا حلولاً متكاملة تحافظ على سلامة الأصول واستمرارية التشغيل. نجمع بين المعرفة المحلية والمهارة الفنية والاستجابة السريعة لدعم المشاريع في جميع أنحاء المملكة.',
    whyLabel: 'لماذا نحن',
    cards: [
      {
        title: 'خبرة في الصيانة البحرية',
        text: 'فريق عالي المهارة يقدم خدمات الطلاءات الوقائية، العزل، والصيانة للسفن والمنصات البحرية والمنشآت الصناعية في السعودية.',
      },
      {
        title: 'حماية من التآكل',
        text: 'حلول متقدمة لحماية الأصول من التآكل مصممة لتمديد عمر المعدات وتحسين السلامة التشغيلية في البيئات البحرية القاسية.',
      },
      {
        title: 'تغطية شاملة في المملكة',
        text: 'خدمات مقاولات متكاملة في جميع أنحاء المملكة، نخدم عملاء في جدة والدمام والرياض والمواقع الساحلية والداخلية الرئيسية.',
      },
    ],
  },
} as const;

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a227]/70 to-transparent" />
      <span className="rounded-full border border-[#c9a227]/30 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1a3a6b]">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a227]/70 to-transparent" />
    </div>
  );
}

export async function About({ locale }: About) {
  const t = await getTranslations({ locale });
  const isRtl = locale === 'ar';

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative bg-[#f7f8fc] overflow-hidden py-16 px-4"
      style={{ fontFamily: isRtl ? "'Noto Kufi Arabic', 'Tajawal', sans-serif" : "'DM Sans', 'Outfit', sans-serif" }}
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#1a3a6b]/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#c9a227]/8 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── LEFT: Image collage ── */}
        <div className={`relative flex items-end justify-center min-h-[420px] ${isRtl ? 'lg:order-2' : 'lg:order-1'}`}>

          {/* Main team photo placeholder */}
          <div className="relative w-[440px] h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-[#dde3ef]">
            <Image src="/about.png" alt={isRtl ? 'فريق كول نكس - COOL NEX' : 'كول نكس - COOL NEX Team'} fill className="object-cover" />
          </div>

          {/* Clients badge — bottom left */}
          <div
            className={`absolute bottom-0 ${isRtl ? 'right-4' : 'left-4'} bg-[#1a3a6b] text-white rounded-2xl px-5 py-4 shadow-xl min-w-[140px]`}
          >
            <p className="text-3xl font-extrabold tracking-tight leading-none">150+</p>
            <p className="text-xs font-medium mt-1 text-blue-200 whitespace-nowrap">
              {isRtl ? 'عميل حول العالم' : 'Worldwide Clients'}
            </p>
          </div>

          {/* Vision 2030 / city thumbnail — bottom right (overlapping) */}
          <div
            className={`absolute bottom-[-10px] ${isRtl ? 'left-[-10px]' : 'right-[-10px]'} w-[170px] h-[120px] rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-[#0d1f3c]`}
          >

            <Image
              src="/bg_vision.png"
              alt={isRtl ? 'رؤية 2030' : 'Vision 2030'}
              fill className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
              <p className="text-[8px] opacity-60 mt-0.5 tracking-wide">
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className={`flex flex-col gap-6 ${isRtl ? 'lg:order-1 text-right' : 'lg:order-2 text-left'}`}>

          {/* Eyebrow */}
          <p className="text-[#c9a227] font-semibold text-sm tracking-widest uppercase">
            {isRtl ? 'من نحن' : 'About Us'}
          </p>

          {/* Headline */}
          <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold text-[#0d1f3c] leading-tight">
            {isRtl
              ? 'كول نكس - COOL NEX — الرائد في المقاولات البحرية بالسعودية.'
              : "Saudi Arabia's Leader In Marine Contracting."}
          </h2>

          {/* Body */}
          <p className="text-[#4a5568] text-[15px] leading-relaxed max-w-xl">
            {isRtl
              ? 'منذ تأسيسها، تميّزت كول نكس - COOL NEX في تقديم خدمات المقاولات البحرية، الطلاءات الوقائية، حماية التآكل، وصيانة المعدات.'
              : 'Since inception, كول نكس - COOL NEX has excelled in marine contracting, protective coatings, corrosion protection, and equipment maintenance.'}
          </p>

          {/* Services */}
          <div className="flex flex-col gap-5 mt-2">

            {/* Software */}
            <div className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-dashed border-[#c9a227] flex items-center justify-center bg-[#1a3a6b]">
                {services[0].icon}
              </div>
              <div>
                <h3 className="text-[#0d1f3c] font-bold text-[15px]">
                  {isRtl ? 'الصيانة البحرية والطلاءات' : 'Marine Maintenance & Coatings'}
                </h3>
                <p className="text-[#718096] text-[13px] mt-0.5 leading-relaxed">
                  {isRtl
                    ? 'خدمات الصيانة البحرية، الطلاءات الوقائية، والحماية للأصول البحرية والصناعية.'
                    : 'Marine maintenance, protective coatings, and asset protection services.'}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#e2e8f0]" />

            {/* Marketing */}
            <div className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-dashed border-[#c9a227] flex items-center justify-center bg-[#1a3a6b]">
                {services[1].icon}
              </div>
              <div>
                <h3 className="text-[#0d1f3c] font-bold text-[15px]">
                  {isRtl ? 'حماية التآكل والعزل' : 'Corrosion Protection & Insulation'}
                </h3>
                <p className="text-[#718096] text-[13px] mt-0.5 leading-relaxed">
                  {isRtl
                    ? 'أنظمة حماية التآكل والعزل الحراري للحفاظ على سلامة ومتانة الأصول البحرية والصناعية.'
                    : 'Corrosion protection and thermal insulation systems designed to preserve marine and industrial assets.'}
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className={`mt-2 ${isRtl ? 'self-end' : 'self-start'}`}>
            <button className="bg-[#1a3a6b] hover:bg-[#0d2550] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              {isRtl ? 'اعرف المزيد عنّا' : 'Know More About Us'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About2({ locale }: AboutProps) {
  const isRtl = locale === 'ar';
  const copy = content[isRtl ? 'ar' : 'en'];

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative overflow-hidden bg-[#f7f8fc] px-4 py-16 sm:px-6 lg:px-8"
      style={{ fontFamily: isRtl ? "'Noto Kufi Arabic', 'Tajawal', sans-serif" : "'DM Sans', 'Outfit', sans-serif" }}
    >
      <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#1a3a6b]/6 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-[#c9a227]/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <SectionDivider label={copy.divider} />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-[#1a3a6b]/10 bg-white p-8 shadow-[0_20px_70px_rgba(17,37,70,0.08)]">
            <span className="inline-flex rounded-full bg-[#1a3a6b]/8 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-[#1a3a6b]">
              {copy.missionLabel}
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#0d1f3c] sm:text-[2.2rem]">
              {copy.missionTitle}
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[#4a5568] sm:text-base">
              {copy.missionText}
            </p>
          </article>

          <article className="rounded-[28px] border border-[#1a3a6b]/10 bg-[#0d1f3c] p-8 text-white shadow-[0_24px_80px_rgba(13,31,60,0.22)]">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-[#f4d16c]">
              {copy.visionLabel}
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-[2.2rem]">
              {copy.visionTitle}
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-base">
              {copy.visionText}
            </p>
          </article>
        </div>

        <SectionDivider label={copy.divider} />

        <div className="rounded-[32px] border border-[#1a3a6b]/10 bg-white p-8 shadow-[0_20px_70px_rgba(17,37,70,0.08)] sm:p-10">
          <span className="inline-flex rounded-full bg-[#c9a227]/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-[#9d7c10]">
            {copy.whyLabel}
          </span>
          <h2 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight text-[#0d1f3c] sm:text-[2.4rem]">
            {copy.whyTitle}
          </h2>
          <p className="mt-5 max-w-4xl text-[15px] leading-8 text-[#4a5568] sm:text-base">
            {copy.whyText}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copy.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[26px] border border-[#1a3a6b]/10 bg-[#f8faff] p-6 shadow-[0_12px_35px_rgba(17,37,70,0.06)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1a3a6b] text-lg font-bold text-white">
                  {card.title.charAt(0)}
                </div>
                <h3 className="text-xl font-extrabold text-[#0d1f3c]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5b6679]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
