import "../../styles/hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Научитесь готовить как шеф-повар за 30 дней
            </h1>
            <p className="hero-subtitle P1">
              Освойте современные кулинарные техники и создавайте блюда
              ресторанного уровня у себя дома – под руководством
              профессиональных шефов.
            </p>
            <button className="chooseBtn">Выбрать курс</button>
          </div>
          <div className="hero-image-container">
            <img
              src="/professional-chef-cooking-in-modern-kitchen.jpg"
              alt="Chef cooking"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
