import { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import Layout from '../../components/Layout'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/login', { username, password })
      localStorage.setItem('user', JSON.stringify(res.data))
      Router.push('/admin/users')
    } catch (e) {
      setError('Ошибка авторизации')
    }
  }

  return (
    <Layout>
      <div className="max-w-sm mx-auto space-y-2">
        <h1 className="text-2xl mb-4">Вход</h1>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Логин"
          className="input input-bordered w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-full" onClick={handleLogin}>
          Войти
        </button>
      </div>
    </Layout>
  )
}
