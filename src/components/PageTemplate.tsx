'use client';

import Image from 'next/image';
import type { Locale, PageDataItem } from '@/types/page';
import HeroSection from '@/components/ui/HeroSection';
import FeatureSection from '@/components/ui/FeatureSection';
import FaqSection from '@/components/ui/FaqSection';
import CtaBanner from '@/components/ui/CtaBanner';
import PricingCard from '@/components/ui/PricingCard';
import TestimonialSection from '@/components/ui/TestimonialSection';

type PageTemplateProps = {
  locale: Locale;
  page: PageDataItem;
};

const testimonialContent = {
  en: [
    {
      quote: 'The team arrived on time, explained every step, and left our home feeling refreshed.',
      name: 'Amira H.',
      role: 'Homeowner',
    },
    {
      quote: 'Excellent service quality and clear communication. Highly recommended for premium cleaning.',
      name: 'Khaled M.',
      role: 'Property Manager',
    },
  ],
  ar: [
    {
      quote: 'وصل الفريق في الموعد المحدد وشرح كل خطوة، وغادر منزلنا وهو يبدو منتعشاً.',
      name: 'أميرة ح.',
      role: 'صاحبة منزل',
    },
    {
      quote: 'جودة خدمة ممتازة وتواصل واضح. أنصح بها بشدة لتنظيف فاخر.',
      name: 'خالد م.',
      role: 'مدير ممتلكات',
    },
  ],
};

export default function PageTemplate({ locale, page }: PageTemplateProps) {
  const copy = page.copy[locale];
  const isRtl = locale === 'ar';
  const testimonials = testimonialContent[locale];

  return (
    <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-slate-950 text-slate-100">
      <HeroSection
        locale={locale}
        title={copy.title}
        subtitle={copy.heroSubtitle}
        description={copy.description}
        image={page.image}
        primaryCta={copy.heroCtaPrimary}
        secondaryCta={copy.heroCtaSecondary}
      />

      <section className="bg-white/95 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.8fr_0.6fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0d1f3c] sm:text-4xl">{copy.whyTitle}</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">{copy.details}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {copy.benefits.map((item) => (
                <div key={item} className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <p className="text-base leading-8 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/10">
              <h3 className="text-lg font-semibold text-white">{locale === 'ar' ? 'المميزات الأساسية' : 'Core Advantages'}</h3>
              <div className="mt-6 space-y-4">
                {copy.whyPoints.map((point) => (
                  <div key={point} className="rounded-3xl bg-slate-900/80 p-4 text-slate-200">
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/10">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-300">{locale === 'ar' ? 'ضمان الخدمة' : 'Service Promise'}</p>
              <p className="mt-4 text-slate-300">
                {locale === 'ar'
                  ? 'فريقنا يعمل بدقة ومهنية لتقديم نتائج منزلية متسقة وآمنة.'
                  : 'Our team delivers precise, professional results with every visit.'}
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl bg-slate-900/90 p-4 text-slate-200">{locale === 'ar' ? 'فحص شامل قبل بدء العمل' : 'Thorough inspection before every job'}</div>
                <div className="rounded-3xl bg-slate-900/90 p-4 text-slate-200">{locale === 'ar' ? 'معدات معتمدة وآمنة' : 'Certified, safe equipment'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection locale={locale} title={copy.faqTitle} benefits={copy.benefits} />

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{locale === 'ar' ? 'خطط الخدمة' : 'Service Plans'}</h2>
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            <PricingCard
              plan={locale === 'ar' ? 'أساسي' : 'Starter'}
              price="SAR 199"
              perks={[
                locale === 'ar' ? 'تقييم شامل' : 'Full inspection',
                locale === 'ar' ? 'تنظيف أساسي' : 'Standard cleaning',
                locale === 'ar' ? 'متابعة الخدمة' : 'Service follow-up',
              ]}
            />
            <PricingCard
              plan={locale === 'ar' ? 'متقدم' : 'Advanced'}
              price="SAR 349"
              perks={[
                locale === 'ar' ? 'تنظيف عميق' : 'Deep cleaning',
                locale === 'ar' ? 'تطهير شامل' : 'Full sanitization',
                locale === 'ar' ? 'جدولة مرنة' : 'Flexible scheduling',
              ]}
              featured
            />
            <PricingCard
              plan={locale === 'ar' ? 'متميز' : 'Premium'}
              price="SAR 499"
              perks={[
                locale === 'ar' ? 'استخدام معدات متقدمة' : 'Advanced equipment',
                locale === 'ar' ? 'ضمان جودة' : 'Quality assurance',
                locale === 'ar' ? 'تقارير مفصلة' : 'Detailed reporting',
              ]}
            />
          </div>
        </div>
      </section>

      <TestimonialSection locale={locale} testimonials={testimonials} />

      <FaqSection locale={locale} title={copy.faqTitle} description={copy.faqDescription} faqs={copy.faqs} />

      <CtaBanner locale={locale} prompt={copy.contactPrompt} buttonText={copy.contactCta} />
    </main>
  );
}
