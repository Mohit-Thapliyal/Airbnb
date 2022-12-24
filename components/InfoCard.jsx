import React from "react";
import Image from "next/image";
import { HiOutlineHeart, HiStar } from "react-icons/hi";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  index
}) => {
  return (
    <div className={`flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 duration-200 ease-out ${index===0 && "border-t"}`}>
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt={title}
          sizes="(max-width: 500px) 100px"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HiOutlineHeart className="text-2xl cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center"><HiStar className="text-lg text-red-400" />
          {star}</p>
          <div className="">
            <p className="text-lg font-semebold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
