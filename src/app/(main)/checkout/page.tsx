import React from "react";
import { ShippingAddress, Reviews, Summary } from "./_components";

const CheckoutPage = () => {
  return (
    <div className="container mx-auto pt-7">
      <h1 className="text-text-primary font-bold text-3xl">Checkout</h1>
      <div className="grid grid-cols-3 gap-x-7 mt-5">
        <div className="col-span-2">
          <ShippingAddress />
          <Reviews />
        </div>
        <Summary />
      </div>
    </div>
  );
};

export default CheckoutPage;
