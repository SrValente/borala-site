'use client';
import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import './Header.css';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="header glass">
      <div className="container header-container">
        <div className="logo-section">
          <Link href="/">
            <h1 className="text-gradient">BORALA STORE</h1>
            <p className="tagline">B2B Premium Imports</p>
          </Link>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>

        <div className={`desktop-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="main-nav">
            <Link href="/" className="nav-link active" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/#catalogo" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Catálogo</Link>
          </nav>

          <div className="actions-section">
            <Link href="/login" className="btn btn-secondary">Entrar</Link>
            <Link href="/cadastro" className="btn btn-primary" style={{ marginRight: '16px' }}>Cadastrar</Link>
            <button className="btn btn-action cart-btn" onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }}>
              Carrinho
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
