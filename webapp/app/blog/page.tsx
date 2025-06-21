import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

async function getArticles() {
  try {
    const data = await fs.readFile(path.join(process.cwd(), 'data', 'articles.json'), 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export default async function Blog() {
  const articles = await getArticles();
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Блог</h1>
      <ul className="list-disc pl-5 space-y-2">
        {articles.map((a: any) => (
          <li key={a.id}>
            <Link href={`/blog/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
