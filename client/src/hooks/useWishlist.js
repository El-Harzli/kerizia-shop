// src/hooks/useWishlist.js

import { useState, useEffect } from 'react';

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlistItems');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [wishlistLength, setWishlistLength] = useState(() => {
    const savedCounter = localStorage.getItem('wishlistLength');
    return savedCounter ? parseInt(savedCounter, 10) : 0;
  });

  // Update localStorage and wishlistLength when wishlistItems changes
  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    setWishlistLength(wishlistItems.length);
  }, [wishlistItems]);

  const addToWishlist = (product, size = null) => {
    // Check if the product is already in the wishlist
    if (!wishlistItems.find(item => item.id === product.id && item.size === size)) {
      const favoriteProduct = {
        id: product.id,
        size: size !== undefined ? size : null, // Set size to null if undefined
      };
  
      setWishlistItems((prevItems) => [...prevItems, favoriteProduct]);
    }
  };
  

  const removeFromWishlist = (id, size = null) => {
    // Filter out the item with the specific id and size
    setWishlistItems((prevItems) => prevItems.filter(item => !(item.id === id && item.size === size)));
  };


  const removeProductId = (id) => {
    setWishlistItems((prevItems) => prevItems.filter(item => !(item.id === id)));

  }

  const updateWishlistItem = (id, currentSize, newSize) => {
    setWishlistItems((prevItems) => {
      // Check if the item with the same id and newSize already exists
      const existingItem = prevItems.find(item => item.id === id && item.size === newSize);
  
      if (existingItem) {
        console.log('Item with the same id and size already exists in the wishlist.');
        return prevItems; // Return the current list without making any changes
      }
  
      // Proceed to update the item with the current size
      return prevItems.map(item =>
        item.id === id && item.size === currentSize
          ? { ...item, size: newSize } // Update the size if both id and currentSize match
          : item // Return the item as is if there's no match
      );
    });
  };
  
  

  return {
    wishlistItems,
    wishlistLength,
    addToWishlist,
    removeFromWishlist,
    removeProductId,
    updateWishlistItem,
  };
};
