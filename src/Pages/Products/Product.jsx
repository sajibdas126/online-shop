import React, { useState } from 'react'
import { useData } from '../../Hooks/useData'
import { ProductCart } from '../../Components/SherComponent/ProductCart';

export const Product = () => {
  const { products, Categorys } = useData();
  const [id, setId] = useState();
  const [fit,setFit]= useState()

  // Debug logs
  console.log("CATEGORIES:", Categorys);
  console.log("PRODUCTS:", products);
  console.log("SELECTED ID:", id);

  const handelClick = (categoryId) => {
    console.log("CLICKED CATEGORY ID:", categoryId);
    setId(prev => (prev === categoryId ? null : categoryId));
  };

  const handelClickFit =(f) =>{
    setFit(f)
  }

  // const filterData = id
  //   ? products.filter(p => {
  //       console.log(
  //         "CHECK PRODUCT:",
  //         "product.id:", p.id,
  //         "| categoryid:", p.category_id,
  //         "| selected:", id
  //       );
  //       return Number(p.categoryId) === Number(id);
  //     })
  //   : products;

  const filterData = products.filter(p=>{
    const matchCategory = id? p.categoryID == id : products;
    const matchfit = fit ? p.fit == fit : products
    return matchCategory && matchfit
  })

  console.log("FILTERED DATA:", filterData);

  return (
    <div>
      <div className='grid grid-cols-12 gap-8 container mx-auto md:px-24 mt-12'>
        
        {/* Category Section */}
        <div className='col-span-3'>

          <div className='border border-gray-200 p-3 space-y-2'>
            <p className='border-b border-gray-200 pb-3 mb-4'>Category</p>
            {Categorys?.map(category => (
              <div
                key={category.id}
                className='border border-gray-100 shadow-md rounded-md p-2'
              >
                <label className='flex gap-2 items-center cursor-pointer'>
                  <input
                    type="checkbox"
                    checked={Number(id) === Number(category.id)}
                    onChange={() => handelClick(category.id)}
                  />
                  <span>{category.category}</span>
                </label>
              </div>
            ))}

            <div className='mt-12'>
               <p className='border-b border-gray-200 pb-3 mb-4'>Width</p>
               {
               [...new Set(products.map(p=>p.fit))].map(p=>(
                  <div className='flex gap-2 items-center mb-2'>
                    <input type="checkbox" />
                    <p onClick={()=>handelClickFit(p)} className='cursor-pointer ' onClick={() => handelClickFit(p) }>{p}</p>
                  </div>
                ))
               }
            </div>


          </div>
        </div>

        {/* Product Section */}
        <div className='col-span-9'>
          {filterData.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
             No product
            </p>
          ) : (
            <div className='grid md:grid-cols-3 gap-4'>
              {filterData.map(item => (
                <ProductCart key={item.id} product={item} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
