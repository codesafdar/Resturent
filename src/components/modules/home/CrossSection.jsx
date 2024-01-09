import React from "react";
import NextImage from "@/components/common/NextImage";
import { crossSectionData } from "@/config/data";

const CrossSection = () => {
  return (
    <>
      <div className="container py-36">
        {crossSectionData.map((items, index) => (
          <div
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } gap-16 ${index > 0 ? "mt-28" : ""}`}
            key={index}
          >
            <div className="relative min-w-[522px] h-[522px]">
              <NextImage
                src={items.image}
                alt={items.title}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="primary_title">{items.title}</h2>
              <p className="mt-6 text-2xl font-normal">{items.decription}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CrossSection;
