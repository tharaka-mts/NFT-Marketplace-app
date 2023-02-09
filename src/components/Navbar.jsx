import React from "react";
import styles from "../styles";

import { logo, search, upload } from "../assets";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center mt-4">
      <div className={`${styles.flexStart} items-center`}>
        <img src={logo} alt="logo" className=" h-[48px] w-[191px]" />

        <ul className="flex justify-around pt-2">
          <li className="ml-[4rem] mr-[3rem]">Discover</li>
          <li className="mr-[3rem]">
            Marketplace{" "}
            <span className="bg-lightBlue p-2 rounded font-light">PRO</span>
          </li>
          <li className="">How it Works</li>
        </ul>
      </div>

      <div className="flex pt-2">
        <img src={search} alt="search" className="mr-10" />
        <Button className="mr-10 text-lightBlue rounded-full border border-lightBlue px-5" />
        <img src={upload} alt="upload" onClick={alert("done")} />
      </div>
    </div>
  );
};

export default Navbar;
