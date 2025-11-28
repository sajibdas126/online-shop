import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { PiWhatsappLogo } from "react-icons/pi";

export const TopHeader = () => {
  return (
    <div className="bg-[#F8F8FB] py-2">
      <div className="container mx-auto px-4 md:px-24 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">

        {/* Left Contacts */}
        <div className="flex items-center gap-6 md:gap-12 text-gray-400 text-[12px] flex-wrap justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <FaPhoneVolume className="text-[14px]" />
            <p>+88017-10232634</p>
          </div>

          <div className="flex items-center gap-2">
            <PiWhatsappLogo className="text-[14px]" />
            <p>01710232634</p>
          </div>
        </div>

        {/* Center Text */}
        <div className="text-[11px] md:text-[12px] text-gray-400 text-center hidden sm:block">
          World's Fastest Online Shopping Destination
        </div>

        {/* Right Menu */}
        <div className="flex items-center text-gray-400 text-[11px] md:text-[12px] gap-3 sm:gap-4">
          <p className="cursor-pointer">Help</p>
          <p className="cursor-pointer">Track Order</p>
          <p className="hidden sm:block cursor-pointer">English</p>
          <p className="hidden sm:block cursor-pointer">Contact Us</p>
        </div>
      </div>
    </div>
  );
};
