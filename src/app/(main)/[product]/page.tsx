import React from "react";
import { Hero, Information, ReviewProduct, ProductRecomended } from "./_components";

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <Information />
      <ReviewProduct  />
      <ProductRecomended/>
    </div>
  );
};

export default ProductDetailPage;
