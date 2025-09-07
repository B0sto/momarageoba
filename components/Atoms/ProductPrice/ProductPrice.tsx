export interface ProductPriceProps {
  price: number;
}

const ProductPrice = ({ price }: ProductPriceProps) => (
  <span className="font-quicksand text-[#3BB77E] text-[16px] sm:text-[18px] font-bold leading-[24px] mt-2 sm:mt-3">
    ${price}
  </span>
);

export default ProductPrice;
