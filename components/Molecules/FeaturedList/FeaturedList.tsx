import React from "react";
import FeaturedCard from "@/components/Atoms/FeaturedCard/FeaturedCard";

interface CategoryWithCount {
  name: string;
  itemCount: number;
  image?: string;
}

interface FeaturedListProps {
  categories: CategoryWithCount[];
}

const FeaturedList: React.FC<FeaturedListProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {categories.map((item, index) => (
        <FeaturedCard
          key={index}
          name={item.name}
          itemCount={item.itemCount}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default FeaturedList;
