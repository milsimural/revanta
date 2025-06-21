import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Revanta Sample',
  description: 'Company website built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-4`}> 
        <nav className="mb-8 flex gap-4">
          <Link href="/">Главная</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/cases">Кейсы</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/contacts">Контакты</Link>
          <Link href="/about">О компании</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
