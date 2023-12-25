import { auctionData } from "../assets/dummy";
import { Button } from "../components";

const LiveAuction = () => {
  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="font-clash font-semibold text-[32px]"> Live Auction</h1>
        <p className="font-inter">
          The largest and unique Super rare NFT marketplace <br />
          For crypto-collectibles
        </p>
      </div>
      <div className="flex flex-wrap gap-16">
        {auctionData.map((item, index) => (
          <div key={index} className="mt-16 font-inter">
            <div className="bg-gradient-to-br from-indigo-300/20 to-purple-300/10 border-solid border-2 border-violet-400/30 rounded-xl p-5 w-[384px] h-[460px]">
              <div className="flex justify-between">
                <div>
                  <h3>Current bid</h3>
                  <div className="flex items-center gap-1 text-lightBlue font-medium">
                    <p> {item.price}</p>
                  </div>
                </div>
                <div>
                  <Button
                    className="font-inter"
                    title="Place bid"
                    type="solid"
                  />
                </div>
              </div>
              <div className="mt-3 w-[345px] h-[290px] rounded-md overflow-hidden">
                <img src={item.image} alt="img" />
              </div>
              <div className="mt-4">
                <p>
                  {item.status} <br />
                </p>
                <div className="flex mt-2 items-center gap-3 text-sm text-slate-400">
                  <img
                    src={item.userImage}
                    alt="userimg"
                    width="24px"
                    className="rounded-full"
                  />
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveAuction;
