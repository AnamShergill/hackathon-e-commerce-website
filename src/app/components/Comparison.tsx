// ComparisonContext.tsx (Example)
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../../../types/products";

type ComparisonContextType = {
  comparison: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (id: string) => void;
};

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [comparison, setComparison] = useState<Product[]>([]);

  const addToComparison = (product: Product) => {
    setComparison((prevComparison) => [...prevComparison, product]);
  };

  const removeFromComparison = (id: string) => {
    setComparison((prevComparison) => prevComparison.filter((item) => item._id !== id));
  };

  return (
    <ComparisonContext.Provider value={{ comparison, addToComparison, removeFromComparison }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
};
