import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Revanta Sample',
  description: 'Company website built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="antialiased p-4">
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
