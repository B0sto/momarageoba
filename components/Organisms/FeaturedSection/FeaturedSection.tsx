import React from "react";
import FeaturedList from "@/components/Molecules/FeaturedList/FeaturedList";
import {
  getCategories,
  getProductsByCategory,
} from "@/lib/services/featuredCategories";

interface CategoryWithCount {
  name: string;
  itemCount: number;
  image?: string;
}

const FeaturedSection = async () => {
  const categories = await getCategories();

  const limitedCategories = categories.slice(0, 8);

  const categoriesWithCounts: CategoryWithCount[] = await Promise.all(
    limitedCategories.map(async (cat) => {
      const { products, categoryImage } = await getProductsByCategory(cat);
      const itemCount = products.length; // Count the length of the products array
      return { name: cat, itemCount, image: categoryImage };
    })
  );

  return (
    <section className="my-10">
      <h2 className="font-quicksand text-[32px] font-bold leading-[120%] text-[#253D4E] mb-6">
        Featured Categories
      </h2>
      <FeaturedList categories={categoriesWithCounts} />
    </section>
  );
};

export default FeaturedSection;
