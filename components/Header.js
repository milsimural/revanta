import Link from 'next/link'

export default function Header() {
  return (
    <div className="navbar bg-base-100 text-white">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <img src="/logo.png" alt="logo" className="h-10 w-10 mr-2" />
          Revanta
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/cases">Кейсы</Link></li>
          <li><Link href="/blog">Блог</Link></li>
          <li>
            <details>
              <summary>Услуги</summary>
              <ul className="p-2 bg-base-100">
                <li><Link href="/services">Все услуги</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="/digital">Digital для ИЖС</Link></li>
          <li><Link href="/contacts">Контакты</Link></li>
        </ul>
      </div>
    </div>
  )
}
