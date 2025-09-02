"use client";
import React from "react";
import TopBarLeft from "@/components/Molecules/TopBarLeft/TopBarLeft";
import TopBarRight from "@/components/Molecules/TopBarRight/TopBarRight";

const TopBar = () => {
  return (
    <nav className="flex items-center justify-between font-lato">
      <TopBarLeft />
      <TopBarRight />
    </nav>
  );
};

export default TopBar;
