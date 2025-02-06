import Image from "next/image";

export default function BrowseRange() {
  return (
    <section className="text-center p-6 mx-20">
      <h1 className="text-3xl font-bold mb-2 mt-3">Browse The Range</h1>
      <p className="text-gray-600 font-serif mb-6">
      &quot;From cozy sofas to elegant dining sets, find the perfect
        pieces to elevate your home.&quot;
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
        {/* Dining Section */}
        <div className="relative group">
          <Image
            src="/images/dining.jpg"
            alt="Dining Room"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className=" mt-2 font-semibold text-gray-700">Dining</p>
        </div>

        {/* Living Section */}
        <div className="relative group">
          <Image
            src="/images/Image-living room.jpg"
            alt="Living Room"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="mt-2 font-semibold text-gray-700">Living</p>
        </div>

        {/* Bedroom Section */}
        <div className="relative group">
          <Image
            src="/images/bedroom.jpg"
            alt="Bedroom"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="mt-2 font-semibold text-gray-700">Bedroom</p>
        </div>
      </div>
    </section>
  );
}
