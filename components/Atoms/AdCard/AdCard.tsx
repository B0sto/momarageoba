import React from "react";
import { FaArrowRight } from "react-icons/fa";

type AdCardProps = {
  title: string;
  image: string;
  buttonLabel: string;
};

const AdCard = ({ title, image, buttonLabel }: AdCardProps) => {
  return (
    <div
      className={`rounded-[10px] pt-[80px] pl-[50px] min-h-[300px] max-h-[500px] bg-cover bg-center flex flex-col gap-y-[28px]`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className="font-quicksand text-[24px] font-bold leading-[120%] text-[#253D4E] max-w-[300px] max-[460px]:text-[20px] max-[460px]:max-w-[150px]">
        {title}
      </h3>
      <div className="bg-[#3BB77E] rounded-[4px] py-[8px] pl-[13px] pr-[8px] text-white font-quicksand text-[14px] font-bold leading-[130%] tracking-wide w-fit flex place-items-center-safe gap-x-[13px] cursor-pointer">
        {buttonLabel}

        <FaArrowRight />
      </div>
    </div>
  );
};

export default AdCard;
