import Image from 'next/image';

type About = {
  locale: 'en' | 'ar';
};

export default function About({ locale }: About) {
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
            <Image src="/about2.png" alt={isRtl ? 'فريق كول نكس - COOL NEX' : 'كول نكس - COOL NEX Team'} fill className="object-cover" />
          </div>

          {/* Clients badge — bottom left */}
          <div
            className={`absolute bottom-0 ${isRtl ? 'right-4' : 'left-4'} bg-[#1a3a6b] text-white rounded-2xl px-5 py-4 shadow-xl min-w-[140px]`}
          >
            <p className="text-3xl font-extrabold tracking-tight leading-none">4553+</p>
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
              ? 'CoolNex شركة متخصصة في صيانة وتشغيل وتنظيف أنظمة التكييف، تقدم حلولًا احترافية للأفراد والمنشآت التجارية باستخدام أحدث التقنيات ومعايير الجودة الحديثة، بهدف توفير بيئة مريحة وكفاءة تشغيل عالية بأسلوب عصري يواكب مستقبل الخدمات في المملكة.'
              : 'CoolNex is a specialized company in AC maintenance, operation, and cleaning services, delivering professional solutions for individuals and commercial facilities with the latest technologies and modern quality standards. We aim to provide a comfortable environment and high operational efficiency with a contemporary approach that matches the future of services in the Kingdom.'}
          </h2>

          {/* Body */}
          <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed max-w-xl">
            {isRtl
              ? 'في CoolNex نلتزم بتقديم خدمات صيانة وتشغيل أنظمة التكييف بأعلى معايير الجودة والاحترافية، من خلال كوادر متخصصة وتقنيات حديثة وحلول فعالة تضمن الأداء الأمثل، وتقليل استهلاك الطاقة، وتحقيق رضا العملاء بثقة واستدامة.'
              : 'At CoolNex, we are committed to delivering AC maintenance and operation services with the highest quality and professionalism standards through specialized teams, modern techniques, and effective solutions that ensure optimal performance, reduced energy consumption, and customer satisfaction with trust and sustainability.'}
          </p>

          {/* Values */}
          <div className="grid gap-4 mt-2">
            {(isRtl
              ? [
                  { title: 'الاحترافية', description: 'نؤمن بأن الجودة والإتقان أساس نجاحنا واستمرار ثقة عملائنا.' },
                  { title: 'الابتكار', description: 'نعتمد أحدث التقنيات والحلول الذكية في مجال التكييف والصيانة.' },
                  { title: 'الشفافية', description: 'نقدم خدمات واضحة بتقارير دقيقة وأسعار عادلة ومصداقية عالية.' },
                  { title: 'الالتزام', description: 'نحترم الوقت ونلتزم بسرعة الاستجابة ودقة التنفيذ.' },
                  { title: 'الاستدامة', description: 'نسعى إلى حلول تساهم في رفع كفاءة الطاقة والحفاظ على البيئة.' },
                  { title: 'رضا العميل', description: 'نجاحنا الحقيقي يبدأ من تجربة عميل مميزة وخدمة موثوقة طويلة الأمد.' },
                ]
              : [
                  { title: 'Professionalism', description: 'We believe quality and excellence are the foundation of our success and customer trust.' },
                  { title: 'Innovation', description: 'We use the latest technologies and smart solutions in air conditioning and maintenance.' },
                  { title: 'Transparency', description: 'We deliver clear services with accurate reports, fair pricing, and high credibility.' },
                  { title: 'Commitment', description: 'We respect time and are committed to fast response and precise execution.' },
                  { title: 'Sustainability', description: 'We seek solutions that improve energy efficiency and preserve the environment.' },
                  { title: 'Customer Satisfaction', description: 'Our true success begins with an excellent customer experience and long-term reliable service.' },
                ]
            ).map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-white p-5 shadow-sm border border-slate-100">
                <h3 className="text-base font-semibold text-[#0d1f3c]">{item.title}</h3>
                <p className="text-sm text-[#64748b] mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
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
