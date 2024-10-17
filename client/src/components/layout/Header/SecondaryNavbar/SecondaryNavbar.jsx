import React, { useState, useRef, useEffect } from "react";
import "./SecondaryNavbar.css";
import Button from '@ui/Button/Button';

function SecondaryNavbar({ isSecondaryNavbarActive, setIsSecondaryNavbarActive }) {
  const linkItems = ["20% off", "New in", "Brands", "Clothing", "Shoes", "Accessories", "Homeware", "Sale"];
  const [activeCategory, setActiveCategory] = useState("Menswear");
  const underlineRef = useRef(null);

    // Function to recalculate underline position and width
    const updateUnderlinePosition = () => {
      const activeItem = document.querySelector(".category-list__item--active");
      if (activeItem && underlineRef.current) {
        const { offsetLeft, clientWidth } = activeItem;
        underlineRef.current.style.width = `${clientWidth}px`;
        underlineRef.current.style.left = `${offsetLeft}px`;
      }
    };
  
    // Run once when component mounts
    useEffect(() => {
      updateUnderlinePosition();  // Initial update
    }, [activeCategory]);  // Only run when activeCategory changes
  
    // Add resize listener to adjust elements on window resize
    useEffect(() => {
      const handleResize = () => {
        updateUnderlinePosition();  // Update underline position when window resizes
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    // Handle sidebar activation and prevent body scroll
    useEffect(() => {
      if (isSecondaryNavbarActive) {
        document.documentElement.style.overflow = "hidden";
  
        // Ensure the underline is recalculated when the sidebar becomes active
        setTimeout(updateUnderlinePosition, 0);
      } else {
        document.documentElement.style.overflow = "";
      }
    }, [isSecondaryNavbarActive]);

  return (
    <nav className={`secondary-navbar ${isSecondaryNavbarActive ? "secondary-navbar--active" : ""}`}>
      <div className="secondary-navbar__header">
        <div className="secondary-navbar__logo">KERIZIA</div>
        <i
          onClick={() => setIsSecondaryNavbarActive(false)}
          className="bx bx-x"
        ></i>
      </div>
      <div className="secondary-navbar__categories">
        <ul className="category-list">
          <li
            onClick={() => setActiveCategory("Womenswear")}
            className={`category-list__item ${activeCategory === "Womenswear" ? "category-list__item--active" : ""}`}
          >
            WOMENSWEAR
          </li>
          <li
            onClick={() => setActiveCategory("Menswear")}
            className={`category-list__item ${activeCategory === "Menswear" ? "category-list__item--active" : ""}`}
          >
            MENSWEAR
          </li>
          <li
            onClick={() => setActiveCategory("Kidswear")}
            className={`category-list__item ${activeCategory === "Kidswear" ? "category-list__item--active" : ""}`}
          >
            KIDSWEAR
          </li>
          <div ref={underlineRef} className="category-list__underline"></div>
        </ul>
      </div>
      <div className="secondary-navbar__links">
        <ul className="secondary-navbar__nav-list">
          <li className="secondary-navbar__nav-list-item">{activeCategory} homepage</li>
          {linkItems.map((linkItem, index) => (
            <li key={index} className="secondary-navbar__nav-list-item">
              <span className="secondary-navbar__nav-list-link">{linkItem}</span> 
              <i className="bx bx-chevron-right"></i>
            </li>
          ))}
        </ul>
      </div>

      <div className="secondary-navbar__login-register">
        <div className="secondary-navbar__login-register-title">My Account</div>
        <Button variant={'primary'} label={'Sign in'} />
        <Button variant={'accent'} label={'Register'} />
      </div>
    </nav>
  );
}

export default SecondaryNavbar;
