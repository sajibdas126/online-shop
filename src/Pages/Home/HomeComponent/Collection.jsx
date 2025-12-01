import React from 'react'
import women from "../../../../public/collection/woman.jpg"
import men from "../../../../public/collection/men.jpg"
import kids from "../../../../public/collection/kids.webp"



const Collection = () => {
  return (
    <div>
        <div className='container mx-auto w-11/12 grid md:grid-cols-3 gap-4'>
            <div className=' flex flex-col items-end bg-cover px-8 py-4 ' style={{backgroundImage: `url(${women})`}}>
              <h3 className='text-end text-white text-4xl font-semibold '>Women's <br /> Collection</h3>
              <button className='btn bg text-white'> Shop Now</button>
            </div>
             <div className=' flex flex-col items-end bg-cover px-8 py-4 ' style={{backgroundImage: `url(${kids})`}}>
              <h3 className='text-end text-white text-4xl font-semibold '>Kids<br /> Collection</h3>
              <button className='btn bg text-white'> Shop Now</button>
            </div>
             <div className=' flex flex-col items-end bg-cover px-8 py-4 ' style={{backgroundImage: `url(${men})`}}>
              <h3 className='text-end text-white text-4xl font-semibold '>Men<br /> Collection</h3>
              <button className='btn bg text-white'> Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Collection