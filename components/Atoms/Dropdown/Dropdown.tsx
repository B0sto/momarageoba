import React from "react";
import { ChevronDown } from 'lucide-react';
import { DropdownProps } from "@/types/types";

const Dropdown: React.FC<DropdownProps> = ({ label, items, isOpen, onClick, className }) => {
  return (
    <div className={`relative ${className}`}>
      <button 
        className="flex items-center gap-x-[5px] text-sm text-gray-600 focus:outline-none"
        onClick={onClick}
      >
        <span>{label}</span>
        <ChevronDown 
          size={16}
          className={`transform transition-transform duration-100 ease-in-out text-gray-500 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full -left-3 mt-2 z-10 w-28 rounded-md bg-white shadow-lg ring-1">
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                className="block w-full px-4 py-2 text-left text-[13px] text-gray-700 hover:bg-gray-100"
                onClick={item.onClick}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown