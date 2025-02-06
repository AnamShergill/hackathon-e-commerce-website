"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import FilterBar from "../components/PriceFilter"; // Assuming the PriceFilter is named this
import Footer2 from "../components/Footer2";
import ProductList from "../components/ProductList";
import { createClient } from "@sanity/client";
import { Product } from "../../../types/products";
import Link from "next/link";

// Sanity client setup
const sanity = createClient({
  projectId: "6ybpasf7", // Your project ID
  dataset: "production", // Your dataset name
  apiVersion: "2025-01-22", // Specify a recent API version
  useCdn: true,
});

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
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
          tags
        }
      `;
      const data = await sanity.fetch(query);
      console.log("Fetched Products:", data);
      setProducts(data);
      setFilteredProducts(data); // Initially set all products as filtered products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Define the function to handle the filter change
  const handleFilterChange = (priceRange: [number, number]) => {
    console.log("Selected price range: ", priceRange);
    const [minPrice, maxPrice] = priceRange;

    const filtered = products.filter(
      (product) =>
        product.price >= minPrice && product.price <= maxPrice
    );

    setFilteredProducts(filtered); // Update the filtered products list
  };

  return (
    <div className="w-full min-h-screen relative">
      {/* Header */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh]">
        <Image
          src="/images/shopheader.png"
          alt="header image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center px-4 sm:px-6 z-10">
          <Image src="/images/logo2.png" alt="logo" width={77} height={77} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            Shop
          </h1>
          <pre className="bg-opacity-0 text-black p-4 rounded-md font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            <Link href="/" className="hover:text-blue-500">Home</Link> &gt;{" "}
            <Link href="/shop" className="hover:text-blue-500">Shop</Link>
          </pre>
        </div>
      </div>

      {/* Product section with filter */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full">
          {/* FilterBar - Pass the onFilterChange prop */}
          <FilterBar onFilterChange={handleFilterChange} />

          {/* Product List */}
          <div className="mt-6">
            {filteredProducts.length > 0 ? (
              <ProductList products={filteredProducts} />
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <br/>
      <br/>
      <Footer2 />
    </div>
  );
}
