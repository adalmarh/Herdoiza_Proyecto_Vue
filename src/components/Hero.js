import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Hasta -40% en juegos AAA</h1>
        <p>Las mejores ofertas en PC, PlayStation, Xbox y Nintendo Switch</p>
        <div className="hero-buttons">
          <button className="btn-primary">Ver ofertas 🔥</button>
          <button className="btn-secondary">Explorar catálogo 🎮</button>
        </div>
        <div className="hero-stats">
          <span>✓ 5000+ juegos</span>
          <span>✓ Envío digital inmediato</span>
          <span>✓ 24/7 Soporte</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
