import Link from 'next/link';

async function getArticles() {
  const res = await fetch('http://localhost:3000/api/articles');
  if (!res.ok) return [];
  return res.json();
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
