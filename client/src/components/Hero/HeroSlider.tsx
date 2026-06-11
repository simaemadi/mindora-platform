import React from "react";
import { useEffect, useState } from "react";
import { slides } from "./HeroData";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const SLIDER_INTERVAL = 6000;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDER_INTERVAL);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section dir="rtl" className="relative overflow-hidden bg-cream-100 mx-auto">
        <div className="mx-auto grid min-h-[320px] grid-cols-1 items-center gap-10 px-5 py-10 md:px-8 xl:grid-cols-[0.95fr_1.05fr] xl:py-0">
        <HeroImage slide={activeSlide} />
        <HeroContent slide={activeSlide} />
        </div>
    </section>
  );
}