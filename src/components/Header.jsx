import React from "react";
import logo from "./../assets/Images/logo.png";
import { HiHome, HiMagnifyingGlass, HiStar } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { PiTelevisionDuotone } from "react-icons/pi";
import { RiMovie2Fill } from "react-icons/ri";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGNALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: RiMovie2Fill,
    },
    {
      name: "SERIES",
      icon: PiTelevisionDuotone,
    },
  ];

  return (
    <div className="flex items-center  justify-between p-5">
      <div className="flex gap-8 items-center">
        <img className="w-[80px] md:w-[115px] object-cover" src={logo} />
        {menu.map((item, i) => (
          <HeaderItem name={item.name} Icon={item.icon} key={i} />
        ))}
      </div>
      <img
        className="w-[40px] rounded-full"
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
      />
    </div>
  );
}

export default Header;
