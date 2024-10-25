import React from 'react'
import './ProductList.css'
import Product from '@ui/Product/Product.jsx'
import {my_products} from '@assets/all_product.js'

function ProductList() {
  return (
    <div className='product-list'>
      {
        my_products.map((product) => {
          return <Product key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default ProductList