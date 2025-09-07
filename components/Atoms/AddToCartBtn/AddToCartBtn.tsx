import React from "react";
import { ShoppingCart } from "lucide-react";

const AddToCartBtn = () => {
  return (
    <div className="flex items-center gap-x-1.5 bg-[#DEF9EC] py-[10px] px-[20px] rounded-[4px] cursor-pointer hover:bg-[#aceacc] transition-all duration-300">
      <ShoppingCart size={15} className="text-[#3BB77E]" />
      <span className="font-lato text-[14px] font-bold leading-[24px] text-[#3BB77E]">
        Add
      </span>
    </div>
  );
};

export default AddToCartBtn;
