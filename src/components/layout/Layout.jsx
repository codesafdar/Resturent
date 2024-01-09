
'use client'
import { useEffect } from "react";
import { useSelector } from "@/redux/store";
import { useDisclosure } from "@nextui-org/react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LoginModal from "../modules/auth/LoginModal";

const Layout = ({ children }) => {
  const user = useSelector(state => state.user)

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure({
    defaultOpen: true,
  });

  if (user?.token === '') {
  console.log('user-----222', user);
  return (
    <div className="h-screen bg-slate-600 flex justify-center items-center cursor-pointer"> 
      <div onClick={onOpenChange}>please login first</div>
      <LoginModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-100px)]">{children}</div>
      <Footer />

    </>
  );
};

export default Layout;
