import React from 'react'
import './CartHeader.css'
import Button from '@ui/Button/Button'


function CartHeader({cartListLength}) {
    return (
        <div className="cart-header">
            <div className="cart-header__title">
            SHOPPING BAG
            </div>
            <div className="cart-header__content">
            {
                cartListLength > 0 
                ?
                <Button variant={'primary'} label={'Go To Checkout'} destination={'/'} style={{fontSize : '1rem', marginBlock : '.75rem'}} />
                :
                <>
                <p> There’s nothing in your bag yet... </p>
                <Button variant={'primary'} label={'Shop Men'} destination={'/'} style={{fontSize : '1rem', marginBlock : '.75rem'}} />
                </>

            }
            </div>
        </div>
    )
}

export default CartHeader