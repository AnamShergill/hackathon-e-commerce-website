// WishlistContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../../../types/products";

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Function to add a product to the wishlist
  const addToWishlist = (product: Product) => {
    console.log("Adding to wishlist: ", product); // Debugging log
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item._id === product._id)) {
        console.log("Product added to wishlist:", product); // Debugging log
        return [...prevWishlist, product];
      }
      console.log("Product already in wishlist:", product); // Debugging log
      return prevWishlist;
    });
  };

  // Function to remove a product from the wishlist
  const removeFromWishlist = (id: string) => {
    console.log("Removing from wishlist, id: ", id); // Debugging log
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item._id !== id);
      console.log("Updated wishlist: ", updatedWishlist); // Debugging log
      return updatedWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
