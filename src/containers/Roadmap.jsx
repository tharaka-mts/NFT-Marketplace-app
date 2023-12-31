import React from "react";
import { BackgroundBubble, RoadMapCard } from "../components";
import { roadMapData1, roadMapData2 } from "../assets/dummy";

const Roadmap = () => {
  return (
    <div className="mt-24 lg:px-8 xs:px-6 px-4">
      <div className="text-center">
        <h1 className="font-clash font-semibold text-[32px]"> Road map 2023</h1>
        <p className="font-inter">
          The largest and unique Super rare NFT marketplace <br />
          For crypto-collectibles
        </p>
      </div>
      <div className="lg:flex flex-wrap justify-center relative">
        <BackgroundBubble className="bottom-1/4 -right-12 blur-[160px]" />
        <div className="lg:basis-1/2 basis-0 relative mt-12 z-40">
          {roadMapData1.map((item, index) => (
            <div key={index} className="flex items-center lg:justify-between justify-center">
              <RoadMapCard
                className="my-12 outline outline-offset-4 outline-sky-400 rounded-xl"
                month={item.month}
                title={item.title}
                desc={item.description}
              />
              <div className="border-t-2 border-dotted border-lightBlue h-1 w-full lg:block hidden" />
              <div className="absolute lg:block hidden right-[-0.9em] h-[30px] w-[30px] rounded-full bg-lightBlue" />
            </div>
          ))}
        </div>
        <div className="lg:basis-1/2 basis-0 relative lg:mt-36 z-40">
          {roadMapData2.map((item, index) => (
            <div key={index} className="flex items-center lg:justify-end justify-center">
              <div className="absolute lg:block hidden left-[-0.9em] h-[30px] w-[30px] rounded-full bg-lightBlue" />
              <div className="border-t-2 border-dotted border-lightBlue h-1 w-full lg:block hidden" />
              <RoadMapCard
                className="my-12 outline outline-offset-4 outline-sky-400 rounded-xl"
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
