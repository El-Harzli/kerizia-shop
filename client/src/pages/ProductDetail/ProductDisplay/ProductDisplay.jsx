import React, { useEffect, useState, useContext, useRef } from "react";
import "./ProductDisplay.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import SizeSelector from "@ui/SizeSelector/SizeSelector";
// import WishlistIcon from '../../../components/UI/WishlistIcon/WishlistIcon';

import { WishlistContext } from "@context/WishlistContext";

import useToast from "@hooks/useToast";

function ProductDisplay({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  // Convert images object to an array of [key, image] pairs
  const imageEntries = Object.entries(product.images);

  const [selectedSize, setSelectedSize] = useState(null);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

    // const isProductInWishlist = product ? wishlistItems.some(item => item.id === product.id && item.size === selectedSize) : false;


  const [isWishlisted, setIsWishlisted] = useState(false);

  const { showToastSuccess } = useToast();

  // const toggleWishlist = (e) => {
  //   e.preventDefault();
  //   if (product) {
  //     setIsWishlisted((prev) => !prev);
  //   }
  // };

  // const firstRender = useRef(true);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }
  //   if (product) {
  //     if (isWishlisted) {
  //       showToastSuccess("Product Added Successfully");
  //       addToWishlist(product, selectedSize)
  //     } else {
  //       showToastSuccess("Product Removed Successfully");
  //       removeFromWishlist(product.id, selectedSize)
  //     }
  //   }
  // }, [isWishlisted]);



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

  // useEffect(() => {
  //   const isProductInWishlist = product ? wishlistItems.some(item => item.id === product.id && item.size === selectedSize) : false;
  //   setIsWishlisted(isProductInWishlist)
  // }, [selectedSize])

  useEffect(() => {
    const isProductInWishlist = product
      ? wishlistItems.some(
          (item) => item.id === product.id && item.size === selectedSize
        )
      : false;
    setIsWishlisted(isProductInWishlist);
  }, [selectedSize, wishlistItems, product]);

  // Move the first image to the end
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

    // Recalculate the height on resize (e.g., when the user scrolls or rotates the screen)
    window.addEventListener("resize", setDynamicHeight);

    return () => window.removeEventListener("resize", setDynamicHeight);
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="product-display">
      <div className="product-img-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          // slidesPerView={1.5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, hide: false }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          breakpoints={{
            320: {
              // mobile devices
              slidesPerView: 1,
            },
            480: {
              // small tablets
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
      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-prices">
          <span className="product-old-price">${product.old_price}</span>
          <span className="product-new-price">${product.new_price}</span>
        </div>
        {/* <WishlistIcon product={product} type={'detail'} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/> */}
        <button className="product-add-to-wishlist" onClick={toggleWishlist}>
          {/* Conditionally render the heart icons based on the wishlist state */}
          <i
            className={`bx bx-heart ${isWishlisted ? "inactive" : "active"}`}
          ></i>
          <i
            className={`bx bxs-heart ${isWishlisted ? "active" : "inactive"}`}
          ></i>
        </button>

        <div>
          <div onClick={() => setIsOpen(true)} className="select-size">
            {selectedSize === null ? (
              "Select Size"
            ) : (
              // `Selected Size : ${selectedSize}`
              <>
                Selected Size : <span className="size">{selectedSize}</span>
              </>
            )}
            <span>
              <i className="bx bx-chevron-down"></i>
            </span>
          </div>

          <button className="add-to-bag">Add To Bag</button>

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
