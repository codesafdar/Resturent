import NextImage from "@/components/common/NextImage";
import { Heart, PlusCircle } from "lucide-react";

const PopularItemsCard = ({papulerProduct}) => {
  console.log("data PAPULER", papulerProduct);
  return (
    <>
      <div className="relative">
        <div className="relative h-[400px] w-full">
          <NextImage
            src="/images/homeSection1.png"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.42)] flex flex-col justify-end p-4 space-y-1 rounded-lg">
          <h3 className="text-sm font-bold">#1 Popular Item</h3>
          <h2 className="text-xl font-bold">Birria</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <PlusCircle size={20} />
              <h4 className="font-bold font-sm">$14.99</h4>
            </div>
            <div className="flex items-center gap-1">
              <Heart size={20} />
              <h4 className="font-bold font-sm">73</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularItemsCard;
