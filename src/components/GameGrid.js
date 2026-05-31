import React, { useState } from 'react';
import './GameGrid.css';

const allGames = [
  { id: 1, name: "The Last of Us Part I", category: "Acción", price: "$49.99", image: "🧟", year: 2023 },
  { id: 2, name: "Hogwarts Legacy", category: "RPG", price: "$44.99", image: "🪄", year: 2023 },
  { id: 3, name: "FIFA 24", category: "Deportes", price: "$34.99", image: "⚽", year: 2023 },
  { id: 4, name: "Call of Duty MW3", category: "Shooter", price: "$59.99", image: "🔫", year: 2023 },
  { id: 5, name: "Baldur's Gate 3", category: "RPG", price: "$54.99", image: "🐉", year: 2023 },
  { id: 6, name: "Spider-Man 2", category: "Acción", price: "$64.99", image: "🕷️", year: 2023 }
];

function GameGrid() {
  const [filter, setFilter] = useState('todos');
  const filteredGames = filter === 'todos' ? allGames : allGames.filter(g => g.category === filter);

  return (
    <section id="games" className="games-section">
      <div className="container">
        <h2>🎮 Catálogo de Videojuegos</h2>
        <div className="filter-buttons">
          <button className={filter === 'todos' ? 'active' : ''} onClick={() => setFilter('todos')}>Todos</button>
          <button className={filter === 'Acción' ? 'active' : ''} onClick={() => setFilter('Acción')}>Acción</button>
          <button className={filter === 'RPG' ? 'active' : ''} onClick={() => setFilter('RPG')}>RPG</button>
          <button className={filter === 'Deportes' ? 'active' : ''} onClick={() => setFilter('Deportes')}>Deportes</button>
          <button className={filter === 'Shooter' ? 'active' : ''} onClick={() => setFilter('Shooter')}>Shooter</button>
        </div>
        <div className="games-grid">
          {filteredGames.map(game => (
            <div key={game.id} className="game-item">
              <div className="game-image">{game.image}</div>
              <h4>{game.name}</h4>
              <span className="game-category">{game.category}</span>
              <div className="game-footer">
                <span className="game-price">{game.price}</span>
                <button className="quick-buy">+ 🛒</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameGrid;