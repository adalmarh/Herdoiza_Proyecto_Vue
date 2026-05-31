<template>
  <header class="header">
    <div class="container header-container">
      <div class="logo">
        🎮 PixelStore
      </div>
      <button class="menu-toggle" @click="menuOpen = !menuOpen">☰</button>
      <nav :class="['nav', { open: menuOpen }]">
        <a href="#home">Inicio</a>
        <a href="#featured">Destacados</a>
        <a href="#games">Catálogo</a>
        <a href="#newsletter">Ofertas</a>
      </nav>
      <div class="cart-icon">
        🛒 <span class="cart-count">{{ cartCount }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      cartCount: 3
    }
  }
}
</script>

<style scoped>
.header {
  background: #0a0a0a;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255,107,107,0.3);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav a:hover {
  color: #ff6b6b;
}

.cart-icon {
  position: relative;
  cursor: pointer;
  font-size: 1.3rem;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -12px;
  background: #ff6b6b;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.7rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  
  .nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #0a0a0a;
    padding: 1rem;
    text-align: center;
  }
  
  .nav.open {
    display: flex;
  }
}
</style>