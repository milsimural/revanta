import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Layout from '../../components/Layout'
import useMeta from '../../lib/useMeta'

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'cases/items')
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : []
  const cases = files.map((f) => ({ slug: f.replace(/\.md$/, ''), title: f }))
  return { props: { cases } }
}

export default function Cases({ cases }) {
  const meta = useMeta('/cases')
  return (
    <Layout>
      {meta}
      <h1 className="text-2xl mb-4">Кейсы</h1>
      <ul className="space-y-2">
        {cases.map((c) => (
          <li key={c.slug}>
            <Link href={`/cases/${c.slug}`} className="link">
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
