"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import Footer2 from "../components/Footer2";

export default function Contact() {
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
  <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">Contact</h1>
  
  <pre className="bg-opacity-0 text-black p-4 rounded-md font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
    <Link href="/" className="hover:text-blue-500">Home</Link> &gt;{" "}
    <Link href="/contact" className="hover:text-blue-500">Contact</Link>
  </pre>
</div>
      </div>

      {/* Title and Description */}
      <div className="flex flex-col items-center justify-center mt-16 px-4 sm:px-8 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4 text-center">
          Get In Touch With Us
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-normal max-w-3xl text-center">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Is Always Here To Help You. Do Not
          Hesitate!
        </p>
      </div>

      {/* Contact Info and Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 mt-24 mx-4 sm:mx-8 lg:mx-40">
        {/* Contact Info */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="mb-4">
            <TiLocation className="inline-block text-3xl mr-2" />
            <div>
              <h2 className="font-bold text-gray-900 text-xl">Address</h2>
              <p className="font-medium text-black w-48 mt-1 text-sm sm:text-base">
                236 5th Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="mb-4">
            <FaPhone className="inline-block text-3xl mr-2" />
            <div>
              <h2 className="font-bold text-gray-900 text-xl">Phone</h2>
              <p className="text-black mt-1 font-medium text-sm sm:text-base">
                Mobile: +(84) 546-6789
              </p>
              <p className="text-black mt-1 font-medium text-sm sm:text-base">
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="mb-4">
            <IoTimeSharp className="inline-block text-3xl mr-2" />
            <div>
              <h2 className="font-bold text-gray-900 text-xl">Working Time</h2>
              <p className="text-black mt-1 font-medium text-sm sm:text-base">
                Monday-Friday: 9:00-22:00
              </p>
              <p className="text-black mt-1 font-medium text-sm sm:text-base">
                Saturday-Sunday: 9:00-21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 w-full max-w-md mx-auto md:mx-0 md:ml-12">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none focus:border-customBlue"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2">
                Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                rows={2}
                className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none focus:border-customBlue"
                placeholder="Enter Your Subject"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none focus:border-customBlue"
                placeholder="Enter Your Message"
                required
              />
            </div>

            <div className="py-5">
              <button
                type="submit"
                className="text-white h-11 bg-yellow-700 w-full sm:w-36"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}
