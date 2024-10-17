import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function Button({ variant, label, onClick, destination, myMarginTop, style }) {
  // If a destination is provided, render a Link
  if (destination) {
    // Check if the margin that I'm adding is valid, 
    // if not, make it empty instead of undefined 
    // Because if it's undefined, that's literally what will be written in my class
    if(!myMarginTop) myMarginTop = "";

    return (
      <Link to={destination} className={`button button__${variant} ${myMarginTop}`} style={style}>
        {label}
      </Link>
    );
  }
  
  // Otherwise, render a regular button with an onClick handler
  return (
    <button className={`button button__${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
