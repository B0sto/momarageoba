"use client";
import { useState } from "react";
import FooterText from "@/components/Atoms/FooterText/FooterText";
import FooterTitle from "@/components/Atoms/FooterTitle/FooterTitle";
import BottomArrow from "@/public/BottomArrow";

interface footerNavBlockProps {
  title: string;
  items: string[];
}

const FooterNavBlock = ({ title, items }: footerNavBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full lg:w-auto">
      {/* Header */}
      <button
        className="flex justify-between items-center w-full lg:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FooterTitle title={title} />
        <BottomArrow
          className={`w-4 h-4 transition-transform lg:hidden ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Items */}
      <ul
        className={`flex flex-col gap-y-3.5 overflow-hidden transition-all duration-300 
        ${isOpen ? "max-h-96 mt-3" : "max-h-0 lg:max-h-none lg:mt-3"}`}
      >
        {items.map((item, index) => (
          <FooterText key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default FooterNavBlock;
