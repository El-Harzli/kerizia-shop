import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '@ui/CartItem/CartItem';
import { CartContext } from '@context/CartContext';
import { my_products } from '@assets/all_product';
import Button from '@ui/Button/Button'

function Cart() {
  const { cartListItems } = useContext(CartContext);

    // Calculate the subtotal (sum of all cart items' price * quantity)
    const subtotal = cartListItems.reduce((sum, item) => {
      const myProduct = my_products.find((product) => product.id === item.id);
      return sum + (myProduct.new_price * item.quantity);
    }, 0);    

      // Delivery fee (you can replace this if it's dynamic)
      const deliveryFee = 24.00;

      // Total (subtotal + delivery)
      const total = subtotal + deliveryFee;


        // Format subtotal and total as currency with commas and two decimal places
    const formatPrice = (price) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);
    };
  

  return (
    <div className='cart'>
      {cartListItems.map((item) => {
        const myProduct = my_products.find((product) => product.id === item.id);
        return (
          <CartItem
            key={`${item.id}-${item.size}`}
            product={myProduct}
            size={item.size}
          />
        );
      })}
      <div className="cart-summary">
        <div className="cart-summary__title">
          Summary
        </div>
        <div className="cart-summary__subtotal">
          <div className="cart-summary__subtotal-title">
            Subtotal
          </div>
          <div className="cart-summary__subtotal-value">
            {formatPrice(subtotal)}
          </div>
        </div>
        <div className="cart-summary__delivery">
          <div className="cart-summary__delivery-title">
            Delivery
          </div>
          <div className="cart-summary__delivery-value">
            {formatPrice(deliveryFee)}
          </div>
        </div>
        <div className="cart-summary__total">
            <div className="cart-summary__total-title">
              Total
            </div>
            <div className="cart-summary__total-value">
              <span>{formatPrice(total)}</span> 
            </div>
        </div>
        <Button variant={'primary'} label={'Go To Checkout'} destination={'/'} style={{fontSize : '1rem'}} />
      </div>
    </div>
  );
}

export default Cart;
