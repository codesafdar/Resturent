import React from "react";
import ButtonUI from "@/components/common/ButtonUI";
import { HomeIcon, HorizontalMenuIcon, MapIcon } from "@/config/data/Icons";

const AddressCard = () => {
  return (
    <>
      <div className="flex items-center justify-between px-8 h-[140px] bg-[#383535] rounded-lg">
        <div className="flex items-center gap-8">
          <HomeIcon />
          <div>
            <h2 className="text-xl font-medium text-gray-400">Home</h2>
            <h3>931 SW 2nd Ave, Gainesville. FL 32601, USA</h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MapIcon />
          <ButtonUI isIconOnly size="lg" variant="light">
            <HorizontalMenuIcon />
          </ButtonUI>
        </div>
      </div>
    </>
  );
};

export default AddressCard;
