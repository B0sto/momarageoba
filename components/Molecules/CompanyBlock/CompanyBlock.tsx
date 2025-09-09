import FooterText from "@/components/Atoms/FooterText/FooterText";
import React from "react";

const CompanyBlock = () => {
  const blockItems = [
    { item: "About Us" },
    { item: "Delivery Information" },
    { item: "Privacy Policy" },
    { item: "Terms & Conditions" },
    { item: "Contact Us" },
    { item: "Support Center" },
    { item: "Careers" },
  ];

  return (
    <div>
      <h4 className="font-lato text-[#7E7E7E] text-[14px] leading-[24px]">
        Company
      </h4>

      <ul className="flex flex-col gap-y-3.5">
        {blockItems.map((block: {item: string}, index: number) => (
          <FooterText key={index} text={block.item} />
        ))}
      </ul>
    </div>
  );
};

export default CompanyBlock;
