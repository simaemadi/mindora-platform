import React from "react";
import HeroSlider from "../components/hero/HeroSlider";
import SupportSections from "../components/home/SupportSections";
import TestimonialsSection from "../components/home/TestimonialsSection";
import AboutSection from "../components/home/AboutSection";

const HomePage = () => {
  return (
<div className="text-4xl font-bold text-red-500">
   <HeroSlider />
   <SupportSections />
   <AboutSection />
   <TestimonialsSection />
</div>
  );
};

export default HomePage;