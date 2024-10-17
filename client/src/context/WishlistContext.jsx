// src/context/WishlistContext.js

import React, { createContext } from 'react';
import { useWishlist } from '@hooks/useWishlist';

// Create the Context
export const WishlistContext = createContext();

// Create the Provider component
export const WishlistProvider = ({ children }) => {
  // Use the custom hook to manage wishlist state
  const { wishlistItems, wishlistLength, addToWishlist, removeFromWishlist, updateWishlistItem, removeProductId } = useWishlist();

  return (
  <WishlistContext.Provider value={{ wishlistItems, wishlistLength, addToWishlist, removeFromWishlist, updateWishlistItem, removeProductId }}>
    {children}
  </WishlistContext.Provider>
  );
};
