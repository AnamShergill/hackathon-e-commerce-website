import React from "react";
import Image from "next/image";
import FilterBar from "../components/Filterbar";
import ProductGrid from "../components/ProductGrid";

import Footer2 from "../components/Footer2";


export default function ShopPage() {
  return (
    <div className="w-full min-h-[calc(100vh-1rem)] relative">
      <div className="relative">
        <Image
          src="/images/shopheader.png"
          alt="header image"
          width={1550}
          height={316}
          className="w-full h-auto"
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4">
            Shop
          </h1>
          <pre className="bg-black bg-opacity-0 text-black p-4 rounded-md font-poppins text-sm sm:text-base md:text-lg font-semibold">
            {`Home > Shop`}
          </pre>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full">
    <FilterBar />
  </div>
        <ProductGrid />
      </div>

      <Footer2 />
      
    </div>
  );
}


