export type Locale = 'en' | 'ar';

export type PageCopy = {
  title: string;
  description: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  details: string;
  benefits: string[];
  whyTitle: string;
  whyPoints: string[];
  faqTitle: string;
  faqDescription: string;
  faqs: Array<{ question: string; answer: string }>;
  contactPrompt: string;
  contactCta: string;
};

export type PageDataItem = {
  slug: string;
  image: string;
  copy: Record<Locale, PageCopy>;
};
