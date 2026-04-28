import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const locales = ['en', 'ar'] as const;

type Locale = (typeof locales)[number];

type SeoCopy = {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  summaryTitle: string;
  summaryContent: string;
  sections: Array<{ heading: string; items: string[] }>;
  actionsTitle: string;
  actions: string[];
};

const content: Record<Locale, SeoCopy> = {
  en: {
    title: 'SEO Audit & Ranking Plan',
    description:
      'SEO audit report and ranking plan for Technical Marine Contracting Co. Focused on off-page SEO, backlink strategy, and reputation growth.',
    heroTitle: 'SEO Audit & Ranking Plan',
    heroSubtitle:
      'A focused plan to improve off-page authority, backlinks, and search visibility for your website.',
    summaryTitle: 'Why this matters',
    summaryContent:
      'Your website has strong technical, on-page, and content SEO. The main ranking gap is off-page authority: external backlinks, brand mentions, and local signals. This page shows the exact actions needed to improve search engine ranking and help your website move toward the top results.',
    sections: [
      {
        heading: 'Current Audit Scores',
        items: [
          'Overall SEO Score: 85/100',
          'Technical: 83/100',
          'On-Page: 100/100',
          'Content: 100/100',
          'Off-Page: 52/100',
          'Local SEO: 90/100',
        ],
      },
      {
        heading: 'Main Off-Page Issues',
        items: [
          'Low domain authority: 30/100',
          'Not enough high-quality editorial backlinks',
          'Need stronger branded mentions across trusted sites',
          'Opportunity to improve local citations and review signals',
        ],
      },
      {
        heading: 'Ranking Focus Areas',
        items: [
          'Build relevant backlinks from industry and local sources, especially Arabic-speaking sites.',
          'Create linkable assets and outreach campaigns in Arabic, targeting Saudi Arabia search behavior.',
          'Monitor backlinks and lost links weekly.',
          'Protect the site from toxic link activity and brand dilution.',
        ],
      },
    ],
    actionsTitle: 'Next Actions to Improve Ranking',
    actions: [
      'Set a backlink outreach campaign with 20–50 relevant targets, including Arabic-language and Saudi local sites.',
      'Use guest posting, resource page inclusion, and testimonial links in Arabic where possible.',
      'Track backlinks with Google Search Console and a backlink tool.',
      'Keep the website content fresh and promote it through partner mentions and local Arabic business references.',
      'Verify local citations and reinforce the Google Business Profile presence.',
    ],
  },
  ar: {
    title: 'تقرير تدقيق SEO وخطة التصنيف',
    description:
      'تقرير تدقيق SEO وخطة تحسين ترتيب موقع شركة المقاولات الفنية البحرية مع تركيز على السيو الخارجي وسلسلة الروابط.',
    heroTitle: 'تقرير تدقيق SEO وخطة التصنيف',
    heroSubtitle:
      'خطة مركزة لتحسين سلطة الموقع الخارجية والروابط والظهور في محركات البحث.',
    summaryTitle: 'لماذا هذا مهم',
    summaryContent:
      'الموقع قوي تقنيًا وفي المحتوى وSEO الداخلي. الفجوة الأساسية في الترتيب هي سلطة السيو الخارجية: الروابط الخارجية، وذكر العلامة التجارية، والإشارات المحلية. تعرض هذه الصفحة الخطوات اللازمة لتحسين الترتيب والوصول إلى النتائج الأولى.',
    sections: [
      {
        heading: 'درجات التدقيق الحالية',
        items: [
          'الدرجة العامة لـ SEO: 85/100',
          'التقنية: 83/100',
          'السيو الداخلي: 100/100',
          'المحتوى: 100/100',
          'السيو الخارجي: 52/100',
          'السيو المحلي: 90/100',
        ],
      },
      {
        heading: 'المشاكل الأساسية في السيو الخارجي',
        items: [
          'سلطة نطاق منخفضة: 30/100',
          'نقص الروابط النوعية من المواقع التحريرية',
          'الحاجة إلى إشارات أقوى للعلامة التجارية عبر مواقع موثوقة',
          'فرصة لتعزيز الاستشهادات المحلية وإشارات المراجعات',
        ],
      },
      {
        heading: 'مجالات التركيز لتحسين الترتيب',
        items: [
          'بناء روابط ذات صلة من مصادر صناعية ومحلية، خاصة المواقع العربية.',
          'إنشاء محتوى قابل للربط وحملات التواصل باللغة العربية تستهدف بحث المملكة.',
          'مراقبة الروابط وفقدان الروابط أسبوعيًا.',
          'حماية الموقع من الروابط الضارة وتخفيف العلامة التجارية.',
        ],
      },
    ],
    actionsTitle: 'الخطوات التالية لتحسين الترتيب',
    actions: [
      'إعداد حملة تواصل لبناء الروابط مع 20-50 هدفًا ذا صلة، بما في ذلك مواقع عربية ومحلية.',
      'استخدام التدوين الضيف، وإدراج الصفحات المرجعية، وروابط التوصيات باللغة العربية عند الإمكان.',
      'تتبع الروابط باستخدام Google Search Console وأداة الروابط الخلفية.',
      'الحفاظ على تحديث المحتوى والترويج له عبر الشركاء والإشارات العربية المحلية.',
      'التحقق من الاستشهادات المحلية وتعزيز وجود ملف تعريف Google Business.',
    ],
  },
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = locales.includes(params.locale as Locale) ? (params.locale as Locale) : 'en';
  const page = content[locale];

  return {
    title: page.title,
    description: page.description,
  };
}

export default function SeoAuditPage({ params }: { params: { locale: string } }) {
  const locale = locales.includes(params.locale as Locale) ? (params.locale as Locale) : 'en';
  if (!locales.includes(locale)) {
    notFound();
  }

  const copy = content[locale];
  const isArabic = locale === 'ar';

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} className="bg-slate-950 text-slate-100 min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="bg-slate-900/95 border border-slate-800 rounded-[32px] p-10 shadow-2xl shadow-slate-950/40 mb-12">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300 mb-4">SEO Audit</p>
          <h1 className="text-4xl font-semibold leading-tight text-white mb-6">{copy.heroTitle}</h1>
          <p className="text-lg leading-8 text-slate-300">{copy.heroSubtitle}</p>
        </section>

        <section className="grid gap-10">
          <article className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-xl">
            <h2 className="text-3xl font-semibold text-white mb-4">{copy.summaryTitle}</h2>
            <p className="text-slate-300 leading-8">{copy.summaryContent}</p>
          </article>

          {copy.sections.map((section) => (
            <article key={section.heading} className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">{section.heading}</h3>
              <ul className="space-y-3 text-slate-300 list-disc list-inside">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-4">{copy.actionsTitle}</h3>
            <ol className="space-y-3 text-slate-300 list-decimal list-inside">
              {copy.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ol>
          </article>
        </section>
      </div>
    </main>
  );
}
