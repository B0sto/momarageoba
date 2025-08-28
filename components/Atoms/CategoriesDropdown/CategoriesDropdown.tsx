// components/CategoriesDropdown.tsx
"use client";
import React from "react";
import { DropdownProps } from "@/types/types";

interface CategoryItem {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface CategoriesDropdownProps {
  items: CategoryItem[];
  isOpen: boolean;
}

const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({ items, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-2 z-20 w-[500px] bg-white rounded-lg shadow-lg p-4">
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="flex items-center gap-3 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50 transition"
          >
            <span className="w-6 h-6 flex items-center justify-center text-green-500">
              {item.icon}
            </span>
            <span className="text-sm font-medium text-gray-700">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDropdown;
