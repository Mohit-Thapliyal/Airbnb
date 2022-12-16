import React from "react";
import Image from "next/image";
import {IoSearchCircle} from "react-icons/io5"
import {HiGlobeAlt, HiMenu, HiUserCircle, HiUser, HiSearch} from "react-icons/hi"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          fill
          className="object-contain object-left"
          sizes={200}
        />
      </div>

      <div className="flex items-center rounded-full md:border-2 md:shadow-sm">
        <input type="text" placeholder="start your search" className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder:text-gray-400" />
        <IoSearchCircle className="hidden md:inline-flex text-red-400 text-3xl cursor-pointer mx-1"/>
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <HiGlobeAlt className="text-2xl cursor-pointer"/>
        <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
            <HiMenu className="text-2xl"/>
            <HiUserCircle className="text-2xl"/>
        </div>
      </div>

    </header>
  );
};

export default Header;
