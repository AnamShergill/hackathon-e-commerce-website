import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center">
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
      <div className="relative z-10 bg-amber-100 p-8 md:p-12 rounded-lg shadow-lg max-w-xl lg:max-w-2xl ml-auto mr-6 md:mr-12">
        <p className="text-gray-500 text-base md:text-lg font-medium uppercase mb-4">
          New Arrival
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-amber-600 mb-6">
          Discover Our <br className="hidden md:block" /> New Collection
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-700">
          Buy Now
        </button>
      </div>
    </div>
  );
}
