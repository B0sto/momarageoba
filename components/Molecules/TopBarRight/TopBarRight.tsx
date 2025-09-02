import React, { useState } from "react";
import Dropdown from "@/components/Atoms/Dropdown/Dropdown";
import { DropdownItem } from "@/types/types";

const TopBarRight = () => {
  const [selectedLang, setSelectedLang] = useState("English");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const langItems: DropdownItem[] = [
    { label: "English", onClick: () => { setSelectedLang("English"); setIsLangOpen(false); } },
    { label: "Deutsch", onClick: () => { setSelectedLang("Deutsch"); setIsLangOpen(false); } },
  ];

  const currencyItems: DropdownItem[] = [
    { label: "USD", onClick: () => setIsCurrencyOpen(false) },
    { label: "EUR", onClick: () => setIsCurrencyOpen(false) },
    { label: "GBP", onClick: () => setIsCurrencyOpen(false) },
  ];

  return (
    <div className="flex items-center gap-[9px] text-[13px] text-[#7E7E7E] leading-[13px] max-[900px]:flex-col max-[900px]:items-start">
      <span>
        Need help? Call Us:{" "}
        <a className="text-[#3BB77E] font-semibold leading-[13px]" href="tel:+1800 900">
          +1800 900
        </a>
      </span>
      <div className="w-[1px] h-[10px] bg-[#DEDFE2] max-[900px]:hidden"></div>
      
      <Dropdown
        label={selectedLang}
        items={langItems}
        isOpen={isLangOpen}
        onClick={() => setIsLangOpen(!isLangOpen)}
      />
      <div className="w-[1px] h-[10px] bg-[#DEDFE2] max-[900px]:hidden"></div>

      <Dropdown
        label="USD"
        items={currencyItems}
        isOpen={isCurrencyOpen}
        onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
      />
    </div>
  );
};

export default TopBarRight;
