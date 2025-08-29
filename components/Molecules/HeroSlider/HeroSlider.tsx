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
    <div className="relative w-full h-[350px] md:h-[450px] bg-green-100 rounded-2xl overflow-hidden mt-[30px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        speed={500}
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
        className="h-full hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderButton ref={prevRef} direction="prev" ariaLabel="Previous slide" />
      <SliderButton ref={nextRef} direction="next" ariaLabel="Next slide" />
    </div>
  );
};

export default HeroSlider;
