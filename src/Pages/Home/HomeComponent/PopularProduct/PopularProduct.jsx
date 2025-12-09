import React, { useState } from "react";
import { SectionHeading } from "../SectionHeading";
import { useData } from "../../../../Hooks/useData";
import { ProductCart } from "../../../../Components/SherComponent/ProductCart";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router";

export const PopularProduct = () => {
  const { Categorys, products } = useData();
  const [categoryname, setCategoryname] = useState("");

  const handleCategoryname = (name) => {
    setCategoryname(name);
  };

  const filterProduct = categoryname
    ? products.filter((p) => p.category == categoryname)
    : products;

  return (
    <div className="container mx-auto px-24 md:px-30 py-14">
      <div className="flex justify-between items-center">
        <SectionHeading
          heading={"popular"}
          colorHeading={"Products"}
          discription={"Shop online for new arrivals and get free shipping!"}
        />
        <div className="flex gap-8">
          {Categorys.map((category) => (
            <p
              key={category.id}
              onClick={() => handleCategoryname(category.name)}
              className="cursor-pointer text-sm"
            >
              {category.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mb-4 mt-12">
        {filterProduct
          .sort((a, b) => b.rating - a.rating)
          .slice(0,9)
          .map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </div>

      <div className="flex justify-center">
        <Link to="/Home">
          <div className="flex bcp cursor-pointer justify-center items-center flex-wrap rounded-md py-4 w-74 text-white font-semibold">
            <p>View All Products</p>
            <TbCategory />
          </div>
        </Link>
      </div>
    </div>
  );
};
