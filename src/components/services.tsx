import Image from "next/image";

type Locale = "en" | "ar";

type Feature = {
  title: string;
  description: string;
  image: string;
};

const content: Record<
  Locale,
  { eyebrow: string; title: string; description: string; features: Feature[] }
> = {
  en: {
    eyebrow: "Our Services",
    title: "Discover Our Premium Marine & Industrial Services",
    description:
      "At TMS (Technical Marine Contracting), we are committed to delivering protective coatings, abrasive blasting, onshore & offshore works, corrosion protection, thermal insulation, and equipment maintenance across Saudi Arabia.",
    features: [
      {
        title: "Protective Coatings",
        description:
          "Durable protective coatings for marine, industrial, and structural assets.",
        image: "/services/ser/protective-medical.jpg",
      },
      {
        title: "Abrasive Blasting",
        description:
          "Professional abrasive blasting services for surface preparation and restoration.",
        image: "/services/ser/deep.jpg",
      },
      {
        title: "Offshore Works",
        description:
          "Skilled offshore maintenance and fabrication services for marine operations.",
        image: "/services/ser/water-tank.jpg",
      },
      {
        title: "Corrosion Protection",
        description:
          "Comprehensive corrosion protection systems to extend asset life and reduce downtime.",
        image: "/services/ser/matrees-cleaning.jpg",
      },
      {
        title: "Thermal Insulation",
        description:
          "Thermal insulation solutions designed for energy efficiency and safety.",
        image: "/services/ser/cleaner-cleaning.jpg",
      },
      {
        title: "Equipment Maintenance",
        description:
          "Preventive and corrective maintenance services for industrial equipment and systems.",
        image: "/services/ser/furniture.jpg",
      },
    ],
  },

  ar: {
    eyebrow: "خدماتنا",
    title: "اكتشف خدماتنا المتميزة البحرية والصناعية",
    description:
      "في شركة TMS للمقاولات الفنية البحرية، نلتزم بتقديم خدمات الطلاء الواقي، السفع الرملي، الأعمال البحرية والبرية، الحماية من التآكل، العزل الحراري، وصيانة المعدات في جميع أنحاء المملكة.",
    features: [
      {
        title: "الطلاءات الواقية",
        description:
          "طلاءات واقية متينة للأصول البحرية والصناعية والهيكلية.",
        image: "/services/ser/protective-medical.jpg",
      },
      {
        title: "السفع الرملي",
        description:
          "خدمات السفع الرملي المهنية لتحضير الأسطح وترميمها بأعلى جودة.",
        image: "/services/ser/deep.jpg",
      },
      {
        title: "الأعمال البحرية",
        description:
          "خدمات الصيانة والتصنيع البحرية المتخصصة لمختلف العمليات البحرية.",
        image: "/services/ser/water-tank.jpg",
      },
      {
        title: "الحماية من التآكل",
        description:
          "أنظمة متكاملة لحماية الأصول من التآكل وإطالة عمرها التشغيلي.",
        image: "/services/ser/matrees-cleaning.jpg",
      },
      {
        title: "العزل الحراري",
        description:
          "حلول عزل حراري مصممة لكفاءة الطاقة والسلامة التشغيلية.",
        image: "/services/ser/cleaner-cleaning.jpg",
      },
      {
        title: "صيانة المعدات",
        description:
          "خدمات الصيانة الوقائية والتصحيحية للمعدات الصناعية والأنظمة.",
        image: "/services/ser/furniture.jpg",
      },
    ],
  },
};

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group p-4 rounded-[28px] h-full">
      <div
        className="relative z-10 w-full rounded-[26px] bg-white/[0.08] backdrop-blur-xl p-8 h-full overflow-hidden border border-white/20"
        style={{
          boxShadow:
            "0 8px 32px 0 rgba(100,200,255,0.15), inset 0 1px 0 0 rgba(255,255,255,0.3), inset 0 -1px 0 0 rgba(255,255,255,0.1), 0 20px 60px -15px rgba(0,0,0,0.2)",
        }}
      >
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image
                src={feature.image}
                alt={feature.title}
                width={220}
                height={200}
                className="w-auto h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <h3 className="md:text-2xl text-xl font-bold text-white mb-3 tracking-tight">
            {feature.title}
          </h3>

          <p className="text-base text-white/90 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Services({ locale }: { locale: Locale }) {
  const t = content[locale];
  const isRTL = locale === "ar";

  const row1 = t.features.slice(0, 2);
  const row2 = t.features.slice(2, 4);
  const row3 = t.features.slice(4, 6);

  return (
    <section
      className="relative overflow-hidden rounded-3xl py-10 mx-4 lg:mx-8 my-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#0a0e28] via-[#050a1f] to-black" />

      <div className="relative z-10 text-center mb-20 px-4 mt-8">
        <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm mb-3">
          {t.eyebrow}
        </p>

        <h2 className="lg:text-5xl md:text-4xl text-3xl text-white font-semibold mb-4 max-w-4xl mx-auto leading-tight">
          {t.title}
        </h2>

        <p className="text-white/75 max-w-2xl mx-auto text-base leading-relaxed px-4">
          {t.description}
        </p>
      </div>

      <div className="relative hidden lg:block max-w-6xl mx-auto px-4 z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Image
            src="/logo.png"
            alt="TMS logo"
            width={150}
            height={150}
            className="w-36 h-36 object-contain rounded-3xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-10 mb-24">
          {row1.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-10 mb-24 items-center">
          <FeatureCard feature={row2[0]} />
          <div />
          <FeatureCard feature={row2[1]} />
        </div>

        <div className="grid grid-cols-2 gap-10">
          {row3.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>
      </div>

      <div className="lg:hidden max-w-md mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-6">
          {t.features.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}