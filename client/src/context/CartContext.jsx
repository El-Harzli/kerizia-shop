// src/context/WishlistContext.js

import React, { createContext } from 'react';
import { useCart } from '@hooks/useCart';

// Create the Context
export const CartContext = createContext();

// Create the Provider component
export const CartProvider = ({ children }) => {
  // Use the custom hook to manage wishlist state
  const { cartListItems, cartListLength, addToCartList, removeFromCartList, removeProductId, updateCartListItem } = useCart();

  return (
  <CartContext.Provider value={{ cartListItems, cartListLength, addToCartList, removeFromCartList, removeProductId, updateCartListItem }}>
    {children}
  </CartContext.Provider>
  );
};
