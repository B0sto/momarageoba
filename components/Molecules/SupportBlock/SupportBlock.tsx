import SupportComponent from "@/components/Atoms/SupportComponent/SupportComponent";
import React from "react";
import { Phone } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import SocialIcon from "@/components/Atoms/SocialIcon/SocialIcon";

const SupportBlock = () => {
  const supportCompItems = [
    {
      icon: Phone,
      number: "+995 599 123 456",
      text: "Support 24/7",
    },
    {
      icon: Phone,
      number: "support@example.com",
      text: "Email us anytime",
    },
  ];

  const socialIconItems = [
    { icon: FaFacebookF },
    { icon: FaTwitter },
    { icon: FaInstagram },
    { icon: FaPinterestP },
    { icon: FaYoutube },
  ];

  return (
    <div className="border-t border-[#BCE3C9] flex items-center justify-between max-lg:flex-col max-lg:justfiy-center gap-5 py-8">
      <div className="font-lato text-[14px] leading-[24px] text-[#7E7E7E] text-center">
        <p>
          © 2022, <span className="text-[#3BB77E]">Nest</span> - HTML Ecommerce
          Template
        </p>
        <span>All rights reserved</span>
      </div>

      <div className="flex items-center gap-x-12 max-[600px]:flex-col">
        {supportCompItems.map((item, index) => (
          <SupportComponent key={index} {...item} />
        ))}
      </div>

      <div>
        <div className="flex items-center gap-x-2">
          <p className="font-quicksand text-[#253D4E] leading-[24px] font-bold">
            Follow Us
          </p>

          <div className="flex items-center gap-x-1.5">
            {socialIconItems.map((item, index) => (
              <SocialIcon key={index} icon={item.icon} size={16}/>
            ))}
          </div>
        </div>
        <p className="text-[#7E7E7E] font-lato text-[14px] leading-[24px] ">
          Up to 15% discount on your first subscribe
        </p>
      </div>
    </div>
  );
};

export default SupportBlock;
