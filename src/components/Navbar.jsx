import styles from "../styles";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

import { logo, search, upload } from "../assets";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [navmenu, setNavmenu] = useState(true);

  const handleNavmenu = () => {
    setNavmenu(!navmenu);
  };

  return (
    <div className="flex items-center mt-6 text-white md:justify-start justify-between lg:px-8 xs:px-6 px-4">
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
            <li className="hover:cursor-pointer hover:text-lightBlue transition-colors duration-[400ms] ease-in-out">
              Discover
            </li>
            <li className="hover:cursor-pointer">
              <span className="hover:text-lightBlue transition-colors duration-[400ms] ease-in-out">
                Marketplace{" "}
              </span>
              <span className="bg-lightBlue p-1 rounded-sm font-light">
                PRO
              </span>
            </li>
            <li className="hover:cursor-pointer hover:text-lightBlue transition-colors duration-[400ms] ease-in-out">
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
        {navmenu ? (
          <CgMenuRight className="w-[36px] h-[36px]" onClick={handleNavmenu} />
        ) : (
          <RxCross2 className="w-[36px] h-[36px]" onClick={handleNavmenu} />
        )}
        {/* Mobile menu from */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          {/* Mobile Menu */}
          <div
            className={`${
              !navmenu ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute bg-gradient-to-tr from-sky-400/10 to-violet-500/20 backdrop-blur-md right-0 top-20 mx-4 my-2 min-w-[180px] rounded-md sidebar`}
          >
            <ul className="list-none flex flex-col flex-1 gap-3 justify-end items-start">
              <li className="hover:cursor-pointer hover:text-lightBlue transition-colors duration-[400ms] ease-in-out">
                Discover
              </li>
              <li className="hover:cursor-pointer">
                <span className="hover:text-lightBlue transition-colors duration-[400ms] ease-in-out">
                  Marketplace{" "}
                </span>
                <span className="bg-lightBlue p-1 rounded-sm font-light">
                  PRO
                </span>
              </li>
              <li className="hover:cursor-pointer hover:text-lightBlue transition-colors duration-[400ms] ease-in-out">
                How it Works
              </li>
              <li className="flex items-center">
                <Button
                  className="mr-3 font-medium text-sm px-2 py-1"
                  title="Connect Wallet"
                  type="outline"
                />
                <img
                  src={upload}
                  alt="upload"
                  className="w-8 h-8 hover:cursor-pointer hover:opacity-80"
                />
              </li>
              <li className="flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="mt-1 mr-2 block w-full px-1 py-1 bg-sky-400/10 border border-violet-300/30 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500/30 focus:ring-1 focus:ring-sky-500"
                />
                <img
                  src={search}
                  alt="search"
                  className=" mt-1 hover:cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
