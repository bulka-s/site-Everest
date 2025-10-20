import "../../styles/guarantees.css";

export function Guarantees() {
  const guarantees = [
    {
      title: "Возврат средств",
      description:
        "Если вам не понравится первое занятие, мы вернем 100% стоимости курса без вопросов в течение 3 дней.",
      icon: "/Shield.svg"
    },
    {
      title: "Доступ к записям",
      description:
        "Все занятия записываются в HD качестве. Вы получите доступ к видео на 6 месяцев после окончания курса.",
      icon: "/Camera.svg"
    },
    {
      title: "Методические материалы",
      description:
        "Все рецепты, техники и секреты в удобном формате PDF навсегда остаются с вами для повторения дома.",
      icon: "/Book.svg"
    },
  ];

  return (
    <section className="guarantees">
      <div className="container">
        <h2 className="guarantees-title">Наши гарантии</h2>
        <div className="guarantees-grid">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="guarantee-card">
              <div className="guarantee-icon"><img src={guarantee.icon} alt="" /></div>
              <h3>{guarantee.title}</h3>
              <p>{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
