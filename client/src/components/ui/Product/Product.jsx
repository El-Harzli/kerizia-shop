import React, { useState, useEffect, useRef, useContext } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import useToast from '@hooks/useToast';

import {WishlistContext} from '@context/WishlistContext'

function Product({ product }) {
  const { wishlistItems, addToWishlist, removeProductId } = useContext(WishlistContext);

  const isProductInWishlist = product ? wishlistItems.some(item => item.id === product.id) : false;


  const [isWishlisted, setIsWishlisted] = useState(isProductInWishlist);
  const { showToastSuccess } = useToast();

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (product) {
      setIsWishlisted((prev) => !prev);
    }
  };


  const firstRender = useRef(true);

  useEffect(() => {

    if (firstRender.current) {
        firstRender.current = false;
        return;
    }
    
    if (isWishlisted) {
      addToWishlist(product)
      showToastSuccess("Product Added Successfully");
    } else {
      removeProductId(product.id)
      showToastSuccess("Product Removed Successfully");
    }

  }, [isWishlisted, product]);

  
  return (
    <Link to={`/products/${product.id}`}>
      <article className="product">
        <div className="product__image">
          <img src={product.images.image2} alt={product.name} />
        </div>
        <div className="product__info">
          <div className="product__brand">
            {product.brand}
          </div>
          <div className="product__name">
            {product.name}
          </div>
          <div className="product__prices">
            <span className="product__price product__price--old">${product.old_price}</span>
            <span className="product__price product__price--new">${product.new_price}</span>
          </div>
          <button className="product__add-to-wishlist" onClick={toggleWishlist}>
            {/* Conditionally render the heart icons based on the wishlist state */}
            <i className={`bx bx-heart ${isWishlisted ? 'icon--inactive' : 'icon--active'}`}></i>
            <i className={`bx bxs-heart ${isWishlisted ? 'icon--active' : 'icon--inactive'}`}></i>
          </button>
        </div>
      </article>
    </Link>
  );
}

export default Product;
