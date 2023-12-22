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
        <BackgroundBubble className="-top-4 left-10 blur-[150px] md:block hidden lg:scale-100 scale-75" />
        <BackgroundBubble className="-top-2 right-[5em] blur-[200px] md:block hidden lg:scale-100 scale-75" />
        <img
          src={vectorLine}
          alt="vector-line"
          className="absolute top-[16rem] -right-5 object-fill md:block hidden lg:scale-100 scale-75"
        />
        <BackgroundBubble className="top-[22rem] right-[12em] blur-[120px] md:block hidden lg:scale-100 scale-75" />
      </div>
      <div className="lg:w-[1280px] w-[800px] z-50">
        <div className={`${styles.flexCenter}`}>
          <div
            className={`${styles.boxWidth} md:block hidden lg:scale-100 scale-75`}
          >
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
