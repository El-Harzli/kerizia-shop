import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '@ui/CartItem/CartItem';
import { CartContext } from '@context/CartContext';
import { my_products } from '@assets/all_product';
import CartHeader from './CartHeader/CartHeader';
import CartSummary from './CartSummary/CartSummary';


function Cart() {
  const { cartListItems, cartListLength } = useContext(CartContext);


  return (
    <div className='cart'>

      <CartHeader cartListLength={cartListLength} />

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

      {
        cartListLength > 0 
        ?
        <CartSummary cartListItems={cartListItems} />
        :
        <div>NOTHING HERE YET</div>

      }


    </div>
  );
}

export default Cart;
