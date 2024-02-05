import React from "react";
import { FaPlus } from "react-icons/fa6";
import Token from "./Token";
import Dashboard from "./Dashboard";
const NewReleases = () => {
  const releases = [{
    title: "The Sound of Silence",
    imageUrl: "../../public/releaseCover.png",
    shares: "317",
    offered: "75%",
    raised: "$9510"
  }];
  return (
    <div className="h-[846px] w-full bg-white px-[80px] border border-zinc-300">
      <Dashboard/>
      <div className="mt-36 grid grid-cols-4 space-x-1">
        <div className="relative h-[312px] w-[283.64px] rounded-3xl bg-gray-200 cursor-pointer">
          <div className="text-neutral-450 opacity-55 text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><FaPlus/></div>
          <p className="absolute px-[38px] bottom-8 text-sm font-Inter font-light text-neutral-400 text-center">You haven’t uploaded any videos with aBit yet. Add now!</p>
        </div>
        {releases.map((release)=><Token title={release.title} imageUrl={release.imageUrl} offered={release.offered} raised={release.raised} />)}
      </div>
    </div>
  );
};

export default NewReleases;