"use server";
import React from "react";
import * as MyComponent from "../../../../../components";
import Link from "next/link";

const page = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-4 mt-8">
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
        <Link
          href="/auth/login/seller"
          className="text-sm text-clr-primary ml-auto"
        >
          Forgot Password ?
        </Link>
        <MyComponent.Attom.Button
          label="Login as Customer"
          variant="primary"
          className="w-full"
        />
        <p className="font-normal text-sm text-[#222]">Dont have a  account? <Link href="/register/customer" className="text-clr-primary">Register</Link></p>
        
      </div>
    </form>
  );
};

export default page;
