import React from "react";
import HeroSlider from "../components/hero/HeroSlider";
import SupportSections from "../components/home/SupportSections";
import TestimonialsSection from "../components/home/TestimonialsSection";
import AboutSection from "../components/home/AboutSection";

const HomePage = () => {
  return (
    // {/* <div className="text-4xl font-bold px-10 py-8">  slider ba fasele*/}
    <main dir="rtl" className="min-h-screen overflow-hidden bg-white-200">
      <HeroSlider />
      <SupportSections />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;