import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🎮 PixelStore</h3>
            <p>Tu tienda de videojuegos favorita</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces rápidos</h4>
            <a href="#home">Inicio</a>
            <a href="#featured">Destacados</a>
            <a href="#games">Catálogo</a>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">📘 🐦 📷</div>
          </div>
        </div>
        <p className="footer-bottom">&copy; 2025 PixelStore - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;