import React from 'react'
import { SectionHeading } from './SectionHeading'

const NewProduct = () => {
    const {products} = useData()

    }
  return (
    <div>
        <div className='container mx-auto px-24 '>
            <div>
                <SectionHeading discription={"Don't wait. the time will never be just right."} heading={"Day of the deal"} colorHeading={"The deal"}></SectionHeading>
            </div>
        </div>
    </div>
  )
}

export default NewProduct