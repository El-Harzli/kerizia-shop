import React, { useState, useContext } from 'react';
import BottomSheet from 'react-draggable-bottom-sheet';
import './SizeSelector.css';
import Button from '@ui/Button/Button';
import { CartContext } from '@context/CartContext'
import useToast from '@hooks/useToast'


function SizeSelector({ product, isOpen, setIsOpen, setMySize }) {
  const [activeSize, setActiveSize] = useState(null); // State to track the selected size
  const { addToCartList } = useContext(CartContext);

  const { showToastSuccess } = useToast();


  const selectTheSize = (size) => {
    setActiveSize(size); // Set the clicked size as active
    setMySize(size); // Update the size in the parent component
  };

  const addToBag = () => {
    if(activeSize){
      setIsOpen(false);
      addToCartList(product, activeSize);
      showToastSuccess("Product added to your bag")
    }
    else{
      showToastSuccess("Please select a size")
    }

  }

  return (
    <BottomSheet isOpen={isOpen} close={setIsOpen}>
      <div className='size-selector' style={{ textAlign: 'left', paddingBottom: '16px' }}>
        {Object.entries(product.sizes)
          .filter(([size, quantity]) => quantity > 0)
          .map(([size, quantity]) => (
            <div
              key={size}
              onClick={(e) => selectTheSize(size)}
              className={`size-selector__item pe-2 ${activeSize === size ? 'size-selector__item--active' : ''}`}
              data-no-drag
            >
              {size} and quant: {quantity}
            </div>
          ))}
        {/* <button className='size-selector__add-to-bag'>Add To Bag</button> */}
        <Button variant={'primary'} label={'Add To Bag'} 
        onClick={() => addToBag()}
        style={{width : '90%', marginInlineStart : '5%', paddingBlock : '.65rem', fontSize : '1rem' }}  />
      </div>
    </BottomSheet>
  );
}

export default SizeSelector;
