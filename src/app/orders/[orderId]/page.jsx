import React from "react";
import { CheckCircle2 } from "lucide-react";
import ButtonUI from "@/components/common/ButtonUI";
import NextImage from "@/components/common/NextImage";

const OrderDetails = () => {
  return (
    <>
      <div className="container grid grid-cols-12 gap-6 mt-10 md:gap-12">
        <div className="col-span-full md:col-span-7 lg:col-span-8 bg-[#232323] p-9 rounded-2xl order-last md:order-first">
          <div className="flex justify-between gap-5 pb-5 border-b border-gray-600">
            <div className="space-y-2">
              <h3 className="text-xl">
                Order ID: <span className="font-bold">100103</span>
              </h3>
              <h3 className="text-xl">
                Item: <span className="font-semibold text-primary">2</span>
              </h3>
            </div>
            <div className="space-y-2">
              <h3 className="flex items-center gap-3 text-xl font-medium">
                <CheckCircle2 />
                22 - Dec - 2023 05:09
              </h3>
              <ButtonUI variant="bordered" fullWidth color="default" size="sm">
                Delivery Address
              </ButtonUI>
            </div>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-center">
            Payment Info
          </h3>
          <div className="py-6 border-b border-gray-600">
            <div className="flex items-center">
              <h3 className="min-w-32">Status:</h3>
              <h3 className="font-semibold text-primary">Paid</h3>
            </div>
            <div className="flex items-center">
              <h3 className="min-w-32">Method:</h3>
              <h3 className="font-semibold text-primary">Debit/Credit Card</h3>
            </div>
          </div>
          <div className="divide-y divide-gray-600">
            <div className="flex gap-5 py-8">
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
            <div className="flex gap-5 py-8">
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
            <div className="flex gap-5 py-8">
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
          </div>
        </div>
        <div className="col-span-full md:col-span-5 h-fit lg:col-span-4 bg-[#232323] px-5 py-10 rounded-2xl space-y-5">
          <ul className="flex items-center justify-between">
            <li className="text-xl text-gray-300">Items Price</li>
            <li className="text-xl text-gray-300">$33.98</li>
          </ul>
          <ul className="flex items-center justify-between">
            <li className="text-xl text-gray-300">Fee & Estimated Tax</li>
            <li className="text-xl text-gray-300">$7.37</li>
          </ul>
          <ul className="flex items-center justify-between">
            <li className="text-xl text-gray-300">Staff Tip</li>
            <li className="text-xl text-gray-300">$7.35</li>
          </ul>
          <div className="border border-gray-600 border-dashed" />
          <ul className="flex items-center justify-between">
            <li className="text-xl text-gray-300">Subtotal</li>
            <li className="text-xl text-gray-300">$7.37</li>
          </ul>
          <ul className="flex items-center justify-between">
            <li className="text-xl text-gray-300">Delivery Fee</li>
            <li className="text-xl text-gray-300">$7.35</li>
          </ul>
          <div className="border border-dashed border-primary" />
          <ul className="flex items-center justify-between">
            <li className="text-xl font-bold text-primary">Total Amount</li>
            <li className="text-xl font-bold text-primary">$55.59</li>
          </ul>
          <ButtonUI fullWidth>Track Order</ButtonUI>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
