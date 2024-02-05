import React, { useState } from "react";
import { IoNotificationsSharp, IoWallet } from "react-icons/io5";
import { MdOutlineExpandMore } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
const Header = ({ imageUrl }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="w-full h-[90px] md:pl-[123px] pl-[10px] md:pr-[60px] pr-[10px] flex justify-between items-center text-black bg-cover bg-center border border-b-black border-transparent opacity-95"
      style={{ backgroundImage: 'url("../../public/header.jpg")' }}
    >
      <div className="w-[46px] h-[29px] font-Inter text-2xl font-semibold text-neutral-800 cursor-pointer">
        aBit
      </div>
      <div className="flex space-x-4 items-center invisible md:visible">
        <div className="w-[139px] h-10 border flex items-center border-violet-700 rounded-[60px] px-[18px] gap-[10px] text-[12px] text-violet-700 font-Raleway cursor-pointer">
          Share new video
        </div>
        <div className="text-gray-500 placeholder-opacity-35 cursor-pointer">
          <IoWallet className="w-7 h-7" />
        </div>
        <div className="text-gray-500 placeholder-opacity-35 cursor-pointer">
          <IoNotificationsSharp className="w-7 h-7" />
        </div>
        <img
          className="rounded-full w-8 h-8 cursor-pointer border border-black"
          src={imageUrl}
        />
        <div className="cursor-pointer text-gray-500">
          <MdOutlineExpandMore className="w-7 h-8" />
        </div>
      </div>
      <div onClick={()=>setShow('true')} className="cursor-pointer text-gray-500 md:hidden">
        <IoMdMenu className="w-7 h-8" />
      </div>
    </div>
  );
};

export default Header;
