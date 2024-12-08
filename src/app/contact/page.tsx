"use client";

import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <main className="font-poppins" id="contact">
      <div className="h-20 flex">
        <div
          className="h-[30%] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>
      </div>

      {/* Title and description */}
      <div className="flex flex-col items-center justify-center mt-16 px-4 sm:px-8 md:px-12">
        <h1 className="text-4xl font-semibold text-black mb-4 text-center">
          Get In Touch With Us
        </h1>
        <p className="text-lg text-gray-400 font-normal max-w-3xl text-center">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Is Always Here To Help You. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Info and Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 mt-20 mx-20">
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
              <label htmlFor="name" className="block mb-2">Your Name</label>
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
              <label htmlFor="email" className="block mb-2">Email Address</label>
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
              <label htmlFor="subject" className="block mb-2">Subject</label>
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
              <label htmlFor="message" className="block mb-2">Message</label>
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

      {/* Footer Image */}
      <div className="h-screen flex mt-36">
        <div
          className="h-[20%] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/cool.jpg')" }}
        ></div>
      </div>
    </main>
  );
}
