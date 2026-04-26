import type { Locale } from '@/types/page';

type Faq = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  locale: Locale;
  title: string;
  description: string;
  faqs: Faq[];
};

export default function FaqSection({ locale, title, description, faqs }: FaqSectionProps) {
  return (
    <section className="bg-[#0d1f3c] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl text-white">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer text-lg font-semibold text-white">{faq.question}</summary>
              <p className="mt-3 text-slate-300 leading-7">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
