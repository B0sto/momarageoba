import Logo from "@/public/Logo";
import React from "react";
import { MapPin, Headphones, Send, Clock } from "lucide-react";
import ContactInfoItem, {
  ContactInfoItemProps,
} from "@/components/Atoms/ContactInfoItem/ContactInfoItem";

const ContactInfoBlock = () => {
  const blockItems: ContactInfoItemProps[] = [
    {
      icon: MapPin,
      label: "Address:",
      value: "United States, W Campbell Ave",
    },
    {
      icon: Headphones,
      label: "Call Us:",
      value: "(+91) - 540-025-124553",
    },
    {
      icon: Send,
      label: "Email:",
      value: "sale@Nest.com",
    },
    {
      icon: Clock,
      label: "Hours:",
      value: "10:00 - 18:00, Mon - Sat",
    },
  ];

  return (
    <div className="space-y-4">
      <Logo />
      <p className="font-lato text-[17px] text-[#253D4E] leading-[24px] max-w-[238px]">
        Awesome grocery store website template
      </p>
      <div className="space-y-2">
        {blockItems.map((item, index) => (
          <ContactInfoItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactInfoBlock;
