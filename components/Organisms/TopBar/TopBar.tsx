'use client'
import React from "react";
import TopBarLeft from "@/components/Molecules/TopBarLeft/TopBarLeft";
import TopBarRight from "@/components/Molecules/TopBarRight/TopBarRight";

const TopBar = () => {
  return (
    <nav className="border-b-[1px] border-[#ECECEC] flex items-center justify-around">
      <TopBarLeft />
      <TopBarRight />
    </nav>
  );
};

export default TopBar;
