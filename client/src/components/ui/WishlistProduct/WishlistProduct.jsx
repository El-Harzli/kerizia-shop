import React, { useContext, useEffect, useState } from 'react';
import './WishlistProduct.css';
import SizeSelector from '@ui/SizeSelector/SizeSelector';
import { WishlistContext } from '@context/WishlistContext';

function WishlistProduct({ product }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState(product.size);
    const [isRemoving, setIsRemoving] = useState(false); // New state for removal animation

    const { removeFromWishlist, updateWishlistItem } = useContext(WishlistContext);

    useEffect(() => {
        if (selectedSize !== product.size) {
            updateWishlistItem(product.id, product.size, selectedSize); // Pass the current size and the new size
        }
    }, [selectedSize]);

    const handleRemove = () => {
        setIsRemoving(true); // Trigger the animation
        setTimeout(() => {
            removeFromWishlist(product.id, product.size); // Actually remove the product after animation
        }, 500); // Match the timeout to the CSS animation duration
    };

    return (
        <article className={`wishlist-product ${isRemoving ? 'removing' : ''}`}> {/* Apply removing class */}
            <div className="wishlist-product__main-image">
                <img src={product.images.image2} alt="Product Image" />
                <i onClick={handleRemove} className='bx bx-x'></i>
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
                    <span className="wishlist-product__prices-old-price">${product.old_price}</span>
                    <span className="wishlist-product__prices-new-price">${product.new_price}</span>
                </div>
            </div>
            <div className="wishlist-product__actions">
                <div onClick={() => setIsOpen(true)} className="select-size">
                    {!selectedSize ? 'Select Size' : `Size: ${selectedSize}`}
                    <span><i className='bx bx-chevron-down'></i></span>
                </div>
                <button className="add-to-bag">Add To Bag</button>
                <SizeSelector product={product} isOpen={isOpen} setIsOpen={setIsOpen} setSelectedSize={setSelectedSize} />
            </div>
        </article>
    );
}

export default WishlistProduct;
