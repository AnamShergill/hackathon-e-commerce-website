export default function ProductGrid() {
    const products = [
      {
        id: 1,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000",
        discount: "-30%",
        image: "/images/syltherine.png",
      },
      {
        id: 2,
        name: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        image: "/images/leviosaa.jpg",
      },
      {
        id: 3,
        name: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        discount: "-50%",
        image: "/images/lolito.png",
      },
      {
        id: 4,
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        badge: "New",
        image: "/images/respira.png",
      },
     
      {
        id: 1,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000",
        discount: "-30%",
        image: "/images/syltherine.png",
      },
      {
        id: 2,
        name: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        image: "/images/leviosaa.jpg",
      },
      {
        id: 3,
        name: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        discount: "-50%",
        image: "/images/lolito.png",
      },
      {
        id: 4,
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        badge: "New",
        image: "/images/respira.png",
      },
      {
        id: 1,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000",
        discount: "-30%",
        image: "/images/syltherine.png",
      },
      {
        id: 2,
        name: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        image: "/images/leviosaa.jpg",
      },
      {
        id: 3,
        name: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        discount: "-50%",
        image: "/images/lolito.png",
      },
      {
        id: 4,
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        badge: "New",
        image: "/images/respira.png",
      },
      {
        id: 1,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000",
        discount: "-30%",
        image: "/images/syltherine.png",
      },
      {
        id: 2,
        name: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        image: "/images/leviosaa.jpg",
      },
      {
        id: 3,
        name: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        discount: "-50%",
        image: "/images/lolito.png",
      },
      {
        id: 4,
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        badge: "New",
        image: "/images/respira.png",
      },
    ];
  
    return (
      <div className="p-6 bg-white border-spacing-6 mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-6 pb-20 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
              </div>
  
              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="mt-2">
                  <span className="font-bold text-gray-800">{product.price}</span>
                  {product.oldPrice && (
                    <span className="ml-2 line-through text-gray-400">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
  
              {/* Hover Actions */}
              <div className="p-4 hidden group-hover:flex flex-col items-center gap-2 text-sm bg-white">
                <button className="w-full bg-yellow-500 text-white py-2 rounded">
                  Add to cart
                </button>
                <div className="flex justify-between w-full text-gray-600">
                  <button>Share</button>
                  <button>Compare</button>
                  <button>Like</button>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">
            1
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            2
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            3
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Next
          </button>
        </div>
      </div>
    );
  }
  