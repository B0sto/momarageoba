import React, { forwardRef } from "react";

interface SliderButtonProps {
  direction: "prev" | "next";
  ariaLabel: string;
}

const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(
  ({ direction, ariaLabel }, ref) => {
    const isPrev = direction === "prev";

    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        className={`group absolute top-1/2 ${
          isPrev ? "left-5" : "right-5"
        } -translate-y-1/2 z-10 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition-colors duration-300 hover:bg-[#3BB77E]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-800 group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isPrev ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
          />
        </svg>
      </button>
    );
  }
);

export default SliderButton;
