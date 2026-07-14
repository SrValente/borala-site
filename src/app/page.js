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
      
      <section id="catalogo" className="container" style={{ padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Catálogo de <span className="text-gradient">Produtos</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Estes produtos são apenas para demonstração do layout e das capacidades da plataforma.
            Quando conectarmos as APIs do Mercado Livre e Shopee, seus produtos reais aparecerão aqui.
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

      <section id="integracoes" style={{ background: 'var(--bg-secondary)', padding: '80px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '48px' }}>Arquitetura Pronta para <span className="text-gradient">Integrações</span></h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', width: '300px', textAlign: 'left' }}>
              <h3 style={{ color: '#F5E013', marginBottom: '16px' }}>Mercado Livre</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px' }}>Sincronização bidirecional de estoque, preços e pedidos via API oficial.</p>
              <div className="badge" style={{ background: 'var(--bg-tertiary)', display: 'inline-block' }}>Aguardando Chave de API</div>
            </div>
            
            <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', width: '300px', textAlign: 'left' }}>
              <h3 style={{ color: '#EE4D2D', marginBottom: '16px' }}>Shopee</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px' }}>Importação automática de catálogos e gestão centralizada de envios.</p>
              <div className="badge" style={{ background: 'var(--bg-tertiary)', display: 'inline-block' }}>Aguardando Token</div>
            </div>
            
            <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', width: '300px', textAlign: 'left' }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '16px' }}>Seu CRM</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px' }}>Envio de leads B2B diretamente para o funil de vendas da sua equipe.</p>
              <div className="badge" style={{ background: 'var(--bg-tertiary)', display: 'inline-block' }}>Aguardando Definição</div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
        <p>&copy; 2026 Borala Store. Plataforma B2B de Alta Performance.</p>
      </footer>
    </main>
  );
}
