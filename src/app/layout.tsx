import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { headers } from 'next/headers';
import { Tajawal } from 'next/font/google';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata = {
  title: 'CoolNex | AC Maintenance & Services in Saudi Arabia',
  description:
    'CoolNex is a specialized company in AC maintenance, operation, and cleaning services in Saudi Arabia, providing professional solutions using cutting-edge technology and modern quality standards. We are committed to delivering AC maintenance and operation services with the highest quality and professionalism standards, through specialized teams, modern techniques, and effective solutions that ensure optimal performance.',
  keywords: [
    'كول نكس',
    'CoolNex',
    'AC maintenance',
    'AC maintenance Saudi Arabia',
    'air conditioning services',
    'AC cleaning',
    'AC repair',
    'HVAC maintenance',
    'air conditioning repair',
    'cooling services',
    'professional AC services',
    'energy efficiency',
  ],
  openGraph: {
    title: 'CoolNex | Professional AC Maintenance Services in Saudi Arabia',
    description:
      'CoolNex specializes in AC maintenance, operation, and cleaning services across Saudi Arabia with cutting-edge technology and professional quality standards.',
    type: 'website',
    locale: 'en_US',
    siteName: 'CoolNex',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoolNex | AC Maintenance Services Saudi Arabia',
    description:
      'Professional AC maintenance and cleaning services in Saudi Arabia with modern technology and highest quality standards.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') ?? 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body className={`${tajawal.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}