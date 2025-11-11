import React from "react";
import * as MyComponent from "../../../../../components";

const component: React.FC = () => {
  const data = [
    {
      id: "1",
      title: "T-Shirts",
      color: '#CC0B04',
      imageUrl:
        "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    },
    {
      id: "2",
      title: "Shorts",
      color: '#1C3391',
      imageUrl:
        "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    },
    {
      id: "3",
      title: "Jacket",
      color: '#CC0AAA',
      imageUrl:
        "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    },
    {
      id: "4",
      title: "Pants",
      color: '#CC0B04',
      imageUrl:
        "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    },
    {
      id: "5",
      title: "Shoes",
      color: '#CC0B04',
      imageUrl:
        "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    },
  ];
  return (
    <div className="container mx-auto py-8">
      <h1 className="font-bold text-4xl">Category</h1>
      <p className="font-normal text-clr-my-gray mt-2">
        What are you currently looking for
      </p>

      <div className="flex justify-between gap-x-3 mt-8 ">
        {data.map((item) => (
          <MyComponent.Molecules.Card
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            variant="category"
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default component;
