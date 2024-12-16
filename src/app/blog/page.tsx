import React from "react";
import Image from "next/image";
import Footer2 from "../components/Footer2";
import { IoPerson } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaTag } from "react-icons/fa6";

export default function Blog() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4">Blog</h1>
          <pre className="bg-opacity-0 text-black p-4 rounded-md font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            {`Home > Contact`}
          </pre>
        </div>
      </div>
{/*left side div*/}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 mx-4 sm:mx-8 lg:mx-16 pt-12">
        <div className="max-w-full lg:max-w-[820px] space-y-8">
          <div className="space-y-4">
            <Image
              src="/images/blogimage1.png"
              alt="blog image 1"
              width={817}
              height={500}
              className="w-full"
            />
            <div className="flex gap-5 items-center text-sm text-gray-400">
              <div className="flex items-center">
                <IoPerson className="mr-1" /> Admin
              </div>
              <div className="flex items-center">
                <SlCalender className="mr-1" /> 14 Oct 2022
              </div>
              <div className="flex items-center">
                <FaTag className="mr-1" /> Wood
              </div>
            </div>
            <h1 className="font-medium text-3xl sm:text-2xl my-3">Going all-in with millennial design</h1>
            <p className="text-[#9F9F9F] text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <button className="underline mt-4 text-base">Read More</button>
          </div>

          <div className="space-y-4">
            <Image
              src="/images/blogimage2.png"
              alt="blog image 2"
              width={817}
              height={500}
              className="w-full"
            />
            <div className="flex gap-5 items-center text-sm text-gray-400">
              <div className="flex items-center">
                <IoPerson className="mr-1" /> Admin
              </div>
              <div className="flex items-center">
                <SlCalender className="mr-1" /> 14 Oct 2022
              </div>
              <div className="flex items-center">
                <FaTag className="mr-1" /> Handmade
              </div>
            </div>
            <h1 className="font-medium text-3xl sm:text-2xl my-3">Exploring new ways of decorating</h1>
            <p className="text-[#9F9F9F] text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <button className="underline mt-4 text-base">Read More</button>
          </div>

          <div className="space-y-4">
            <Image
              src="/images/blog3image.png"
              alt="blog image 2"
              width={817}
              height={500}
              className="w-full"
            />
            <div className="flex gap-5 items-center text-sm text-gray-400">
              <div className="flex items-center">
                <IoPerson className="mr-1" /> Admin
              </div>
              <div className="flex items-center">
                <SlCalender className="mr-1" /> 14 Oct 2022
              </div>
              <div className="flex items-center">
                <FaTag className="mr-1" /> Wood
              </div>
            </div>
            <h1 className="font-medium text-3xl sm:text-2xl my-3">Handmade pieces that took time to make</h1>
            <p className="text-[#9F9F9F] text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <button className="underline mt-4 text-base">Read More</button>
          </div>
 
        </div>
{/*right side div*/}
        <div className="w-full max-w-[320px] space-y-8">
          <div className="border p-4 rounded-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded focus:outline-none mb-4"
            />
            <h2 className="text-xl font-bold mb-4 ">Categories</h2>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-600"><span>Crafts</span><span>2</span></li>
              <li className="flex justify-between text-gray-600"><span>Design</span><span>8</span></li>
              <li className="flex justify-between text-gray-600"><span>Handmade</span><span>7</span></li>
              <li className="flex justify-between text-gray-600"><span>Interior</span><span>1</span></li>
              <li className="flex justify-between text-gray-600"><span>Wood</span><span>6</span></li>
            </ul>
          </div>

          <div className="border p-4 rounded-md">
            <Image src="/images/image2.png" alt="image" width={393} height={650} />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-6 space-x-2">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded">1</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">2</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">3</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</button>
      </div>

      <Footer2  />
    </div>
  );
}
