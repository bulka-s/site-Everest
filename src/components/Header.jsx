import "../../styles/header.css";

export function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="healder-left">
          <a href="#" className="header-logo">
            <img src="/icon.svg" alt="" height="50" />
          </a>

          <nav className="header-nav">
            <a href="#">Главная</a>
            <a href="#about">О нас</a>
            <a href="#courses">Курсы</a>
          </nav>
        </div>

        <div className="header-auth">
          <button className="btn btn-ghost">Войти</button>
          <button className="btn btn-primary">Регистрация</button>
        </div>
      </div>
    </header>
  );
}
