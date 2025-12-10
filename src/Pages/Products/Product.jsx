import React from 'react'
import { useData } from '../../Hooks/useData'
import { ProductCart } from '../../Components/SherComponent/ProductCart';

export const Product = () => {
  // ✅ hook টাকে কল করো
  const { products, Categorys } = useData();

  return (
    <div>
      <div className='grid grid-cols-12 container mx-auto md:px-24 mt-12'>
        <div className='col-span-3'>
          <div className='border border-gray-200 p-3'>
            {/* ✅ Optional chaining যাতে error না দেয় */}
            {Categorys?.map(category => (
              <div key={category.id} className='border border-gray-100 shadow-md rounded-md'>
               <div className='flex gap-2 items-center mb-2'>
                <input type="checkbox" />
                <h2>{category.name}</h2>
               </div>
              </div>
            ))}
          </div>
        </div>

        <div className='col-span-9'>
         <div>

         </div>
         <div className='grid md:grid-cols-3 '>
          {products?.map(item=><ProductCart key={item.id} product={item}></ProductCart>)}
         </div>
        </div>
      </div>
    </div>
  )
}
