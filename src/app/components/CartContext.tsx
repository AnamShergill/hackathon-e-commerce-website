"use client";

import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { Product } from "../../../types/products";

type CartContextType = {
  cart: Product[];
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

// Create the context with an initial value of undefined
export const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component which provides cart context to the children
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Memoize cartCount to optimize performance
  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  const addToCart = (product: Product) => {
    console.log("Attempting to add to cart:", product);
    

    setCart((prevCart) => {
      console.log("Current cart state before addition:", prevCart);
      // Check if the product already exists in the cart
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        console.log("Product already in cart, updating quantity");
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      console.log("Adding new product to cart");
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    console.log("Removing product with id:", id);
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    console.log(`Updating quantity for product with id ${id} to ${quantity}`);
    setCart((prevCart) =>
      prevCart.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    console.log("Clearing the entire cart");
    setCart([]);
  };

  // Log the current state of the cart on each render
  console.log("Cart state in CartProvider:", cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to consume the cart context and throw an error if not used inside CartProvider
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    console.error("useCart must be used within a CartProvider");  // Log the error if context is missing
    throw new Error("useCart must be used within a CartProvider");
  }

  console.log("useCart hook has accessed the context", context);  // Log the context to ensure it's being used
  return context;
};
