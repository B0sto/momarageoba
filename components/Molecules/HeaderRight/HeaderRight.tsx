"use client";
import React, { useState } from "react";
import { Heart, ShoppingCart, User, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    key: "compare",
    label: "Compare",
    icon: <RefreshCcw className="w-6 h-6 text-slate-700" />,
    hasPopup: true,
  },
  {
    key: "wishlist",
    label: "Wishlist",
    icon: <Heart className="w-6 h-6 text-slate-700" />,
    hasPopup: true,
  },
  {
    key: "cart",
    label: "Cart",
    icon: <ShoppingCart className="w-6 h-6 text-slate-700" />,
    hasPopup: true,
  },
  {
    key: "account",
    label: "Account",
    icon: <User className="w-6 h-6 text-slate-700" />,
    hasPopup: false,
    href: "/account",
  },
];

const HeaderRight = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const togglePopup = (key: string) => {
    setActivePopup(activePopup === key ? null : key);
  };

  return (
    <div className="flex items-center gap-8 font-quicksand">
      {menuItems.map((item) => (
        <div key={item.key} className="relative">
          <button
            onClick={() =>
              item.hasPopup
                ? togglePopup(item.key)
                : (window.location.href = item.href || "#")
            }
            className="flex items-center gap-2 relative cursor-pointer"
          >
            <div className="relative">{item.icon}</div>
            <span className="text-[#7E7E7E]">{item.label}</span>
          </button>

          <AnimatePresence>
            {activePopup === item.key && item.hasPopup && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-12 left-0 bg-white shadow-xl rounded-lg p-4 w-64 z-50"
              >
                <p className="text-sm text-slate-600">
                  {item.label} popup content goes here 🚀
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default HeaderRight;
