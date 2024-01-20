"use client"
import React, { useState } from "react";
import ModalUI from "@/components/common/ModalUI";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";
import { useDisclosure } from "@nextui-org/react";
import { dispatch, useSelector } from "@/redux/store";
import { checkUp } from "@/redux/slices/user";
import VerifyPhoneModal from "./VerifyPhoneModal";
import { X } from "lucide-react";
import { toast } from 'react-toastify';
const RegisterModal = ({ openR, setopenR }) => {
  const loading = useSelector((state) => state.user.isLoading);
  const [openRR, setopenRR] = useState(false)
  const [mobile, setMobile] = useState("");
  const [restaurantId, setRestaurantId] = useState(8);
  const [mobileError, setMobileError] = useState('');

  const { isOpen, onClose, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });
  const data = {
    phone:mobile,
    restaurant_id:restaurantId,
  }
  const validateMobileInput = (value) => {
    // const formattedValue = new AsYouType('US').input(value);
    setMobile(value);

    // Validate for allowed characters (digits, '+', '(', ')', '-')
    const isValid = /^[0-9()+\- ]*$/.test(value);
    setMobileError(isValid ? '' : 'Invalid characters in the mobile number');
  };
  const handleSignup = async () => {
    debugger;
    try {
      const response = await dispatch(checkUp(data));
      console.log("🚀 ~ handleSignup ~ response:ppppppppppppppppppppppphhhhhhhhhhhhh", response)
     
        setopenRR(true)
        toast.success('SignUp successful Please Verify Mobile No!', { position: 'top-center' });
      
      // setopenR(false);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  const handleclose = () => {
    setopenR(false);
  }
  return (
    <>
      <ModalUI
        isOpen={openR}
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
            <h3 className="text-xl font-semibold">Sign Up</h3>
          </div>
          <form className="mt-20 space-y-8">
            <InputUI
              onChange={(value) => { validateMobileInput(value); }}
              name="mobile"
              label="Mobile Number"
              placeholder="+1(111) 111-1111"
              placement="outside"
            />
            <ButtonUI isLoading={loading} onClick={handleSignup} variant="bordered" size="lg" className="w-full">
              Continue
            </ButtonUI>
          </form>
          <h6 className="text-center text-[#828282] mt-5">
            Already have an account yet?{" "}
            <span className="text-primary">Log In</span>
          </h6>
        </div>
      </ModalUI>
      <VerifyPhoneModal openRR={openRR} setopenRR={setopenRR} mobile={mobile}  />
    </>
  );
};

export default RegisterModal;
