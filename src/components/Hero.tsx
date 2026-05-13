import { getTranslations } from 'next-intl/server';

type HeroProps = {
  locale: 'en' | 'ar';
};

export default async function Hero({ locale }: HeroProps) {
  const t = await getTranslations({ locale });

  return (
    <section className="relative w-full min-h-[640px] flex items-center justify-center overflow-hidden font-sans">

      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg.webp')" }}
      />

      {/* Dark overlay so text remains readable */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      

      {/* Content */}
      <div className="relative z-30 text-center max-w-[580px] px-6">
        <h1 className="text-[42px] font-extrabold text-white leading-tight mb-4">
          {t('heroTitle')}
        </h1>

        <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-semibold mb-8">
          {t('heroSubtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href={`https://wa.me/966540915000?text=${encodeURIComponent(
              locale === 'ar'
                ? 'مرحبًا! أريد معرفة المزيد عن خدمات التكييف الخاصة بكم.'
                : 'Hello! I would like more information about your AC services.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#1da851]"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.001 0C5.373 0 0 5.373 0 12.002c0 2.106.547 4.175 1.586 5.994L0 24l5.43-1.42A11.952 11.952 0 0 0 12 24c6.627 0 12.001-5.373 12.001-11.999 0-3.203-1.249-6.209-3.48-8.52z" fill="#fff" />
                <path d="M16.666 13.05c-.218-.11-1.29-.636-1.49-.71-.2-.074-.346-.11-.492.11-.147.218-.567.71-.695.856-.128.147-.256.166-.474.056-.218-.11-.918-.34-1.75-1.08-.648-.579-1.084-1.291-1.213-1.508-.128-.218-.014-.336.104-.455.107-.106.238-.256.357-.385.119-.128.158-.218.238-.365.08-.147.04-.278-.02-.386-.064-.108-.67-1.613-.92-2.21-.24-.58-.483-.5-.667-.51l-.572-.012c-.19 0-.395.07-.603.305-.207.236-.788.914-.788 2.225 0 1.31.81 2.58.924 2.755.11.173 1.6 2.45 3.88 3.43 1.36.61 1.78.65 2.14.59.343-.06 1.25-.51 1.43-1.01.18-.5.18-.93.125-1.01-.05-.08-.184-.13-.4-.24z" fill="#fff" />
              </svg>
            </span>
            {t('ctaWhatsApp')}
          </a>

          <a
            href="tel:+966540915000"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-orange-400"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {t('ctaCall')}
          </a>
        </div>
      </div>
    </section>
  );
}