import ButtonUI from "@/components/common/ButtonUI";
import InputUI from "@/components/common/InputUI";
import Image from "next/image";
import React from "react";

const HomeLocations = () => {
  return (
    <>
      <div className="container py-16">
        <div className="flex gap-2">
          <InputUI placeholder="Search Locations..." size="sm" />
          <ButtonUI isIconOnly variant="flat" size="lg">
            <Image src="/images/sendIcon.svg" height={24} width={24} />
          </ButtonUI>
        </div>
        <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(9)].map((_, index) => (
            <div className="p-6 rounded-lg shadow-lg" key={index}>
              <h3 className="text-xl font-bold">Brickell</h3>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Image src="/images/phoneIcon.svg" height={24} width={24} />
                  <span>(305) 381-0211</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/images/messageIcon.svg" height={24} width={24} />
                  <span>Info@TalkinTacos.net</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/locationIcon.svg"
                    height={24}
                    width={24}
                  />
                  <span>97 SW 8th St Miami, FL 33130</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image src="/images/timeIcon.svg" height={24} width={24} />
                    <span>Closed</span>
                  </div>
                  <ButtonUI size="sm" variant="light">
                    See Hours
                  </ButtonUI>
                </div>
              </div>
              <div className="mt-10 space-y-4">
                <ButtonUI fullWidth size="lg">
                  Order Now
                </ButtonUI>
                <ButtonUI fullWidth variant="bordered" size="lg">
                  Make this your location
                </ButtonUI>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeLocations;
