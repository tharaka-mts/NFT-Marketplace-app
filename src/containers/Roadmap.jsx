import React from "react";
import { Card } from "../components";
import { roadMapData1, roadMapData2 } from "../assets/dummy";

const Roadmap = () => {
  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="font-clash font-semibold text-[32px]"> Road map 2023</h1>
        <p className="font-inter">
          The largest and unique Super rare NFT marketplace <br />
          For crypto-collectibles
        </p>
      </div>
      <div className="md:flex flex-row">
        <div className="basis-1/2 relative mt-12">
          {roadMapData1.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <Card
                className="my-12"
                month={item.month}
                title={item.title}
                desc={item.description}
              />
              <div className="absolute right-[-1em] h-[30px] w-[30px] rounded-full bg-sky-500" />
            </div>
          ))}
        </div>
        <div className="basis-1/2 relative mt-36">
          {roadMapData2.map((item, index) => (
            <div key={index} className="flex items-center justify-end">
              <div className="absolute left-[-1em] h-[30px] w-[30px] rounded-full bg-sky-500" />
              <Card
                className="my-12"
                month={item.month}
                title={item.title}
                desc={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
