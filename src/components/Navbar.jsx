import React from "react";
import styles from "../styles";

import { logo, search, upload } from "../assets";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-6">
      <div className={`${styles.flexStart} items-center`}>
        <img src={logo} alt="logo" className="h-[48px] w-[191px]" />

        <ul className="flex justify-around pt-2 text-sm">
          <li className="ml-[5rem] mr-[4rem]">Discover</li>
          <li className="mr-[4rem]">
            Marketplace{" "}
            <span className="bg-lightBlue p-1 rounded-sm font-light">PRO</span>
          </li>
          <li className="">How it Works</li>
        </ul>
      </div>

      <div className="flex pt-2">
        <img src={search} alt="search" className="mr-6" />
        <Button
          className="w-44 mr-5 font-medium text-lg"
          title="Connect Wallet"
          type="outline"
        />
        <img src={upload} alt="upload" />
      </div>
    </div>
  );
};

export default Navbar;
