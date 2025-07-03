import Layout from '../components/Layout'
import useMeta from '../lib/useMeta'

export default function Contacts() {
  const meta = useMeta('/contacts')
  return (
    <Layout>
      {meta}
      <h1 className="text-2xl mb-4">Контакты</h1>
      <p>Email: info@revanta.ru</p>
    </Layout>
  )
}
