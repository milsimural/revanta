import { useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'

export default function useMeta(route) {
  const [meta, setMeta] = useState(null)
  useEffect(() => {
    async function load() {
      const res = await axios.get('/api/pages')
      const item = res.data.find((p) => p.route === route)
      if (item) setMeta(item)
    }
    load()
  }, [route])
  return meta ? (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </Head>
  ) : null
}
