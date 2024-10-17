import React, { useContext, useEffect } from 'react'
import './WishlistProducts.css'
import WishlistProduct from '@ui/WishlistProduct/WishlistProduct'
import { WishlistContext } from '@context/WishlistContext';

import {my_products} from '@assets/all_product'

function WishlistProducts() {
  const { wishlistItems } = useContext(WishlistContext);

  // useEffect(() => {
  //   // Log the wishlist items whenever the array changes
  //   console.log("Wishlist items updated:", wishlistItems);
  // }, [wishlistItems.length, JSON.stringify(wishlistItems)]);
  

  const wishlistProductDetails = wishlistItems.map((wishlistItem) => {
    // Find the full product details from my_products based on matching id
    const productDetails = my_products.find((product) => product.id === wishlistItem.id);

    if (productDetails) {
      // Merge the size from wishlistItem with the full product details
      return { ...productDetails, size: wishlistItem.size };
    }
    return null; // If no match is found, return null
  }).filter(Boolean); // Remove any null values in case no match is found

  return (
    <div className='favorite-products'>
      {wishlistProductDetails.map((item) => {      
        return <WishlistProduct key={`${item.id}-${item.size}`} product={item}/>
      } )}
    </div>
  )
}

export default WishlistProducts