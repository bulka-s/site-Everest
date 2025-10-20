import "../../styles/footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>КУЛИНАР</h3>
            <p>Профессиональная кулинарная школа</p>
          </div>
          <div className="footer-section">
            <h3>Контакты</h3>
            <div className="footer-links">
              <p>info@culinar.ru</p>
              <p>+7 (800) 123-45-67</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Социальные сети</h3>
            <div className="footer-links">
              <a href="#">VK</a>
              <a href="#">Telegram</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2025 КУЛИНАР. Все права защищены.</div>
      </div>
    </footer>
  );
}
