import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container hero-content animate-fade-in">
        <h2 className="hero-title">
          Conectando o seu negócio às <span className="text-gradient">Melhores Oportunidades</span>
        </h2>
        <p className="hero-subtitle">
          Importação B2B premium e integração direta com os maiores marketplaces do Brasil. 
          Escale suas vendas com qualidade e tecnologia.
        </p>
        
        <div className="hero-stats">
          <div className="stat-card glass">
            <strong>10K+</strong>
            <span>Produtos</span>
          </div>
          <div className="stat-card glass">
            <strong>API</strong>
            <span>Meli & Shopee</span>
          </div>
          <div className="stat-card glass">
            <strong>CRM</strong>
            <span>Ready</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#catalogo" className="btn btn-primary btn-lg">Explorar Catálogo</a>
          <a href="#integracoes" className="btn btn-secondary btn-lg">Ver Integrações</a>
        </div>
      </div>
    </section>
  );
}
