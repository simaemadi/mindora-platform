import React from "react";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";
import type { HeroSlide } from "./HeroData";

type Props = {
  slide: HeroSlide;
};

export default function HeroContent({ slide }: Props) {
  return (
    <div className="relative z-10 order-2 space-y-8 text-center xl:order-2 xl:text-right w-full lg:max-w-[520px] items-center justify-center ">
      {/* lg:mr-[200px] */}
      <div className="mx-auto max-w-xl space-y-3 xl:mx-0">
        <p className="text-sm tracking-wide text-mustard-100 md:text-base">
          {slide.eyebrow}
        </p>

        <h1 className="text-[36px] font-extrabold leading-[1.45] text-black-600 md:text-[36px] xl:text-[36px]">
          {slide.title}
        </h1>

        <p className="text-base leading-8 text-slate-700 md:text-lg">
          {slide.description}
        </p>
      </div>

      <HeroActions />
      <HeroStats />
    </div>
  );
}