import React from "react";

interface sectionHeaderProps {
    header: string;
    className?: string;
}

const SectionHeader = ({header, className}: sectionHeaderProps) => {
  return (
    <h2 className={`font-quicksand text-[#253D4E] text-[18px] sm:text-[20px] md:text-[32px] font-bold leading-[120%] ${className}`}>
      {header}
    </h2>
  );
};

export default SectionHeader;
