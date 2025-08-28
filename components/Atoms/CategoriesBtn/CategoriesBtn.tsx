"use client";
import React, { useState } from "react";
import CategoriesDropdown from "../CategoriesDropdown/CategoriesDropdown";
import BottomArrow from "@/public/BottomArrow";
import CategoriesIcon from "@/public/CategoriesIcon";

import {
  Milk,
  ShoppingBag,
  Fish,
  Apple,
  Wine,
  Carrot,
  Pizza,
  Dog,
  Shirt,
} from "lucide-react";

const CategoriesBtn: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const categories = [
    {
      label: "Milks and Dairies",
      icon: <Milk size={20} />,
      onClick: () => console.log("Milk"),
    },
    {
      label: "Wines & Drinks",
      icon: <Wine size={20} />,
      onClick: () => console.log("Wine"),
    },
    {
      label: "Clothing & Beauty",
      icon: <Shirt size={20} />,
      onClick: () => console.log("Clothing"),
    },
    {
      label: "Fresh Seafood",
      icon: <Fish size={20} />,
      onClick: () => console.log("Seafood"),
    },
    {
      label: "Pet Foods & Toy",
      icon: <Dog size={20} />,
      onClick: () => console.log("Pet Food"),
    },
    {
      label: "Fast food",
      icon: <Pizza size={20} />,
      onClick: () => console.log("Fast Food"),
    },
    {
      label: "Baking material",
      icon: <Pizza size={20} />,
      onClick: () => console.log("Baking"),
    },
    {
      label: "Vegetables",
      icon: <Carrot size={20} />,
      onClick: () => console.log("Vegetables"),
    },
    {
      label: "Fresh Fruit",
      icon: <Apple size={20} />,
      onClick: () => console.log("Fruit"),
    },
    {
      label: "Bread and Juice",
      icon: <ShoppingBag size={20} />,
      onClick: () => console.log("Juice"),
    },
  ];

  return (
    <div className="relative inline-block">
      <div
        className=" bg-[#3BB77E] rounded-[5px] px-[20px] font-quicksand flex justify-center items-center w-fit text-white cursor-pointer hover:bg-[#34a16f] transition-colors duration-200"
        onClick={handleToggle}
      >
        <CategoriesIcon className="w-6 h-6 text-white" />
        <span className="font-bold leading-[44px] ml-[7px] mr-[12px] text-white text-sm whitespace-nowrap">
          Browse All Categories
        </span>
        <BottomArrow
          className={`w-4 h-4 text-white transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <CategoriesDropdown items={categories} isOpen={isOpen} />
    </div>
  );
};

export default CategoriesBtn;
