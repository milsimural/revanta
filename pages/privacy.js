import Layout from '../components/Layout'
import useMeta from '../lib/useMeta'

export default function Privacy() {
  const meta = useMeta('/privacy')
  return (
    <Layout>
      {meta}
      <h1 className="text-2xl mb-4">Политика конфиденциальности</h1>
      <p>Текст политики конфиденциальности.</p>
    </Layout>
  )
}
