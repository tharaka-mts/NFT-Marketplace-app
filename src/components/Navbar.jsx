import styles from "../styles";

import { logo, search, upload } from "../assets";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-6 text-white">
      <div className={`${styles.flexStart} items-center`}>
        <img
          src={logo}
          alt="logo"
          className="h-[48px] w-[191px] hover:cursor-pointer"
        />

        <ul className="flex justify-around pt-2 text-sm">
          <li className="ml-[5rem] mr-[4rem] hover:cursor-pointer hover:text-lightBlue">
            Discover
          </li>
          <li className="mr-[4rem] hover:cursor-pointer">
            <span className="hover:text-lightBlue">Marketplace </span>
            <span className="bg-lightBlue p-1 rounded-sm font-light">PRO</span>
          </li>
          <li className="hover:cursor-pointer hover:text-lightBlue">
            How it Works
          </li>
        </ul>
      </div>

      <div className="flex pt-2">
        <img src={search} alt="search" className="mr-6 hover:cursor-pointer" />
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
  );
};

export default Navbar;
