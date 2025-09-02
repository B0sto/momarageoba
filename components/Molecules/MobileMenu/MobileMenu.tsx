"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Logo from "@/public/Logo";
import { SearchBar } from "@/components/Molecules/SearchBar/SearchBar";
import HeaderRight from "@/components/Molecules/HeaderRight/HeaderRight";
import TopBarRight from "@/components/Molecules/TopBarRight/TopBarRight";
import Dropdown from "@/components/Atoms/Dropdown/Dropdown";
import { DropdownItem } from "@/types/types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Deals", href: "#" },
  {
    label: "Home",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Home v1", onClick: () => console.log("Home v1") },
      { label: "Home v2", onClick: () => console.log("Home v2") },
      { label: "Home v3", onClick: () => console.log("Home v3") },
    ],
  },
  { label: "About", href: "#" },
  {
    label: "Shop",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Shop Grid", onClick: () => console.log("Shop Grid") },
      { label: "Shop List", onClick: () => console.log("Shop List") },
    ],
  },
  {
    label: "Vendors",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Vendor List", onClick: () => console.log("Vendor List") },
      {
        label: "Vendor Dashboard",
        onClick: () => console.log("Vendor Dashboard"),
      },
    ],
  },
  {
    label: "Mega menu",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Category 1", onClick: () => console.log("Category 1") },
      { label: "Category 2", onClick: () => console.log("Category 2") },
    ],
  },
  {
    label: "Blog",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Blog Grid", onClick: () => console.log("Blog Grid") },
      { label: "Blog List", onClick: () => console.log("Blog List") },
    ],
  },
  { label: "Contact", href: "#" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {isOpen && (
        <div onClick={onClose} className="min-[780px]:hidden fixed inset-0 bg-black/40 z-40" />
      )}

      <div
        className={`min-[780px]:hidden fixed top-0 right-0 h-full w-[80%] max-w-[350px] bg-white shadow-xl transform transition-transform duration-300 z-50 flex flex-col
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#ECECEC]">
          <Logo />
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
          <SearchBar />

          <HeaderRight />

          <TopBarRight />

          <nav className="flex flex-col divide-y divide-gray-100 text-[15px] font-medium text-gray-700">
            {navItems.map((item) =>
              item.hasDropdown && item.dropdownItems ? (
                <Dropdown
                  key={item.label}
                  label={item.label}
                  items={item.dropdownItems}
                  isOpen={openDropdown === item.label}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                  className="py-3"
                />
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 text-gray-600"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
