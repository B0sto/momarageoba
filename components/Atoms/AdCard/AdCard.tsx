import React from "react";
import Button from "../Button/Button";

type AdCardProps = {
  title: string;
  image: string;
};

const AdCard = ({ title, image }: AdCardProps) => {
  return (
    <div
      className={`rounded-[10px] pt-[80px] pl-[50px] min-h-[300px] max-h-[500px] bg-cover bg-center flex flex-col gap-y-[28px]`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className="font-quicksand text-[24px] font-bold leading-[120%] text-[#253D4E] max-w-[300px] max-[460px]:text-[20px] max-[460px]:max-w-[150px]">
        {title}
      </h3>
      <Button buttonLabel = "Shop now"/>
    </div>
  );
};

export default AdCard;
