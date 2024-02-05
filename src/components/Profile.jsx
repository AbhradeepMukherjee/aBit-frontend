const Profile = ({ imageUrl, title, channel }) => {
  return (
    <div
      className="absolute w-[571px] h-[234px] rounded-3xl top-[436px] left-[83px] z-10 flex bg-cover border border-black drop-shadow-xl"
      style={{ backgroundImage: 'url("../../public/header.jpg")' }}
    >
      <img
        src={imageUrl}
        alt="profile photo"
        className="w-[234px] h-[234px] rounded-l-3xl border border-r-black"
      />
      <div className="bg-inherit inline-block  pl-7 pr-16 py-4">
        <div className="bg-inherit font-Inter flex space-x-6 items-center">
          <h1 className="font-bold text-black text-2xl">{title}</h1>
          <h2 className="font-normal text-stone-550 w-[89px]">{channel}</h2>
        </div>
        <div className="w-[259px] h-[70px] mt-5">
          <h2 className="font-Inter font-bold text-sm text-stone-550 leading-6">Bio</h2>
          <h4 className="font-Inter font-normal text-sm text-stone-550 leading-6">
            Simply a film fan creating original content for YouTube. Let’s Collaborate.
          </h4>
        </div>
        <div className="flex mt-5">
            <button className="w-[135px] h-[29px] -mr-2 bg-cover text-sm text-zinc-800 flex items-center justify-center font-serif font-normal border-black focus:border-black hover:border-black z-10" style={{backgroundImage: 'url("../../public/header.jpg")'}}>Creator</button>
            <div className="w-[135px] h-[29px] -ml-2 border bg-zinc-850 bg-opacity-65 rounded-lg border-black hover:border-black focus:border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
