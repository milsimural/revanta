import fs from 'fs'
import path from 'path'
import Layout from '../../components/Layout'
import { marked } from 'marked'
import useMeta from '../../lib/useMeta'

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'cases/items')
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : []
  const paths = files.map((f) => ({ params: { slug: f.replace(/\.md$/, '') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const file = path.join(process.cwd(), 'cases/items', `${params.slug}.md`)
  const raw = fs.readFileSync(file, 'utf8')
  const content = marked.parse(raw)
  return { props: { content } }
}

export default function Case({ content }) {
  const meta = useMeta('/cases/[slug]')
  return (
    <Layout>
      {meta}
      <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}
