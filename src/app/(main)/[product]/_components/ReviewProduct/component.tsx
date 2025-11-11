import React from 'react'
import * as MyComponent from '../../../../../../components'
const product = {
  rating: 4.5,
}

const  component = () => {
  return (
    <div className='py-5 border-b border-gray-200'>
        <h3 className='font-semibold text-2xl'>Product review</h3>
        <div className='py-5'>
          <p className='font-medium text-text-primary text-6xl mb-2'>4.5</p>
          <div className='flex gap-x-2'>
           <MyComponent.Molecules.Stars size={16} value={product.rating} /><span className='text-clr-my-gray text-base font-medium'>(10)</span>
          </div>
        </div>
    </div>
  )
}

export default component