import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <header className="footer-title">Меню</header>
        <Link href="/cases">Кейсы</Link>
        <Link href="/blog">Блог</Link>
        <Link href="/services">Услуги</Link>
        <Link href="/digital">Digital для ИЖС</Link>
        <Link href="/contacts">Контакты</Link>
      </nav>
      <aside>
        <p>© Revanta {new Date().getFullYear()}</p>
      </aside>
    </footer>
  )
}
