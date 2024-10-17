import React, { useContext, useEffect, useState } from 'react'
import './WishlistProducts.css'
import WishlistProduct from '@ui/WishlistProduct/WishlistProduct'
import { WishlistContext } from '@context/WishlistContext';

import {my_products} from '@assets/all_product'
import Button from '@ui/Button/Button'

function WishlistProducts() {
  const { wishlistItems } = useContext(WishlistContext);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

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

  const signIn = () => {
    setIsUserSignedIn(true)
  }

  return (
    <div className='wishlist-products'>
      <div className="wishlist-products__title"> WISHLIST </div>
      {
        wishlistItems.length > 0 
        ?       
        <div className="wishlist-products__subtitle"> {wishlistItems.length} items </div>
        :
        (
          !isUserSignedIn ? 
          <>
            <p className="wishlist-products__description">
              Looking for your wishlist? Sign in or create an account to see and shop your favourite items.
            </p>
            <Button label={'Sign In'} variant={'primary'} onClick={() => signIn()} />
          </>
          :
          <>
            <p className="wishlist-products__description">
              Add your favourite items to your wishlist and they'll appear here            
            </p>
            <Button label={'Shop Now'} variant={'primary'} destination={'/'} />
          </>
          
        )
      }
      <div className="wishlist-products__product-container">
        {wishlistProductDetails.map((item) => {      
          return <WishlistProduct key={`${item.id}-${item.size}`} product={item}/>
        })}
      </div>
    </div>
  )
}

export default WishlistProducts