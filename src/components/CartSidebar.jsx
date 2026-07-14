'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import './CartSidebar.css';

export default function CartSidebar() {
  const router = useRouter();
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, cartTotal, updateQuantity, clearCart } = useCart();

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Seu Carrinho B2B</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Seu carrinho está vazio.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">R$ {item.price.toFixed(2).replace('.', ',')} / {item.unit}</p>
                  
                  <div className="cart-quantity-controls">
                    <button 
                      className="qty-btn" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= item.minOrder}
                    >-</button>
                    <span className="qty-display">{item.quantity}</span>
                    <button 
                      className="qty-btn" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                    <span className="min-order-note">Mínimo: {item.minOrder}</span>
                  </div>

                  <p className="cart-item-subtotal">Subtotal: R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total do Orçamento:</span>
              <strong>R$ {cartTotal.toFixed(2).replace('.', ',')}</strong>
            </div>
            <button className="btn btn-action w-full" onClick={handleCheckout}>Finalizar Pedido</button>
          </div>
        )}
      </div>
    </>
  );
}
