import ContactUs from '@/components/ContactUs';

type ContactPageProps = {
  params: Promise<{
    locale: 'en' | 'ar';
  }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  return <ContactUs locale={locale} />;
}
