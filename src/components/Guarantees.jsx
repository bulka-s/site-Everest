import "../../styles/guarantees.css";

export function Guarantees() {
  const guarantees = [
    {
      title: "Возврат средств",
      description:
        "Если вам не понравится первое занятие, мы вернем 100% стоимости курса без вопросов в течение 3 дней.",
    },
    {
      title: "Доступ к записям",
      description:
        "Все занятия записываются в HD качестве. Вы получите доступ к видео на 6 месяцев после окончания курса.",
    },
  ];

  return (
    <section className="guarantees">
      <div className="container">
        <h2 className="guarantees-title">Наши гарантии</h2>
        <div className="guarantees-grid">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="guarantee-card">
              <div className="guarantee-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>{guarantee.title}</h3>
              <p>{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
