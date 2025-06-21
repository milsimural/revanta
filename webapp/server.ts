// @ts-nocheck
import express from 'express';
import next from 'next';
import fs from 'fs/promises';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const dataDir = path.join(process.cwd(), 'data');

async function readData(file: string) {
  try {
    const data = await fs.readFile(path.join(dataDir, file), 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeData(file: string, data: any) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(path.join(dataDir, file), JSON.stringify(data, null, 2));
}

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.get('/api/articles', async (req, res) => {
    const articles = await readData('articles.json');
    if (req.query.id) {
      const id = Number(req.query.id as string);
      const art = articles.find((a: any) => a.id === id);
      return res.json(art || null);
    }
    res.json(articles);
  });

  server.post('/api/articles', async (req, res) => {
    const { title, content } = req.body;
    const articles = await readData('articles.json');
    const id = articles.length ? articles[articles.length - 1].id + 1 : 1;
    const newArticle = { id, title, content };
    articles.push(newArticle);
    await writeData('articles.json', articles);
    res.json(newArticle);
  });

  server.get('/api/cases', async (req, res) => {
    const cases = await readData('cases.json');
    if (req.query.id) {
      const id = Number(req.query.id as string);
      const c = cases.find((ca: any) => ca.id === id);
      return res.json(c || null);
    }
    res.json(cases);
  });

  server.post('/api/cases', async (req, res) => {
    const { title, content } = req.body;
    const cases = await readData('cases.json');
    const id = cases.length ? cases[cases.length - 1].id + 1 : 1;
    const newCase = { id, title, content };
    cases.push(newCase);
    await writeData('cases.json', cases);
    res.json(newCase);
  });

  server.all('*', (req, res) => handle(req, res));

  const port = parseInt(process.env.PORT || '3000', 10);
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
