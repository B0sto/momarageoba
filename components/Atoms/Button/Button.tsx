import React from "react";
import { FaArrowRight } from "react-icons/fa";

type buttonProps = {
    buttonLabel: string;
}

const Button: React.FC<buttonProps> = ({buttonLabel}) => {
  return (
    <div className="bg-[#3BB77E] rounded-[4px] py-[8px] pl-[13px] pr-[8px] text-white font-quicksand text-[14px] font-bold leading-[130%] tracking-wide w-fit flex place-items-center-safe gap-x-[13px] cursor-pointer">
      {buttonLabel}

      <FaArrowRight />
    </div>
  );
};

export default Button;
