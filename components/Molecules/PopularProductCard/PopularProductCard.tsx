import AddToCartBtn from "@/components/Atoms/AddToCartBtn/AddToCartBtn";
import ProductImage from "@/components/Atoms/ProductImage/ProductImage";
import ProductOldPrice from "@/components/Atoms/ProductOldPrice/ProductOldPrice";
import ProductPrice from "@/components/Atoms/ProductPrice/ProductPrice";
import ProductRating from "@/components/Atoms/ProductRating/ProductRating";
import ViewProductBtn from "@/components/Atoms/ViewProductBtn/ViewProductBtn";
import { PopularProduct } from "@/lib/services/PopularProductsData";
import Link from "next/link";

const PopularProductCard = ({
  title,
  price,
  discountPercentage,
  rating,
  category,
  brand,
  image,
}: PopularProduct) => {
  return (
    <div className="w-full">
      {" "}
      <Link
        href={`/product/${encodeURIComponent(title)}`}
        className="block md:hidden"
      >
        <div className="rounded-[15px] border border-[#ECECEC] p-6 relative">
          {discountPercentage > 0 && (
            <div className="absolute top-0 left-0 font-lato text-[12px] leading-[100%] pt-[7px] pr-[19.468px] pb-[9px] pl-[20px] rounded-[15px_0_20px_0] bg-green-500 text-white">
              -{Math.round(discountPercentage)}%
            </div>
          )}

          <ProductImage src={image} alt={title} />

          <span className="text-[#ADADAD] text-[12px] font-lato leading-[200%]">
            {category}
          </span>

          <h3 className="font-quicksand text-[#253D4E] font-bold leading-[120%]">
            {title}
          </h3>

          <ProductRating rating={rating} />

          <p className="font-lato text-[14px] text-[#B6B6B6] leading-[24px]">
            By <span className="pl-0.5 text-[#3BB77E]">{brand}</span>
          </p>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline gap-x-2.5">
              <ProductPrice price={price} />
              {discountPercentage > 0 && (
                <ProductOldPrice
                  price={price}
                  discountPercentage={discountPercentage}
                />
              )}
            </div>
            <AddToCartBtn />
          </div>
        </div>
      </Link>
      <div className="hidden md:block">
        <div className="rounded-[15px] border border-[#ECECEC] p-6 relative group overflow-hidden">
          {discountPercentage > 0 && (
            <div className="absolute top-0 left-0 font-lato text-[12px] leading-[100%] pt-[7px] pr-[19.468px] pb-[9px] pl-[20px] rounded-[15px_0_20px_0] bg-green-500 text-white">
              -{Math.round(discountPercentage)}%
            </div>
          )}

          <ProductImage src={image} alt={title} />

          <span className="text-[#ADADAD] text-[12px] font-lato leading-[200%]">
            {category}
          </span>

          <h3 className="font-quicksand text-[#253D4E] font-bold leading-[120%]">
            {title}
          </h3>

          <ProductRating rating={rating} />

          <p className="font-lato text-[14px] text-[#B6B6B6] leading-[24px]">
            By <span className="pl-0.5 text-[#3BB77E]">{brand}</span>
          </p>

          <div className="flex items-baseline gap-x-2.5 mt-2">
            <ProductPrice price={price} />
            {discountPercentage > 0 && (
              <ProductOldPrice
                price={price}
                discountPercentage={discountPercentage}
              />
            )}
          </div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <AddToCartBtn />
            <Link href={`/product/${encodeURIComponent(title)}`}>
              <ViewProductBtn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
