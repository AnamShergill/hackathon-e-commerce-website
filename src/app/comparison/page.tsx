"use client";
import React from "react";
import { useComparison } from "@/app/components/Comparison"; // Adjust path if necessary
import Image from "next/image";

// Step 1: Define prop types for breadcrumb and background image (if you want to use them)
type MyComponentProps = {
  backgroundImage: string;
  breadcrumbItems: { href: string; label: string }[];
  title: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ backgroundImage, breadcrumbItems, title }) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", padding: "20px" }}>
      <h1>{title}</h1>
      <nav>
        <ul>
          {breadcrumbItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// Step 2: Define the main ComparisonPage component
const ComparisonPage = () => {
  // Get comparison data from context
  const { comparison, removeFromComparison } = useComparison();

  // Define breadcrumbs for navigation
  const breadcrumbItems = [
    { href: "/home", label: "Home" },
    { href: "/comparison", label: "Comparison" },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Wrap comparison page with MyComponent for background and breadcrumbs */}
      <MyComponent 
        backgroundImage="path/to/your/image.jpg"
        breadcrumbItems={breadcrumbItems}
        title="Product Comparison"
      />
      
      {/* Check if comparison list is empty */}
      {comparison.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No products to compare. Add some products to the comparison list.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Display comparison products */}
          {comparison.map((product) => (
            <div
              key={product._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={250}
                height={250}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
              <p className="text-gray-500 text-sm mt-2">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => removeFromComparison(product._id)}
                  className="text-red-600 hover:text-red-800 font-medium transition-colors duration-300 ease-in-out"
                >
                  <span className="inline-block mr-2">🗑️</span> Remove
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors duration-300">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;
