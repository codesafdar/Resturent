"use client"
import React, { useState } from "react";
import ModalUI from "@/components/common/ModalUI";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";
import NextImage from "@/components/common/NextImage";
import { X } from "lucide-react";
import { Verify } from "@/redux/slices/user";
import { toast } from 'react-toastify';

import { dispatch, useSelector } from "@/redux/store";
import CreateAccountModal from "./CreateAccountModal";
const VerifyPhoneModal = ({ openRR, setopenRR, mobile, onOpenChange }) => {
  const loading = useSelector((state) => state.user.isLoading);

  const [opncreate, setOpncreate] = useState(false);
  const [tokens, setTokens] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
  });
  const concatenatedValue = `${tokens.input1}${tokens.input2}${tokens.input3}${tokens.input4}`;
  const data ={
    phone:mobile,
    token: concatenatedValue
  }
  console.log("🚀 ~ VerifyPhoneModal ~ data:", data)
  console.log("🚀 ~ VerifyPhoneModal ~ tokens:", tokens)
  const handleclose = () => {
    setopenRR(false);
  }
  const handleTokenChange = (inputKey, event) => {
    const newValue = event.target.value;
    setTokens(prevTokens => ({
      ...prevTokens,
      [inputKey]: newValue,
    }));
  };
  const handleVerify = async () => {
    debugger;
    try {
      const response = await dispatch(Verify(data));
      console.log("🚀 ~ handleSignup ~ response:ppppppphhhhhhvvvvvvvvvvvvvvvvvvvvvvvvvv", response)
     
      setOpncreate(true);
      toast.success('Mobile No Is Verified!', { position: 'top-center' });
      
      // setopenR(false);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  return (
    <>
      <ModalUI
        isOpen={openRR}
        onOpenChange={onOpenChange}
        isDismissable={false}
        backdrop="blur"
        hideCloseButton={true}
      >
        <div className="pt-10 pb-20">
        <ButtonUI
            isIconOnly
            color="default"
            className="absolute rounded-none top-1 right-5"
            onClick={handleclose}
          >
            <X />
          </ButtonUI>
          <div className="pb-4 border-b border-gray-500">
            <h3 className="text-xl font-semibold">Verify Phone</h3>
          </div>
          <div className="flex flex-col items-center mt-10 space-y-10 text-center">
            <div className="relative w-16 h-20">
              <NextImage src="/images/verifyPhoneIcon.svg" />
            </div>
            <div>
              <h6>Please enter the 4 digit code send to</h6>
              <h6>{mobile}</h6>
            </div>
            <div class="flex gap-4 max-w-lg mx-auto justify-center font-[sans-serif]">
              <input onChange={(e) => handleTokenChange('input1', e)} type="text" placeholder="0" class="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-primary focus:border-[#007bff] outline-none rounded" />
              <input onChange={(e) => handleTokenChange('input2', e)} type="text" placeholder="0" class="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-primary focus:border-[#007bff] outline-none rounded" />
              <input onChange={(e) => handleTokenChange('input3', e)} type="text" placeholder="0" class="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-primary focus:border-[#007bff] outline-none rounded" />
              <input onChange={(e) => handleTokenChange('input4', e)} type="text" placeholder="0" class="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-primary focus:border-[#007bff] outline-none rounded" />
            </div>
            {/* <InputUI
              name="mobile"
              label="Mobile Number"
              placeholder="+1(111) 111-1111"
              placement="outside"
            /> */}
            <div>
              <h6>I didn’t receive the code</h6>
              <ButtonUI variant="light" size="sm">
                RESEND CODE
              </ButtonUI>
            </div>
            <ButtonUI isLoading={loading} onClick={handleVerify} variant="bordered" size="lg" className="w-full">
              Verify
            </ButtonUI>
          </div>
        </div>
      </ModalUI>
      <CreateAccountModal opncreate={opncreate} setOpncreate={setOpncreate}/>
    </>
  );
};

export default VerifyPhoneModal;
