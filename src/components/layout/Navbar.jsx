"use client";

import React, { useState } from "react";
import Link from "next/link";
import NextImage from "../common/NextImage";
import {
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  useDisclosure,
} from "@nextui-org/react";
import { navList } from "@/config/data";
// import LoginModal from "../modules/auth/LoginModal";
import RegisterModal from "../modules/auth/RegisterModal";
import VerifyPhoneModal from "../modules/auth/VerifyPhoneModal";
import CreateAccountModal from "../modules/auth/CreateAccountModal";
import ButtonUI from "../common/ButtonUI";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { dispatch, useSelector } from "@/redux/store";
import { signOut } from "@/redux/slices/user";

const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cartitem = useSelector(state => state.cart?.cartitem);
  const user = useSelector(state => state.user);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure({
    defaultOpen: false,
  });

  const handleLogout = async () => {
    try {
      await dispatch(signOut())
      // navigate(PATH_AUTH.login, { replace: true });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#0D0D0D]">
        <div className="container flex items-center justify-between h-20 transition-all">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link href="/">
              <div className="relative w-12 h-16">
                <NextImage src="/images/logo.svg" />
              </div>
            </Link>
            <div className="hidden md:block">
              <ul className="flex items-center gap-4 lg:gap-8 list_items">
                {navList.map((items, index) => (
                  <li key={index} className="text-sm">
                    <Link href={items.link}>{items.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light">Open Menu</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <div
      className="cursor-pointer bg-primary border border-gray-500 p-2 rounded"
    >
      <Link href="/cart" passHref>
        <p className="flex items-center">
          <div className="relative w-6 h-6">
            {/* Adjust this part based on your actual content */}
            <img src="/images/cartIcon.svg" alt="Cart Icon" className="w-full h-full" />
          </div>
          <p className="ml-2">Cart</p>
          <p className="ml-2">{cartitem?.length !== undefined ? cartitem.length : '0'}</p>
        </p>
      </Link>
    </div>
              {/* <div onClick={onOpenChange} className="font-semibold">login</div> */}

              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="gap-2 h-14">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">
                    <Link href="/profile">My Settings</Link>
                  </DropdownItem>
                  <DropdownItem onClick={handleLogout} key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="block md:hidden">
            <ButtonUI
              isIconOnly
              variant="light"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu />
            </ButtonUI>
          </div>
        </div>
      </nav>
      {
        user.token === ''?
        <div className="h-10 text-center bg-primary center">
        <h2 className="font-normal">
          Join Talkin Tacos Rewards, win $500! Be entered in a drawing to win on
          1/1
        </h2>
      </div>:''
      }
      
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {/* <LoginModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      /> */}
      {/* <RegisterModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      /> */}
      {/* <VerifyPhoneModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      /> */}
      {/* <CreateAccountModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      /> */}
    </>
  );
};

export default Navbar;
