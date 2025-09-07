import React from "react";

interface DiscountBadgeProps {
  discountPercentage: number;
}

const DiscountBadge = ({ discountPercentage }: DiscountBadgeProps) => {
  return (
    <span className="bg-[#F59758] text-white px-3 py-1 rounded-[15px_0_20px_0] text-[12px] font-bold">
      -{discountPercentage}%
    </span>
  );
};

export default DiscountBadge;
