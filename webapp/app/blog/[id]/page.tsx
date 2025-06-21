// @ts-nocheck
import fs from 'fs/promises';
import path from 'path';

async function getArticle(id: string) {
  try {
    const data = await fs.readFile(path.join(process.cwd(), 'data', 'articles.json'), 'utf-8');
    const articles = JSON.parse(data);
    return articles.find((a: any) => String(a.id) === id) || null;
  } catch {
    return null;
  }
}

export default async function ArticlePage({ params }: any) {
  const article = await getArticle(params.id);
  if (!article) return <div>Статья не найдена</div>;
  return (
    <article className="space-y-4">
      <h1 className="text-xl font-bold">{article.title}</h1>
      <div>{article.content}</div>
    </article>
  );
}
