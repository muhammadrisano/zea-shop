import React from "react";
import { ICardProps } from "./interface";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import Image from "next/image";
import Link from "next/link";
import {Stars} from '../index'

const Component: React.FC<ICardProps> = ({
  title,
  price,
  imageUrl,
  rating,
  variant,
  color,
  className,
  reviews,
}) => {
  return (
    <div
      {...(color ? { style: { backgroundColor: color } } : {})}
      className={cn(cardVariants({ variant }), className)}
    >
      <Link href="/tes">
        <Image
          src={imageUrl}
          alt={title || ""}
          layout="responsive"
          width={500}
          height={300}
          className={cn({
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2":
              variant === "category",
          })}
        />
      </Link>
      <Link href="/tes">
        <div className="p-4 space-y-2">
          <h2
            className={cn({
              "text-3xl font-bold text-center absolute top-1/2 left-1/2 -translate-1/2 z-10 text-white":
                variant === "category",
              "font-medium text-black text-lg leading-6":
                variant === "featured",
            })}
          >
            {title}
          </h2>
          {price && (
            <p className="text-clr-primary text-base font-medium">Rp {price}</p>
          )}
          {rating && (

            <div className="flex items-center gap-1">
              <Stars size={14} value={rating} />
              <span className="text-clr-my-gray text-[0.625rem]">
                ({reviews})
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

const cardVariants = cva("rounded-lg shadow-md overflow-hidden relative", {
  variants: {
    variant: {
      default: "bg-white",
      featured: "bg-white",
      category: "flex-1 h-[220px]",
      cart: "flex items-center shadow-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default Component;
