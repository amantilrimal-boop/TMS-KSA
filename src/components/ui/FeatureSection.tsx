import type { Locale } from '@/types/page';

type FeatureSectionProps = {
  locale: Locale;
  title: string;
  benefits: string[];
};

export default function FeatureSection({ locale, title, benefits }: FeatureSectionProps) {
  return (
    <section className="bg-white/95 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1f3c] sm:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-[30px] border border-slate-200 bg-slate-950/5 p-6 shadow-sm">
              <p className="text-base leading-8 text-slate-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
