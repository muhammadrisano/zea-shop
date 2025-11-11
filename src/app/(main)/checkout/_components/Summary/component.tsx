import React from "react";
import * as MyComponent from "../../../../../../components";

const Summary = () => {
  return (
    <div className="shadow p-5 h-fit rounded-sm">
      <h3 className="text-text-primary font-semibold text-base">
        Shopping summary
      </h3>
      <div className="border-b border-clr-my-gray pb-5 mb-5 mt-4">
        <div className="flex justify-between">
          <p className="text-clr-my-gray text-base font-medium">Total Harga</p>
          <span className="text-text-primary font-semibold text-lg">
            Rp. 400.000
          </span>
        </div>
        <div className="flex justify-between ">
          <p className="text-clr-my-gray text-base font-medium">Delivery</p>
          <span className="text-text-primary font-semibold text-lg">
            Rp. 10.000
          </span>
        </div>
      </div>
      <div className="flex justify-between mb-5 ">
        <p className="text-text-primary font-semibold text-base">Total</p>
        <span className="text-text-primary font-semibold text-lg ">Rp. 410.000</span>
      </div>
      <MyComponent.Attom.Button
        label="Bayar"
        variant="primary"
        size="medium"
        className="w-full"
      />
    </div>
  );
};

export default Summary;
