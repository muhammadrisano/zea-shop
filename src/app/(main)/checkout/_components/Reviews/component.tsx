import React from "react";
import * as MyComponent from "../../../../../../components"

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
    quantity: 1,
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
    quantity: 1,
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
    quantity: 1,
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
    quantity: 1,
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
    quantity: 1,
  },
];

const Reviews: React.FC = () => {
  return (
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
          <div className="flex items-center gap-x-2">
            <p className="text-sm text-clr-my-gray">{item.price}</p>
            <span className="text-sm text-clr-my-gray">x</span>
            <p className="text-sm text-clr-my-gray">{item.quantity}</p>
          </div>

          <span className="font-medium text-text-primary">Rp.{item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
