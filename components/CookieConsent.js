import { useState } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral text-neutral-content p-4">
      <p>
        Этот сайт использует файлы cookie. Продолжая использовать этот сайт, Вы
        соглашаетесь на их использование. Для получения дополнительной
        информации, пожалуйста, ознакомьтесь с нашей{' '}
        <Link href="/privacy" className="link">
          Политикой конфиденциальности
        </Link>.
      </p>
      <button className="btn btn-primary mt-2" onClick={() => setVisible(false)}>
        Согласен
      </button>
    </div>
  )
}
