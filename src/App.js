import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Choose from './components/Choose';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Choose />
      <Carousel />
    </div>
  );
}

export default App;
