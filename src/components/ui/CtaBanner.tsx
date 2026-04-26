'use client';

import Link from 'next/link';
import type { Locale } from '@/types/page';

type CtaBannerProps = {
  locale: Locale;
  prompt: string;
  buttonText: string;
};

export default function CtaBanner({ locale, prompt, buttonText }: CtaBannerProps) {
  return (
    <section className="bg-[#f8fafc] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[40px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">{buttonText}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d1f3c] sm:text-4xl">
              {prompt}
            </h2>
          </div>

          <div className="text-left lg:text-right">
            <a
              href="https://wa.me/+966540915000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0d1f3c] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200/20 transition hover:bg-[#142a4a]"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
