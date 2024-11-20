import React, { useState } from 'react';
import './SortBy.css';

function SortBy() {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value));    
  };

  return (
    <div className='sort-by'>
      <div className="sort-by__title">
        SORT BY
      </div>
      <div className="sort-by__content">
        <div className="sort-by__option">
          <input 
            type="radio" 
            id="our-picks" 
            name="sort" 
            value="0" 
            checked={selectedOption === 0} 
            onChange={handleOptionChange} 
          />
          <label htmlFor="our-picks">Our Picks</label>
        </div>
        <div className="sort-by__option">
          <input 
            type="radio" 
            id="newest-first" 
            name="sort" 
            value="1" 
            checked={selectedOption === 1} 
            onChange={handleOptionChange} 
          />
          <label htmlFor="newest-first">Newest first</label>
        </div>
        <div className="sort-by__option">
          <input 
            type="radio" 
            id="price-high-to-low" 
            name="sort" 
            value="2" 
            checked={selectedOption === 2} 
            onChange={handleOptionChange} 
          />
          <label htmlFor="price-high-to-low">Price: high to low</label>
        </div>
        <div className="sort-by__option">
          <input 
            type="radio" 
            id="price-low-to-high" 
            name="sort" 
            value="3" 
            checked={selectedOption === 3} 
            onChange={handleOptionChange} 
          />
          <label htmlFor="price-low-to-high">Price: low to high</label>
        </div>
      </div>
    </div>
  );
}

export default SortBy;
