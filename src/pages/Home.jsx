import styles from "../styles";

import { BackgroundBubble, Navbar } from "../components";

import {
  About,
  Creators,
  Footer,
  Hero,
  LiveAuction,
  Roadmap,
  TopCollection,
} from "../containers";

const Home = () => {
  return (
    <div
      className={`bg-primary w-full flex justify-center font-inter font-light overflow-hidden`}
    >
      <div className="lg:w-[1280px] md:w-[800px] w-[640px] z-20 absolute">
        <BackgroundBubble className="-top-[1em] -left-[2em] blur-[150px] " />
        <BackgroundBubble className="-top-[1em] right-[3em] blur-[200px] " />
        <BackgroundBubble className="top-[22em] right-[12em] blur-[120px] " />
      </div>
      <div className="w-[1280px] z-50">
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} md:block hidden`}>
            <Navbar />
          </div>
        </div>

        <div className="text-white">
          <Hero />
          <About />
        </div>

        <div className="text-white">
          <LiveAuction />
          <Roadmap />
          <TopCollection />
          <Creators />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
