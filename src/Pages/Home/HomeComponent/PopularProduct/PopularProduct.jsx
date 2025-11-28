import React from "react";
import { SectionHeading } from "../SectionHeading";
import { useData } from "../../../../Hooks/useData";

export const PopularProduct = () => {
    const {Categorys,products} = useData()
  return (
    <div className="container mx-auto px-4 md:px-24 py-14">
      <div>
        <SectionHeading
          heading={"popular"}
          colorHeading={"Products"}
          discription={"Shop online for new arrivals and get free shipping!"}
        ></SectionHeading>
        <div>{}</div>
      </div>
    </div>
  );
};
