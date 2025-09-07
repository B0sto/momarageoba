"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import OfferCard, {
  offerCardProps,
} from "@/components/Atoms/OfferCard/OfferCard";
import PriceIcon from "@/public/PriceIcon";
import HandsIcon from "@/public/HandsIcon";
import DealIcon from "@/public/DealIcon";
import WideAssortmentIcon from "@/public/WideAssortmentIcon";
import BoxIcon from "@/public/BoxIcon";
import SliderButton from "@/components/Atoms/SliderBtn/SliderBtn";

const OfferSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const offers: offerCardProps[] = [
    {
      icon: <PriceIcon />,
      title: "Best prices & offers",
      description: "Orders $50 or more",
    },
    {
      icon: <HandsIcon />,
      title: "Free delivery",
      description: "24/7 amazing services",
    },
    {
      icon: <DealIcon />,
      title: "Great daily deal",
      description: "Get when you sign up",
    },
    {
      icon: <WideAssortmentIcon />,
      title: "Wide assortment",
      description: "Mega Discounts",
    },
    { icon: <BoxIcon />, title: "Easy returns", description: "Within 30 days" },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSlideChange={(swiper) => {
          // Disable prev button if at beginning
          setCanScrollLeft(!swiper.isBeginning);
          // Disable next button if at end
          setCanScrollRight(!swiper.isEnd);
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 32 },
        }}
        className="relative"
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index} className="py-4">
            <OfferCard
              icon={offer.icon}
              title={offer.title}
              description={offer.description}
            />
          </SwiperSlide>
        ))}

        {/* Prev button */}
        <SliderButton
          ref={prevRef}
          direction="prev"
          ariaLabel="Previous slide"
          className={`left-1 bg-transparent ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
          }`}
        />

        {/* Next button */}
        <SliderButton
          ref={nextRef}
          direction="next"
          ariaLabel="Next slide"
          className={`right-1 bg-transparent ${
            !canScrollRight ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
          }`}
        />
      </Swiper>
    </section>
  );
};

export default OfferSection;
