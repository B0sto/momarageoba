// SocialIcon.tsx
import React from "react";
import { IconType } from "react-icons";

interface SocialIconProps {
  icon: IconType;
  size?: number;
  color?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon: Icon,
  size = 24,
  color = "#fff",
}) => {
  return (
    <div className="p-2 w-fit flex items-center justify-center bg-green-500 rounded-full cursor-pointer">
      <Icon size={size} color={color} />
    </div>
  );
};

export default SocialIcon;
