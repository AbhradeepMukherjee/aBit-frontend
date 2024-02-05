const Token = ({ title, shares, imageUrl, offered, raised }) => {
  return (
    <div
      className="relative h-[312px] w-[283.64px] rounded-3xl bg-cover bg-center pl-3 pt-4 cursor-pointer drop-shadow-xl"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
        <h1 className="text-lg font-Inter font-semibold text-white">{title}</h1>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[246.76px] h-[52.36px] flex rounded-xl justify-around text-center font-Inter text-white bg-white bg-opacity-20 p-2">
            <div className="">
                <div className="font-medium text-xs">Shares</div>
                <div className="font-bold text-sm">317</div>
            </div>
            <div className="">
                <div className="font-medium text-xs">Offered</div>
                <div className="font-bold text-sm">75%</div>
            </div>
            <div className="">
                <div className="font-medium text-xs">Raised</div>
                <div className="font-bold text-sm">$9510</div>
            </div>
        </div>
    </div>
  );
};

export default Token;
