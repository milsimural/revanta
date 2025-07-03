import Layout from '../components/Layout'
import useMeta from '../lib/useMeta'

export default function Digital() {
  const meta = useMeta('/digital')
  return (
    <Layout>
      {meta}
      <h1 className="text-2xl mb-4">Digital для ИЖС</h1>
      <p>Информация о Digital для ИЖС.</p>
    </Layout>
  )
}
