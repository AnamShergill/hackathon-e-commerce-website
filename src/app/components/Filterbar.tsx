import React from "react";

export default function FilterBar() {
  return (
    <div className="bg-[#F9F1E7] border p-4 rounded-md max-w-full box-border">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-black">
            🔧 Filter
          </button>

          <div className="flex gap-2">
            <button className="p-2 rounded hover:bg-gray-100">🔲</button>
            <button className="p-2 rounded hover:bg-gray-100">☰</button>
          </div>

          <span className="hidden sm:block w-px bg-gray-300 h-5"></span>

          <p className="text-sm text-gray-600">
            Showing <strong>1–16</strong> of <strong>32</strong>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Show</label>
            <select className="p-2 border rounded text-sm">
              <option>16</option>
              <option>32</option>
              <option>64</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Sort by</label>
            <select className="p-2 border rounded text-sm">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}



  