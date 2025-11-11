import React from "react";
import * as MyComponent from "../../../../../../components";

const product = {
  id: "1",
  title: "Men's formal suit - Black & White",
  imageUrl:
    "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
  description: "Discover the latest trends in fashion.",
  price: "100000",
  rating: 4.5,
  reviews: 10,
  store: {
    name: "Zea Shop",
    location: "Jakarta, Indonesia",
  },
};
const HeroComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-6 items-start py-6">
      <div>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full object-contain"
        />
      </div>

      <div className="col-span-2 space-y-9">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="text-base font-medium text-clr-my-gray">
            {product.store.name}
          </p>

          <div className="flex items-center gap-3">
            <MyComponent.Molecules.Stars size={16} value={product.rating} />
            <span className="text-sm text-gray-600">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>
        </div>
        <div  className="space-y-3">
          <p className="text-clr-my-gray text-base font-medium mt-4">Harga</p>
          <p className="text-text-primary font-bold text-3xl">
            {product.price}
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-base font-semibold text-text-primary">Jumlah</p>

          <div className="flex items-center">
            <MyComponent.Attom.Button
              variant="counter"
              label="-"
              className="bg-[#D4D4D4] shadow-none text-white "
            />
            <span className="mx-3">1</span>
            <MyComponent.Attom.Button variant="counter" label="+" />
          </div>
        </div>
        <div className="flex gap-x-2">
          <MyComponent.Attom.Button
            label="Chat Seller"
            variant="secondary"
            size="medium"
            className="px-8 border-text-primary text-text-primary"
          />
          <MyComponent.Attom.Button
            label="Tambah ke Keranjang"
            variant="secondary"
            size="medium"
            className="px-8 border-text-primary text-text-primary"
          />
          <MyComponent.Attom.Button
            label="beli sekarang"
            variant="primary"
            size="medium"
            className="px-8"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
