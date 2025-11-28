import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-y py-2 border-gray-200">
      <div className="flex justify-between items-center container mx-auto px-4 lg:px-24">

        {/* Category Button */}
        <div className="hidden lg:flex items-center gap-2 bcp text-white py-2 px-6 rounded-md border-none cursor-pointer">
          <BiCategory />
          <p>All Category</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-gray-700"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <NavLink className={({isActive}) => isActive ? "cp" : ""} to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? "cp" : ""} to="/product">Product</NavLink>
          <NavLink className={({isActive}) => isActive ? "cp" : ""} to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive ? "cp" : ""} to="/blog">Blog</NavLink>
          <NavLink className={({isActive}) => isActive ? "cp" : ""} to="/contact">Contact</NavLink>
        </div>

        {/* Shop Now */}
        <div className="btn hidden lg:flex items-center gap-2 bcp text-white py-2 px-6 rounded-md cursor-pointer border-none">
          <LuShoppingCart />
          <p>Shop Now</p>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden flex flex-col justify-center items-center bg-white mt-3 shadow-md p-4 space-y-4 ">
          <NavLink onClick={() => setOpen(false)} className="block" to="/">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} className="block" to="/product">Product</NavLink>
          <NavLink onClick={() => setOpen(false)} className="block" to="/about">About</NavLink>
          <NavLink onClick={() => setOpen(false)} className="block" to="/blog">Blog</NavLink>
          <NavLink onClick={() => setOpen(false)} className="block" to="/contact">Contact</NavLink>

          <div className="flex items-center gap-3 bcp text-white py-2 px-6 rounded-md">
            <LuShoppingCart />
            <p>Shop Now</p>
          </div>
        </div>
      )}
    </div>
  );
};
