import React from "react";
import NextImage from "@/components/common/NextImage";
import CartButton from "@/components/common/CartButton";

const RecommendedMenuCard = ({ className }) => {
  return (
    <>
      <div className={`border border-gray-300 rounded-xl w-[80%] h-[230px] ${className}`}>
        <div className="relative h-[100px]">
          <NextImage
            src="/images/homeSection1.png"
            className="object-cover rounded-t-xl"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">Chicken Wrap</h3>
          <h3 className="text-lg font-semibold">$ 16.9</h3>
          <div className="flex justify-center mt-3">
            <CartButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedMenuCard;
