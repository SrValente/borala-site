'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card animate-fade-in">
      <div className="product-image-wrapper">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        
        <div className="badges">
          <span className="badge badge-demo">Dados de Exemplo</span>
          {product.isHot && <span className="badge badge-hot">HOT</span>}
          {product.isNew && <span className="badge badge-new">NOVO</span>}
        </div>
      </div>
      
      <div className="product-info">
        <div className="category-label">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        {product.description && (
          <p className="product-description" style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: '1.4' }}>
            {product.description}
          </p>
        )}
        
        <div className="price-section">
          <span className="currency">R$</span>
          <span className="price">{product.price.toFixed(2).replace('.', ',')}</span>
          <span className="unit">/ {product.unit}</span>
        </div>
        
        <div className="min-order">Pedido mínimo: {product.minOrder} {product.unit}</div>
        
        <button 
          className="btn btn-action w-full add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
