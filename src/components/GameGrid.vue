<template>
  <section id="games" class="games-section">
    <div class="container">
      <h2>🎮 Catálogo de Videojuegos</h2>
      <div class="filter-buttons">
        <button 
          v-for="cat in categories" 
          :key="cat" 
          :class="{ active: filter === cat }" 
          @click="filter = cat"
        >
          {{ cat === 'todos' ? 'Todos' : cat }}
        </button>
      </div>
      <div class="games-grid">
        <div v-for="game in filteredGames" :key="game.id" class="game-item">
          <div class="game-image">{{ game.image }}</div>
          <h4>{{ game.name }}</h4>
          <span class="game-category">{{ game.category }}</span>
          <div class="game-footer">
            <span class="game-price">{{ game.price }}</span>
            <button class="quick-buy">+ 🛒</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filter: 'todos',
      categories: ['todos', 'Acción', 'RPG', 'Deportes', 'Shooter'],
      games: [
        { id: 1, name: "The Last of Us Part I", category: "Acción", price: "$49.99", image: "🧟" },
        { id: 2, name: "Hogwarts Legacy", category: "RPG", price: "$44.99", image: "🪄" },
        { id: 3, name: "FIFA 24", category: "Deportes", price: "$34.99", image: "⚽" },
        { id: 4, name: "Call of Duty MW3", category: "Shooter", price: "$59.99", image: "🔫" },
        { id: 5, name: "Baldur's Gate 3", category: "RPG", price: "$54.99", image: "🐉" },
        { id: 6, name: "Spider-Man 2", category: "Acción", price: "$64.99", image: "🕷️" }
      ]
    }
  },
  computed: {
    filteredGames() {
      return this.filter === 'todos' 
        ? this.games 
        : this.games.filter(g => g.category === this.filter)
    }
  }
}
</script>

<style scoped>
.games-section {
  padding: 80px 0;
  background: #0a0a0a;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-buttons button {
  padding: 10px 20px;
  background: rgba(255,255,255,0.1);
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.filter-buttons button:hover,
.filter-buttons button.active {
  background: #ff6b6b;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.game-item {
  background: #1a1a24;
  border-radius: 15px;
  padding: 20px;
  transition: transform 0.3s;
}

.game-item:hover {
  transform: translateY(-5px);
}

.game-image {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 15px;
}

.game-item h4 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.game-category {
  color: #ff6b6b;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 15px;
}

.game-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.game-price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #4ecdc4;
}

.quick-buy {
  background: #ff6b6b;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .games-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>