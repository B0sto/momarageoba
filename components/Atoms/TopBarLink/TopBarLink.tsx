// TopBarLink.tsx
import React, { useEffect, useRef } from "react";

type DropdownItem = { label: string; onClick?: () => void };
type Props = {
  label: React.ReactNode;
  showSeparator: boolean;
  dropdownItems?: DropdownItem[];
  onClick?: () => void;
  isOpen?: boolean;
};

const TopBarLink: React.FC<Props> = ({ label, showSeparator, dropdownItems, onClick, isOpen }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && isOpen && onClick) {
        onClick(); // close dropdown
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClick]);

  return (
    <div className="relative" ref={ref}>
      <span className="flex items-center py-[12px] cursor-pointer" onClick={onClick}>
        <span className="mr-[9px] font-medium leading-[13px] text-[13px] text-[#7E7E7E]">
          {label}
        </span>
        {showSeparator && <div className="w-[1px] h-[10px] bg-[#DEDFE2]"></div>}
      </span>

      {isOpen && dropdownItems && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-[#DEDFE2] rounded-md shadow-lg py-2 z-10 w-[120px]">
          {dropdownItems.map((item, i) => (
            <div
              key={i}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => item.onClick?.()}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopBarLink;
