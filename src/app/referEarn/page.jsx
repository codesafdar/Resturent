import ButtonUI from "@/components/common/ButtonUI";
import NextImage from "@/components/common/NextImage";
import React from "react";

const ReferEarn = () => {
  return (
    <>
      <div className="container mt-10 bg-[#232323] p-9 rounded-2xl">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="primary_title">Refer and Earn</h1>
          <div className="relative w-72 h-52">
            <NextImage src="/images/refer.png" className="object-contain" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-300">
            Invite Friend and Businesses
          </h2>
          <h3 className="text-2xl font-medium text-gray-400">
            Copy your code, share it with your friends
          </h3>
          <p className="text-xl font-medium text-gray-500">
            Your Personal Code
          </p>
        </div>
        <div className="flex items-center justify-between p-4 mt-8 border border-dashed rounded-lg border-primary">
          <h5 className="text-2xl font-medium text-gray-300">
            sdkmcacaj79i867nj
          </h5>
          <ButtonUI>Copy</ButtonUI>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold">How you it works?</h2>
          <ul className="mt-5 space-y-5">
            <li className="flex items-center gap-5">
              <div className="w-10 h-10 text-2xl bg-gray-600 rounded-full center">
                1
              </div>
              <span className="text-xl text-gray-300">
                Invite your friends and businesses.
              </span>
            </li>
            <li className="flex items-center gap-5">
              <div className="w-10 h-10 text-2xl bg-gray-600 rounded-full center">
                2
              </div>
              <span className="text-xl text-gray-300">
                They register kasbah with special offers. Once they spend their
                first 25$ order both of you will get 5$ coupon.
              </span>
            </li>
            <li className="flex items-center gap-5">
              <div className="w-10 h-10 text-2xl bg-gray-600 rounded-full center">
                3
              </div>
              <span className="text-xl text-gray-300">
                You made your earning!
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ReferEarn;
