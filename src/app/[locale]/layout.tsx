import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const locales = ['en', 'ar'];

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const validLocale = locale === 'ar' ? 'ar' : 'en';
  const t = await getTranslations({ locale: validLocale });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header lang={locale as 'en' | 'ar'} />

      <main className="pt-[100px]">{children}</main>

      <Footer lang={locale as 'en' | 'ar'} />
      <WhatsAppButton
        phoneNumber="966540915000"
        locale={locale as 'en' | 'ar'}
        message={
          locale === 'ar'
            ? 'مرحبًا! أحتاج إلى المزيد من المعلومات عن خدماتكم.'
            : 'Hello! I need more information about your services.'
        }
        labelText={locale === 'ar' ? 'هل تحتاج إلى مساعدة؟' : 'Need help?'}
      />
    </NextIntlClientProvider>
  );
}
