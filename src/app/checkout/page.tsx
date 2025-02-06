"use client";

import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "@/app/components/CartContext"; // Named import
import Image from "next/image";
import Link from "next/link";
import Footer2 from "../components/Footer2";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext) || {}; // Destructure values from CartContext

  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    emailAddress: "",
  });
  const [isFormValid, setIsFormValid] = useState(false); // To track if the form is valid

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Check if the form is valid (all required fields filled)
  const validateForm = () => {
    const { firstName, streetAddress, city, phoneNumber, emailAddress } = formData;
    if (firstName && streetAddress && city && phoneNumber && emailAddress) {
      setIsFormValid(true); // Enable the button if form is valid
    } else {
      setIsFormValid(false); // Disable the button if any required field is empty
    }
  };

  // Check validation whenever form data changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  if (!cart) {
    return <p>Loading...</p>; // Handle case if cart is undefined
  }

  if (cart.length === 0) {
    return <p className="text-black text-3xl font-bold text-center justify-center p-16">Your cart is empty.</p>; // Handle case if cart is empty
  }

  // Calculate the total price from the cart items
  const totalPrice = cart.reduce(
    (acc, item) => acc + parseFloat(item.price.toFixed(2)) * item.quantity,
    0
  );

  // Handle order placement
  const handlePlaceOrder = () => {
    if (isFormValid) {
      // Check if clearCart is defined before calling it
      if (clearCart) {
        clearCart(); // Clear the cart after placing the order
      } else {
        console.error("clearCart is undefined!");
      }
      alert("Your order has been placed!");
    } else {
      alert("Please fill all the required fields.");
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Checkout</h1>
          <pre className="bg-opacity-0 text-black p-4 rounded-md font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            <Link href="/" className="hover:text-blue-500">Home</Link> &gt;{" "}
            Checkout
          </pre>
        </div>
      </div>

      <div className="max-w-6xl mx-auto h-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Left Section - Billing Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Billing Details</h2>
            <form className="space-y-4">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              {/* Street Address */}
              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address*</label>
                <input
                  type="text"
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              {/* Apartment */}
              <div>
                <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">Apartment, floor, etc. (Optional)</label>
                <input
                  type="text"
                  id="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Town/City*</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number*</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address*</label>
                <input
                  type="email"
                  id="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="saveInfo"
                  type="checkbox"
                  className="h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                />
                <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-700">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Right Section - Order Summary */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg border shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Summary</h2>

            {/* Product Details */}
            {cart.length > 0 ? (
              <div className="mb-6">
                {cart.map((product, index) => (
                  <div key={index} className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="flex items-center">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        width={50}
                        height={50}
                        className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                      />
                      <span className="ml-2 text-gray-700 font-medium">{product.name}</span>
                    </div>
                    <div className="flex justify-between w-full md:w-48 mt-2 md:mt-0">
                      <span className="text-gray-500">Qty: {product.quantity}</span>
                      <span className="text-gray-500">${parseFloat(product.price.toFixed(2)) * product.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}

            <hr className="border-gray-300 mb-6" />

            {/* Total Price */}
            <div className="flex justify-between font-semibold text-lg mb-4 text-black">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            {/* Payment Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Direct Bank Transfer</h3>
              <p className="text-sm text-gray-700 mb-4 text-md">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    id="bank"
                    type="radio"
                    name="paymentMethod"
                    className="h-4 w-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                  />
                  <label htmlFor="bank" className="ml-2 text-md text-gray-700">
                    Bank Transfer
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="cod"
                    type="radio"
                    name="paymentMethod"
                    className="h-4 w-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                  />
                  <label htmlFor="cod" className="ml-2 text-md text-gray-700">
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>

            <p className=" text-gray-600 mb-6 font-bold text-md">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
            </p>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 focus:outline-none"
              disabled={!isFormValid} // Disable button if form is not valid
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <Footer2 />
    </div>
  );
}
