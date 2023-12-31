import { auctionData } from "../assets/dummy";
import { BackgroundBubble, Button } from "../components";

const LiveAuction = () => {
  return (
    <div className="mt-24 lg:px-8 xs:px-6 px-4">
      <div className="text-center">
        <h1 className="font-clash font-semibold text-[32px]"> Live Auction</h1>
        <p className="font-inter">
          The largest and unique Super rare NFT marketplace <br />
          For crypto-collectibles
        </p>
      </div>
      <div className="relative flex flex-wrap gap-5 justify-center">
        <BackgroundBubble className="-bottom-16 -left-12 blur-[160px]" />
        {auctionData.map((item, index) => (
          <div key={index} className="xs:mt-16 mt-5 font-inter z-50">
            <div className="bg-gradient-to-br from-indigo-300/20 to-purple-300/10 border-solid border-2 border-violet-400/30 rounded-xl backdrop-blur-md mxs:p-5 p-2 xs:w-[384px] xs:h-[460px] mxs:w-[300px] mxs:h-[380px] w-full h-full">
              <div className="flex justify-between">
                <div>
                  <h3>Current bid</h3>
                  <div className="flex items-center gap-1 text-lightBlue font-medium">
                    <p> {item.price}</p>
                  </div>
                </div>
                <div>
                  <Button
                    className="font-inter xs:text-lg text-xs"
                    title="Place bid"
                    type="solid"
                  />
                </div>
              </div>
              <div className="mt-3 xs:w-[345px] xs:h-[290px] mxs:w-[265px] mxs:h-[210px] xxs:w-[215px] xxs:h-[160px] w-[180px] h-[120px] rounded-md overflow-hidden">
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
