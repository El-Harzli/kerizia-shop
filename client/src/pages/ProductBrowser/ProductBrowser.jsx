import React from 'react'
import './ProductBrowser.css'
import FilterControls from './FilterControls/FilterControls'
import ProductList from './ProductList/ProductList'

function ProductBrowser() {
  return (
    <div className='product-browser'>
        <FilterControls />
        <ProductList />
    </div>
  )
}

export default ProductBrowser