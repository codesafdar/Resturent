import React from "react";
import ModalUI from "@/components/common/ModalUI";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";
import { Checkbox } from "@nextui-org/react";

const CreateAccountModal = ({ isOpen, onOpenChange }) => {
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
            <h3 className="text-xl font-semibold">Create Account</h3>
          </div>
          <form className="mt-20 space-y-10">
            <InputUI
              name="fName"
              label="First Name"
              placeholder="Enter first name"
              placement="outside"
            />
            <InputUI
              name="lName"
              label="Last Name"
              placeholder="Enter last name"
              placement="outside"
            />
            <InputUI
              name="email"
              label="Email"
              placeholder="Enter email"
              placement="outside"
            />
            <InputUI
              name="referCode"
              label="Refer Code ( Optional )"
              placeholder="Enter refer code"
              placement="outside"
            />
            <InputUI
              name="password"
              label="Password"
              placeholder="Enter password"
              placement="outside"
              type="password"
            />
            <InputUI
              name="cPassword"
              label="Confirm Password"
              placeholder="Enter confirm password"
              placement="outside"
              type="password"
            />
            <Checkbox>
              By creating an account, you agree to our terms and conditions and
              privacy policy?
            </Checkbox>
            <ButtonUI variant="bordered" size="lg" className="w-full">
              Sign up
            </ButtonUI>
          </form>
          <h6 className="text-center text-[#828282] mt-5">
            Don’t have an account yet?&nbsp;
            <span className="text-primary">Sign up</span>
          </h6>
        </div>
      </ModalUI>
    </>
  );
};

export default CreateAccountModal;
