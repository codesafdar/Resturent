import React, { Fragment } from "react";
import Link from "next/link";
import NextImage from "../common/NextImage";
import ButtonUI from "../common/ButtonUI";
import Image from "next/image";
import InputUI from "../common/InputUI";
import { footerData } from "@/config/data";

const Footer = () => {
  return (
    <>
      <div className="container pt-24">
        <div className="border-b border-gray-600 py-11">
          <Link href="/">
            <div className="relative w-12 h-16">
              <NextImage src="/images/logo.svg" />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-12 pt-8 border-b border-gray-600 pb-52">
          <div className="order-last col-span-full md:col-span-4 md:order-first">
            <h3 className="text-lg font-bold">Social</h3>
            <div className="mt-5">
              <ButtonUI isIconOnly variant="light" size="sm">
                <Image src="/images/fbIcon.svg" height={24} width={24} />
              </ButtonUI>
              <ButtonUI isIconOnly variant="light" size="sm">
                <Image src="/images/instaIcon.svg" height={24} width={24} />
              </ButtonUI>
            </div>
            <div className="mt-3 space-y-3">
              <h3 className="text-lg font-bold">Newsletter</h3>
              <p className="font-medium">
                Subscribe to our news letter to get latest updates
              </p>
              <InputUI
                placeholder="Search Locations..."
                size="sm"
                endContent={
                  <ButtonUI size="sm" className="px-5">
                    Subscribe
                  </ButtonUI>
                }
              />
            </div>
          </div>
          <div className="flex flex-col justify-end col-span-8 gap-5 md:gap-20 md:flex-row lg:gap-40">
            <div>
              <h6 className="text-lg font-bold">My Account</h6>
              <ul className="mt-5 space-y-2">
                {footerData.slice(0, 6).map((items) => {
                  return (
                    <li
                      className="font-semibold hover:underline"
                      key={items.label}
                    >
                      <Link href={items.link}>{items.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h6 className="text-lg font-bold">Quick Links</h6>
              <ul className="mt-5 space-y-2">
                {footerData.slice(6).map((items) => {
                  return (
                    <li
                      className="font-semibold hover:underline"
                      key={items.label}
                    >
                      <Link href={items.link}>{items.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-8">
          <ul className="flex gap-6">
            <li className="hover:underline">
              <Link href="/">Terms of Use</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Accessibility Statement</Link>
            </li>
          </ul>
          <ButtonUI variant="light" size="sm">
            Made with Owner.com
          </ButtonUI>
        </div>
      </div>
    </>
  );
};

export default Footer;
