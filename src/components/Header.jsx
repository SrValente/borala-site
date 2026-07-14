'use client';
import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import './Header.css';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="header glass">
      <div className="container header-container">
        <div className="logo-section">
          <Link href="/">
            <h1 className="text-gradient">BORALA STORE</h1>
            <p className="tagline">B2B Premium Imports</p>
          </Link>
        </div>
        
        <nav className="main-nav">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/#catalogo" className="nav-link">Catálogo</Link>
        </nav>

        <div className="actions-section">
          <Link href="/login" className="btn btn-secondary">Entrar</Link>
          <Link href="/cadastro" className="btn btn-primary" style={{ marginRight: '16px' }}>Cadastrar</Link>
          <button className="btn btn-action cart-btn" onClick={() => setIsCartOpen(true)}>
            Carrinho
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
