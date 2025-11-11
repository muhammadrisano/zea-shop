import React, { act } from "react";
import * as MyComponent from "../../../../../components";
import Image from "next/image";


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

const page = () => {
  return (
    <div className="px-6 py-4 bg-white border border-clr-my-gray rounded-lg shadow-sm">
      <div className="py-4 border-b border-clr-my-gray ">
        <h1 className="text-2xl font-semibold text-text-primary mb-2">
          My Profile
        </h1>
        <p className="text-sm text-clr-my-gray font-medium">
          Manage your profile information
        </p>
      </div>
      <div>
        <div className="py-4 flex gap-x-12">
          <div className="grid grid-cols-4 gap-x-6 gap-y-3  w-full">
            <div className="self-center">
              <label htmlFor="" className="text-clr-my-gray  block text-right">
                Name
              </label>
            </div>
            <div className="col-span-3">
              <MyComponent.Attom.Input
                placeholder="Full Name"
                size="md"
                variant="default"
                className="w-full"
              />
            </div>
            <div className="self-center">
              <label htmlFor="" className="text-clr-my-gray  block text-right">
                Email
              </label>
            </div>
            <div className="col-span-3">
              <MyComponent.Attom.Input
                placeholder="Email"
                size="md"
                variant="default"
                className="w-full"
                type="email"
              />
            </div>
            <div className="self-center">
              <label htmlFor="" className="text-clr-my-gray  block text-right">
                Phone Number
              </label>
            </div>
            <div className="col-span-3">
              <MyComponent.Attom.Input
                placeholder="phone number"
                size="md"
                variant="default"
                className="w-full"
              />
            </div>
            <div className="self-center">
              <label htmlFor="" className="text-clr-my-gray  block text-right">
                Gender
              </label>
            </div>
            <div className="col-span-3 space-x-5">
              <label className="text-clr-my-gray text-sm font-medium">
                <MyComponent.Attom.Input
                  placeholder="phone number"
                  size="md"
                  variant="radio"
                  type="radio"
                  name="gender"
                  value="male"
                  className="inline-block mr-2 focus:ring-0"
                />
                Laki-laki
              </label>
              <label className="text-clr-my-gray text-sm font-medium">
                <MyComponent.Attom.Input
                  placeholder="phone number"
                  size="md"
                  variant="radio"
                  type="radio"
                  name="gender"
                  value="male"
                  className="inline-block mr-2 focus:ring-0"
                />
                Perempuan
              </label>
            </div>
            <div className="self-center">
              <label htmlFor="" className="text-clr-my-gray  block text-right">
                Date of Birth
              </label>
            </div>
            <div className="col-span-3 flex gap-x-3">
<MyComponent.Attom.Select
                options={[{
                  label: '1', value: 1
                },
                {
                  label: '2', value: 2
                }]}
                placeholder="tanggal"
                size="md"
                variant="default"
                className="mt-3"
              />
               <MyComponent.Attom.Select
                options={[{
                  label: '1', value: 1
                },
                {
                  label: '2', value: 2
                }]}
                placeholder="Bulan"
                size="md"
                variant="default"
                className="mt-3"
              />
              <MyComponent.Attom.Select
                options={[{
                  label: '1', value: 1
                },
                {
                  label: '2', value: 2
                }]}
                placeholder="Tahun"
                size="md"
                variant="default"
                className="mt-3"
              />
            </div>
            <div></div>
            <div className="pt-4">
              <MyComponent.Attom.Button
                label="Simpan"
                variant="primary"
                size="medium"
              />
            </div>
          </div>
          <div>
            <div className="border-l border-clr-my-gray px-10">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src={person.avatarUrl}
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <MyComponent.Attom.Button label="Select Image" variant="secondary" size="small" className="mt-4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
