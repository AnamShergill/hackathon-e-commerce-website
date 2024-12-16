import Image from "next/image";

export default function ProductCard() {
  return (
    <div>
      <div className="text-center p-6">
        <h1 className="text-3xl font-bold mb-2">Our Products</h1>
        
        {/* First Section of Products */}
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {/* Product 1 */}
          <div className="max-w-xs bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/images/syltherine.png"
                alt="cafe chair"
                width={300}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">Syltherine</h2>
              <p className="text-gray-500 text-sm mb-2">Stylish Cafe Chair</p>
              <p className="font-bold text-lg">Rp 2.500.000</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="max-w-xs bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/images/leviosaa.jpg"
                alt="cafe chair"
                width={300}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">Leviosa</h2>
              <p className="text-gray-500 text-sm mb-2">Stylish Cafe Chair</p>
              <p className="font-bold text-lg">Rp 2.500.000</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="max-w-xs bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/images/lolito.png"
                alt="cafe chair"
                width={300}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">Lolito</h2>
              <p className="text-gray-500 text-sm mb-2">Luxury Big Sofa</p>
              <p className="font-bold text-lg">Rp 7.000.000</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="max-w-xs bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/images/respira.png"
                alt="cafe chair"
                width={300}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">Respira</h2>
              <p className="text-gray-500 text-sm mb-2">Outdoor Bar Table and Stool</p>
              <p className="font-bold text-lg">Rp 500.000</p>
            </div>
          </div>
        </div>

        {/* Second Section of Products */}
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {/* Product 5 */}
          <div className="max-w-xs bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/images/grifo.png"
                alt="cafe chair"
                width={300}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">Grifo</h2>
              <p className="text-gray-500 text-sm mb-2">Night Lamp</p>
              <p className="font-bold text-lg">Rp 1.500.000</p>
            </div>
          </div>

          {/* Product 6 */}
          <div className="max-w-xs bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/images/muggo.png"
                alt="cafe chair"
                width={300}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">Muggo</h2>
              <p className="text-gray-500 text-sm mb-2">Small Mug</p>
              <p className="font-bold text-lg">Rp 150.000</p>
            </div>
          </div>

          {/* Product 7 */}
          <div className="max-w-xs bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/images/pingky.png"
                alt="cafe chair"
                width={300}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">Pingky</h2>
              <p className="text-gray-500 text-sm mb-2">Cute Bed Set</p>
              <p className="font-bold text-lg">Rp 7.000.000</p>
            </div>
          </div>

          {/* Product 8 */}
          <div className="max-w-xs bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/images/potty.png"
                alt="cafe chair"
                width={300}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">Potty</h2>
              <p className="text-gray-500 text-sm mb-2">Minimalist flower</p>
              <p className="font-bold text-lg">Rp 500.000</p>
            </div>
          </div>
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-600">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
