import React, { useState } from "react";
import ModalUI from "@/components/common/ModalUI";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";
import { signIn } from "@/redux/slices/user";
import { dispatch, useSelector } from "@/redux/store";
import RegisterModal from "./RegisterModal";
import { parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js';
import { toast } from 'react-toastify';

const LoginModal = ({ isOpen, onOpenChange, onClose, openN }) => {
  const loading = useSelector(state => state.user.isLoading);

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [openR, setopenR] = useState(false);
  const [mobileError, setMobileError] = useState('');

  const validateMobileInput = (value) => {
    // const formattedValue = new AsYouType('US').input(value);
    setMobile(value);

    // Validate for allowed characters (digits, '+', '(', ')', '-')
    const isValid = /^[0-9()+\- ]*$/.test(value);
    setMobileError(isValid ? '' : 'Invalid characters in the mobile number');
  };

  const loginUser = async () => {
    // Validate the mobile number format
    // const phoneNumber = parsePhoneNumberFromString(mobile, 'US');
    // if (!phoneNumber || !phoneNumber.isValid()) {
    //   // Handle the error by setting an error message
    //   setMobileError('Invalid phone number. Please enter a valid phone number.');
    //   return;
    // }

    try {
      // Your existing code to dispatch the sign-in action
      const getError = await dispatch(signIn({ email_or_phone: mobile, password: password, restaurant_id: 249 }));
      console.log("🚀 ~ loginUser ~ getError:....................", getError)

      if (getError) {
        // If there is an error from the sign-in action, handle it here
        setMobileError(`Error signing in: ${getError}`);
        return;
      }
      toast.success('Login successful!', { position: 'top-center' });
      // If no errors, close the modal or perform other actions
      onOpenChange();
    } catch (error) {
      // Handle other unexpected errors
      console.error('login fail c =====', error);
      setMobileError('An unexpected error occurred. Please try again later.');
    }
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
              onChange={(value) => { validateMobileInput(value); }}
              name="mobile"
              label="Mobile Number"
              placeholder="+1(111) 111-1111"
              value={mobile}
              placement="outside"
            />
            {mobileError && <p className="text-red-500">{mobileError}</p>}
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
            <span onClick={() => setopenR(true)} className="text-primary">Sign up</span>
          </h6>
        </div>
      </ModalUI>

      <RegisterModal openR={openR} setopenR={setopenR} />
    </>
  );
};

export default LoginModal;
