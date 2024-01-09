import React from "react";
import ButtonUI from "@/components/common/ButtonUI";
import { Check } from "lucide-react";

const OrderTracking = () => {
  return (
    <>
      <div className="container mt-10 bg-[#232323] p-9 rounded-2xl">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-5xl font-bold">Order Tracking</h1>
          <h3 className="text-2xl font-semibold text-gray-300">
            Be Prepared your food will arrive any moment now
          </h3>
          <h2 className="text-4xl font-semibold">0 - 5 Min</h2>
        </div>
        <div className="mt-20">
          <div>
            <div className="flex items-center gap-6">
              <div className="rounded-full bg-primary h-11 w-11 center">
                <Check className="text-[#232323]" />
              </div>
              <h3 className="text-2xl font-semibold">Order Placed</h3>
            </div>
            <hr className="w-[2px] bg-primary h-14 ml-5 my-1" />
          </div>
          <div>
            <div className="flex items-center gap-6">
              <div className="rounded-full bg-primary h-11 w-11 center">
                <Check className="text-[#232323]" />
              </div>
              <h3 className="text-2xl font-semibold">Preparing Food</h3>
            </div>
            <hr className="w-[2px] bg-white h-14 ml-5 my-1" />
          </div>
          <div>
            <div className="flex items-center gap-6">
              <div className="bg-white rounded-full h-11 w-11 center">
                <Check className="text-[#232323]" />
              </div>
              <h3 className="text-2xl font-semibold">Food on the way</h3>
            </div>
            <hr className="w-[2px] bg-white h-14 ml-5 my-1" />
          </div>
          <div>
            <div className="flex items-center gap-6">
              <div className="bg-white rounded-full h-11 w-11 center">
                <Check className="text-[#232323]" />
              </div>
              <h3 className="text-2xl font-semibold">Delivered the food</h3>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <ButtonUI className="px-28">Back to Home</ButtonUI>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTracking;
