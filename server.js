const express = require('express')
const next = require('next')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')

dotenv.config()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const prisma = new PrismaClient()

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json())

  // login
  server.post('/api/login', async (req, res) => {
    const { username, password } = req.body
    const user = await prisma.user.findUnique({ where: { username } })
    if (!user) return res.status(401).json({ error: 'invalid' })
    const ok = await bcrypt.compare(password, user.password)
    if (!ok) return res.status(401).json({ error: 'invalid' })
    res.json({ id: user.id, role: user.role })
  })

  // users api
  server.get('/api/users', async (req, res) => {
    const users = await prisma.user.findMany({})
    res.json(users)
  })

  server.post('/api/users', async (req, res) => {
    const { username, password, role } = req.body
    const hash = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { username, password: hash, role } })
    res.json(user)
  })

  server.put('/api/users/:id', async (req, res) => {
    const { id } = req.params
    const data = req.body
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10)
    }
    const user = await prisma.user.update({ where: { id: Number(id) }, data })
    res.json(user)
  })

  server.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params
    await prisma.user.delete({ where: { id: Number(id) } })
    res.json({})
  })

  // page meta api
  server.get('/api/pages', async (req, res) => {
    const pages = await prisma.pageMeta.findMany()
    res.json(pages)
  })

  server.post('/api/pages', async (req, res) => {
    const { route, title, description, keywords } = req.body
    const page = await prisma.pageMeta.upsert({
      where: { route },
      update: { title, description, keywords },
      create: { route, title, description, keywords },
    })
    res.json(page)
  })

  server.all('*', (req, res) => handle(req, res))

  const port = process.env.PORT || 3000
  server.listen(port, () => console.log('Server ready on', port))
})
