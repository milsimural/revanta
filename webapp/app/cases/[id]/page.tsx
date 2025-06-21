// @ts-nocheck
import fs from 'fs/promises';
import path from 'path';

async function getCase(id: string) {
  try {
    const data = await fs.readFile(path.join(process.cwd(), 'data', 'cases.json'), 'utf-8');
    const cases = JSON.parse(data);
    return cases.find((c: any) => String(c.id) === id) || null;
  } catch {
    return null;
  }
}

export default async function CasePage({ params }: any) {
  const c = await getCase(params.id);
  if (!c) return <div>Кейс не найден</div>;
  return (
    <article className="space-y-4">
      <h1 className="text-xl font-bold">{c.title}</h1>
      <div>{c.content}</div>
    </article>
  );
}
