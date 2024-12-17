import React from "react";
import Image from "next/image";
import FilterBar from "../components/Filterbar";
import ProductGrid from "../components/ProductGrid";

import Footer2 from "../components/Footer2";


export default function ShopPage() {
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4">Shop</h1>
                <pre className="bg-opacity-0 text-black p-4 rounded-md font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                  {`Home > Contact`}
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
    )
}


