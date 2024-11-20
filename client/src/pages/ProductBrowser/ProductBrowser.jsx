import React, { useState } from 'react'
import './ProductBrowser.css'
import FilterControls from './FilterControls/FilterControls'
import ProductList from './ProductList/ProductList'
import FilterBar from './FilterControls/FilterBar/FilterBar'

function ProductBrowser() {

  const [isFilterBarActive, setIsFilterBarActive] = useState(false);


  return (
    <div className='product-browser'>
        <FilterControls setIsFilterBarActive={setIsFilterBarActive} />
        <ProductList />
        <FilterBar isFilterBarActive={isFilterBarActive} setIsFilterBarActive={setIsFilterBarActive} />
    </div>
  )
}

export default ProductBrowser