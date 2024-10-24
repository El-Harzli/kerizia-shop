import React, { useContext, useState } from 'react';
import './CartItem.css';
import { CartContext } from '@context/CartContext';
import { WishlistContext } from '@context/WishlistContext';
import { Link } from 'react-router-dom';
import useToast from '@hooks/useToast';

function CartProduct({ product, size }) {
  const { removeFromCartList, updateCartListItem, cartListItems } = useContext(CartContext);
  const { wishlistItems, addToWishlist } = useContext(WishlistContext);
  const [isUpdatingSize, setIsUpdatingSize] = useState(false);
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [selectedSize, setSelectedSize] = useState(size);
  const [productQuantity, setProductQuantity] = useState(1);
  const { showToastSuccess } = useToast();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date();
  const deliveryStart = `${months[date.getMonth()]} ${date.getDate()}`;

  const deliveryEndDate = new Date(date.setDate(date.getDate() + 7));
  const deliveryEnd = `${months[deliveryEndDate.getMonth()]} ${deliveryEndDate.getDate()}`;

  const availableSizes = product.sizes;

  const isCartItemInWishlist = !!wishlistItems.find((item) => item.id === product.id && item.size === size);
  
  
  const addCartItemToWishlist = () => {
    addToWishlist(product, selectedSize);
    showToastSuccess("Product added to wishlist");
  }

  // Function to determine sizes already in the cart
  const getUnavailableSizes = () => {
    return cartListItems
      .filter((item) => item.id === product.id && item.size !== size)
      .map((item) => item.size);
  };

  // Function to get the valid size options
  const getAvailableSizes = () => {
    const unavailableSizes = getUnavailableSizes();
    return Object.keys(availableSizes)
      .filter((s) => !unavailableSizes.includes(s) && availableSizes[s] > 0);
  };

  const getProductQuantity = () => {
    return cartListItems
    .filter((item) => item.id === product.id && item.size === size)
    .map((item) => item.quantity);
  }

  const handleRemove = (e) => {
    e.preventDefault();
    setIsRemoving(true);
    setTimeout(() => {
      removeFromCartList(product.id, size);
      showToastSuccess('Product removed from your bag');
    }, 500);
  };

  const handleSizeUpdate = () => {
    setIsUpdatingSize(!isUpdatingSize);
  };

  const handleQuantityUpdate = () => {
    setIsUpdatingQuantity(!isUpdatingQuantity);
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);
    updateCartListItem(product.id, size, newSize);
    setIsUpdatingSize(false);
  };

  const cancelSizeUpdate = () => {
    setIsUpdatingSize(false);
  };

  const cancelQuantityUpdate = () => {
    setIsUpdatingQuantity(false);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setProductQuantity(e.target.value);
    updateCartListItem(product.id, size, size, newQuantity);
    setIsUpdatingQuantity(false);
    
  };

  const maxQuantity = availableSizes ? availableSizes[selectedSize] : 1;

  return (
    <article className={`cart-item ${isRemoving ? 'cart-item--removing' : ''}`}>
      <div className="cart-item__header">
        Estimated delivery time between <span className='cart-item__header__delivery-start'>{deliveryStart}</span> and <span className='cart-item__header__delivery-end'>{deliveryEnd}</span>
      </div>
      <div className="cart-item__content">
        <div className="cart-item__image-wrapper">
          <Link to={`/products/${product.id}`}>
            <img src={product.images["image1"]} alt={product.name} />
          </Link>
        </div>
        <div className="cart-item__details">
          <i onClick={handleRemove} className="cart-item__remove-icon bx bx-x"></i>
          <Link to={`/products/${product.id}`}>
            <div className="cart-item__info">
              <div className="cart-item__badge">New Season</div>
              <div className="cart-item__brand">{product.brand}</div>
              <div className="cart-item__name">{product.name}</div>
            </div>
          </Link>

          <div className="cart-item__options">
            <div className="cart-item__size">
              <div className="cart-item__size-label">Size</div>
              <div className="cart-item__size-value">
                {isUpdatingSize ? (
                  <>
                    <select
                      className='cart-item__size-value-input'
                      value={selectedSize}
                      onChange={handleSizeChange}
                    >
                      {getAvailableSizes().map((availableSize) => (
                        <option
                          className='cart-item__size-value-option'
                          key={availableSize}
                          value={availableSize}
                        >
                          {availableSize}
                        </option>
                      ))}
                    </select>
                    <span onClick={cancelSizeUpdate}>Cancel</span>
                  </>
                ) : (
                  <>
                    {selectedSize} <span onClick={handleSizeUpdate}>Change</span>
                  </>
                )}
              </div>
            </div>

            <div className="cart-item__quantity">
              <div className="cart-item__quantity-label">Quantity</div>
              <div className="cart-item__quantity-value">
                {isUpdatingQuantity ? (
                  <>
                    <select
                      className="cart-item__quantity-input"
                      value={productQuantity}
                      onChange={handleQuantityChange}
                    >
                      {Array.from({ length: maxQuantity }, (_, i) => i + 1).map((quantity) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      ))}
                    </select>
                    <span onClick={cancelQuantityUpdate}>Cancel</span>
                  </>
                ) : (
                  <>
                    {getProductQuantity()}
                    {maxQuantity > 1 && (
                      <span onClick={handleQuantityUpdate}>Change</span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-item__footer">
        <div className="cart-item__footer__wishlist">
          {
            isCartItemInWishlist
            ?
            <>
              <i className='bx bxs-heart'></i> <span>In your wishlist</span>
            </>
            :
            <>
              <i className='bx bx-heart'></i> <span onClick={() => addCartItemToWishlist()} className='cart-item__footer__add'>Add to wishlist</span>
            </>

          }
        </div>
        <div className="cart-item__footer__total-price">
            <span className='cart-item__footer__currency'>$</span>{ productQuantity *  product.new_price  }
        </div>
      </div>
    </article>
  );
}

export default CartProduct;
