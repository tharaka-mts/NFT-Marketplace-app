import { Button } from "../components";

const LiveAuction = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-clash font-normal text-[32px]"> Live Auction</h1>
        <p className="font-inter">
          The largest and unique Super rare NFT marketplace <br />
          For crypto-collectibles
        </p>
      </div>
      <div>
        <div className="bg-rectangle bg-no-repeat p-3 bg-cover w-[384px] h-[460px]">
          <div className="flex justify-between">
            <div>
              <h3>Current bid</h3>
              <p>3.2 ETH</p>
            </div>
            <div>
              <Button className="font-inter" title="Place bid" type="solid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
