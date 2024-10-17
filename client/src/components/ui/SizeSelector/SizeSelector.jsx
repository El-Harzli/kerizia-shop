import React from 'react'
import BottomSheet from "react-draggable-bottom-sheet"
import './SizeSelector.css'


function SizeSelector({product, isOpen, setIsOpen, setSelectedSize}) {
  return (
    
            <BottomSheet isOpen={isOpen} close={setIsOpen}>
              <div className='makeMeDraged' style={{ textAlign: "left", padding: "0px 16px 16px" }}>
                {
                  Object.entries(product.sizes)
                  .filter(([size, quantity]) => quantity > 0)
                  .map(([size, quantity]) => <div key={size} onClick={() => {setSelectedSize(size); setIsOpen(false)}} className='pb-3' data-no-drag>{size} and quant : {quantity}</div> )
                }
                <button className="add-to-bag"> Add To Bag </button>
              </div>
            </BottomSheet>


  )
}

export default SizeSelector