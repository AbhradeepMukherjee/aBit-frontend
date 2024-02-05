import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-betwee md:pt-36 pt-20">
        <div className="text-black md:pr-2">
          <h1 className="md:text-3xl text-xl font-serif">Releases</h1>
          <p className="md:text-base text-sm font-serif text-stone-550 italic">
            Videos that you upload in collaboration with aBit appear here
          </p>
        </div>
        <div className="flex md:space-x-[146px]">
          <div className="md:w-[51px] h-[70px] font-Inter border border-transparent border-l-neutral-400 md:pl-4 pl-1 pr-1">
            <h1 className="text-base font-Inter text-neutral-600 font-extrabold">
              1
            </h1>
            <p className="text-sm text-stone-550">Shared Videos</p>
          </div>
          <div className="md:w-[51px] h-[70px] font-Inter border border-transparent border-l-neutral-400 md:pl-4 pl-1 pr-1">
            <h1 className="text-base font-Inter text-neutral-600 font-extrabold">
              $9510
            </h1>
            <p className="text-sm text-stone-550">Funds Raised</p>
          </div>
          <div className="md:w-[85px] h-[70px] font-Inter border border-transparent border-l-neutral-400 md:pl-4 pl-1 pr-1">
            <h1 className="text-base text-neutral-600 font-extrabold">317</h1>
            <p className="text-sm text-stone-550">Co-owner community</p>
          </div>
          <div className="md:w-[85px] h-[70px] font-Inter border border-transparent border-l-neutral-400 md:pl-4 pl-1 spr-1">
            <h1 className="text-base text-neutral-600 font-extrabold">$3804</h1>
            <p className="text-sm text-stone-550">Co-owner Earnings</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
