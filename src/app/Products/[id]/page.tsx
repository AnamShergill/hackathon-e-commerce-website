import React from "react";
import { client } from "@/sanity/lib/client"; // Sanity client for data fetching
import Image from "next/image"; // Image optimization in Next.js
import { notFound } from "next/navigation"; // For handling not found pages (Next.js 13+)
import Link from "next/link";
import { Product } from "../../../../types/products";

// Fetch product from Sanity using the ID parameter
const fetchProduct = async (id: string): Promise<Product | null> => {
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    title,
    description,
    price,
    discountPercentage,
    isNew,
    tags,
    "imageUrl": productImage.asset->url,
    colors,
    sizes
  }`;
  const product = await client.fetch(query, { id });
  return product || null;
};

// This is the dynamic page that will render product details based on the `id`
const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProduct(params.id); // Fetch product details using the `id` from URL

  if (!product) {
    notFound(); // This triggers the 404 page if the product is not found
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-slate-100">
      <nav className="text-gray-600 mb-6 text-sm">
        <Link href="/" className="hover:underline text-xl text-black">
          Home
        </Link>{" "}
        &gt;
        <Link href="/shop" className="hover:underline text-xl text-black">
          Shop
        </Link>{" "}
        &gt;
        <span className="text-gray-900 font-semibold text-xl">
          {product.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={600} // Optimized width
            height={500} // Optimized height
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        <div className="space-y-6">
          {/* Only display product details here */}
          <h1 className="text-4xl font-extrabold text-gray-900">
            {product.title}
          </h1>
          <p className="text-lg text-primary font-bold">${product.price}</p>
          {product.discountPercentage && (
            <p className="text-sm text-red-500 font-bold">
              -{product.discountPercentage}% Off
            </p>
          )}
          <p className="text-purple-800 font-bold italic">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
