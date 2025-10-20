import "../../styles/how-it-works.css";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Выбор курса",
      description: "Выберите интересующий курс и удобное время занятий",
    },
    {
      number: 2,
      title: "Регистрация",
      description: "Заполните форму и получите доступ к материалам курса",
    },
    {
      number: 3,
      title: "Практика",
      description: "Готовьте под руководством шефа и получайте обратную связь",
    },
    {
      number: 4,
      title: "Сертификат",
      description: "Получите сертификат о прохождении курса",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h1 className="how-it-works-title">Как проходит обучение</h1>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
