<template>
  <section id="featured" class="featured">
    <div class="container">
      <h2>🔥 Juegos Destacados del Mes</h2>
      <div class="featured-grid">
        <div v-for="game in featured" :key="game.id" class="game-card featured-card">
          <div class="game-badge">{{ game.discount }}</div>
          <div class="game-emoji">{{ game.image }}</div>
          <h3>{{ game.title }}</h3>
          <div class="rating">{{ game.rating }}</div>
          <div class="price">
            <span class="current">{{ game.price }}</span>
            <span class="original">{{ game.original }}</span>
          </div>
          <button class="buy-btn">Comprar ahora</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      featured: [
        { id: 1, title: "Elden Ring", price: "$39.99", original: "$59.99", discount: "-33%", image: "🎯", rating: "⭐⭐⭐⭐⭐" },
        { id: 2, title: "God of War Ragnarök", price: "$49.99", original: "$69.99", discount: "-29%", image: "⚔️", rating: "⭐⭐⭐⭐⭐" },
        { id: 3, title: "Cyberpunk 2077", price: "$29.99", original: "$59.99", discount: "-50%", image: "🌃", rating: "⭐⭐⭐⭐" }
      ]
    }
  }
}
</script>

<style scoped>
.featured {
  padding: 80px 0;
  background: #0f0f14;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.game-card {
  background: #1a1a24;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  position: relative;
  transition: transform 0.3s;
}

.game-card:hover {
  transform: translateY(-5px);
}

.featured-card {
  background: linear-gradient(135deg, #1a1a24, #1e1e2a);
  border: 1px solid rgba(255,107,107,0.3);
}

.game-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ff4757;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.game-emoji {
  font-size: 4rem;
  margin-bottom: 15px;
}

.game-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.rating {
  margin-bottom: 15px;
}

.price {
  margin-bottom: 20px;
}

.current {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4ecdc4;
  margin-right: 10px;
}

.original {
  text-decoration: line-through;
  color: #888;
  font-size: 0.9rem;
}

.buy-btn {
  background: linear-gradient(135deg, #ff6b6b, #ff4757);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s;
}

.buy-btn:hover {
  transform: scale(1.05);
}
</style>