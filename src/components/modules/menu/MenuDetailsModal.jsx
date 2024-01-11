"use client"
import React, { useState } from "react";
import ModalUI from "@/components/common/ModalUI";
import NextImage from "@/components/common/NextImage";
import RecommendedMenuCard from "./RecommendedMenuCard";
import ButtonUI from "@/components/common/ButtonUI";
import { X } from "lucide-react";
import CartButton from "@/components/common/CartButton";
import { dispatch, useSelector } from "@/redux/store";
import { fetchcartList } from "@/redux/slices/cart";
import { useDisclosure } from "@nextui-org/react";
import LoginModal from "../auth/LoginModal";

const MenuDetailsModal = ({ isopn, setisopn, obj }) => {
  const cartList = useSelector(state => state);
  // const [isopen, setisopen]=useState(false)
  console.log("🚀 ~ MenuDetailsModal ~ orderList:cccccccccccccccccccccccccccccccccccc1", cartList)
  console.log("🚀 ~ MenuDetailsModal ~ obj:", obj)
  const user = useSelector(state => state.user);

  const { isOpen, onOpen, onClose,  onOpenChange } = useDisclosure({
    defaultOpen: false,
  });

  const addcartitem = async (obj) => {
    if (user?.token === '') {
      setisopn(false);
      onOpen(); // Open the login modal
    } else {
      dispatch(fetchcartList(obj));
    }
  };

  const handleclose = () => {
    setisopn(false);
  };
  return (
    <>
      <ModalUI isOpen={isopn} size="full" hideCloseButton={true}>
        <div className="container relative h-screen pt-15 overflow-auto">
          <ButtonUI
            isIconOnly
            color="default"
            className="absolute rounded-none top-5 right-5"
            onClick={handleclose}
          >
            <X />
          </ButtonUI>

          <div className="relative h-72 md:flex md:items-center">
            <div className="relative h-60 w-60">
              <NextImage
                src="/images/homeSection1.png"
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-4">
              <h1 className="primary_title">{obj.name}</h1>
              <p className="mt-3 text-xl lg:text-3xl font-medium text-gray-300">
              {obj.description??'N/A'}
              </p>

              <h2 className="text-3xl font-bold lg:text-5xl text-primary mt={5}" style={{ marginTop: '10px' }}>
              {obj.price??'N/A'}
              </h2>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Recommended Sides</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-3 md:max-w-[80%]">
              <RecommendedMenuCard />
              <RecommendedMenuCard />
              <RecommendedMenuCard />
              <RecommendedMenuCard />
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Recommended Beverages</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-3 md:max-w-[80%]">
              <RecommendedMenuCard />
              <RecommendedMenuCard />
              <RecommendedMenuCard />
              <RecommendedMenuCard />
            </div>
          </div>

          <div className="sticky bottom-0 flex items-center justify-end gap-6 py-4 bg-[#171717] mt-14">
            <h2 className="text-xl font-medium md:text-3xl">
              Log in to pay with Points
            </h2>
            <div className="flex items-center justify-center h-12 border border-gray-600 rounded px-7">
              <CartButton />
            </div>
            <ButtonUI onClick={() => addcartitem(obj)} size="lg" className="px-10">
              Add to Cart
            </ButtonUI>
          </div>
        </div>
      </ModalUI>
   
        <LoginModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
     
    </>
  );
};

export default MenuDetailsModal;
