import React, { useState, useEffect } from 'react';
import './FilterBy.css';
import SelectedFilter from './SelectedFilter/SelectedFilter';
import X from './SelectedFilter/XXX/X'

function FilterBy() {
    const [currentOption, setCurrentOption] = useState(null);
    const [isFilterActive, setIsFilterActive] = useState(false);


    useEffect(() => {
        if (isFilterActive) {
            document.documentElement.style.overflow = "hidden";
        } else {
            // Remove this cause it should still be hidden when closing this tab
            // document.documentElement.style.overflow = "";
        }
    }, [isFilterActive]);

    const handleOptionClick = (option) => {
        setCurrentOption(option);
        setIsFilterActive(true);
    };

    return (
        <div className='filter-by'>
            <div className="filter-by__title">
                FILTERS
            </div>
            <div className="filter-by__content">
                <div className="filter-by__options">
                    {['Category', 'Brand', 'Price', 'Size'].map(option => (
                        <div 
                            key={option} 
                            onClick={() => handleOptionClick(option)} 
                            className={`filter-by__option ${currentOption === option ? 'filter-by__option--active' : ''}`}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
            {/* <SelectedFilter type={currentOption} isFilterActive={isFilterActive} setIsFilterActive={setIsFilterActive}  /> */}
            <X type={currentOption} isFilterActive={isFilterActive} setIsFilterActive={setIsFilterActive}  />
        </div>
    );
}

export default FilterBy;
