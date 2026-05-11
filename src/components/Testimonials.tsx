"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import { User, Users, Star } from "lucide-react";

type TestimonialsProps = {
  locale: "en" | "ar";
};

type Testimonial = {
  name: string;
  gender: "male" | "female";
  quote: string;
};

const testimonialsContent: Record<"en" | "ar", Testimonial[]> = {
  en: [
    {
      name: "Fahad Al-Harbi",
      gender: "male",
      quote:
        "كول نكس - COOL NEX delivered outstanding maintenance and coating services for our industrial site. Their professionalism and quality exceeded expectations.",
    },
    {
      name: "Sarah Al-Qahtani",
      gender: "female",
      quote:
        "The team handled our thermal insulation and corrosion protection project flawlessly. Highly reliable and committed to deadlines.",
    },
    {
      name: "Mohammed Al-Dosari",
      gender: "male",
      quote:
        "Excellent technical expertise in marine contracting. Their solutions improved our operational efficiency significantly.",
    },
    {
      name: "Reem Al-Otaibi",
      gender: "female",
      quote:
        "From blasting to protective coatings, the service quality was exceptional. A trusted partner in Saudi Arabia.",
    },
    {
      name: "Khalid Al-Shammari",
      gender: "male",
      quote:
        "Their equipment maintenance program saved us both time and cost. Strongly recommended for industrial projects.",
    },
    {
      name: "Noura Al-Ghamdi",
      gender: "female",
      quote:
        "Professional, skilled, and dedicated. كول نكس - COOL NEX stands out as one of the best marine contractors in the region.",
    },
  ],
  ar: [
    {
      name: "فهد الحربي",
      gender: "male",
      quote:
        "قدمت شركة كول نكس - COOL NEX خدمات صيانة وطلاءات وقائية متميزة لموقعنا الصناعي. احترافية وجودة فاقت التوقعات.",
    },
    {
      name: "سارة القحطاني",
      gender: "female",
      quote:
        "نفذ الفريق مشروع العزل الحراري والحماية من التآكل بكفاءة عالية والتزام كامل بالمواعيد.",
    },
    {
      name: "محمد الدوسري",
      gender: "male",
      quote:
        "خبرة فنية ممتازة في المقاولات البحرية، وحلولهم ساهمت بشكل كبير في تحسين كفاءة التشغيل لدينا.",
    },
    {
      name: "ريم العتيبي",
      gender: "female",
      quote:
        "من السفع الرملي إلى الطلاءات الواقية، كانت جودة الخدمة استثنائية. شريك موثوق في السعودية.",
    },
    {
      name: "خالد الشمري",
      gender: "male",
      quote:
        "برنامج صيانة المعدات لديهم وفر علينا الوقت والتكاليف. أوصي بهم للمشاريع الصناعية.",
    },
    {
      name: "نورة الغامدي",
      gender: "female",
      quote:
        "فريق محترف وماهر وملتزم. شركة كول نكس - COOL NEX من أفضل شركات المقاولات الفنية البحرية في المنطقة.",
    },
  ],
};

export default function Testimonials({ locale }: TestimonialsProps) {
  const isRtl = locale === "ar";
  const testimonials = testimonialsContent[locale];

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    rtl: isRtl,
  };

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full py-20 px-6 lg:px-14 bg-[#f8fafc]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0d4d66]">
            {isRtl ? "آراء عملاء كول نكس - COOL NEX" : "كول نكس - COOL NEX Customer Reviews"}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            {isRtl
              ? "تجارب حقيقية من شركائنا وعملائنا في مختلف المشاريع البحرية والصناعية."
              : "Real experiences from our partners and clients across marine and industrial projects."}
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((user, index) => (
            <div key={index} className="px-3">
              <div className="bg-white border border-gray-200 rounded-3xl p-7 shadow-md min-h-[280px] flex flex-col justify-between">
                {/* User info */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {user.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">5.0</span>
                    </div>
                  </div>

                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0d4d66] to-[#1a6f91] flex items-center justify-center text-white shadow-lg">
                    {user.gender === "female" ? (
                      <Users className="w-8 h-8" />
                    ) : (
                      <User className="w-8 h-8" />
                    )}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-600 leading-8 text-base">
                  {user.quote}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}