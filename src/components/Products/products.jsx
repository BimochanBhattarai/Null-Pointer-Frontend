import React from 'react'
import Product from './product';

const Products = () => {
  return (
    <div 
    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
    >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </div>
  )
}

export default Products