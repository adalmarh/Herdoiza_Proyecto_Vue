import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import GameGrid from './components/GameGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedGames />
      <GameGrid />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
