'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

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
          <Link href="#catalogo" className="nav-link">Catálogo</Link>
          <Link href="#integracoes" className="nav-link">Integrações API</Link>
        </nav>

        <div className="actions-section">
          <button className="btn btn-secondary">Login</button>
          <button className="btn btn-primary cart-btn">
            Carrinho
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
