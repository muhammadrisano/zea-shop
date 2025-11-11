import React from "react";
import * as MyComponent from "../../../../../components";
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

const NewComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="font-bold text-4xl">New </h1>
      <p className="font-normal text-clr-my-gray mt-2">
        You&apos;ve never seen it before!
      </p>
      <div className="grid grid-cols-5 gap-4 mt-8">
        {data.map((item) => (
          <MyComponent.Molecules.Card
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            variant="featured"
            rating={item.rating}
            reviews={item.reviews}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default NewComponent;
