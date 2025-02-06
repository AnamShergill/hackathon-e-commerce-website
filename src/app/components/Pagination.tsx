// components/Pagination.tsx
import React from 'react';
import { Product } from '../../../types/products'; // Import the Product type
import ProductCard from './ProductCard'; // Assuming you have ProductCard in the same folder
import { useCart } from '@/app/components/CartContext'; // Assuming you have CartContext

interface PaginationProps {
  products: Product[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  products,
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const { addToCart } = useCart();  // Access addToCart from CartContext
  const productsPerPage = 8;

  // Calculate the products to display based on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    addToCart(product); // Call addToCart from context
  };

  return (
    <div>
      {/* Display products for the current page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {currentProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={() => handleAddToCart(product)} // Pass the function to handle adding to the cart
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md font-bold hover:bg-indigo-700 transition"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          {currentPage} / {totalPages}
        </span>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md font-bold hover:bg-indigo-700 transition"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
