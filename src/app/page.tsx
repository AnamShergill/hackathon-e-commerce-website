import React from "react";

import Hero from "./components/Hero";

import Range from "./components/Range";
import ProductCard from "./components/ProductCard";
import Inspiration from "./components/Inspiration";
import Share from "./components/Share";

export default function page() {
  return (
    <div>
      {/*<Header/>*/}
      <Hero />
      <Range />
      <ProductCard />
      <Inspiration />
      <Share />

      {/*<Footer/>*/}
    </div>
  );
}
