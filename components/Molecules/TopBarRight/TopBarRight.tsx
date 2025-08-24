import React, { useState } from "react";
import TopBarLink from "@/components/Atoms/TopBarLink/TopBarLink";
import BottomArrow from "@/public/BottomArrow";

const TopBarRight = () => {
  const [selected, setSelected] = useState("English");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const navItems = [
    {
      label: (
        <>
          Need help? Call Us:{" "}
          <a className="text-green-500 font-medium" href="tel:+1800 900">
            +1800 900
          </a>
        </>
      ),
    },
    {
      label: (
        <div className="flex gap-x-[5px]">
          <span>{selected}</span>
          <BottomArrow
            className={`transform transition-transform duration-100 ease-in-out ${
              isLangOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      ),
      dropdownItems: [
        { label: "English", onClick: () => setSelected("English") },
        { label: "Deutsch", onClick: () => setSelected("Deutsch") },
      ],
      onClick: () => setIsLangOpen(!isLangOpen),
      isOpen: isLangOpen,
    },
    {
      label: (
        <div className="flex gap-x-[5px]">
          <span>USD</span>
          <BottomArrow
            className={`transform transition-transform duration-100 ease-in-out ${
              isCurrencyOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      ),
      dropdownItems: [
        { label: "USD" },
        { label: "EUR" },
        { label: "GBP" },
      ],
      onClick: () => setIsCurrencyOpen(!isCurrencyOpen),
      isOpen: isCurrencyOpen,
    },
  ];

  return (
    <div className="flex items-center gap-x-[9px] text-sm text-gray-600">
      {navItems.map((item, index) => (
        <TopBarLink
          key={index}
          label={item.label}
          showSeparator={index < navItems.length - 1}
          dropdownItems={item.dropdownItems}
          onClick={item.onClick}
          isOpen={item.isOpen}
        />
      ))}
    </div>
  );
};

export default TopBarRight;
