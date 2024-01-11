import NextImage from "@/components/common/NextImage";
import { Heart, PlusCircle } from "lucide-react";
import MenuDetailsModal from "./MenuDetailsModal";
import { useState } from "react";

const CategoryCard = ({obj}) => {
  const [isopen, setisopn] = useState(false);
  const handleopn = () =>{
    setisopn(true);
  }
  return (
    <>
      <div onClick={handleopn} className="border-b md:border border-[#5E5E5E] md:rounded-lg flex justify-between gap-6 md:h-[200px] pb-6 md:pb-0">
        <div className="md:p-6">
          <h3 className="font-bold">{obj.name??'N/A'}</h3>
          <p className="mt-1 text-sm text-gray-300 line-clamp-2">
      {obj.description??'N/A'}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              <PlusCircle size={20} className="text-primary" />
              <h4 className="font-bold font-sm">{obj.price??'N/A'}</h4>
            </div>
            <div className="flex items-center gap-1">
              <Heart size={20} />
              <h4 className="font-bold font-sm">{obj.id??'N/A'}</h4>
            </div>
          </div>
        </div>
        <div className="relative h-28 min-w-28 md:w-[200px] md:h-[200px]">
          <NextImage
            src="/images/homeSection1.png"
            className="object-cover md:rounded-r-lg"
          />
        </div>
        <MenuDetailsModal isopn={isopen} setisopn={setisopn} obj={obj}/>
      </div>
    </>
  );
};

export default CategoryCard;
