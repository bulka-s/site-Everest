import "../../styles/registration.css";

export function RegistrationForm() {
  return (
    <section className="registration">
      <div className="container">
        <h2 className="registration-title">Запись на курс</h2>
        <div className="registration-card">
          <form className="registration-form">
            <div className="form-group">
              <input type="text" id="name" placeholder="Имя" />
            </div>
            <div className="form-group">
              <input type="text" id="surname" placeholder="Фамилия" />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="E-mail" />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" placeholder="Номер телефона" />
            </div>
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span className="custom-checkbox">
                </span>
                Получать полезную рассылку
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg form-submit"
            >
              Записаться
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
