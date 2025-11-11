import React from "react";
import * as MyComponent from "../../../../components/";

const data = [
  {
    id: "1",
    title: "Men's formal suit - Black & White",
    imageUrl:
      "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    description: "Discover the latest trends in fashion.",
    price: "100000",
    rating: 4.5,
    reviews: 10,
  },
  {
    id: "2",
    title: "Men's formal suit - Black & White",
    imageUrl:
      "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    description: "Discover the latest trends in fashion.",
    price: "100000",
    rating: 4.5,
    reviews: 10,
  },
  {
    id: "3",
    title: "Men's formal suit - Black & White",
    imageUrl:
      "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    description: "Discover the latest trends in fashion.",
    price: "100000",
    rating: 4.5,
    reviews: 10,
  },
  {
    id: "4",
    title: "Men's formal suit - Black & White",
    imageUrl:
      "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    description: "Discover the latest trends in fashion.",
    price: "100000",
    rating: 4.5,
    reviews: 10,
  },
  {
    id: "5",
    title: "Men's formal suit - Black & White",
    imageUrl:
      "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    description: "Discover the latest trends in fashion.",
    price: "100000",
    rating: 4.5,
    reviews: 10,
  },
];

const CartPage = () => {
  return (
    <div className="container mx-auto pt-7">
      <h1 className="text-text-primary font-bold text-3xl">My Bag</h1>
      <div className="grid grid-cols-3 gap-x-7 mt-5">
        <div className="col-span-2">
          <div className="w-full shadow flex justify-between items-center p-5">
            <div className="space-x-3">
              <input type="checkbox" id="selectall" />
              <label htmlFor="selectall">
                Select all items (2 items selected)
              </label>
            </div>
            <button className="text-clr-primary font-medium text-base">
              Delete
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full shadow flex justify-between items-center p-5"
              >
                <MyComponent.Molecules.Card
                  title={item.title}
                  imageUrl={item.imageUrl}
                  variant="cart"
                />
                <div className="flex items-center">
                  <MyComponent.Attom.Button
                    variant="counter"
                    label="-"
                    className="bg-[#D4D4D4] shadow-none text-white "
                  />
                  <span className="mx-3">1</span>
                  <MyComponent.Attom.Button variant="counter" label="+" />
                </div>

                <span className="font-medium text-text-primary">
                  Rp.{item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="shadow p-5 h-fit rounded-sm">
          <h3 className="text-text-primary font-semibold text-base">
            Shopping summary
          </h3>
          <div className="flex justify-between mt-4 mb-5 ">
            <p className="text-clr-my-gray text-base font-medium">
              Total Harga
            </p>
            <span className="text-text-primary font-semibold text-lg">
              {" "}
              Rp. 400.000
            </span>
          </div>
          <MyComponent.Attom.Button
            label="Bayar"
            variant="primary"
            size="medium"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
