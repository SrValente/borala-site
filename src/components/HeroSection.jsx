import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container hero-content animate-fade-in">
        <h2 className="hero-title">
          Os Melhores Produtos para <span className="text-gradient">Alavancar suas Vendas</span>
        </h2>
        <p className="hero-subtitle">
          Importação B2B direta, garantindo o melhor preço para o seu negócio. Compre no atacado com facilidade e confiança.
        </p>
        
        <div className="hero-stats">
          <div className="stat-card glass">
            <strong>10K+</strong>
            <span>Produtos</span>
          </div>
          <div className="stat-card glass">
            <strong>24h</strong>
            <span>Despacho Rápido</span>
          </div>
          <div className="stat-card glass">
            <strong>100%</strong>
            <span>Garantia B2B</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#catalogo" className="btn btn-action btn-lg">Explorar Catálogo</a>
        </div>
      </div>
    </section>
  );
}
