import React from "react";

const Footer = () => {
  return (
    <div className="bg-white py-[85px] px-36">
      <div className="bg-white text-black flex items-center justify-between h-[121px] w-[1169px]">
        <div className=" space-y-2">
          <h1 className="font-Inter font-bold text-4xl text-neutral-800">aBit</h1>
          <h3 className="font-serif font-normal text-xl">Changing The Way In Which<br/> Creators And Fans Interact.</h3>
        </div>
        <div className="font-Inter text-sm h-[108px] self-center border border-transparent border-l-neutral-400 space-y-5 font-bold text-neutral-800">
          <h4 className="pl-5">Home</h4>
          <h4 className="pl-5">Are you a Creator?</h4>
          <h4 className="pl-5">Support</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
