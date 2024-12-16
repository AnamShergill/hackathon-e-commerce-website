export default function Footer() {
  return (
    <footer className="bg-white py-10 relative">
      <div className="max-w-7xl h-auto mx-auto px-4 top-1 grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
        <div>
          <h3 className="font-bold text-2xl font-poppins text-black">
            Funiro.
          </h3>
          <p className="text-gray-400 pt-6">
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-400">Links</h3>
          <ul className="space-y-4 mt-6 mb-6">
            <li>
              <a href="/" className="text-black hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="text-black hover:text-yellow-500">
                Shop
              </a>
            </li>
            <li>
              <a href="/blog" className="text-black hover:text-yellow-500">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="text-black hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-400">Help</h3>
          <ul className="space-y-4 mt-6">
            <li>
              <a href="#" className="text-black hover:text-yellow-500">
                Payment option
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-yellow-500">
                Return
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-yellow-500">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-400">Newsletter</h3>
          <form className="flex justify-center items-center  mt-8 flex-wrap gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:flex-1 bg-transparent border-b-2 border-black text-black focus:outline-none focus:border-yellow-500 placeholder-gray-500"
            />
            <button
              type="submit"
              className="border-b-2 border-black text-black focus:border-yellow-500 hover:text-yellow-500 px-4 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="w-full text-left text-black border-t py-4">
        © 2024 Funiro. All rights reserved.
      </div>
    </footer>
  );
}
