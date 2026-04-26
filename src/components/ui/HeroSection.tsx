'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/types/page';

type HeroSectionProps = {
  locale: Locale;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryCta: string;
  secondaryCta: string;
};

export default function HeroSection({
  locale,
  title,
  subtitle,
  description,
  image,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  const isRtl = locale === 'ar';

  return (
    <section className="relative overflow-hidden bg-[#0d1f3c] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c] via-[#142a4a] to-[#07111f] opacity-95" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
              {subtitle}
            </span>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/booking`}
                className="inline-flex items-center justify-center rounded-full bg-[#f2a413] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#d19e11]"
              >
                {primaryCta}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                {secondaryCta}
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/90 p-4 shadow-2xl shadow-slate-950/30 transition duration-700 ease-out hover:-translate-y-1 hover:scale-[1.01]">
            <Image
              src={image}
              alt={title}
              width={700}
              height={520}
              className="h-[420px] w-full rounded-[32px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
