"use client";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import { useEffect, useState } from "react";

const MobileDock = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200 flex justify-around items-center py-2 z-50 transition-transform duration-300 md:hidden
      ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <button className="flex flex-col items-center text-gray-600 hover:text-green-600">
        <Heart size={22} />
        <span className="text-xs">Wishlist</span>
      </button>

      <button className="relative flex flex-col items-center text-gray-600 hover:text-green-600">
        <ShoppingCart size={22} />
        <span className="text-xs">Cart</span>
      </button>

      <button className="flex flex-col items-center text-gray-600 hover:text-green-600">
        <Search size={22} />
        <span className="text-xs">Search</span>
      </button>
      
      <button className="flex flex-col items-center text-gray-600 hover:text-green-600">
        <User size={22} />
        <span className="text-xs">Account</span>
      </button>
    </div>
  );
};

export default MobileDock;
