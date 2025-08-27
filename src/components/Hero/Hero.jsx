import React from 'react';
import './Hero.css';
import heroBackground from '../../assets/hero-background.jpg'; // Sua imagem de fundo

const Hero = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero-content">
        <h1>Está em busca de uma festa perfeita?</h1>
        <p>Consulte nossa loja</p>
        <button className="hero-btn">Shop now</button>
      </div>
    </div>
  );
};

export default Hero;