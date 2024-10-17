// src/hooks/useWishlist.js

import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cartListItems, setCartListItems] = useState(() => {
    const savedCartList = localStorage.getItem('cartListItems');
    return savedCartList ? JSON.parse(savedCartList) : [];
  });

  const [cartListLength, setCartListLength] = useState(() => {
    const savedCounter = localStorage.getItem('cartListLength');
    return savedCounter ? parseInt(savedCounter, 10) : 0;
  });

  // Update localStorage and cartListLength when cartListItems changes
  useEffect(() => {
    localStorage.setItem('cartListItems', JSON.stringify(cartListItems));
    setCartListLength(cartListItems.length);
  }, [cartListItems]);

  const addToCartList = (product, size = null) => {
    // Check if the product is already in the wishlist
    if (!cartListItems.find(item => item.id === product.id && item.size === size)) {
      const currentProduct = {
        id: product.id,
        size: size !== undefined ? size : null, // Set size to null if undefined
      };
  
      setCartListItems((prevItems) => [...prevItems, currentProduct]);
    }
  };
  

  const removeFromCartList = (id, size = null) => {
    // Filter out the item with the specific id and size
    setCartListItems((prevItems) => prevItems.filter(item => !(item.id === id && item.size === size)));
  };


  const removeProductId = (id) => {
    setCartListItems((prevItems) => prevItems.filter(item => !(item.id === id)));

  }

  const updateCartListItem = (id, currentSize, newSize) => {
    setCartListItems((prevItems) =>
      prevItems.map(item => 
        item.id === id && item.size === currentSize ? { ...item, size: newSize } : item
      )
    );
  };
  

  return {
    cartListItems,
    cartListLength,
    addToCartList,
    removeFromCartList,
    removeProductId,
    updateCartListItem,
  };
};
