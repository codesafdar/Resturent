import React, { useState } from "react";
import ModalUI from "@/components/common/ModalUI";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";
import { signIn } from "@/redux/slices/user";
import { dispatch, useSelector } from "@/redux/store";

const LoginModal = ({ isOpen, onOpenChange }) => {

  const loading = useSelector(state => state.user.isLoading)
  
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async () => {
    console.log('loading---', loading);
    try {
      const getError = await dispatch(signIn({email_or_phone: mail, password: password, restaurant_id: 248}));
      console.log('getError---', getError);
      // reset();
      // if (getError) setError('afterSubmit', { message: getError })
    } catch (error) {
      console.log('login fail c =====',error);
      // if (isMountedRef.current) {
      //   setError('afterSubmit', error);
      // }
    }
  }
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
            <h3 className="text-xl font-semibold">Join Nopal Das Rewards</h3>
          </div>
          <form className="mt-20 space-y-10">
            <InputUI
              onChange={setMail}
              name="email"
              label="Email"
              placeholder="Enter email"
              placement="outside"
            />
            <InputUI
              onChange={setPassword}
              name="password"
              label="Password"
              placeholder="Enter password"
              placement="outside"
            />
            <ButtonUI onClick={loginUser} isLoading={loading} variant="bordered" size="lg" className="w-full">
              Continue
            </ButtonUI>
          </form>
          <h6 className="text-center text-[#828282] mt-5">
            Don’t have an account yet?{" "}
            <span className="text-primary">Sign up</span>
          </h6>
        </div>
      </ModalUI>
    </>
  );
};

export default LoginModal;
