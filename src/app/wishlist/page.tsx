"use client";
import { useWishlist } from '@/app/components/WishlistContext';  // Adjust path if necessary
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js for navigation

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();  // Get wishlist data and remove function

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Your Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your wishlist is empty. Start adding items to it!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlist.map((product) => (
            <div key={product._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
              <p className="text-gray-500 text-sm mt-2">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className="text-red-600 hover:text-red-800 font-medium transition-colors duration-300 ease-in-out"
                >
                  <span className="inline-block mr-2">🗑️</span> Remove
                </button>
                {/* Use Link to navigate to the product details page */}
                <Link href={`/products/${product._id}`}>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors duration-300">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
