import React from 'react'
import { SectionHeading } from './SectionHeading'
import { useData } from '../../../Hooks/useData';
import { ProductCart } from '../../../Components/SherComponent/ProductCart';


const NewProduct = () => {
    const {products} = useData();
    


    
  return (
    <div>
        <div className='container mx-auto px-24 py-10 '>
            <div>
                <SectionHeading discription={"Don't wait. the time will never be just right."} heading={"Day of the deal"} colorHeading={"The deal"}></SectionHeading>
            </div>
          <div className='py-12'>
             <div className='flex flex-wrap gap-4 justify-center'>
          {
            products.map(p=><ProductCart  product={p}>

            </ProductCart>) 
          }
        </div>
          </div>
        </div>
    </div>
  );
}
export default NewProduct