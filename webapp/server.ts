import express from 'express';
import next from 'next';
import { PrismaClient } from '@prisma/client';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const prisma = new PrismaClient();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.get('/api/articles', async (req, res) => {
    if (req.query.id) {
      const id = Number(req.query.id as string);
      const art = await prisma.article.findUnique({ where: { id } });
      return res.json(art);
    }
    const articles = await prisma.article.findMany();
    res.json(articles);
  });

  server.get('/api/cases', async (req, res) => {
    if (req.query.id) {
      const id = Number(req.query.id as string);
      const c = await prisma.case.findUnique({ where: { id } });
      return res.json(c);
    }
    const cases = await prisma.case.findMany();
    res.json(cases);
  });

  server.all('*', (req, res) => handle(req, res));

  const port = parseInt(process.env.PORT || '3000', 10);
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
