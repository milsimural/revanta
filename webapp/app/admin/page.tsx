'use client';
import { useState } from 'react';

export default function Admin() {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [caseTitle, setCaseTitle] = useState('');
  const [caseContent, setCaseContent] = useState('');
  const [message, setMessage] = useState('');

  const submitArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: articleTitle, content: articleContent }),
    });
    if (res.ok) setMessage('Статья добавлена');
    setArticleTitle('');
    setArticleContent('');
  };

  const submitCase = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/cases', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: caseTitle, content: caseContent }),
    });
    if (res.ok) setMessage('Кейс добавлен');
    setCaseTitle('');
    setCaseContent('');
  };

  return (
    <section className="space-y-10">
      {message && <p>{message}</p>}
      <form onSubmit={submitArticle} className="space-y-2">
        <h1 className="text-xl font-bold">Новая статья</h1>
        <input
          className="border p-1 w-full"
          placeholder="Заголовок"
          value={articleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
        />
        <textarea
          className="border p-1 w-full"
          placeholder="Содержимое"
          value={articleContent}
          onChange={(e) => setArticleContent(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1">
          Сохранить
        </button>
      </form>

      <form onSubmit={submitCase} className="space-y-2">
        <h1 className="text-xl font-bold">Новый кейс</h1>
        <input
          className="border p-1 w-full"
          placeholder="Заголовок"
          value={caseTitle}
          onChange={(e) => setCaseTitle(e.target.value)}
        />
        <textarea
          className="border p-1 w-full"
          placeholder="Содержимое"
          value={caseContent}
          onChange={(e) => setCaseContent(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1">
          Сохранить
        </button>
      </form>
    </section>
  );
}
