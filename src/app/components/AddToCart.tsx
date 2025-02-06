import React, { useState } from "react";
import { useCart } from "@/app/components/CartContext";
import { Product } from "../../../types/products";
import Link from "next/link";

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
   
    

    // Add the product to the cart with the correct image structure
    addToCart({
      _id: product._id,
      name: product.title,
      price: product.price,
      image : product.image,  // Now passing the correctly structured image
      quantity: 1,
      type: product.type,
      description: product.description,  // Use the description from the product
      title: product.title,
      tags: product.tags,
      imageUrl: product.imageUrl,  // Pass the imageUrl
    });

    // Show the notification
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleAddToCart}
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300"
      >
        Add to Cart
      </button>

      {showNotification && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4 animate-fadeIn">
          <span>✅ Product added to cart</span>
          <Link href="/cart" className="underline font-semibold hover:text-gray-200 transition-all duration-200">
            View Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
