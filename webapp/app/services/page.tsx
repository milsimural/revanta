export default function Services() {
  const services = [
    'SEO продвижение',
    'Контекстная реклама',
    'SEO аудит',
    'Разработка сайтов',
    'Таргетированная реклама',
  ];
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Услуги</h1>
      <ul className="list-disc pl-5 space-y-2">
        {services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
