import styles from "../styles";
import { CgMenuRight } from "react-icons/cg";

import { logo, search, upload } from "../assets";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex items-center mt-6 text-white md:justify-start justify-between">
      <div className={`${styles.flexStart} items-center grow-0`}>
        <img
          src={logo}
          alt="logo"
          className="h-[48px] w-[191px] hover:cursor-pointer"
        />
      </div>
      <div className="grow md:flex hidden items-center justify-between">
        <div className="ml-24">
          <ul className="flex gap-10 pt-2 text-sm">
            <li className="hover:cursor-pointer hover:text-lightBlue">
              Discover
            </li>
            <li className="hover:cursor-pointer">
              <span className="hover:text-lightBlue">Marketplace </span>
              <span className="bg-lightBlue p-1 rounded-sm font-light">
                PRO
              </span>
            </li>
            <li className="hover:cursor-pointer hover:text-lightBlue">
              How it Works
            </li>
          </ul>
        </div>

        <div className="flex pt-2">
          <img
            src={search}
            alt="search"
            className="mr-6 hover:cursor-pointer"
          />
          <Button
            className="w-44 mr-5 font-medium text-lg"
            title="Connect Wallet"
            type="outline"
          />
          <img
            src={upload}
            alt="upload"
            className="hover:cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
      <div className="md:hidden">
        <CgMenuRight
          className="w-[36px] h-[36px]"
          onClick={() => console.log("done")}
        />
      </div>
    </div>
  );
};

export default Navbar;
