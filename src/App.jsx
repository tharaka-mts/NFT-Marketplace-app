import styles from "./styles";

import { BackgroundBubble, Navbar } from "./components";

import { About, Creators, Footer, Hero, LiveAuction, Roadmap, TopCollection } from "./containers";

const App = () => (
  <div
    className={`bg-primary w-full flex justify-center font-inter font-light ${styles.paddingX}`}
  >
    <BackgroundBubble className="-top-4 left-10 blur-[150px]" />
    <BackgroundBubble className="-top-2 right-32 blur-[200px]" />
    <div className="w-[1280px] z-50">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="text-white z-50">
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
export default App;
