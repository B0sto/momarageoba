import SectionHeader from "@/components/Atoms/SectionHeader/SectionHeader";
import PopularProductCard from "@/components/Molecules/PopularProductCard/PopularProductCard";
import { getPopularProducts } from "@/lib/services/PopularProductsData";

const PopularProducts = async () => {
  const products = await getPopularProducts(10);

  return (
    <section className="py-5">
      <SectionHeader header="Popular Products" className="mb-6"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <PopularProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
