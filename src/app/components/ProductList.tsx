'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../../types/products';  // Ensure correct path to your types

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calculate the products to display based on the current page
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Display the product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md font-bold hover:bg-indigo-700 transition"
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          {currentPage} / {totalPages}
        </span>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md font-bold hover:bg-indigo-700 transition"
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
