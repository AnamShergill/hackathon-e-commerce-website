"use client";
import React from "react";
import { Product } from "../../../types/products";




const ProductClient = ({ product }: { product: Product }) => {
  const handleAddToCart = () => {
    console.log("Adding product to cart:", product);
  };

  return (
    <div className="product-client">
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductClient;
