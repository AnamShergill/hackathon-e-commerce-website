"use client";

import React, { useEffect, useState } from "react";

import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";
import Range from "./components/Range";
import Inspiration from "./components/Inspiration";
import Share from "./components/Share";
import { createClient } from "@sanity/client";
import { Product } from "types/products";

const sanity = createClient({
  projectId: "6ybpasf7",
  dataset: "production",
  apiVersion: "2025-01-22",
  useCdn: true,
});

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          description,
          price,
          discountPercentage,
          isNew,
          "imageUrl": productImage.asset->url,
          tags,
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Hero />
      <Range />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Featured Products</h1>
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              // Pass a flag `showButtons` to indicate whether the buttons should be shown
              <ProductCard 
                key={product._id} 
                product={product} 
                showButtons={false}  // Setting it false to hide Add to Cart & Add to Wishlist buttons on homepage
              />
            ))}
          </div>
        )}
      </div>
      <Inspiration />
      <Share />
    </div>
  );
};

export default ProductCards;
