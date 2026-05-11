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
  title: 'كول نكس - COOL NEX | Marine Contracting Saudi Arabia',
  description:
    'كول نكس - COOL NEX offers marine and industrial contracting services across Saudi Arabia, including protective coatings, corrosion protection, thermal insulation, abrasive blasting, and equipment maintenance for ships, offshore and industrial facilities.',
  keywords: [
    'كول نكس',
    'COOL NEX',
    'marine contracting',
    'marine contracting Saudi Arabia',
    'protective coatings',
    'corrosion protection',
    'thermal insulation',
    'abrasive blasting',
    'equipment maintenance',
    'offshore contracting',
    'industrial contracting',
  ],
  openGraph: {
    title: 'كول نكس - COOL NEX | Marine Contracting Saudi Arabia',
    description:
      'كول نكس - COOL NEX offers marine and industrial contracting services across Saudi Arabia, including protective coatings, corrosion protection, thermal insulation, abrasive blasting, and equipment maintenance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'كول نكس - COOL NEX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كول نكس - COOL NEX | Marine Contracting Saudi Arabia',
    description:
      'Marine and industrial contracting in Saudi Arabia with protective coatings, corrosion protection, thermal insulation, abrasive blasting, and equipment maintenance.',
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