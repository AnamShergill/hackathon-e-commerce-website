"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/components/CartContext"; // Ensure the useCart hook is correctly importing the cart context
import Footer2 from "../components/Footer2";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

export default function Cartpage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Log the cart data for debugging
  console.log("Cart data:", cart);

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.toFixed(2)) * item.quantity,
    0
  );

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="w-full min-h-screen relative">
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
            Cart
          </h1>
          <pre className="bg-opacity-0 text-black p-4 rounded-md font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            <Link href="/" className="hover:text-blue-500">Home</Link> &gt;{" "}
            <Link href="/shop" className="hover:text-blue-500">Cart</Link>
          </pre>
        </div>
      </div>

      <div className="bg-gray-50 py-8 px-4 md:px-8 h-auto">
        <div className="container mx-auto">
          {/* Cart Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="col-span-2 bg-white rounded-lg shadow-sm p-4">
              <div className="overflow-x-auto">
                {/* Table Header */}
                <table className="w-full text-left text-gray-500">
                  <thead>
                    <tr className="text-sm font-semibold text-gray-600 bg-[#F9F1E7]">
                      <th className="p-3">Product</th>
                      <th className="p-3">Price</th>
                      <th className="p-3 text-center">Quantity</th>
                      <th className="p-3 text-right">Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  {/* Table Body */}
                  <tbody>
                    {cart.map((product) => (
                      <tr key={product._id} className="border-b border-gray-200">
                        <td className="py-4 px-4 flex items-center space-x-4">
                          {/* Display the image */}
                          <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={200}
                            height={200}
                            className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                          />
                          <span className="font-medium text-gray-900 text-sm md:text-base">
                            {product.name}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-800 font-semibold text-sm md:text-base">
                          Rs. {(Number(product.price) * Number(product.quantity))}
                        </td>

                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2 border border-gray-300 rounded px-2 py-1">
                            <button
                              onClick={() =>
                                handleQuantityChange(product._id, product.quantity + 1)
                              }
                              className="text-gray-600 hover:text-gray-900"
                            >
                              <FaChevronUp />
                            </button>
                            <span className="text-lg font-semibold">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(product._id, product.quantity - 1)
                              }
                              className="text-gray-600 hover:text-gray-900"
                            >
                              <FaChevronDown />
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button
                            onClick={() => removeFromCart(product._id)}
                            className="text-red-500 font-semibold hover:underline"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="bg-[#F9F1E7] w-full md:w-[393px] h-auto md:h-[390px] rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 text-black text-center">
                Cart Totals
              </h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-black">Total:</span>
                <span className="text-indigo-600 font-bold">Rs. {total.toFixed(2)}</span>
              </div>
              {/* Checkout Button */}
              <div className="flex justify-center my-8">
                <button className="w-full sm:w-[222px] h-14 mt-4 py-2 bg-white text-gray-800 border border-gray-800 rounded-md hover:bg-gray-100 transition-all">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}
