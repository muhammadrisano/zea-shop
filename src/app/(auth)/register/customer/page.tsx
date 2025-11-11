import React from "react";
import * as MyComponent from "../../../../../components";
import Link from "next/link";

const page = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-4 mt-8">
        <MyComponent.Attom.Input 
          type="text"
          name="name"
          placeholder="name"
          variant="auth"
          className="w-full"
        />
        <MyComponent.Attom.Input
          type="email"
          name="email"
          placeholder="email"
          variant="auth"
          className="w-full"
        />
        <MyComponent.Attom.Input
          type="password"
          name="password"
          placeholder="password"
          variant="auth"
          className="w-full"
        />
        <MyComponent.Attom.Button
          label="Register as Customer"
          variant="primary"
          className="w-full"
        />
        <p className="font-normal text-sm text-[#222]">
          Already have an account?{" "}
          <Link href="/login/customer" className="text-clr-primary">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default page;
