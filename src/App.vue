<template>
  <div id="app">
    <Header />
    <Hero />
    <FeaturedGames />
    <GameGrid />
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import FeaturedGames from './components/FeaturedGames.vue'
import GameGrid from './components/GameGrid.vue'
import Newsletter from './components/Newsletter.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    FeaturedGames,
    GameGrid,
    Newsletter,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  background: #0a0a0a;
  color: #fff;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

html {
  scroll-behavior: smooth;
}
</style>
