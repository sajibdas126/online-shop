import React from 'react'
import bg from "../../../assets/images/logo/HERO-COVER.jpg"
export const Hero = () => {
    
  return (
    <div className='container mx-auto px-4 lg:px-24 py-14' >
        <div style={{backgroundImage:`url(${bg})`}} className='  md:px-24  bg-cover h-[70vh]'>
            <div className='flex flex-col justify-center h-full items-center lg:items-start gap-3'>
                <h1 className='cp md:text-2xl font-bold'>70% off For This Winter</h1>
                <h1 className='md:text-5xl font-bold'>Bigest Sale For <br /> Man Woman</h1>
                <button className='btn bcp border-none cursor-pointer'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}
