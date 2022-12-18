import styles from './styles';

import { 
About,
Creators,
Footer,
Hero,
LiveAuction,
Navbar,
Roadmap,
TopCollection
 } from './components';

const App = () => (
    <div className='bg-primary w-full overflow-hidden font-inter'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className='text-white'>
        <Hero />
        <About />
      </div>
        <div className='text-white'>
          <LiveAuction />
          <Roadmap />
          <TopCollection />
          <Creators />
          <Footer />
        </div>
    </div>
);
export default App
