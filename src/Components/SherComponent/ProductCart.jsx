import React from 'react'
import { FaStar } from 'react-icons/fa'
import { TbCurrencyTaka } from 'react-icons/tb'


export const ProductCart = ({product}) => {
  return (
   <div>
     <div className='w-74 border flex flex-col justify-center items-center  border-gray-200 rounded-md shadow'>
       <img className='w-72 flex '  src={product.image} alt="" />
        <div className='text-left w-full p-3 '>
            <p className='text-gray-400'>{product.category}</p>
            <h1 className='font-semibold text-gray-700'>{product.title}</h1>
            <div className='flex gap-1 py-2  text-orange-500'>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
            </div>
            <div className='flex  gap-3'>

                <p className='cp flex items-center'>{product.price}<TbCurrencyTaka/></p>
                <p className='line-through flex items-center text-gray-500'>{product.oldPrice}<TbCurrencyTaka/></p>
           
            </div>

        </div>
    </div>
   </div>
  )
}
