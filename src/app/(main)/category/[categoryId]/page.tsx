import React from 'react'
import * as MyComponent from '../../../../../components'

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
  {
    id: "6",
    title: "Men's formal suit - Black & White",
    imageUrl:
      "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    description: "Discover the latest trends in fashion.",
    price: "100000",
    rating: 4.5,
    reviews: 10,
  },
  {
    id: "7",
    title: "Men's formal suit - Black & White",
    imageUrl:
      "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    description: "Discover the latest trends in fashion.",
    price: "100000",
    rating: 4.5,
    reviews: 10,
  },
  {
    id: "8",
    title: "Men's formal suit - Black & White",
    imageUrl:
      "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    description: "Discover the latest trends in fashion.",
    price: "100000",
    rating: 4.5,
    reviews: 10,
  },
  {
    id: "9",
    title: "Men's formal suit - Black & White",
    imageUrl:
      "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    description: "Discover the latest trends in fashion.",
    price: "100000",
    rating: 4.5,
    reviews: 10,
  },
  {
    id: "10",
    title: "Men's formal suit - Black & White",
    imageUrl:
      "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
    description: "Discover the latest trends in fashion.",
    price: "100000",
    rating: 4.5,
    reviews: 10,
  },
];

const page = () => {
  return (
    <div className='container mx-auto py-8'>
        <h3 className='text-3xl text-text-primary font-bold'>T-Shirt</h3>
       <div className="grid grid-cols-5 gap-5 mt-8">
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
  )
}

export default page