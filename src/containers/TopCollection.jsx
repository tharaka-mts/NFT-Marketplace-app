import { data } from "autoprefixer";
import { topCollectionData } from "../assets/dummy";

const TopCollection = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="font-clash font-semibold text-[32px]"> Live Auction</h1>
        <p className="font-inter">
          The largest and unique Super rare NFT marketplace <br />
          For crypto-collectibles
        </p>
      </div>
      <div className="flex flex-wrap mt-24 justify-center gap-4">
        {topCollectionData.map((data, index) => (
          <div
            key={index}
            className="h-[442px] w-[384px] bg-gradient-to-br from-sky-400/10 to-purple-400/10 rounded-lg border-2 border-sky-500/30 p-5 overflow-clip"
          >
            <div className="font-clash overflow-clip">
              <p className="text-sm text-slate-300">Created By</p>
              <div className="flex mt-2">
                <img
                  src={data.userImage}
                  alt="user"
                  className="rounded-full w-[24px] h-[24px]"
                />
                <p className="ml-2 text-base font-normal text-lightBlue">
                  {" "}
                  {data.name}
                </p>
              </div>
              <div className="flex my-2 rounded-md w-full h-[280px]">
                <img className="basis-1/2 py-1" src={data.image} alt="img" />
                <div className="flex-row py-1 basis-1/2 justify-between">
                  <div className="flex-1 pb-1 px-1 h-[50%] overflow-hidden rounded-lg">
                    <img src={data.image} alt="img" />
                  </div>
                  <div className="flex-1 p-1 h-[50%] overflow-hidden rounded-lg">
                    <img src={data.image} alt="img" />
                  </div>
                </div>
              </div>
              <p className="text-[24px] font-semibold">{data.category}</p>
              <p className="text-slate-400">
                Created By{" "}
                <span className="text-lightBlue font-normal px-2">
                  {" "}
                  {data.name}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollection;
