import NextImage from "@/components/common/NextImage";
import { Heart } from "lucide-react";
import React from "react";

const RewardMain = () => {
  return (
    <>
      <div className="container mt-10 bg-[#232323] p-9 rounded-2xl">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="flex items-center gap-1 primary_title">
            54 <Heart size={40} fill="#06b906" color="#06b906" />
          </h1>
          <h3 className="text-2xl font-semibold text-gray-300">
            Hearts Balance
          </h3>
          <h2 className="text-4xl font-semibold">
            Rewards you can get with hearts
          </h2>
        </div>
        <div className="grid mt-20 md:grid-cols-2 gap-x-20 gap-y-10">
          {[...Array(6)].map((_, index) => (
            <div
              className="flex items-center justify-between p-5 border rounded-lg border-primary"
              key={index}
            >
              <div className="flex gap-5">
                <div className="relative w-[100px] h-[100px]">
                  <NextImage
                    src="/images/homeSection1.png"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">Chicken Wrap</h3>
                  <h6 className="text-gray-300">$ 16.99</h6>
                </div>
              </div>
              <Heart size={40} color="#06b906" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RewardMain;
