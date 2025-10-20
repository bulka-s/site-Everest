import "../../styles/certificate.css";

export function Certificate() {
  const benefits = [
    "Официальный документ с печатью школы",
    "Подтверждение профессиональных навыков",
    "Возможность трудоустройства в ресторанах-партнерах",
  ];

  return (
    <section className="certificate">
      <div className="container">
        <div className="certificate-grid">
          <div className="certificate-content">
            <h2>Получите сертификат о прохождении курса</h2>
            <p>
              После успешного завершения курса вы получите официальный
              сертификат нашей школы, который подтверждает ваши навыки и знания
              в кулинарном искусстве.
            </p>
            <ul className="certificate-list">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="certificate-preview">
            <svg
              width="128"
              height="128"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
            <h3>СЕРТИФИКАТ</h3>
            <p>Кулинарная школа КУЛИНАР</p>
            <small>Подтверждает успешное прохождение курса</small>
          </div>
        </div>
      </div>
    </section>
  );
}
