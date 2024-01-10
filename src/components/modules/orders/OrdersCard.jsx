import React from "react";
import { CheckCircle2 } from "lucide-react";
import NextImage from "@/components/common/NextImage";
import ButtonUI from "@/components/common/ButtonUI";

const OrdersCard = ({obj}) => {
  return (
    <>
      <div className="bg-[#161616] rounded-xl p-8">
        <div className="flex gap-6">
          <div className="relative w-20 h-20">
            <NextImage
              src="/images/homeSection1.png"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Order ID: 100103</h3>
            <h4 className="text-xl font-medium text-gray-300">2 Items</h4>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-primary" />
              <span className="text-xl text-primary">Confirmed</span>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mt-8">
          <ButtonUI fullWidth variant="bordered">
            Details
          </ButtonUI>
          <ButtonUI fullWidth>Track Order</ButtonUI>
        </div>
      </div>
    </>
  );
};

export default OrdersCard;
