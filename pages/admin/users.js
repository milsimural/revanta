import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'
import Router from 'next/router'

export default function AdminUsers() {
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('USER')

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  async function create() {
    await axios.post('/api/users', { username, password, role })
    setUsername(''); setPassword(''); setRole('USER')
    load()
  }

  async function remove(id) {
    await axios.delete('/api/users/' + id)
    load()
  }

  return (
    <Layout>
      <h1 className="text-2xl mb-4">Пользователи</h1>
      <div className="space-y-2 mb-4">
        <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Логин" className="input input-bordered" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Пароль" className="input input-bordered" />
        <select value={role} onChange={e=>setRole(e.target.value)} className="select select-bordered">
          <option value="ADMIN">ADMIN</option>
          <option value="EDITOR">EDITOR</option>
          <option value="USER">USER</option>
        </select>
        <button onClick={create} className="btn btn-primary">Создать</button>
      </div>
      <table className="table w-full text-white">
        <thead>
          <tr>
            <th>ID</th><th>Логин</th><th>Роль</th><th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username}</td>
              <td>{u.role}</td>
              <td><button className="btn btn-xs" onClick={()=>remove(u.id)}>Удалить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
