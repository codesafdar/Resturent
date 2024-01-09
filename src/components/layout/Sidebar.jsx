import React from "react";
import { navList } from "@/config/data";
import Link from "next/link";
import ButtonUI from "../common/ButtonUI";
import { X } from "lucide-react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <div
        className={`min-h-screen w-full transition fixed top-0 right-0 z-50 bg-[#1A1A1A] p-10 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-5">
          <ButtonUI
            isIconOnly
            color="default"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X />
          </ButtonUI>
          {navList.map((items, index) => (
            <li key={index} className="text-lg">
              <Link href={items.link}>{items.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
