import "../../styles/header.css";
import { useState } from "react";

export function Header({ onRegisterClick, onLoginClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
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

        <button
          className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav">
            <a href="#">Главная</a>
            <a href="#about">О нас</a>
            <a href="#courses">Курсы</a>
          </nav>
          <div className="mobile-auth">
            <button className="btn" onClick={onLoginClick}>Войти</button>
            <button className="btn btn-primary" onClick={onRegisterClick}>Регистрация</button>
          </div>
        </div>

        <div className="header-auth">
          <button className="btn btn-ghost" onClick={onLoginClick}>
            Войти
          </button>
          <button className="btn btn-primary" onClick={onRegisterClick}>
            Регистрация
          </button>
        </div>
      </div>
    </header>
  );
}
