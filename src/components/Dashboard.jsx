import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between pt-36">
        <div className="text-black">
          <h1 className="text-3xl font-serif">Releases</h1>
          <p className="text-base font-serif text-stone-550 italic">
            Videos that you upload in collaboration with aBit appear here
          </p>
        </div>
        <div className="flex space-x-[146px]">
          <div className="w-[51px] h-[70px] font-Inter border border-transparent border-l-neutral-400 pl-4">
            <h1 className="text-base font-Inter text-neutral-600 font-extrabold">
              1
            </h1>
            <p className="text-sm text-stone-550">Shared Videos</p>
          </div>
          <div className="w-[51px] h-[70px] font-Inter border border-transparent border-l-neutral-400 pl-4">
            <h1 className="text-base font-Inter text-neutral-600 font-extrabold">
              $9510
            </h1>
            <p className="text-sm text-stone-550">Funds Raised</p>
          </div>
          <div className="w-[85px] h-[70px] font-Inter border border-transparent border-l-neutral-400 pl-4">
            <h1 className="text-base text-neutral-600 font-extrabold">317</h1>
            <p className="text-sm text-stone-550">Co-owner community</p>
          </div>
          <div className="w-[85px] h-[70px] font-Inter border border-transparent border-l-neutral-400 pl-4">
            <h1 className="text-base text-neutral-600 font-extrabold">$3804</h1>
            <p className="text-sm text-stone-550">Co-owner Earnings</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
