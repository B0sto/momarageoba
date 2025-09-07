import React from "react";
import { ProductPriceProps } from "../ProductPrice/ProductPrice";
import { calculateOldPrice } from "@/lib/utils/calculateOldPrice";

const ProductOldPrice = ({
  price,
  discountPercentage,
}: ProductPriceProps & { discountPercentage: number }) => {
  const oldPrice = calculateOldPrice(price, discountPercentage);

  return (
    <span className="text-[#ADADAD] font-quicksand text-[12px] sm:text-[14px] font-bold leading-[24px] line-through">
      ${oldPrice}
    </span>
  );
};

export default ProductOldPrice;
