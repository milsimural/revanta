import Link from 'next/link';

async function getCases() {
  const res = await fetch('http://localhost:3000/api/cases');
  if (!res.ok) return [];
  return res.json();
}

export default async function Cases() {
  const cases = await getCases();
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Кейсы</h1>
      <ul className="list-disc pl-5 space-y-2">
        {cases.map((c: any) => (
          <li key={c.id}>
            <Link href={`/cases/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
