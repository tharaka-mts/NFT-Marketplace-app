import { arrow, beatLine, rectangleHero, vectorLine } from "../assets";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="flex flex-wrap mt-24">
      <div className="flex-1">
        <h3 className="text-[80px] font-clash font-[600] leading-[5rem]">
          Super NFT
          <br />
          <span className="font-[400]">Marketplace</span>
        </h3>
        <img src={beatLine} alt="beatLine" className="my-6" />
        <p>
          The largest and unique Super rare NFT marketplace <br /> For
          crypto-collectibles
        </p>
        <div className="flex items-center my-6">
          <Button
            className="w-44 font-medium text-lg"
            title="Connect Wallet"
            type="solid"
          />
          <p className="ml-10 text-lightBlue">Create NFTs </p>
          <img src={arrow} alt="arrow" className="ml-4" />
        </div>
        <h3 className="text-xl font-medium">Last 7 days popular search</h3>
        <div className="flex gap-2 mt-5 text-xs">
          <p className="rounded-full bg-lightBlue px-3 py-1">All</p>
          <p className="rounded-full border border-dimWhite px-3 py-1">Music</p>
          <p className="rounded-full border border-dimWhite px-3 py-1">
            3D Abstract
          </p>
          <p className="rounded-full border border-dimWhite px-3 py-1">Games</p>
        </div>
        <div className="flex gap-2 mt-3 text-xs">
          <p className="rounded-full border border-dimWhite px-3 py-1">
            Sports
          </p>
          <p className="rounded-full border border-dimWhite px-3 py-1">
            Cartoon
          </p>
          <p className="rounded-full border border-dimWhite px-3 py-1">
            Virtual World
          </p>
          <p className="rounded-full border border-dimWhite px-3 py-1">
            Classic
          </p>
        </div>
      </div>
      <div className="flex-1">
        <img src={rectangleHero} alt="card" />
      </div>
    </div>
  );
};

export default Hero;
