import React from 'react';
import {
  Category,
  getCategoryTotal,
  getCategories,
} from "@/lib/services/categoriesData";
import FeaturedList from '@/components/Molecules/FeaturedList/FeaturedList';

const FeaturedSection = async () => {
  const categories = await getCategories();
  const categoriesWithTotal: Category[] = await Promise.all(
    categories.map(async (cat) => ({
      ...cat,
      total: await getCategoryTotal(cat.slug),
    }))
  );

  return (
    <section className='py-5'>
      <FeaturedList categories={categoriesWithTotal} />
    </section>
  );
};

export default FeaturedSection;