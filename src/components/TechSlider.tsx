'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

type TechSliderProps = {
  locale: 'en' | 'ar';
};

type ClientLogo = {
  src: string;
  alt: string;
};

const clientLogos: ClientLogo[] = [
  { src: '/client-logos/1-07bb881c.webp', alt: 'Client logo 1' },
  { src: '/client-logos/2-a3fba6c5.webp', alt: 'Client logo 2' },
  { src: '/client-logos/3-f0d5318c.webp', alt: 'Client logo 3' },
  { src: '/client-logos/5-ffd3e652.webp', alt: 'Client logo 4' },
  { src: '/client-logos/6-2f21e090.webp', alt: 'Client logo 5' },
  { src: '/client-logos/7-54985c03.webp', alt: 'Client logo 6' },
  { src: '/client-logos/8-f7ca40d6.webp', alt: 'Client logo 7' },
  { src: '/client-logos/9-28d80a1b.webp', alt: 'Client logo 8' },
  { src: '/client-logos/11-0c766536.webp', alt: 'Client logo 9' },
  { src: '/client-logos/12-375c27bc.webp', alt: 'Client logo 10' },
  { src: '/client-logos/14-9e90f35b.webp', alt: 'Client logo 11' },
];

function LogoBadge({ logo }: { logo: ClientLogo }) {
  return (
    <div className="w-28 h-28 shrink-0 rounded-3xl border border-gray-200 bg-white shadow-sm flex items-center justify-center p-3">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={80}
        height={80}
        className="object-contain"
      />
    </div>
  );
}

function InfiniteLogoSlider({
  logos,
  direction = 'left',
  speed = 35,
}: {
  logos: ClientLogo[];
  direction?: 'left' | 'right';
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const repeated = [...logos, ...logos, ...logos];
  const itemW = 112 + 16; // w-28 + gap-4

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalW = logos.length * itemW;

    const animate = () => {
      posRef.current += direction === 'left' ? -0.4 : 0.4;
      if (posRef.current <= -totalW) posRef.current += totalW;
      if (posRef.current >= 0) posRef.current -= totalW;
      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, logos.length]);

  return (
    <div className="overflow-hidden w-full" style={{ direction: 'ltr' }}>
      <div ref={trackRef} className="flex gap-4 w-max">
        {repeated.map((logo, i) => (
          <LogoBadge key={i} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export default function TechSlider({ locale }: TechSliderProps) {
  const isRtl = locale === 'ar';

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative bg-[#f4f6fb] overflow-hidden py-20 px-4"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#0d1f3c] mb-4">
          {isRtl ? 'عملائنا' : 'Our Clients'}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
          {isRtl
            ? 'نحن فخورون بالعمل مع أكبر الشركات في المملكة العربية السعودية وخارجها.'
            : 'Proudly working with leading companies across Saudi Arabia and beyond.'}
        </p>
      </div>

      {/* Desktop: client logo sliders */}
      <div className="hidden md:flex items-center justify-center gap-0 relative">

        {/* Left logo sliders */}
        <div className="flex flex-col gap-4 flex-1 min-w-0 overflow-hidden -mr-6">
          <InfiniteLogoSlider logos={clientLogos} direction="left" />
          <InfiniteLogoSlider logos={clientLogos} direction="right" />
        </div>

        {/* Phone mockup */}
        <div className="relative z-10 shrink-0" style={{ width: 280 }}>
          <PhoneMockup locale={locale} />
        </div>

        {/* Right logo sliders */}
        <div className="flex flex-col gap-4 flex-1 min-w-0 overflow-hidden -ml-6">
          <InfiniteLogoSlider logos={[...clientLogos].reverse()} direction="right" />
          <InfiniteLogoSlider logos={[...clientLogos].reverse()} direction="left" />
        </div>
      </div>

      {/* Mobile: stacked client logos */}
      <div className="md:hidden flex flex-col items-center gap-10">
        <div className="w-full overflow-hidden">
          <InfiniteLogoSlider logos={clientLogos} direction="left" />
        </div>
        <PhoneMockup locale={locale} />
        <div className="w-full overflow-hidden">
          <InfiniteLogoSlider logos={[...clientLogos].reverse()} direction="right" />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ locale }: { locale: 'en' | 'ar' }) {
  const isRtl = locale === 'ar';

  return (
    <div
      className="relative mx-auto shadow-2xl overflow-hidden"
      style={{
        width: 260,
        height: 520,
        borderRadius: '2.8rem',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        border: '2px solid #2d3a5e',
      }}
    >
      {/* Inner screen */}
      <div
        className="absolute overflow-hidden"
        style={{
          inset: 10,
          borderRadius: '2.2rem',
          background: 'linear-gradient(160deg, #ffffff 0%, #f8faff 60%, #eef3ff 100%)',
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[10px] font-semibold text-gray-800">
          <span>02:39 PM</span>
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
              <path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 14 0M8.5 16.43a5 5 0 0 1 7 0" strokeLinecap="round" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
              <rect x="2" y="6" width="16" height="12" rx="2" /><path d="M22 10v4" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Nav bar */}
        <div className="flex items-center justify-between px-3 py-2">
          <button className="p-1.5 hover:bg-gray-100 rounded-xl transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
              <path d="m12 19-7-7 7-7M19 12H5" />
            </svg>
          </button>
          {/* Logo image */}
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image src="/logo.png" alt="كول نكس - COOL NEX" width={38} height={38} className="object-cover" />
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded-xl transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
            </svg>
          </button>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-2 gap-2 px-3 pb-6 overflow-hidden" style={{ direction: 'ltr' }}>
          {clientLogos.slice(0, 6).map((logo, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-2.5 shadow-md hover:shadow-lg transition-all border border-gray-100 flex items-center justify-center"
            >
              <Image src={logo.src} alt={logo.alt} width={56} height={56} className="object-contain" />
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-800 rounded-full opacity-60" />
      </div>
    </div>
  );
}