import { aboutUsCards, vectorRounds } from "../assets";
import { Button } from "../components";

const About = () => {
  return (
    <div className="mt-24 relative">
      <img
        src={vectorRounds}
        alt="vactor-rounds"
        className="absolute left-[8em] top-[3em]"
      />
      <div className="flex items-center rounded-lg p-12 bg-gradient-to-tr from-blue-500/5 to-blue-700/10 backdrop-blur-sm z-10">
        <img src={aboutUsCards} alt="nft-cards" />
        <div className="font-clash px-5">
          <h1 className="font-medium text-[45px]">Why choose us?</h1>
          <br />
          <p className="leading-6 text-justify mr-6">
            Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
            semper. Eros suspendisse varius enim ultrices isque et quis ctumst.
            Feugiat amet velit faucibus amet <br /> <br />
            Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa
            amet lacinia aliquamid ultrices vitae.
          </p>
          <Button
            className="mt-10 font-inter font-medium"
            title="Connect Wallet"
            type="solid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
