import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { Locale } from '@/types/page';
import { getPageData, pageSlugs } from '@/data/pages';
import PageTemplate from '@/components/PageTemplate';

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  const locales: Locale[] = ['en', 'ar'];

  return locales.flatMap((locale) =>
    pageSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const normalizedLocale: Locale = locale === 'ar' ? 'ar' : 'en';
  const page = getPageData(slug);
  if (!page) {
    return {
      title: 'Service',
      description: 'Premium home service page',
    };
  }

  return {
    title: page.copy[normalizedLocale].title,
    description: page.copy[normalizedLocale].description,
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const normalizedLocale: Locale = locale === 'ar' ? 'ar' : 'en';
  const page = getPageData(slug);

  if (!page) {
    notFound();
  }

  return <PageTemplate locale={normalizedLocale} page={page} />;
}
