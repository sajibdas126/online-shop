
import { useData } from '../../../Hooks/useData'

export const HomeCategory = () => {
 const {Categorys} = useData()

  return (
    <div className='container mx-auto px-4  md:px-24'>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center text-center  ">
        {Categorys.map(category => (
          <div key={category.id} className='border border-gray-100 shadow-md rounded-md'>
            <img className='' src={category.image} alt={category.name}  />
            <h2 >{category.name}</h2>
            <p>{category.items}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
