import React from "react";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="flex shadow-lg rounded-md p-5 gap-4 mx-3">
      <div className="overflow-hidden rounded-lg w-1/3 h-52">
        <img
          className="w-full h-full object-contain overflow-hidden rounded-lg"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col gap-2 w-2/3">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-500 text-sm overflow-ellipsis overflow-hidden max-h-16">
          {product.description}
        </p>
        <p className="text-gray-500 text-sm">₹{product.price}</p>
        <div className="flex justify-between"
		>
          <Rating rating={product.rating.rate} />
          <p className="text-gray-500 text-sm">
            {product.available}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
