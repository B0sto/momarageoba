"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SliderButton from "@/components/Atoms/SliderBtn/SliderBtn";
import SlideContent from "@/components/Atoms/SlideContent/SlideContent";

const slides = [
  {
    title: "Fresh Vegetables\nBig discount",
    description: "Save up to 50% off on your first order",
    link: "/companies",
    buttonText: "View Companies",
  },
  {
    title: "Organic Fruits\nFresh & Healthy",
    description: "Get the best quality directly from farms",
    link: "/companies",
    buttonText: "View Companies",
  },
];

const HeroSlider: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-green-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        speed={600}
        onSwiper={(swiper) => {
          setTimeout(() => {
            // @ts-expect-error Swiper navigation refs
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error Swiper navigation refs
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }, 0);
        }}
        className="w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderButton
        ref={prevRef}
        direction="prev"
        ariaLabel="Previous slide"
        className="absolute top-1/2 left-1 -translate-y-1/2 z-10 sm:left-4"
      />
      <SliderButton
        ref={nextRef}
        direction="next"
        ariaLabel="Next slide"
        className="absolute top-1/2 right-1 -translate-y-1/2 z-10 sm:right-4"
      />
    </div>
  );
};

export default HeroSlider;
