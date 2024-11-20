import React from 'react'
import './FilterControls.css'

function FilterControls({setIsFilterBarActive}) {
  return (
    <div className="filter-controls__refine-catalog-actions">
        <button onClick={() => setIsFilterBarActive(true)} className="filters-button">Refine <span><i className='bx bx-menu-alt-right'></i></span></button>
    </div>
  )
}

export default FilterControls