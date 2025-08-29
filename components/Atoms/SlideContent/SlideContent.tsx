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
  <div className="flex flex-col justify-center h-full py-[91px] px-[95px]">
    <h2 className="font-quicksand text-[72px] font-bold leading-[100%] text-[#253D4E]">
      {title.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </h2>
    <p className="font-lato text-[30px] text-[#7E7E7E] leading-[80%] mt-[30px]">
      {description}
    </p>
    <div className="mt-[50px]">
      <Link
        href={link}
        className="bg-[#3BB77E] text-white font-semibold rounded-[50px] px-[40px] py-[22px] transition-all duration-300 hover:bg-[#36a670]"
      >
        {buttonText}
      </Link>
    </div>
  </div>
);

export default SlideContent;
