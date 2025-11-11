import React from "react";
import * as MyComponent from "../../../../../../components";


const person = {
  name: "John Doe",
  address:
    "Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181",
  phone: "+1 234 567 890",
  email: "johndoe@example.com",
};

const ShippingAddress: React.FC = () => {
  return (
    <>
      <p className="text-text-primary font-semibold text-base mt-2">
        Shipping Address
      </p>
      <div className="w-full shadow items-center p-5 mt-3">
        <p className="text-text-primary text-base font-semibold">
          {person.name}
        </p>
        <p className="text-text-primary text-sm ">{person.address}</p>
        <MyComponent.Attom.Button
          label="Change Address"
          variant="secondary"
          size="small"
          className="mt-4"
        />
      </div>
    </>
  );
};

export default ShippingAddress;
