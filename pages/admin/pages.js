import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'

export default function AdminPages() {
  const [pages, setPages] = useState([])
  const [route, setRoute] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [keywords, setKeywords] = useState('')

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const res = await axios.get('/api/pages')
    setPages(res.data)
  }

  async function save() {
    await axios.post('/api/pages', { route, title, description, keywords })
    setRoute(''); setTitle(''); setDescription(''); setKeywords('')
    load()
  }

  return (
    <Layout>
      <h1 className="text-2xl mb-4">Метатеги страниц</h1>
      <div className="space-y-2 mb-4">
        <input className="input input-bordered" placeholder="Роут" value={route} onChange={e=>setRoute(e.target.value)} />
        <input className="input input-bordered" placeholder="TITLE" value={title} onChange={e=>setTitle(e.target.value)} />
        <input className="input input-bordered" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
        <input className="input input-bordered" placeholder="keywords" value={keywords} onChange={e=>setKeywords(e.target.value)} />
        <button onClick={save} className="btn btn-primary">Сохранить</button>
      </div>
      <table className="table text-white">
        <thead>
          <tr>
            <th>Route</th><th>Title</th><th>Description</th><th>Keywords</th>
          </tr>
        </thead>
        <tbody>
          {pages.map(p => (
            <tr key={p.id}>
              <td>{p.route}</td><td>{p.title}</td><td>{p.description}</td><td>{p.keywords}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
