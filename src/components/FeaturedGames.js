import React from 'react';
import './FeaturedGames.css';

const featured = [
  { id: 1, title: "Elden Ring", price: "$39.99", original: "$59.99", discount: "-33%", image: "🎯", rating: "⭐⭐⭐⭐⭐" },
  { id: 2, title: "God of War Ragnarök", price: "$49.99", original: "$69.99", discount: "-29%", image: "⚔️", rating: "⭐⭐⭐⭐⭐" },
  { id: 3, title: "Cyberpunk 2077", price: "$29.99", original: "$59.99", discount: "-50%", image: "🌃", rating: "⭐⭐⭐⭐" }
];

function FeaturedGames() {
  return (
    <section id="featured" className="featured">
      <div className="container">
        <h2>🔥 Juegos Destacados del Mes</h2>
        <div className="featured-grid">
          {featured.map(game => (
            <div key={game.id} className="game-card featured-card">
              <div className="game-badge">{game.discount}</div>
              <div className="game-emoji">{game.image}</div>
              <h3>{game.title}</h3>
              <div className="rating">{game.rating}</div>
              <div className="price">
                <span className="current">{game.price}</span>
                <span className="original">{game.original}</span>
              </div>
              <button className="buy-btn">Comprar ahora</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedGames;