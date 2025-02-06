'use client';

import React, { useState } from "react";

interface PriceFilterProps {
  onFilterChange: (priceRange: [number, number]) => void; // Expecting a tuple
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange }) => {
  // Explicitly define priceRange as a tuple
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (e.target.name === "minPrice" && value <= priceRange[1]) {
      setPriceRange([value, priceRange[1]]); // Ensure tuple structure
    } else if (e.target.name === "maxPrice" && value >= priceRange[0]) {
      setPriceRange([priceRange[0], value]); // Ensure tuple structure
    }
  };

  const handleApply = () => {
    onFilterChange(priceRange); // Passing a tuple as expected
  };

  return (
    <div className="bg-[#F9F1E7] border p-4 rounded-md max-w-full box-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-4">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap">
          <button className="text-sm font-medium text-gray-600 hover:text-black">
            🔧 Filter by Price
          </button>

          <span className="hidden sm:block w-px bg-gray-300 h-5"></span>

         
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap">
          {/* Predefined Price Ranges */}
          <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-4">
            <button
              onClick={() => onFilterChange([0, 100])}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Below $100
            </button>
            <button
              onClick={() => onFilterChange([100, 500])}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              $100 - $500
            </button>
            <button
              onClick={() => onFilterChange([500, 1000])}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              $500 - $1000
            </button>
            <button
              onClick={() => onFilterChange([1000, 10000])}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Above $1000
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default PriceFilter;
