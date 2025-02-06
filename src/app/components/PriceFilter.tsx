'use client';
/* eslint-disable no-unused-vars */

import React, { useState } from "react";

interface PriceFilterProps {
  onFilterChange: (priceRange: [number, number]) => void; // Expecting a tuple
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange }) => {
  // Explicitly define priceRange as a tuple
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  // Handle changes on the slider
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (e.target.name === "minPrice" && value <= priceRange[1]) {
      setPriceRange([value, priceRange[1]]);
    } else if (e.target.name === "maxPrice" && value >= priceRange[0]) {
      setPriceRange([priceRange[0], value]);
    }
  };

  // Apply the selected filter
  const handleApply = () => {
    onFilterChange(priceRange); // Passing the updated price range to parent
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

          {/* Slider for custom price range */}
          <div className="mt-6">
            <label htmlFor="minPrice" className="block text-sm text-gray-600">
              Min Price
            </label>
            <input
              type="range"
              id="minPrice"
              name="minPrice"
              min="0"
              max="1000"
              step="1"
              value={priceRange[0]}
              onChange={handleSliderChange}
              className="w-full"
            />
            <span>${priceRange[0]}</span>

            <label htmlFor="maxPrice" className="block text-sm text-gray-600 mt-4">
              Max Price
            </label>
            <input
              type="range"
              id="maxPrice"
              name="maxPrice"
              min="0"
              max="1000"
              step="1"
              value={priceRange[1]}
              onChange={handleSliderChange}
              className="w-full"
            />
            <span>${priceRange[1]}</span>
          </div>

          {/* Apply button */}
          <div className="mt-4">
            <button
              onClick={handleApply}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
