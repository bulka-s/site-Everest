import "../../styles/about.css";

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <img
              src="/chef-cooking-class.png"
              alt="Cooking class"
              className="about-image"
            />
            <img
              src="/gourmet-dish.png"
              alt="Dish plating"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h1 className="about-title">Учитесь готовить с профессионалами!</h1>
            <p className="about-text P1">
              Наши преподаватели – шеф-повара с многолетним опытом в ресторанах
              и кулинарных школах. Мы обучаем новичков, так и тех, кто хочет
              вынести свои навыки на профессиональный уровень. Все курсы
              основаны на реальной практике, без "воды" и теории ради теории.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
