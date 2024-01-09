import ButtonUI from "@/components/common/ButtonUI";
import NextImage from "@/components/common/NextImage";
import { PlusCircle } from "lucide-react";

const DiscountCard = () => {
  return (
    <>
      <div className="border border-[#5E5E5E] rounded-lg flex justify-between">
        <div className="p-6">
          <h3 className="font-bold">TUESDAY</h3>
          <p className="mt-1 text-sm text-gray-300 line-clamp-2">
            Taco Tuesday: Save $7 when you spend $20 or more. Exclusions apply.
          </p>
          <div className="flex items-center gap-2 mt-8">
            <PlusCircle size={20} className="text-primary" /> Add
          </div>
        </div>
        <div className="px-4 py-5 rounded-r-lg bg-primary">
          <div className="relative w-6 h-6">
            <NextImage src="/images/discIcon.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountCard;
