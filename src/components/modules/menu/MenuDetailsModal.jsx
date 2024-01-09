import React from "react";
import ModalUI from "@/components/common/ModalUI";
import NextImage from "@/components/common/NextImage";
import RecommendedMenuCard from "./RecommendedMenuCard";
import ButtonUI from "@/components/common/ButtonUI";
import { X } from "lucide-react";
import CartButton from "@/components/common/CartButton";

const MenuDetailsModal = () => {
  
  return (
    <>
      <ModalUI
        isOpen={false}
        // onOpenChange={onOpenChange}
        size="full"
        hideCloseButton={true}
      >
        <div className="container relative h-screen pt-20 overflow-auto">
          <ButtonUI
            isIconOnly
            color="default"
            className="absolute rounded-none top-5 right-5"
          >
            <X />
          </ButtonUI>
          <div className="relative h-44 w-44">
            <NextImage
              src="/images/homeSection1.png"
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-between mt-14">
            <h1 className="primary_title">Guacamole and Chips</h1>
            <h2 className="text-3xl font-bold lg:text-5xl text-primary">
              $ 7.99
            </h2>
          </div>
          <p className="mt-3 text-xl lg:text-3xl font-medium text-gray-300 md:max-w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt
          </p>
          <div className="mt-14">
            <h2 className="text-2xl font-semibold">Recommended Sides</h2>
            <div className="w-full lg:max-w-[80%] grid grid-cols-4 gap-4 mt-6">
              <RecommendedMenuCard />
              <RecommendedMenuCard />
              <RecommendedMenuCard />
              <RecommendedMenuCard />
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Recommended Beverages</h2>
            <div className="w-full lg:max-w-[80%] grid grid-cols-4 gap-4 mt-6">
              <RecommendedMenuCard />
              <RecommendedMenuCard />
              <RecommendedMenuCard />
              <RecommendedMenuCard />
            </div>
          </div>
          <div
            className="sticky bottom-0 flex items-center justify-end gap-6 py-4 
          bg-[#171717] mt-14"
          >
            <h2 className="text-xl font-medium md:text-3xl">
              Log in to pay with Points
            </h2>
            <div className="flex items-center justify-center h-12 border border-gray-600 rounded px-7">
              <CartButton />
            </div>
            <ButtonUI size="lg" className="px-10">
              Add to Cart
            </ButtonUI>
          </div>
        </div>
      </ModalUI>
    </>
  );
};

export default MenuDetailsModal;
