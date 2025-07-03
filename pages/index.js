import Layout from '../components/Layout'
import Link from 'next/link'
import useMeta from '../lib/useMeta'

export default function Home() {
  const meta = useMeta('/')
  return (
    <Layout>
      {meta}
      <h1 className="text-4xl font-bold mb-4">Digital Агентство Реванта</h1>
      <h2 className="text-xl mb-6">
        300 компаний выбрали нас для продвижения своего бизнеса в интернете
      </h2>
      <section className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { title: 'Продвижение в поиске', price: 'от 10 000₽' },
          { title: 'Контекстная реклама', price: 'от 15 000₽' },
          { title: 'Разработка сайтов', price: 'от 30 000₽' },
          { title: 'Техническая поддержка', price: 'от 5 000₽' },
          { title: 'Аналитика', price: 'от 8 000₽' },
          { title: 'Консультация', price: 'Бесплатно' },
        ].map((s) => (
          <div key={s.title} className="card bg-neutral p-4">
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="text-sm">{s.price}</p>
            <p className="text-sm">Краткое описание услуги.</p>
            <Link href="/services" className="btn btn-primary mt-2">
              Подробнее
            </Link>
          </div>
        ))}
      </section>
      <section className="mb-8">
        <h3 className="text-2xl mb-4">Обращение директора</h3>
        <div className="flex flex-col md:flex-row items-center">
          <img src="/director.jpg" alt="director" className="w-32 h-32 mr-4" />
          <p className="flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            aliquet pretium nulla, at molestie est bibendum eget.
          </p>
        </div>
        <p className="mt-2 font-bold">Евгений Митшан, директор по развитию</p>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl mb-4">Кейсы</h3>
        <div className="carousel w-full space-x-4">
          {[
            {
              slug: 'case1',
              title:
                'Как строительной компании быстро набрать клиентов в сезон и снизить стоимость заявки в 11 раз',
              company: 'Интел Групп',
              type: 'Строительная компания',
              tag: '#seo',
            },
            {
              slug: 'case2',
              title:
                'Вывели сайт застройщика в ТОП-3 по Москве и увеличили трафик из поиска в 4 раза',
              company: 'Дачный сезон',
              type: 'Строительная компания',
              tag: '#seo',
            },
            {
              slug: 'case3',
              title:
                'Кейс продвижения строительства домов: как получать 10-15 заявок в день с помощью КВИЗа и таргетированной рекламы',
              company: 'Метражи',
              type: 'Строительная компания',
              tag: '#seo',
            },
          ].map((c) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="carousel-item w-80 p-4 bg-neutral rounded-box"
            >
              <div>
                <img src="/logo.png" alt="logo" className="h-12 mb-2" />
                <h4 className="font-bold mb-1">{c.title}</h4>
                <p className="text-sm">
                  {c.type} — {c.company} {c.tag}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl mb-4">Смотрите нас на вквидео и рутуб</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card bg-neutral p-4">
              <img src={`/video${i}.jpg`} alt="video" className="mb-2" />
              <p className="text-sm">01.01.2024</p>
              <p className="font-bold">Видео {i}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl mb-4">Наши клиенты</h3>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <img key={i} src={`/client${i}.png`} className="h-12" />
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl mb-4">Отзывы</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-neutral p-4">
              <p>Отзыв {i} — текст отзыва.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl mb-2">Блог</h3>
        <p className="mb-4">
          Читайте наш блок о SEO-продвижении для строительных компаний, где мы
          расскажем, как улучшить видимость вашего бизнеса в поисковых системах.
          Узнайте о стратегиях и методах, которые помогут вашему сайту выйти в
          топ!
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Link key={i} href={`/blog/post${i}`} className="card bg-neutral p-4">
              <div className="flex items-center mb-2">
                <img src="/avatar.png" className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <p className="text-sm">Автор {i}</p>
                  <p className="text-xs">Должность</p>
                </div>
              </div>
              <h4 className="font-bold">Статья {i}</h4>
              <p className="text-sm">Краткое описание статьи {i}...</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl mb-4">Вопросы и ответы</h3>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
              <div className="collapse-title">Вопрос {i}</div>
              <div className="collapse-content">Ответ на вопрос {i}.</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
