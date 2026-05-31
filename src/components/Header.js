import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          🎮 PixelStore
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#home">Inicio</a>
          <a href="#featured">Destacados</a>
          <a href="#games">Catálogo</a>
          <a href="#newsletter">Ofertas</a>
        </nav>
        <div className="cart-icon">
          🛒 <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;