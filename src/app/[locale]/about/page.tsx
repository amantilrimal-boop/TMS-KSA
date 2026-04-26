import About from '@/components/about';
import About2 from '@/components/about2';
import AboutBanner from '@/components/aboutbanner';

type AboutPageProps = {
  params: Promise<{
    locale: 'en' | 'ar';
  }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  return (
    <>
      <AboutBanner locale={locale} />
      <About locale={locale} />
      <About2 locale={locale} />
    </>
  );
}
