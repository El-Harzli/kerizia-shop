import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '@ui/CartItem/CartItem';
import { CartContext } from '@context/CartContext';
import { my_products } from '@assets/all_product';
import Button from '@ui/Button/Button'

function Cart() {
  const { cartListItems } = useContext(CartContext);

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
            $1000
          </div>
        </div>
        <div className="cart-summary__delivery">
          <div className="cart-summary__delivery-title">
            Delivery
          </div>
          <div className="cart-summary__delivery-value">
            $24.00
          </div>
        </div>
        <div className="cart-summary__total">
            <div className="cart-summary__total-title">
              Total
            </div>
            <div className="cart-summary__total-value">
              USD <span>1024.00</span> 
            </div>
        </div>
        <Button variant={'primary'} label={'Go To Checkout'} destination={'/'} style={{fontSize : '1rem'}} />
      </div>
    </div>
  );
}

export default Cart;
