import { FaStar } from "react-icons/fa6";
import { useData } from "../../Hooks/useData";
import { useParams } from "react-router";

export const SingelProductPage = () => {
  const { id } = useParams();
  const { products } = useData();
  const findProducts = products.find((p) => p.id == Number (id));
  return (
    <div className="container mx-auto md:px-24 mt-10">
      <div className=" flex items-center justify-center gap-4">
        <div >
         <img className="w-120" src={findProducts?.image} alt="jjk" />
        </div>
            <div>
                <p className="ts">{findProducts?.category}</p>
                 <h1 className="text-4xl font-semibold">{findProducts?.title}</h1>
                <div className="flex items-center gap-12">
                     <div className='flex gap-1 py-2  text-orange-500'>
                                 <FaStar></FaStar>
                                 <FaStar></FaStar>
                                 <FaStar></FaStar>
                                 <FaStar></FaStar>
                                 <FaStar></FaStar>
                       </div>
                        <p className="ts"> Total Rating:{findProducts?.rating}</p>
                </div>
                <div className="flex gap-12 text-2xl">
                    <p>Price:${findProducts?.price}</p>
                    <p className="line-through text-gray-400">${findProducts?.oldPrice}</p>
                </div>
                <p className="ts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel amet nihil nostrum cupiditate, laborum autem omnis possimus et repudiandae.</p>
        
            </div>
      </div>
    </div>
  );
};
