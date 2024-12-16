import React from "react";
import { GrTrophy } from "react-icons/gr";
import { FaRegCheckCircle } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Footer2() {
  return (
    <div className="bg-[#FAF3EA] w-full py-12 flex flex-wrap justify-center gap-8 md:gap-16">
      <div className="flex items-center space-x-4">
        <GrTrophy className="text-5xl font-bold" />
        <div className="flex flex-col">
          <h3 className="font-bold text-xl sm:text-2xl font-poppins text-black">
            High Quality
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            crafted from top materials
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FaRegCheckCircle className="text-5xl font-bold" />
        <div className="flex flex-col">
          <h3 className="font-bold text-xl sm:text-2xl font-poppins text-black">
            Warranty Protection
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">Over 2 years</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <LiaShippingFastSolid className="text-5xl font-bold" />
        <div className="flex flex-col">
          <h3 className="font-bold text-xl sm:text-2xl font-poppins text-black">
            Free Shipping
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">Order over 150 $</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <RiCustomerService2Line className="text-5xl font-bold" />
        <div className="flex flex-col">
          <h3 className="font-bold text-xl sm:text-2xl font-poppins text-black">
            24/7 Support
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">Dedicated Support</p>
        </div>
      </div>
    </div>
  );
}

