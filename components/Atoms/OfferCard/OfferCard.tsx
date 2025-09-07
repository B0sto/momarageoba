import React from "react";

export interface offerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OfferCard = ({ icon, title, description }: offerCardProps) => {
  return (
    <div className="bg-[#F4F6FA] rounded-[10px] flex-shrink-0 p-5 min-w-[260px] sm:min-w-[280px] md:min-w-[298px] flex items-center gap-4 sm:gap-5">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex flex-col gap-1">
        <p className="font-quicksand text-[#242424] text-base sm:text-[18px] font-semibold leading-5">
          {title}
        </p>
        <p className="text-[#ADADAD] font-lato text-sm sm:text-base leading-[150%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
