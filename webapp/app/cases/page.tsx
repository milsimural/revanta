import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

async function getCases() {
  try {
    const data = await fs.readFile(path.join(process.cwd(), 'data', 'cases.json'), 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
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
