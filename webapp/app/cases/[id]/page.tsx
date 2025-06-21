interface Params { params: { id: string } }

async function getCase(id: string) {
  const res = await fetch(`http://localhost:3000/api/cases?id=${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return Array.isArray(data) ? data[0] : data;
}

export default async function CasePage({ params }: Params) {
  const c = await getCase(params.id);
  if (!c) return <div>Кейс не найден</div>;
  return (
    <article className="space-y-4">
      <h1 className="text-xl font-bold">{c.title}</h1>
      <div>{c.content}</div>
    </article>
  );
}
