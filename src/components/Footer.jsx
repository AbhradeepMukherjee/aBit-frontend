import React from "react";

const Footer = () => {
  return (
    <div className="bg-white md:py-[85px] py-[30px] md:px-36 px-4">
      <div className="bg-white mt-20 md:mt-0 text-black flex items-center justify-between h-[121px] md:w-[1169px]">
        <div className="space-y-2">
          <h1 className="font-Inter font-bold md:text-4xl text-xl text-neutral-800 cursor-pointer">aBit</h1>
          <h3 className="font-serif font-normal md:text-xl text-lg">Changing The Way In Which<br/> Creators And Fans Interact.</h3>
        </div>
        <div className="font-Inter text-sm h-[108px] self-center mt-4 md:mt-0 border border-transparent border-l-neutral-400 space-y-5 font-bold text-neutral-800">
          <h4 className="pl-5 cursor-pointer">Home</h4>
          <h4 className="pl-5 cursor-pointer">Are you a Creator?</h4>
          <h4 className="pl-5 cursor-pointer">Support</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
