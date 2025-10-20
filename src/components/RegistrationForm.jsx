import "../../styles/registration.css";

export function RegistrationForm() {
  return (
    <section className="registration">
      <div className="container">
        <div className="registration-card">
          <h2 className="registration-title">Запись на курс</h2>
          <form className="registration-form">
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" placeholder="Введите ваше имя" />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Фамилия</label>
              <input
                type="text"
                id="surname"
                placeholder="Введите вашу фамилию"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="example@mail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Номер телефона</label>
              <input type="tel" id="phone" placeholder="+7 (___) ___-__-__" />
            </div>
            <div className="form-group">
              <label htmlFor="course">Выберите курс</label>
              <select id="course">
                <option value="">Выберите курс</option>
                <option value="italian">Итальянская кухня</option>
                <option value="sushi">Повар-сушист</option>
                <option value="carving">Обучение карвинг</option>
                <option value="tatar">Татарская кухня</option>
                <option value="french">Французская выпечка</option>
                <option value="fusion">Фьюжн-кухня</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg form-submit"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
