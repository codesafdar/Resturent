"use client"
import React, { useState } from "react";
import ModalUI from "@/components/common/ModalUI";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";
import { useDisclosure } from "@nextui-org/react";
import { dispatch, useSelector } from "@/redux/store";
import { checkUp } from "@/redux/slices/user";
import VerifyPhoneModal from "./VerifyPhoneModal";

const RegisterModal = ({ openR, setopenR }) => {
  const loading = useSelector((state) => state.user.isLoading);
  const [openRR, setopenRR] = useState(false)
  const [mobile, setMobile] = useState("");
  const [restaurantId, setRestaurantId] = useState(8);
  const { isOpen, onClose, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });
  const data = {
    phone:mobile,
    restaurant_id:restaurantId,
  }
  const handleSignup = async () => {
    debugger;
    try {
      const response = await dispatch(checkUp(data));
      console.log("🚀 ~ handleSignup ~ response:ppppppppppppppppppppppphhhhhhhhhhhhh", response)
     
        setopenRR(true)
      
      // setopenR(false);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <>
      <ModalUI
        isOpen={openR}
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
              onChange={setMobile}
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
            Don’t have an account yet?{" "}
            <span className="text-primary">Log In</span>
          </h6>
        </div>
      </ModalUI>
      <VerifyPhoneModal openRR={openRR}  />
    </>
  );
};

export default RegisterModal;
