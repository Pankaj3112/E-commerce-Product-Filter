import React from "react";
import { useRecoilValue } from "recoil";
import Product from "./Product";
import { filteredProductsSelector } from "../recoil";

const ProductsList = () => {
  const products = useRecoilValue(filteredProductsSelector);

  return (
    <div className="flex flex-col gap-4 w-2/3 mx-auto max-h-[95vh] overflow-hidden overflow-y-scroll">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
