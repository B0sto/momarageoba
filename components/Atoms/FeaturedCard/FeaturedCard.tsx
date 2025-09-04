import React from "react";
import { Category } from "@/lib/services/categoriesData";

interface FeaturedCardProps {
  category: Category;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ category }) => {
  return (
    <div className="bg-[#F2FCF4] flex justify-center items-center p-6 min-w-[180px] min-h-[140px] rounded-xl shadow-sm hover:shadow-lg hover:bg-[#E8F5EA] transition-all duration-300 cursor-pointer border border-[#E0F2E3] group relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3BB77E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Subtle animated border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3BB77E]/20 via-transparent to-[#3BB77E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <a
        href={category.url}
        className="text-decoration-none relative z-10 w-full"
      >
        <div className="text-center space-y-3">

          <p className="font-quicksand text-[#253D4E] text-center font-bold leading-[120%] group-hover:text-[#3BB77E] transition-colors duration-300 group-hover:scale-105 transform">
            {category.name.toUpperCase()}
          </p>

          <div className="flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform duration-300">
            <div className="w-2 h-2 bg-[#3BB77E] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="font-lato text-[#7E7E7E] text-[14px] text-center leading-[24px]">
              {category.total} items
            </p>
            <div className="w-2 h-2 bg-[#3BB77E] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="h-0.5 w-0 bg-gradient-to-r from-[#3BB77E] to-[#2A9B63] mx-auto group-hover:w-12 transition-all duration-500 rounded-full"></div>
        </div>
      </a>
    </div>
  );
};

export default FeaturedCard;
