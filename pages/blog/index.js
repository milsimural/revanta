import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Layout from '../../components/Layout'
import useMeta from '../../lib/useMeta'

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'blog/posts')
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : []
  const posts = files.map((f) => ({ slug: f.replace(/\.md$/, ''), title: f }))
  return { props: { posts } }
}

export default function Blog({ posts }) {
  const meta = useMeta('/blog')
  return (
    <Layout>
      {meta}
      <h1 className="text-2xl mb-4">Блог</h1>
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="link">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
