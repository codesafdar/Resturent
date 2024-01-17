import React, { useState } from "react";
import ModalUI from "@/components/common/ModalUI";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";
import { signIn } from "@/redux/slices/user";
import { dispatch, useSelector } from "@/redux/store";
import RegisterModal from "./RegisterModal";

const LoginModal = ({ isOpen, onOpenChange, onClose, openN }) => {

  const loading = useSelector(state => state.user.isLoading)
  
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [openR, setopenR] = useState(false)

  const loginUser = async () => {
    console.log('loading---', loading);
    try {
      const getError = await dispatch(signIn({email_or_phone: mobile, password: password, restaurant_id: 249}));
      console.log('getError---', getError);
      onOpenChange();
      // reset();
      // if (getError) setError('afterSubmit', { message: getError })
    } catch (error) {
      console.log('login fail c =====',error);
      // if (isMountedRef.current) {
      //   setError('afterSubmit', error);
      // }
    }
  }
 const openRegisterModel = () =>{
  setopenR(true);
 }
  return (
    <>
      <ModalUI
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        backdrop="blur"
        onClose={onClose}
      >
        <div className="pt-10 pb-20">
          <div className="pb-4 border-b border-gray-500">
            <h3 className="text-xl font-semibold">Join Nopal Das Rewards</h3>
          </div>
          <form className="mt-20 space-y-10">
            <InputUI
              onChange={setMobile}
              name="mobile"
              label="Mobile Number"
              placeholder="+1(111) 111-1111"
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
            <span onClick={openRegisterModel} className="text-primary">Sign up</span>
          </h6>
        </div>
      </ModalUI>

      <RegisterModal openR={openR} setopenR={setopenR}/>
    </>
  );
};

export default LoginModal;