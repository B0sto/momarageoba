"use client";
import React, { useState } from "react";
import Logo from "@/public/Logo";
import { Menu } from "lucide-react";
import HeaderRight from "@/components/Molecules/HeaderRight/HeaderRight";
import { SearchBar } from "@/components/Molecules/SearchBar/SearchBar";
import MobileMenu from "@/components/Molecules/MobileMenu/MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-[25px] max-[900px]:py-[15px] relative">
      <Logo />

      <div className="hidden min-[780px]:flex items-center justify-between gap-6 w-full">
        <SearchBar />
        <HeaderRight />
      </div>

      <div className="min-[780px]:hidden">
        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
