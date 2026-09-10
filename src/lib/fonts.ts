import { Inter, Playfair_Display, Tajawal, Amiri } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-en',
  display: 'swap',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif-en',
  display: 'swap',
});

export const tajawal = Tajawal({
  weight: ['400', '500', '700', '800'],
  subsets: ['arabic'],
  variable: '--font-sans-ar',
  display: 'swap',
});

export const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-serif-ar',
  display: 'swap',
});
