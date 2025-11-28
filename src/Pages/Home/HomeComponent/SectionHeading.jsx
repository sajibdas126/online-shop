import React from 'react'

export const SectionHeading = ({heading , discription,colorHeading}) => {
  return (
    <div>
      <div>
        <h3 className='text-4xl text-gray-700 font-semibold'>{heading} <span className='cp'> {colorHeading}</span></h3>
        <p>{discription}</p>
      </div>
    </div>
  )
}
