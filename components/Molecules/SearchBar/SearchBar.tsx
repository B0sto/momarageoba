"use client";
import React, { useState } from "react";
import Dropdown from "@/components/Atoms/Dropdown/Dropdown";
import { DropdownItem } from "@/types/types";
import { Search } from "lucide-react";

export const SearchBar = () => {
  const categories = [
    "All Categories",
    "Electronics",
    "Books",
    "Clothing",
    "Home",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(
      `Searching for "${searchTerm}" in category: "${selectedCategory}"`
    );
  };

  const categoryItems: DropdownItem[] = categories.map((category) => ({
    label: category,
    onClick: () => {
      setSelectedCategory(category);
      setIsCategoryOpen(false);
    },
  }));

  return (
    <div
      className="
        flex items-center justify-between font-quicksand
        rounded-lg border border-green-300 bg-white shadow-sm
        focus-within:ring-2 focus-within:ring-green-200
        p-2 sm:p-2 md:p-3 lg:p-4
        w-full
      "
    >
      {/* Category dropdown */}
      <Dropdown
        label={selectedCategory}
        items={categoryItems}
        isOpen={isCategoryOpen}
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        className="whitespace-nowrap text-xs sm:text-sm md:text-base"
      />

      <div className="mx-2 h-5 sm:h-6 w-px bg-gray-200" />

      {/* Search input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="
          w-full border-none bg-transparent
          text-xs sm:text-sm md:text-[15px] lg:text-[17px]
          text-gray-800 placeholder-gray-400
          focus:outline-none
        "
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />

      <button
        onClick={handleSearch}
        className="
          cursor-pointer text-gray-500 hover:text-green-500
          focus:outline-none
          ml-1 sm:ml-2
        "
      >
        <Search size={18} className="sm:size-[20px] md:size-[22px]" />
      </button>
    </div>
  );
};
