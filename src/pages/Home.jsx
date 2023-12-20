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
import { vectorLine } from "../assets";

const Home = () => {
  return (
    <div
      className={`bg-primary w-full flex justify-center font-inter font-light ${styles.paddingX} overflow-hidden`}
    >
      <div className="w-[1280px] z-20 absolute">
        <BackgroundBubble className="-top-4 left-10 blur-[150px]" />
        <BackgroundBubble className="-top-2 right-32 blur-[200px]" />
        <img
          src={vectorLine}
          alt="vector-line"
          className="absolute top-[16rem] -right-5"
        />
        <BackgroundBubble className="top-[22rem] right-40 blur-[120px]" />
      </div>
      <div className="w-[1280px] z-50">
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
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
