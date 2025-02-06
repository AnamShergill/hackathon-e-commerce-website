import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.image.jpg" 
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text Section */}
      <div className="relative z-10 bg-amber-100 p-8 md:p-12 rounded-lg shadow-lg max-w-xl lg:max-w-2xl ml-auto mr-6 md:mr-12 sm:max-w-full sm:ml-4 sm:mr-4">
        <p className="text-gray-500 text-base md:text-lg font-medium uppercase mb-4">
          New Arrival
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 mb-6">
          Discover Our <br className="hidden md:block" /> New Collection
        </h1>
        <p className="text-gray-700 text-lg sm:text-base md:text-xl mb-8">
          
        &quot;Transform Your Space with Stylish, Comfortable Furniture. Explore Our Collection of Modern, Durable Pieces Designed to Fit Every Home and Style.&quot;
        </p>
        <a href="/shop">
  <button className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-700">
    Buy Now
  </button>
</a>
      </div>
    </div>
  );
}
