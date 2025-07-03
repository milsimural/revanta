import Layout from '../../components/Layout'
import useMeta from '../../lib/useMeta'

export default function Services() {
  const meta = useMeta('/services')
  return (
    <Layout>
      {meta}
      <h1 className="text-2xl mb-4">Услуги</h1>
      <ul className="list-disc ml-4 space-y-2">
        <li>SEO продвижение</li>
        <li>Контекстная реклама</li>
        <li>Техническая поддержка сайтов</li>
        <li>Разработка сайтов</li>
      </ul>
    </Layout>
  )
}
