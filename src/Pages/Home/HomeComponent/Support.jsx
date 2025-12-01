import React from 'react'
import { AiFillBank } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import { PiContactlessPayment } from 'react-icons/pi';


const Support = () => {
    const features = [
  {
    id: 1,
    title: "Free Shipping",
    subtitle: "Free shipping on order or obder above $200",
    icon: <PiContactlessPayment className='text-4xl cp mx-auto'></PiContactlessPayment>
  },
  {
    id: 2,
    title: "Product Two",
    subtitle: "Free shipping on order or obder above $200",
    icon: <AiFillBank className='text-4xl cp mx-auto'></AiFillBank>
  },
  {
    id: 3,
    title: "Product Three",
    subtitle: "Free shipping on order or obder above $200",
    icon: <IoCartOutline className='text-4xl cp mx-auto'></IoCartOutline>
  },
   {
    id: 4,
    title: "Product Three",
    subtitle: "Free shipping on order or obder above $200",
    icon: <BiSupport className='text-4xl cp mx-auto'></BiSupport>
  }
];

  return (
    <div>
        <div className='container mx-auto w-11/12 grid md:grid-cols-4 gap-4 py-24'>
            {
                features.map(f=>(
                    <div>
                        <div className='border border-gray-200 shadow rounded-md py-7 text-center text-gray-500 '>
                            <p>{f.icon}</p>
                            <p className='font-semibold'>{f.title}</p>
                            <p className='text-sm'>{f.subtitle}</p>
                           
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Support