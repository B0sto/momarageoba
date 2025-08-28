"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Deals", href: "#" },
  { label: "Home", href: "#", hasDropdown: true },
  { label: "About", href: "#" },
  { label: "Shop", href: "#", hasDropdown: true },
  { label: "Vendors", href: "#", hasDropdown: true },
  { label: "Mega menu", href: "#", hasDropdown: true },
  { label: "Blog", href: "#", hasDropdown: true },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "Contact", href: "#" },
];

const Navigation: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleToggle = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <nav className="w-full bg-white font-quicksand">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              <button
                onClick={() =>
                  item.hasDropdown ? handleToggle(item.label) : null
                }
                className={`flex items-center gap-1 hover:text-[#3BB77E] transition-colors cursor-pointer font-bold ${
                  item.label === "Home" ? "text-[#3BB77E]" : ""
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.hasDropdown && openMenu === item.label && (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-md p-3 w-40 z-20">
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="hover:text-[#3BB77E] cursor-pointer">Option 1</li>
                    <li className="hover:text-[#3BB77E] cursor-pointer">Option 2</li>
                    <li className="hover:text-[#3BB77E] cursor-pointer">Option 3</li>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
