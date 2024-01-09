import React from "react";
import ModalUI from "@/components/common/ModalUI";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";

const RegisterModal = ({ isOpen, onOpenChange }) => {
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
            <h3 className="text-xl font-semibold">Sign Up</h3>
          </div>
          <form className="mt-20 space-y-8">
            <InputUI
              name="mobile"
              label="Mobile Number"
              placeholder="+1(111) 111-1111"
              placement="outside"
            />
            <ButtonUI variant="bordered" size="lg" className="w-full">
              Continue
            </ButtonUI>
          </form>
          <h6 className="text-center text-[#828282] mt-5">
            Don’t have an account yet?{" "}
            <span className="text-primary">Log In</span>
          </h6>
        </div>
      </ModalUI>
    </>
  );
};

export default RegisterModal;
