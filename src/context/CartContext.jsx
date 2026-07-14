'use client';
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev; // Se já existe, não adiciona novamente do zero
      }
      return [...prev, { ...product, quantity: product.minOrder }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId, novaQuantidade) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId) {
        // Bloqueia se tentar diminuir abaixo do mínimo
        if (novaQuantidade < item.minOrder) return item;
        return { ...item, quantity: novaQuantidade };
      }
      return item;
    }));
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
