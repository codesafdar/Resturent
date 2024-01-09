import React from "react";
import ButtonUI from "@/components/common/ButtonUI";
import { Plus } from "lucide-react";
import AddressCard from "@/components/modules/address/AddressCard";

const AddressMain = () => {
  return (
    <>
      <div className="container mt-10 bg-[#232323] p-16 pb-40 rounded-2xl">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-bold">Addresses</h1>
          <ButtonUI startContent={<Plus />} size="lg">
            Add New
          </ButtonUI>
        </div>
        <div className="grid grid-cols-2 gap-x-24 gap-y-7 mt-28">
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
        </div>
      </div>
    </>
  );
};

export default AddressMain;
