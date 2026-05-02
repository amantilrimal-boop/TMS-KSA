export type Locale = 'en' | 'ar';

type LocalizedPage = {
  title: string;
  description: string;
  overview: string[];
  sectionTitle: string;
  sectionText: string;
  bullets: string[];
  actionPrimary: string;
  actionSecondary: string;
};

type PageDataItem = {
  slug: string;
  image: string;
  copy: Record<Locale, LocalizedPage>;
};

const commonOverviewEn = [
  'Certified professionals who care for your home environment.',
  'Transparent pricing and flexible scheduling for every service.',
  'Responsive support with fast booking and follow-up care.',
];

const commonOverviewAr = [
  'محترفون معتمدون يعتنون ببيئة منزلك.',
  'أسعار واضحة وجدولة مرنة لكل خدمة.',
  'دعم سريع مع حجز ومتابعة مريحة.',
];

const commonBulletsEn = [
  'Dedicated customer support and service coordination.',
  'Health-first cleaning and treatment solutions.',
  'Quality assurance on every job with follow-up checks.',
];

const commonBulletsAr = [
  'دعم عملاء مخصص وتنسيق الخدمة.',
  'حلول تنظيف وعلاج تركز على الصحة أولاً.',
  'ضمان جودة في كل مهمة مع فحوصات متابعة.',
];

const commonSectionTitleEn = 'What makes this service special';
const commonSectionTitleAr = 'ماذا يميز هذه الخدمة';

const commonSectionTextEn =
  'We combine experience, the right tools, and a clear process to deliver results you can trust. Every service is tailored to your home, your schedule, and the level of care you expect.';

const commonSectionTextAr =
  'نجمع بين الخبرة والأدوات المناسبة وعملية واضحة لتقديم نتائج موثوقة. كل خدمة مصممة لمنزلك وجدولك ومستوى العناية الذي تتوقعه.';

const featureItemsEn = [
  {
    title: 'Trusted teams',
    description: 'Our technicians are trained, insured, and equipped for your service needs.',
  },
  {
    title: 'Flexible plans',
    description: 'One-time, recurring, and contract-based services so everything fits your routine.',
  },
  {
    title: 'Safety and hygiene',
    description: 'We use safe products and follow strict hygiene protocols for every visit.',
  },
];

const featureItemsAr = [
  {
    title: 'فرق موثوقة',
    description: 'فريقنا مدرّب ومؤمن ومجهز لتلبية احتياجاتك الخدمية.',
  },
  {
    title: 'خطط مرنة',
    description: 'خدمات مرة واحدة أو متكررة أو عقود كاملة لتناسب جدولك.',
  },
  {
    title: 'السلامة والنظافة',
    description: 'نستخدم منتجات آمنة ونتبع بروتوكولات نظافة صارمة في كل زيارة.',
  },
];

function buildPage(
  slug: string,
  image: string,
  enTitle: string,
  arTitle: string,
  enDescription: string,
  arDescription: string,
) {
  return {
    slug,
    image,
    copy: {
      en: {
        title: enTitle,
        description: enDescription,
        overview: commonOverviewEn,
        sectionTitle: commonSectionTitleEn,
        sectionText: commonSectionTextEn,
        bullets: commonBulletsEn,
        actionPrimary: 'Book Now',
        actionSecondary: 'Contact Us',
      },
      ar: {
        title: arTitle,
        description: arDescription,
        overview: commonOverviewAr,
        sectionTitle: commonSectionTitleAr,
        sectionText: commonSectionTextAr,
        bullets: commonBulletsAr,
        actionPrimary: 'احجز الآن',
        actionSecondary: 'اتصل بنا',
      },
    },
  };
}

const pageEntries = [
  buildPage(
    'home-services',
    '/services/ser/dd.jpg',
    'Home Services',
    'خدمات المنزل',
    'A complete home wellness and maintenance experience with trusted cleaning, pest control, and air quality solutions.',
    'تجربة شاملة للعناية المنزلية والصيانة مع خدمات تنظيف ومكافحة حشرات وتحسين جودة الهواء.',
  ),
  buildPage(
    'packages-contracts',
    '/services/ser/dd.jpg',
    'Packages & Contracts',
    'الحزم والعقود',
    'Flexible maintenance packages and long-term home care contracts designed for every budget and home type.',
    'حزم صيانة مرنة وعقود رعاية منزلية طويلة المدى تناسب كل ميزانية ونوع منزل.',
  ),
  buildPage(
    'furniture-cleaning-packages',
    '/services/ser/furniture.jpg',
    'Furniture Cleaning Packages',
    'باقات تنظيف الأثاث',
    'Specialized furniture cleaning packages to refresh sofas, chairs, mattresses, and upholstery with deep care.',
    'باقات تنظيف متخصصة للأثاث لتجديد الأرائك والكراسي والمراتب والتنجيد بعناية عميقة.',
  ),
  buildPage(
    'ac-aftercare-contract',
    '/services/ser/spray-bottle2.jpg',
    'AC Aftercare Contract',
    'عقد العناية اللاحقة للمكيفات',
    'Annual aftercare plans for air conditioners that maintain comfort, efficiency, and indoor air quality year-round.',
    'خطط العناية اللاحقة السنوية للمكيفات للحفاظ على الراحة والكفاءة وجودة الهواء طوال العام.',
  ),
  buildPage(
    'ac-amc',
    '/services/ser/spray-bottle2.jpg',
    'AC Maintenance Contract',
    'عقد صيانة المكيفات السنوي',
    'Preventive AC maintenance and service contracts that keep your cooling systems running smoothly.',
    'عقود صيانة المكيفات الوقائية للحفاظ على تشغيل أنظمة التبريد بسلاسة.',
  ),
  buildPage(
    'pest-control-contracts',
    '/services/ser/hashrat.jpg',
    'Pest Control Contracts',
    'عقود مكافحة الحشرات',
    'Comprehensive pest control contracts for homes and apartments that protect your family all year long.',
    'عقود مكافحة الحشرات الشاملة للمنازل والشقق لحماية أسرتك طوال العام.',
  ),
  buildPage(
    'furniture-deep-cleaning-contract',
    '/services/ser/furniture.jpg',
    'Furniture Deep Cleaning Contract',
    'عقد تنظيف الأثاث العميق',
    'Deep cleaning contracts that restore furniture hygiene, freshness, and comfort across the whole home.',
    'عقود تنظيف عميق تجدد نظافة الأثاث وانتعاشه وراحته في كامل المنزل.',
  ),
  buildPage(
    'ac-services',
    '/services/ser/spray-bottle2.jpg',
    'AC Services',
    'خدمات المكيفات',
    'Full air conditioning services that include cleaning, repair, installation, and smart air quality solutions.',
    'خدمات شاملة للمكيفات تشمل التنظيف والإصلاح والتركيب وحلول جودة الهواء الذكية.',
  ),
  buildPage(
    'ac-cleaning',
    '/services/ser/spray-bottle2.jpg',
    'AC Cleaning & Maintenance',
    'تنظيف وصيانة المكيفات',
    'Professional AC cleaning to improve cooling performance, airflow, and indoor air quality.',
    'تنظيف احترافي للمكيفات لتحسين أداء التبريد وتدفق الهواء وجودة الهواء الداخلي.',
  ),
  buildPage(
    'ac-coil-cleaning',
    '/services/ser/spray-bottle2.jpg',
    'AC Coil Cleaning',
    'تنظيف ملف المكيف',
    'Thorough cleaning of AC coils to prevent blockages and improve energy efficiency.',
    'تنظيف شامل لملفات المكيف لمنع الانسداد وتحسين كفاءة الطاقة.',
  ),
  buildPage(
    'ac-repair',
    '/services/ser/spray-bottle2.jpg',
    'AC Repair & Maintenance',
    'إصلاح وصيانة المكيفات',
    'Reliable AC repair and maintenance services to keep your system working when you need it most.',
    'خدمات إصلاح وصيانة موثوقة للمكيفات للحفاظ على عمل نظامك عند الحاجة.',
  ),
  buildPage(
    'mold-removal',
    '/services/ser/spray-bottle2.jpg',
    'Mold Removal',
    'إزالة العفن',
    'Safe mold removal solutions for homes, bathrooms, and air systems to protect health and comfort.',
    'حلول آمنة لإزالة العفن من المنازل والحمامات وأنظمة الهواء لحماية الصحة والراحة.',
  ),
  buildPage(
    'ac-duct-liner',
    '/services/ser/spray-bottle2.jpg',
    'AC Duct Liner Services',
    'خدمات بطانة مجاري المكيف',
    'Duct liner installation and repair for quieter, cleaner, and better-performing AC systems.',
    'تركيب وإصلاح بطانات مجاري المكيف لنظام أكثر هدوءًا ونظافة وأداءً أفضل.',
  ),
  buildPage(
    'ac-installation',
    '/services/ser/spray-bottle2.jpg',
    'AC Installation & Replacement',
    'تركيب واستبدال المكيفات',
    'Professional installation and replacement of air conditioners with energy-smart guidance.',
    'تركيب واستبدال المكيفات باحترافية مع إرشادات توفير الطاقة الذكية.',
  ),
  buildPage(
    'air-purifiers',
    '/services/ser/kitchen.jpg',
    'Air Purifiers',
    'أجهزة تنقية الهواء',
    'Advanced air purifier solutions for cleaner indoor air and allergy-friendly living spaces.',
    'حلول أجهزة تنقية الهواء المتقدمة لمعيشة داخلية أنظف وصديقة للحساسية.',
  ),
  buildPage(
    'furniture-cleaning',
    '/services/ser/furniture.jpg',
    'Furniture Cleaning Services',
    'تنظيف الأثاث',
    'Expert furniture cleaning to refresh sofas, chairs, and soft surfaces throughout your home.',
    'تنظيف أثاث خبير لتجديد الأرائك والكراسي والأسطح الناعمة في منزلك.',
  ),
  buildPage(
    'mattress-cleaning',
    '/services/ser/matrees-cleaning.jpg',
    'Mattress Cleaning',
    'تنظيف المراتب',
    'Deep mattress cleaning that removes dust, allergens, and odors for healthier sleep.',
    'تنظيف عميق للمراتب يزيل الغبار والمواد المسببة للحساسية والروائح لنوم أكثر صحة.',
  ),
  buildPage(
    'sofa-cleaning',
    '/services/ser/furniture.jpg',
    'Sofa Cleaning',
    'تنظيف الكنب',
    'Professional sofa cleaning services for stain removal and restored upholstery comfort.',
    'خدمات تنظيف أريكة احترافية لإزالة البقع واستعادة راحة التنجيد.',
  ),
  buildPage(
    'carpet-cleaning',
    '/services/ser/acc.jpg',
    ' Ducted air conditioner maintenance',
    ' صيانة المكيفات الدكت',
    'Ducted air conditioner maintenance',
    ' صيانة المكيفات الدكت',
  ),
  buildPage(
    'curtains-cleaning',
    '/services/ser/kitchen.jpg',
    'Curtains Cleaning',
    'تنظيف الستائر',
    'Curtain cleaning services that remove dust and odors while preserving fabrics.',
    'خدمات تنظيف الستائر التي تزيل الغبار والروائح مع الحفاظ على الأقمشة.',
  ),
  buildPage(
    'upholstery-shampooing',
    '/services/ser/matrees-cleaning.jpg',
    'Upholstery Shampooing',
    'شامبو التنجيد',
    'Deep upholstery shampooing for sofas, chairs, and cushions with gentle care.',
    'شامبو التنجيد العميق للأرائك والكراسي والوسائد بعناية لطيفة.',
  ),
  buildPage(
    'nano-coating',
    '/services/ser/cleaner-cleaning.jpg',
    'Nano Coating & Stain Protection',
    'الطلاء النانوي وحماية البقع',
    'Protective nano coatings that guard fabrics and surfaces against spills and stains.',
    'طبقات نانوية واقية تحمي الأقمشة والأسطح من الانسكابات والبقع.',
  ),
  buildPage(
    'full-home-furniture-package',
    '/services/ser/furniture.jpg',
    'Full Home Furniture Package',
    'باقة تنظيف أثاث المنزل بالكامل',
    'Complete home furniture care packages for polished and hygienic living spaces.',
    'باقات كاملة للعناية بأثاث المنزل لمساحات معيشة نظيفة ولامعة.',
  ),
  buildPage(
    'water-pipeline',
    '/services/ser/water-tank.webp',
    'Water & Pipeline Services',
    'خدمات المياه والأنابيب',
    'Pipeline and water system services for clean flow, safe water, and reliable plumbing.',
    'خدمات الأنابيب ونظام المياه لتدفق نظيف ومياه آمنة وسباكة موثوقة.',
  ),
  buildPage(
    'water-tank-cleaning',
    '/services/ser/water-tank.webp',
    'Water Tank Cleaning',
    'تنظيف خزانات المياه',
    'Water tank cleaning and sanitization solutions that keep drinking and household water safe.',
    'تنظيف وتعقيم خزانات المياه للحفاظ على مياه الشرب والمنزل آمنة.',
  ),
  buildPage(
    'pipeline-disinfection',
    '/services/ser/water-tank.webp',
    'Pipeline Disinfection',
    'تطهير الأنابيب',
    'Complete pipeline disinfection services to remove bacteria and maintain safe flow.',
    'خدمات تطهير الأنابيب الكاملة لإزالة البكتيريا والحفاظ على تدفق آمن.',
  ),
  buildPage(
    'water-filters',
    '/services/ser/water-tank.webp',
    'Premium Water Filters & Purifiers',
    'فلاتر ومنقيات مياه فاخرة',
    'Premium water filter solutions for cleaner, better-tasting water throughout your home.',
    'حلول فلاتر مياه فاخرة لمياه أنظف وأفضل مذاقًا في كل أنحاء منزلك.',
  ),
  buildPage(
    'whole-house-filtration',
    '/services/ser/water-tank.webp',
    'Whole House Water Filtration System',
    'نظام ترشيح المياه للمنزل بالكامل',
    'Whole-house filtration systems designed to protect every faucet and water outlet.',
    'أنظمة ترشيح للمنزل بالكامل مصممة لحماية كل صنبور ومخرج مياه.',
  ),
  buildPage(
    'blu-shower-filters',
    '/services/ser/water-tank.webp',
    'blu® Shower Filters',
    'فلاتر استحمام blu',
    'Shower filter installations for softer water and better skin and hair health.',
    'تركيب فلاتر الاستحمام لمياه أنعم وصحة أفضل للبشرة والشعر.',
  ),
  buildPage(
    'home-deep-cleaning',
    '/services/ser/deep.jpg',
    'Home Deep Cleaning Services',
    'خدمات التنظيف العميق للمنزل',
    'Complete deep cleaning services for a refreshed home, from kitchens to bedrooms.',
    'خدمات تنظيف عميق كاملة لمنزل منتعش، من المطبخ إلى غرف النوم.',
  ),
  buildPage(
    'move-in-out-unfurnished',
    '/services/ser/deep.jpeg',
    'Move-In Move-Out Deep Cleaning (Unfurnished)',
    'تنظيف المنازل (غير مفروش)',
    'Move-in and move-out cleaning designed for empty homes and rental turnovers.',
    'تنظيف الانتقال للمنازل الفارغة وتبديل الإيجار بأعلى مستوى من النظافة.',
  ),
  buildPage(
    'premium-deep-cleaning',
    '/services/ser/deep.jpg',
    'Premium Deep Cleaning (Furnished)',
    'تنظيف عميق فاخر (مفروش)',
    'Premium deep cleaning for furnished homes that restores every room with care.',
    'تنظيف عميق فاخر للمنازل المفروشة يجدد كل غرفة بعناية.',
  ),
  buildPage(
    'painting-moving',
    '/services/ser/cleaner-cleaning.jpg',
    'Painting & Moving',
    'الدهان والتحريك',
    'Painting and moving support services for smooth home refresh and relocation.',
    'خدمات الدهان والتحريك لتجديد المنزل بسلاسة وانتقال مريح.',
  ),
  buildPage(
    'painting-services',
    '/services/ser/cleaner-cleaning.jpg',
    'Painting Services',
    'خدمات الدهان',
    'Professional painting services that transform rooms with durable, beautiful finishes.',
    'خدمات دهان محترفة تحول الغرف بلمسات نهائية جميلة وقوية.',
  ),
  buildPage(
    'movers-packers',
    '/services/ser/cleaner-cleaning.jpg',
    'Movers & Packers',
    'خدمات النقل والتغليف',
    'Reliable movers and packers for safe, efficient home relocation and storage.',
    'خدمات نقل وتغليف موثوقة للانتقال المنزلي الآمن والفعال.',
  ),
  buildPage(
    'environmental-testing',
    '/services/ser/protective-medical.jpg',
    'Indoor Environmental Testing Services',
    'خدمات الاختبار البيئي الداخلي',
    'Indoor environmental testing to inspect air, water, and surfaces for a healthier home.',
    'اختبارات بيئية داخلية لفحص الهواء والماء والأسطح من أجل منزل أكثر صحة.',
  ),
  buildPage(
    'air-quality-testing',
    '/services/ser/protective-medical.jpg',
    'Indoor Air Quality Testing',
    'اختبار جودة الهواء الداخلي',
    'Air quality testing that identifies pollutants and helps improve home comfort.',
    'اختبار جودة الهواء الذي يحدد الملوثات ويساعد في تحسين راحة المنزل.',
  ),
  buildPage(
    'water-quality-testing',
    '/services/ser/water-tank.webp',
    'Water Quality Testing',
    'اختبار جودة المياه',
    'Water quality testing for safe drinking and household water systems.',
    'اختبار جودة المياه من أجل مياه شرب آمنة وأنظمة منزلية موثوقة.',
  ),
  buildPage(
    'home-improvement',
    '/services/ser/kitchen.jpg',
    'Home Improvement',
    'تحسين المنزل',
    'Home improvement services that enhance comfort, efficiency, and modern living.',
    'خدمات تحسين المنزل التي تعزز الراحة والكفاءة والمعيشة الحديثة.',
  ),
  buildPage(
    'roof-waterproofing',
    '/services/ser/kitchen.jpg',
    'Roof Waterproofing Solutions',
    'حلول عزل الأسطح',
    'Roof waterproofing solutions that protect your home from leaks and damage.',
    'حلول عزل الأسطح التي تحمي منزلك من التسربات والأضرار.',
  ),
  buildPage(
    'home-wrapping',
    '/services/ser/cleaner-cleaning.jpg',
    'Home & Kitchen Wrapping',
    'تغليف المنزل والمطبخ',
    'Protective wrapping and covering services for kitchen remodels and home storage.',
    'خدمات تغليف وحماية للمطبخ وتجديد المنزل والتخزين.',
  ),
  buildPage(
    'smart-home',
    '/services/ser/dd.jpg',
    'Smart Home Solutions',
    'حلول المنزل الذكي',
    'Smart home solutions for lighting, security, and connected home automation.',
    'حلول المنزل الذكي للإضاءة والأمان والأتمتة المنزلية المترابطة.',
  ),
  buildPage(
    'parquet-flooring',
    '/services/ser/kitchen.jpg',
    'Parquet Flooring',
    'الأرضيات الخشبية',
    'Parquet flooring services for beautiful and durable wooden floor installations.',
    'خدمات الأرضيات الخشبية لتركيبات جميلة ومتينة للأرضيات.',
  ),
  buildPage(
    'maintenance-services',
    '/services/ser/kitchen.jpg',
    'Main Services',
    'الخدمات الرئيسية',
    'Essential home maintenance services for plumbing, electrical, and general care.',
    'خدمات صيانة منزلية أساسية للسباكة والكهرباء والعناية العامة.',
  ),
  buildPage(
    'finishing-decorations',
    '/services/ser/furniture.jpg',
    'Finishing & Decorations',
    'التشطيبات والديكورات',
    'Finishing and decoration services that give your spaces a polished, welcoming look.',
    'خدمات التشطيبات والديكور التي تمنح مساحاتك مظهرًا أنيقًا وجذابًا.',
  ),
  buildPage(
    'ac-maintenance',
    '/services/ser/spray-bottle2.jpg',
    'Air Conditioning Maintenance',
    'صيانة المكيفات',
    'Routine AC maintenance services for reliable cooling and reduced breakdowns.',
    'خدمات صيانة المكيفات الدورية لتبريد موثوق وتقليل الأعطال.',
  ),
  buildPage(
    'plumbing',
    '/services/ser/water-tank.webp',
    'Plumbing',
    'السباكة',
    'Plumbing services for leak repair, pipe replacement, and water system care.',
    'خدمات السباكة لإصلاح التسربات واستبدال الأنابيب والعناية بنظام المياه.',
  ),
  buildPage(
    'electrical',
    '/services/ser/protective-medical.jpg',
    'Electrical Work',
    'الكهرباء',
    'Electrical services for safe and efficient wiring, fixtures, and repairs.',
    'خدمات كهربائية لتوصيل آمن وفعال وتركيبات وإصلاحات.',
  ),
  buildPage(
    'pest-control',
    '/services/ser/protective-medical.jpg',
    'Pest Control',
    'مكافحة الحشرات',
    'Targeted pest control services to keep insects and rodents away from your home.',
    'خدمات مكافحة الآفات المستهدفة للحفاظ على منزلك بعيدًا عن الحشرات والقوارض.',
  ),
  buildPage(
    'water-tank-insulation',
    '/services/ser/water-tank.webp',
    'Water Tank Cleaning & Insulation',
    'تنظيف وعزل خزانات المياه',
    'Water tank cleaning and insulation solutions for healthier, more efficient storage.',
    'حلول تنظيف وعزل خزانات المياه لتخزين أكثر صحة وكفاءة.',
  ),
  buildPage(
    'shop',
    '/services/ser/kitchen.jpg',
    'Shop',
    'المتجر',
    'Our shop offers home care essentials, filters, cleaning kits, and smart devices.',
    'متجرنا يقدم لوازم العناية المنزلية والفلاتر ومجموعات التنظيف والأجهزة الذكية.',
  ),
  buildPage(
    'booking',
    '/services/ser/dd.jpg',
    'Booking',
    'احجز الآن',
    'Book an appointment with our home care team and schedule a service visit in minutes.',
    'احجز موعدًا مع فريق العناية المنزلية وحدد زيارة خدمة في دقائق.',
  ),
];

export const pageData = Object.fromEntries(
  pageEntries.map((page) => [page.slug, page]),
) as Record<string, PageDataItem>;

export const pageSlugs = pageEntries.map((page) => page.slug);

export function getPageData(slug: string) {
  return pageData[slug] || null;
}

export type PageDataItemType = PageDataItem;
