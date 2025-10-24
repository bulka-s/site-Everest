import "../../styles/footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src="/icon_hor.svg" alt="" height="46" />
          <span className="footer-logo-text">
            Профессиональная кулинарная школа
          </span>
        </div>
        <div className="footer-bottom">© 2025 EVEREST. Все права защищены.</div>
      </div>
    </footer>
  );
}
