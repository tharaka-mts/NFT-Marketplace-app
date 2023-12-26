import React from "react";
import { creatorData } from "../assets/dummy";
import { Button } from "../components";

const Creators = () => {
  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="font-clash font-semibold text-[32px]"> Our Creator</h1>
        <p className="font-inter">
          The largest and unique Super rare NFT marketplace <br />
          For crypto-collectibles
        </p>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-5">
        {creatorData.map((data, index) => (
          <div
            key={index}
            className="h-[96px] w-[384px] bg-gradient-to-br from-sky-400/10 to-purple-400/10 rounded-lg border-2 border-sky-500/30 p-5"
          >
            <div className="flex items-center font-clash">
              <img
                src={data.avatar}
                alt="user"
                className="rounded-full w-[64px] h-[64px]"
              />
              <div className="ml-5">
                <p className="text-xl font-normal">{data.name}</p>
                <p className="text-slate-300 text-sm font-semibold">
                  {data.coin}
                </p>
              </div>
              <p className="flex flex-1 justify-end underline text-lightBlue">
                {" "}
                Follow{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button title="Explore more" type="outline" className="mt-5" />
      </div>
    </div>
  );
};

export default Creators;
