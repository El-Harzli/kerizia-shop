import React, { useContext } from 'react';
import './MainNavbar.css';
import { Link } from 'react-router-dom';
import { WishlistContext } from '@context/WishlistContext';
import { CartContext } from '@context/CartContext';

function MainNavbar({ setIsSearchbarMenuActive, setIsSecondaryNavbarActive }) {
  const { wishlistLength } = useContext(WishlistContext);
  const { cartListLength } = useContext(CartContext);

  const menuClickHandler = () => {
    setIsSecondaryNavbarActive(true);
  };

  return (
    <nav className="main-navbar">
      <div className="main-navbar__left-side">
        <span onClick={menuClickHandler} className="main-navbar__icon main-navbar__icon--hamburger">
          <i className="bx bx-menu"></i>
        </span>
        <span className="main-navbar__icon main-navbar__icon--search" onClick={() => setIsSearchbarMenuActive(true)}>
          <i className="bx bx-search"></i>
        </span>
      </div>
      <div className="main-navbar__logo">
        <Link to={'/'}>KERIZIA</Link>
      </div>
      <div className="main-navbar__right-side">
        <Link to={'/wishlist'}> 
          <span className="main-navbar__icon main-navbar__icon--heart">
            <i className="bx bx-heart"></i>
            {wishlistLength > 0 && <span className="main-navbar__counter">{wishlistLength}</span>}
          </span>
        </Link>
        <Link to={'/checkout'}>
          <span className="main-navbar__icon main-navbar__icon--cart">
            <i className="bx bx-shopping-bag"></i>
            {cartListLength > 0 && <span className="main-navbar__counter">{cartListLength}</span>}
            
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default MainNavbar;
