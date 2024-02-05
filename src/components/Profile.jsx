import header from '../../public/header.jpg'
const Profile = ({ imageUrl, title, channel }) => {
  return (
    <div
      className="absolute md:w-[571px] md:h-[234px] w-fit h-fit rounded-3xl md:top-[436px] top-[460px] md:left-[83px] z-10 flex bg-cover border border-black drop-shadow-xl"
      style={{ backgroundImage: `url(${header})` }}
    >
      <img
        src={imageUrl}
        alt="profile photo"
        className="md:w-[234px] md:h-[234px] w-[130px] rounded-l-3xl border border-r-black"
      />
      <div className="bg-inherit inline-block md:pl-7 pl-3 pr-16 md:py-4 py-1">
        <div className="bg-inherit font-Inter md:flex inline-block space-x-6 items-center">
          <h1 className="font-bold text-black text-2xl">{title}</h1>
          <h2 className="font-normal text-stone-550 w-[89px]">{channel}</h2>
        </div>
        <div className="md:w-[259px] w-[230px] md:h-[70px] md:mt-5 mt-2">
          <h2 className="font-Inter font-bold text-sm text-stone-550 md:leading-6">Bio</h2>
          <h4 className="font-Inter font-normal text-sm  text-stone-550 md:leading-6">
            Simply a film fan creating original content for YouTube. Let’s Collaborate.
          </h4>
        </div>
        <div className="flex md:mt-5 mt-2">
            <button className="md:w-[135px] w-[70px] h-[29px] -mr-2 bg-cover text-sm text-zinc-800 flex items-center justify-center font-serif font-normal border-black focus:border-black hover:border-black z-10" style={{backgroundImage: `url(${header})`}}>Creator</button>
            <div className="md:w-[135px] w-[70px] h-[29px] -ml-2 border bg-zinc-850 bg-opacity-65 rounded-lg border-black hover:border-black focus:border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
