import React from 'react'
import './ProductSwiperSection.css'

import CustomSwiper from '@layout/CustomSwiper/CustomSwiper'
import Button from '@ui/Button/Button'

function ProductSwiperSection({title, data, destination}) {
  return (
    <section className='product-swiper-section'>
        {
            title && ( <div className="product-swiper-section__title">
                {title}
            </div>)
        }
       
        <CustomSwiper data={data} />

        <Button variant={'accent'} label={'Shop now'} destination={destination} 
          myMarginTop="mt-3" style={{fontSize : '1.05rem', padding : '.7rem'}}  />

    </section>
  )
}

export default ProductSwiperSection