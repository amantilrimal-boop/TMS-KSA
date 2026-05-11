import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Bot,
  Building2,
  ChartNoAxesCombined,
  Code2,
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  PlaySquare,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Workflow,
  Wrench,
} from "lucide-react";

type Locale = "en" | "ar";

type ServiceItem = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  icon: LucideIcon;
};

type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Copy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  heroStats: Array<{ value: string; label: string }>;
  heroPanelTitle: string;
  heroPanelDescription: string;
  heroPanelPoints: string[];
  sectionIntro: string;
  sectionTitle: string;
  sectionDescription: string;
  services: ServiceItem[];
  spotlightEyebrow: string;
  spotlightTitle: string;
  spotlightDescription: string;
  spotlightBullets: string[];
  highlights: Highlight[];
  whyTitle: string;
  whyDescription: string;
  whyPoints: string[];
  techTitle: string;
  techDescription: string;
  technologies: string[];
  faqTitle: string;
  faqDescription: string;
  faqs: Array<{ question: string; answer: string }>;
};

const content: Record<Locale, Copy> = {
  en: {
    eyebrow: "TM Service",
    title: "كول نكس - COOL NEX",
    description:
      "كول نكس - COOL NEX is one of the leading companies in the KSA market in the field of protective coatings, abrasive blasting, onshore & offshore works, corrosion protection, thermal insulation, and equipment maintenance.",
    primaryCta: "Our Services",
    secondaryCta: "Contact Us",
    heroStats: [
      { value: "4353+", label: "Worldwide Clients" },
      { value: "Vision 2030", label: "Saudi-aligned Solutions" },
      { value: "Trusted", label: "Marine Contracting" },
    ],
    heroPanelTitle: "كول نكس - COOL NEX Service",
    heroPanelDescription:
      "Comprehensive industrial and marine contracting services focused on asset protection, maintenance, and operational continuity.",
    heroPanelPoints: [
      "Protective coatings and corrosion control",
      "Offshore and onshore maintenance solutions",
      "Thermal insulation and equipment servicing",
    ],
    sectionIntro: "Our Services",
    sectionTitle: "Discover Our Premium Marine & Industrial Services",
    sectionDescription:
      "At كول نكس - COOL NEX, we are committed to delivering protective coatings, abrasive blasting, onshore & offshore works, corrosion protection, thermal insulation, and equipment maintenance across Saudi Arabia.",
    services: [
      {
        slug: "protective-coatings",
        name: "Protective Coatings",
        kicker: "Coatings",
        description:
          "Durable protective coatings for marine, industrial, and structural assets.",
        icon: ShieldCheck,
      },
      {
        slug: "abrasive-blasting",
        name: "Abrasive Blasting",
        kicker: "Blasting",
        description:
          "Professional abrasive blasting services for surface preparation and restoration.",
        icon: Blocks,
      },
      {
        slug: "offshore-works",
        name: "Offshore Works",
        kicker: "Offshore",
        description:
          "Skilled offshore maintenance and fabrication services for marine operations.",
        icon: Globe,
      },
      {
        slug: "corrosion-protection",
        name: "Corrosion Protection",
        kicker: "Protection",
        description:
          "Comprehensive corrosion protection systems to extend asset life and reduce downtime.",
        icon: ShieldCheck,
      },
      {
        slug: "thermal-insulation",
        name: "Thermal Insulation",
        kicker: "Insulation",
        description:
          "Thermal insulation solutions designed for energy efficiency and safety.",
        icon: Palette,
      },
      {
        slug: "equipment-maintenance",
        name: "Equipment Maintenance",
        kicker: "Maintenance",
        description:
          "Preventive and corrective maintenance services for industrial equipment and systems.",
        icon: Wrench,
      },
    ],
    spotlightEyebrow: "Integrated Maintenance",
    spotlightTitle: "Complete Marine & Industrial Coverage",
    spotlightDescription:
      "From protective coatings to equipment maintenance and support services, كول نكس - COOL NEX delivers reliable solutions that protect assets and optimize performance.",
    spotlightBullets: [
      "Finishing, structural coatings, and surface protection services",
      "HVAC maintenance, plumbing, and electrical support",
      "Pest control, water tank cleaning, and insulation services",
      "Integrated solutions for a healthier and safer environment",
    ],
    highlights: [
      {
        title: "Protective Coatings",
        description:
          "Advanced coating systems designed to shield assets from corrosion and wear.",
        icon: ShieldCheck,
      },
      {
        title: "Abrasive Blasting",
        description:
          "Surface preparation services that restore infrastructure and prepare it for long-lasting protection.",
        icon: Blocks,
      },
      {
        title: "Offshore Works",
        description:
          "Specialized offshore fabrication and maintenance services for marine projects.",
        icon: Globe,
      },
      {
        title: "Equipment Maintenance",
        description:
          "Rapid and preventive maintenance solutions that keep industrial equipment operating smoothly.",
        icon: Wrench,
      },
    ],
    whyTitle: "Why Choose كول نكس - COOL NEX?",
    whyDescription:
      "كول نكس - COOL NEX combines technical expertise, marine contracting experience, and Saudi-focused services to deliver projects with safety, quality, and reliability.",
    whyPoints: [
      "Specialized marine and industrial contracting capabilities",
      "Experience in protective coatings and corrosion control",
      "Safety-first execution across onshore and offshore works",
      "Integrated maintenance services for long-term asset health",
    ],
    techTitle: "Core Service Offerings",
    techDescription:
      "Our service portfolio spans the technical and operational disciplines required to protect and maintain your assets in demanding environments.",
    technologies: [
      "Protective Coatings",
      "Abrasive Blasting",
      "Offshore Works",
      "Corrosion Protection",
      "Thermal Insulation",
      "Equipment Maintenance",
    ],
    faqTitle: "Frequently Asked Questions",
    faqDescription: "Answers about our industrial and marine contracting services.",
    faqs: [
      {
        question: "What industries does كول نكس - COOL NEX serve?",
        answer:
          "كول نكس - COOL NEX serves marine, industrial, and commercial clients across Saudi Arabia, with expertise in protective coatings, blasting, insulation, and equipment maintenance.",
      },
      {
        question: "Do you support both onshore and offshore projects?",
        answer:
          "Yes. We provide certified teams and resources for safe and efficient work on both onshore and offshore sites.",
      },
      {
        question: "How does كول نكس - COOL NEX manage corrosion protection?",
        answer:
          "We deliver tailored corrosion protection systems including surface preparation, coatings, and monitoring strategies to extend asset life.",
      },
      {
        question: "Can كول نكس - COOL NEX handle preventive maintenance?",
        answer:
          "Yes. Our preventive and corrective maintenance services are designed to reduce downtime and maintain equipment reliability.",
      },
      {
        question: "Do you offer water tank and cleaning services?",
        answer:
          "Yes. We offer water tank cleaning, pest control, and related protection services to support healthier and safer environments.",
      },
      {
        question: "How can I request a quote?",
        answer:
          "Contact us through the form or call us directly to arrange a site survey and receive a customized project proposal.",
      },
    ],
  },
  ar: {
    eyebrow: "خدمات كول نكس - COOL NEX",
    title: "كول نكس - COOL NEX",
    description:
      "تعد كول نكس - COOL NEX من الشركات الرائدة في سوق المملكة في مجال الطلاء الواقي، السفع الرملي، الأعمال البحرية والبرية، الحماية من التآكل، العزل الحراري، وصيانة المعدات.",
    primaryCta: "خدماتنا",
    secondaryCta: "اتصل بنا",
    heroStats: [
      { value: "+4353", label: "عملاء على مستوى العالم" },
      { value: "رؤية 2030", label: "حلول متوافقة مع المملكة" },
      { value: "موثوق", label: "مقاولات بحرية" },
    ],
    heroPanelTitle: "خدمة كول نكس - COOL NEX",
    heroPanelDescription:
      "خدمات مقاولات صناعية وبحرية متكاملة تركز على حماية الأصول والصيانة واستمرارية التشغيل.",
    heroPanelPoints: [
      "الطلاءات الواقيه والتحكم في التآكل",
      "حلول صيانة بحرية وبرية",
      "العزل الحراري وخدمة المعدات",
    ],
    sectionIntro: "خدماتنا",
    sectionTitle: "اكتشف خدماتنا البحرية والصناعية المتميزة",
    sectionDescription:
      "في كول نكس - COOL NEX للمقاولات الفنية البحرية، نلتزم بتقديم الطلاء الواقي، السفع الرملي، الأعمال البحرية والبرية، الحماية من التآكل، العزل الحراري، وصيانة المعدات في جميع أنحاء المملكة.",
    services: [
      {
        slug: "protective-coatings",
        name: "الطلاءات الواقية",
        kicker: "طلاءات",
        description:
          "طلاءات واقية متينة للأصول البحرية والصناعية والهيكلية.",
        icon: ShieldCheck,
      },
      {
        slug: "abrasive-blasting",
        name: "السفع الرملي",
        kicker: "سفع",
        description:
          "خدمات السفع الرملي المهنية لتحضير الأسطح وترميمها.",
        icon: Blocks,
      },
      {
        slug: "offshore-works",
        name: "الأعمال البحرية",
        kicker: "بحرية",
        description:
          "خدمات صيانة وتصنيع بحرية متخصصة للمشاريع البحرية.",
        icon: Globe,
      },
      {
        slug: "corrosion-protection",
        name: "حماية من التآكل",
        kicker: "حماية",
        description:
          "أنظمة الحماية من التآكل الشاملة لإطالة عمر الأصول وتقليل التعطل.",
        icon: ShieldCheck,
      },
      {
        slug: "thermal-insulation",
        name: "العزل الحراري",
        kicker: "عزل",
        description:
          "حلول العزل الحراري المصممة لكفاءة الطاقة والسلامة.",
        icon: Palette,
      },
      {
        slug: "equipment-maintenance",
        name: "صيانة المعدات",
        kicker: "صيانة",
        description:
          "خدمات الصيانة الوقائية والتصحيحية للمعدات الصناعية والأنظمة.",
        icon: Wrench,
      },
    ],
    spotlightEyebrow: "الصيانة المتكاملة",
    spotlightTitle: "تغطية بحرية وصناعية كاملة",
    spotlightDescription:
      "من الطلاء الواقي إلى صيانة المعدات وخدمات الدعم، توفر كول نكس - COOL NEX حلولاً موثوقة لحماية الأصول وتحسين الأداء.",
    spotlightBullets: [
      "التشطيب والطلاءات والهياكل",
      "صيانة التكييف والسباكة والكهرباء",
      "مكافحة الآفات وتنظيف خزانات المياه وخدمات العزل",
      "حلول متكاملة لبيئة أكثر صحة وأماناً",
    ],
    highlights: [
      {
        title: "الطلاءات الواقية",
        description:
          "أنظمة طلاء متقدمة لحماية الأصول من التآكل والتلف.",
        icon: ShieldCheck,
      },
      {
        title: "السفع الرملي",
        description:
          "خدمات تحضير الأسطح التي تعيد البنية وتجعلها جاهزة للحماية الطويلة.",
        icon: Blocks,
      },
      {
        title: "الأعمال البحرية",
        description:
          "خدمات تنفيذ وصيانة بحرية متخصصة للمشاريع البحرية.",
        icon: Globe,
      },
      {
        title: "صيانة المعدات",
        description:
          "حلول صيانة سريعة ووقائية للحفاظ على تشغيل المعدات بسلاسة.",
        icon: Wrench,
      },
    ],
    whyTitle: "لماذا تختار كول نكس - COOL NEX؟",
    whyDescription:
      "تجمع كول نكس - COOL NEX بين الخبرة الفنية والمقاولات البحرية والتركيز على السوق السعودي لتقديم مشاريع آمنة وموثوقة وعالية الجودة.",
    whyPoints: [
      "قدرات متخصصة في المقاولات البحرية والصناعية",
      "خبرة في الطلاء الواقي والتحكم في التآكل",
      "تنفيذ يضع السلامة في المقام الأول للأعمال البحرية والبرية",
      "خدمات صيانة متكاملة لصحة الأصول على المدى الطويل",
    ],
    techTitle: "الخدمات الأساسية",
    techDescription:
      "يتضمن نطاق خدماتنا التخصصات الفنية والتشغيلية اللازمة لحماية وصيانة الأصول في البيئات الصعبة.",
    technologies: [
      "الطلاءات الواقية",
      "السفع الرملي",
      "الأعمال البحرية",
      "الحماية من التآكل",
      "العزل الحراري",
      "صيانة المعدات",
    ],
    faqTitle: "الأسئلة الشائعة",
    faqDescription: "إجابات حول خدماتنا البحرية والصناعية.",
    faqs: [
      {
        question: "ما الصناعات التي تخدمها كول نكس - COOL NEX؟",
        answer:
          "تخدم كول نكس - COOL NEX عملاء من القطاع البحري والصناعي والتجاري في السعودية بخبرات في الطلاء الواقي والسفع الرملي والعزل والصيانة.",
      },
      {
        question: "هل تدعمون المشاريع البرية والبحرية؟",
        answer:
          "نعم. نقدم فرقاً معتمدة وموارد للعمل الآمن والفعال في المواقع البرية والبحرية.",
      },
      {
        question: "كيف تدير كول نكس - COOL NEX حماية التآكل؟",
        answer:
          "نقدم أنظمة حماية التآكل المخصصة بما في ذلك تحضير الأسطح والطلاءات واستراتيجيات المراقبة لإطالة عمر الأصول.",
      },
      {
        question: "هل يمكن لـ كول نكس - COOL NEX تقديم صيانة وقائية؟",
        answer:
          "نعم. خدماتنا الوقائية والتصحيحية تهدف إلى تقليل التوقفات والحفاظ على موثوقية المعدات.",
      },
      {
        question: "هل تقدمون خدمات تنظيف خزانات المياه؟",
        answer:
          "نعم. نقدم تنظيف خزانات المياه ومكافحة الآفات وخدمات الحماية لدعم بيئات أكثر صحة وأماناً.",
      },
      {
        question: "كيف يمكنني طلب عرض سعر؟",
        answer:
          "تواصل معنا عبر النموذج أو الهاتف لترتيب زيارة موقع والحصول على عرض مشروع مخصص.",
      },
    ],
  },
};

export default function ServicesPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const isRTL = locale === "ar";

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(18,158,196,0.16),_transparent_34%),linear-gradient(180deg,_#03101c_0%,_#061a28_38%,_#081422_100%)] text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8 lg:pb-24 lg:pt-44">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1 text-sm tracking-[0.2em] text-cyan-100 uppercase">
              {copy.eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={`/${locale}/service#all-services`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b03c] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#e2bf55]"
              >
                {copy.primaryCta}
                <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/14"
              >
                {copy.secondaryCta}
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {copy.heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl"
                >
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="rounded-[2rem] border border-white/10 bg-white/7 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">{copy.heroPanelTitle}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{copy.spotlightTitle}</h2>
              </div>
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                <ShieldCheck className="h-7 w-7" />
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-200">{copy.heroPanelDescription}</p>

            <div className="mt-6 space-y-3">
              {copy.heroPanelPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl bg-slate-950/35 px-4 py-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-100">{point}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* <section id="all-services" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">{copy.sectionIntro}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{copy.sectionTitle}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">{copy.sectionDescription}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {copy.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                id={service.slug}
                key={service.slug}
                className="group rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[linear-gradient(180deg,rgba(16,185,229,0.14),rgba(255,255,255,0.05))]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100">
                    {service.kicker}
                  </span>
                  <div className="rounded-2xl bg-cyan-300/12 p-3 text-cyan-100">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">{service.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section> */}

      {/* <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-[#d7b03c]/20 bg-[linear-gradient(180deg,rgba(215,176,60,0.15),rgba(255,255,255,0.04))] p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[#ecd57f]">{copy.spotlightEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{copy.spotlightTitle}</h2>
            <p className="mt-5 text-base leading-8 text-slate-200">{copy.spotlightDescription}</p>

            <div className="mt-8 space-y-4">
              {copy.spotlightBullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-[#f3cd56]" />
                  <span className="text-sm leading-6 text-white/90">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {copy.highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl"
                >
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">{copy.whyTitle}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{copy.whyDescription}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.whyPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5 text-sm leading-7 text-slate-100"
              >
                <div className="mb-4 inline-flex rounded-xl bg-cyan-300/10 p-2 text-cyan-200">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-xl sm:p-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.techTitle}</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{copy.techDescription}</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {copy.technologies.map((technology) => (
              <div
                key={technology}
                className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-center text-sm font-medium text-white/90"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.faqTitle}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">{copy.faqDescription}</p>
        </div>

        <div className="mt-10 space-y-4">
          {copy.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white marker:hidden">
                <span>{faq.question}</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-cyan-200 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section> */}

      {/* <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,182,212,0.16),rgba(215,176,60,0.18))] p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">{copy.spotlightEyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{copy.spotlightTitle}</h2>
              <p className="mt-4 text-base leading-8 text-white/80">{copy.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                {copy.secondaryCta}
              </Link>
              <Link
                href={`/${locale}/service#all-services`}
                className="inline-flex items-center justify-center rounded-full border border-slate-950/15 bg-white/55 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/75"
              >
                {copy.primaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}