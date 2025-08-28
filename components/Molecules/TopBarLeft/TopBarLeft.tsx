import React from "react";
import TopBarLink from "@/components/Atoms/TopBarLink/TopBarLink";

const navItems = ["About Us", "My Account", "Wishlist", "Order Tracking"];

const TopBarLeft = () => {
  return (
    <div className="flex justify-center items-center gap-x-[9px] font-lato">
      {navItems.map((item, index) => (
        <TopBarLink
          key={index}
          label={item}
          showSeparator={index < navItems.length - 1}
        />
      ))}
    </div>
  );
};

export default TopBarLeft;
