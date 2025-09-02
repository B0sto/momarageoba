import React from "react";
import Link from "next/link";

interface SlideContentProps {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

const SlideContent: React.FC<SlideContentProps> = ({
  title,
  description,
  link,
  buttonText,
}) => (
  <div className="flex flex-col justify-center h-full px-3 sm:px-8 md:px-16 lg:px-24">
    {/* Title */}
    <h2
      className="font-quicksand font-bold 
      text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
      leading-tight text-[#253D4E] whitespace-pre-line"
    >
      {title}
    </h2>

    {/* Description */}
    <p
      className="mt-2 sm:mt-6 
      text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
      text-[#7E7E7E] leading-snug"
    >
      {description}
    </p>

    {/* Button */}
    <div className="mt-4 sm:mt-8">
      <Link
        href={link}
        className="bg-[#3BB77E] text-white font-semibold rounded-full 
          px-4 py-2 text-xs 
          sm:px-8 sm:py-3 sm:text-base 
          transition-all duration-300 hover:bg-[#36a670]"
      >
        {buttonText}
      </Link>
    </div>
  </div>
);

export default SlideContent;
