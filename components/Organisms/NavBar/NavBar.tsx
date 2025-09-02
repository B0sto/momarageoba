import CategoriesBtn from "@/components/Atoms/CategoriesBtn/CategoriesBtn";
import SupportComponent from "@/components/Atoms/SupportComponent/SupportComponent";
import Navigation from "@/components/Molecules/Navigation/Navigation";
import HeadphonesIcon from "@/public/HeadphonesIcon";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="py-3 flex justify-between items-center max-[780px]:hidden">
      <CategoriesBtn />
      <Navigation />
      <SupportComponent
        icon={HeadphonesIcon}
        number="1900 - 888"
        text="24/7 support"
      />
    </div>
  );
};

export default NavBar;
