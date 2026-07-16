'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { useCart } from '@/context/CartContext';

export default function CheckoutSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart when the user reaches the success page
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main style={{ minHeight: '100dvh', background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, padding: '40px 24px' }}>
        <div className="glass animate-fade-in" style={{ width: '100%', maxWidth: '500px', padding: '48px', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          
          <div style={{ 
            width: '80px', height: '80px', background: 'var(--success-color)', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', margin: '0 auto 24px' 
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--text-primary)' }}>Pedido Recebido!</h2>
          
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '16px', lineHeight: '1.6' }}>
            Seu orçamento B2B foi registrado com sucesso. Nossa equipe comercial analisará as quantidades e entrará em contato em até <strong>2 horas úteis</strong> para confirmar o faturamento.
          </p>
          
          <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-sm)', marginBottom: '32px' }}>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Número do Pedido</p>
            <strong style={{ fontSize: '18px', color: 'var(--text-primary)', letterSpacing: '2px' }}>#BORALA-{Math.floor(100000 + Math.random() * 900000)}</strong>
          </div>
          
          <Link href="/" className="btn btn-action w-full" style={{ padding: '16px' }}>
            Voltar ao Catálogo
          </Link>

        </div>
      </div>
    </main>
  );
}
