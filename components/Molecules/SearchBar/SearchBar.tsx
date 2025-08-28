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
    <div className="flex font-quicksand w-full max-w-2xl items-center rounded-lg border border-green-300 bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-green-200 md:p-3 lg:p-4">
      <Dropdown
        label={selectedCategory}
        items={categoryItems}
        isOpen={isCategoryOpen}
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        className="whitespace-nowrap"
      />

      <div className="mx-2 h-6 w-px bg-gray-200" />

      <div className="flex w-full items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for items..."
          className="w-full border-none bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none md:text-base lg:text-lg"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          onClick={handleSearch}
          className="cursor-pointer text-gray-500 transition-colors hover:text-green-500 focus:outline-none"
        >
          <Search size={22} />
        </button>
      </div>
    </div>
  );
};
