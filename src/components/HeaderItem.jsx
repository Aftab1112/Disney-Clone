import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer relative mb-2 group">
      <Icon />
      <h2 className="relative ">{name}</h2>
      <div className="absolute -bottom-2   left-0 w-full h-[2px] bg-white origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
    </div>
  );
}

export default HeaderItem;
