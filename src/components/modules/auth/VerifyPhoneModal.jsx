import React from "react";
import ModalUI from "@/components/common/ModalUI";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";
import NextImage from "@/components/common/NextImage";

const VerifyPhoneModal = ({ isOpen, onOpenChange }) => {
  return (
    <>
      <ModalUI
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        backdrop="blur"
      >
        <div className="pt-10 pb-20">
          <div className="pb-4 border-b border-gray-500">
            <h3 className="text-xl font-semibold">Verify Phone</h3>
          </div>
          <div className="flex flex-col items-center mt-10 space-y-10 text-center">
            <div className="relative w-16 h-20">
              <NextImage src="/images/verifyPhoneIcon.svg" />
            </div>
            <div>
              <h6>Please enter the 4 digit code send to</h6>
              <h6>(342) 342-2342</h6>
            </div>
            <InputUI
              name="mobile"
              label="Mobile Number"
              placeholder="+1(111) 111-1111"
              placement="outside"
            />
            <div>
              <h6>I didn’t receive the code</h6>
              <ButtonUI variant="light" size="sm">
                RESEND CODE
              </ButtonUI>
            </div>
            <ButtonUI variant="bordered" size="lg" className="w-full">
              Verify
            </ButtonUI>
          </div>
        </div>
      </ModalUI>
    </>
  );
};

export default VerifyPhoneModal;
