import React from "react";
import CartButton from "@/components/common/CartButton";
import NextImage from "@/components/common/NextImage";

const CartItemsCard = () => {
  return (
    <>
      <div className="flex items-center justify-between p-6 rounded-2xl bg-[#232323]">
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
        <div className="flex items-center justify-center h-16 border border-gray-600 bg-[#161616] rounded px-8">
          <CartButton />
        </div>
      </div>
    </>
  );
};

export default CartItemsCard;
