"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "../../../utils/cn";
import Link from "next/link";

const Component: React.FC = () => {
  const pathname = usePathname();
  const bashePath = pathname.split("/").slice(0, -1).join("/");
  const isCustomer = pathname.split("/").pop() === "customer";
  const isSeller = pathname.split("/").pop() === "seller";
  if(!isCustomer && !isSeller) return <></>;
  return (
    <div className="flex">
      <Link href={`${bashePath}/customer`}
        className={cn(
          "border-l border-t border-b  px-6 py-3 rounded-l-sm text-gray-900 cursor-pointer",
          isCustomer
            ? "bg-red-700 border-red-700 text-white"
            : "bg-white border-gray-300 text-gray-300"
        )}
      >
        Customer
      </Link>
      <Link href={`${bashePath}/seller`}
        className={cn(
          "border-r border-t border-b px-6 py-3 rounded-r-sm text-yellow-500",
           isSeller ? "bg-red-700 border-red-700 text-white"
            : "bg-white border-gray-300 text-gray-300"
        )}
      >
        Seller
      </Link>
    </div>
  );
};

export default Component;
