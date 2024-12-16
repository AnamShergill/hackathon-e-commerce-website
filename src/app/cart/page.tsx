import React from 'react'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import Footer2 from '../components/Footer2'

export default function Cartpage() {
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4">Cart</h1>
                <pre className="bg-opacity-0 text-black p-4 rounded-md font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                  {`Home > Contact`}
                </pre>
              </div>
    </div>
  

    <div className="bg-gray-50 py-8 px-4 md:px-8 h-[525px]">
      <div className="container mx-auto">
        {/* Cart Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2 bg-white rounded-lg shadow-sm p-4">
            <div className="overflow-x-auto">
              {/* Table Header */}
              <table className="w-full text-left text-gray-500">
                <thead>
                  <tr className="text-sm font-semibold text-gray-600 bg-[#F9F1E7]">
                    <th className="p-3">Product</th>
                    <th className="p-3">Price</th>
                    <th className="p-3 text-center">Quantity</th>
                    <th className="p-3 text-right">Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  <tr className="border-t text-gray-700">
                    <td className="p-3 flex items-center space-x-3">
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src="/images/Asgaard-sofa.png"
                          alt="Asgaard Sofa"
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <span className="text-gray-800 font-medium">
                        Asgaard sofa
                      </span>
                    </td>
                    <td className="p-3 text-gray-500">Rs. 250,000.00</td>
                    <td className="p-3 text-center">
                      {/* Static Quantity Value */}
                      <span className="text-gray-500">1</span>
                    </td>
                    <td className="p-3 text-right text-gray-800 font-medium">
                      Rs. 250,000.00
                    </td>
                    <td className="p-3 text-center text-yellow-600">
                    <MdDelete />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#F9F1E7] w-[393px] h-[390px] rounded-lg shadow-sm p-6 ">
            <h2 className="text-xl font-bold mb-4 text-black text-center">Cart Totals</h2>
            <div className="flex justify-between items-center mb-2 p-2">
              <span className="text-black text-lg font-medium">Subtotal</span>
              <span className="text-gray-500">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-black">Total</span>
              <span className="text-xl font-bold text-yellow-600">
                Rs. 250,000.00
              </span>
           
            </div>
               {/* Checkout Button */}
               <div className="flex justify-center my-8">
               <button className="w-[222px] h-14  mt-4 py-2 bg-white text-gray-800 border border-gray-800 rounded-md hover:bg-gray-100 transition-all">
              Check Out
            </button>
            </div>
          </div>
        </div>
       
      </div>
     
    </div>
 

    <Footer2/>
    </div>
  )
}
