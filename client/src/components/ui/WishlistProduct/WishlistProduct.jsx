import React, { useContext, useEffect, useState } from 'react';
import './WishlistProduct.css';
import SizeSelector from '@ui/SizeSelector/SizeSelector';
import { WishlistContext } from '@context/WishlistContext';
import { CartContext } from '@context/CartContext'
import Button from '@ui/Button/Button'
import {Link} from 'react-router-dom'
import useToast from '@hooks/useToast'

function WishlistProduct({ product }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState(product.size);
    const [mySize, setMySize] = useState(null);
    const [isRemoving, setIsRemoving] = useState(false);

    const { removeFromWishlist, updateWishlistItem } = useContext(WishlistContext);
    const { cartListItems, addToCartList } = useContext(CartContext);

    const isProductInCart = cartListItems.find((item) => {
        if(item.id === product.id && item.size === product.size){
            return true;
        }
    } )

    const {showToastSuccess} = useToast();


    useEffect(() => {
        if(!isOpen){
            if(mySize){
                setSelectedSize(mySize)
            }
        }
    }, [isOpen])

    useEffect(() => {
        if (selectedSize !== product.size) {
            updateWishlistItem(product.id, product.size, selectedSize);
        }
    }, [selectedSize]);

    const handleRemove = (e) => {
        e.preventDefault();
        setIsRemoving(true);
        setTimeout(() => {
            removeFromWishlist(product.id, product.size);
            showToastSuccess('Product removed from your wishlist')
        }, 500);
    };

    const addToBag = () => {
        if(!selectedSize){
            setIsOpen(true)
        }
        else{
            addToCartList(product, selectedSize);
            showToastSuccess("Product is now in your Bag")
        }
    }

    return (
        <article className={`wishlist-product ${isRemoving ? 'wishlist-product--removing' : ''}`}>
            <Link to={`/products/${product.id}`}>
                <div className="wishlist-product__main-image">
                    <img src={product.images.image2} alt="Product" />
                    <i onClick={handleRemove} className='wishlist-product__remove-icon bx bx-x'></i>
                </div>
                <div className="wishlist-product__details">
                    <div className="wishlist-product__badge">
                        New Season
                    </div>
                    <div className="wishlist-product__brand">
                        {product.brand}
                    </div>
                    <div className="wishlist-product__name">
                        {product.name}
                    </div>
                    <div className="wishlist-product__prices">
                        <span className="wishlist-product__prices-old">${product.old_price}</span>
                        <span className="wishlist-product__prices-new">${product.new_price}</span>
                    </div>
                </div>
            </Link>
            <div className="wishlist-product__actions">
                <div onClick={() => setIsOpen(true)} className="wishlist-product__select-size">
                    {!selectedSize ? 'Select Size' : `Size: ${selectedSize}`}
                    <span><i className='bx bx-chevron-down'></i></span>
                </div>
                {
                    isProductInCart
                    ?
                    <Button variant={'primary'} label={'In your bag'} destination={'/checkout'} style={{padding : '0.5rem 1rem', fontSize : '0.95rem'}}/>
                    :
                    <Button variant={'primary'} label={'Add To Bag'} onClick={() => addToBag()} style={{padding : '0.5rem 1rem', fontSize : '0.95rem'}}/>
                }
                {/* <button className="wishlist-product__add-to-bag">Add To Bag</button> */}
                <SizeSelector product={product} isOpen={isOpen} setIsOpen={setIsOpen} setMySize={setMySize}  />
            </div>
        </article>
    );
}

export default WishlistProduct;
