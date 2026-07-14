import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import mockProducts from '@/data/mockProducts.json';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      
      <section id="catalogo" className="container" style={{ padding: '80px 24px', minHeight: '60vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Catálogo de <span className="text-gradient">Produtos</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Explore nosso catálogo premium com os melhores preços para revenda B2B. Adicione itens ao seu carrinho e simule um orçamento.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '24px' 
        }}>
          {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <footer style={{ background: 'var(--bg-secondary)', padding: '40px 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
        <p>&copy; 2026 Borala Store. Plataforma B2B de Alta Performance.</p>
      </footer>
    </main>
  );
}
