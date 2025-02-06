
"use client"
import React from "react";
import { Heart, Search, ShoppingCart, Menu, User } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";
import { useCart } from "@/app/components/CartContext"; // Assuming you have CartContext
import  {useWishlist}  from "@/app/components/WishlistContext"; // Import WishlistContext
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/app/components/ui/sheet";
import Image from "next/image";

export const Header = () => {
  const { cartCount } = useCart();  // Get the cart count from the context
  const { wishlist } = useWishlist();  // Get wishlist data from the context
  

 
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
        <Image
            src="/images/logo.png"
            alt="Furniro Logo"
            width={120}
            height={40}
            className="object-contain"
          />
         
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/"  className="text-md font-bold text-gray-600 hover:text-black">
            Home
          </Link>
          <Link href="/shop" target="_blank" className="text-md font-bold text-gray-600 hover:text-black">
            Shop
          </Link>
          <Link href="/blog" target="_blank" className="text-md font-bold text-gray-600 hover:text-black">
            Blog
          </Link>
          <Link href="/contact" target="_blank" className="text-md font-bold text-gray-600 hover:text-black">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <User />
          </Button>
          <Link href="/wishlist">
            <Button variant="outline" size="icon" className="rounded-full relative">
              <Heart />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Button>
          </Link>

          <Link href="/cart">
            <Button variant="outline" size="icon" className="rounded-full relative">
              <ShoppingCart />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          <Button variant="outline" size="icon" className="rounded-full">
            <Search />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Furniro</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/" className="text-md font-medium text-gray-600">
                Home
              </Link>
              <Link href="/shop" className="text-md font-medium text-gray-600">
                Shop
              </Link>
              <Link href="/blog" className="text-md font-medium text-gray-600">
                Blog
              </Link>
              <Link href="/contact" className="text-md font-medium text-gray-600">
                Contact
              </Link>
              <div className="flex mt-6 gap-4">
                <Link href="/wishlist">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Heart />
                    {wishlist.length > 0 && (
                      <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlist.length}
                      </span>
                    )}
                  </Button>
                </Link>
                <Link href="/cart">
                  <Button variant="outline" size="icon" className="rounded-full relative">
                    <ShoppingCart />
                    {cartCount > 0 && (
                      <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </Link>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Search />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;