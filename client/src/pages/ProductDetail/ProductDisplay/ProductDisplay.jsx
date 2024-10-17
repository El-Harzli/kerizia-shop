import React, { useEffect, useState, useContext } from "react";
import "./ProductDisplay.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import SizeSelector from "@ui/SizeSelector/SizeSelector";

import { WishlistContext } from "@context/WishlistContext";
import useToast from "@hooks/useToast";
import Button from '@ui/Button/Button'

function ProductDisplay({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const imageEntries = Object.entries(product.images);
  const [selectedSize, setSelectedSize] = useState(null);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { showToastSuccess } = useToast();

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (product) {
      const updatedWishlistedState = !isWishlisted;
      setIsWishlisted(updatedWishlistedState);
      if (updatedWishlistedState) {
        addToWishlist(product, selectedSize);
        showToastSuccess("Product Added Successfully");
      } else {
        removeFromWishlist(product.id, selectedSize);
        showToastSuccess("Product Removed Successfully");
      }
    }
  };

  useEffect(() => {
    const isProductInWishlist = product
      ? wishlistItems.some(
          (item) => item.id === product.id && item.size === selectedSize
        )
      : false;
    setIsWishlisted(isProductInWishlist);
  }, [selectedSize, wishlistItems, product]);

  if (imageEntries.length > 1) {
    const [firstImage] = imageEntries;
    imageEntries.push(imageEntries.shift());
  }

  useEffect(() => {
    function setDynamicHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    setDynamicHeight();
    window.addEventListener("resize", setDynamicHeight);
    return () => window.removeEventListener("resize", setDynamicHeight);
  }, []);

  return (
    <div className="product-display">
      <div className="product-display__img-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, hide: false }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
          }}
        >
          {imageEntries.map(([key, image]) => (
            <SwiperSlide key={key}>
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="product-display__info">
        <div className="product-display__brand">{product.brand}</div>
        <div className="product-display__name">{product.name}</div>
        <div className="product-display__prices">
          <span className="product-display__old-price">${product.old_price}</span>
          <span className="product-display__new-price">${product.new_price}</span>
        </div>
        <button className="product-display__add-to-wishlist" onClick={toggleWishlist}>
          <i className={`bx bx-heart ${isWishlisted ? "inactive" : "active"}`}></i>
          <i className={`bx bxs-heart ${isWishlisted ? "active" : "inactive"}`}></i>
        </button>

        <div>
          <div onClick={() => setIsOpen(true)} className="product-display__select-size">
            {selectedSize === null ? (
              "Select Size"
            ) : (
              <>
                Selected Size : <span className="product-display__size">{selectedSize}</span>
              </>
            )}
            <span>
              <i className="bx bx-chevron-down"></i>
            </span>
          </div>
          <Button variant={'primary'} label={'Add To Bag'}/>
          {/* <button className="product-display__add-to-bag">Add To Bag</button> */}

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, maiores.
          </div>
        </div>

        <SizeSelector
          product={product}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelectedSize={setSelectedSize}
        />
      </div>
    </div>
  );
}
 
export default ProductDisplay;
