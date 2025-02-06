import { CartProvider } from "@/app/components/CartContext";
import { WishlistProvider } from "../app/components/WishlistContext"; // Make sure path is correct
import { ComparisonProvider } from "@/app/components/Comparison"; // Ensure correct path for ComparisonContext

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css"; // Global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Wrapping the application with CartProvider, WishlistProvider, and ComparisonProvider */}
        <CartProvider>
          <WishlistProvider>
            <ComparisonProvider>
              <Header />
              <main>{children}</main> {/* Wrap children in a <main> tag for better semantics */}
              <Footer />
            </ComparisonProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
