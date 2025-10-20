import "../../styles/courses.css";

export function Courses() {
  const courses = [
    {
      title: "Итальянская кухня",
      description:
        "Освойте пасту, пиццу и ризотто. Готовьте как в лучших ресторанах Италии.",
      price: "от 3 500 ₽",
      image: "/italian-pasta-and-pizza-dishes.jpg",
      imageAlt: "Italian cuisine",
    },
    {
      title: "Повар-сушист",
      description:
        "Искусство суши с нуля. Нарезка рыбы, идеальный рис и сборка роллов.",
      price: "от 12 900 ₽",
      image: "/sushi-and-rolls-japanese-cuisine.jpg",
      imageAlt: "Sushi",
    },
    {
      title: "Обучение карвинг: азы",
      description:
        "Фигурная резка по овощам и фруктам. Создавайте эффектные украшения для стола.",
      price: "от 3 500 ₽",
      image: "/fruit-and-vegetable-carving-art.jpg",
      imageAlt: "Carving",
    },
    {
      title: "Татарская кухня",
      description:
        "Секреты эчпочмаков и бэлиша. Готовьте с истинно татарским гостеприимством.",
      price: "от 4 500 ₽",
      image: "/traditional-tatar-cuisine-echpochmak.jpg",
      imageAlt: "Tatar cuisine",
    },
    {
      title: "Французская выпечка",
      description:
        "Идеальные круассаны и эклеры. Освойте основы французской патиссерии.",
      price: "от 5 900 ₽",
      image: "/french-croissants-and-eclairs-pastry.jpg",
      imageAlt: "French pastry",
    },
    {
      title: "Фьюжн-кухня",
      description:
        "Смелые сочетания вкусов. Создавайте авторские блюда, которые удивят всех.",
      price: "от 6 500 ₽",
      image: "/modern-fusion-cuisine-plating.jpg",
      imageAlt: "Fusion cuisine",
    },
  ];

  return (
    <section id="courses" className="courses">
      <div className="container">
        <h2 className="courses-title">Наши курсы</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.imageAlt}
                className="course-image"
              />
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  <button className="btn-primary">Записаться</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
