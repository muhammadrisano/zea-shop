import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as MyComponent from "../../../../../../components";

const person = {
  name: "John Doe",
  role: "Administrator",
  avatarUrl:
    "https://res.cloudinary.com/di572l6cq/image/upload/v1761978951/zea%20shop/category/hiclipart_34_ysswx9.png",
  email: "johndoe@example.com",
  phone: "08123123123",
  gender: "male",
  dateOfBirth: "1990-01-01",
};

const Sidebar = () => {
  return (
    <div className="w-72">
      <div className="mx-auto w-56 space-y-11 py-6">
        <div className="flex">
          <Image
            src={person.avatarUrl}
            alt={person.name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-text-primary text-base font-semibold">
              {person.name}
            </h2>
            <p className="text-sm text-clr-my-gray font-medium ">
              <span className="inline-block mr-2 translate-y-1">
                <MyComponent.Icon.IcEdit />
              </span>
              Ubah profile
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="/dashboard/account" className="flex items-center gap-3">
              <MyComponent.Attom.Button variant="icon" className="bg-[#456BF3]">
                <MyComponent.Icon.IcAccount />
              </MyComponent.Attom.Button>
              <span className="font-medium text- clr-my-gray text-sm hover:text-clr-primary">
                My account
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/shipping"
              className="flex items-center gap-3"
            >
              <MyComponent.Attom.Button variant="icon" className="bg-[#F36F45]">
                <MyComponent.Icon.IcLocation />
              </MyComponent.Attom.Button>
              <span className="font-medium text-clr-my-gray text-sm hover:text-clr-primary">
                Shipping Address
              </span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/orders" className="flex items-center gap-3">
              <MyComponent.Attom.Button variant="icon" className="bg-[#F3456F]">
                <MyComponent.Icon.IcOrder />
              </MyComponent.Attom.Button>
              <span className="font-medium text-clr-my-gray text-sm hover:text-clr-primary">
                My order
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 space-y-4"></div>
    </div>
  );
};

export default Sidebar;
