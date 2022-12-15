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
    <div className='bg-[#080B2A] px-10'>
      <Navbar />
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
