import {
  FaLinkedin,
  FaRegCopyright,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { logo } from "../assets";
import { BackgroundBubble } from "../components";
import BackgroundStar from "../components/BackgroundStar";

const Footer = () => {
  return (
    <div className="relative mt-24">
      <BackgroundBubble className="blur-[180px] left-[-4rem] top-[-3rem]" />
      <BackgroundStar className="w-[50px] h-[50px] ss:right-[22rem] right-5 top-14" />
      <BackgroundStar className="w-[30px] h-[30px] right-[50%] top-1/2" />
      <BackgroundStar className="w-[20px] h-[20px] left-[20rem] bottom-20" />
      <BackgroundBubble className="blur-[120px] right-[1rem] bottom-[-2rem] opacity-75" />
      <div className="rounded-lg pt-16 pb-6 md:px-24 xs:px-10 px-5 bg-gradient-to-tr from-violet-400/10 to-sky-400/10 backdrop-blur-[6px] z-40 relative">
        <div className="flex flex-wrap font-clash justify-between">
          <div>
            <img src={logo} alt="logo" />
            <p className="mt-5 ss:w-[320px] w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              rerum voluptates quia iusto neque facilis dolorum.
            </p>
            <div className="flex mt-5 gap-3">
              <FaSquareFacebook className="w-[24px] h-[24px] fill-lightBlue" />
              <FaLinkedin className="w-[24px] h-[24px] fill-lightBlue" />
              <FaSquareXTwitter className="w-[24px] h-[24px] fill-lightBlue" />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <h1 className="font-medium text-lg">SiteMap</h1>
            <p>Home</p>
            <p>About</p>
            <p>NFT</p>
            <p>RoadMap</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <h1 className="font-medium text-lg">Company</h1>
            <p>Help & Support</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <h1 className="font-medium text-lg">Resource</h1>
            <p>Parter</p>
            <p>Blog</p>
            <p>News Letter</p>
          </div>
        </div>
        <p className="flex items-center gap-1 mt-6 font-clash text-sm">
          Copyright NFT{" "}
          <span>
            <FaRegCopyright className="fill-lightBlue" />
          </span>{" "}
          core 2022 All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
