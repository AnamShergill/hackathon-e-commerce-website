"use client";

import React, { useState, useMemo, useEffect } from "react";
import PriceFilter from "@/app/components/PriceFilter";
import Pagination from "@/app/components/Pagination";
import { useCart } from "@/app/components/CartContext";
import { Product } from "../../../types/products"; // Import useCart hook
import Image from "next/image";


interface ShopClientProps {
  products: Product[];
  productsPerPage: number;
  totalPages: number;
}

const ShopClient = ({
  products,

  totalPages,
}: ShopClientProps) => {
  // Memoize filtered products to avoid re-rendering when products don't change
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const { addToCart } = useCart(); // Access the addToCart function from context

  // Memoizing products to avoid unnecessary re-rendering
  const memoizedProducts = useMemo(() => products, [products]);

  useEffect(() => {
    // Only set filtered products if products have changed
    setFilteredProducts(memoizedProducts);
  }, [memoizedProducts]);

  // Handle filter changes - Update filtered products based on price range
  const handleFilterChange = (priceRange: [number, number]) => {
    const [minPrice, maxPrice] = priceRange;
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  const truncateDescription = (description: string, maxLength: number = 100) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const handleAddToCart = (product: Product) => {
    const cartProduct = {
      _id: product._id,
      name: product.title,
      price: product.price,
      image: { asset: { url: product.imageUrl } },
      quantity: 1,
      type: product.type ,
       imageUrl: product.imageUrl, 
       description:product.description, 
       title: product.title, 
       tags:product.tags,

    };
    addToCart(cartProduct);
  };

  return (
    <div className="container mx-auto px-6 py-2">
      {/* Price Filter */}
      <div className="mb-2">
        <PriceFilter onFilterChange={handleFilterChange} />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {/* Product Image */}
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={200}
                height={200}
                className="object-cover w-full h-64 mb-4"
              />
              {/* Product Details */}
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{truncateDescription(product.description)}</p>
              <p className="font-semibold text-xl">
                ${product.price}
                {product.discountPercentage && (
                  <span className="text-red-500 ml-2">
                    -{product.discountPercentage}%
                  </span>
                )}
              </p>

              {/* Add to Cart Button */}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No products available.</div> // Show message if no products available
        )}
      </div>

      {/* Pagination */}
      <div className="py-7">
        <Pagination products={filteredProducts} totalPages={totalPages} currentPage={0} onPageChange={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </div>
    </div>
  );
};

export default ShopClient;
