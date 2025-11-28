import { useEffect, useState } from "react";


export const useData = () => {
    const [Categorys, setCategory] = useState([])
    const [products, setProducts] = useState([])

      useEffect(() => {
        fetch("public/Category.json")
          .then(res => res.json())
          .then(data => setCategory(data))
          .catch(err => console.error(err))
      },[]);

       
    
      useEffect(() => {
        fetch("public/products.json")
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(err => console.error(err))
      },[]);
  return {Categorys,products}
}
