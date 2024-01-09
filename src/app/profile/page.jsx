import React from "react";
import ButtonUI from "@/components/common/ButtonUI";
import InputUI from "@/components/common/InputUI";
import NextImage from "@/components/common/NextImage";

const UserProfile = () => {
  return (
    <>
      <div className="container mt-10 bg-[#232323] p-9 rounded-2xl">
        <div className="flex flex-col items-center">
          <div className="relative w-[100px] h-[100px]">
            <NextImage
              src="/images/user.svg"
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="mt-5 text-3xl font-bold">Moazzam Ali</h1>
          <form className="w-full mx-auto mt-20">
            <div className="grid gap-5 sm:grid-cols-2 md:gap-x-20">
              <InputUI
                name="fName"
                label="First Name"
                placeholder="Enter first name"
                placement="outside"
                size="lg"
              />
              <InputUI
                name="lName"
                label="Last Name"
                placeholder="Enter last name"
                placement="outside"
                size="lg"
              />
              <InputUI
                name="email"
                label="Email"
                placeholder="Enter email"
                placement="outside"
                size="lg"
              />
              <InputUI
                name="mobile"
                label="Mobile Number"
                placeholder="Enter mobile number"
                placement="outside"
                size="lg"
              />
              <InputUI
                name="password"
                label="Password"
                placeholder="Enter password"
                placement="outside"
                size="lg"
                type="password"
              />
              <InputUI
                name="cPassword"
                label="Confirm Password"
                placeholder="Enter confirm password"
                placement="outside"
                size="lg"
                type="password"
              />
            </div>
            <div className="flex justify-center mt-10 md:mt-32">
              <ButtonUI size="lg" className="w-full md:w-fit md:px-28">
                Update Profile
              </ButtonUI>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
