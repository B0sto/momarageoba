"use client";
import React, { useRef, useState, useEffect } from "react";
import { Category } from "@/lib/services/categoriesData";
import SliderButton from "@/components/Atoms/SliderBtn/SliderBtn";
import FeaturedCard from "@/components/Atoms/FeaturedCard/FeaturedCard";
import SectionHeader from "@/components/Atoms/SectionHeader/SectionHeader";

interface FeaturedListProps {
  categories: Category[];
}

const FeaturedList: React.FC<FeaturedListProps> = ({ categories }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollability();

    const handleResize = () => {
      checkScrollability();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [categories]);

  const scrollLeft = () => {
    if (scrollContainerRef.current && canScrollLeft) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });

      setTimeout(checkScrollability, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && canScrollRight) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });

      setTimeout(checkScrollability, 300);
    }
  };

  const handleScroll = () => {
    checkScrollability();
  };

  return (
    <div>
      {/* Header with title and navigation buttons */}
      <div className="flex justify-between items-center mb-6">
        <SectionHeader header="Featured Categories"/>
        <div className="flex items-center gap-2">
          <div onClick={scrollLeft}>
            <SliderButton
              ref={prevButtonRef}
              direction="prev"
              ariaLabel="Previous category"
              className={`relative top-5 left-0 transform-none ${
                !canScrollLeft
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : ""
              }`}
            />
          </div>
          <div onClick={scrollRight}>
            <SliderButton
              ref={nextButtonRef}
              direction="next"
              ariaLabel="Next category"
              className={`relative top-5 right-0 transform-none ${
                !canScrollRight
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category) => (
            <div
              className="flex-shrink-0 w-[180px] sm:w-auto"
              key={category.slug}
            >
              <FeaturedCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedList;
