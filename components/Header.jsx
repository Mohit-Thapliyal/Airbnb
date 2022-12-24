import React, { useState } from "react";
import Image from "next/image";
import { IoSearchCircle } from "react-icons/io5";
import {
  HiGlobeAlt,
  HiMenu,
  HiUserCircle,
  HiUser,
  HiUsers,
} from "react-icons/hi";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({placeholder="start your search"}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
    setNoOfGuests(1);
    setStartDate(new Date())
    setEndDate(new Date())
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div onClick={()=>router.push('/')} className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          fill
          className="object-contain object-left"
          sizes={200}
        />
      </div>

      <div className="flex items-center rounded-full md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder:text-gray-400"
        />
        <IoSearchCircle className="hidden md:inline-flex text-red-400 text-3xl cursor-pointer mx-1" />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <HiGlobeAlt className="text-2xl cursor-pointer" />
        <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
          <HiMenu className="text-2xl" />
          <HiUserCircle className="text-2xl" />
        </div>
      </div>
      {searchInput && (
        <div className="col-span-3 flex flex-col mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <HiUsers className="text-2xl" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              min={1}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={search} className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
