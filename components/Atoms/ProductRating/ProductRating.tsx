import { FaStar } from "react-icons/fa";

interface ProductRatingProps {
  rating: number;
}

const ProductRating = ({ rating }: ProductRatingProps) => (
  <div className="flex items-center gap-x-2 sm:gap-x-3">
    <FaStar size={16} className="text-yellow-500" />
    <span className="text-[#B6B6B6] text-[12px] sm:text-[14px] font-lato leading-[24px]">
      ({rating})
    </span>
  </div>
);

export default ProductRating;
