import React, {useEffect} from 'react'
import './FilterBar.css'
import SortBy from './SortBy/SortBy'
import FilterBy from './FilterBy/FilterBy'

function FilterBar({isFilterBarActive, setIsFilterBarActive}) {

useEffect(() => {
    if (isFilterBarActive) {
        document.documentElement.style.overflow = "hidden";
    } else {
        document.documentElement.style.overflow = "";
    }
    }, [isFilterBarActive]);


    useEffect(() => {
        function setDynamicHeight() {
          const vh = window.innerHeight * 0.01; 
          document.documentElement.style.setProperty('--vh', `${vh}px`);          
        }
    
        setDynamicHeight();
    
        window.addEventListener('resize', setDynamicHeight);
    
        return () => window.removeEventListener('resize', setDynamicHeight);
      }, [isFilterBarActive]);
    
  return (
    <div className={`filter-bar ${isFilterBarActive ? 'filter-bar--active' : ''} ` }>
        <div className="filter-bar__container">
            <i onClick={() => setIsFilterBarActive(false)} className={`bx bx-x filter-bar__close`}></i>
            <SortBy />
            <FilterBy />
            
        </div>
    </div>
  )
}

export default FilterBar