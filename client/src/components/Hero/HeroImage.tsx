import React from "react";
import type { HeroSlide } from "./HeroData";

type Props = {
  slide: HeroSlide;
};

export default function HeroImage({ slide }: Props) {
  return (
      <div className="order-1 flex items-center justify-center xl:justify-start xl:items-start overflow-hidden rounded-b-3xl xl:order-2 xl:rounded-none">
        <picture className="block h-[78%] w-[78%]">
          <source media="(max-width: 767px)" srcSet={slide.imageMobile} />

          <img
            src={slide.image}
            alt="مشاور و روان‌درمانگر"
            className="h-full w-full object-contain object-center"
          />
        </picture>
      </div>
  );
}