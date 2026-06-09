import React from "react";
import type { HeroSlide } from "./HeroData";

type Props = {
  slide: HeroSlide;
};

export default function HeroImage({ slide }: Props) {
  return (
    <div className="order-1 h-[240px] overflow-hidden rounded-b-3xl md:h-[420px] xl:order-2 xl:h-[520px] xl:rounded-none">
      <picture>
        <source media="(max-width: 767px)" srcSet={slide.imageMobile} />

        <img
          src={slide.image}
          alt="مشاور و روان‌درمانگر"
          className="h-full w-full object-cover object-center xl:object-left"
        />
      </picture>
    </div>
  );
}