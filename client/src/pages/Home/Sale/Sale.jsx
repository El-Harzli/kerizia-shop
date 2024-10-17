import React from 'react'
import './Sale.css'

import ProductSwiperSection from '@layout/ProductSwiperSection/ProductSwiperSection'
import {my_products} from '@assets/all_product'

function Sale() { 
  return (
    <ProductSwiperSection             
        title={"Enjoy 30% Off Your New-Season Essentials!"}
        data={my_products}
        destination={"/Sale"}  />
  )
}

export default Sale