import { aboutUsCards, vectorRounds } from "../assets";
import { BackgroundBubble, Button } from "../components";

const About = () => {
  return (
    <div className="mt-24 relative">
      <img
        src={vectorRounds}
        alt="vactor-rounds"
        className="absolute left-[8em] top-[1em] scale-75"
      />
      <BackgroundBubble className="-bottom-16 -left-12 blur-[160px] opacity-75" />
      <BackgroundBubble className="-top-16 -right-12 blur-[160px] opacity-75" />
      <div className="relative flex flex-wrap items-center rounded-lg p-12 bg-gradient-to-tr from-blue-500/5 to-blue-700/10 backdrop-blur-sm z-40">
        <img
          src={aboutUsCards}
          alt="nft-cards"
          className="w-[497px] h-[325px] flex-1"
        />
        <div className="font-clash px-5 w-[600px]">
          <h1 className="font-medium text-[45px]">Why choose us?</h1>
          <br />
          <p className="leading-6 text-justify">
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
