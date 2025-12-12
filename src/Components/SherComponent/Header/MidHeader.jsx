import React from "react";
import logo from "../../../assets/images/x-icon.png";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { useNavigate } from "react-router";

export const MidHeader = () => {
  const navigate = useNavigate()
  return (
    <div className="py-2 bg-white">
      <div className="container mx-auto px-4 md:px-24 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img className="w-10 md:w-10" src={logo} alt="Logo" />
          
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto flex justify-center">
          <label className="input bg-white border w-full md:w-auto border-gray-200 flex items-center px-2 py-1 rounded-md">
            <svg
              className="h-[1.2em] opacity-50 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              className="outline-none w-full md:pr-50 text-sm"
              type="search"
              required
              placeholder="Search..."
            />
          </label>
        </div>

        {/* Account + Cart */}
        <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-center md:justify-end">

          {/* Account */}
          <div onClick={()=>navigate("/auth")} className="flex items-center gap-1 cursor-pointer">
            <CiUser className="text-3xl" />
            <div>
              <p className="text-xs text-gray-400">Account</p>
              <p className="text-sm text-gray-600">Login</p>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-1 cursor-pointer">
            <CiShoppingCart className="text-3xl" />
            <div>
              <p className="text-xs text-gray-400">Cart</p>
              <p className="text-sm text-gray-600">0 Items</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
