'use client';

import type { Locale } from '@/types/page';

type TestimonialSectionProps = {
  locale: Locale;
  testimonials: Array<{ quote: string; name: string; role: string }>;
};

export default function TestimonialSection({ locale, testimonials }: TestimonialSectionProps) {
  const heading = locale === 'ar' ? 'آراء العملاء' : 'Client testimonials';
  const subheading = locale === 'ar' ? 'يثق بنا أصحاب المنازل ومديرو الممتلكات.' : 'Trusted by homeowners and property managers.';

  return (
    <section className="bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl text-white">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">{heading}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{subheading}</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.quote} className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/10">
              <p className="text-lg leading-8 text-slate-100">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
