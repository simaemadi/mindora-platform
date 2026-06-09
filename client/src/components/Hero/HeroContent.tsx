import React from "react";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";
import type { HeroSlide } from "./HeroData";

type Props = {
  slide: HeroSlide;
};

export default function HeroContent({ slide }: Props) {
  return (
    <div className="relative z-10 order-2 space-y-8 text-center xl:order-2 xl:text-right">
      <div className="mx-auto max-w-xl space-y-3 xl:mx-0">
        <p className="text-sm tracking-wide text-[#9B6F24] md:text-base">
          {slide.eyebrow}
        </p>

        <h1 className="text-4xl font-extrabold leading-[1.45] text-[#071827] md:text-5xl xl:text-6xl">
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