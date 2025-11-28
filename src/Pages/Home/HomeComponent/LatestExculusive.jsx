import React from 'react'
import bg from "../../../assets/images/bg-img/14.jpg"
const LatestExculusive = () => {
  return (
    <div className='container mx-auto w-11/12'>
        <div className='h-[70vh] bg-cover py-24' style={{backgroundImage:`url(${bg})`}}>
           <div className='text-white flex flex-col gap-4 items-end'>
             <p className='text-3xl font-semibold'>30% off sale</p>
            <h3 className='text-5xl font-semibold  items-end text-end'>Latest Exclusive <br /> summer Collection</h3>
            <button className='bcp px-5 py-2 rounded-md'>Shop Now</button>
           </div>
        </div>
    </div>
  )
}

export default LatestExculusive