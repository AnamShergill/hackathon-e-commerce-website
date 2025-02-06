// components/ProductCard.tsx
'use client';

import React from 'react';
import { useWishlist } from '@/app/components/WishlistContext';
import { useCart } from '@/app/components/CartContext'; // Import useCart hook
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../../types/products';

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;  // Optional prop to pass add to cart functionality
  showButtons?: boolean;  // Add showButtons prop to control button visibility
}

const ProductCard = ({ product, onAddToCart, showButtons = true }: ProductCardProps) => {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart(); // Access addToCart from CartContext

  // Handle adding the product to the wishlist
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    addToWishlist(product); // Add the product to the wishlist
  };

  // Handle adding the product to the cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default behavior
    if (onAddToCart) {
      onAddToCart();  // Call passed in onAddToCart function if available
    } else {
      addToCart(product); // Fallback to context's addToCart if no onAddToCart prop
    }
  };

  // Truncate long descriptions for the product
  const truncateDescription = (description: string, maxLength: number = 100) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 border border-gray-200 hover:border-indigo-500 relative overflow-hidden cursor-pointer">
      <div className="relative">
        <Image
          src={product.imageUrl || '/fallback-image.jpg'} // Correct URL access
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-64 object-cover rounded-lg transition duration-300 hover:opacity-90"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
            New
          </span>
        )}
        {product.discountPercentage && (
          <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
            -{product.discountPercentage}% Off
          </span>
        )}
      </div>
      <div className="mt-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition">
          {product.title}
        </h2>
      </div>
      <div className="flex justify-center items-center gap-3 mt-4">
        <span className="text-xl font-extrabold text-blue-600">${product.price}</span>
        {product.discountPercentage && (
          <span className="text-sm text-gray-500 line-through">
            ${(
              product.price /
              (1 - product.discountPercentage / 100)
            ).toFixed(2)}
          </span>
        )}
      </div>

      {/* Truncated Description */}
      <div className="mt-3 text-sm text-gray-600">
        <p>{truncateDescription(product.description, 100)}</p>
      </div>

      {/* Conditionally render buttons */}
      {showButtons && (
        <>
          {/* Add to Cart Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleAddToCart} // Use handleAddToCart function here
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>

          {/* Add to Wishlist Button */}
          <div className="mt-2 text-center">
            <button
              onClick={handleAddToWishlist}
              className="bg-gray-600 text-white px-4 py-2 rounded-md font-bold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              Add to Wishlist
            </button>
          </div>
        </>
      )}

      {/* Link to product page */}
      <div className="mt-4 text-center">
        <Link href={`/Products/${product._id}`}>
          <span className="block text-indigo-600 font-semibold hover:text-indigo-800 transition-all duration-300 transform hover:scale-105">
            View Product
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
