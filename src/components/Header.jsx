import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import { HiHome, HiMagnifyingGlass, HiStar } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { PiTelevisionDuotone } from "react-icons/pi";
import { RiMovie2Fill } from "react-icons/ri";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);

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
        <img
          className="w-[80px] md:w-[115px] object-cover mb-4 md:mb-5"
          src={logo}
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item, i) => (
            <HeaderItem name={item.name} Icon={item.icon} key={i} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, i) =>
              i < 3 && <HeaderItem name={""} Icon={item.icon} key={i} />
          )}
          <div className="md:hidden " onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] b-[1px] p-3 border-gray-700 px-5 py-4">
                {menu.map(
                  (item, i) =>
                    i > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} key={i} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        className="w-[40px] rounded-full mb-2"
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
      />
    </div>
  );
}

export default Header;
