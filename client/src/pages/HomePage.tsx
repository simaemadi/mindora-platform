import React from "react";
import HeroSlider from "../components/Hero/HeroSlider";
import SupportSections from "../components/Home/SupportSections";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import AboutSection from "../components/Home/AboutSection";

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