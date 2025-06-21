interface Params { params: { id: string } }

async function getArticle(id: string) {
  const res = await fetch(`http://localhost:3000/api/articles?id=${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return Array.isArray(data) ? data[0] : data;
}

export default async function ArticlePage({ params }: Params) {
  const article = await getArticle(params.id);
  if (!article) return <div>Статья не найдена</div>;
  return (
    <article className="space-y-4">
      <h1 className="text-xl font-bold">{article.title}</h1>
      <div>{article.content}</div>
    </article>
  );
}
