import "../../styles/benefits.css";

export function Benefits() {
  const benefits = [
    {
      title: "Практика с первого занятия",
      description:
        "Мы честно готовим пироги только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.",
    },
    {
      title: "Современные рецепты",
      description:
        "Обновляем программу каждый сезон, чтобы вы всегда готовили актуальные блюда.",
    },
    {
      title: "Персональный подход",
      description:
        "Группы до 10 человек. Каждый получает обратную связь и рекомендации.",
    },
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2 className="benefits-title">Преимущества</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
